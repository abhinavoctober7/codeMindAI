import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass2() {
  return (
    <PromptEngineeringLessonLayout slug="class-2">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 2 — Beyond the Prompt</p>
        <h1 className="text-3xl font-bold text-white">Model Configuration &amp; Sampling Parameters</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The prompt shapes <span className="text-white font-medium">what</span> the model talks about.
          Model configuration shapes <span className="text-white font-medium">how</span> it talks. In this
          class we look at the second half of the equation — temperature, top-K, top-P, repetition
          penalty, and more — and exactly how they turn a probability distribution into the final output.
        </p>
      </div>

      {/* 2.1 Recap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.1 Quick Recap — What Happens Inside an LLM</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An LLM works by predicting the next token, again and again. At every step it looks at the tokens
          so far and assigns probabilities to all possible next tokens. The highest-probability token is
          <span className="text-white font-medium"> not</span> always chosen automatically — the final
          choice depends on how the model is configured.
        </p>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            The model does not &quot;think&quot; in sentences. Powered by the transformer&apos;s self-attention, it
            understands context across the whole input — then it continuously predicts the next token
            based on probabilities.
          </p>
        </div>
      </div>

      {/* 2.2 Prompt important but not only */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.2 The Prompt Matters — But It&apos;s Not the Only Thing</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A prompt strongly influences which tokens are considered and how probability is distributed
          among them. But the prompt alone does not decide the final output — that&apos;s the main catch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-xs font-mono text-[#ec4899]">&quot;What is photosynthesis?&quot;</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Higher probability shifts toward <span className="text-white">photosynthesis, plants,
              sunlight, process</span>.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-xs font-mono text-[#ec4899]">&quot;Write a horror story&quot;</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Probability mass shifts toward <span className="text-white">dark, whispers, shadows,
              blood</span>.
            </p>
          </div>
        </div>
      </div>

      {/* 2.3 Model configuration */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.3 The Second Major Factor: Model Configuration</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Model configuration is the set of settings that control how the model behaves while generating
          text. These settings <span className="text-white font-medium">do not change what the model has
          learned</span> — they only control how that learned knowledge is used during generation.
        </p>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Learning is already done. Configuration decides how <span className="text-white">boldly or
            cautiously</span> the model speaks, how <span className="text-white">random or
            deterministic</span> it is, and how much <span className="text-white">repetition</span> it
            allows. <span className="text-[#ec4899] font-semibold">Prompt + Model Configuration</span> together
            decide the final output.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#ec4899]/5 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-[#ec4899]">What it DOES</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Controls the selection process after probabilities are already calculated.
            </p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-red-400">What it does NOT do</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Does not retrain the model, change its weights, or add/remove knowledge — the internals stay
              identical.
            </p>
          </div>
        </div>
      </div>

      {/* 2.4 Probability example + sampling */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.4 A Probability Example &amp; Sampling</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          After reading a prompt, the model reaches a probability distribution over the entire vocabulary
          for the next token. It always sums to 1. Now it must choose one token — and that choice is
          controlled by configuration.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10 flex flex-col gap-2">
          <p className="text-xs text-gray-500 mb-1">Distribution for the next token</p>
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`A  ████████████████████  0.40
B  ███████████████████   0.39
C  ██████████            0.21

→ Always pick A?  Sometimes pick B or C?
   The settings decide.`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white font-medium">Sampling</span> parameters decide how one token is
          selected from this distribution. Without sampling, the model would always pick the
          highest-probability token (<span className="text-white">greedy decoding</span>), making outputs
          repetitive and boring. Sampling introduces <span className="text-white font-medium">controlled
          randomness</span>.
        </p>
      </div>

      {/* 2.5 Temperature */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.5 Temperature — the Confidence Dial</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Temperature controls how random or confident the model is. It mathematically reshapes the
          probability distribution before a token is sampled. Values are usually between 0 and 1, and can
          go slightly above 1 in some systems.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { t: "Temp < 1", h: "Sharper", desc: "High-probability tokens dominate even more; low-probability tokens almost disappear. Factual, predictable, stable — like answering an exam.", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5" },
            { t: "Temp = 1", h: "Unchanged", desc: "The probability distribution remains exactly as the model produced it.", color: "text-gray-300", border: "border-white/15", bg: "bg-white/5" },
            { t: "Temp > 1", h: "Flatter", desc: "Differences between probabilities shrink; lower-probability tokens get a real chance. Creative but riskier — like brainstorming.", color: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/5" },
          ].map(({ t, h, desc, color, border, bg }) => (
            <div key={t} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-1.5`}>
              <p className={`text-sm font-bold ${color}`}>{t}</p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wide">{h}</p>
              <p className="text-xs text-gray-400 leading-relaxed mt-1">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Temperature is often called a <span className="text-white">creativity dial</span>, but it&apos;s
          really a <span className="text-white font-medium">confidence dial</span>. Lower temperature means
          the model is more confident in its top choice; higher temperature means it explores more.
        </p>
      </div>

      {/* 2.6 Top-K */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.6 Top-K Sampling</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Top-K limits the model to consider only the <span className="text-white font-medium">K most
          probable</span> tokens. With K = 50, everything outside the top 50 is ignored, and the final
          token is sampled only from that smaller set.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Lower K → safer, more focused. Higher K → more variety. Top-K is like saying:
            <span className="text-white"> &quot;Only choose from the most reasonable options.&quot;</span>
          </p>
        </div>
      </div>

      {/* 2.7 Top-P */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.7 Top-P (Nucleus Sampling)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Top-P doesn&apos;t fix the number of tokens. Instead it selects the
          <span className="text-white font-medium"> smallest set of tokens whose combined probability
          reaches P</span>. With Top-P = 0.9, the model keeps adding tokens until their total probability
          hits 90%, then samples only from that group.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Top-P <span className="text-white">adapts automatically</span> — sometimes 5 tokens, sometimes
            50, depending on the distribution. This often feels more natural than Top-K.
          </p>
        </div>
      </div>

      {/* 2.8 Together */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.8 Using Top-K and Top-P Together</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          They&apos;re often combined: Top-K limits extreme outliers, while Top-P adapts to the model&apos;s
          confidence. The common advice is to keep <span className="text-white font-medium">one stable and
          tune the other</span>, rather than aggressively tuning both at once.
        </p>
      </div>

      {/* 2.9 Repetition penalty + limits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.9 Repetition Penalty, Max Tokens &amp; Stop Sequences</h2>
        <div className="flex flex-col gap-2">
          {[
            { name: "Repetition Penalty", desc: "Discourages repeating the same words/phrases. A value of 1 means no penalty; higher values reduce the probability of tokens that already appeared — useful to avoid loops in long outputs." },
            { name: "Max Tokens", desc: "Caps how long the output can be. Once the limit is hit, generation stops — even mid-sentence." },
            { name: "Stop Sequences", desc: "Tell the model to stop early when a specific pattern appears. Handy for structured outputs like code or Q&A formats." },
          ].map(({ name, desc }) => (
            <div key={name} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{name}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.10 Same model different behavior */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.10 Same Model, Different Behavior</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The same model with different configurations can feel like entirely different models — one
          calm, concise, and factual; another creative, verbose, and exploratory. Think of it like
          driving modes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { mode: "Eco", desc: "Low temperature, tight Top-K/P — stable and factual.", color: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/5" },
            { mode: "Comfort", desc: "Balanced settings — a natural middle ground.", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5" },
            { mode: "Sport", desc: "High temperature, wider sampling — creative and exploratory.", color: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/5" },
          ].map(({ mode, desc, color, border, bg }) => (
            <div key={mode} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-1.5`}>
              <p className={`text-sm font-bold ${color}`}>{mode} mode</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          This is why prompt engineering alone isn&apos;t enough. Ignoring configuration leads to confusion
          when the same prompt gives different outputs across tools or runs. The prompt shapes
          <span className="text-white font-medium"> what</span> the model talks about; configuration shapes
          <span className="text-white font-medium"> how</span> it talks. Learning stays fixed — behavior
          changes.
        </p>
      </div>

      {/* References */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">References</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          These parameters appear directly in real LLM APIs. See how providers expose
          <code className="text-[#ec4899] bg-[#ec4899]/10 px-1 rounded text-xs"> temperature</code>,
          <code className="text-[#ec4899] bg-[#ec4899]/10 px-1 rounded text-xs"> top_p</code>,
          <code className="text-[#ec4899] bg-[#ec4899]/10 px-1 rounded text-xs"> max_tokens</code>, and
          <code className="text-[#ec4899] bg-[#ec4899]/10 px-1 rounded text-xs"> stop</code>:
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="https://docs.mistral.ai/api"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#ec4899]/30 transition-all group"
          >
            <span className="text-sm font-semibold text-white group-hover:text-[#ec4899] transition-colors">Mistral — API Reference</span>
            <span className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors">↗</span>
          </a>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "An LLM produces a probability distribution (summing to 1) over the next token; all its 'thinking' is reflected there. What follows is purely a selection problem.",
            "The prompt shapes which tokens get probability; model configuration decides how one token is chosen from them.",
            "Configuration never retrains the model or changes its knowledge — it only controls selection after probabilities are computed.",
            "Sampling adds controlled randomness; without it (greedy decoding) outputs are repetitive.",
            "Temperature is a confidence dial: <1 sharpens the distribution (factual), >1 flattens it (creative).",
            "Top-K keeps the K most probable tokens; Top-P keeps the smallest set reaching probability P (it adapts). They're often combined — tune one, keep one stable.",
            "Repetition penalty curbs loops; max tokens caps length; stop sequences end generation on a pattern.",
            "Same model + different config = different behavior (Eco/Comfort/Sport). Prompt = what it talks about; configuration = how it talks.",
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
