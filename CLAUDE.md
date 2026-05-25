@AGENTS.md

## 1. Project Overview

This is **codeMindAI** — a Next.js 16 learning resource hub for AI and Web Development topics. It presents structured course content (classes) for subjects like Claude Code, JavaScript, Python, etc., with a sidebar-driven navigation and per-lesson pages.

---

## 2. Architecture

``` 
src/
├── app/
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout (fonts, globals)
│   ├── globals.css               # Global styles
│   └── blog/
│       ├── layout.tsx            # Blog layout: Navbar + Sidebar + main
│       ├── page.tsx              # Blog index
│       └── claude-code/
│           ├── page.tsx          # Claude Code course index
│           └── class-N/
│               └── page.tsx      # Individual lesson pages
├── components/
│   ├── Navbar.tsx                # Top navigation bar
│   ├── Sidebar.tsx               # Left sidebar (topics + lesson sub-nav)
│   ├── LessonLayout.tsx          # Lesson wrapper with breadcrumb + prev/next
│   ├── Hero.tsx                  # Landing page hero section
│   ├── Footer.tsx                # Site footer
│   └── TechBar.tsx               # Tech stack marquee bar
└── data/
    └── claude-code-lessons.ts    # Lesson metadata (slug, title, label)
```

---

## 3. Code Style

- TypeScript everywhere — no `any`, no plain `.js` files in `src/`
- Functional components only — no class components
- Tailwind v4 for all styling — no inline styles, no CSS modules
- Brand colour is `#cc785c` — use it for accents, active states, highlights
- Dark theme throughout — background `#1e2235`, sidebar `#1a2035`, code blocks `#0d1117`
- Keep components small and focused — one responsibility per file
- No unnecessary comments — self-documenting names preferred

---

## 4. Preferred Libraries & Tools

| Library | Purpose |
|---|---|
| Next.js 16 | Framework (App Router) |
| React 19 | UI |
| Tailwind v4 | Styling |
| react-icons | Icons (use `SiX` from `react-icons/si`) |
| TypeScript 5 | Type safety |

**Do NOT introduce:** styled-components, CSS modules, Framer Motion, Redux, or any animation library unless explicitly asked.

---

## 5. Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npx tsc --noEmit

# Build for production
npm run build

# Start production server
npm start
```

---

## 6. Critical Rules

- **Never touch `src/app/blog/claude-code/.next/`** — these are build artifacts accidentally committed; ignore them.
- **Do not change the brand colour `#cc785c`** unless explicitly asked.
- **Sidebar sub-nav is automatic** — adding a new lesson to `claude-code-lessons.ts` is all that's needed; the sidebar picks it up automatically.
- **LessonLayout handles prev/next** — do not add manual navigation links inside lesson pages.
- **All lesson pages must pass the correct `slug`** to `<LessonLayout slug="class-N">` matching the entry in `claude-code-lessons.ts`.
- **react-icons**: always verify an icon exists before using it (e.g. `SiCss3` does not exist — use `SiCss`).

---

## 7. Development Roadmap

### Claude Code Course

| Class | Title | Status |
|---|---|---|
| class-1 | Introduction | Done |
| class-2 | Installation & Setup | Done |
| class-3 | Slash Commands | Done |
| class-4 | Making Code Changes | Done |
| class-5 | Context Window Management | Done |
| class-6 | CLAUDE.md & Auto Memory | Done |
| class-7 | Spec-Driven Development | Done |
| class-8 | Plan Mode in Claude Code | Done |

### Other Topics

| Topic | Status |
|---|---|
| JavaScript | Pending |
| Python | Pending |
| React | Pending |
| TypeScript | Pending |
