import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass14() {
  return (
    <PromptEngineeringLessonLayout slug="class-14">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 14 — Grounding the Model</p>
        <h1 className="text-3xl font-bold text-white">Retrieval Augmented Generation (RAG) &amp; Query Optimization</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          An LLM only knows what it was trained on. <span className="text-white font-medium">RAG</span> changes that —
          instead of letting the model guess, it first <span className="text-white font-medium">retrieves</span> relevant
          facts from your own documents and databases, then generates an answer grounded strictly in that context. This
          class walks the full pipeline and the prompt-engineering tricks that make retrieval actually work.
        </p>
      </div>

      {/* 14.1 What is RAG */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.1 What is RAG?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          RAG enhances LLMs so they don&apos;t rely solely on internal knowledge. Rather than guessing an answer, the
          system retrieves relevant information from external data sources first, then generates a response based
          strictly on that retrieved context.
        </p>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">Common Use Cases</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Knowledge-based assistants, company policy chatbots, and exam-preparation bots — anywhere answers must come
            from a trusted, specific corpus rather than the model&apos;s general memory.
          </p>
        </div>
      </div>

      {/* 14.2 The pipeline */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.2 The Complete RAG Pipeline</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The full flow has six stages across two phases — <span className="text-white font-medium">Indexing</span>{" "}
          (building the database) and <span className="text-white font-medium">Querying</span> (finding info and
          answering).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Document Loading -> Chunking -> Embedding Creation ->
Vector DB Storage -> Retrieval -> Final LLM Response`}</pre>
        </div>
      </div>

      {/* 14.3 Phase A Indexing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.3 Phase A — Indexing (Database Creation)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This phase prepares raw data so the machine can understand and search it effectively.
        </p>
        {[
          { k: "Document Loader", v: "Ingests raw data from sources like PDFs, text files, or web pages." },
          { k: "Chunking", v: "Breaks large, unwieldy documents into smaller, manageable pieces. A robust chunking strategy is crucial for the accuracy of future retrievals." },
          { k: "Embeddings", v: "Converts text chunks into numerical vectors that capture semantic meaning — e.g. 'I have a cat' becomes [0.2, 0.4, 0.96, 0.87, ...]. Each chunk becomes a point in a high-dimensional space." },
          { k: "Vector Database", v: "Securely stores the text chunks alongside their corresponding numerical embeddings." },
        ].map(({ k, v }) => (
          <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">{k}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
          </div>
        ))}
      </div>

      {/* 14.4 Phase B Query & Retrieval */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.4 Phase B — Query &amp; Retrieval</h2>
        <p className="text-gray-400 text-sm leading-relaxed">This phase runs when a user actually asks a question.</p>
        {[
          { k: "Query Conversion", v: "The user's query is immediately converted into an embedding (a numerical vector)." },
          { k: "Vector Search", v: "The system finds the nearest neighbors — vectors mathematically closest to the query's vector. Similar meanings sit closer together; dissimilar meanings sit farther apart." },
          { k: "Retrieval", v: "The database returns the top-N most relevant chunks." },
        ].map(({ k, v }) => (
          <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">{k}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Semantic Search ✓</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Meaning-based. Powers RAG — faster searches, better accuracy, and context-aware responses.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Keyword Search ✗</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Only looks for exact text matches — brittle, and blind to synonyms or rephrasing.
            </p>
          </div>
        </div>
      </div>

      {/* 14.5 Phase C Generation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.5 Phase C — Generation</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The LLM receives both the original user query and the retrieved chunks. It is instructed to generate its final
          answer based <span className="text-white font-medium">only</span> on the provided retrieved context — never
          from its own pre-trained memory.
        </p>
      </div>

      {/* 14.6 The Lexical Gap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.6 The Challenge — The Lexical Gap</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          RAG often fails because users write poor, narrow, or imprecise queries that miss important keywords. This{" "}
          <span className="text-white font-medium">Lexical Gap</span> causes the system to retrieve irrelevant chunks,
          producing incorrect or incomplete final outputs. Prompt engineering fixes this at two stages:{" "}
          <span className="text-white font-medium">before retrieval</span> (optimizing the search query) and{" "}
          <span className="text-white font-medium">during the final LLM call</span> (structuring the answer prompt).
        </p>
      </div>

      {/* 14.7 Query Rewriting */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.7 Solution 1 — Query Rewriting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An LLM rewrites the original prompt into a better, richer version <span className="text-white font-medium">before</span>{" "}
          the retrieval phase. It captures semantic meaning and better matches the phrasing used in the actual source
          documents.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-red-400 font-mono">weak query</p>
            <p className="text-sm text-gray-300 font-mono">&quot;force formula&quot;</p>
          </div>
          <p className="text-[#ec4899] text-xs">↓ rewritten into</p>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-green-400 font-mono">rich query</p>
            <p className="text-sm text-gray-300 font-mono">&quot;What is the relationship between mass, acceleration, and force?&quot;</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">This richer phrasing yields far better chunks from the vector search.</p>
      </div>

      {/* 14.8 Step-Back Prompting */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.8 Solution 2 — Step-Back Prompting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This advanced technique shifts focus away from an exact, highly specific query toward a{" "}
          <span className="text-white font-medium">broader concept</span>, retrieving a wider range of conceptually
          relevant content.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-red-400 font-mono">specific query</p>
            <p className="text-sm text-gray-300 font-mono">&quot;F = ma derivation&quot;</p>
          </div>
          <p className="text-[#ec4899] text-xs">↓ step back to</p>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-green-400 font-mono">broader concept</p>
            <p className="text-sm text-gray-300 font-mono">&quot;Effect of mass and acceleration on force&quot;</p>
          </div>
        </div>
      </div>

      {/* 14.9 Best practices */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.9 Best Practices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">For Better Retrieval</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Use query rewriting, ensure a robust chunking strategy, and lean heavily on semantic search.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">For Better Output</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Give the final LLM clear instructions and strictly include only the relevant context.
            </p>
          </div>
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-bold">&quot;Good retrieval = Good generation.&quot;</span> If retrieval fails,
            the LLM cannot magically fix the output. Focus heavily on the quality of your queries, chunks, and embeddings.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-2">Summary Diagram</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`User Query -> Query Rewriting (optional) -> Embedding ->
Vector Search -> Relevant Chunks -> LLM -> Final Answer`}</pre>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "RAG grounds an LLM in external data — it retrieves relevant context first, then generates an answer based strictly on that context instead of guessing.",
            "Indexing builds the database: Document Loading -> Chunking -> Embeddings -> Vector DB. Chunking quality drives retrieval accuracy.",
            "Querying converts the user's question to a vector, runs a nearest-neighbor vector search, and returns the top-N chunks.",
            "RAG relies on semantic (meaning-based) search, not keyword matching — closer vectors mean closer meaning.",
            "The Lexical Gap — vague or keyword-poor queries — is the main reason RAG retrieves the wrong chunks.",
            "Query Rewriting enriches a weak query before retrieval; Step-Back Prompting broadens a narrow query to pull wider conceptual context.",
            "Good retrieval = good generation: if retrieval fails, the LLM can't fix it. Invest in queries, chunks, and embeddings.",
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
