import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass9() {
  return (
    <PromptEngineeringLessonLayout slug="class-9">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 9 — Reason Like Notes, Not Essays</p>
        <h1 className="text-3xl font-bold text-white">Chain of Draft — Reasoning in Shorthand</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Chain-of-Thought reasons in full sentences — accurate, but verbose, slow, and token-hungry.
          <span className="text-white font-medium"> Chain of Draft (CoD)</span> keeps the step-by-step thinking
          but compresses each step to a terse, note-like draft — capturing only what&apos;s essential. Same
          reasoning, a fraction of the tokens.
        </p>
      </div>

      {/* 9.1 What CoD is */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.1 What Chain of Draft Is</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Chain of Draft guides the model to reason through a problem step by step — rather than jumping
          straight to an answer — while keeping each reasoning step <span className="text-white font-medium">short,
          quick, compact, and non-verbose</span>. It captures only the main points required to solve the
          problem.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">The core prompt</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Think step by step to answer the question, but only keep
a minimum draft for each thinking step, with 15 words at
most. Return the answer at the end of the response.`}</pre>
        </div>
      </div>

      {/* 9.2 CoT vs CoD */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.2 Chain-of-Thought vs. Chain of Draft</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Same protein-blend problem, two reasoning styles. Both reach 7 kg — but CoD spends far fewer tokens.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-widest">Chain-of-Thought (verbose)</p>
            <pre className="text-xs text-gray-400 font-mono leading-relaxed whitespace-pre-wrap">{`Let x be kg of Grain X and y be kg of Grain Y.
The total weight must be 20, so x + y = 20,
which means y = 20 - x. The protein equation
is 0.10x + 0.18y = 0.152 × 20 = 3.04.
Substituting gives 0.10x + 0.18(20 - x) = 3.04.
Expanding: 10x + 360 - 18x = 304, so -8x = -56,
therefore x = 7.

Answer: 7 kg of Grain X.`}</pre>
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-green-400/30">
            <p className="text-xs text-green-400 mb-2 font-semibold uppercase tracking-widest">Chain of Draft (compact)</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`x + y = 20
0.10x + 0.18y = 3.04
y = 20 - x
10x + 360 - 18x = 304
-8x = -56
x = 7

#### 7 kg of Grain X`}</pre>
          </div>
        </div>
      </div>

      {/* 9.3 Templates */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.3 Reusable Templates</h2>
        <div className="flex flex-col gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-[#ec4899]">General + Guidelines</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3">{`Think step by step, but only keep a minimum draft for
each thinking step, with 15 words at most. Return the
answer at the end after a separator ####.

Guidelines:
- Limit each step to 5 words
- Focus on essential calculations/transformations
- Maintain logical progression`}</pre>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-[#ec4899]">Scratchpad Block</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3">{`Before answering, outline your logic in a scratchpad
block. Use only short bullet points with a maximum of
15 words each. Do not write full sentences. Provide
your final response immediately after the block.`}</pre>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-[#ec4899]">Abbreviated Draft</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3">{`Provide a step-by-step draft of your logic. Restrict
each thinking step to a maximum of 12 words and use
abbreviations. Return the final answer at the conclusion.`}</pre>
          </div>
        </div>
      </div>

      {/* 9.4 Domain-specific */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.4 Domain-Specific Variants</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-[#ec4899]">Database / Query Draft</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3">{`Think step by step to construct the required query.
Outline your logic in a minimum draft, each step
strictly under 15 words. Focus purely on identifying
tables, joins, and filtering conditions. Return the
final SQL query at the very end.`}</pre>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-[#ec4899]">Analytical / Math Draft</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3">{`Solve the problem by thinking step by step. Maintain a
minimal draft of your reasoning, restricting each step
to mathematical notation or a maximum of 12 words.
Output the final definitive answer on a new line at the
conclusion.`}</pre>
          </div>
        </div>
      </div>

      {/* 9.5 Benefits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.5 Benefits of CoD</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "Reduced token consumption", v: "Compact drafts use a fraction of CoT's tokens." },
            { k: "Lower latency", v: "Fewer tokens to generate means faster responses." },
            { k: "Cost reduction", v: "Fewer output tokens directly cuts API cost." },
            { k: "Easy to implement", v: "Just a prompt instruction — no new tooling." },
            { k: "Maintained accuracy", v: "Research shows accuracy holds despite the brevity." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-green-400/5 border border-green-400/30 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-green-400 flex items-start gap-2"><span className="mt-0.5 shrink-0">✓</span>{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 9.6 When to avoid */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.6 When to Avoid CoD</h2>
        <div className="flex flex-col gap-2">
          {[
            { k: "High-interpretability tasks", v: "Legal/medical review, audit trails, regulated environments — verbose CoT gives better traceability and trust." },
            { k: "Small language models", v: "CoD underperforms below ~3B parameters; they lack the instruction-following fidelity to execute it. Prefer CoT." },
            { k: "Creative / open-ended tasks", v: "Writing, ideation, and user-facing chat benefit from elaboration — condensing them loses value." },
            { k: "When readability matters", v: "If a human needs to follow the reasoning easily, the full explanation is worth the tokens." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-red-400 flex items-start gap-2"><span className="mt-0.5 shrink-0">✗</span>{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Chain of Draft keeps step-by-step reasoning but compresses each step to a short, note-like draft capturing only the essentials.",
            "The core prompt caps each thinking step (e.g. 15 words) and returns the answer at the end — often after a #### separator.",
            "Versus Chain-of-Thought it reaches the same answer with far fewer tokens — no full sentences, just the working.",
            "Benefits: lower token use, lower latency, lower cost, trivial to implement, and accuracy is maintained per research.",
            "Use domain templates (SQL: tables/joins/filters; math: notation only) to keep drafts focused.",
            "Avoid CoD for high-interpretability, regulated, creative, or readability-critical tasks, and on small (<3B) models — use CoT there.",
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
