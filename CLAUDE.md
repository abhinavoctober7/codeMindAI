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

### Prompt Engineering Course

| Class | Title | Status |
|---|---|---|
| class-1 | How LLMs Work & What Prompt Engineering Is | Done |
| class-2 | Model Configuration & Sampling Parameters | Done |
| class-3 | Shot-Based Prompting — Zero, One & Few-Shot | Done |
| class-4 | System Instructions — Rules That Shape the AI | Done |
| class-5 | Delimiters & XML Tags — Structuring the Wall of Text | Done |
| class-6 | Chain-of-Thought — Teaching Models to Reason Step by Step | Done |
| class-7 | Self-Consistency — Sampling Many Paths, Voting on One Answer | Done |
| class-8 | Plan-and-Solve — Planning Before Answering | Done |
| class-9 | Chain of Draft — Reasoning in Shorthand | Done |
| class-10 | System 2 Attention — Cleaning the Prompt Before Answering | Done |
| class-11 | Prompt Chaining — One Prompt, One Task, One Objective | Done |
| class-12 | Meta Prompting — The LLM as Its Own Project Manager | Done |
| class-13 | Multimodal Prompting & Chain of Verification | Done |
| class-14 | Retrieval Augmented Generation (RAG) & Query Optimization | Done |
| class-15 | Image Generation Prompting — Think Like a Director | Done |
| class-16 | Video Generation — Timestamp Prompting & Character Consistency | Done |
| class-17 | Adversarial Prompting — Attacks, Jailbreaks & Defenses | Done |
| class-18 | Prompt Management — The Prompt Lifecycle & Versioning | Done |
| class-19 | The Planning Phase — Requirements & the Prompt Blueprint | Done |
| class-20 | Prompt Development — Testing, Datasets & Versioning | Done |
| class-21 | LLM as a Judge & the DeepEval Framework | Done |

### LangChain Course

| Class | Title | Status |
|---|---|---|
| class-1 | What Is LangChain & Why It Exists | Done |
| class-2 | The Six Core Components of LangChain | Done |
| class-3 | The Models Component — Language & Embedding Models in Code | Done |
| class-4 | The Prompts Component — Templates, Messages & Chat History | Done |
| class-5 | Structured Output — with_structured_output, TypedDict, Pydantic & JSON Schema | Done |
| class-6 | Output Parsers — Str, JSON, Structured & Pydantic | Done |
| class-7 | Chains — Sequential, Parallel & Conditional Pipelines | Done |
| class-8 | Runnables — The Standardized Unit That Powers Every Chain | Done |
| class-9 | Runnable Primitives & LCEL — Sequence, Parallel, Passthrough, Lambda & Branch | Done |
| class-10 | Document Loaders — Loading Data for RAG (Text, PDF, Directory, Web & CSV) | Done |
| class-11 | Text Splitters — Length, Text-Structure, Document-Structure & Semantic Chunking | Done |
| class-12 | Vector Stores — Storing, Indexing & Searching Embeddings (with Chroma) | Done |
| class-13 | Retrievers — Wikipedia, Vector Store, MMR, Multi-Query & Contextual Compression | Done |
| class-14 | RAG — Why It Exists, Fine-Tuning vs In-Context Learning & the Four Steps | Done |
| class-15 | Building a RAG App — YouTube Chat, End to End with LCEL Chains | Done |
| class-16 | Tools — Built-in Tools, Custom Tools & Toolkits (Giving LLMs Hands & Legs) | Done |
| class-17 | Tool Calling — Binding, Tool Calls, Execution & a Currency Converter | Done |
| class-18 | AI Agents — The ReAct Pattern, Agent & AgentExecutor | Done |

### n8n Course

| Class | Title | Status |
|---|---|---|
| class-1 | Business Automation & AI Automation | Done |
| class-2 | Workflows & Meet n8n | Done |
| class-3 | Installing n8n — Cloud, Hostinger & Docker | Done |
| class-4 | Your First Workflow — Triggers, Nodes & Credentials | Done |
| class-5 | AI-Powered Workflows — LLM Chains, Merge & Aggregate | Done |
| class-6 | Building an AI Agent — The Personal Assistant Project | Done |

### RAG Course

| Class | Title | Status |
|---|---|---|
| class-1 | Why Is RAG Important — The Four Problems in LLMs | Done |
| class-2 | What Is RAG — Retrieval, Augmented, Generation | Done |
| class-3 | How RAG Works — The End-to-End Data Flow | Done |
| class-4 | What Are Document Loaders & How They Work? | Done |
| class-5 | Text Loader, CSV Loader and PDF Loader | Done |
| class-6 | JSON Loader, Web Loader, Recursive Web Loader | Done |

### Other Topics

| Topic | Status |
|---|---|
| JavaScript | Pending |
| Python | Pending |
| React | Pending |
| TypeScript | Pending |
