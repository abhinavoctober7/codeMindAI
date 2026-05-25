import LessonLayout from "@/components/LessonLayout";

export default function Class11() {
  return (
    <LessonLayout slug="class-11">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 11</p>
        <h1 className="text-3xl font-bold text-white">Claude Code Subagents — Theory</h1>
      </div>

      {/* 11.1 Introduction */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.1 Introduction — Why Subagents Matter</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Subagents are one of the most important and most asked-about features of Claude Code. They
          power how Claude handles large codebases, plans, code reviews, parallel work, and specialized
          tasks — without breaking down or burning through tokens.
        </p>
        <p className="text-sm text-gray-400">This chapter covers the theory of subagents from first principles:</p>
        <ul className="flex flex-col gap-2">
          {[
            "Why do we even need subagents?",
            "What problem do they solve?",
            "What exactly are they?",
            "What are the different types?",
            "When and where should you use them?",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 11.2 Foundation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.2 Foundation — How LLMs Really Work</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            You don&apos;t talk to the LLM directly — you talk through an{" "}
            <span className="font-semibold text-white">API wrapper</span>. Every interaction with an
            LLM is one <span className="font-semibold text-white">request-response cycle</span>. There
            is no persistent connection, no &quot;session&quot; the model itself maintains.
          </p>
        </div>
      </div>

      {/* 11.3 Stateless Problem */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">11.3 The Stateless Problem &amp; the Conversation-History Hack</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">11.3.1 The Core Truth: LLMs Are Stateless</h3>
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl px-4 py-3">
            <p className="text-sm text-gray-300 leading-relaxed">
              LLMs have <span className="font-semibold text-white">no memory of their own</span>.
              Anything you said to the LLM yesterday — or even 10 seconds ago — is gone from the
              model&apos;s perspective the moment the response is returned.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Call</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">User Question</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">LLM Memory</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">LLM Response</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Call 1", '"What\'s the capital of France?"', "Empty", '"Paris."'],
                  ["Call 2", '"What about Germany?"', "Empty", '"In what context?"'],
                ].map(([call, question, memory, response], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-bold">{call}</td>
                    <td className="px-4 py-2.5 text-gray-300 text-xs">{question}</td>
                    <td className="px-4 py-2.5 text-red-400 text-xs font-semibold">{memory}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">11.3.2 The Hack: Resend the Whole Conversation Every Time</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Application developers solved this by re-sending the{" "}
            <span className="font-semibold text-white">entire conversation history</span> with every
            new message. The LLM appears to &quot;remember&quot; only because the application keeps
            replaying the whole conversation on every API call. The memory lives in your app, not in
            the model.
          </p>
        </div>
      </div>

      {/* 11.4 Why This Fails */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">11.4 Why This Approach Fails for Coding Agents</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">11.4.1 The Escalation</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Imagine a moderate codebase totalling ~30,000 tokens. You ask Claude to add authentication.
            Watch what happens:
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Turn</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What Gets Sent</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Total Tokens</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Turn 1", "Codebase (30k) + message", "~30,100", "~$0.09"],
                  ["Turn 2", "Codebase (30k) + history (2.1k) + message", "~32,200", "heavier"],
                  ["Turn 3", "Codebase (30k) + history (5k) + new code (3.5k) + message", "~39,000", "heavier"],
                  ["Turn 8", "Codebase (30k) + huge history + all generated code", "~76,100", "~$0.23/turn"],
                ].map(([turn, sent, tokens, cost], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-bold">{turn}</td>
                    <td className="px-4 py-2.5 text-gray-300 text-xs">{sent}</td>
                    <td className="px-4 py-2.5 text-yellow-400 font-mono text-xs">{tokens}</td>
                    <td className="px-4 py-2.5 text-red-400 text-xs font-semibold">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl px-4 py-3">
            <p className="text-sm text-gray-300">
              Running total for 8 turns:{" "}
              <span className="font-semibold text-red-400">~380,000 tokens — ~$1.14</span> for one
              feature.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">11.4.2 The Hidden Problem</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            The codebase was needed only in Turn 1 so the model could understand context. From Turn 2
            onwards the model already has the plan — yet the application is forced to keep resending
            the full 30k codebase every single turn because that&apos;s how stateless sessions work.
          </p>
        </div>
      </div>

      {/* 11.5 Real Dangers */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">11.5 The Real Dangers — Overflow &amp; Lost-in-the-Middle</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Danger 1 — Context Window Overflow</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              When your codebase + conversation history exceeds the model&apos;s maximum context size,
              the model <span className="font-semibold text-white">silently drops the oldest tokens</span>{" "}
              to make room. This causes silent, invisible corruption — no warning, no error.
            </p>
          </div>
          <div className="bg-orange-950/20 border border-orange-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest">Danger 2 — &quot;Lost in the Middle&quot; Effect</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Even before overflow, LLMs don&apos;t pay equal attention across the whole context.
              Attention is{" "}
              <span className="font-semibold text-white">highest at the start and end, lowest in the middle</span>.
              If your critical code files sit in the middle of a giant context, they get ignored.
            </p>
          </div>
        </div>

        <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Important</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Because LLM calls are stateless, coding assistants must re-send your entire codebase + full
            conversation history with every single message. Longer conversations = exponentially more
            tokens = higher costs + eventual overflow + degraded code quality — all{" "}
            <span className="font-semibold text-white">without any visible warning</span>.
          </p>
        </div>
      </div>

      {/* 11.6 What Are Subagents */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">11.6 What Are Subagents?</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Subagents are <span className="font-semibold text-white">specialized AI assistants</span>{" "}
            that run inside their own isolated context windows — doing heavy lifting in a separate space
            and handing back only what matters.
          </p>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">
          When you chat with Claude Code, you&apos;re talking to the{" "}
          <span className="font-semibold text-white">Main Agent</span>. The main agent can — on its own,
          or when you ask it to — spawn a brand-new agent (a subagent) that:
        </p>
        <ol className="flex flex-col gap-2">
          {[
            "Has its own fresh, isolated context window.",
            "Performs a specialized task inside that window.",
            "Returns a small, distilled result to the main agent.",
            "Gets destroyed the moment its work is done.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-1">Analogy</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Think of subagents like <span className="font-semibold text-white">functions in programming</span>.
            You don&apos;t care about the 200 lines of code inside a function — you just give it an input,
            it processes, and returns an output you can use. Same with subagents.
          </p>
        </div>
      </div>

      {/* 11.7 Token Savings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">11.7 Token Savings — The Math Behind the Benefit</h2>

        <div className="flex flex-col gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">11.7.1 Without a Planning Subagent</p>
            <p className="text-sm text-gray-400">At each turn, the main agent carries the full 30k codebase:</p>
            <div className="bg-[#0d1117] rounded-lg px-4 py-2.5 mt-1">
              <pre className="text-sm text-gray-300 font-mono">
                {"Tokens(turn n) = 30,000 + prev_conversation(n) + new_msg(n)"}
              </pre>
            </div>
            <p className="text-sm text-red-300 font-semibold">After 8 turns: ~380,000 tokens, ~$1.14.</p>
          </div>

          <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">11.7.2 With a Planning Subagent</p>
            <p className="text-sm text-gray-400">
              The subagent absorbs the 30k codebase once, returns a 500-token plan. The main agent now
              only carries that summary:
            </p>
            <div className="bg-[#0d1117] rounded-lg px-4 py-2.5 mt-1">
              <pre className="text-sm text-gray-300 font-mono">
                {"Tokens(turn n) = 500 + prev_conversation(n) + new_msg(n)"}
              </pre>
            </div>
            <p className="text-sm text-gray-400">Savings per turn:</p>
            <div className="bg-[#0d1117] rounded-lg px-4 py-2.5">
              <pre className="text-sm text-green-400 font-mono">
                {"Δ = 30,000 − 500 = 29,500 tokens saved every single turn"}
              </pre>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Aspect</th>
                <th className="px-4 py-2.5 text-red-400 font-semibold">Without Subagent</th>
                <th className="px-4 py-2.5 text-green-400 font-semibold">With Subagent</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Codebase in context", "30,000 tokens every turn", "~500-token summary only"],
                ["Resent every turn?", "Yes — full 30k", "Yes — but tiny!"],
                ["Context growth", "Fills fast", "Stays lean"],
                ["Cost trajectory", "Costs explode", "Costs stay low"],
              ].map(([aspect, without, with_], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{aspect}</td>
                  <td className="px-4 py-2.5 text-red-300/80 text-xs">{without}</td>
                  <td className="px-4 py-2.5 text-green-300/80 text-xs">{with_}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 11.8 Key Advantages */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">11.8 Key Advantages of Subagents</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              num: "11.8.1",
              title: "Context Isolation",
              desc: "Heavy reads and analysis happen in a separate context. Only the distilled result returns to the main conversation.",
              color: "blue",
            },
            {
              num: "11.8.2",
              title: "Specialization",
              desc: "Craft specialized subagents — research, code-review, security auditor, test runner — each with its own system prompt, tools, model, permissions, hooks, and skills.",
              color: "purple",
            },
            {
              num: "11.8.4",
              title: "Parallelism",
              desc: "Since each subagent has its own context, truly independent tasks can run in parallel — e.g. 3 EDA subagents on 3 datasets, all finishing in the time of one.",
              color: "green",
            },
            {
              num: "11.8.3",
              title: "Modularity",
              desc: "Split the entire software development life cycle into specialized agents — one per SDLC stage.",
              color: "orange",
              wide: true,
            },
          ].map(({ num, title, desc, color }) => (
            <div
              key={num}
              className={`rounded-xl p-4 flex flex-col gap-1 border ${
                color === "blue"
                  ? "bg-blue-950/20 border-blue-500/20"
                  : color === "purple"
                  ? "bg-purple-950/20 border-purple-500/20"
                  : color === "green"
                  ? "bg-green-950/20 border-green-500/20"
                  : "bg-orange-950/20 border-orange-500/20"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-widest ${
                  color === "blue"
                    ? "text-blue-400"
                    : color === "purple"
                    ? "text-purple-400"
                    : color === "green"
                    ? "text-green-400"
                    : "text-orange-400"
                }`}
              >
                {num} — {title}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-400">SDLC stages and their specialized agents:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">SDLC Stage</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Specialized Agent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Understand the code", "Explorer agent"],
                  ["Design the change", "Planner agent"],
                  ["Write the code", "Coder agent"],
                  ["Review the code", "Reviewer agent"],
                  ["Test the code", "Tester agent"],
                  ["Audit for security", "Security agent"],
                ].map(([stage, agent], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-gray-300 text-xs">{stage}</td>
                    <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 11.9 Real-World Use Cases */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.9 Real-World Use Cases</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Use Case</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Why Use a Subagent</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Codebase Exploration", "Huge codebase never loaded into main context"],
                ["Code Review", "Agent that wrote code is biased; use a fresh agent"],
                ["Testing", "Author of code is not best person to write tests"],
                ["Multi-Stage Pipelines", "Clean hand-offs between contract → implementation → test"],
                ["Parallel Independent Tasks", "Three services built simultaneously by 3 subagents"],
                ["Security Audits", "Dedicated security-focused system prompt catches more"],
              ].map(([useCase, why], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{useCase}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 11.10 Types of Subagents */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.10 Types of Subagents</h2>
        <p className="text-sm text-gray-400">Claude Code gives you two categories of subagents:</p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Type</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Scope</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Built-in", "Always available", "Explore, Plan, General-Purpose"],
                ["Custom — User-level", "~/.claude/", "All projects on the machine"],
                ["Custom — Project-level", ".claude/ inside project", "This project only"],
              ].map(([type, scope, examples], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{type}</td>
                  <td className="px-4 py-2.5 text-gray-300 font-mono text-xs">{scope}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 11.11 Built-in Subagents */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.11 Built-in Subagents</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Built-in Subagent</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">When It Triggers</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Job</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Explore", "When you ask Claude to explore/analyze the codebase", "Reads files, returns summary"],
                ["Plan", "When you enter Plan Mode", "Reads spec, designs implementation plan"],
                ["General-Purpose", "Claude judges a task needs isolation", "Handles read/write tasks Claude delegates"],
              ].map(([agent, trigger, job], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-semibold text-xs">{agent}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{trigger}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{job}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 11.12 How Subagents Get Triggered */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.12 How Subagents Get Triggered</h2>
        <p className="text-sm text-gray-400">
          Two modes — works the same for built-in and custom subagents:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Implicit Triggering</p>
            <p className="text-sm text-gray-300 leading-relaxed mt-1">
              Claude recognizes that a task needs a subagent and delegates on its own — no instruction
              from you required.
            </p>
          </div>
          <div className="bg-purple-950/20 border border-purple-500/20 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest">Explicit Triggering</p>
            <p className="text-sm text-gray-300 leading-relaxed mt-1">
              The programmer tells Claude which subagent to use for a task — you direct it manually.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          In practice, <span className="font-semibold text-white">implicit is by far the most common</span>.
        </p>
      </div>

      {/* 11.13 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.13 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "LLMs are stateless. Every API call is fresh — memory lives in the app, not the model.",
            "For coding agents, resending the codebase every turn is catastrophic — overflow, lost-in-the-middle, runaway costs.",
            "A subagent is a specialized AI assistant in its own isolated context. It does heavy lifting, returns only a distilled summary, then is destroyed.",
            "Four big advantages: context isolation, specialization, modularity, parallelism.",
            "Top use cases: codebase exploration, code review, testing, multi-stage pipelines, parallel independent work, security audits.",
            "Two types: built-in (Explore, Plan, General-Purpose) and custom (user-level vs project-level).",
            "Two triggers: implicit (Claude decides) and explicit (you say so).",
            "In practice, Claude Code uses subagents automatically for most explore/plan workflows.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </LessonLayout>
  );
}
