import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass1() {
  return (
    <RagLessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 1 — Why RAG Matters</p>
        <h1 className="text-3xl font-bold text-white">Why Is RAG Important?</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before we define RAG, we have to feel the pain it removes. A large language model is astonishingly
          capable, yet on its own it suffers from <span className="text-white font-medium">four intrinsic
          problems</span>. Once you see all four clearly — and see why the usual workarounds only get you
          part way — RAG stops looking like a buzzword and starts looking inevitable.
        </p>
      </div>

      {/* 1.1 How an LLM actually knows things */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 Where an LLM&apos;s Knowledge Lives</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          During <span className="text-white font-medium">pretraining</span>, a model reads an enormous
          amount of text and squeezes what it learns into its <span className="text-white font-medium">
          parameters</span>. Those parameters store two things: how language works (patterns, distributions)
          and a frozen snapshot of world knowledge. At <span className="text-white font-medium">inference
          time</span>, you send a query (a prompt) and the model does next-word prediction to produce a
          response. Everything it &ldquo;knows&rdquo; is baked in — this is called
          <span className="text-white font-medium"> parametric knowledge</span>.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The catch</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Pretraining is expensive — weeks to months of compute, plus manpower, storage, energy, and
            infrastructure. You cannot re-train the model every time the world changes. That single fact is
            the root of the problems below.
          </p>
        </div>
      </div>

      {/* 1.2 The four problems */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 The Four Problems in LLMs</h2>
        <div className="flex flex-col gap-3">
          {[
            {
              n: "1",
              t: "Knowledge Cutoff",
              d: "The model is frozen in time. Because training uses a static dataset and takes so long, it can't access recent information. Ask about an event after its cutoff and it simply doesn't know.",
              cause: "Large training times + static dataset",
            },
            {
              n: "2",
              t: "Hallucinations",
              d: "When the model has the knowledge, it answers correctly. When it doesn't, it still answers — generating plausible but false facts with full confidence. It never says 'I'm not sure'.",
              cause: "Missing knowledge, but generation continues anyway",
            },
            {
              n: "3",
              t: "No Source Attribution",
              d: "A query goes in, a response comes out — with no verifiable source. Because the answer is distilled from parameters, you can't trace where any claim actually came from or check it.",
              cause: "Knowledge is fused into parameters, sources are lost",
            },
            {
              n: "4",
              t: "No Access to Private Data",
              d: "The model was trained on public data only. It has never seen your company's internal documents, so it can't answer questions about proprietary or private information.",
              cause: "Only public data was in the training set",
            },
          ].map(({ n, t, d, cause }) => (
            <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#8b5cf6]/15 text-[#8b5cf6] text-sm flex items-center justify-center font-bold shrink-0">
                  {n}
                </span>
                <p className="text-sm font-bold text-white">{t}</p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
              <p className="text-[11px] text-[#8b5cf6]/90 font-medium">Root cause: {cause}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.3 The common thread */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.3 The Common Thread</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Look closely and all four problems share one root: the model relies <span className="text-white font-medium">
          only on parametric knowledge</span>. So the fix should be intuitive — give the model
          <span className="text-white font-medium"> additional, external knowledge</span> at the moment it
          answers, instead of forcing it to remember everything up front.
        </p>
        <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#8b5cf6] uppercase tracking-widest mb-1">The idea in one line</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-medium">Parametric knowledge + external knowledge = the full
            context the model reasons over.</span> Everything RAG does is a disciplined way of supplying that
            external knowledge.
          </p>
        </div>
      </div>

      {/* 1.4 Other techniques */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.4 The Other Techniques (and Why They Fall Short)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          RAG isn&apos;t the only way to add knowledge. It helps to see the alternatives so you know where
          each one stops.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "Prompt Engineering", d: "Craft better prompts to pull more out of the model's existing knowledge. Useful, but it can't add facts the model never learned." },
            { t: "Fine-Tuning", d: "Continue training the model on new/private data so it's absorbed into the parameters. Powerful, but expensive, slow, and still frozen the moment it finishes." },
            { t: "In-Context Learning (ICL)", d: "Paste the extra knowledge straight into the prompt alongside the query. The model reads it as context and answers. This is the closest cousin to RAG — and the key idea it builds on." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.5 ICL and its ceiling */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 In-Context Learning and Its Ceiling</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          ICL is simple and powerful: whatever you put in the <span className="text-white font-medium">
          context window</span> becomes knowledge the model can use for that one answer. Tell it &ldquo;my
          name is Himanshu&rdquo; and it can answer &ldquo;what is my name?&rdquo; a moment later. So why not
          just paste the entire 1000-page document every time?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">Context window is finite</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Even a 200K or 1M-token window has a limit. You can&apos;t stuff unlimited private data in, and
              filling it up is expensive on every single call.
            </p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">&ldquo;Lost in the middle&rdquo;</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The more you cram in, the worse attention performs — models reliably miss information buried in
              the middle of a huge context. More context can mean <em>worse</em> answers.
            </p>
          </div>
        </div>
        <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#8b5cf6] uppercase tracking-widest mb-1">The real move</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Don&apos;t dump everything — <span className="text-white font-medium">filter</span> down to only
            the knowledge relevant to the query, then add <em>that</em> to the prompt. ICL plus smart,
            dynamic filtering of external knowledge is, in a sentence, what RAG is. That&apos;s exactly what
            we build next.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "An LLM stores frozen, parametric knowledge in its parameters — set once during expensive pretraining.",
            "This causes four problems: knowledge cutoff, hallucinations, no source attribution, and no access to private data.",
            "All four share one root cause: reliance on parametric knowledge alone.",
            "The fix is to supply external knowledge at answer time — parametric + external knowledge together.",
            "Alternatives are prompt engineering, fine-tuning, and in-context learning (ICL).",
            "ICL is closest to RAG, but a finite context window and 'lost in the middle' mean you must filter, not dump.",
            "RAG = in-context learning with smart, dynamic filtering of the relevant external knowledge.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </RagLessonLayout>
  );
}
