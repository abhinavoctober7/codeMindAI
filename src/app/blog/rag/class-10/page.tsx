import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass10() {
  return (
    <RagLessonLayout slug="class-10">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 10 — Embedding Models</p>
        <h1 className="text-3xl font-bold text-white">Embedding Vectors Dimensionality &amp; Proprietary vs Open Source Models</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Last class every vector had a length — 1536 numbers. This class asks: what does that number mean, how does
          <span className="text-white font-medium"> dimensionality</span> affect quality and cost, and how do
          <span className="text-white font-medium"> proprietary</span> models (OpenAI) stack up against
          <span className="text-white font-medium"> open-source</span> ones you run yourself with Ollama.
        </p>
      </div>

      {/* 10.1 What is dimensionality */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.1 What Is Dimensionality?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The <span className="text-white">dimensionality</span> of an embedding is simply how many numbers are in the
          vector. More dimensions give the model more &quot;room&quot; to encode nuance — but every dimension costs
          <span className="text-white"> storage</span> in your vector database and <span className="text-white">compute</span>
          at search time. Bigger is not automatically better.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv

load_dotenv()

MODEL_LARGE = "text-embedding-3-large"
MODEL_SMALL = "text-embedding-3-small"

embedder_large = OpenAIEmbeddings(model=MODEL_LARGE)
embedder_small = OpenAIEmbeddings(model=MODEL_SMALL)

query = "What is Openclaw and what are the major security concerns?"

print(len(embedder_large.embed_query(query)))   # 3072 dimensions
print(len(embedder_small.embed_query(query)))   # 1536 dimensions`}</pre>
        </div>
      </div>

      {/* 10.2 small vs large */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.2 small vs large — the Trade-off</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">text-embedding-3-small</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="text-white">1536</span> dimensions. Cheaper, faster, smaller index. Strong enough for most
              production RAG. The sensible default.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">text-embedding-3-large</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="text-white">3072</span> dimensions. Higher retrieval accuracy on hard, nuanced corpora —
              but ~2× the storage and cost per query.
            </p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Shrink the vector on purpose</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The v3 models support a <code className="text-[#8b5cf6]">dimensions</code> parameter (thanks to Matryoshka
            training) — you can ask <code className="text-[#8b5cf6]">large</code> for a 1024-dim vector and keep most of
            its quality while cutting storage. Don&apos;t mix sizes in one index, though.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`# ask the large model for a shorter vector
embedder = OpenAIEmbeddings(model="text-embedding-3-large", dimensions=1024)
print(len(embedder.embed_query("hello")))   # 1024`}</pre>
        </div>
      </div>

      {/* 10.3 Open source with Ollama */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.3 Open-Source Embeddings with Ollama</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          OpenAI&apos;s models are an <span className="text-white">API</span> — your text leaves your machine and you pay
          per token. <span className="text-white">Ollama</span> runs open-source embedding models
          <span className="text-white"> locally</span>: free, private, offline. You pull a model once, then embed with
          the same LangChain interface.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`# 1. pull an embedding model once (in the terminal)
#    ollama pull mxbai-embed-large

from langchain_ollama.embeddings import OllamaEmbeddings

embedder = OllamaEmbeddings(model="mxbai-embed-large")

vector = embedder.embed_query("What is retrieval augmented generation?")
print(len(vector))   # 1024 dimensions, running fully on your machine

# same embed_documents API as OpenAI
docs = [doc.page_content for doc in chunks]
doc_vectors = embedder.embed_documents(texts=docs)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Popular open models</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#8b5cf6]">mxbai-embed-large</code> (1024-dim, strong all-rounder),
            <code className="text-[#8b5cf6]"> nomic-embed-text</code> (768-dim, long context), and
            <code className="text-[#8b5cf6]"> all-minilm</code> (384-dim, tiny and fast). Because the API is identical,
            swapping providers is a one-line change.
          </p>
        </div>
      </div>

      {/* 10.4 Comparison table */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.4 Proprietary vs Open Source</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-gray-400">
              <tr>
                <th className="px-4 py-3 font-semibold"></th>
                <th className="px-4 py-3 font-semibold text-[#8b5cf6]">Proprietary — OpenAI</th>
                <th className="px-4 py-3 font-semibold text-[#8b5cf6]">Open Source — Ollama</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["Cost", "Pay per token (API)", "Free after download"],
                ["Privacy", "Text sent to OpenAI", "Stays on your machine"],
                ["Setup", "API key, nothing to host", "Install Ollama, pull model"],
                ["Quality", "State of the art", "Very good, close on many tasks"],
                ["Offline", "No — needs internet", "Yes — fully local"],
                ["Scaling", "OpenAI handles the load", "Limited by your hardware"],
              ].map(([label, a, b], i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="px-4 py-3 font-semibold text-white">{label}</td>
                  <td className="px-4 py-3">{a}</td>
                  <td className="px-4 py-3">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 10.5 Choosing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.5 Which Should You Use?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">Reach for OpenAI when…</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              You want top accuracy with zero infra, are prototyping fast, or your data is not sensitive.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">Reach for Ollama when…</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Data must stay private, you want zero per-query cost at scale, or you need to run offline / on-prem.
            </p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">One hard rule</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Embed your documents and your queries with the <span className="text-white">same model</span>. Vectors from
            different models live in different spaces — mixing them makes similarity scores meaningless. Switching models
            later means <span className="text-white">re-embedding the whole corpus</span>.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Dimensionality is how many numbers are in a vector; more dimensions can capture more nuance but cost more storage and compute.",
            "text-embedding-3-small is 1536-dim (cheap default); text-embedding-3-large is 3072-dim (higher accuracy, ~2x cost).",
            "OpenAI v3 models accept a dimensions parameter to shrink vectors (Matryoshka) while keeping most quality.",
            "Ollama runs open-source models like mxbai-embed-large locally — free, private, offline — with the same embed_query/embed_documents API.",
            "Choose proprietary for top accuracy with no infra; choose open source for privacy, offline use, and zero per-query cost.",
            "Always embed documents and queries with the same model; switching models forces you to re-embed the entire corpus.",
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

      {/* Next up */}
      <div className="bg-[#8b5cf6]/5 border border-[#8b5cf6]/30 rounded-xl p-4">
        <p className="text-xs font-semibold text-[#8b5cf6] uppercase tracking-widest mb-1">Coming Next</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          We can now turn any chunk into a vector. The next step is <span className="text-white">storing millions of
          them</span> and searching fast — <span className="text-white">vector stores and indexing</span>.
        </p>
      </div>
    </RagLessonLayout>
  );
}
