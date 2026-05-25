import LessonLayout from "@/components/LessonLayout";

export default function Class10() {
  return (
    <LessonLayout slug="class-10">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 10</p>
        <h1 className="text-3xl font-bold text-white">Claude Skills — Complete Guide</h1>
      </div>

      {/* 10.1 Introduction */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.1 Introduction &amp; Why Skills Matter</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Skills is one of the most important concepts in the Claude ecosystem because it is{" "}
            <span className="font-semibold text-white">not limited to Claude Code</span>. Skills apply
            across the entire Claude ecosystem:
          </p>
        </div>
        <ul className="flex flex-col gap-2">
          {["Claude Code (CLI)", "Regular Claude chatbot (claude.ai)", "Claude Cowork"].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400 leading-relaxed">
          Learning Skills once means you can apply the concept everywhere Claude is used.
        </p>
      </div>

      {/* 10.2 The Core Problem */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">10.2 The Core Problem — General AI vs Specialized Tasks</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">10.2.1 Claude (and other LLMs) Are General-Purpose</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Claude, ChatGPT, and Gemini are general-purpose language models. They can reason, write,
            code, and work across many domains. But there is a gap:
          </p>
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl px-4 py-3">
            <p className="text-sm text-gray-300 leading-relaxed">
              There&apos;s a gap between{" "}
              <span className="font-semibold text-white">general capability</span> and{" "}
              <span className="font-semibold text-white">reliable, high-quality output</span> for a
              specific task type.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">10.2.2 Example — PPT Generation</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-green-400 font-semibold">Claude knows</th>
                  <th className="px-4 py-2.5 text-red-400 font-semibold">Claude does NOT know</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["What PowerPoint is", "How to handle your company's layout"],
                  ["How to structure slides", "Which fonts your company uses"],
                  ["Which Python library to use", "Where to plot charts vs tables"],
                  ["—", "Your company's design guidelines"],
                ].map(([knows, doesnt], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-green-300/80 text-xs">{knows}</td>
                    <td className="px-4 py-2.5 text-red-300/80 text-xs">{doesnt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            This gap shows up in frontend development, data analysis, writing documents, and code
            review — anywhere your team has specialized conventions.
          </p>
        </div>
      </div>

      {/* 10.3 Why Detailed Prompts Don't Solve This */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.3 Why Detailed Prompts Don&apos;t Solve This</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Problem</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Why it hurts</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Remember & Retype Every Time", "For repeated tasks, you have to paste the same huge prompt each time"],
                ["2", "Context Window Gets Burned", "A 20,000-token instruction sits in context always, eating up space"],
                ["3", "Hard to Bundle Resources", "A prompt is just text; you can't attach reference PDFs or scripts cleanly"],
                ["4", "You Can't Share / Version / Improve", "No clean collaboration on prompts"],
                ["5", "Prompts Don't Compose", "Stuffing 3 sub-tasks into one prompt confuses the LLM"],
              ].map(([num, problem, why], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-bold">{num}</td>
                  <td className="px-4 py-2.5 text-white text-xs font-semibold">{problem}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 10.4 What Are Skills */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">10.4 What Are Skills?</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Skills are <span className="font-semibold text-white">reusable, file-based resources</span>{" "}
            that provide Claude with domain-specific expertise — such as workflows, context, and best
            practices — that transform general-purpose agents into specialists.
          </p>
        </div>
        <ul className="flex flex-col gap-2">
          {[
            "A Skill is a folder inside your project (or home directory).",
            "Inside that folder are files that teach Claude how to carry out a specialized task.",
            "Skills load on-demand — only when needed.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Aspect</th>
                <th className="px-4 py-2.5 text-yellow-400 font-semibold">Prompts</th>
                <th className="px-4 py-2.5 text-[#cc785c] font-semibold">Skills</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Nature", "Instructions for one-off tasks", "Reusable knowledge package"],
                ["Loading", "Always in context", "Just-in-time — loaded only when needed"],
                ["Resources", "Just text", "Files, scripts, templates, references"],
                ["Sharing", "Personal, hard to share", "Git-friendly, versionable"],
                ["Composition", "Don't compose well", "Compose like links"],
              ].map(([aspect, prompt, skill], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{aspect}</td>
                  <td className="px-4 py-2.5 text-yellow-300/80 text-xs">{prompt}</td>
                  <td className="px-4 py-2.5 text-[#cc785c]/90 text-xs">{skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 10.5 Skill Folder Structure */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.5 Skill Folder Structure</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
          <pre className="text-xs text-gray-300 font-mono leading-relaxed">{`your-project/
└── .claude/
    └── skills/
        ├── ppt-generator/
        │   ├── SKILL.md          ← REQUIRED
        │   ├── scripts/          ← Python scripts (optional)
        │   ├── templates/        ← Slide templates (optional)
        │   └── resources/        ← Reference docs (optional)
        ├── frontend-design/
        │   └── SKILL.md
        └── code-review/
            └── SKILL.md`}</pre>
        </div>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Folder</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Purpose</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Example use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SKILL.md", "Holds entry point — master instructions", "Main instructions"],
                ["scripts/", "Executable code", "validate.py, plotting scripts"],
                ["resources/", "Reference docs loaded on demand", "xml-schema.md, style guides"],
                ["assets/", "Templates, fonts, images", "Slide template .pptx, logo files"],
              ].map(([folder, purpose, example], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{folder}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{purpose}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-300">
            <span className="font-mono text-white">SKILL.md</span> is the{" "}
            <span className="font-semibold text-white">only required file</span>. Everything else is
            optional.
          </p>
        </div>
      </div>

      {/* 10.6 Anatomy of SKILL.md */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">10.6 Anatomy of SKILL.md</h2>
        <p className="text-sm text-gray-400">Every SKILL.md has two parts:</p>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">10.6.1 Part 1 — YAML Frontmatter</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-sm text-gray-300 font-mono leading-relaxed">{`---
name: docx
description: When to trigger this skill — described in clear
             language so Claude knows when to load it.
---`}</pre>
          </div>
          <ul className="flex flex-col gap-1.5">
            {[
              <><span className="font-mono text-[#cc785c]">name</span> — the unique identifier Claude uses to recognize the skill.</>,
              <><span className="font-mono text-[#cc785c]">description</span> — the most critical part. Claude reads this to decide <span className="font-semibold text-white">WHEN</span> to trigger the skill.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">10.6.2 Part 2 — Markdown Body</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            This is where the detailed expertise lives: step-by-step instructions, code patterns,
            pitfalls to avoid, validation steps, and links to supporting files.
          </p>
          <p className="text-sm text-gray-400">Example linking pattern inside the body:</p>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-sm text-gray-300 font-mono">{`To plot this kind of graph, use the following script:
[Run plot_chart.py](./scripts/plot_chart.py)`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            When Claude reads the body and hits this link, it knows to load that script (Level 3 of
            progressive disclosure).
          </p>
        </div>
      </div>

      {/* 10.7 Progressive Disclosure */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.7 How Skills Load — Progressive Disclosure</h2>
        <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Core idea:</span> Don&apos;t present information
            until the moment it&apos;s needed.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {[
            {
              level: "Level 1",
              what: "Just the YAML frontmatter (name + description) of all skills",
              when: "Always — at session start",
              color: "text-blue-400",
              bg: "bg-blue-950/20 border-blue-500/20",
            },
            {
              level: "Level 2",
              what: "The full SKILL.md body of a matching skill",
              when: "On demand — when Claude detects user intent matches a skill",
              color: "text-green-400",
              bg: "bg-green-950/20 border-green-500/20",
            },
            {
              level: "Level 3",
              what: "Referenced resources (scripts, templates)",
              when: "Only when the body tells Claude to read them",
              color: "text-purple-400",
              bg: "bg-purple-950/20 border-purple-500/20",
            },
          ].map(({ level, what, when, color, bg }) => (
            <div key={level} className={`border rounded-xl p-4 flex flex-col gap-1 ${bg}`}>
              <p className={`text-xs font-bold uppercase tracking-widest ${color}`}>{level}</p>
              <p className="text-sm text-white font-semibold">{what}</p>
              <p className="text-xs text-gray-400">{when}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          If you have 10 skills, at Level 1 Claude only carries ~10 short descriptions. Massive
          instructions only enter context when actually needed.
        </p>
      </div>

      {/* 10.8 Personal vs Project */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.8 Types of Skills — Personal vs Project</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Type</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Location</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Scope</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Use case</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Personal Skills", "~/.claude/skills/", "All projects", "Personal coding/writing style"],
                ["Project Skills", "<project>/.claude/skills/", "Only this project", "Team-shared, push to Git"],
              ].map(([type, loc, scope, use], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{type}</td>
                  <td className="px-4 py-2.5 text-gray-300 font-mono text-xs">{loc}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{scope}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 10.9 Ways to Create Skills */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.9 Ways to Create Skills</h2>
        <div className="flex flex-col gap-2">
          {[
            {
              num: "1",
              title: "Create Manually",
              desc: "Create a folder + SKILL.md and write it yourself. Technically simple, but not recommended for beginners.",
              tag: null,
            },
            {
              num: "2",
              title: "Use Claude's skill-creator Skill",
              desc: "Claude ships with a built-in skill-creator skill. Click + → Skills → pick skill-creator. It asks guiding questions and drafts a polished SKILL.md.",
              tag: "Recommended",
            },
            {
              num: "3",
              title: "Install from Community Sources",
              desc: "Many people share skills publicly.",
              tag: null,
              warning: "Security warning: Random community skills can have security flaws. Real cases exist where API keys leaked from untrusted skills. Safest bet: use Anthropic's official skills repository.",
            },
          ].map(({ num, title, desc, tag, warning }) => (
            <div key={num} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                  {num}
                </span>
                <p className="text-sm font-semibold text-white">{title}</p>
                {tag && (
                  <span className="ml-1 text-xs bg-green-400/10 text-green-400 border border-green-400/20 rounded px-2 py-0.5">
                    {tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pl-8">{desc}</p>
              {warning && (
                <div className="ml-8 bg-red-950/30 border border-red-500/30 rounded-lg px-3 py-2">
                  <p className="text-xs text-red-300 leading-relaxed">
                    <span className="font-semibold">Security warning:</span> Random community skills can
                    have security flaws. Real cases exist where API keys leaked from untrusted skills.
                    Safest bet: use Anthropic&apos;s official skills repository.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 10.10 Steps to Create a Skill */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.10 Steps to Create a Skill</h2>
        <div className="flex flex-col gap-2">
          {[
            { title: "Identify the need", desc: "Only create skills for specialized tasks that you do repeatedly." },
            { title: "Create the directory + SKILL.md", desc: "Under .claude/skills/." },
            { title: "Add supporting files (if needed)", desc: "Scripts, templates, resources." },
            { title: "Test the skill", desc: "Run it on real prompts." },
            { title: "Iterate and refine", desc: "Expect 4–5 iterations before a truly usable skill." },
          ].map(({ title, desc }, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <span className="mt-0.5 w-7 h-7 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 10.11 How Skills Solve Every Prompt Limitation */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">10.11 How Skills Solve Every Prompt Limitation</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                <th className="px-4 py-2.5 text-red-400 font-semibold">Prompt Problem</th>
                <th className="px-4 py-2.5 text-green-400 font-semibold">How Skills Fix It</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Have to retype every time", "File is saved once; auto-loads when needed"],
                ["2", "Context window gets burned", "Only description is always in context; body loads on-demand"],
                ["3", "Hard to bundle resources", "Folder structure allows scripts, templates, resources"],
                ["4", "Can't share/version/improve", "Skills are files — push to Git, teammates collaborate"],
                ["5", "Prompts don't compose", "Skills compose like links — one skill's body can reference another"],
              ].map(([num, problem, fix], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-500 font-mono text-xs">{num}</td>
                  <td className="px-4 py-2.5 text-red-300/80 text-xs">{problem}</td>
                  <td className="px-4 py-2.5 text-green-300/80 text-xs">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">10.11.1 Composition Example</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Imagine three skills:{" "}
            <span className="font-mono text-[#cc785c]">read-pdf</span> →{" "}
            <span className="font-mono text-[#cc785c]">extract-tables</span> →{" "}
            <span className="font-mono text-[#cc785c]">make-ppt</span>. Inside{" "}
            <span className="font-mono text-white">make-ppt/SKILL.md</span> you can link to{" "}
            <span className="font-mono text-white">extract-tables</span>, which links to{" "}
            <span className="font-mono text-white">read-pdf</span>. When you ask Claude to &quot;make a
            PPT from this PDF&quot;, it transitively loads all three — only when needed.
          </p>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-mono">
              <span className="text-blue-400">read-pdf</span>
              <span className="text-gray-500">→</span>
              <span className="text-green-400">extract-tables</span>
              <span className="text-gray-500">→</span>
              <span className="text-[#cc785c]">make-ppt</span>
            </div>
          </div>
        </div>
      </div>

      {/* 10.12 Practical Walkthrough */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">10.12 Practical Walkthrough — Profile Page Project</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">10.12.1 The Plan</h3>
          <ol className="flex flex-col gap-2">
            {[
              "Build the Profile Page without a skill (baseline).",
              "Create a frontend-design skill.",
              "Rebuild Profile Page with the skill.",
              "Compare the difference.",
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
          <h3 className="text-base font-semibold text-white">10.12.2 Using skill-creator</h3>
          <ol className="flex flex-col gap-2">
            {[
              'Open claude → click + → Skills → skill-creator → Enter.',
              'Claude asks: "What would you like to do?" → "Create a new skill from scratch".',
              "Answer 3 questions: What will the skill do? When should it trigger? What does success look like?",
              "Claude drafts the SKILL.md content.",
              "Copy the output → paste into: <project>/.claude/skills/frontend-design/SKILL.md",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-400/20 text-blue-400 text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Critical</p>
            <p className="text-sm text-gray-300">
              Skills only become usable after restarting Claude. Just like commands. Run{" "}
              <span className="font-mono text-white">claude -r</span> to resume with a restart.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">10.12.3 Result Comparison</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-red-400 font-semibold">Without Skill</th>
                  <th className="px-4 py-2.5 text-green-400 font-semibold">With Skill</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Decent UI, big standalone "Category" card', "Categories merged smartly into Transaction table"],
                  ["Default font choices", "Slightly improved typography"],
                  ["Larger cards", "More compact, balanced layout"],
                ].map(([without, with_], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-red-300/80 text-xs">{without}</td>
                    <td className="px-4 py-2.5 text-green-300/80 text-xs">{with_}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400">When the skill loads, you see the confirmation:</p>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-green-400 font-mono leading-relaxed">{`Successfully loaded skill: frontend-design
Now let me invoke the frontend-design skill as requested
for design guidance.`}</pre>
          </div>
        </div>
      </div>

      {/* 10.13 Skills × Commands Merger */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">10.13 Skills × Commands — The Merger</h2>
        <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Big Update from Anthropic</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Commands and Skills have been{" "}
            <span className="font-semibold text-white">merged</span>. Going forward, only Skills exist.
          </p>
          <ul className="flex flex-col gap-1.5 mt-3">
            {[
              "The .claude/commands/ folder will no longer exist in new projects.",
              "Anything previously put as a command goes into .claude/skills/ instead.",
              "Each command now lives as a skill folder with its own SKILL.md.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-amber-400 mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Behavior</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Slash Command</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Skill</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Triggered by", "User typing /cmd", "Auto-invoked by Claude when relevant"],
                ["Discovery", "Explicit", "Automatic"],
              ].map(([behavior, cmd, skill], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{behavior}</td>
                  <td className="px-4 py-2.5 text-yellow-300/80 text-xs">{cmd}</td>
                  <td className="px-4 py-2.5 text-[#cc785c]/90 text-xs">{skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          Type <span className="font-mono text-white">/</span> in a new Claude Code session — you&apos;ll
          see all your skills listed, including{" "}
          <span className="font-mono text-[#cc785c]">frontend-design</span>. You can explicitly invoke
          any skill via <span className="font-mono text-white">/</span>.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">10.13.1 Stopping Auto-Invocation</h3>
          <p className="text-sm text-gray-400">
            If you want a skill to only trigger when the user explicitly calls it, add this to its YAML
            frontmatter:
          </p>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-sm text-gray-300 font-mono">{`---
name: my-command-like-skill
description: ...
disable-model-invocation: true
---`}</pre>
          </div>
        </div>
      </div>

      {/* 10.14 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.14 Key Takeaways</h2>
        <ul className="flex flex-col gap-2">
          {[
            "LLMs are great at general tasks, but fail at specialized + repeated ones.",
            "Detailed prompts are not enough for specialized, repeated, multi-step workflows.",
            "Skills are the answer: reusable, file-based, on-demand expertise packs.",
            "Progressive Disclosure solves the context window burn problem.",
            "Skills are composable — one skill's body can reference and trigger other skills.",
            "Commands and Skills have been merged in Claude Code.",
            "Expect 4–5 iterations before a skill is truly reliable.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-2">Best Practice</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The 5-step recipe for any new skill:{" "}
            <span className="text-white font-semibold">(1) Identify the need</span>,{" "}
            <span className="text-white font-semibold">(2) Create folder + SKILL.md</span>,{" "}
            <span className="text-white font-semibold">(3) Add supporting files</span>,{" "}
            <span className="text-white font-semibold">(4) Test</span>,{" "}
            <span className="text-white font-semibold">(5) Iterate</span>.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
