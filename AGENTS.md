# AGENTS.md

## Cursor Cloud specific instructions

### Overview

QUANTUM AI is a purely static, single-file web application (`index.html`). There is no build step, no package manager, no framework, and no server-side code. All JS/CSS dependencies are loaded via CDN.

### Running the app

Serve the workspace root with any static HTTP server:

```
python3 -m http.server 8000 --directory /workspace
```

Then open `http://localhost:8000` in a browser. The app will not work via the `file://` protocol.

### Key notes

- **No tests exist** in this repository. There is no test framework or test runner.
- **No linter** is configured. There is no ESLint, Prettier, or similar tooling.
- **No build step** is needed. The app runs directly from `index.html`.
- **API keys** for Groq are hardcoded (obfuscated) inside `index.html`. The app works out-of-the-box if those keys are valid.
- `interview.html` is a secondary voice-based Q&A page (also static).
- `deploy-worker.js` is a standalone Node.js script for deploying a Cloudflare Worker API proxy; it requires Cloudflare credentials in a `.env` file and is not needed for local development.
- All persistent data (chat history, memories) is stored in browser IndexedDB — no external database required.
