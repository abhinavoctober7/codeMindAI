import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass3() {
  return (
    <RagLessonLayout slug="class-3">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 3 — The Pipeline</p>
        <h1 className="text-3xl font-bold text-white">How RAG Works</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Now we trace a query through the whole machine. A RAG pipeline has two halves: an
          <span className="text-white font-medium"> indexing</span> phase that happens once, up front (turn
          your documents into a searchable knowledge base), and a <span className="text-white font-medium">
          query</span> phase that happens on every question (retrieve, augment, generate). Let&apos;s walk
          both, step by step.
        </p>
      </div>

      {/* 3.1 Indexing phase */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.1 Indexing — Building the Knowledge Base</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          These are the up-front, one-time steps. They&apos;re also the slow ones — so we do them once and
          reuse the result for every future query.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { c: "1 — Knowledge source", d: "Point at your external data: PDF, HTML, CSV, DOC, TXT, MD — even MP4, MKV, or MP3. It can live anywhere: local files, Google Drive, an AWS S3 bucket." },
            { c: "2 — Document loading", d: "A document loader parses each file into memory and attaches metadata: type, name, date of creation, size." },
            { c: "3 — Parsing", d: "Extract the actual content and its structure — text, tables, and images — from the raw document so it's usable downstream." },
            { c: "4 — Chunking", d: "Break large documents into smaller parts. Split a 100-page PDF page-wise and you get ~100 chunks, each tagged with metadata like page number, document name, and file type." },
            { c: "5 — Embedding", d: "A deep-learning embedding model turns each chunk's text into a vector — a fixed-length list of numbers (e.g. 128 dimensions) that captures its semantic meaning." },
            { c: "6 — Store in the vector DB", d: "Save every chunk as vector + text + metadata in a vector store. That store is your knowledge base, and it supports full CRUD as your data changes." },
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
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Why chunk at all?</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Embedding models have a fixed input size, and retrieval is only useful if it returns
            <em> small, precise</em> pieces. Chunking makes each unit of knowledge searchable on its own and
            keeps the metadata (which page? which document?) that later powers source attribution.
          </p>
        </div>
      </div>

      {/* 3.2 Query phase */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.2 Query — Retrieve, Augment, Generate</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          With the knowledge base ready, here&apos;s what happens each time a user asks something:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { c: "Query in", d: "The user asks a question, e.g. 'What is the company's policy on ...?'" },
            { c: "Embed the query", d: "The same embedding model converts the query into a query vector in the same space as the stored chunks (e.g. 128-D)." },
            { c: "Similarity search", d: "Compare the query vector against every chunk vector in the knowledge base and score how semantically close each one is." },
            { c: "Retrieve top chunks", d: "Return the most similar chunks — the retrieved documents — each with its text and metadata." },
            { c: "Augmentation (context assembly)", d: "Assemble the final prompt: the retrieved context + the original query, often with instructions and guardrails ('if you don't know, say \"I don't know\"')." },
            { c: "Generation", d: "Send that augmented prompt to the LLM, which reads the context and generates a relevant, grounded response." },
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

      {/* 3.3 The data flow at a glance */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.3 The Data Flow at a Glance</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-5 flex flex-col gap-3 text-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Indexing (once)</p>
          <p className="text-gray-300 leading-relaxed font-mono text-xs">
            Knowledge Source → Document Loader → Parse → <span className="text-[#8b5cf6]">Chunking</span> →
            Embedding Model → <span className="text-[#8b5cf6]">Vector Store</span>
          </p>
          <div className="border-t border-white/10" />
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Query (every question)</p>
          <p className="text-gray-300 leading-relaxed font-mono text-xs">
            Query → Query Vector → <span className="text-[#8b5cf6]">Similarity Search</span> → Retrieved
            Chunks → <span className="text-[#8b5cf6]">Augmentation</span> (Retrieved Context + Query) → LLM →
            Relevant Response
          </p>
        </div>
      </div>

      {/* 3.4 Failures */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.4 Where RAG Systems Fail</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A RAG pipeline has two components that can break — and knowing which one failed tells you where to
          look.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">1 — Retriever failure</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The retriever pulls the <em>wrong</em> context. Usually the knowledge base is the culprit —
              bad chunking, poor embeddings, or missing data — so the right context was never retrievable.
              Even a perfect LLM can&apos;t answer from context it never received.
            </p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">2 — Generator failure</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The right context was retrieved, but the LLM still answers poorly — ignoring the context or
              misreading it. Often a symptom of too much added context (the query&apos;s signal drowned out),
              which points back to filtering more tightly.
            </p>
          </div>
        </div>
      </div>

      {/* 3.5 Guardrails */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.5 A Note on Guardrails</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The augmentation step is where you add guardrails to the prompt. A classic one:
          <span className="text-white font-medium"> &ldquo;If you don&apos;t know the answer from the given
          context, say &lsquo;I don&apos;t know.&rsquo;&rdquo;</span> This stops the model from falling back
          on shaky parametric memory and keeps answers honestly grounded in what was retrieved — closing the
          loop on the hallucination problem we started with.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "A RAG pipeline splits into an up-front indexing phase and a per-query phase.",
            "Indexing: knowledge source → load → parse → chunk → embed → store in a vector database (the knowledge base).",
            "Chunking breaks big documents into small, searchable pieces and keeps metadata for attribution.",
            "Querying: embed the query → similarity search → retrieve top chunks → augment the prompt → LLM generates the answer.",
            "Augmentation assembles retrieved context + query, plus instructions and guardrails.",
            "Two failure modes: retriever failure (wrong/missing context, usually the knowledge base) and generator failure (LLM mishandles good context).",
            "A guardrail like 'if you don't know, say so' keeps answers grounded and curbs hallucination.",
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
