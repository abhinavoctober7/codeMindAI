import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass19() {
  return (
    <PromptEngineeringLessonLayout slug="class-19">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 19 — Before You Write</p>
        <h1 className="text-3xl font-bold text-white">The Planning Phase — Requirements &amp; the Prompt Blueprint</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Class 18 showed the lifecycle starts with <span className="text-white font-medium">Planning</span>. This class
          zooms into that first stage. Planning is deciding in advance <span className="text-white font-medium">what</span> the
          prompt will achieve, <span className="text-white font-medium">how</span>, with which techniques,
          characteristics, and constraints — all <span className="text-white font-medium">before</span> a single line is
          written.
        </p>
      </div>

      {/* 19.1 The 60/40 rule */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">19.1 Why Planning Matters — The 60/40 Rule</h2>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-bold">Prompt engineering is 60% planning, 40% writing and refining.</span>{" "}
            Most people skip planning and write generic prompts from very little information.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Skipping it is like asking a builder to construct a 2BHK flat without saying where the kitchen, bathrooms, or
          balconies go — the result is poor-quality and inefficient. Just <span className="text-white font-medium">10–20
          minutes</span> of planning drastically improves effectiveness and saves time across the rest of the cycle.
        </p>
      </div>

      {/* 19.2 The two core tasks */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">19.2 The Two Core Tasks of Planning</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Planning is two sequential steps — exactly like building a house: first sit with the family to gather
          requirements (rooms, balcony size), then draw the structural blueprint.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">1. Requirement Gathering</p>
            <p className="text-xs text-gray-400 leading-relaxed">Collect everything needed to write the prompt effectively.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">2. Prompt Blueprint Design</p>
            <p className="text-xs text-gray-400 leading-relaxed">Turn that information into a structured blueprint for drafting.</p>
          </div>
        </div>
      </div>

      {/* 19.3 Requirement gathering */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">19.3 Step 1 — Requirement Gathering</h2>
        <p className="text-gray-400 text-sm leading-relaxed">Key details to collect:</p>
        {[
          { k: "Core Task", v: "The specific objective the AI application needs to achieve." },
          { k: "Input & Output Formatting", v: "The format the AI receives data in (input) and the format it must produce results in (output)." },
          { k: "Application Specifications", v: "Required tone, target audience, voice (professional vs. casual), and general behaviour." },
        ].map(({ k, v }) => (
          <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">{k}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
          </div>
        ))}
      </div>

      {/* 19.4 Blueprint design */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">19.4 Step 2 — Prompt Blueprint Design</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Using the gathered data, design a structured blueprint — the final output of the planning phase and the
          foundation for drafting. It must define five primary elements:
        </p>
        {[
          { n: 1, k: "Prompting Technique", v: "Chosen from the core task. Multiple subtasks (read data → summarize → write article) → Prompt Chaining. A single but highly complex task → Plan and Solve." },
          { n: 2, k: "Characteristics", v: "Clearly define the AI's persona, tone, and voice." },
          { n: 3, k: "Constraints", v: "'No-go' areas — standard ones like preventing hallucinations, plus audience-specific limits (no technical jargon or complex formulas for children aged 6–12)." },
          { n: 4, k: "Special Instructions", v: "Task-specific rules — e.g. a RAG app must use only retrieved chunks, or limit a paragraph to a maximum of 100 words." },
          { n: 5, k: "Evaluation", v: "How success is measured — the prompt scores 100% when it follows all defined characteristics, constraints, and instructions." },
        ].map(({ n, k, v }) => (
          <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{n}</span>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          </div>
        ))}
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Requirements -> Blueprint {
  Technique, Characteristics, Constraints,
  Special Instructions, Evaluation
} -> Drafting`}</pre>
        </div>
      </div>

      {/* 19.5 Benefits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">19.5 Key Benefits of Planning</h2>
        {[
          { k: "Prevents Vague Prompts", v: "Forces you to define abstract terms. Not just 'a smart assistant', but why it's smart — e.g. it has access to specific company knowledge." },
          { k: "Identifies Techniques Easily", v: "Gathering requirements makes the most effective prompting technique immediately obvious." },
          { k: "Ensures Consistency", v: "Defining characteristics early prevents important traits from being accidentally dropped during later refining." },
          { k: "Creates Clear Evaluation Metrics", v: "Sets exact parameters for testing whether the prompt actually works." },
        ].map(({ k, v }) => (
          <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">{k}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
          </div>
        ))}
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Planning decides in advance what the prompt achieves, how, with which techniques, characteristics, and constraints — before any writing.",
            "Prompt engineering is 60% planning and 40% writing/refining; 10–20 minutes of planning saves time across the whole cycle.",
            "Planning has two sequential steps: Requirement Gathering, then Prompt Blueprint Design — like gathering house needs before drawing the blueprint.",
            "Requirement gathering collects the core task, input/output formats, and application specs (tone, audience, voice, behaviour).",
            "The blueprint defines five elements: Prompting Technique, Characteristics, Constraints, Special Instructions, and Evaluation.",
            "Technique follows the task: multiple subtasks → Prompt Chaining; one highly complex task → Plan and Solve.",
            "Planning prevents vague prompts, surfaces the right technique, ensures consistency, and creates clear evaluation metrics.",
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
