import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass13() {
  return (
    <LangChainLessonLayout slug="class-13">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 13 — Retrievers</p>
        <h1 className="text-3xl font-bold text-white">Retrievers — Fetching the Right Documents</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The fourth and final RAG component before we build a full RAG app. A
          <span className="text-white"> retriever</span> is a component that fetches relevant documents from a data
          source in response to a user&apos;s query — think of it as a <span className="text-white">search engine</span>
          that takes a query in and returns a list of Document objects. LangChain has many retrievers; this class covers
          the most useful ones, grouped by data source and by search strategy.
        </p>
      </div>

      {/* What are retrievers */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.1 What Is a Retriever?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A retriever is essentially a <span className="text-white">function</span>: input is the user&apos;s query,
          output is multiple Document objects. In between it searches a data source (a vector store, an API, anything) and
          decides which documents are most relevant.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            ["Query in, docs out", "Takes a query, returns a list of Document objects — like a search engine."],
            ["Many, not one", "LangChain has 20–30+ retrievers, each for different use cases."],
            ["All are Runnables", "Like models and prompts, retrievers have .invoke() — so they plug straight into chains."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Types */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.2 Two Ways to Categorize Retrievers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">By data source</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              What they search over. E.g. <span className="text-white">Wikipedia Retriever</span> (Wikipedia articles),
              <span className="text-white"> Vector Store Retriever</span> (your vector store),
              <span className="text-white"> Arxiv Retriever</span> (research papers).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">By search strategy</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              How they search. E.g. <span className="text-white">MMR</span>, <span className="text-white">Multi-Query
              Retriever</span>, <span className="text-white">Contextual Compression Retriever</span> — each uses a
              different mechanism to find documents.
            </p>
          </div>
        </div>
      </div>

      {/* Wikipedia retriever */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.3 Wikipedia Retriever (by data source)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Queries the Wikipedia API and fetches relevant articles for a query. Internally it does
          <span className="text-white"> keyword matching</span> (not semantic search) to decide which articles are most
          relevant, then returns them as Document objects.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.retrievers import WikipediaRetriever

retriever = WikipediaRetriever(top_k_results=2, lang="en")

query = "the geopolitical history of India and Pakistan from the perspective of a Chinese"
docs = retriever.invoke(query)   # invoke() -> it's a Runnable

for doc in docs:
    print(doc.page_content)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Retriever, not loader</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            It might feel like a document loader, but it isn&apos;t — it doesn&apos;t load all of Wikipedia. It performs
            <span className="text-white"> search</span>, deciding which articles are relevant to the query. That bit of
            intelligence is what makes it a retriever.
          </p>
        </div>
      </div>

      {/* Vector store retriever */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.4 Vector Store Retriever (by data source)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The most common retriever — searches and fetches documents from a vector store using
          <span className="text-white"> semantic similarity</span>. The query is embedded, compared against all stored
          document vectors, and the top-k most similar are returned.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

vector_store = Chroma.from_documents(documents=docs, embedding=OpenAIEmbeddings(), collection_name="my_collection")

# turn a vector store into a retriever
retriever = vector_store.as_retriever(search_kwargs={"k": 2})

result = retriever.invoke("What is Chroma used for?")`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Why not just similarity_search?</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">vector_store.similarity_search(...)</code>
            gives the same result as this vanilla retriever. The retriever&apos;s value is that (1) it&apos;s a
            <span className="text-white"> Runnable</span>, so it drops into chains, and (2) you can swap in
            <span className="text-white"> advanced search strategies</span> (below) that plain
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> similarity_search</code> can&apos;t do.
          </p>
        </div>
      </div>

      {/* MMR */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.5 MMR — Maximum Marginal Relevance (by strategy)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Plain similarity search often returns documents that are all relevant but nearly
          <span className="text-white"> identical</span> — redundant, giving no new perspective. MMR fixes this: pick
          results that are <span className="text-white">relevant to the query yet different from each other</span>. It
          picks the most relevant doc first, then each next doc that is relevant but most dissimilar to those already
          chosen.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`retriever = vector_store.as_retriever(
    search_type="mmr",
    search_kwargs={"k": 3, "lambda_mult": 0.5},
)
result = retriever.invoke("What is LangChain?")`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The lambda knob (0 → 1)</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">lambda_mult = 1</code> behaves like
            normal similarity search (relevance only); <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">0</code>
            maximizes diversity. Pick a value in between to balance relevance and variety.
          </p>
        </div>
      </div>

      {/* Multi query */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.6 Multi-Query Retriever (by strategy)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Solves <span className="text-white">ambiguous queries</span>. A broad question like &ldquo;How can I stay
          healthy?&rdquo; could mean what to eat, how to exercise, or how to manage stress — one search can&apos;t cover
          all three. The multi-query retriever sends the query to an <span className="text-white">LLM</span> which
          generates several diverse-but-related sub-queries, retrieves documents for each, then
          <span className="text-white"> merges and de-duplicates</span> the results.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.retrievers.multi_query import MultiQueryRetriever
from langchain_openai import ChatOpenAI

multiquery_retriever = MultiQueryRetriever.from_llm(
    llm=ChatOpenAI(),                              # generates query variations
    retriever=vector_store.as_retriever(search_kwargs={"k": 5}),  # does the fetching
)
result = multiquery_retriever.invoke("How to improve energy levels and maintain balance?")`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Against a data source with distractor documents (e.g. &ldquo;energy system&rdquo;, &ldquo;balance&rdquo; used
          in unrelated contexts), a plain retriever gets confused and pulls in irrelevant docs. The multi-query retriever
          understands the real intent and returns cleanly on-topic results.
        </p>
      </div>

      {/* Contextual compression */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.7 Contextual Compression Retriever (by strategy)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Improves quality by <span className="text-white">compressing documents after retrieval</span>, keeping only
          the content relevant to the query. A chunk might contain the answer to &ldquo;What is photosynthesis?&rdquo;
          buried alongside an unrelated sentence about the Grand Canyon — this happens when text splitting cuts mid-topic
          and you can&apos;t fully control chunk boundaries. The retriever returns only the relevant line.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Two parts</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A <span className="text-white">base retriever</span> (e.g. similarity search) fetches candidate documents,
            then a <span className="text-white">compressor</span> — an LLM — trims each document down to only what&apos;s
            relevant to the query, discarding the rest. Hence &ldquo;contextual compression.&rdquo;
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.retrievers.contextual_compression import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import LLMChainExtractor
from langchain_openai import ChatOpenAI

base_retriever = vector_store.as_retriever(search_kwargs={"k": 5})
compressor = LLMChainExtractor.from_llm(ChatOpenAI())

retriever = ContextualCompressionRetriever(
    base_retriever=base_retriever,
    base_compressor=compressor,
)
result = retriever.invoke("What is photosynthesis?")
# -> short, one-sentence answers; Grand Canyon / basketball lines are stripped out`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Use it when documents are <span className="text-white">long or contain mixed information</span>, when you want
          to reduce the LLM&apos;s context length, or to improve your RAG pipeline&apos;s answer accuracy.
        </p>
      </div>

      {/* More retrievers */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.8 Why So Many Retrievers?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          There are many more — Parent Document, Time-Weighted Vector, Self-Query, Ensemble, Multi-Vector, and others.
          The primary reason so many exist: retrievers are the main lever for improving a RAG system. A simple RAG
          pipeline often returns mediocre results, so you <span className="text-white">swap in a more advanced
          retriever</span> to make retrieval better. Any &ldquo;advanced RAG&rdquo; topic is largely about which
          retriever to use and how.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "A retriever is a function: query in → relevant Document objects out, searching a data source in between (like a search engine).",
            "LangChain has many retrievers, and all of them are Runnables (they have .invoke()), so they plug into chains.",
            "Categorize retrievers two ways: by data source (Wikipedia, Vector Store, Arxiv) and by search strategy (MMR, Multi-Query, Contextual Compression).",
            "Wikipedia Retriever uses keyword matching over the Wikipedia API — it's a retriever, not a loader, because it searches.",
            "Vector Store Retriever does semantic search via as_retriever(); its edge over similarity_search is being a Runnable and supporting advanced strategies.",
            "MMR returns results that are relevant yet diverse; lambda_mult (0→1) trades diversity for pure relevance.",
            "Multi-Query Retriever uses an LLM to expand an ambiguous query into several sub-queries, then merges and de-duplicates the results.",
            "Contextual Compression Retriever pairs a base retriever with an LLM compressor that trims each document to only the query-relevant content.",
            "So many retrievers exist because swapping in a better one is the main way to improve a RAG system's retrieval quality.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#22a06b]/20 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      {/* Next up */}
      <div className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4">
        <p className="text-xs font-semibold text-[#22a06b] uppercase tracking-widest mb-1">Coming Next</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          That&apos;s all four RAG components — document loaders, text splitters, vector stores, and retrievers. Next we
          finally put them together and build a complete <span className="text-white">RAG application</span> end to end.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
