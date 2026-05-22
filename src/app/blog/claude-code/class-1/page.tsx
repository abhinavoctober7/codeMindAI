import LessonLayout from "@/components/LessonLayout";

export default function ClaudeCodeIntro() {
  return (
    <LessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 1</p>
        <h1 className="text-3xl font-bold text-white">Introduction</h1>
        <p className="text-gray-400 text-base leading-relaxed">Learn AI Coding the Right Way</p>
      </div>

      {/* 1.1 What is Claude Code */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 What is Claude Code?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Claude Code is an agentic coding tool developed by Anthropic (the company behind the Claude AI model).
          Unlike simple code-completion plugins, Claude Code acts as an intelligent coding partner that can
          understand your entire codebase, generate code, debug issues, refactor architecture, and even deploy
          applications — all from your terminal.
        </p>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Note</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Claude Code is not just another autocomplete tool. It is a full-fledged AI coding agent that
            understands context, follows instructions, and can autonomously perform complex software development tasks.
          </p>
        </div>
      </div>

      {/* 1.2 Why Now */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 Why Learn AI-Assisted Coding Now?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The instructor emphasises that now is the right time to learn AI-assisted coding tools. Here is the reasoning:
        </p>
        <div className="flex flex-col gap-3">
          {[
            { title: "The Shift in Software Development", desc: "Before AI coding tools, developers wrote every single line of code manually. With Claude Code, the role of a developer shifts from being a \"line-by-line coder\" to being more like a product manager or technical architect." },
            { title: "Real-World Impact", desc: "Many companies are already forcing their employees to adopt Claude Code and similar tools for daily software development work. It is expected that very few professional developers will work without AI assistance in the near future." },
            { title: "The Risk of Falling Behind", desc: "If you continue using only the traditional way of programming, you risk falling behind your competitors who are leveraging AI tools to achieve 10x productivity." },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.3 Vibe vs Agentic */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">1.3 Vibe Coding vs. AI-Assisted (Agentic) Coding</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          This is one of the most important distinctions in the playlist. The playlist explicitly states:{" "}
          <span className="text-white font-medium">&ldquo;We will NOT learn Vibe Coding.&rdquo;</span>
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">1.3.1 What is Vibe Coding?</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Vibe Coding is a modern software development approach where a person relies heavily on AI (LLMs) to
            generate, refine, and debug code based on natural language prompts.
          </p>
          <p className="text-sm text-gray-300 font-medium mt-1">The 3-Step Process of Vibe Coding:</p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`Step 1: User writes a plain English prompt
  Example: "Create a to-do list website for me"

Step 2: AI coding tool generates the entire code
  The tool returns a complete website codebase

Step 3: User tests -> finds bugs -> tells AI -> AI fixes -> repeat
  This loop continues until the website works correctly`}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">1.3.2 Where Vibe Coding Works vs. Where It Fails</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-950/40 border border-green-500/30 rounded-xl p-4">
              <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">Works Well (Low Stakes)</p>
              <ul className="flex flex-col gap-1.5">
                {["Building MVPs", "Exploring and prototyping ideas", "Hackathon projects", "Any low-stakes project"].map((i) => (
                  <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                    <span className="text-green-400">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-4">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">Fails (High Stakes)</p>
              <ul className="flex flex-col gap-1.5">
                {["Scalable systems (e.g., Google-level)", "Critical infrastructure software", "Banking and insurance software", "Anything with a lot of money on the line"].map((i) => (
                  <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                    <span className="text-red-400">✗</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">1.3.3 What is AI-Assisted / Agentic Coding?</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            AI-Assisted Coding (also called Agentic Coding) is the professional approach. The key differences:
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`Vibe Coding       →  You are a passenger, AI is driving blindly
AI-Assisted Coding →  You are the pilot, AI is your skilled co-pilot`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            In AI-Assisted Coding, you have deep technical understanding of the system. You guide the AI agent
            with specific, well-thought-out instructions. You review the code, understand the architecture,
            and make deliberate decisions.
          </p>
        </div>
      </div>

      {/* 1.5 Why Claude Code */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 Why Claude Code Over Other Tools?</h2>
        <p className="text-sm text-gray-400">Five Reasons Claude Code is Superior:</p>
        <div className="flex flex-col gap-2">
          {[
            { n: 1, title: "Best Raw Coding Intelligence", desc: "Powered by Anthropic's Opus model, handles complex features." },
            { n: 2, title: "Best Long Context Handling", desc: "Very large context window – can understand entire codebases." },
            { n: 3, title: "Better at Refactoring and Architecture", desc: "Excels at redesigning and refactoring code." },
            { n: 4, title: "Agentic Capabilities", desc: "Easily spin up multiple agents for parallel development." },
            { n: 5, title: "Senior Engineer Behaviour", desc: "Works like a senior software engineer, with deep understanding." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">{n}</span>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1.6 Goals */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.6 Goals of the Playlist</h2>
        <ol className="flex flex-col gap-2">
          {[
            { title: "Give a Flavour of AI-Assisted Coding", desc: "Experience firsthand what it feels like to build software with an AI partner." },
            { title: "Teach Fundamentals of Claude Code", desc: "Make you proficient in Claude Code – a skill in itself." },
            { title: "Eradicate Fear", desc: "Reduce fear about AI replacing developers through hands-on experience and education." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-white/10 text-gray-300 text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              <span><span className="font-medium text-white">{item.title}:</span> {item.desc}</span>
            </li>
          ))}
        </ol>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Note</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">The Horror Movie Analogy:</span> In horror movies, the ghost is
            scary only when hidden. Once revealed, it becomes less frightening. Similarly, once you learn
            AI-assisted coding yourself, your fear will reduce significantly.
          </p>
        </div>
      </div>

      {/* 1.8 Prerequisites */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.7 Prerequisites</h2>
        <div className="flex flex-col gap-2">
          {[
            { prereq: "Python", reason: "Used as the backend programming language" },
            { prereq: "Flask", reason: "Python web framework for the backend" },
            { prereq: "HTML & CSS (Basics)", reason: "Used for the frontend (user interface)" },
            { prereq: "Git & GitHub", reason: "Used throughout for version control" },
          ].map(({ prereq, reason }) => (
            <div key={prereq} className="flex items-center gap-4 bg-white/5 rounded-lg px-4 py-2.5 border border-white/10">
              <code className="text-sm text-[#cc785c] font-mono w-40 shrink-0">{prereq}</code>
              <p className="text-sm text-gray-400">{reason}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-950/40 border border-yellow-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-1">Important</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            If you don&apos;t have experience with Git and GitHub, you will face significant difficulties.
            The instructor strongly recommends completing a crash course on these topics before starting.
          </p>
        </div>
      </div>

      {/* 1.9 Role Transformation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.8 The Developer&apos;s Role Transformation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">Before Claude Code</p>
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Developer = Manual Coder
→ Writes every line of code by hand
→ Spends time on syntax, boilerplate, debugging
→ Productivity limited by typing speed and memory`}</pre>
          </div>
          <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">After Claude Code</p>
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Developer = Product Manager / Technical Architect
→ Has system-level understanding of what to build
→ Gives clear, specific instructions to AI agents
→ Reviews and guides the AI's output
→ Productivity increases 10x
→ Output quality also improves`}</pre>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          This transformation doesn&apos;t mean developers become useless. Instead, they move up the value chain —
          from being &ldquo;coders&rdquo; to being &ldquo;thinkers and architects&rdquo; who use AI as their execution engine.
        </p>
      </div>

      {/* 1.10 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.9 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Claude Code is an agentic AI coding tool from Anthropic — currently the most powerful AI coding tool available.",
            "Vibe Coding is great for MVPs and low-stakes projects but fails for scalable, production-grade software.",
            "AI-Assisted / Agentic Coding is the professional approach where you maintain technical understanding.",
            "Claude Code stands out due to raw coding intelligence, long context, agentic capabilities, and senior-engineer-level behaviour.",
            "This is the right time — AI-assisted coding is becoming the industry standard.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </LessonLayout>
  );
}
