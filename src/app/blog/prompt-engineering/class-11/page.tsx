import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass11() {
  return (
    <PromptEngineeringLessonLayout slug="class-11">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 11 — Break It Down, Build It Up</p>
        <h1 className="text-3xl font-bold text-white">Prompt Chaining — One Prompt, One Task, One Objective</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Asking a model to read, summarize, extract insights, and change tone all at once produces broad,
          shallow output. <span className="text-white font-medium">Prompt Chaining</span> splits a complex task
          into small focused prompts run in sequence — each output feeding the next — turning the AI from a
          text generator into a structured problem-solving system.
        </p>
      </div>

      {/* 11.1 Concept + cake analogy */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.1 The Core Idea</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Prompt Chaining is an execution strategy: break a complex task into multiple smaller, focused
          prompts, run them sequentially, and combine their outputs into a high-quality final result. Instead
          of doing everything at once, you guide the model step by step through a structured workflow.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">🍰 Single Prompt — The Wrong Way</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Telling the AI to mix, bake, and decorate the cake in one step: no control, no precision, poor
              output quality.
            </p>
          </div>
          <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">🍰 Step-by-Step — The Right Way</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Prep ingredients → mix → bake → layer → decorate. A structured process yields a far better
              result.
            </p>
          </div>
        </div>
      </div>

      {/* 11.2 Problem with single prompting */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.2 Why Single Prompting Fails</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Cramming a complex task — <span className="text-white font-medium">&quot;Read + Summarize + Extract
          insights + Change tone&quot;</span> — into one prompt gives broad, weak results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "Cognitive Overload", v: "Too many instructions at once — the model can't deeply process all of them." },
            { k: "Shallow Processing", v: "The AI skims the content instead of building real understanding." },
            { k: "Mixed Objectives", v: "Conflicting tasks blur the clarity of the output." },
            { k: "Output Degradation", v: "It tries to cover everything, and does all of it poorly." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-red-400 flex items-start gap-2"><span className="mt-0.5 shrink-0">✗</span>{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 11.3 The solution */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.3 Chaining as the Solution</h2>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed text-center">
            <span className="text-white font-semibold">One Prompt = One Task = One Clear Objective</span>
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">The process flow</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`1. Break the task into steps
2. Execute each step independently
3. Feed each step's output into the next step
4. Combine the results`}</pre>
        </div>
      </div>

      {/* 11.4 Workflow structures */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.4 Workflow Structures</h2>
        <div className="flex flex-col gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Linear Chain</p>
            <p className="text-xs text-gray-400 leading-relaxed">A straight sequence — each prompt refines the previous output to raise quality.</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3">{`Prompt 1 ─▶ Prompt 2 ─▶ Prompt 3 ─▶ Final Output`}</pre>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Modular Chain</p>
            <p className="text-xs text-gray-400 leading-relaxed">Independent tasks run first, then merge into a final task.</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3">{`Extract keywords ──┐
                   ├─▶ Combine ─▶ Final Output
Extract verbs ─────┘`}</pre>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Hybrid Chain</p>
            <p className="text-xs text-gray-400 leading-relaxed">A custom mix of sequential steps and independent parallel tasks.</p>
          </div>
        </div>
      </div>

      {/* 11.5 Rules */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.5 Rules for Effective Chaining</h2>
        <div className="flex flex-col gap-2">
          {[
            "Maintain one clear objective per prompt.",
            "Keep prompts highly focused — don't mix tasks.",
            "Maintain a logical order where each step builds on the previous.",
            "Provide clear, unambiguous instructions.",
            "Always validate intermediate outputs before moving to the next step.",
          ].map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              <p className="text-sm text-gray-300 leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 11.6 Benefits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.6 Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "High-quality output", v: "Deeper understanding and better structural organization." },
            { k: "Handles complexity", v: "Built for multi-step reasoning and complex tasks." },
            { k: "Better control", v: "Modify any individual step within the workflow." },
            { k: "Iterative improvement", v: "Output is refined step by step." },
            { k: "Professional results", v: "Ideal for blogs, reports, and detailed analysis." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-green-400/5 border border-green-400/30 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-green-400 flex items-start gap-2"><span className="mt-0.5 shrink-0">✓</span>{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 11.7 Best practices */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.7 When to Use, Avoid &amp; Common Mistakes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">When to Use</p>
            <ul className="flex flex-col gap-1.5">
              {["Task is complex", "Requires multi-step reasoning", "Demands high-quality, structured output"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-green-400 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">When to Avoid</p>
            <ul className="flex flex-col gap-1.5">
              {["Task is simple", "A single-step answer is sufficient"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-gray-500 mt-0.5 shrink-0">○</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Common Mistakes</p>
          <ul className="flex flex-col gap-1.5">
            {["Over-complicating simple tasks", "Adding unnecessary steps", "Sequencing prompts poorly", "Failing to validate intermediate outputs"].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          <span className="text-gray-300 font-medium">Tools:</span> chaining is supported by automation and
          workflow platforms like Make, n8n, AI workflow tools, and LLM frameworks.
        </p>
      </div>

      {/* Final formula */}
      <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
        <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">The Ultimate Formula</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Complex Task → <span className="text-white font-medium">Break Down</span> → Execute Stepwise →
          <span className="text-white font-medium"> Combine</span> → High-Quality Output
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Prompt Chaining breaks a complex task into small focused prompts run in sequence, combining their outputs into a strong final result.",
            "Single prompting fails on complex tasks via cognitive overload, shallow processing, mixed objectives, and output degradation.",
            "The guiding principle is One Prompt = One Task = One Clear Objective.",
            "Structure chains as Linear (refine in sequence), Modular (independent tasks then merge), or Hybrid (a mix).",
            "Follow the five rules — one objective, focused prompts, logical order, clear instructions, and validating intermediate outputs.",
            "Use it for complex, multi-step, high-quality work; skip it for simple single-step tasks. The formula: Break Down → Execute Stepwise → Combine.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </PromptEngineeringLessonLayout>
  );
}
