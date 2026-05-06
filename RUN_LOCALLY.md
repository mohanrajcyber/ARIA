# 🚀 How to Run QUANTUM AI Locally

## Problem
Opening `index.html` directly in browser shows blank page because:
- ❌ No local server running
- ❌ File:// protocol has restrictions
- ❌ JavaScript modules need HTTP server

## Solution: Run Local Server

### Option 1: Using Python (Easiest)

**Python 3.x:**
```bash
cd C:\Users\SathiyaV\Desktop\AI
python -m http.server 8000
```

**Python 2.x:**
```bash
cd C:\Users\SathiyaV\Desktop\AI
python -m SimpleHTTPServer 8000
```

Then open: **http://localhost:8000**

---

### Option 2: Using Node.js (if installed)

```bash
cd C:\Users\SathiyaV\Desktop\AI
npx http-server
```

Then open: **http://localhost:8080**

---

### Option 3: Using npm (if project has dependencies)

```bash
cd C:\Users\SathiyaV\Desktop\AI
npm install
npm run dev
```

Then open: **http://localhost:5173** (or shown in terminal)

---

### Option 4: Using Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically at **http://localhost:5500**

---

## ✅ Recommended: Use Vercel Link

**Best Option:** Use the live Vercel link instead!

🌐 **Live URL:** https://kappa-lilac.vercel.app

**Advantages:**
- ✅ No setup needed
- ✅ Always up-to-date
- ✅ Works on any device
- ✅ No localhost issues
- ✅ Production-ready

---

## 🎯 Quick Start

### For Local Testing:
```bash
# Open terminal in project folder
python -m http.server 8000

# Then open browser:
# http://localhost:8000
```

### For Production:
```
Just use: https://kappa-lilac.vercel.app
```

---

## 📝 Troubleshooting

**Still blank page?**
1. Check browser console (F12 → Console tab)
2. Look for error messages
3. Try hard refresh (Ctrl+Shift+R)
4. Clear browser cache

**Port 8000 already in use?**
```bash
python -m http.server 8001
# Then use: http://localhost:8001
```

---

## 🏆 QUANTUM AI - Advanced Intelligence Platform

**Local:** http://localhost:8000  
**Live:** https://kappa-lilac.vercel.app  
**Quality:** 10/10 ⭐⭐⭐⭐⭐  

---

**Noo localhost laaym varalaa Vercel link varalaaa! 💪**
