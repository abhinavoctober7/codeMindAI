import LessonLayout from "@/components/LessonLayout";

export default function Class6() {
  return (
    <LessonLayout slug="class-6">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 6</p>
        <h1 className="text-3xl font-bold text-white">CLAUDE.md, the .claude Folder, and Auto Memory</h1>
      </div>

      {/* 6.1 Why CLAUDE.md is Needed */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">6.1 Why CLAUDE.md is Needed</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.1.1 The Memory Problem</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            LLMs are stateless — whatever you discussed with the LLM yesterday, it does not
            remember today. Since Claude Code is built on top of Anthropic&apos;s LLMs, Claude Code
            inherits this same limitation.
          </p>
          <p className="text-sm font-semibold text-white">This creates a real problem:</p>
          <div className="flex flex-col gap-2">
            {[
              "Every new session requires re-explaining the entire project from scratch.",
              "This is extremely cumbersome (lots of typing).",
              "This is error-prone — you might forget something important, leading to inconsistent code generation.",
              "Large projects become very painful to manage this way.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-red-950/20 border border-red-500/20 rounded-xl p-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-red-400/10 text-red-400 text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.1.2 The Natural Solution</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            What if we could create a single file that stores all the project&apos;s details, and
            have Claude Code automatically read this file at the start of every session?
          </p>
          <div className="bg-green-950/40 border border-green-500/30 rounded-xl p-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              That file is exactly what <code className="text-[#cc785c] font-semibold">CLAUDE.md</code> is.
            </p>
          </div>
        </div>
      </div>

      {/* 6.2 What is CLAUDE.md */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.2 What is CLAUDE.md?</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The <code className="text-[#cc785c]">CLAUDE.md</code> file is a special project-level
            instruction file used by Claude Code to guide how it behaves while working on your
            codebase. Think of it as a{" "}
            <span className="font-semibold text-white">persistent system prompt for your project</span>.
          </p>
        </div>
        <p className="text-sm font-semibold text-white">Key Characteristics:</p>
        <ul className="flex flex-col gap-2">
          {[
            "It is simply a Markdown file — nothing technically fancy.",
            "You write all your project's details, instructions, conventions, and constraints into it.",
            "It lives in your project directory.",
            "Every time a new session starts, Claude Code automatically pulls this file and uses it.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 6.3 How to Create */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">6.3 How to Create CLAUDE.md</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.3.1 Method 1: Manually</h3>
          <ol className="flex flex-col gap-2">
            {[
              "Go to your project's root directory.",
              "Create a new file named CLAUDE.md (must be in CAPITALS).",
              "Manually fill it with your project details.",
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

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            6.3.2 Method 2: Using <code className="text-[#cc785c]">/init</code> — Recommended
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono">{`> /init`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Claude Code scans your entire codebase and auto-generates a <code className="text-[#cc785c]">CLAUDE.md</code> file.
          </p>
          <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Important</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              The auto-generated CLAUDE.md is only ~30% useful out of the box. The remaining 70% —
              workflows, constraints, what to avoid, deployment targets, naming conventions, business
              logic — you have to write yourself.
            </p>
          </div>
        </div>
      </div>

      {/* 6.4 Ideal CLAUDE.md Content */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">6.4 Content of an Ideal CLAUDE.md</h2>
        <p className="text-sm text-gray-400">A well-structured CLAUDE.md typically contains six sections:</p>

        <div className="flex flex-col gap-3">
          {[
            {
              num: "6.4.1",
              title: "Project Overview / Context",
              desc: "A short one-line description so Claude immediately understands what it is building or modifying.",
              example: `"This is a FastAPI backend for a health-tracking application that stores patient BMI records."`,
              isCode: false,
            },
            {
              num: "6.4.2",
              title: "Architecture",
              desc: "Explains how the codebase is structured.",
              example: `- Routes live in routers/\n- Business logic lives in services/\n- Schemas live in schemas/\n- Persistence logic lives in repository/`,
              isCode: true,
            },
            {
              num: "6.4.3",
              title: "Code Style",
              desc: "Tells Claude how code should look.",
              example: `- Use Python type hints everywhere.\n- Prefer Pydantic models for request/response schemas.\n- Keep functions small and focused.`,
              isCode: true,
            },
            {
              num: "6.4.4",
              title: "Preferred Libraries & Tools",
              desc: "Constrains what tools Claude should use — and what it should NOT introduce.",
              example: null,
              isCode: false,
            },
            {
              num: "6.4.5",
              title: "Commands",
              desc: "Lists the exact commands for running, testing, and maintaining the project.",
              example: `# Install dependencies\npip install -r requirements.txt\n\n# Run dev server\nuvicorn main:app --reload\n\n# Run tests\npytest`,
              isCode: true,
            },
            {
              num: "6.4.6",
              title: "Critical Rules / Warnings / Things to Avoid",
              desc: "Hard constraints Claude must never violate.",
              example: `- Do not modify database.py unless absolutely necessary.\n- Patient IDs are provided by the client; do not auto-generate UUIDs.`,
              isCode: true,
            },
          ].map(({ num, title, desc, example, isCode }) => (
            <div key={num} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500">{num}</span>
                <span className="text-sm font-semibold text-white">{title}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              {example && (
                isCode ? (
                  <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10">
                    <pre className="text-xs text-green-400 font-mono leading-loose whitespace-pre-wrap">{example}</pre>
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 italic border-l-2 border-[#cc785c]/40 pl-3">{example}</p>
                )
              )}
            </div>
          ))}
        </div>

        {/* Bonus: Development Roadmap */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">Bonus: Development Roadmap</h3>
          <p className="text-sm text-gray-400">List routes/features with a status column directly in CLAUDE.md:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Route</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["POST /patients", "Done", true],
                  ["GET /patients/{id}", "Done", true],
                  ["PUT /patients/{id}", "Pending", false],
                  ["DELETE /patients/{id}", "Pending", false],
                ].map(([route, status, done], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{route as string}</td>
                    <td className={`px-4 py-2.5 text-xs font-semibold ${done ? "text-green-400" : "text-yellow-400"}`}>
                      {status as string}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 6.5 The .claude Folder */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">6.5 The .claude Folder Explained</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The <code className="text-[#cc785c]">.claude</code> folder is a local configuration
            directory that controls how Claude behaves — either for a specific project or across all
            projects. It stores all config related info about skills, custom slash commands,
            sub-agents, etc.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.5.1 Two Types of .claude Folders</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Aspect</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Project-level</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Global / User-level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Location", "<project>/.claude/", "~/.claude/ (home directory)"],
                  ["Scope", "This project only", "Every project on your machine"],
                  ["Shared with team", "Yes (in the repo)", "No (only on your machine)"],
                ].map(([aspect, proj, global_], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{aspect}</td>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{proj}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs font-mono">{global_}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.5.2 What&apos;s Inside .claude/</h3>
          <div className="bg-[#0d1117] rounded-xl p-5 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`.claude/
├── settings.local.json   # Tool permissions (personal, not shared)
├── commands/             # Custom slash commands
├── rules/                # Split CLAUDE.md content (loaded lazily)
├── skills/               # Reusable task-specific skill files
└── agents/               # Sub-agent definitions`}</pre>
          </div>
        </div>
      </div>

      {/* 6.6 5 Types of CLAUDE.md */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.6 Types of CLAUDE.md Files (5 Types)</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Type</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Location</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Auto-loaded?</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Shared?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Project Root", "./CLAUDE.md", "Every session", "Yes (committed)"],
                ["2", "Inside .claude", "./.claude/CLAUDE.md", "Every session", "Yes (committed)"],
                ["3", "Local / Personal", "./CLAUDE.local.md", "Every session", "No (gitignored)"],
                ["4", "Global / User", "~/.claude/CLAUDE.md", "Every session (all projects)", "No (personal)"],
                ["5", "Subdirectory", "./folder/CLAUDE.md", "Lazy (when needed)", "Yes (committed)"],
              ].map(([num, type, location, loaded, shared], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-500 text-xs font-mono">{num}</td>
                  <td className="px-4 py-2.5 text-white text-xs font-semibold">{type}</td>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{location}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{loaded}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{shared}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6.7 Good Practices */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.7 Good Practices for CLAUDE.md</h2>
        <div className="flex flex-col gap-2">
          {[
            {
              title: "Start with /init, then Prune Aggressively",
              desc: "Use /init as a starting point, then remove anything unnecessary.",
            },
            {
              title: "Commit It to Git",
              desc: "Treat CLAUDE.md as part of your codebase.",
            },
            {
              title: "Only Put Universally Applicable Things",
              desc: "If something only applies to a specific feature, don't put it in CLAUDE.md.",
            },
            {
              title: "Use Emphasis Sparingly",
              desc: "If everything is IMPORTANT, nothing is. Many people abuse IMPORTANT and put it 10–12 times in one file. Reserve it only for truly critical rules.",
              warning: true,
            },
            {
              title: "Keep It Short — Under 200 Lines",
              desc: "As instruction count increases, instruction-following quality decreases. The sweet spot is 200–300 lines maximum.",
            },
            {
              title: "Treat It as a Living Document",
              desc: "After every feature, refresh CLAUDE.md. Build it organically.",
            },
            {
              title: "Correct Once, Then Codify",
              desc: "If Claude keeps making the same mistake, add an instruction to CLAUDE.md.",
            },
            {
              title: "Audit Periodically",
              desc: "Review CLAUDE.md weekly or monthly. Old instructions may become counter-productive.",
            },
          ].map(({ title, desc, warning }, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 border rounded-xl p-4 ${
                warning
                  ? "bg-amber-950/20 border-amber-500/20"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6.8 Large CLAUDE.md */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">6.8 Handling Large CLAUDE.md — 3 Solutions</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Solution</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Best For</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">How Loading Works</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Split into rules/", "Topic-based separation", "Lazy — loads when topic needed"],
                ["@ imports", "Reusing existing docs", "Loads when file is referenced"],
                ["Subdirectory CLAUDE.md", "Multi-area projects", "Lazy — loads when in that folder"],
              ].map(([solution, bestFor, loading], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{solution}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{bestFor}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{loading}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            6.8.1 Solution 1 — Split into <code className="text-[#cc785c]">.claude/rules/</code> Files
          </h3>
          <div className="bg-[#0d1117] rounded-xl p-5 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`.claude/rules/
├── code-style.md
├── testing.md
├── security.md
└── api-conventions.md`}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.8.2 Solution 2 — Use @ Imports</h3>
          <div className="bg-[#0d1117] rounded-xl p-5 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`## API Conventions
See @docs/api-guidelines.md

## Git Workflow
See @docs/contributing.md`}</pre>
          </div>
        </div>
      </div>

      {/* 6.9 Auto Memory */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">6.9 Auto Memory in Claude Code</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Auto Memory is a persistent directory where Claude records learnings, patterns, and
            insights as it works. When Claude discovers something about your project, it silently
            saves it to auto-memory. Next session, it already knows.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.9.1 Where is memory.md Stored?</h3>
          <div className="bg-[#0d1117] rounded-xl p-5 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`~/.claude/
└── projects/
    └── <your-project-name>/
        └── memory/
            └── memory.md   ← here!`}</pre>
          </div>
          <p className="text-sm font-semibold text-white mt-1">Example content:</p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`- This project uses IST (Indian Standard Time) timezone
- Project uses INR, not USD`}</pre>
          </div>
          <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Important</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              When a new session starts, memory.md is loaded — but only the{" "}
              <span className="font-semibold text-white">top 200 lines</span>. Manage and prune it
              as it grows.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.9.2 Adding Memories Manually</h3>
          <p className="text-sm text-gray-400">You can instruct Claude to save things:</p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`> Update your memory file. We use INR, not USD.

> Based on whatever we discussed in this session, update your memory.md`}</pre>
          </div>
        </div>
      </div>

      {/* 6.10 /memory */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">
          6.10 The <code className="text-[#cc785c]">/memory</code> Slash Command
        </h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono">{`> /memory`}</pre>
        </div>
        <p className="text-sm text-gray-400">When you type <code className="text-[#cc785c]">/memory</code>, you get three options:</p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Option</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Opens</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Project Memory", "Your project's CLAUDE.md"],
                ["User Memory", "The home-directory ~/.claude/CLAUDE.md"],
                ["Open Auto Memory Folder", "The memory.md file"],
              ].map(([option, opens], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{option}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{opens}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">6.10.1 Key Insight</h3>
          <p className="text-sm text-gray-400">All three files are memory files — but with different authors:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">File</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Who writes it?</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What is it?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CLAUDE.md (project)", "The programmer", "Project-level memory"],
                  ["CLAUDE.md (user)", "The programmer", "Personal / global memory"],
                  ["memory.md", "Claude itself", "Auto-learned memory"],
                ].map(([file, who, what], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{file}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{who}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 6.11 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.11 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "CLAUDE.md is a persistent system prompt for your project.",
            "Use /init as a starting point, then customize. Auto-generated is only ~30% useful.",
            ".claude folder is a configuration toolbox at both project-level and global level.",
            "5 types of CLAUDE.md based on location — root, .claude/, .local.md, global, subdirectory.",
            "Keep it short (under 200 lines) — instruction-following quality drops as size grows.",
            "Auto Memory (memory.md) automatically captures Claude's learnings and persists them across sessions.",
            "CLAUDE.md and memory.md are both memory files — the difference is who writes them.",
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
