import LessonLayout from "@/components/LessonLayout";

export default function Class3() {
  return (
    <LessonLayout slug="class-3">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 3</p>
        <h1 className="text-3xl font-bold text-white">Slash Commands in Claude Code</h1>
      </div>

      {/* 3.1 What Are Slash Commands */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.1 What Are Slash Commands?</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Slash commands are shortcuts you type inside a Claude Code session, starting with{" "}
          <code className="text-[#cc785c]">/</code>, that trigger a specific predefined action or
          workflow instantly — without writing out a full prompt.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">3.1.1 The Problem They Solve</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Programmers repeat the same types of requests over and over — closing sessions,
            switching models, checking usage, etc. Writing a full prompt every time for these
            repetitive tasks is inefficient.
          </p>
          <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Key Idea</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              One single word → Full prompt gets invoked → Entire repeatable workflow executes.
            </p>
          </div>
        </div>
      </div>

      {/* 3.2 Types */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.2 Types of Slash Commands</h2>
        <div className="flex flex-col gap-3">
          {[
            {
              num: 1,
              title: "Built-in Commands",
              desc: "Come pre-installed with Claude Code. Available immediately after installation.",
              examples: ["/exit", "/model", "/resume", "/config"],
            },
            {
              num: 2,
              title: "Custom Commands",
              desc: "Commands that you (the programmer) create for your specific workflow.",
              examples: [],
            },
          ].map(({ num, title, desc, examples }) => (
            <div key={num} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                  {num}
                </span>
                <span className="font-semibold text-white text-sm">{title}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              {examples.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {examples.map((ex) => (
                    <code key={ex} className="bg-[#0d1117] border border-white/10 text-[#cc785c] text-xs px-2 py-1 rounded-lg font-mono">
                      {ex}
                    </code>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          To see all available commands: type <code className="text-[#cc785c]">/</code> in the Claude
          Code terminal and scroll through the list using arrow keys.
        </p>
      </div>

      {/* 3.3 Sessions */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">3.3 Sessions in Claude Code</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">3.3.1 What is a Session?</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            A session is one conversation with Claude Code — everything from when you run{" "}
            <code className="text-[#cc785c]">claude</code> to when you type{" "}
            <code className="text-[#cc785c]">/exit</code>.
          </p>
          <p className="text-sm font-semibold text-white">Session Properties:</p>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Unique ID", desc: "Every session gets its own unique identifier." },
              { label: "Full Message History", desc: "Everything you type and Claude responds is stored within that session." },
              { label: "Current Working Directory", desc: "The session remembers which project directory you were in." },
              { label: "Auto-Saved", desc: "Sessions are saved to ~/.claude/projects/ and can be resumed." },
            ].map(({ label, desc }) => (
              <li key={label} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                <span><span className="font-semibold text-white">{label}</span> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">3.3.2 Resuming a Past Session</h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`claude -r          # Resume from terminal (before starting Claude Code)
# OR
/resume            # Used from INSIDE a running Claude Code session`}</pre>
          </div>
        </div>
      </div>

      {/* 3.4 Session Best Practices */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.4 Session Best Practices</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Best Practice</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Explanation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["One session = One task", "Create a separate session for each feature"],
                ["Name your session immediately", "Use /rename right away"],
                ["Commit frequently", "Create git commits at every important milestone"],
                ["Use /btw for quick questions", "Avoids polluting main conversation context"],
                ["Export before big refactors", "Use /export to save context as a file"],
              ].map(([practice, explanation], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{practice}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3.5 Built-in Slash Commands */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-white">3.5 Built-in Slash Commands — Detailed Reference</h2>

        {/* /exit */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.1 <code className="text-[#cc785c]">/exit</code> — Close the Current Session
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /exit`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Closes your current Claude Code session and returns you to the normal terminal. Use it
            whenever you finish working on a task/feature.
          </p>
        </div>

        {/* /resume */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.2 <code className="text-[#cc785c]">/resume</code> — Switch to a Different Session
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /resume`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Opens a list of all past sessions. Select the one you want and press Enter.
          </p>
        </div>

        {/* /rename */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.3 <code className="text-[#cc785c]">/rename</code> — Rename the Current Session
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /rename intro-session`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Renames the session. Proper names make it easy to identify sessions later.
          </p>
        </div>

        {/* /btw */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.4 <code className="text-[#cc785c]">/btw</code> — Ask a Side Question (Without Polluting Context)
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            <code className="text-[#cc785c]">/btw</code> stands for &quot;By The Way&quot;. It lets you ask quick
            reference questions that will <span className="font-semibold text-white">NOT</span> become
            part of your conversation history.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /btw What is Jinja templating engine in Flask?`}</pre>
          </div>
          <p className="text-sm font-semibold text-white">How it works:</p>
          <ol className="flex flex-col gap-2">
            {[
              "You are in the middle of developing a feature.",
              "A random question pops into your head.",
              "You type /btw followed by your question.",
              "Claude answers your side question in parallel (doesn't stop the main task).",
              "Press Spacebar to dismiss the answer.",
              "The question and answer disappear completely — they never enter your main context window.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* /export */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.5 <code className="text-[#cc785c]">/export</code> — Export the Session as a File
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /export file.md`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Creates a Markdown file containing the entire conversation. Very useful before
            performing a big refactoring.
          </p>
        </div>

        {/* /logout /login */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.6 <code className="text-[#cc785c]">/logout</code> / <code className="text-[#cc785c]">/login</code> — Account Management
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose">{`> /logout   # Log out of Claude Code (switch accounts)
> /login    # Trigger the login flow`}</pre>
          </div>
        </div>

        {/* /model */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">
            3.5.7 <code className="text-[#cc785c]">/model</code> — Switch Between AI Models
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /model`}</pre>
          </div>
          <p className="text-sm font-semibold text-white">Power-User Pattern for Models:</p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`Phase 1: PLANNING  (Use Opus)
-> Thinking through architecture
-> Writing specs and design docs

Phase 2: IMPLEMENTATION  (Switch to Sonnet)
-> The plan is ready
-> Everyday coding and feature building`}</pre>
          </div>
        </div>

        {/* /usage */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.8 <code className="text-[#cc785c]">/usage</code> — Check Your Token Usage
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /usage`}</pre>
          </div>
          <p className="text-sm text-gray-400">Shows:</p>
          <ul className="flex flex-col gap-2">
            {[
              "Current Session Usage — How many tokens used in this session.",
              "Weekly Usage — Your overall weekly limit across all sessions.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* /extra-usage */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.9 <code className="text-[#cc785c]">/extra-usage</code> — Top Up Your Token Balance
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /extra-usage`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            If you hit your usage limit mid-development, purchase additional tokens ($5 or $10
            top-up) to continue.
          </p>
        </div>

        {/* /stats */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.10 <code className="text-[#cc785c]">/stats</code> — View Usage Statistics
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /stats`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Provides a statistical overview: tokens used, models used, number of sessions, active
            days, longest session, current streak.
          </p>
        </div>

        {/* /insights */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.11 <code className="text-[#cc785c]">/insights</code> — Generate a Detailed Usage Report
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /insights`}</pre>
          </div>
          <p className="text-sm text-gray-400">Generates an HTML file with a comprehensive analysis including:</p>
          <ul className="flex flex-col gap-2">
            {[
              "Summary — what you're doing right and wrong",
              "Improvement suggestions",
              "Ambitious workflows you could try",
              "Section-wise detailed analysis",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* /config */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">
            3.5.12 <code className="text-[#cc785c]">/config</code> — Modify Claude Code Settings
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /config`}</pre>
          </div>
          <p className="text-sm text-gray-400">Opens a settings interface. Key settings:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Setting</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Default</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Auto-compact", "true", "Automatically compresses long conversations"],
                  ["Thinking mode", "true", "Enables step-by-step reasoning"],
                  ["Terminal progress bar", "true", "Shows a progress bar for long operations"],
                  ["Show turn duration", "true", "Shows how long each turn takes"],
                  ["Default permission mode", "Default", "Controls default tool permissions"],
                  ["Auto-update channel", "latest", "Which update channel to follow"],
                ].map(([setting, def, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{setting}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{def}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* /permissions */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">
            3.5.13 <code className="text-[#cc785c]">/permissions</code> — Manage Tool Permissions
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /permissions`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Claude Code is an agent with access to tools: Reading Tool, Writing Tool, Bash Tool,
            Web Search Tool. By default, Claude Code asks for permission before using any tool.
          </p>
          <p className="text-sm font-semibold text-white">The Permission Interface has four tabs:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Tab</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Allow", "Tools used without asking for permission"],
                  ["Ask", "Tools that always ask before each use (default)"],
                  ["Deny", "Tools that will never be used"],
                  ["Workspace", "Workspace-level permission settings"],
                ].map(([tab, meaning], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{tab}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm font-semibold text-white">Permission Scopes:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Scope</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What It Means</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Local project setting", "Applies only to you, only in this project"],
                  ["Global project setting", "Applies to everyone (stored in .claude/ folder)"],
                  ["User setting", "Applies to all projects on your machine"],
                ].map(([scope, meaning], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{scope}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Important</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Be extremely careful about which tools you put in the &quot;Allow&quot; list. Only allow
              things that are safe to run without your review.
            </p>
          </div>
        </div>

        {/* /theme */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.14 <code className="text-[#cc785c]">/theme</code> — Change the Appearance
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /theme`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lets you switch between Dark mode (default), Light mode, and other theme options.
          </p>
        </div>

        {/* /voice */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            3.5.15 <code className="text-[#cc785c]">/voice</code> — Enable Voice Input Mode
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /voice`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Enables voice mode. Press and hold the{" "}
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs text-white">Spacebar</kbd>,
            speak your prompt, release the{" "}
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs text-white">Spacebar</kbd>.
            Type <code className="text-[#cc785c]">/voice</code> again to disable.
          </p>
        </div>
      </div>

      {/* 3.6 Quick Reference */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.6 Quick Reference — All Key Slash Commands</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Command</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Purpose</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Category</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["/exit", "Close the current session", "Session Management"],
                ["/resume", "Switch to a different past session", "Session Management"],
                ["/rename <name>", "Rename the current session", "Session Management"],
                ["/btw <q>", "Ask a side question without polluting context", "Productivity"],
                ["/export <file>", "Export conversation to a file", "Data Management"],
                ["/logout", "Log out of Claude Code", "Account"],
                ["/login", "Log in to Claude Code", "Account"],
                ["/model", "Switch between Opus / Sonnet / Haiku", "Model Management"],
                ["/usage", "Check current token usage", "Monitoring"],
                ["/extra-usage", "Purchase additional tokens", "Monitoring"],
                ["/stats", "View usage statistics", "Analytics"],
                ["/insights", "Generate a detailed usage analysis report", "Analytics"],
                ["/config", "Modify Claude Code settings", "Configuration"],
                ["/permissions", "Manage tool permission rules", "Security"],
                ["/theme", "Change visual appearance", "Personalization"],
                ["/voice", "Toggle voice input mode", "Input"],
              ].map(([cmd, purpose, category], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{cmd}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{purpose}</td>
                  <td className="px-4 py-2.5 text-gray-500 text-xs">{category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3.7 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.7 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Without slash commands, Claude Code would require full prompts for every repeated action.",
            "Start simple: learn /exit, /model, /rename, /btw, and /usage first.",
            "Session discipline: Always follow the one-session-per-task rule, rename sessions immediately, and commit frequently.",
            "Model strategy: Use Opus for planning and architecture → Switch to Sonnet for implementation.",
            "Monitor your usage: Regularly check /usage to avoid hitting limits unexpectedly.",
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
