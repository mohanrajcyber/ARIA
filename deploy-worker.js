/**
 * QUANTUM AI — Cloudflare Worker Auto-Deploy Script
 * 
 * Usage:
 *   1. Fill in your keys below
 *   2. Run: node deploy-worker.js
 *   3. Copy the Worker URL printed at the end
 *   4. Paste in QUANTUM AI Settings → API Proxy
 */

// ─── FILL THESE IN ────────────────────────────────────────
const CF_API_TOKEN   = 'YOUR_CLOUDFLARE_API_TOKEN';   // from dash.cloudflare.com/profile/api-tokens
const CF_ACCOUNT_ID  = 'YOUR_CLOUDFLARE_ACCOUNT_ID';  // from dash.cloudflare.com (right sidebar)
const GROQ_API_KEY   = 'YOUR_GROQ_API_KEY';           // from console.groq.com
const WORKER_NAME    = 'quantum-ai-proxy';             // you can change this name
// ──────────────────────────────────────────────────────────

const WORKER_SCRIPT = `
export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();

      const response = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + env.GROQ_API_KEY
          },
          body: JSON.stringify(body)
        }
      );

      const data = await response.text();

      return new Response(data, {
        status: response.status,
        headers: {
          'Content-Type': response.headers.get('Content-Type') || 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }
  }
}
`;

async function deploy() {
  console.log('🚀 QUANTUM AI — Cloudflare Worker Deployment');
  console.log('─'.repeat(50));

  // Validate inputs
  if (CF_API_TOKEN === 'YOUR_CLOUDFLARE_API_TOKEN') {
    console.error('❌ Please fill in CF_API_TOKEN in deploy-worker.js');
    process.exit(1);
  }
  if (CF_ACCOUNT_ID === 'YOUR_CLOUDFLARE_ACCOUNT_ID') {
    console.error('❌ Please fill in CF_ACCOUNT_ID in deploy-worker.js');
    process.exit(1);
  }
  if (GROQ_API_KEY === 'YOUR_GROQ_API_KEY') {
    console.error('❌ Please fill in GROQ_API_KEY in deploy-worker.js');
    process.exit(1);
  }

  const BASE = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}`;
  const HEADERS = {
    'Authorization': `Bearer ${CF_API_TOKEN}`,
    'Content-Type': 'application/json'
  };

  // ── Step 1: Deploy Worker Script ──────────────────────────
  console.log(`\n📦 Step 1: Deploying Worker "${WORKER_NAME}"...`);

  const deployRes = await fetch(
    `${BASE}/workers/scripts/${WORKER_NAME}`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${CF_API_TOKEN}`,
        'Content-Type': 'application/javascript'
      },
      body: WORKER_SCRIPT
    }
  );

  const deployData = await deployRes.json();

  if (!deployData.success) {
    console.error('❌ Worker deploy failed:', JSON.stringify(deployData.errors, null, 2));
    process.exit(1);
  }

  console.log('✅ Worker script deployed successfully!');

  // ── Step 2: Set GROQ_API_KEY as Secret ────────────────────
  console.log('\n🔒 Step 2: Setting GROQ_API_KEY as encrypted secret...');

  const secretRes = await fetch(
    `${BASE}/workers/scripts/${WORKER_NAME}/secrets`,
    {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({
        name: 'GROQ_API_KEY',
        text: GROQ_API_KEY,
        type: 'secret_text'
      })
    }
  );

  const secretData = await secretRes.json();

  if (!secretData.success) {
    console.error('❌ Secret set failed:', JSON.stringify(secretData.errors, null, 2));
    process.exit(1);
  }

  console.log('✅ GROQ_API_KEY stored as encrypted secret!');

  // ── Step 3: Get Worker URL ─────────────────────────────────
  console.log('\n🌐 Step 3: Getting Worker URL...');

  // Get subdomain
  const subdomainRes = await fetch(
    `${BASE}/workers/subdomain`,
    { headers: HEADERS }
  );
  const subdomainData = await subdomainRes.json();
  const subdomain = subdomainData.result?.subdomain;

  const workerUrl = subdomain
    ? `https://${WORKER_NAME}.${subdomain}.workers.dev`
    : `https://${WORKER_NAME}.workers.dev`;

  // ── Done! ──────────────────────────────────────────────────
  console.log('\n' + '═'.repeat(50));
  console.log('🎉 DEPLOYMENT COMPLETE!');
  console.log('═'.repeat(50));
  console.log(`\n✅ Worker Name  : ${WORKER_NAME}`);
  console.log(`✅ Worker URL   : ${workerUrl}`);
  console.log(`✅ API Key      : Stored as encrypted secret (hidden)`);
  console.log('\n📋 NEXT STEPS:');
  console.log('1. Copy the Worker URL above');
  console.log('2. Open QUANTUM AI → Settings ⚙️');
  console.log('3. Scroll to "API Proxy (Cloudflare Worker)"');
  console.log('4. Paste the URL → Click Save');
  console.log('5. Reload the page');
  console.log('\n🔒 Your Groq API key is now 100% hidden from browser!');
  console.log('═'.repeat(50));
}

deploy().catch(err => {
  console.error('❌ Unexpected error:', err.message);
  process.exit(1);
});
