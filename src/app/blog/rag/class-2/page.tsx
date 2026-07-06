import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass2() {
  return (
    <RagLessonLayout slug="class-2">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 2 — The Definition</p>
        <h1 className="text-3xl font-bold text-white">What Is RAG?</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          We ended the last class with a one-line intuition: give the model the <em>relevant</em> external
          knowledge at answer time. That intuition has a name — <span className="text-white font-medium">
          RAG: Retrieval-Augmented Generation.</span> In this class we unpack all three words, meet the
          components that make it work, and check it off against the four problems from Class 1.
        </p>
      </div>

      {/* 2.1 The name */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.1 Reading the Name Literally</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { w: "Retrieval", d: "Fetch the pieces of external knowledge most relevant to the user's query, out of a large knowledge base." },
            { w: "Augmented", d: "Augment (enhance) the prompt by adding that retrieved knowledge alongside the original query." },
            { w: "Generation", d: "Hand the augmented prompt to the LLM, which generates the final, grounded answer." },
          ].map(({ w, d }) => (
            <div key={w} className="bg-[#8b5cf6]/5 border border-[#8b5cf6]/30 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#8b5cf6]">{w}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#8b5cf6] uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-medium">RAG is a technique that retrieves relevant external
            knowledge, augments the prompt with it, and lets the LLM generate an answer grounded in that
            knowledge</span> — instead of relying on the model&apos;s frozen parametric memory alone.
          </p>
        </div>
      </div>

      {/* 2.2 Parametric vs external */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.2 Parametric vs External Knowledge</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Keep these two straight and RAG becomes obvious:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">Parametric knowledge</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              What the model already knows — baked into its parameters during training. Frozen, public, and
              impossible to cite.
            </p>
          </div>
          <div className="bg-white/5 border border-[#8b5cf6]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">External knowledge</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Fresh, private, or source-backed information kept <em>outside</em> the model — in a knowledge
              base — and pulled in only when a query needs it.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          RAG lets the model reason over <span className="text-white font-medium">both</span> at once. The
          external knowledge is filtered <span className="text-white font-medium">dynamically</span> — it
          changes with every query, so the model always gets exactly what <em>this</em> question needs.
        </p>
      </div>

      {/* 2.3 The components */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.3 The Core Components of RAG</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A RAG system is built from a handful of cooperating parts. Here they are at a glance — Class 3
          walks through how data flows between them.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { c: "Knowledge Source", d: "Your raw external data — PDFs, CSVs, DOCs, HTML, even audio/video. The source of truth RAG will retrieve from." },
            { c: "Knowledge Base (Vector Store)", d: "A database where the source is stored as embeddings (vectors) plus text and metadata, so it can be searched by meaning." },
            { c: "Retriever", d: "The smart component: it takes the query, turns it into a vector, and finds the most semantically similar chunks in the knowledge base." },
            { c: "Augmentation", d: "Context assembly — the retrieved chunks are combined with the original query into a single augmented prompt." },
            { c: "Generator (LLM)", d: "The model reads the augmented prompt and produces the final, grounded response." },
          ].map(({ c, d }, i) => (
            <div key={c} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#8b5cf6]/15 text-[#8b5cf6] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{c}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.4 Semantic similarity */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.4 The Heart of Retrieval: Semantic Similarity</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          &ldquo;Smart&rdquo; retrieval doesn&apos;t match keywords — it matches
          <span className="text-white font-medium"> meaning</span>. Every chunk of knowledge and the query
          itself are turned into vectors (embeddings) that capture their semantic meaning. Chunks whose
          meaning is close to the query&apos;s meaning get a high <span className="text-white font-medium">
          similarity score</span>.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { step: "Embed the query", detail: "The user's query becomes a query vector — say 128 dimensions of numbers capturing its meaning." },
            { step: "Score every chunk", detail: "Compute a similarity score between the query vector and each stored chunk vector." },
            { step: "Rank descending", detail: "Sort all chunks by similarity, highest first." },
            { step: "Take the top-k", detail: "Keep only the few most similar chunks — e.g. the top 4 — and discard the rest." },
          ].map(({ step, detail }, i) => (
            <div key={step} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#8b5cf6]/15 text-[#8b5cf6] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{step}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Those top-k chunks are the <span className="text-white font-medium">retrieved documents</span> —
          the filtered, relevant external knowledge that gets added to the prompt.
        </p>
      </div>

      {/* 2.5 How RAG fixes the four problems */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.5 How RAG Fixes the Four Problems</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The real test of the definition: does RAG actually solve everything from Class 1? It does.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { p: "Knowledge cutoff", fix: "Solved. Put the latest events in the knowledge base and retrieve them — no re-training needed." },
            { p: "Hallucinations", fix: "Solved. The answer is grounded in retrieved facts and context, so the model is far less likely to invent things." },
            { p: "No source attribution", fix: "Solved. Retrieved chunks carry their text plus metadata (page, document, source), so answers can cite where they came from." },
            { p: "No access to private data", fix: "Solved. Put your private documents in the knowledge base and the model can now answer over them." },
          ].map(({ p, fix }) => (
            <div key={p} className="bg-[#8b5cf6]/5 border border-[#8b5cf6]/20 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{p}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{fix}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "RAG stands for Retrieval-Augmented Generation: retrieve relevant knowledge, augment the prompt, generate the answer.",
            "It combines the model's parametric knowledge with dynamically-filtered external knowledge.",
            "Core components: knowledge source, knowledge base (vector store), retriever, augmentation, and generator (LLM).",
            "Retrieval works by semantic similarity — embed the query and chunks as vectors and keep the top-k most similar.",
            "The retrieved chunks carry text plus metadata, which is what enables source attribution.",
            "RAG directly solves all four LLM problems: cutoff, hallucinations, attribution, and private-data access.",
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
