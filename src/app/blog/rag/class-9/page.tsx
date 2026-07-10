import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass9() {
  return (
    <RagLessonLayout slug="class-9">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 9 — Embeddings</p>
        <h1 className="text-3xl font-bold text-white">Vector Embeddings, Embedding Space and Distance Metrics</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          We have loaded documents and split them into chunks. But a computer can&apos;t search text by
          <span className="text-white font-medium"> meaning</span> — only numbers. This class covers the idea that turns
          RAG from keyword search into semantic search: <span className="text-white font-medium">embeddings</span> — how
          text becomes a vector, what the <span className="text-white font-medium">embedding space</span> is, and how we
          measure <span className="text-white font-medium">closeness</span> between two vectors.
        </p>
      </div>

      {/* 9.1 What is an embedding */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.1 What Is a Vector Embedding?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white">vector embedding</span> is a list of numbers that represents a piece of text.
          An <span className="text-white">embedding model</span> reads a sentence and outputs a fixed-length array of
          floats — <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">[0.021, -0.44, 0.87, ...]</code>.
          The key property: text with <span className="text-white">similar meaning</span> produces vectors that point in
          <span className="text-white"> similar directions</span>, even if they share no words.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv

load_dotenv()

embedder = OpenAIEmbeddings(model="text-embedding-3-small")

# one string  ->  one vector
vector = embedder.embed_query("What is retrieval augmented generation?")

print(type(vector))   # <class 'list'>
print(len(vector))    # 1536  -> the vector has 1536 numbers
print(vector[:5])     # [-0.013, 0.041, -0.002, 0.055, ...]`}</pre>
        </div>
      </div>

      {/* 9.2 embed_query vs embed_documents */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.2 embed_query vs embed_documents</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every LangChain embedding class exposes two methods. Use
          <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs"> embed_query</code> for a
          <span className="text-white"> single</span> string (the user&apos;s question at search time) and
          <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs"> embed_documents</code> for a
          <span className="text-white"> list</span> of chunks (your knowledge base, embedded once and stored).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`# --- indexing time: embed every chunk ---
text_documents = [doc.page_content for doc in chunks]
document_embeddings = embedder.embed_documents(texts=text_documents)

print(len(document_embeddings))       # one vector per chunk
print(len(document_embeddings[0]))    # 1536 numbers each

# --- search time: embed the user's question ---
query_embedding = embedder.embed_query(text="How does RAG reduce hallucination?")`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Why two methods</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Some models embed documents and queries <span className="text-white">slightly differently</span> (a
            document is content, a query is an intent). Keeping them separate lets the model apply the right treatment —
            and lets LangChain batch a whole list in one call.
          </p>
        </div>
      </div>

      {/* 9.3 Embedding space */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.3 The Embedding Space</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Think of every vector as a <span className="text-white">point</span> in a high-dimensional space. A 1536-number
          vector is a point in <span className="text-white">1536-dimensional space</span>. We can&apos;t picture that,
          but the intuition holds from 2D: the model arranges text so that
          <span className="text-white"> related concepts cluster together</span> and unrelated ones sit far apart.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed font-mono">
            &quot;king&quot; ●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● &quot;queen&quot;<br />
            &quot;monarch&quot; ●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● &quot;banana&quot;<br />
            <span className="text-gray-500 text-xs">↑ semantically close cluster ↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑ far away ↑</span>
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Retrieval is then just geometry: embed the question, then find the chunk vectors
          <span className="text-white"> closest to it</span> in this space. &quot;Closest&quot; is what a
          <span className="text-white"> distance metric</span> defines.
        </p>
      </div>

      {/* 9.4 Distance metrics */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.4 Distance &amp; Similarity Metrics</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Three ways to measure how close two vectors are. The one that dominates text RAG is
          <span className="text-white"> cosine similarity</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">Cosine Similarity</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The <span className="text-white">angle</span> between vectors, ignoring length. Ranges −1 → 1; higher is
              closer. The default for text.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">Euclidean (L2)</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Straight-line <span className="text-white">distance</span> between the two points. Smaller is closer.
              Sensitive to vector magnitude.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">Dot Product</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Multiply and sum. On <span className="text-white">normalized</span> vectors it equals cosine similarity —
              fast and common in vector DBs.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

a = np.array(embedder.embed_query("How does RAG reduce hallucination?"))
b = np.array(embedder.embed_query("Why does retrieval prevent made-up answers?"))
c = np.array(embedder.embed_query("Best pasta recipe for dinner"))

# cosine similarity by hand: dot(a, b) / (||a|| * ||b||)
def cosine(x, y):
    return np.dot(x, y) / (np.linalg.norm(x) * np.linalg.norm(y))

print(cosine(a, b))   # ~0.82  -> same idea, different words -> close
print(cosine(a, c))   # ~0.09  -> unrelated topic -> far apart

# or let sklearn do it for a whole matrix at once
scores = cosine_similarity([a], [b, c])
print(scores)         # [[0.82, 0.09]]`}</pre>
        </div>
      </div>

      {/* 9.5 Why cosine */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.5 Why Cosine Wins for Text</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A long document and a short query about the same topic have very different vector
          <span className="text-white"> lengths</span> — but should still match. Cosine looks only at
          <span className="text-white"> direction</span> (the angle), so it isn&apos;t fooled by length. Euclidean distance,
          by contrast, grows when magnitudes differ, so a long relevant chunk can look &quot;far&quot; even when it&apos;s on-topic.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Rule of thumb</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Use <span className="text-white">cosine similarity</span> for text embeddings. Most vector stores default to
            it (or to dot product on normalized vectors, which is equivalent) — you rarely need to change it.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "An embedding model turns text into a fixed-length vector of floats; similar meaning produces similar vectors.",
            "embed_query embeds one string (the search query); embed_documents embeds a list of chunks (your knowledge base).",
            "The embedding space is high-dimensional; related concepts cluster together and retrieval becomes finding the nearest vectors.",
            "Cosine similarity measures the angle between vectors (−1 to 1), Euclidean measures straight-line distance, dot product multiplies-and-sums.",
            "Cosine is the default for text because it ignores vector length and compares direction — a short query still matches a long relevant chunk.",
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
          If every embedding is a vector, how many numbers should it have — and does it matter whether the model is
          OpenAI&apos;s or a free one you run yourself? Next class:
          <span className="text-white"> dimensionality, and proprietary vs open-source embedding models</span>.
        </p>
      </div>
    </RagLessonLayout>
  );
}
