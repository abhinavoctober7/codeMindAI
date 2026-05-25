import LessonLayout from "@/components/LessonLayout";

export default function Class14() {
  return (
    <LessonLayout slug="class-14">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 14</p>
        <h1 className="text-3xl font-bold text-white">Hooks in Claude Code</h1>
      </div>

      {/* 14.1 Introduction */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.1 Introduction</h2>
        <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-300 leading-relaxed italic">
            &quot;You can bring as much determinism as you want into Claude Code&apos;s behavior with the
            help of hooks.&quot;
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Step</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What is covered</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Conceptual understanding of Hooks"],
                ["2", "Practical implementation of Hooks in Claude Code"],
                ["3", "Continuing the running project by adding Hooks to it"],
              ].map(([step, what], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{step}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 14.2 What is Claude Code, Really */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.2 What is Claude Code, Really?</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">14.2.1 The User-Facing Definition</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Claude Code is a terminal-based AI coding agent. Mechanically, it is:
          </p>
          <ul className="flex flex-col gap-1.5">
            {[
              "A Claude LLM at the core (Opus / Sonnet / Haiku).",
              "A layer of Tools + Memory wrapped around the LLM.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">14.2.2 The Agentic Property</h3>
          <p className="text-sm text-gray-400">
            The defining feature of Claude Code is that it is{" "}
            <span className="font-semibold text-white">agentic = autonomous</span>:
          </p>
          <ul className="flex flex-col gap-1.5">
            {[
              "You give it a goal.",
              "It pursues the goal on its own.",
              "It uses whichever tools it needs along the way.",
              "It talks back to you only when it needs you.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 14.3 The Concept of a Harness */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.3 The Concept of a Harness</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          From a system-design perspective, Claude Code is a{" "}
          <span className="font-semibold text-white">Coding Harness</span>.
        </p>
        <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Note</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Harness</span> = A set of straps and equipment used
            to control and direct the power of something strong.
            <br />
            <span className="font-semibold text-white">Coding Harness</span> = A piece of software used to
            convert a raw LLM into a reliable software-engineering system.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">14.3.1 The LLM is Like the Horse</h3>
          <p className="text-sm text-gray-400">An LLM has enormous raw power but serious problems:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">LLM Limitation</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Unpredictable", "Output can vary unexpectedly"],
                  ["Stateless", "Forgets past interactions; no built-in memory"],
                  ["Non-deterministic", "Same input may produce different output"],
                  ["Disconnected from real world", "No built-in ability to act on the world"],
                  ["Unable to act safely on its own", "May produce unsafe outputs if used directly"],
                ].map(([lim, meaning], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{lim}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 italic">
            Raw power becomes useful only when controlled through a structured interface.
          </p>
        </div>
      </div>

      {/* 14.4 What a Coding Harness Actually Does */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.4 What a Coding Harness Actually Does</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Responsibility</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What it means in practice</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Reading your filesystem", "So full project context can be supplied to the LLM"],
                ["Displaying terminal output", "Showing the LLM's output cleanly to the programmer"],
                ["Managing conversation history", "Multiple sessions stored on your machine"],
                ["Tracking context window usage", "Supports /compact, /clear"],
                ["Sending API requests to Anthropic", "The LLM lives on Anthropic's servers"],
                ["Parsing the model's tool calls", "Turning structured model output into real actions"],
                ["Asking you for permission", 'Every "approve / reject" prompt you see'],
                ["Memory management", "Handles CLAUDE.md, sub-agent memory files"],
                ["Spawning sub-agents in parallel", "Splitting work across multiple agents"],
                ["Extensibility via MCP / plugins", "Connecting external tools to the LLM"],
              ].map(([resp, meaning], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{resp}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">14.4.1 The Mind, Brain, Body Analogy</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Layer</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">In Claude Code</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What it does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Brain", "The LLM", 'Generates thoughts: "I should read app.py"'],
                  ["Body / Nervous system", "The coding harness", "Turns those thoughts into real actions"],
                  ["Mind", "The combined system", "The whole experience you interact with"],
                ].map(([layer, inCC, what], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{layer}</td>
                    <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{inCC}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 italic">The LLM thinks. The harness acts. Together they form the agent.</p>
        </div>
      </div>

      {/* 14.5 The Core Problem */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.5 The Core Problem: Probabilistic Boss + Deterministic Employee</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Role</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Played by</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Behaviour</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Boss", "The LLM", 'Issues instructions ("read this", "delete that")'],
                ["Employee", "The coding harness", "Faithfully executes whatever the boss says"],
              ].map(([role, player, beh], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{role}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{player}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{beh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="flex flex-col gap-1.5">
          {[
            "The harness is deterministic — same input always produces the same output.",
            "The LLM is probabilistic — there is no guarantee the same input produces the same output.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400 leading-relaxed">
          Occasionally the LLM might issue dangerous instructions: &quot;Go delete some files&quot;, &quot;Edit
          the .env file&quot;, &quot;Use plain f-strings instead of parameterized SQL queries.&quot;
        </p>
      </div>

      {/* 14.6 Why CLAUDE.md Instructions Are Not Enough */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.6 Why CLAUDE.md Instructions Are Not Enough</h2>
        <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">The 98 / 2 Problem</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The LLM follows CLAUDE.md instructions correctly ~98% of the time. In complex tasks or when the
            context window is mostly full, it may override or forget the instructions ~2% of the time.
          </p>
        </div>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs text-gray-500 font-mono">probability</p>
          <p className="text-sm text-gray-300 font-mono">
            P(instruction followed) ≈ 0.98 &nbsp;⇒&nbsp; P(risk slips through) ≈ 0.02
          </p>
          <div className="border-t border-white/10 mt-1 pt-2">
            <p className="text-sm text-green-400 font-mono">
              A coding harness with hooks aims to push the risk to:
            </p>
            <p className="text-sm text-white font-mono font-bold mt-1">
              P(dangerous action executed) = 0
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-white">Hooks exist to handle that 2%.</span>
        </p>
      </div>

      {/* 14.7 The Agent Loop */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.7 The Agent Loop</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          The agent loop is the internal back-and-forth between the LLM and the harness while completing one
          user task.
        </p>
        <p className="text-sm text-gray-400">
          Example: <span className="font-mono text-white">&quot;Add a /delete API endpoint to my website.&quot;</span>
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Cycle</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Model says</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Harness does</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Read app.py", "Reads file → sends contents back"],
                ["2", "Read database/schema.sql", "Reads file → sends contents back"],
                ["3", "Write the delete route into app.py", "Writes code to disk → confirms success"],
                ["4", "Run python -m pytest tests/", "Runs pytest → sends test output back"],
                ["5", "All tests pass → return final text", "Loop ends"],
              ].map(([cycle, model, harness], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-500 font-mono text-xs">{cycle}</td>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{model}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{harness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 14.8 Events Inside the Session Lifecycle */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.8 Events Inside the Session Lifecycle</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Event</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">When it fires</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SessionStart", "Right after the session is launched"],
                ["UserPromptSubmit", "Each time you submit a new prompt"],
                ["PreToolUse", "Just before the harness executes a tool / command"],
                ["PostToolUse", "Just after a tool / command finishes"],
                ["Stop", "Agent loop ends for the current prompt"],
                ["SubagentStart", "A sub-agent is spawned"],
                ["SubagentStop", "A sub-agent finishes"],
                ["SessionEnd", "The session is closed"],
              ].map(([event, when], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-semibold">{event}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 14.9 What Are Hooks */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.9 What Are Hooks?</h2>
        <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Hooks are custom scripts written by the programmer that the harness{" "}
            <span className="font-semibold text-white">automatically executes</span> at specific events
            during a session&apos;s lifecycle.
          </p>
        </div>
        <ul className="flex flex-col gap-1.5">
          {[
            "The programmer writes a small script (any logic they want).",
            "They bind that script to a specific lifecycle event (e.g., PreToolUse).",
            "Whenever that event occurs, the coding harness automatically runs the script.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 14.10 The 7 Core Use Cases */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.10 The 7 Core Use Cases of Hooks</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Use Case</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Purpose</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Typical Event</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Auto-formatting", "Keep code consistently formatted", "PostToolUse"],
                ["2", "Linting", "Catch bugs, bad practices", "PostToolUse"],
                ["3", "Block dangerous commands", "Prevent destructive operations", "PreToolUse"],
                ["4", "Protect sensitive files", "Block edits to .env, DB files", "PreToolUse"],
                ["5", "Notification", "Alert user when Claude finishes", "Stop"],
                ["6", "Telemetry", "Monitor sub-agents, build dashboards", "All events"],
                ["7", "Workflow automation", "Session summaries, context recovery", "SessionStart"],
              ].map(([num, useCase, purpose, event], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-500 font-mono text-xs">{num}</td>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{useCase}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{purpose}</td>
                  <td className="px-4 py-2.5 text-gray-300 font-mono text-xs">{event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">14.10.1 Auto-Formatting</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Without a formatter hook, working across multiple sessions produces one file that looks like it
              was written by 5 different programmers.
            </p>
            <ul className="flex flex-col gap-1 mt-1">
              {[
                "Formatter used: black (popular Python formatter)",
                "Event: PostToolUse — fires after Claude finishes using Write/Edit",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                  <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">14.10.2 Linting</p>
            <div className="overflow-x-auto rounded-lg border border-white/10 mt-1">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-3 py-2 text-gray-300 font-semibold">Aspect</th>
                    <th className="px-3 py-2 text-gray-300 font-semibold">Formatting</th>
                    <th className="px-3 py-2 text-gray-300 font-semibold">Linting</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Concerned with", "How code looks", "What's wrong with code"],
                    ["Catches", "Spacing, indentation", "Bugs, bad practices"],
                    ["Affects behavior?", "No", "Yes (potentially)"],
                    ["Tool example", "black, prettier", "pylint, flake8, ruff"],
                  ].map(([asp, fmt, lint], j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="px-3 py-2 text-gray-400">{asp}</td>
                      <td className="px-3 py-2 text-gray-300">{fmt}</td>
                      <td className="px-3 py-2 text-gray-300">{lint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">14.10.4 Protecting Sensitive Files</p>
            <div className="overflow-x-auto rounded-lg border border-white/10 mt-1">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-3 py-2 text-gray-300 font-semibold">File / Folder</th>
                    <th className="px-3 py-2 text-gray-300 font-semibold">Why protect it</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [".env", "Contains secrets, API keys, passwords"],
                    ["*.db", "Production data — irreversible if deleted"],
                    ["migrations/", "Database schema history — corruption is fatal"],
                    ["secrets.json", "Credentials"],
                  ].map(([file, why], j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="px-3 py-2 text-[#cc785c] font-mono">{file}</td>
                      <td className="px-3 py-2 text-gray-400">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">14.10.6 Telemetry</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              By attaching hooks to every event type (SubagentStart, SubagentStop, PreToolUse,
              PostToolUse, etc.), you can capture all activity and stream it to a UI dashboard. The popular
              Claude Code telemetry dashboards on YouTube are built entirely on hooks.
            </p>
          </div>
        </div>
      </div>

      {/* 14.11 How Hooks Work Internally */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.11 How Hooks Work Internally — Anatomy</h2>
        <p className="text-sm text-gray-400">Hooks live inside a single configuration file:</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
          <pre className="text-xs text-gray-300 font-mono leading-relaxed">{`.claude/
└── settings.json   ← Hooks are defined here`}</pre>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">14.11.1 Basic Structure of settings.json</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "python3 .claude/hooks/block-dangerous.py"
          }
        ]
      }
    ]
  }
}`}</pre>
          </div>
        </div>
      </div>

      {/* 14.12 The Three Components of a Hook */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.12 The Three Components of a Hook</h2>
        <p className="text-sm text-gray-400">Every hook has exactly 3 parts:</p>

        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">14.12.1 Event — When does the hook trigger?</p>
            <div className="overflow-x-auto rounded-lg border border-white/10 mt-1">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-3 py-2 text-gray-300 font-semibold">Event</th>
                    <th className="px-3 py-2 text-gray-300 font-semibold">When it fires</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["PreToolUse", "Just before Claude uses any tool"],
                    ["PostToolUse", "Just after Claude finishes using a tool"],
                    ["Stop", "When Claude finishes responding"],
                    ["SessionStart", "When a new Claude session begins"],
                    ["SubagentStart / SubagentStop", "When sub-agents start/end"],
                  ].map(([event, when], j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="px-3 py-2 text-[#cc785c] font-mono">{event}</td>
                      <td className="px-3 py-2 text-gray-400">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">14.12.2 Matcher — A filter to narrow the condition</p>
            <div className="bg-amber-950/30 border border-amber-500/30 rounded-lg px-3 py-2 mb-1">
              <p className="text-xs text-amber-300">
                Without a matcher, your hook runs on every single tool call — wasteful and dangerous.
              </p>
            </div>
            <div className="overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-3 py-2 text-gray-300 font-semibold">Matcher Value</th>
                    <th className="px-3 py-2 text-gray-300 font-semibold">Triggers on</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['"Bash"', "Only when Bash tool is used"],
                    ['"Write"', "Only when Write tool is used"],
                    ['"Edit"', "Only when Edit tool is used"],
                    ['"Write|Edit"', "When Write OR Edit is used"],
                    ['"*" (or omit)', "All tools"],
                  ].map(([matcher, triggers], j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="px-3 py-2 text-[#cc785c] font-mono">{matcher}</td>
                      <td className="px-3 py-2 text-gray-400">{triggers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">14.12.3 Action — What happens when the hook triggers</p>
            <p className="text-sm text-gray-400">Usually a shell command that runs a Python script:</p>
            <div className="bg-[#0d1117] border border-white/10 rounded-lg p-3 mt-1">
              <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`{
  "type": "command",
  "command": "python3 .claude/hooks/block-dangerous.py"
}`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* 14.13 Exit Codes */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.13 Exit Codes — The Language Between Hooks &amp; Harness</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Exit Code</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Meaning</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Effect</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0", "All OK", "Tool call proceeds normally"],
                ["1", "Non-blocking error", "Tool call still proceeds, but error logged"],
                ["2", "Block operation", "Tool call is cancelled, error sent back to LLM"],
              ].map(([code, meaning, effect], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className={`px-4 py-2.5 font-mono text-xs font-bold ${code === "0" ? "text-green-400" : code === "1" ? "text-amber-400" : "text-red-400"}`}>{code}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{meaning}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">Most Important Rule</p>
          <p className="text-sm text-gray-300">
            <span className="font-mono text-white">sys.exit(2)</span> = &quot;Stop. Don&apos;t run the command.&quot;
          </p>
        </div>
      </div>

      {/* 14.14 Building a File Protection Hook */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.14 Building a File Protection Hook — Practical Example</h2>
        <h3 className="text-base font-semibold text-white">block-dangerous.py</h3>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
          <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`import sys
import json

# Step 1: Read the JSON that the harness sends via stdin
data = json.load(sys.stdin)

# Step 2: Extract the bash command the model wants to run
command = data.get("tool_input", {}).get("command", "")

# Step 3: Define what we want to protect
protected_files = ["spendly.db", ".env", "migrations/"]

# Step 4: Define what counts as dangerous
dangerous_commands = ["rm ", "rm -", "unlink ", "> ", "truncate"]

# Step 5: Check if command is dangerous AND targets a protected file
for dangerous in dangerous_commands:
    if dangerous in command:
        for protected in protected_files:
            if protected in command:
                print(
                    f"BLOCKED: cannot run '{command}' -- "
                    f"'{protected}' is a protected file",
                    file=sys.stderr,
                )
                sys.exit(2)

# Step 6: If we get here, the command is fine
sys.exit(0)`}</pre>
        </div>
        <p className="text-sm text-gray-400">
          A command is blocked only if it is{" "}
          <span className="font-semibold text-white">both dangerous and targets a protected file</span>:
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Command</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Dangerous?</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Targets Protected File?</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["rm spendly.db", "Yes", "Yes", "BLOCKED", "red"],
                ["rm somefile.txt", "Yes", "No", "Allowed", "green"],
                ["cat .env", "No", "Yes", "Allowed", "green"],
                ["ls -la", "No", "No", "Allowed", "green"],
              ].map(([cmd, dangerous, targeted, result, color], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-300 font-mono text-xs">{cmd}</td>
                  <td className={`px-4 py-2.5 text-xs font-semibold ${dangerous === "Yes" ? "text-red-400" : "text-green-400"}`}>{dangerous}</td>
                  <td className={`px-4 py-2.5 text-xs font-semibold ${targeted === "Yes" ? "text-red-400" : "text-green-400"}`}>{targeted}</td>
                  <td className={`px-4 py-2.5 text-xs font-bold ${color === "red" ? "text-red-400" : "text-green-400"}`}>{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 14.15 Real Project Setup */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.15 Real Project Setup — Two Hooks for Spendly</h2>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">14.15.1 Hook 1 — Auto-Formatter (Black)</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`"PostToolUse": [
  {
    "matcher": "Write|Edit",
    "hooks": [
      {
        "type": "command",
        "command": "black ${"{CLAUDE_PROJECT_DIR}"}"
      }
    ]
  }
]`}</pre>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Property</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Event", "PostToolUse (runs after tool finishes)"],
                  ["Matcher", "Write OR Edit (not Read, not Bash)"],
                  ["Action", "Runs black on every file Claude touched"],
                  ["Prerequisite", "pip install black"],
                ].map(([prop, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{prop}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">14.15.2 Hook 2 — Sensitive File Protection</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Property</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Event", "PreToolUse"],
                  ["Matcher", "Bash"],
                  ["Protects", "spendly.db, .env, migrations/"],
                  ["Blocks commands", "rm, unlink, >, truncate"],
                ].map(([prop, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{prop}</td>
                    <td className="px-4 py-2.5 text-gray-300 font-mono text-xs">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 14.16 The /ship-feature Custom Command */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.16 The /ship-feature Custom Command</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          A custom Claude Code slash command that automates the entire git/GitHub workflow in one shot.
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Step</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Manual (before)</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">With /ship-feature</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Commit", 'git commit -m "..."', "Auto"],
                ["Push", "git push", "Auto"],
                ["Create PR", "Open GitHub UI, fill form", "Auto via MCP"],
                ["Merge PR", "Click merge in UI", "Auto via MCP"],
                ["Delete remote branch", "Click delete", "Auto"],
                ["Switch to main", "git checkout main", "Auto"],
                ["Pull", "git pull", "Auto"],
                ["Delete local branch", "git branch -d feature/x", "Auto"],
              ].map(([step, manual, auto], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{step}</td>
                  <td className="px-4 py-2.5 text-gray-400 font-mono text-xs">{manual}</td>
                  <td className="px-4 py-2.5 text-green-400 text-xs font-semibold">{auto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-white font-semibold">One command. Zero manual steps. Entire workflow automated.</p>
      </div>

      {/* 14.17 Updated End-to-End Project Workflow */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.17 Updated End-to-End Project Workflow</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Stage</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What happens</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Manual effort</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1. Create Spec", "Generate spec doc for the feature", "Low"],
                ["2. Plan Mode", "Detailed implementation plan", "Low"],
                ["3. Implementation", "Claude writes the code", "None"],
                ["4. Test", "Verify feature works", "Low"],
                ["5. Code Review", "Review changes", "Low"],
                ["6. Ship Feature", "One command does all git/GitHub work", "Zero"],
              ].map(([stage, what, effort], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{stage}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{what}</td>
                  <td className={`px-4 py-2.5 text-xs font-semibold ${effort === "None" || effort === "Zero" ? "text-green-400" : "text-amber-400"}`}>{effort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          Along the way, hooks silently format every code change and block any destructive operations on
          sensitive files.
        </p>
      </div>

      {/* 14.18 Key Takeaways & Hook Cheat Sheet */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">14.18 Key Takeaways &amp; Hook Cheat Sheet</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Need to do…</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Event</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Matcher</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Format code after Claude edits", "PostToolUse", "Write|Edit"],
                ["Lint code after Claude edits", "PostToolUse", "Write|Edit"],
                ["Block dangerous shell commands", "PreToolUse", "Bash"],
                ["Protect sensitive files", "PreToolUse", "Bash|Write|Edit"],
                ["Send notification on completion", "Stop", "—"],
                ["Build telemetry dashboard", "All events", "varies"],
                ["Generate session summary", "SessionStart", "—"],
              ].map(([need, event, matcher], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{need}</td>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{event}</td>
                  <td className="px-4 py-2.5 text-gray-400 font-mono text-xs">{matcher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">14.18.1 Best Practices</h3>
          <ol className="flex flex-col gap-2">
            {[
              "Set up hooks at the start of a project — they're safeguards, not afterthoughts.",
              "Always use matchers — don't run hooks on every tool call.",
              "Combine conditions — dangerous command AND protected file (not either alone).",
              "Write hooks to stderr, not stdout — stderr is shown to the LLM as an error.",
              "Use exit code 2 to block — anything else lets the tool through.",
              "Test your hooks with deliberately bad commands before relying on them.",
              "Keep hook scripts simple — they run on every matching event, so they must be fast.",
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

        <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-300 leading-relaxed">
            Hooks are the bridge between probabilistic LLM behavior and deterministic guarantees. They are
            safety nets, quality enforcers, observability tools, and memory aids. Combined with MCP servers
            (like GitHub) and custom slash commands (like{" "}
            <span className="font-mono text-[#cc785c]">/ship-feature</span>), hooks complete the picture
            of a fully automated, safe, professional Claude Code workflow.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
