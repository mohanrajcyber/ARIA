# 🚀 QUANTUM AI — Complete Features Guide

**Version:** Latest (May 2026)  
**Deployed:** https://kappa-lilac.vercel.app  
**Built by:** Mohanraj, Cybersecurity Professional  
**For:** Velmurugan Sir, DGM – CS Division, NLCIL  

---

## 📋 TABLE OF CONTENTS

1. [Core Chat Features](#1-core-chat-features)
2. [Slash Commands](#2-slash-commands)
3. [File Upload & Analysis](#3-file-upload--analysis)
4. [AI Memory Engine](#4-ai-memory-engine)
5. [Ctrl+K Command Palette](#5-ctrlk-command-palette)
6. [Message Actions](#6-message-actions)
7. [Voice & Audio](#7-voice--audio)
8. [Chat Organization](#8-chat-organization)
9. [Export & Share](#9-export--share)
10. [NLCIL Specific Features](#10-nlcil-specific-features)
11. [AI Unique Features](#11-ai-unique-features)
12. [Settings & Customization](#12-settings--customization)
13. [Security & Proxy](#13-security--proxy)
14. [PWA — Install as App](#14-pwa--install-as-app)
15. [Keyboard Shortcuts](#15-keyboard-shortcuts)

---

## 1. CORE CHAT FEATURES

### ✅ How to Chat
- Type your message in the input box at the bottom
- Press **Enter** to send
- Press **Shift+Enter** for a new line

### ✅ Stop Generation
- While AI is responding, a **red Stop button** appears
- Click it to stop the response immediately

### ✅ Multi-Model AI Support
- QUANTUM AI supports multiple AI models
- Default: **Groq (Llama 3.3 70B)** — fastest
- Also supports: OpenAI GPT-4, Claude, Gemini
- Switch models in **Settings ⚙️**

### ✅ Streaming Responses
- AI types responses word-by-word in real time
- Like ChatGPT — no waiting for full response

### ✅ Dark / Light Mode
- Click **🌙 Dark Mode** in sidebar footer
- Or use **Ctrl+K** → "Dark Mode"

### ✅ New Chat
- Click **+ New Chat** in sidebar
- Or use **Ctrl+K** → "New Chat"

---

## 2. SLASH COMMANDS

Type these commands at the start of your message to activate special AI modes.

### 📄 NLCIL Official Commands
| Command | What it does |
|---------|-------------|
| `/letter` | Draft an official letter from DGM CS Division |
| `/report` | Generate a formal technical report |
| `/minutes` | Prepare meeting minutes |
| `/advisory` | Draft a cybersecurity advisory notice |
| `/abt` | Generate ABT (Availability Based Tariff) report |
| `/do` | Draft a Demi-Official (DO) letter |
| `/rti` | Draft an RTI response |
| `/mom` | Structure raw notes into formal MOM |
| `/coal` | Coal dispatch & production report |
| `/audit` | Energy audit checklist |
| `/grievance` | Employee grievance response |

**Example:**
```
/letter Requesting approval for cybersecurity audit of CS Division servers
```

### 🎯 AI Feature Commands
| Command | What it does |
|---------|-------------|
| `/debate` | AI argues FOR then AGAINST then gives verdict |
| `/roast` | Brutal honest feedback with score/10 |
| `/fix` | Improves your poorly written prompt |
| `/executive` | Executive summary: 3 points, 2 risks, 1 rec |
| `/devil` | Devil's advocate — strongest counter-arguments |
| `/thought` | Organizes your stream-of-consciousness thinking |
| `/error` | Explains error + what concept you're missing |
| `/wrong` | Finds all weaknesses in your idea/plan |
| `/explain5` | Explains like you're 5 years old |
| `/explainexpert` | Expert-level deep explanation |

**Example:**
```
/debate AI will replace most jobs in the next 10 years
```
```
/roast [paste your report or writing here]
```
```
/executive [paste your long document here]
```

### 🛠️ General Commands
| Command | What it does |
|---------|-------------|
| `/summarize` | Concise summary |
| `/translate` | Translate to English |
| `/improve` | Improve writing quality |
| `/explain` | Simple explanation |
| `/debug` | Debug code |
| `/optimize` | Optimize code |

---

## 3. FILE UPLOAD & ANALYSIS

### ✅ Supported File Types
- **PDF** — Full text extraction (multi-page)
- **TXT** — Plain text files
- **CSV** — Data files
- **DOC/DOCX** — Word documents
- **XLS/XLSX** — Excel files

### ✅ How to Upload
1. Click the **📎 Upload icon** (bottom left of input)
2. Select your file
3. File loads and AI is ready to answer questions about it

### ✅ File Memory
- Uploaded files are **remembered** across sessions
- See them in **📁 File Memory** section in sidebar
- Click any file to reload it into context
- AI can answer questions about previously uploaded files

### ✅ What you can do with files
```
Summarize this document
What are the key action items?
Extract all dates and deadlines
Compare this with last month's report
Generate a formal report based on this data
```

---

## 4. AI MEMORY ENGINE

### 🧠 What is it?
QUANTUM AI **automatically learns facts about you** from every conversation and remembers them in future chats.

### ✅ How it works
- After every 3 messages, AI extracts important facts in the background
- Facts stored in **IndexedDB** (50MB+ storage, permanent)
- Every new chat automatically gets your memory context injected
- AI knows your preferences, projects, style without you repeating

### ✅ What AI remembers
- Your writing preferences
- Ongoing projects
- Technical expertise level
- Frequently discussed topics
- Important decisions made

### ✅ How to use
```
Use the same ABT format as before
Draft this in my usual style
Continue from where we left off on the cybersecurity project
```

### ✅ View & Manage Memories
- **Ctrl+K** → "View My Memories" — see all stored facts
- **Ctrl+K** → "Clear Memories" — forget everything
- Memories persist across browser sessions

---

## 5. CTRL+K COMMAND PALETTE

### ⌨️ How to open
- Press **Ctrl+K** (Windows/Linux)
- Press **Cmd+K** (Mac)
- Press **ESC** to close

### ✅ What you can do
- Search all commands by typing
- Switch between features instantly
- Run slash commands without typing them
- Access settings, memories, tools

### 📋 Available Commands in Palette

**Chat:**
- ✨ New Chat
- 🌙 Dark/Light Mode
- ⚙️ Settings

**Memory:**
- 🧠 View My Memories
- 🗑️ Clear Memories

**Tools:**
- 📊 Summarize Conversation
- 📋 Meeting Minutes Structurer

**Features:**
- ⚔️ Start Debate
- 🔥 Roast My Work
- 🔧 Fix My Prompt
- 👔 Executive Summary
- 😈 Devil's Advocate
- 💭 Thought Companion
- 🐛 Explain My Error
- ⚠️ Why Am I Wrong?

**NLCIL:**
- 📄 Draft Letter
- 📋 Technical Report
- 📝 Meeting Minutes
- ⚡ ABT Report

---

## 6. MESSAGE ACTIONS

### ✅ On every AI message (hover to see)
| Button | Action |
|--------|--------|
| 📋 Copy | Copy message text |
| 🔄 Regenerate | Get a new response |
| 🔊 Read Aloud | Text-to-Speech |
| 🎨 Remix | Transform response style |
| 🎚️ Explain Level | Re-explain at different level |
| 🌳 Branch | Branch conversation from this point |
| 📌 Pin | Pin important message |
| 👍 / 👎 | React to message |

### 🎨 Response Remix Options
Click **🎨** on any AI response to remix it as:
- 😂 **Funnier** — Add humor and wit
- 👔 **More Formal** — Professional/official tone
- 📖 **As a Story** — Narrative format
- • **Bullet Points** — Scannable list format
- 🐦 **As Tweets** — Twitter-style with emojis
- 👶 **ELI5** — Explain Like I'm 5

### 🎚️ Explain Level Options
Click **🎚️** on any AI response to re-explain for:
- 👶 5-Year Old
- 🧒 School Kid
- 🎓 College Student
- 💼 Professional
- 🔬 Domain Expert

### ✅ On every User message (hover)
- ✏️ **Edit** — Edit your message and regenerate
- 📋 **Copy** — Copy your message
- 🌳 **Branch** — Branch from this point

---

## 7. VOICE & AUDIO

### 🎤 Voice Input
1. Click the **🎤 Microphone** button in input area
2. Speak your message
3. Text appears automatically
4. Press Enter to send

### 🔊 Text-to-Speech
- Hover any AI message → click **🔊 speaker icon**
- AI reads the response aloud
- Uses your device's built-in TTS

---

## 8. CHAT ORGANIZATION

### 📁 Folder Organization
- Hover any chat in sidebar → click **📁 folder icon**
- Choose which folder to move it to
- Create folders: **Ctrl+K** → type "folder" or use sidebar

### 🔍 Search in Conversation
- Click **🔍 Search** in top bar (desktop)
- Or **Ctrl+K** → search
- Searches through all messages in current chat

### 📌 Pinned Messages
- Hover AI message → click **📌 Pin**
- Pinned messages appear at top of sidebar
- Click to jump to that message

### 💬 Conversation Branching
- Hover any message → click **🌳 Branch**
- Creates a new conversation from that point
- Explore different directions without losing original

---

## 9. EXPORT & SHARE

### 📤 Export Chat
- **Top bar** → **⬇️ Download** → Export as TXT
- **Top bar** → **📄 File icon** → Export as HTML
- TXT: Plain text format
- HTML: Formatted with styling, opens in browser

### 🖨️ Print / PDF
- **Top bar** → **🖨️ Print icon**
- Opens print dialog
- Save as PDF using browser's print-to-PDF

### 🔗 Share Chat via URL
- **Top bar** → **🔗 Share Chat**
- Generates a shareable URL
- URL copied to clipboard automatically
- Anyone with the URL can view the conversation
- Works on same browser/device network

---

## 10. NLCIL SPECIFIC FEATURES

### 📋 Meeting Minutes Structurer
- **Top bar** → **📋 icon** (desktop)
- Or **Ctrl+K** → "Meeting Minutes"
- Paste raw meeting notes (rough, messy, incomplete)
- AI structures into formal MOM with:
  - Date, Venue, Attendees
  - Agenda Items
  - Key Decisions
  - Action Items Table (with responsible person & deadline)
  - Next Meeting

**Example input:**
```
Met today with IT team. Discussed server upgrade. 
Rajan will check budget by Friday. 
Kumar to prepare vendor list next week.
Next meeting 15th June.
```

### ⚡ ABT Report Generator
```
/abt Generate report for May 2026. Unit availability was 85%. 
DSM penalty of ₹2.3 lakhs. Scheduled outage on 12th May.
```

### 📄 Official Letter Templates
```
/letter Requesting sanction for procurement of 
cybersecurity software worth ₹5 lakhs for CS Division
```

### 📝 DO Letter
```
/do Additional Principal Secretary, Ministry of Power 
regarding delay in coal supply affecting generation targets
```

### 🔒 Cybersecurity Advisory
```
/advisory Phishing attacks targeting NLCIL email accounts. 
Employees should not click suspicious links.
```

### 📊 Interview Mode
- Sidebar → **Interview Mode** (or Settings)
- Opens a popup window for interview practice
- Separate from main chat
- Useful for preparing for technical interviews

---

## 11. AI UNIQUE FEATURES

### ⚔️ AI Debate Partner
Type `/debate` followed by any topic:
```
/debate Nuclear energy is the best solution for India's power needs
```
AI will:
1. ✅ Argue strongly FOR the topic
2. ❌ Argue strongly AGAINST the topic
3. ⚖️ Give a neutral balanced verdict

### 🔥 Roast My Work
Paste your work and type `/roast`:
```
/roast [paste your report, email, code, or plan here]
```
AI gives:
- 🔥 THE ROAST (brutal criticisms)
- 💪 WHAT WORKS (genuine strengths)
- 🎯 HOW TO FIX IT (specific improvements)
- ⭐ SCORE: X/10

### 💭 Thought Companion
```
/thought I'm thinking about switching departments but also 
worried about salary and my team depends on me but I'm 
not growing here and maybe I should just...
```
AI organizes your messy thoughts and gives clarity.

### 😈 Devil's Advocate
```
/devil I want to implement a new cybersecurity policy 
requiring all staff to change passwords every 30 days
```
AI gives the strongest possible counter-arguments to stress-test your thinking.

### 👔 Executive Summary
```
/executive [paste long document or report]
```
Returns: **3 Key Points | 2 Risks | 1 Recommendation**

### 🐛 Explain My Error
```
/error TypeError: Cannot read property 'map' of undefined
at line 45 in dashboard.js
```
AI explains: what caused it, what concept you're missing, how to fix it, mini-lesson.

### ⚠️ Why Am I Wrong?
```
/wrong Our plan is to migrate all servers to cloud by Q3 
and decommission on-premise infrastructure completely
```
AI attacks from auditor, finance, safety, and operational perspectives.

---

## 12. SETTINGS & CUSTOMIZATION

### ⚙️ How to open Settings
- Sidebar → **Settings**
- Or **Ctrl+K** → "Settings"

### 🌐 Response Language
- **English** (default)
- **Tamil** — AI responds in Tamil

### 🎨 Font Size
- Small / Medium / Large

### 📋 Response Format
- **Formal** — Professional structured responses
- **Bullets** — Bullet points and lists
- **Summary** — Concise and brief

### 🚀 Feature Toggles
- 🔔 Notification Sound
- 📊 Word Count & Reading Time
- ⌨️ Slash Commands
- 📱 Hide Welcome on Mobile

### 🔌 Plugins
- 🌐 Web Search — AI searches internet when needed
- 🧮 Calculator — Solves math expressions
- 🌤️ Weather — Gets weather information

---

## 13. SECURITY & PROXY

### 🔒 Cloudflare Worker API Proxy
**Why use it?** API keys are currently in the browser (anyone can see in DevTools). A Cloudflare Worker hides them server-side.

**Setup (5 minutes, FREE):**

1. Go to [cloudflare.com](https://cloudflare.com) → Sign up free
2. Go to **Workers & Pages** → Create Worker
3. Paste this code:

```javascript
export default {
  async fetch(req) {
    const body = await req.json();
    const res = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_GROQ_API_KEY'
        },
        body: JSON.stringify(body)
      }
    );
    return new Response(res.body, {
      headers: {
        ...Object.fromEntries(res.headers),
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
```

4. Replace `YOUR_GROQ_API_KEY` with your actual key
5. Deploy → Copy the Worker URL (e.g., `https://quantum-proxy.yourname.workers.dev`)
6. In QUANTUM AI → **Settings** → **API Proxy** → Paste URL → Save
7. Reload the page

**Result:** API key is now hidden in Cloudflare, not in browser!

---

## 14. PWA — INSTALL AS APP

### 📱 Install on Mobile (Android)
1. Open QUANTUM AI in Chrome
2. Tap the **3-dot menu** (top right)
3. Tap **"Add to Home Screen"**
4. Tap **"Install"**
5. QUANTUM AI icon appears on home screen
6. Opens like a native app (no browser bar)

### 💻 Install on Desktop (Chrome/Edge)
1. Open QUANTUM AI
2. Look for **install icon** in address bar (right side)
3. Click it → **"Install"**
4. Or: 3-dot menu → **"Install QUANTUM AI"**

### ✅ PWA Benefits
- Works offline (cached)
- Faster loading
- No browser address bar
- Feels like native app
- Push notifications (when enabled)

---

## 15. KEYBOARD SHORTCUTS

| Shortcut | Action |
|----------|--------|
| **Ctrl+K** | Open Command Palette |
| **Cmd+K** | Open Command Palette (Mac) |
| **ESC** | Close any modal / Command Palette |
| **Enter** | Send message |
| **Shift+Enter** | New line in message |

---

## 📊 FEATURE SUMMARY

| Category | Count |
|----------|-------|
| Core Chat Features | 8 |
| Slash Commands | 27 |
| File Types Supported | 5 |
| Message Actions | 10 |
| Export Formats | 3 |
| NLCIL Templates | 11 |
| AI Unique Features | 8 |
| Settings Options | 12 |
| **TOTAL FEATURES** | **80+** |

---

## 🏆 RATINGS

| AI | Rating | Date |
|----|--------|------|
| ChatGPT | **9.2 / 10** | May 2026 |
| Claude | **8.4 / 10** | May 2026 |

> *"This is legitimately becoming an Enterprise-grade AI workstation. Most AI startups don't even have half this."* — ChatGPT

> *"1 month-la ithellam panni irukkiya, seriously respect da."* — Claude

---

## 🔗 LINKS

- **Live App:** https://kappa-lilac.vercel.app
- **GitHub:** https://github.com/mohanrajcyber/ARIA
- **Built with:** Groq API, Vanilla JS, Tailwind CSS, Vercel

---

*Last updated: May 2026 | QUANTUM AI v2.0*
