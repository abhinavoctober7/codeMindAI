import LessonLayout from "@/components/LessonLayout";

export default function Class4() {
  return (
    <LessonLayout slug="class-4">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 4</p>
        <h1 className="text-3xl font-bold text-white">Making Code Changes Using Claude Code</h1>
      </div>

      {/* 4.1 Pre-Coding Strategy */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-white">4.1 Pre-Coding Strategy: Plan Before You Prompt</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Before you ask Claude Code to write or modify any code, spend a moment crafting a
            precise, complete prompt. A polished prompt gets the right result on the first try —
            a sloppy one leads to back-and-forth corrections.
          </p>
        </div>

        {/* 6-step workflow */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-white">The Recommended Prompt Workflow:</p>
          <div className="flex flex-col gap-2">
            {[
              {
                step: 1,
                title: "Plan what you need",
                desc: "Think through the full scope of the change before opening Claude Code. Know which file to modify, what behaviour should change, and what must stay untouched.",
              },
              {
                step: 2,
                title: "Write a rough prompt in your own words",
                desc: "Don't worry about perfect phrasing. Just write down what you need as if explaining to a colleague.",
              },
              {
                step: 3,
                title: "Paste it into a chatbot to refine it",
                desc: "Use ChatGPT, Claude.ai, or any chatbot to turn your rough draft into a polished, detailed instruction.",
              },
              {
                step: 4,
                title: "Get back a polished, detailed prompt",
                desc: "The chatbot will add missing context, clarify edge cases, and structure the prompt so Claude Code can execute it without ambiguity.",
              },
              {
                step: 5,
                title: "Save all prompts in a file for reference",
                desc: "Keep a prompts.md or similar file. Reuse winning prompts across sessions — don't rewrite what already works.",
              },
              {
                step: 6,
                title: "Copy-paste the polished prompt into Claude Code",
                desc: "Now Claude Code receives a complete, precise instruction and can execute it in a single pass.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="mt-0.5 w-7 h-7 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-sm flex items-center justify-center font-bold shrink-0">
                  {step}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual flow diagram */}
        <div className="bg-[#0d1117] rounded-xl p-5 border border-white/10">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Workflow at a glance</p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {[
              { label: "Plan", color: "text-blue-400" },
              { label: "Draft prompt", color: "text-purple-400" },
              { label: "Refine with chatbot", color: "text-yellow-400" },
              { label: "Save prompt", color: "text-green-400" },
              { label: "Run in Claude Code", color: "text-[#cc785c]" },
            ].map(({ label, color }, i, arr) => (
              <span key={label} className="flex items-center gap-2">
                <span className={`${color} font-semibold`}>{label}</span>
                {i < arr.length - 1 && <span className="text-gray-600">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Why This Strategy Matters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Why This Strategy Matters</h2>
        <div className="flex flex-col gap-3">
          {[
            {
              num: 1,
              title: "Avoid Mistakes",
              desc: "Pre-written prompts eliminate typos and missing details that cause Claude Code to misunderstand the task and make unintended changes.",
              icon: "✗",
              iconColor: "text-red-400",
              iconBg: "bg-red-400/10",
            },
            {
              num: 2,
              title: "Completeness",
              desc: "A refined prompt covers all aspects — which file to modify, what changes to make, what NOT to change, styling requirements, and edge cases.",
              icon: "✓",
              iconColor: "text-green-400",
              iconBg: "bg-green-400/10",
            },
          ].map(({ num, title, desc, icon, iconColor, iconBg }) => (
            <div key={num} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <span className={`mt-0.5 w-7 h-7 rounded-full ${iconBg} ${iconColor} text-sm flex items-center justify-center font-bold shrink-0`}>
                {icon}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What a Complete Prompt Looks Like */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What a Complete Prompt Covers</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          A well-refined prompt answers all of these before Claude Code touches a single file:
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Element</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Which file to modify", "Edit src/components/Navbar.tsx only"],
                ["What change to make", "Add a dark mode toggle button to the right of the nav links"],
                ["What NOT to change", "Do not touch the logo, links, or mobile menu"],
                ["Styling requirements", "Use Tailwind classes, match existing text-sm font-medium style"],
                ["Edge cases", "The toggle should persist across page reloads using localStorage"],
              ].map(([element, example], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{element}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Prompt template */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Reusable Prompt Template</h2>
        <p className="text-sm text-gray-400">
          Copy this into your <code className="text-[#cc785c]">prompts.md</code> and fill it in before each task:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-5 border border-white/10">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">prompts.md</p>
          <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`File to modify   : [path/to/file.tsx]
What to change   : [describe the change clearly]
What NOT to touch: [list elements/sections to preserve]
Styling rules    : [Tailwind only / match existing classes / etc.]
Edge cases       : [any special behaviour or state to handle]`}</pre>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Never prompt Claude Code cold — always plan the full scope of the change first.",
            "Use a chatbot (ChatGPT, Claude.ai) as a prompt editor before pasting into Claude Code.",
            "Save every polished prompt to a file — reuse them across sessions to stay consistent.",
            "A complete prompt specifies what to change AND what to leave alone.",
            "Pre-written prompts eliminate the most common source of errors: missing or ambiguous instructions.",
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
