import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass7() {
  return (
    <PromptEngineeringLessonLayout slug="class-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 7 — Ask Many Times, Trust the Majority</p>
        <h1 className="text-3xl font-bold text-white">Self-Consistency — Sampling Many Paths, Voting on One Answer</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          A single Chain-of-Thought can go wrong if one early step is wrong. <span className="text-white font-medium">Self-Consistency</span> fixes
          this by generating many independent reasoning paths and keeping the answer that shows up most often.
          This class covers the method, its cost trade-offs, where it shines, and the
          <span className="text-white font-medium"> US-CoT</span> extension for open-ended tasks.
        </p>
      </div>

      {/* 7.1 The limits of a single CoT */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.1 Why a Single CoT Isn&apos;t Enough</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Chain-of-Thought improves reasoning by producing intermediate steps — but relying on
          <span className="text-white font-medium"> one</span> output is fragile. Because generation is
          probabilistic, even a capable model can slip on a single run.
        </p>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Weaknesses of Single-Path CoT</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "Single reasoning path — one wrong early step dooms the final answer.",
              "Sampling noise — small generation variations flip the outcome.",
              "Hidden reasoning — models reason internally, but errors still slip through.",
            ].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 7.2 Definition & core principle */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.2 What Self-Consistency Is</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Self-Consistency is a <span className="text-white font-medium">decoding strategy</span>: instead of
          greedy decoding (one output), it samples multiple reasoning paths and selects the most consistent
          answer among them.
        </p>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">Core Principle</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The correct answer is likely to appear <span className="text-white font-medium">more frequently</span> across
            diverse reasoning paths than any single incorrect answer. Many roads, one destination.
          </p>
        </div>
      </div>

      {/* 7.3 Methodology */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.3 The Four-Step Method</h2>
        {[
          { n: 1, k: "Multiple Sampling", v: "Issue the same prompt to the model several times, with randomness introduced via parameters like temperature." },
          { n: 2, k: "Diverse Reasoning Paths", v: "Each run may produce a different Chain-of-Thought, generating varied intermediate steps." },
          { n: 3, k: "Answer Aggregation", v: "Extract the final answer from each path and tally them up (majority voting)." },
          { n: 4, k: "Final Selection", v: "Pick the answer with the highest consistency across runs as the output." },
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
          <p className="text-xs text-gray-500 mb-2">Majority voting across sampled paths</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Prompt ─┬─▶ Path 1: …reasoning…  →  42
        ├─▶ Path 2: …reasoning…  →  42
        ├─▶ Path 3: …reasoning…  →  17
        ├─▶ Path 4: …reasoning…  →  42
        └─▶ Path 5: …reasoning…  →  42

  Tally:  42 ×4   |   17 ×1   →   Answer: 42`}</pre>
        </div>
      </div>

      {/* 7.4 Cost considerations */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.4 Computational Trade-Off</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">The Cost</p>
            <ul className="flex flex-col gap-1.5">
              {["Requires multiple model executions", "Higher latency", "More compute usage per query"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">The Payoff</p>
            <ul className="flex flex-col gap-1.5">
              {["Higher accuracy and reliability", "Robust to single-run reasoning errors", "Worth it for high-stakes answers"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-green-400 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 7.5 Suitability */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.5 Where It Works — and Where It Doesn&apos;t</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Best for: Closed-Ended Problems</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Tasks with a <span className="text-white font-medium">single correct answer</span> — arithmetic,
              logic, symbolic reasoning, scientific problem solving. Majority voting has a clear winner.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Struggles with: Open-Ended Problems</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Creative writing, opinion questions, exploratory discussion — many valid answers, so voting
              breaks down. <span className="text-white font-medium">Semantic diversity</span> means different
              wordings can all be correct yet never &quot;match.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* 7.6 US-CoT */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.6 US-CoT — Self-Consistency for Open-Ended Tasks</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white font-medium">Universal Self-Consistency CoT (US-CoT)</span> extends the
          idea by replacing simple majority voting with <span className="text-white font-medium">semantic
          evaluation</span> — judging meaning, not exact string matches.
        </p>
        {[
          { n: 1, k: "Generate Multiple Responses", v: "The model produces several solutions to the same open-ended question." },
          { n: 2, k: "Solution Aggregation", v: "Collect all responses together into one set." },
          { n: 3, k: "Semantic Analysis", v: "Instead of counting identical answers, identify common themes, shared reasoning, and conceptual similarity." },
          { n: 4, k: "Consensus Selection", v: "Feed all candidates back to the model and instruct it to read carefully, identify the consensus, and choose the answer that best captures it." },
          { n: 5, k: "Final Output", v: "Select the response that best represents the collective reasoning." },
        ].map(({ n, k, v }) => (
          <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{n}</span>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest">US-CoT Applications</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Open-ended analytical questions", "Long-form summarization", "Code generation", "Research synthesis", "Conceptual explanations"].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-gray-400 flex items-start gap-2">
                <span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Self-Consistency samples many reasoning paths and selects the most frequent answer, replacing single-output greedy decoding.",
            "It works because the correct answer tends to recur across diverse paths more than any one wrong answer does.",
            "The method is four steps: multiple sampling (via temperature), diverse reasoning paths, answer aggregation, and majority-vote selection.",
            "It trades extra compute and latency for higher accuracy — best reserved for high-stakes, closed-ended problems with one correct answer.",
            "It fails on open-ended tasks where many answers are valid and semantic diversity defeats exact-match voting.",
            "US-CoT extends it to open-ended tasks by aggregating responses and using semantic analysis to pick the answer that best represents the consensus.",
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
