import LessonLayout from "@/components/LessonLayout";

export default function Class12() {
  return (
    <LessonLayout slug="class-12">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 12</p>
        <h1 className="text-3xl font-bold text-white">Custom Subagents in Claude Code</h1>
      </div>

      {/* 12.1 Why Custom Subagents */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">12.1 Why Custom Subagents?</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          If Claude Code already gives us built-in subagents, why bother building our own? The answer
          is one word: <span className="font-semibold text-white">specialization</span>.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed">
          Built-in subagents only have generic knowledge. They do not know your company&apos;s specific
          compliance rules, your codebase&apos;s particular patterns, or which checks matter most for
          your stack. That gap is exactly what custom subagents fill.
        </p>
        <div className="bg-green-950/30 border border-green-500/20 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-1">Rule of Thumb</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Whenever you need specialization for your specific codebase or workflow, build a custom
            subagent instead of reaching for a built-in one.
          </p>
        </div>
        <p className="text-sm text-gray-400">With a custom subagent, you control:</p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Control Surface</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What you customize</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["System prompt", "Specialized instructions, your checklist, your guidelines"],
                ["Tools", "Only give it the tools it needs (read-only, edit, bash, etc.)"],
                ["Skills", "Hook up domain-specific skills"],
                ["Model", "Pick Sonnet, Opus, or Haiku per task"],
                ["Memory", "Persistent context if needed"],
              ].map(([surface, what], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{surface}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 12.2 How to Create */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">12.2 How to Create a Custom Subagent</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          A custom subagent is just a Markdown file. The whole mechanism is:
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
          <pre className="text-xs text-gray-300 font-mono leading-relaxed">{`.claude/
└── agents/
    └── your-agent-name.md    ← This file IS the subagent`}</pre>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.2.1 Method 1: Use Claude Code&apos;s Built-In Generator (Recommended)</h3>
          <ol className="flex flex-col gap-2">
            {[
              <>Run: <span className="font-mono text-[#cc785c]">/agents</span></>,
              "You'll see a panel showing all currently registered agents.",
              'Choose "Create new agent".',
              "Select scope: Project or Personal.",
              "Choose Generate with Claude or Manual configuration.",
              "Provide a description (controls when to trigger this agent).",
              "Pick the tools the agent gets access to.",
              "Pick a model (Sonnet, Opus, etc.).",
              "Pick a color (visual indicator when the agent runs).",
              "Decide on memory (usually None for single-shot subagents).",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-gray-400">
            After creation, the file appears at{" "}
            <span className="font-mono text-white">.claude/agents/&lt;name&gt;.md</span>.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.2.2 Method 2: Create the Markdown File Manually</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Once you understand the format, just create a{" "}
            <span className="font-mono text-white">.md</span> file in{" "}
            <span className="font-mono text-white">.claude/agents/</span> directly. This is faster
            after the first time.
          </p>
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Critical Habit — Always Review Generated Files</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              When Claude generates the agent file, don&apos;t just trust it. Paste it back into Claude
              with your project context and ask &quot;is this file correct?&quot; The generated file is
              a <span className="font-semibold text-white">starting point, not a finished product</span>.
            </p>
          </div>
        </div>
      </div>

      {/* 12.3 File Anatomy */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">12.3 Subagent File Anatomy</h2>
        <p className="text-sm text-gray-400">Every subagent markdown file has two parts:</p>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.3.1 Part 1: YAML Front Matter</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed">{`---
name: spendly-test-writer
description: Use this agent to write pytest test cases for Spendly
             features. Invoke after implementing any feature to
             generate tests based on feature specs, NOT the
             implementation.
tools:
  - Read
  - Edit
  - Glob
  - Grep
model: sonnet
color: red
---`}</pre>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Field</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["name", "Identifier for the subagent"],
                  ["description", "Critical — Claude uses this to decide when to auto-trigger"],
                  ["tools", "Which tools the agent can use"],
                  ["model", "Which Claude model powers it"],
                  ["color", "UI color when this agent runs"],
                  ["skills (optional)", "Skills the agent can access"],
                  ["hooks (optional)", "Lifecycle hooks"],
                  ["memory (optional)", "Persistent memory"],
                  ["effort_level (optional)", "Reasoning effort tuning"],
                ].map(([field, purpose], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className={`px-4 py-2.5 font-mono text-xs ${field === "description" ? "text-[#cc785c] font-bold" : "text-gray-300"}`}>{field}</td>
                    <td className={`px-4 py-2.5 text-xs ${field === "description" ? "text-white font-semibold" : "text-gray-400"}`}>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.3.2 Part 2: Main Body (System Prompt)</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            After the front matter, you write detailed instructions for the agent. This explains:
          </p>
          <ul className="flex flex-col gap-1.5">
            {[
              "What the agent's job is",
              "How it should approach the task",
              "What inputs it expects",
              "What outputs it must produce",
              "What it should NOT do (very important!)",
              "Tech stack details, file paths, conventions",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
            <p className="text-sm text-gray-300 leading-relaxed">
              The <span className="font-semibold text-white">&quot;Won&apos;t Do&quot; / negative instructions</span>{" "}
              section is often more important than the &quot;Will Do&quot; section. It prevents the agent
              from drifting into unrelated work.
            </p>
          </div>
        </div>
      </div>

      {/* 12.4 Project vs Personal */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.4 Project-Level vs Personal-Level Subagents</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Scope</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Location</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">When to use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Project-level", "<project-root>/.claude/agents/", "Agent is specific to this codebase"],
                ["Personal-level", "~/.claude/agents/", "Agent works across all your projects"],
              ].map(([scope, loc, when], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{scope}</td>
                  <td className="px-4 py-2.5 text-gray-300 font-mono text-xs">{loc}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 12.5 Triggering */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">12.5 How Subagents Get Triggered</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">12.5.1 Automatically</p>
            <p className="text-sm text-gray-300 leading-relaxed mt-1">
              Claude looks at the <span className="font-mono text-white">description</span> field and
              decides on its own when to trigger the agent. This is why the description must be{" "}
              <span className="font-semibold text-white">specific and action-oriented</span>.
            </p>
          </div>
          <div className="bg-purple-950/20 border border-purple-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest">12.5.2 Manually</p>
            <div className="overflow-x-auto rounded-lg border border-white/10 mt-1">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-3 py-2 text-gray-300 font-semibold">Method</th>
                    <th className="px-3 py-2 text-gray-300 font-semibold">How</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Direct instruction", 'Tell Claude: "Use the test-writer subagent to write tests for X"'],
                    ["Custom slash command", "Build a /slash-command that internally orchestrates subagents"],
                  ].map(([method, how], j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="px-3 py-2 text-purple-300 font-semibold">{method}</td>
                      <td className="px-3 py-2 text-gray-400">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          In practice, most real workflows use{" "}
          <span className="font-semibold text-white">manual triggering via slash commands</span> for
          explicit, predictable control.
        </p>
      </div>

      {/* 12.6 Enhanced Workflow */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">12.6 The Enhanced Spec-Driven Workflow</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Two new stages get inserted between Validate and Commit:
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Stage</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What happens</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Triggered by</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Testing", "Write tests, run tests, get pass/fail report", "/test-feature slash command"],
                ["Self Code Review", "Security + code quality audit", "/code-review-feature slash command"],
              ].map(([stage, what, trigger], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{stage}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{what}</td>
                  <td className="px-4 py-2.5 text-gray-400 font-mono text-xs">{trigger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Pipeline</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Strategy</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Reason</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Test Writer → Test Runner", "Sequential", "Runner depends on Writer's output"],
                ["Security + Quality Review", "Parallel", "Independent tasks — save wall-clock time"],
              ].map(([pipeline, strategy, reason], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-white text-xs font-semibold">{pipeline}</td>
                  <td className={`px-4 py-2.5 text-xs font-semibold ${strategy === "Sequential" ? "text-blue-400" : "text-green-400"}`}>{strategy}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 12.7 Testing Pipeline */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">12.7 Building the Testing Pipeline</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.7.1 The test-writer Subagent</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Test Type</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What it checks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Happy path", "Correct input → correct output"],
                  ["Validation", "Bad input is rejected"],
                  ["HTTP semantics", "Correct status codes, headers"],
                  ["Edge cases", "Empty data, large data, boundary values"],
                  ["Auth", "Locked-out user cannot access protected endpoints"],
                ].map(([type, check], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{type}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">Critical Rule</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Tests must be written based on the{" "}
              <span className="font-semibold text-white">spec file, NOT the generated code</span>. The
              generated code might be buggy — but the spec is the source of truth. Writing tests against
              the implementation just validates that the code does what it does, not what it{" "}
              <span className="italic">should</span> do.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.7.2 The test-runner Subagent</h3>
          <ul className="flex flex-col gap-1.5">
            {[
              "Tools given: Read tools + Bash (needs to execute pytest). NO write access.",
              "Model: Sonnet. Color: Green.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400">Final report structure:</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "Summary table (total / passed / failed)",
              "Per-failure breakdown",
              "Warnings & flags",
              "Recommendations for next steps",
              "Final verdict",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.7.3 The /test-feature Slash Command</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`---
description: Writes and runs tests for a specific Spendly feature.
             Pass the spec name as argument.
allowed-tools: ["Read", "Edit", "Bash", "Task"]
---

# Test Feature

Step 1: Write tests
Use the spendly-test-writer subagent to create test cases based
on the spec file passed as argument.

Step 2: Run tests
Use the spendly-test-runner subagent to execute the tests
written in Step 1.

Final output:
| Total Tests | Passed | Failed | Verdict |`}</pre>
          </div>
        </div>
      </div>

      {/* 12.8 Code Review Pipeline */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">12.8 Building the Code Review Pipeline</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-red-400 uppercase tracking-widest">12.8.1 security-reviewer</p>
            <p className="text-sm text-gray-400 mb-1">Checks for:</p>
            <ul className="flex flex-col gap-1">
              {[
                "SQL injection patterns",
                "Exposed secrets / API keys",
                "Authentication / authorization flaws",
                "Unsafe input handling (raw f-string SQL queries)",
                "Missing CSRF protections",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                  <span className="text-red-400 mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">12.8.2 code-quality-reviewer</p>
            <p className="text-sm text-gray-400 mb-1">Checks for:</p>
            <ul className="flex flex-col gap-1">
              {[
                "Naming conventions",
                "Function complexity / length",
                "Code duplication",
                "Missing docstrings / type hints",
                "Adherence to project conventions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                  <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.8.3 The /code-review-feature Slash Command</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`---
description: Runs parallel security + code quality review for a
             Spendly feature.
---

# Code Review Feature

## Step 1: Parallel Review
Launch BOTH subagents in parallel:
- spendly-security-reviewer
- spendly-quality-reviewer

## Step 2: Unified Report
Merge findings from both into a single report.

## Step 3: Approval Gate
If changes are recommended, ask the user before applying them.`}</pre>
          </div>
        </div>
      </div>

      {/* 12.9 Real Numbers */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.9 Real Numbers From the Demo</h2>
        <p className="text-sm text-gray-400">
          After running{" "}
          <span className="font-mono text-[#cc785c]">/test-feature 06-date-filter-profile</span> on a
          date range filter feature:
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Metric</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Total tests written", "76"],
                ["Passed", "73"],
                ["Failed", "3"],
                ["Verdict", '"All 3 failures are test issues, not implementation bugs"'],
              ].map(([metric, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{metric}</td>
                  <td className={`px-4 py-2.5 text-xs font-semibold ${metric === "Passed" ? "text-green-400" : metric === "Failed" ? "text-red-400" : metric === "Total tests written" ? "text-[#cc785c]" : "text-gray-400 font-normal italic"}`}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          After running{" "}
          <span className="font-mono text-[#cc785c]">/code-review-feature 06-date-filter-profile</span>,
          the security reviewer flagged an f-string SQL pattern that violated the project&apos;s
          &quot;no-injection&quot; rule. After approval, the agent auto-fixed the code.
        </p>
      </div>

      {/* 12.10 Best Practices */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">12.10 Best Practices</h2>
        <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Principle of Least Privilege</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Give each subagent only the tools it needs. Don&apos;t grant Write to a reviewer;
            don&apos;t grant Bash to a documentation generator.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">12.10.1 Description-Writing Tips</h3>
          <p className="text-sm text-gray-400">A good description field is:</p>
          <ul className="flex flex-col gap-1.5">
            {[
              <>Action-oriented: <span className="font-mono text-white">&quot;Use this agent to…&quot;</span> / <span className="font-mono text-white">&quot;Invoke when…&quot;</span></>,
              "Specific: Names the exact scenario (not \"helps with code\")",
              "Mentions the trigger condition: \"after implementing any feature\"",
              "States what it does NOT do if there's ambiguity",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-blue-400 font-semibold">Use auto-trigger when…</th>
                <th className="px-4 py-2.5 text-purple-400 font-semibold">Use slash command when…</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["The agent's job is unambiguous from context", "The agent runs as part of a multi-step workflow"],
                ["One-off tasks within a chat", "You need to enforce order (sequential)"],
                ["You don't mind Claude deciding for you", "You need parallel execution"],
                ["—", "You want predictable, repeatable runs"],
              ].map(([auto, slash], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-blue-300/80 text-xs">{auto}</td>
                  <td className="px-4 py-2.5 text-purple-300/80 text-xs">{slash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 12.11 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.11 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Custom subagents = specialization. Built-ins are generic; customs are tailored to your codebase, guidelines, and conventions.",
            "A subagent is just a markdown file in .claude/agents/ with YAML frontmatter and a body system prompt.",
            "The description field is the most important YAML field — it controls automatic triggering.",
            "Restrict tools per agent. Writers get Edit; Runners get Bash; Reviewers get Read-only.",
            "Use slash commands as orchestrators — sequential when there's dependency, parallel when tasks are independent.",
            "Tests must be written from the spec, not the code — the single most important principle for trustworthy test generation.",
            "Always review generated agent files — don't blindly trust auto-generated markdown.",
            "Subagents save context window space in your main session — heavy lifting happens in an isolated context that gets discarded.",
            "Build subagents for every project — testing, reviewing, migrating, documenting.",
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
