import LessonLayout from "@/components/LessonLayout";

export default function Class5() {
  return (
    <LessonLayout slug="class-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 5</p>
        <h1 className="text-3xl font-bold text-white">Context Window Management in Claude Code</h1>
      </div>

      {/* 5.1 What is Context */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.1 What is Context?</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Context is all the information available to understand something correctly.
          </p>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          In software development, context comes from many sources:
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Source</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What it Contains</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Codebase", "Existing functions, folder structure, naming conventions, patterns, dependencies"],
                ["PRD / Spec Document", "Requirements, user stories, acceptance criteria, scope, edge cases"],
                ["JIRA / GitHub Issues", "Task definitions, back-and-forth decisions in comments"],
                ["Slack / Messages", "Decisions made in passing, direction changes, warnings about fragile code"],
                ["Previous AI Chats", "Explored approaches, tried solutions, decisions already made with Claude"],
                ["Git History / PRs", "Past decisions, reverted attempts, review comments"],
              ].map(([source, contents], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs whitespace-nowrap">{source}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{contents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5.2 What is the Context Window */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.2 What is the Context Window?</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A context window is the amount of information (in tokens) that a model can see and
            remember at one time while generating a response. Think of it as the model&apos;s
            working memory.
          </p>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          LLMs cannot hold infinite context. They have a hard limit on how much information they can
          process in a single response. This limit is measured in tokens.
        </p>
      </div>

      {/* 5.3 Key Facts */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.3 Claude Code&apos;s Context Window — Key Facts</h2>
        <ul className="flex flex-col gap-2">
          {[
            { label: "Size", desc: "Approximately 200,000 tokens for Sonnet models. Claude Opus 4.6 reportedly has a 1 million token context window." },
            { label: "Fresh Start Per Session", desc: "Every new session starts with a completely fresh context window." },
            { label: "Both Sides Consume Tokens", desc: "Your prompts, pasted code, and images consume input tokens. Claude's generated code, explanations, and tool outputs consume output tokens." },
            { label: "Claude's Replies Cost More", desc: "Claude's replies consume roughly 6× more tokens than your messages." },
          ].map(({ label, desc }) => (
            <li key={label} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              <span><span className="font-semibold text-white">{label}:</span> {desc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 5.4 Quadratic Growth */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">5.4 The Quadratic Growth Problem</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          LLMs are stateless — every time you send a new message, Claude Code receives the{" "}
          <span className="font-semibold text-white">entire conversation history</span> plus the new
          message.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">5.4.1 How Tokens Accumulate Per Turn</h3>
          <p className="text-xs text-gray-500">Assume each message block = 200 tokens:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Turn</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What is Sent</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Total Tokens</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Turn 1", "Message 1 + Reply 1", "200"],
                  ["Turn 2", "History(T1) + Message 2 + Reply 2", "400"],
                  ["Turn 3", "History(T1+T2) + Message 3 + Reply 3", "600"],
                  ["Turn 5", "History(T1…T4) + Message 5", "1,000"],
                  ["Turn 10", "History(T1…T9) + Message 10", "2,000"],
                ].map(([turn, what, total], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{turn}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{what}</td>
                    <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">5.4.2 The Math Behind It</h3>
          <p className="text-sm text-gray-400">
            For <code className="text-[#cc785c]">n</code> turns where each turn uses{" "}
            <code className="text-[#cc785c]">b</code> tokens:
          </p>
          <div className="bg-[#0d1117] rounded-xl p-5 border border-white/10 flex flex-col gap-3">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Formula</p>
              <pre className="text-sm text-green-400 font-mono">Total tokens = n × (n + 1) / 2 × b</pre>
            </div>
            <div className="border-t border-white/10 pt-3">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Example — 10 turns, 200 tokens each</p>
              <pre className="text-sm text-green-400 font-mono leading-loose">{`Total = 10 × 11 / 2 × 200 = 11,000 tokens

Linear expectation  : 10 × 200 = 2,000 tokens
Actual cost         : 11,000 tokens  (5.5× higher)`}</pre>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">5.4.3 One Long Session vs. Fresh Sessions Per Feature</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Scenario</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Turns</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Token Formula</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["One 40-turn session (4 features)", "40", "40 × 41 / 2 = 820", "820 units"],
                  ["Four 10-turn sessions", "10 × 4", "4 × (10 × 11 / 2) = 220", "220 units"],
                ].map(([scenario, turns, formula, total], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-gray-300 text-xs">{scenario}</td>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{turns}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs font-mono">{formula}</td>
                    <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-950/40 border border-green-500/30 rounded-xl p-4">
            <p className="text-sm text-green-300 font-semibold">
              Savings ≈ (820 − 220) / 820 ≈ 73%
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Fresh sessions per feature cost ~4× less and give Claude a cleaner, more focused context.
            </p>
          </div>
        </div>
      </div>

      {/* 5.5 What Fills the Context Window */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.5 What Actually Fills the Context Window?</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Out of the advertised 200k tokens, you only have approximately{" "}
          <span className="text-white font-semibold">~150k usable tokens</span>:
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Component</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Tokens</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["System Prompt", "~6,000 (fixed)", "Pre-loaded by Claude Code team"],
                ["Tool Schemas", "~8,000 (fixed)", "All tool schemas loaded at start"],
                ["CLAUDE.md", "Tiny but persistent", "Project overview file"],
                ["Conversation History", "~45% in long sessions", "Claude's replies are the main culprit"],
                ["Tool Results", "Variable", "Every file read, bash command output"],
                ["Skills + MCP Schemas", "Loads at startup", "Custom skills and MCP tools"],
                ["Auto-Compact Buffer", "~33,000 (reserved)", "Pre-reserved for compaction summaries"],
              ].map(([component, tokens, notes], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{component}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold whitespace-nowrap">{tokens}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono">200k − 6k − 8k − 33k − other overhead ≈ 150k usable tokens</pre>
        </div>
        <p className="text-sm text-gray-400">
          Check your current context usage at any time with:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono">/context</pre>
        </div>
      </div>

      {/* 5.6 Why It Matters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.6 Why Context Window Management Matters</h2>
        <div className="flex flex-col gap-2">
          {[
            {
              num: 1,
              title: "It Directly Affects Cost",
              desc: "More tokens = higher bill. If you're burning 4× more tokens, you're paying 4× more.",
            },
            {
              num: 2,
              title: "It Shapes Your Workflow",
              desc: "Understanding context window growth forces you to think in terms of sessions-per-feature.",
            },
            {
              num: 3,
              title: "Response Quality Degrades",
              desc: "When Claude has used ~120k–130k of its ~150k usable tokens, quality visibly degrades. It may forget earlier instructions, make more errors, or produce less coherent code.",
            },
          ].map(({ num, title, desc }) => (
            <div key={num} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <span className="mt-0.5 w-7 h-7 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-sm flex items-center justify-center font-bold shrink-0">
                {num}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5.7 What Happens When Full */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.7 What Happens When the Context Window Gets Full?</h2>
        <div className="flex flex-col gap-2">
          {[
            {
              stage: "Stage 1",
              title: "Quality Degrades",
              desc: "Even before the limit, responses become less reliable around ~120k–130k tokens.",
              color: "text-yellow-400",
              bg: "bg-yellow-400/10",
              border: "border-yellow-500/20",
            },
            {
              stage: "Stage 2",
              title: "Auto-Compaction Triggers (~75–92% full)",
              desc: "Claude automatically summarises the entire conversation history.",
              color: "text-orange-400",
              bg: "bg-orange-400/10",
              border: "border-orange-500/20",
            },
            {
              stage: "Stage 3",
              title: "Repeated Compaction Causes Corruption",
              desc: "Information loss compounds with each compaction round.",
              color: "text-red-400",
              bg: "bg-red-400/10",
              border: "border-red-500/20",
            },
            {
              stage: "Stage 4",
              title: "Hard Stop",
              desc: "Once the 33k buffer is full, Claude Code refuses to continue.",
              color: "text-red-600",
              bg: "bg-red-600/10",
              border: "border-red-700/20",
            },
          ].map(({ stage, title, desc, color, bg, border }) => (
            <div key={stage} className={`flex items-start gap-4 ${bg} border ${border} rounded-xl p-4`}>
              <span className={`text-xs font-bold ${color} shrink-0 mt-0.5 w-16`}>{stage}</span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5.8 Auto-Compaction */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.8 Auto-Compaction Explained</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Auto-compaction is Claude Code&apos;s built-in safety mechanism against context overflow.
        </p>
        <p className="text-sm font-semibold text-white">How it works:</p>
        <ol className="flex flex-col gap-2">
          {[
            "Claude monitors how full the context window is.",
            "When usage hits ~75–92%, it automatically summarises the conversation history.",
            "Stores the summary in the reserved 33k buffer.",
            "Frees the conversation history space.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <p className="text-sm font-semibold text-white">The problem with auto-compaction:</p>
        <ul className="flex flex-col gap-2">
          {[
            "It is lossy — summaries cannot capture every detail of the original conversation.",
            "It triggers mid-task — potentially during a critical feature implementation.",
            "It is beyond your control — you don't choose when it happens.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-red-400 mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 5.9 Solutions */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">5.9 Solutions</h2>

        {/* /compact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            5.9.1 Solution 1: <code className="text-[#cc785c]">/compact</code> — Manual Compaction
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">/compact</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Does exactly what auto-compaction does, but you control when it happens.
          </p>
          <p className="text-sm font-semibold text-white">Why this is better than auto-compaction:</p>
          <ul className="flex flex-col gap-2">
            {[
              "You choose a safe moment (between tasks, not mid-feature).",
              "You avoid losing context during an active important task.",
              "You can review the summary with Ctrl+O after compaction.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Best Practice</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Periodically run <code className="text-[#cc785c]">/context</code> to check your usage.
              When you see ~70–75% usage, run <code className="text-[#cc785c]">/compact</code> between
              tasks, not during one.
            </p>
          </div>
        </div>

        {/* Sub-agents */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">5.9.2 Solution 2: Sub-Agents</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Claude Code can spawn sub-agents — child agents that operate independently with their
            own fresh, isolated 200k token context window.
          </p>
          <p className="text-sm font-semibold text-white">How sub-agents help:</p>
          <ul className="flex flex-col gap-2">
            {[
              "They don't consume the main agent's context window.",
              "Multiple sub-agents can run tasks in parallel.",
              "When finished, a sub-agent returns only a summary to the main agent.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* /clear */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            5.9.3 Solution 3: <code className="text-[#cc785c]">/clear</code> or Start a New Session
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">/clear   # Deletes all conversation history in the current session</pre>
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Method</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What it Does</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">When to Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["/compact", "Summarises history, frees space", "Proactively at ~70–75% usage"],
                ["Sub-agent", "New isolated 200k window for a task", "Parallel / isolated / exploratory work"],
                ["/clear", "Deletes all conversation history", "Nuclear option; reset within same session"],
                ["New session", "Completely fresh 200k window", "Start of each new feature"],
              ].map(([method, what, when], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{method}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{what}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5.10 Good Practices */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.10 Good Practices for Context Window Management</h2>
        <div className="flex flex-col gap-2">
          {[
            { title: "One Session Per Feature", desc: "Never develop multiple features in a single session." },
            { title: "Use /compact Proactively", desc: "Run /context periodically; compact at ~70–75% usage." },
            { title: "Write Focused, Specific Prompts", desc: "Vague prompts lead to long, exploratory Claude responses — burning tokens quickly." },
            { title: "Use Sub-Agents for Isolated or Exploratory Work", desc: "Any independent task should go to a sub-agent." },
            { title: "Use .claudeignore", desc: "Tell Claude Code which files to never read into the context." },
          ].map(({ title, desc }, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <span className="mt-0.5 w-7 h-7 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#0d1117] rounded-xl p-5 border border-white/10">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">.claudeignore example</p>
          <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`node_modules/
.venv/
dist/
build/
*.log
.env`}</pre>
        </div>
      </div>

      {/* 5.11 Terminal vs GUI */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.11 Terminal vs. GUI</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Access Method</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Terminal (CLI)", "Original, most powerful way. Full access to all features."],
                ["VS Code Extension", "GUI-based interaction. Convenient but limited."],
                ["Claude Desktop App", "Desktop GUI. Comfortable but restricted."],
                ["Claude Web Interface", "Browser-based. Limited for power users."],
              ].map(([method, desc], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs whitespace-nowrap">{method}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          Advanced features like memory editing, hooks, and sub-agent management require the terminal.
        </p>
      </div>

      {/* 5.12 Key Mental Model */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.12 Key Mental Model</h2>
        <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Every message you send contains the{" "}
            <span className="font-semibold text-white">entire conversation history</span> of the
            session. The more turns, the more tokens. This grows{" "}
            <span className="font-semibold text-white">quadratically, not linearly</span>. The
            antidote is discipline:
          </p>
        </div>
        <ul className="flex flex-col gap-2">
          {[
            "One feature per session.",
            "Proactive /compact.",
            "Focused prompts.",
            "Sub-agents for isolated work.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0 font-bold">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </LessonLayout>
  );
}
