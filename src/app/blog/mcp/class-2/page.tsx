import MCPLessonLayout from "@/components/MCPLessonLayout";

export default function MCPClass2() {
  return (
    <MCPLessonLayout slug="class-2">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Class 2 — The Why</p>
        <h1 className="text-3xl font-bold text-white">The Story Behind MCP</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before MCP existed, there was a specific problem — one that grew slowly, then suddenly became
          impossible to ignore. This class tells that story from the beginning: from the day ChatGPT
          launched to the exact moment the world needed a standard like MCP.
        </p>
      </div>

      {/* 2.1 The Moment Everything Changed */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.1 The Moment Everything Changed</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          November 30, 2022. OpenAI releases ChatGPT to the public. Within five days it has one million
          users. Within two months, one hundred million. No technology in history had ever reached that
          scale that fast — not Facebook, not Instagram, not TikTok.
        </p>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">Nov 30, 2022 — The Day AI Became Real for Everyone</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            For the first time, anyone could type a question in plain language and get a coherent,
            useful answer. No setup. No training data. No coding. Just a text box. The entire world
            had access to a capable AI system for the first time — and the reaction was immediate.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { metric: "1M users", time: "in 5 days", color: "text-[#6366f1]" },
            { metric: "10M users", time: "in 40 days", color: "text-purple-400" },
            { metric: "100M users", time: "in 2 months", color: "text-green-400" },
          ].map(({ metric, time, color }) => (
            <div key={metric} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className={`text-lg font-bold ${color}`}>{metric}</p>
              <p className="text-xs text-gray-500 mt-0.5">{time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.2 Three Waves of AI Adoption */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.2 Three Waves of AI Adoption</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          After ChatGPT launched, the world did not immediately shift to professional AI use. It
          happened in three distinct waves — each one deeper than the last.
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              wave: "Wave 1",
              period: "Nov 2022 – Mid 2023",
              name: "Pure Wonder",
              color: "text-blue-400",
              border: "border-blue-400/30",
              bg: "bg-blue-400/5",
              desc: "People discovered ChatGPT the way you discover a magic trick — with awe. They asked it to write poems, explain jokes, tell stories. They screenshotted replies and posted them on Twitter. The use was personal, playful, exploratory. No one was replacing their workflow yet — they were just marveling.",
              examples: ["Write a poem about my dog", "Explain quantum physics like I'm five", "Write a cover letter for me"],
            },
            {
              wave: "Wave 2",
              period: "Mid – Late 2023",
              name: "Professional Adoption",
              color: "text-purple-400",
              border: "border-purple-400/30",
              bg: "bg-purple-400/5",
              desc: "Companies woke up. Managers realized their teams were quietly using ChatGPT for real work — summarizing meeting notes, drafting emails, writing reports. AI entered professional workflows. Products like GitHub Copilot, Notion AI, and Bing AI launched. The use was no longer fun — it was productive.",
              examples: ["Summarize this 40-page document", "Write a project proposal draft", "Review this code for bugs"],
            },
            {
              wave: "Wave 3",
              period: "Early 2024 onwards",
              name: "The API Revolution",
              color: "text-green-400",
              border: "border-green-400/30",
              bg: "bg-green-400/5",
              desc: "Developers began building AI directly into products. LLM APIs went mainstream. Startups launched overnight. Every SaaS added an AI feature. The world was no longer just using AI — it was building with AI. And this is where the real problems began to surface.",
              examples: ["Build an AI assistant for our app", "Integrate Claude into our customer support", "Create an AI pipeline for data analysis"],
            },
          ].map(({ wave, period, name, color, border, bg, desc, examples }) => (
            <div key={wave} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-3`}>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${color} bg-white/5 px-2 py-0.5 rounded`}>{wave}</span>
                <span className="text-xs text-gray-500">{period}</span>
              </div>
              <p className={`text-sm font-bold ${color}`}>{name}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {examples.map((ex) => (
                  <span key={ex} className="text-[11px] text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{ex}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.3 The Fragmentation Problem */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.3 The Vision vs The Reality</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          As AI tools multiplied, a gap opened between what everyone imagined and what actually existed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#6366f1]/5 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest">The Vision</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              One unified AI assistant that knows everything about your work. It knows your open Jira
              tickets. It has read your codebase. It knows your team&apos;s last discussion on Slack.
              You ask it anything and it answers with full context.
            </p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">The Reality</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              ChatGPT lives in one tab. Jira in another. GitHub in another. Slack in another. Google
              Drive somewhere. None of them talk to each other. Every AI tool is a sealed silo.
              Context exists — but scattered, and AI cannot reach it.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">The fragmentation — every AI is an island</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│   ChatGPT   │   │    Claude   │   │    Gemini   │
│   (OpenAI)  │   │  (Anthropic)│   │  (Google)   │
└─────────────┘   └─────────────┘   └─────────────┘
       │                 │                  │
       ✗                 ✗                  ✗
  No access         No access          No access
  to your tools     to your tools      to your tools`}</pre>
        </div>
      </div>

      {/* 2.4 What is Context? */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.4 What is Context?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          To understand why fragmentation matters, you need to understand what context is in the AI world.
        </p>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Context is <span className="text-white font-medium">everything the AI can see when generating a response</span>. This
            includes the system prompt, the full conversation history, any documents you have pasted in,
            and any data you have injected. If something is not in the context window, the AI has no
            knowledge of it — no matter how important it is to your work.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { part: "System Prompt", desc: "Instructions defining the AI's role, behavior, and constraints" },
            { part: "Conversation History", desc: "All previous messages in the current conversation" },
            { part: "Injected Data", desc: "Documents, code, data you have manually pasted in" },
            { part: "Tool Results", desc: "Output from external tools the AI has been given access to" },
          ].map(({ part, desc }) => (
            <div key={part} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#6366f1] mt-1.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{part}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          An AI is only as useful as the context it has access to. A brilliant AI with no context about
          your work is a brilliant stranger who cannot help with anything specific. The quality of the
          answer is entirely determined by the quality and completeness of the context.
        </p>
      </div>

      {/* 2.5 The Software Engineer's Nightmare */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.5 A Software Engineer&apos;s Workday</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Let us make this concrete. Consider a typical software engineer and where their work context lives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { tool: "Jira", data: "Assigned tickets, sprint status, bug reports, backlog items", color: "text-blue-400" },
            { tool: "GitHub", data: "Code, open PRs, recent commits, code review comments", color: "text-gray-300" },
            { tool: "MySQL", data: "Database schema, production data, query history", color: "text-orange-400" },
            { tool: "Google Drive", data: "Architecture docs, design specs, onboarding materials", color: "text-green-400" },
            { tool: "Slack", data: "Team decisions, async discussions, context from last week's debate", color: "text-purple-400" },
          ].map(({ tool, data, color }) => (
            <div key={tool} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className={`text-sm font-bold w-24 shrink-0 ${color}`}>{tool}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{data}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">The Problem</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            None of this context is accessible to an AI assistant. When the engineer opens ChatGPT or
            Claude and asks "what should I work on today?", the AI has no idea what their tickets look like,
            what code is in progress, what their team discussed, or what the database schema looks like.
            The AI is flying completely blind.
          </p>
        </div>
      </div>

      {/* 2.6 Copy-Paste Hell */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.6 Copy-Paste Hell — Developers as Human APIs</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The workaround developers found was painful: manually copy context from each tool and paste
          it into the AI chat window. One ticket from Jira. The relevant code from GitHub. The error
          from the logs. One by one, manually assembled, every single time.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">A typical developer's "AI-assisted" workflow</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`1. Open Jira → copy ticket description → paste into ChatGPT
2. Switch to GitHub → copy relevant code → paste into ChatGPT
3. Switch to Slack → find last discussion → copy → paste
4. Switch to Google Drive → find design doc → copy → paste
5. Finally ask the question
6. AI gives an answer based on context 5 minutes old
7. Repeat tomorrow`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">The Insight</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Developers had become <span className="text-white font-medium">human APIs</span>. They were manually fetching data from one
            system and piping it into another — the exact job an API is supposed to do. The AI was
            powerful but isolated. Humans were filling the gap with manual labor, which defeats the
            entire purpose of automation.
          </p>
        </div>
      </div>

      {/* 2.7 Function Calling */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.7 Function Calling — The First Breakthrough</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          In mid-2023, OpenAI introduced <span className="text-white font-medium">Function Calling</span> — arguably
          the most important AI feature of that year. The idea was revolutionary: let the LLM decide when
          to call an external function, and what arguments to pass.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-[#6366f1] font-semibold mb-3">How Function Calling works</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`// You define a function schema:
{
  "name": "get_jira_tickets",
  "description": "Returns open Jira tickets for a user",
  "parameters": {
    "assignee": { "type": "string" }
  }
}

// The LLM decides when to call it:
User: "What should I work on today?"
LLM:  → I need to call get_jira_tickets({ assignee: "user@company.com" })
      → [receives results]
      → "You have 3 open tickets: ..."

// The developer writes the actual function logic`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#6366f1]/5 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">What it solved</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              AI could now proactively reach out and fetch data from external systems. No more manual
              copy-paste. The AI decides when it needs more information and requests it automatically.
            </p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">What it didn&apos;t solve</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every AI model had its own function calling format. Every tool needed a custom
              integration for every model. The N×M problem was still coming.
            </p>
          </div>
        </div>
      </div>

      {/* 2.8 The Rise of Tools */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.8 The Rise of Tools</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          After function calling, the concept of "tools" exploded. Three categories of tools emerged
          that AI systems needed to connect with.
        </p>
        <div className="flex flex-col gap-2">
          {[
            {
              category: "Enterprise Tools",
              examples: "Salesforce, Jira, Confluence, Slack, HubSpot",
              desc: "Large organizations had workflows locked inside enterprise software. AI had to reach these systems to be genuinely useful in professional settings.",
              color: "text-blue-400",
            },
            {
              category: "Internal Tools",
              examples: "Company databases, internal APIs, proprietary systems",
              desc: "Every company had custom-built internal tooling — dashboards, databases, internal services. These were not available as public APIs. They needed custom integrations.",
              color: "text-purple-400",
            },
            {
              category: "AI-First Tools",
              examples: "Vector databases, embedding stores, AI pipelines",
              desc: "A new generation of tools built specifically for AI workflows. These were the easiest to integrate but also multiplied the total number of tools that needed connection.",
              color: "text-green-400",
            },
          ].map(({ category, examples, desc, color }) => (
            <div key={category} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <p className={`text-sm font-bold ${color}`}>{category}</p>
                  <span className="text-xs text-gray-600 italic">{examples}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.9 The N×M Problem */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">2.9 The N×M Integration Problem</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now put together all the AI models and all the tools. What do you get?
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Every model needs a custom integration for every tool</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`AI Models (N):          Tools (M):
  • ChatGPT        ←→   • GitHub
  • Claude         ←→   • Jira
  • Gemini         ←→   • Slack
  • Llama          ←→   • Google Drive
  • Mistral        ←→   • MySQL
  ...              ←→   • Salesforce
                        ...

Total integrations needed: N × M
5 models × 10 tools = 50 custom integrations
10 models × 20 tools = 200 custom integrations`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              problem: "Maintenance Nightmare",
              desc: "GitHub changes their API → every AI integration for GitHub breaks. Someone has to update N integrations separately. Who owns this work?",
              color: "text-red-400",
              border: "border-red-500/20",
              bg: "bg-red-950/20",
            },
            {
              problem: "Security Fragmentation",
              desc: "Each integration handles its own credentials. API keys scattered everywhere — in environment variables, in code, in CI configs. No central place to audit or rotate them.",
              color: "text-orange-400",
              border: "border-orange-500/20",
              bg: "bg-orange-950/20",
            },
            {
              problem: "Wasted Engineering Time",
              desc: "Every team that wants AI in their product has to write the same boilerplate integration code from scratch. The same GitHub integration is written hundreds of thousands of times across the industry.",
              color: "text-yellow-400",
              border: "border-yellow-500/20",
              bg: "bg-yellow-950/20",
            },
          ].map(({ problem, desc, color, border, bg }) => (
            <div key={problem} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <p className={`text-sm font-semibold ${color}`}>{problem}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.10 The MCP Solution */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">2.10 MCP — The Solution</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Anthropic's answer was to introduce a <span className="text-white font-medium">shared standard language</span> between AI models
          and tools — so that each tool only needs to be built once, and each AI model only needs to
          learn one protocol. This is MCP: Model Context Protocol.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">MCP standardizes the connection</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Without MCP (N × M):
  ChatGPT ──custom code──▶ GitHub
  ChatGPT ──custom code──▶ Jira
  Claude  ──custom code──▶ GitHub   (different code!)
  Claude  ──custom code──▶ Jira     (different code!)

With MCP (N + M):
  ChatGPT ──MCP──▶ MCP Client ──MCP──▶ GitHub Server
  Claude  ──MCP──▶ MCP Client ──MCP──▶ GitHub Server
                                         (same server!)
  Write the GitHub server ONCE.
  Every MCP-compatible AI uses it.`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { role: "MCP Client", desc: "The AI model or chatbot. Any AI that speaks MCP. Claude, ChatGPT, Cursor, or your custom agent.", color: "text-[#6366f1]", border: "border-[#6366f1]/30", bg: "bg-[#6366f1]/5" },
            { role: "MCP Protocol", desc: "The shared language standard. A set of rules both sides agree to. The contract that makes plug-and-play possible.", color: "text-gray-300", border: "border-white/20", bg: "bg-white/5" },
            { role: "MCP Server", desc: "The tool or service. GitHub, Jira, Slack, your custom database. Built once, works with every MCP client.", color: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/5" },
          ].map(({ role, desc, color, border, bg }) => (
            <div key={role} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <p className={`text-sm font-bold ${color}`}>{role}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.11 MCP vs Function Calling */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.11 MCP vs Function Calling</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          At first glance, MCP looks similar to Function Calling. Both let AI models invoke external
          capabilities. But there is a fundamental difference in <span className="text-white font-medium">where the intelligence lives</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Function Calling</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The AI model does the heavy lifting. The developer defines a function schema, but the AI
              has to understand it, know when to call it, and figure out what arguments to pass. The
              intelligence for using the tool lives inside the AI model.
            </p>
            <div className="flex flex-col gap-1 text-xs text-gray-500">
              <span>✗ Each model needs to learn each tool independently</span>
              <span>✗ Schema changes require retraining or prompt updates</span>
              <span>✗ Every developer writes their own schemas from scratch</span>
            </div>
          </div>
          <div className="bg-[#6366f1]/5 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest">MCP</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The server does the heavy lifting. The MCP server exposes its capabilities in a
              standardized format. The AI just needs to understand MCP — and it gets every tool
              for free. The intelligence for using the tool lives inside the server.
            </p>
            <div className="flex flex-col gap-1 text-xs text-gray-400">
              <span className="text-[#6366f1]">✓ One protocol — access to every MCP server</span>
              <span className="text-[#6366f1]">✓ Server updates itself — AI needs no changes</span>
              <span className="text-[#6366f1]">✓ Community builds and maintains servers for you</span>
            </div>
          </div>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">The Key Insight</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            With function calling, every new tool means more work for the AI and the developer. With MCP,
            adding a new tool means someone builds an MCP server once — and every AI that speaks MCP
            immediately gets access to it. The work scales with the number of tools, not with the
            number of models times the number of tools.
          </p>
        </div>
      </div>

      {/* 2.12 The Benefits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.12 The Benefits: N+M, Not N×M</h2>
        <div className="flex flex-col gap-2">
          {[
            {
              benefit: "N+M, not N×M",
              before: "5 AI models × 10 tools = 50 integrations to maintain",
              after: "10 MCP servers + 5 AI clients = 15 things to maintain",
              impact: "Integration cost grows linearly, not exponentially",
            },
            {
              benefit: "No maintenance overhead",
              before: "Tool updates its API → every AI integration breaks → multiple teams scramble to fix",
              after: "Tool updates its MCP server → all AI clients automatically get the update",
              impact: "Tool owners maintain their own servers — zero work for AI teams",
            },
            {
              benefit: "Reduced development cost",
              before: "Each team writes custom integration code for every tool they want to connect",
              after: "Use the community-maintained MCP server — no integration code to write",
              impact: "Days of work become a single JSON config entry",
            },
            {
              benefit: "Better security",
              before: "API keys scattered across every integration, in every team's code and config",
              after: "All credentials live in one MCP config file, in one place, with one audit trail",
              impact: "Centralized credential management, easier rotation, less attack surface",
            },
          ].map(({ benefit, before, after, impact }) => (
            <div key={benefit} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <p className="text-sm font-semibold text-white">{benefit}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-start gap-2 text-red-400">
                  <span className="shrink-0 mt-0.5">Before:</span>
                  <span className="text-gray-400">{before}</span>
                </div>
                <div className="flex items-start gap-2 text-[#6366f1]">
                  <span className="shrink-0 mt-0.5">After:</span>
                  <span className="text-gray-400">{after}</span>
                </div>
              </div>
              <p className="text-xs text-green-400 font-medium">→ {impact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.13 The Ecosystem & Network Effect */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.13 The MCP Ecosystem & Network Effect</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          MCP&apos;s real power is not in any single feature — it is in the flywheel it creates.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">The MCP flywheel</p>
          <pre className="text-sm text-[#6366f1] font-mono leading-loose whitespace-pre-wrap">{`More MCP servers get built
        ↓
More AI models adopt MCP (because more tools are available)
        ↓
More users demand MCP support from tools they use
        ↓
More companies build MCP servers to meet demand
        ↓
Even more MCP servers get built  ← (cycle repeats)
        ↓
MCP becomes the industry standard`}</pre>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { signal: "Open source community", status: "Hundreds of MCP servers already built and published — for GitHub, Slack, Notion, Jira, databases, and more" },
            { signal: "Major AI providers", status: "OpenAI, Google, and others have announced or are building MCP support into their models" },
            { signal: "Developer tooling", status: "IDEs like Cursor and VS Code integrate MCP natively — MCP servers are becoming first-class features" },
            { signal: "Enterprise adoption", status: "Large companies are building internal MCP servers for their proprietary tools and databases" },
          ].map(({ signal, status }) => (
            <div key={signal} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
              <p className="text-xs font-semibold text-[#6366f1] w-40 shrink-0">{signal}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{status}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">The Trajectory</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            In 3-5 years, &quot;does this tool support MCP?&quot; will be a standard evaluation criterion — the
            way &quot;does this service have a REST API?&quot; is today. Tools without MCP support will be
            considered legacy. The protocol is already becoming the default fabric of AI-tool connectivity.
          </p>
        </div>
      </div>

      {/* 2.14 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.14 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "ChatGPT launched Nov 30, 2022 and reached 100M users in two months — the fastest technology adoption in history.",
            "AI adoption happened in three waves: Pure Wonder (playing) → Professional Adoption (working) → API Revolution (building).",
            "Context is everything the AI can see. Without access to your tools, AI cannot give useful, grounded answers about your actual work.",
            "Before MCP, developers became human APIs — manually copying context from Jira, GitHub, Slack, and pasting it into chat windows.",
            "Function Calling (mid-2023) was the first breakthrough — AI could request tool execution. But it still required N×M custom integrations.",
            "The N×M problem: every AI model needs custom integration code for every tool. Maintenance, security, and cost all scale unacceptably.",
            "MCP is a shared language standard. Tools write one MCP server. Every MCP-compatible AI gets access to it automatically.",
            "In MCP the server does the heavy lifting — not the AI. This means tool owners own and maintain their integrations, not AI teams.",
            "Benefits: N+M integrations (not N×M), zero maintenance overhead, reduced cost, centralized credential security.",
            "The network effect is already in motion. In 3-5 years MCP will be the default fabric of AI-tool connectivity.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </MCPLessonLayout>
  );
}
