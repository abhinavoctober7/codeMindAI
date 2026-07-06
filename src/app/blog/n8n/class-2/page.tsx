import N8nLessonLayout from "@/components/N8nLessonLayout";

export default function N8nClass2() {
  return (
    <N8nLessonLayout slug="class-2">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ea4b71] font-semibold uppercase tracking-widest">Class 2 — Concepts</p>
        <h1 className="text-3xl font-bold text-white">Workflows &amp; Meet n8n</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          A workflow is the visual representation of your business logic. This class covers what workflows
          are, how data flows through them, what n8n is and why it&apos;s special, its competitors, and the
          JSON format n8n uses to move data.
        </p>
      </div>

      {/* 2.1 What is a workflow */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.1 What Is a Workflow?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A workflow is a <span className="text-white font-medium">predefined series of steps executed in a
          fixed order</span> — essentially a visual representation of your business logic. The
          customer-service example (receive mail &rarr; categorize &rarr; forward &rarr; generate ticket
          &rarr; reply) maps perfectly onto a workflow.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "Nodes (a.k.a. steps)", d: "Each box is one individual task — categorize, forward, generate ticket, etc. In n8n these are called both nodes and steps." },
            { t: "Connections (a.k.a. edges)", d: "The links between nodes define the order. You build connections to define the workflow's path." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.2 Types of flow */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.2 Types of Workflow Paths</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { t: "Linear", d: "Step-by-step execution, one task after another." },
            { t: "Parallel", d: "Independent tasks run at the same time (e.g. forwarding and ticket generation, both depending only on categorization)." },
            { t: "Conditional branching", d: "The path depends on a condition — true takes one branch, false takes another (e.g. age < 18 → minor path)." },
            { t: "Loop", d: "Run part of the workflow in iterations." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ea4b71]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.3 What is n8n */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.3 What Is n8n?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          n8n is a <span className="text-white font-medium">flexible workflow-automation tool</span>. You
          define your business logic as a workflow and automate it through n8n — all via a
          <span className="text-white font-medium"> visual editor</span> (drag-and-drop, no-code). What makes
          it special:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "1300+ integrations", d: "Connect workflows to third-party apps — Gmail, Notion, Google Sheets, Slack, Telegram, databases and more — to send and receive data." },
            { t: "AI & agentic workflows", d: "Easily integrate LLMs and AI agents into any workflow — its biggest strength versus competitors." },
            { t: "No-code, but code when needed", d: "\"Code when you need it, UI when you don't.\" Add custom JavaScript or Python, use npm/pip libraries, or paste cURL requests." },
            { t: "Self-hostable", d: "Run it on n8n Cloud or self-host it on your own machine with Docker." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">An Integration Is...</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            ...a connection between your workflow and an external app. For Gmail you can send a mail
            (input) or read your inbox (output); for Notion you can read a page or create one.
          </p>
        </div>
      </div>

      {/* 2.4 Competitors */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.4 Competitors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { t: "Zapier", d: "Very simple, popular with non-technical teams. n8n is more developer-focused with more customization." },
            { t: "Make.com", d: "More visual, with filters. But its AI-agent integration is weaker than n8n's." },
            { t: "Power Automate", d: "From Microsoft — great integration with the Microsoft ecosystem (Office, Outlook, Azure)." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.5 JSON */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.5 Data Moves as JSON</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A workflow isn&apos;t just empty boxes — data moves through it, transforming at each node. In n8n
          that data is represented as <span className="text-white font-medium">JSON</span>, which looks very
          much like a Python dictionary: key-value pairs inside curly braces. JSON is a universal way to move
          data within a workflow and to/from third-party integrations.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "email_id": "user@example.com",   // string
  "age": 26,                          // integer
  "tags": ["billing", "refund"],     // array
  "meta": { "mode": "test" }          // nested JSON
}`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Values can be strings, integers, arrays (square brackets), or nested JSON. Everything that flows
          through your n8n workflow is in this format.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "A workflow is a predefined series of steps in a fixed order — the visual representation of business logic.",
            "Workflows are built from nodes (tasks) and connections/edges (order).",
            "Paths can be linear, parallel, conditional, or looped.",
            "n8n is a visual, no-code (but code-capable) workflow-automation tool with 1300+ integrations and strong AI/agent support.",
            "Competitors include Zapier, Make.com, and Power Automate.",
            "n8n moves data as JSON — key-value pairs, just like a Python dictionary.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#ea4b71]/20 text-[#ea4b71] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </N8nLessonLayout>
  );
}
