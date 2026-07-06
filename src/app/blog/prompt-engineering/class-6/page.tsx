import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass6() {
  return (
    <PromptEngineeringLessonLayout slug="class-6">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 6 — Show Your Work</p>
        <h1 className="text-3xl font-bold text-white">Chain-of-Thought — Teaching Models to Reason Step by Step</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Early LLMs were fluent writers but weak reasoners — they jumped straight to an answer and got it
          wrong. <span className="text-white font-medium">Chain-of-Thought (CoT)</span> prompting fixes this by
          guiding the model to generate intermediate reasoning steps <span className="text-white font-medium">before</span> the
          final answer. This class covers why it works, few-shot vs. zero-shot CoT, and how modern reasoning
          models change the picture.
        </p>
      </div>

      {/* 6.1 The problem with early models */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.1 Why Early Models Struggled with Reasoning</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Around 2022, LLMs were strong at memorization, pattern recognition, and language generation — but
          weak at structured thinking: math, logic puzzles, and multi-step problems. The core issue was that
          they produced answers <span className="text-white font-medium">immediately</span>, without working
          through the problem. Even scaling the model up didn&apos;t meaningfully fix it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Direct Answering</p>
            <pre className="text-xs text-gray-400 font-mono leading-relaxed whitespace-pre-wrap">{`Problem  →  Answer`}</pre>
            <p className="text-xs text-gray-500 leading-relaxed">Skips the working — fragile on multi-step problems.</p>
          </div>
          <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">Chain-of-Thought</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Problem  →  Reasoning Steps  →  Answer`}</pre>
            <p className="text-xs text-gray-500 leading-relaxed">Mirrors how humans break down complex problems.</p>
          </div>
        </div>
      </div>

      {/* 6.2 How CoT works */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.2 How CoT Prompting Works</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          CoT is implemented by instructing the model to explain its reasoning before answering. Three common
          ways to trigger it:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { k: "Ask it to think step by step", v: "A direct instruction to slow down and reason sequentially." },
            { k: "Request an explanation", v: "Tell the model to show its reasoning process, not just the result." },
            { k: "Provide worked examples", v: "Show step-by-step solutions so it learns the reasoning pattern." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            CoT gives the model a <span className="text-white font-medium">scratchpad</span> — a textual
            workspace to perform calculations and logical operations before committing to a final answer.
            This intermediate reasoning reduces mistakes and improves consistency.
          </p>
        </div>
      </div>

      {/* 6.3 Few-shot vs zero-shot */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.3 Few-Shot vs. Zero-Shot CoT</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Few-Shot CoT</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Give the model several problems <span className="text-white font-medium">with</span> detailed
              solutions. It learns the reasoning pattern from the examples and applies it to new problems.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Effective — but needs carefully prepared examples and longer prompts.
            </p>
          </div>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Zero-Shot CoT</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              No examples needed. Add one simple instruction —
              <span className="font-mono text-yellow-300"> &quot;Let&apos;s think step by step&quot;</span> — and reasoning
              performance jumps significantly.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Implies models hold <span className="text-white font-medium">latent reasoning ability</span> that the
              right instruction unlocks.
            </p>
          </div>
        </div>
      </div>

      {/* 6.4 Worked example */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.4 A Worked Example — Acid Mixture</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A classic few-shot CoT prompt teaches the model a reusable reasoning template. Here is the kind of
          step-by-step solution you would show it for a mixture problem:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">
            <span className="text-white">Problem:</span> Mix 20%-acid Solution A with 50%-acid Solution B to make 12 L of 40% acid.
          </p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Let x = liters of A, y = liters of B.
Volume:  x + y = 12          →  x = 12 - y
Acid:    0.20x + 0.50y = 0.40 * 12 = 4.8
×10:     2x + 5y = 48
Sub x:   2(12 - y) + 5y = 48
         24 - 2y + 5y = 48
         24 + 3y = 48
         3y = 24  →  y = 8
         x = 12 - 8 = 4
Answer:  4 L of Solution A, 8 L of Solution B.`}</pre>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          The same template — <span className="text-gray-300">define variables → write the two constraints →
          substitute → solve</span> — transfers to interest, protein-blend, and cost-blend problems.
        </p>
      </div>

      {/* 6.5 Practice set */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.5 Practice Set (Test the Pattern)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Try these with the step-by-step template, then reveal the answer to check.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { q: "A fuel tank is 2/3 full. After using 15 gallons, it is 1/4 full. What is the tank's total capacity?", a: "36 gallons" },
            { q: "A farm has only cows and hens — 30 animals with 74 legs total. How many are hens?", a: "23 hens" },
            { q: "Blend 50 kg of coffee from $12/kg Gold Roast and $8/kg Silver Roast to sell at $9/kg. How much of each?", a: "12.5 kg Gold Roast, 37.5 kg Silver Roast" },
          ].map(({ q, a }, i) => (
            <details key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 group">
              <summary className="text-sm text-gray-300 cursor-pointer list-none flex items-start gap-2">
                <span className="text-[#ec4899] font-bold shrink-0">Q{i + 1}</span>
                <span>{q}</span>
              </summary>
              <p className="text-xs text-green-400 mt-2 pl-7 font-mono">→ {a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* 6.6 Modern reasoning models */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.6 The Shift to Reasoning Models</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Recent models are increasingly trained to reason <span className="text-white font-medium">internally</span> —
          they produce answers that reflect a reasoning process even without an explicit CoT prompt. Several
          advances drove this shift:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Training on reasoning-focused datasets",
            "Reinforcement learning techniques",
            "Self-consistency methods",
            "Planning and tool-use training",
          ].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-gray-400 flex items-start gap-2">
              <span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}
            </div>
          ))}
        </div>
      </div>

      {/* 6.7 When CoT still matters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.7 When CoT Is Still Useful</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">Reach for CoT</p>
            <ul className="flex flex-col gap-1.5">
              {["With smaller or less advanced models", "When detailed explanations are required", "For complex problems where explicit reasoning aids verification"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-green-400 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Often Unnecessary</p>
            <ul className="flex flex-col gap-1.5">
              {["With highly advanced reasoning models that reason by default", "When a short, direct answer is all that's needed"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-gray-500 mt-0.5 shrink-0">○</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Chain-of-Thought guides a model to generate intermediate reasoning steps before the final answer — Problem → Reasoning → Answer.",
            "Early LLMs answered immediately and failed at multi-step reasoning; scaling alone didn't fix it.",
            "Trigger CoT by asking the model to think step by step, requesting an explanation, or showing worked examples.",
            "Few-shot CoT supplies solved examples; zero-shot CoT just adds 'Let's think step by step' — and still works, revealing latent reasoning ability.",
            "CoT acts as a scratchpad that reduces mistakes and improves consistency.",
            "Modern reasoning models reason internally by default, but CoT still helps with smaller models, when explanations are needed, and for verification of complex problems.",
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
