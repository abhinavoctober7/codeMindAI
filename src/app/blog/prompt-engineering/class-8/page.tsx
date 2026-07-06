import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass8() {
  return (
    <PromptEngineeringLessonLayout slug="class-8">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 8 — Plan First, Then Execute</p>
        <h1 className="text-3xl font-bold text-white">Plan-and-Solve — Planning Before Answering</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Standard models think and answer at the same time, leaving no room to plan. <span className="text-white font-medium">Plan-and-Solve</span> prompting
          forces an explicit planning stage <span className="text-white font-medium">before</span> execution —
          making even a standard model behave more like a dedicated reasoning model. This class covers the two
          model types, the technique, why it works, and where industry uses it.
        </p>
      </div>

      {/* 8.1 Standard vs reasoning models */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.1 Standard Models vs. Reasoning Models</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Standard (Non-Reasoning) Models</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Generate the response directly from the prompt — thinking and answering happen
              <span className="text-white font-medium"> simultaneously</span>, with no explicit planning.
            </p>
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mt-1">Strengths</p>
            <ul className="flex flex-col gap-1">
              {["Fast and cost-efficient", "Great for summarization, translation, chat"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-green-400 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mt-1">Limitations</p>
            <ul className="flex flex-col gap-1">
              {["Weak multi-step reasoning", "Prone to logical errors & hallucinations", "Early mistakes snowball through the answer"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Reasoning Models</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Explicitly separate the <span className="text-white font-medium">thinking phase</span> from the
              final answer — analyzing internally before responding.
            </p>
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mt-1">Strengths</p>
            <ul className="flex flex-col gap-1">
              {["Explore multiple reasoning paths", "Validate logic before responding", "Reliable for math, coding, planning"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-green-400 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mt-1">Trade-Offs</p>
            <ul className="flex flex-col gap-1">
              {["Higher latency (slower responses)", "Higher computational cost"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 8.2 Definition */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.2 What Plan-and-Solve Is</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Plan-and-Solve is a structured technique that forces a model to first create an explicit
          <span className="text-white font-medium"> step-by-step plan</span>, and only then execute that plan to
          produce the answer. It artificially separates planning from execution — letting standard models
          behave more like reasoning models.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">The simple trigger</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Let's first understand the problem and devise a plan
to solve it. Then, let's carry out the plan and solve
the problem step by step.`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">The detailed (PS+) variant</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Do not directly solve the problem. First understand the
problem, devise a plan, and extract the relevant variables
and their corresponding numerals. While creating the plan,
form intermediate steps. Then carry out the plan step by
step — paying attention to calculations and common sense —
and solve it.`}</pre>
        </div>
      </div>

      {/* 8.3 Why it works */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.3 Why It Works</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When reasoning and answering happen at once, the model has no room for structured analysis or
          verification. A deliberate planning stage changes that:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { k: "Forces decomposition", v: "An explicit problem-breakdown phase happens before any answer is attempted." },
            { k: "Reduces errors", v: "Clarifying the solution path cuts down logical and procedural mistakes." },
            { k: "Improves structure", v: "Responses become more coherent, organized, and accurate." },
            { k: "Mitigates hallucination", v: "Grounding the answer in a predefined plan helps most on multi-step tasks." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 8.4 Methodology */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.4 The Two Phases</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">1</span>
              <p className="text-sm font-bold text-white">Planning</p>
            </div>
            <ul className="flex flex-col gap-1.5 pl-9">
              {["Understand the problem", "Identify variables and constraints", "Determine the formulas, rules, or steps needed", "Produce a clear solution strategy"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">2</span>
              <p className="text-sm font-bold text-white">Solving</p>
            </div>
            <ul className="flex flex-col gap-1.5 pl-9">
              {["Execute the plan step by step", "Produce the final answer based on the plan"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 8.5 Industry use cases */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.5 Industry Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { k: "Customer Support", steps: ["Analyze query & intent", "Retrieve relevant info", "Plan the response", "Generate the reply"] },
            { k: "Code Gen & Debugging", steps: ["Understand requirements", "Break into modules", "Generate structured code", "Debug step by step"] },
            { k: "Agentic AI Systems", steps: ["Task decomposition", "Tool selection", "Execution sequence", "Output synthesis"] },
          ].map(({ k, steps }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <ul className="flex flex-col gap-1">
                {steps.map((s) => (
                  <li key={s} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Standard models think and answer at once — fast and cheap, but weak at multi-step reasoning and prone to snowballing errors.",
            "Reasoning models separate thinking from answering — more reliable, but slower and more expensive.",
            "Plan-and-Solve forces an explicit plan before execution, making a standard model behave more like a reasoning model.",
            "It works by enforcing decomposition, reducing procedural errors, improving structure, and grounding answers in a plan to cut hallucinations.",
            "The method has two phases: Planning (understand, identify variables, choose the approach) and Solving (execute the plan step by step).",
            "It's widely used in production — customer support, code generation/debugging, and agentic AI — for reliability and control.",
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
