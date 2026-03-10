# ⚔️ DSAQuest — Gamified DSA Learning

A personal gamified web app for tracking C# + DSA learning progress. Built with React + Firebase, deployable to GitHub Pages.

---

## 🎮 Features

- **Dashboard** — XP level system, progress stats, 20-min rule reference
- **Problem Tracker** — All 30+ LeetCode problems across 4 weeks, checkable with +15 XP each
- **Worksheets** — 8 interactive worksheets with checklists and code scratch spaces
- **Plan** — Full Month 1 study plan with daily schedule and pattern reference
- **Career** — Roadmap, target companies, STAR method, RAF Master's prep
- **Firebase Firestore** — Progress saved to cloud, falls back to localStorage offline

---

## 🚀 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project (e.g., `dsa-quest`)
3. Enable **Firestore Database** (start in test mode for personal use)
4. Go to **Project Settings → Web app → Config**
5. Copy your config into `src/firebase.js`:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

### 3. Run locally

```bash
npm start
```

---

## 📦 Deploy to GitHub Pages

### First time setup

1. Update `package.json` homepage to your GitHub URL:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/dsa-quest"
```

2. Install gh-pages if not already:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

This will build and push to the `gh-pages` branch automatically.

### Subsequent deploys
```bash
npm run deploy
```

---

## 🗂️ Project Structure

```
src/
├── components/
│   └── Nav.jsx              # Sticky nav with XP pill + mobile menu
├── data/
│   └── plan.js              # All DSA problems, worksheets, career data
├── hooks/
│   └── useProgress.js       # Firebase + localStorage progress sync
├── pages/
│   ├── Dashboard.jsx        # Home with XP system, stats, quick refs
│   ├── Plan.jsx             # Full month plan with week breakdown
│   ├── Problems.jsx         # Per-week LeetCode tracker
│   ├── Worksheets.jsx       # 8 interactive worksheets
│   └── Career.jsx           # Career roadmap + targets
├── styles/
│   └── global.css           # CSS variables, fonts, base styles
├── firebase.js              # Firebase config (fill in your values!)
├── App.jsx                  # Router + progress state
└── index.js                 # Entry point
```

---

## 🎨 Design

- **Palette:** Pastel lavender, peach, mint, sky blue
- **Fonts:** Sora (body) + JetBrains Mono (code)
- **Mobile friendly:** Responsive grid, sticky nav with hamburger menu
- **Offline:** Falls back to localStorage if Firebase is unavailable

---

## 📊 XP System

| Milestone | XP |
|---|---|
| Each LeetCode problem | +15 XP |
| Level 2 (Array Apprentice) | 100 XP |
| Level 3 (HashMap Hero) | 250 XP |
| Level 4 (Pointer Pro) | 400 XP |
| Level 5 (DSA Master) | 600 XP |
