/**
 * QUANTUM AI — Cloudflare Worker Auto-Deploy Script
 *
 * Usage:
 *   1. Create a .env file (see .env.example)
 *   2. Run: node deploy-worker.js
 *   3. Copy the Worker URL printed at the end
 *   4. Paste in QUANTUM AI Settings → API Proxy → Save → Reload
 *
 * .env file format:
 *   CF_API_TOKEN=your_cloudflare_api_token
 *   CF_ACCOUNT_ID=your_cloudflare_account_id
 *   GROQ_KEY_1=gsk_...
 *   GROQ_KEY_2=gsk_...
 *   ... up to GROQ_KEY_15
 */

const fs = require('fs');
const path = require('path');

// ── Load .env file ────────────────────────────────────────────────────────────
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) {
    console.error('❌ .env file not found!');
    console.error('   Create a .env file based on .env.example');
    process.exit(1);
  }
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  const env = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    if (key && rest.length) env[key.trim()] = rest.join('=').trim();
  }
  return env;
}

const env = loadEnv();

const CF_API_TOKEN  = env.CF_API_TOKEN;
const CF_ACCOUNT_ID = env.CF_ACCOUNT_ID;
const WORKER_NAME   = 'quantum-ai-proxy';

// Collect all GROQ keys from .env (GROQ_KEY_1 to GROQ_KEY_20)
const GROQ_KEYS = [];
for (let i = 1; i <= 20; i++) {
  const key = env[`GROQ_KEY_${i}`];
  if (key && key.startsWith('gsk_')) GROQ_KEYS.push(key);
}

// Worker script with auto key rotation
const WORKER_SCRIPT = `export default {
  async fetch(request, env) {
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
    const keys = env.GROQ_KEYS.split(',');
    let body;
    try { body = await request.json(); } catch(e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i].trim();
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key
          },
          body: JSON.stringify(body)
        });
        if (res.status === 429 || res.status === 401) continue;
        const data = await res.text();
        return new Response(data, {
          status: res.status,
          headers: {
            'Content-Type': res.headers.get('Content-Type') || 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch(e) { continue; }
    }
    return new Response(JSON.stringify({
      error: { message: 'All API keys exhausted. Try again later.' }
    }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}`;

async function deploy() {
  console.log('');
  console.log('🚀 QUANTUM AI — Cloudflare Worker Deployment');
  console.log('═'.repeat(52));

  if (!CF_API_TOKEN) { console.error('❌ CF_API_TOKEN missing in .env'); process.exit(1); }
  if (!CF_ACCOUNT_ID) { console.error('❌ CF_ACCOUNT_ID missing in .env'); process.exit(1); }
  if (GROQ_KEYS.length === 0) { console.error('❌ No GROQ_KEY_* found in .env'); process.exit(1); }

  console.log(`✅ Found ${GROQ_KEYS.length} Groq API keys`);

  const BASE    = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}`;
  const HEADERS = { 'Authorization': `Bearer ${CF_API_TOKEN}`, 'Content-Type': 'application/json' };

  // ── Step 1: Deploy Worker Script ────────────────────────────
  console.log(`\n📦 Step 1: Deploying Worker "${WORKER_NAME}"...`);
  const deployRes = await fetch(`${BASE}/workers/scripts/${WORKER_NAME}`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${CF_API_TOKEN}`, 'Content-Type': 'application/javascript' },
    body: WORKER_SCRIPT
  });
  const deployData = await deployRes.json();
  if (!deployData.success) {
    console.error('❌ Worker deploy failed:', JSON.stringify(deployData.errors, null, 2));
    process.exit(1);
  }
  console.log('✅ Worker script deployed!');

  // ── Step 2: Store all keys as one encrypted secret ──────────
  console.log(`\n🔒 Step 2: Storing ${GROQ_KEYS.length} Groq keys as encrypted secret...`);
  const secretRes = await fetch(`${BASE}/workers/scripts/${WORKER_NAME}/secrets`, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify({
      name: 'GROQ_KEYS',
      text: GROQ_KEYS.join(','),
      type: 'secret_text'
    })
  });
  const secretData = await secretRes.json();
  if (!secretData.success) {
    console.error('❌ Secret set failed:', JSON.stringify(secretData.errors, null, 2));
    process.exit(1);
  }
  console.log('✅ All Groq keys stored as encrypted secret!');

  // ── Step 2b: Store other API keys as secrets ─────────────────
  const otherSecrets = [
    { name: 'NEWSDATA_KEY',      key: env.NEWSDATA_KEY },
    { name: 'OPENROUTER_KEY_1',  key: env.OPENROUTER_KEY_1 },
    { name: 'OPENROUTER_KEY_2',  key: env.OPENROUTER_KEY_2 },
    { name: 'MISTRAL_KEY_1',     key: env.MISTRAL_KEY_1 },
    { name: 'MISTRAL_KEY_2',     key: env.MISTRAL_KEY_2 },
    { name: 'HUGGINGFACE_KEY',   key: env.HUGGINGFACE_KEY },
  ].filter(s => s.key && s.key.length > 5);

  if (otherSecrets.length > 0) {
    console.log(`\n🔒 Step 2b: Storing ${otherSecrets.length} other API keys as secrets...`);
    for (const secret of otherSecrets) {
      const res = await fetch(`${BASE}/workers/scripts/${WORKER_NAME}/secrets`, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify({ name: secret.name, text: secret.key, type: 'secret_text' })
      });
      const data = await res.json();
      if (data.success) console.log(`  ✅ ${secret.name} stored`);
      else console.warn(`  ⚠️ ${secret.name} failed:`, data.errors?.[0]?.message);
    }
  }

  // ── Step 3: Get Worker URL ───────────────────────────────────
  console.log('\n🌐 Step 3: Getting Worker URL...');
  const subRes  = await fetch(`${BASE}/workers/subdomain`, { headers: HEADERS });
  const subData = await subRes.json();
  const sub     = subData.result?.subdomain;
  const workerUrl = sub
    ? `https://${WORKER_NAME}.${sub}.workers.dev`
    : `https://${WORKER_NAME}.workers.dev`;

  // ── Done! ────────────────────────────────────────────────────
  console.log('\n' + '═'.repeat(52));
  console.log('🎉 DEPLOYMENT COMPLETE!');
  console.log('═'.repeat(52));
  console.log(`\n✅ Worker Name : ${WORKER_NAME}`);
  console.log(`✅ Worker URL  : ${workerUrl}`);
  console.log(`✅ Groq Keys   : ${GROQ_KEYS.length} keys (encrypted, auto-rotation)`);
  console.log(`✅ Other Keys  : NewsData, OpenRouter x2, Mistral x2, HuggingFace`);
  console.log(`✅ Rotation    : Auto on 429/401 errors`);
  console.log('\n📋 NEXT STEPS:');
  console.log('1. Copy the Worker URL above');
  console.log('2. Open QUANTUM AI → Settings ⚙️');
  console.log('3. Scroll to "API Proxy (Cloudflare Worker)"');
  console.log('4. Paste the URL → Click Save → Reload');
  console.log('\n🔒 All API keys are now 100% hidden from browser!');
  console.log('═'.repeat(52));
}

deploy().catch(err => {
  console.error('❌ Unexpected error:', err.message);
  process.exit(1);
});
