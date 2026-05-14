# AGENTS.md

## Cursor Cloud specific instructions

### Overview

QUANTUM AI is a static single-page AI chat application. The entire frontend lives in `index.html` (~4700 lines of inline HTML/CSS/JS) with no build step, no package manager, and no server-side code. A secondary page `interview.html` provides an interview assistant. All external libraries are loaded from CDN.

### Running the app

Serve the project root with any static HTTP server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html` (main app) or `http://localhost:8000/interview.html` (interview assistant).

### Key caveats

- **No `file://` protocol**: The app will not work if opened directly from the filesystem due to browser security restrictions. Always use an HTTP server.
- **Hardcoded API keys**: The app ships with Groq API keys embedded in `index.html` (obfuscated via `_k()` helper). These keys have automatic rotation. No external API key configuration is needed for the app to function.
- **No linter / no tests / no build**: There is no `package.json`, no test framework, no linter configuration, and no build step. Validation is manual (load the page, interact with the chat).
- **Cloudflare Worker** (`deploy-worker.js`): Optional Node.js script for deploying an API proxy. Requires a `.env` file with Cloudflare and Groq credentials (see `.env.example`). Not needed for local development.
- **All state is browser-local**: Persistent data (memory, chat history) is stored in IndexedDB in the browser. There is no database or backend.
