import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass8() {
  return (
    <OllamaLessonLayout slug="class-8">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 8 — Orchestration</p>
        <h1 className="text-3xl font-bold text-white">Using Ollama with LangChain</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Real, industry-grade LLM applications aren&apos;t just &quot;prompt in, output out&quot; — they juggle
          many components. LangChain is an open-source framework that acts as an
          <span className="text-white font-medium"> orchestrator</span> over all those parts, and it
          integrates cleanly with Ollama.
        </p>
      </div>

      {/* 8.1 What is LangChain */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.1 What Is LangChain?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LangChain is an open-source framework for building advanced LLM applications. When you build an
          industry-level app, you handle many components — memory, web search, embeddings, databases, and
          more — and LangChain helps <span className="text-white font-medium">coordinate</span> between
          all of them with ready-made, reusable components.
        </p>
      </div>

      {/* 8.2 RAG example */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.2 Why It Matters: A RAG Example</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Say you want a chatbot over a company-policy PDF — a RAG system. Look how many components that
          needs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            "Input handling (read PDF)",
            "Chunking",
            "Embeddings",
            "Database (vector store)",
            "Retrieval",
            "Final generation",
          ].map((c) => (
            <div key={c} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-gray-300 text-center">
              {c}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Only embeddings and final generation involve the LLM — the rest don&apos;t. You could code each
          component from scratch, or use a framework like LangChain where components already exist. Your
          job is just to <span className="text-white font-medium">connect them into a chain</span>, where
          one component&apos;s output becomes the next one&apos;s input — so the whole task executes smoothly.
        </p>
      </div>

      {/* 8.3 Three ways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.3 Three Ways to Use Ollama in LangChain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          After <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">pip install langchain-ollama</code>, you can use
          Ollama for chat, plain generation, or embeddings. Make sure Ollama is installed and the model is
          already downloaded.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">ChatOllama — chat-style interaction</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_ollama import ChatOllama

model = ChatOllama(model="llama3.2:1b")
response = model.invoke("Explain quantum entanglement in one sentence")
print(response.content)`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">OllamaLLM — plain text generation</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_ollama import OllamaLLM

llm = OllamaLLM(model="llama3.2:1b")
response = llm.invoke("What is the capital of France?")
print(response)`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">OllamaEmbeddings — generate embeddings</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_ollama import OllamaEmbeddings

emb = OllamaEmbeddings(model="nomic-embed-text")

# single query
q = emb.embed_query("What is LangChain")

# multiple documents
docs = emb.embed_documents(["Document one content", "Document two content"])`}</pre>
        </div>
      </div>

      {/* 8.4 Why not just Ollama */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.4 Why Not Just Use the Ollama Library?</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            For simple generation or embeddings, you could use the Ollama library directly. But many tasks
            in a real app <span className="text-white font-medium">aren&apos;t</span> LLM tasks (PDF reading,
            chunking, retrieval). LangChain&apos;s strength is building long
            <span className="text-white font-medium"> chains</span> where each component&apos;s output feeds
            the next. If you build some components in LangChain and one in raw Ollama, the chain breaks.
            Build everything in LangChain and the whole pipeline runs smoothly end-to-end.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "LangChain is an open-source framework that orchestrates the many components of a real LLM app.",
            "A RAG system needs input handling, chunking, embeddings, a vector DB, retrieval, and generation — most aren't LLM tasks.",
            "Use ChatOllama (chat), OllamaLLM (plain generation), or OllamaEmbeddings (embeddings) after installing langchain-ollama.",
            "embed_query handles a single text; embed_documents handles a list of texts.",
            "LangChain shines for chaining components so one's output feeds the next — keep the whole pipeline in LangChain to avoid breaks.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </OllamaLessonLayout>
  );
}
