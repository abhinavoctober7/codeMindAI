import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass3() {
  return (
    <PromptEngineeringLessonLayout slug="class-3">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 3 — Showing vs Telling</p>
        <h1 className="text-3xl font-bold text-white">Shot-Based Prompting — Zero, One &amp; Few-Shot</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          LLMs are pattern-recognition machines, not human reasoners. One of the most powerful ways to
          guide them is to <span className="text-white font-medium">show examples</span> inside the prompt.
          This class covers shots — zero, one, and few — when to use each, and the science of crafting a
          good example.
        </p>
      </div>

      {/* 3.1 What is a prompt */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.1 What Is a Prompt?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A prompt is the input given to an LLM that defines the <span className="text-white font-medium">task</span> (what
          to do), the <span className="text-white font-medium">constraints</span> (how to do it), and the
          <span className="text-white font-medium"> expected output</span> (what the answer should look
          like). In short, it&apos;s the interface between human intention and model behavior.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "Instructions", v: "\"Classify the sentiment\"" },
            { k: "Context", v: "\"For an internal Samsung dashboard\"" },
            { k: "Examples", v: "Input–output pairs" },
            { k: "Formatting rules", v: "\"Output only the label\"" },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            The better the prompt, the less the model has to <span className="text-white font-medium">guess</span>.
          </p>
        </div>
      </div>

      {/* 3.2 Why shots */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.2 Why Shot-Based Prompting?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LLMs don&apos;t execute rules or truly &quot;understand&quot; tasks — they predict the most likely next
          token based on patterns. Examples inside a prompt work because they
          <span className="text-white font-medium"> anchor expectations</span>, reduce ambiguity, and
          <span className="text-white font-medium"> simulate temporary training</span>. That leads to the
          idea of <span className="text-white font-medium">shots</span>.
        </p>
      </div>

      {/* 3.3 Understanding shots */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.3 Understanding &quot;Shots&quot;</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A shot is one demonstration example included in the prompt.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { t: "Zero-Shot", n: "0 examples", doing: "Asking politely", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5" },
            { t: "One-Shot", n: "1 example", doing: "Showing once", color: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/5" },
            { t: "Few-Shot", n: ">1 example", doing: "Teaching patterns", color: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/5" },
          ].map(({ t, n, doing, color, border, bg }) => (
            <div key={t} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-1.5`}>
              <p className={`text-sm font-bold ${color}`}>{t}</p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wide">{n}</p>
              <p className="text-xs text-gray-400 leading-relaxed mt-1">{doing}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          More shots → more guidance → higher reliability (but higher cost).
        </p>
      </div>

      {/* 3.4 Zero-shot */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.4 Zero-Shot Prompting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Zero-shot means performing a task <span className="text-white font-medium">without any
          examples</span>. You rely entirely on the model&apos;s pretraining data and general language
          knowledge — the assumption being the model already knows what the task means.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Zero-shot sentiment classification</p>
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Classify the sentiment of the following text as Positive,
Negative, or Neutral. Output only the label.

"The user interface is intuitive, but the load times
are frustratingly slow."

→ Negative`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">When to use</p>
            <ul className="flex flex-col gap-1.5">
              {["General knowledge (\"capital of France?\")", "Creative writing (\"a story about a dragon\")", "Simple summaries", "General tasks: translation, spell-fix, standard sentiment"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-green-400 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">When NOT to use</p>
            <ul className="flex flex-col gap-1.5">
              {["Exact output format required (CSV, DB-ready)", "Complex or non-obvious rules / business logic", "Conditional extraction", "Style consistency (brand tone, legal writing)"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Role-Based Zero-Shot</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Assigning a persona improves zero-shot without adding examples. Instead of
            <span className="text-white"> &quot;Explain Quantum Entanglement,&quot;</span> use:
          </p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3 mt-1">{`You are a Nobel Prize-winning physicist explaining Quantum
Entanglement to kindergarten students using toy-based analogies.`}</pre>
          <p className="text-xs text-gray-500">✔ Still zero-shot ✔ Better framing ✔ Less ambiguity</p>
        </div>
      </div>

      {/* 3.5 One-shot */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.5 One-Shot Prompting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          One-shot provides exactly <span className="text-white font-medium">one example</span> before the
          actual task. That single example acts as a format blueprint, a logic anchor, and a behavior
          reference — helping the model understand transformation rules and formatting constraints, and
          aligning its output to the shown pattern.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">One-shot filename generation</p>
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Convert the document title and date into a filename using
the format shown below.

Example:
  Document: "Budget Review Q1"
  Date:     "March 10, 2024"
  Output:   2024/03/10-FINANCE_Budget_Review_Q1

Task:
  Document: "Project Alpha Kickoff Meeting"
  Date:     "January 25, 2025"
  Output:`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          From one example, the model learns date ordering, capitalization, and separator usage. The same
          trick teaches brand-new concepts on the fly:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Teaching a made-up word, then a format</p>
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`A "whatpu" is a small, furry animal native to Tanzania.
Sentence: We were traveling in Africa and we saw these
very cute whatpus.

A "farduddle" means to jump up and down really fast.
Sentence: <model completes in the same style>

---

Example:  Input: 202-555-0125 (USA)  Output: +1 (202) 555-0125
Task:      Input: 07700 900077 (UK)   Output:`}</pre>
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-medium">Verdict:</span> One-shot offers the best balance
            between effort and reliability — the most commonly used technique in real business workflows.
            Reach for it for strict formatting, style anchoring, and fast task clarification.
          </p>
        </div>
      </div>

      {/* 3.6 Few-shot */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.6 Few-Shot Prompting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Few-shot includes <span className="text-white font-medium">multiple examples</span> (usually
          3–5). It works like a temporary training dataset: the model observes multiple patterns, extracts
          common rules, and applies them to the new input — learning task boundaries and hidden rules that
          go beyond formatting.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Few-shot review classification (business-specific labels)</p>
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Review: "Samsung screens are the best."              → Positive
Review: "The iPhone battery lasts longer than Samsung's." → Negative (Competitor Praise)
Review: "Samsung phones are slow."                   → Negative (Performance Issue)

Task:
Review: "The new iPhone is faster than our Samsung phone!"`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          From these, the model picks up competitive sentiment and business-specific labels. Use few-shot
          for <span className="text-white">low-resource domains</span>, <span className="text-white">nuanced
          classification</span>, and <span className="text-white">complex extraction logic</span>.
        </p>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Production trade-offs</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Few-shot increases <span className="text-white">cost</span> (more tokens),
            <span className="text-white"> latency</span> (slower responses), and
            <span className="text-white"> bias</span> (examples influence output). Engineering means
            balancing safety vs efficiency.
          </p>
        </div>
      </div>

      {/* 3.7 Science of the perfect shot */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.7 The Science of Constructing the Perfect Shot</h2>
        <div className="flex flex-col gap-2">
          {[
            { name: "Quality over quantity", desc: "Bad examples teach bad behavior. A few clean examples beat many noisy ones." },
            { name: "Avoid majority-label bias", desc: "Unbalanced examples skew results — always balance the classes." },
            { name: "Diversity matters", desc: "Cover edge cases, different phrasings, and different outcomes." },
            { name: "Teach failure (negative constraints)", desc: "Include examples where input is invalid, output is \"N/A\", or the model should refuse — this teaches boundaries." },
          ].map(({ name, desc }) => (
            <div key={name} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{name}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3.8 Summary table */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.8 Which Technique to Use?</h2>
        <div className="flex flex-col gap-2">
          {[
            { t: "Zero-Shot", best: "General, creative, simple tasks", color: "text-blue-400" },
            { t: "One-Shot", best: "Formatting, clarity, workflows", color: "text-purple-400" },
            { t: "Few-Shot", best: "Complex, nuanced, specialized tasks", color: "text-green-400" },
          ].map(({ t, best, color }) => (
            <div key={t} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className={`text-sm font-bold ${color} w-28 shrink-0`}>{t}</p>
              <p className="text-xs text-gray-400">{best}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">Final Engineering Insight</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Prompt engineering is not about longer prompts. It&apos;s about reducing ambiguity, showing
            instead of explaining, and choosing the right number of examples.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "A prompt defines the task, constraints, and expected output — the interface between human intention and model behavior.",
            "LLMs predict tokens from patterns; examples anchor expectations, cut ambiguity, and act as temporary training — that's a 'shot'.",
            "Zero-shot (0 examples): great for general, creative, and simple tasks; avoid when exact format, complex rules, or style consistency matter.",
            "Role-based zero-shot adds a persona for better framing without adding examples.",
            "One-shot (1 example): best effort-to-reliability balance; the go-to for strict formatting and style anchoring.",
            "Few-shot (3–5 examples): a mini training set for nuanced/complex tasks — but costs more tokens, latency, and adds bias.",
            "Build good shots: quality over quantity, balanced classes, diverse cases, and examples that teach failure/refusal.",
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
