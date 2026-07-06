import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass12() {
  return (
    <LangChainLessonLayout slug="class-12">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 12 — Vector Stores</p>
        <h1 className="text-3xl font-bold text-white">Vector Stores — Storing &amp; Searching Embeddings</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The third RAG component. We can load documents and split them into chunks — but to compare meaning we turn text
          into <span className="text-white">embedding vectors</span>, and now we need somewhere to keep millions of them
          and search them fast. A <span className="text-white">vector store</span> is a system built to store and
          retrieve data represented as numerical vectors. This class covers why they exist, their four core features,
          how they differ from vector databases, and how to use Chroma in LangChain.
        </p>
      </div>

      {/* Motivation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.1 Why Vector Stores? A Movie Recommender</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Imagine an IMDb-style movie catalog. You want to add a
          <span className="text-white"> recommender</span>: on the Spider-Man page, suggest similar movies to keep users
          engaged. The naive approach is <span className="text-white">keyword matching</span> — compare director, lead
          actor, genre, release date. If they match, call the movies similar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">False positives</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="text-white">My Name Is Khan</span> and <span className="text-white">Kabhi Alvida Naa
              Kehna</span> share director, lead actor, era and genre — so keyword matching calls them similar. But the
              stories are completely different.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">False negatives</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="text-white">Taare Zameen Par</span> and <span className="text-white">A Beautiful
              Mind</span> are genuinely similar in theme, but share no keywords — so the system never links them.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The fix: don&apos;t match keywords — compare the <span className="text-white">plot</span>. Similar stories =
          similar movies. But comparing the semantic meaning of two pieces of text is a hard NLP task... until embeddings.
        </p>
      </div>

      {/* Embeddings recap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.2 Embeddings &amp; Similarity</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An <span className="text-white">embedding</span> represents the meaning of text as numbers. Feed a plot into a
          neural network and it returns a <span className="text-white">vector</span> (512, 784, or more dimensions) that
          captures the meaning. Convert every movie plot into a vector, plot them in that high-dimensional space, and
          <span className="text-white"> closeness = similarity</span>.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The recipe</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Get each movie&apos;s plot → generate an embedding vector for each → compute
            <span className="text-white"> cosine similarity</span> (small angular distance = very similar) between
            them. Highest similarity → recommend. This is <span className="text-white">semantic</span> recommendation
            instead of keyword matching.
          </p>
        </div>
      </div>

      {/* Three challenges */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.3 The Three Challenges</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Building this at scale (millions of movies) surfaces three problems — and vector stores solve all three:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            [
              "Generate embeddings",
              "Every movie plot must be turned into an embedding vector — potentially millions of them.",
            ],
            [
              "Storage",
              "Embeddings are generated once and reused. Relational DBs (MySQL, Oracle) can't compute similarity between them — you need a different kind of store.",
            ],
            [
              "Semantic search",
              "Finding the 5 closest of 10 lakh vectors by comparing one-by-one is O(n) — far too slow for a responsive app.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Four features */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.4 The Four Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">1. Storage</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Store vectors plus associated metadata (movie id, name...). Two modes:
              <span className="text-white"> in-memory</span> (RAM — fast, lost on close, good for prototypes) or
              <span className="text-white"> on-disk</span> (persistent, enterprise-scale).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">2. Similarity search</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Compare a query vector against all stored vectors and return the most similar ones.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">3. Indexing</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              A data structure that makes similarity search <span className="text-white">fast</span> on high-dimensional
              vectors — the most interesting feature (see below).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">4. CRUD operations</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Add, retrieve, update, and delete vectors — the same operations any database gives you.
            </p>
          </div>
        </div>
      </div>

      {/* Indexing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.5 Indexing — Making Search Fast</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Searching 10 lakh vectors linearly is O(n) — one comparison per vector, far too slow. Indexing avoids that.
          One simple technique uses <span className="text-white">clustering</span>:
        </p>
        <ol className="flex flex-col gap-2">
          {[
            "Cluster all 10 lakh vectors into, say, 10 clusters of ~1 lakh each.",
            "Compute the average of each cluster → one centroid vector per cluster (10 centroids).",
            "For a new query vector, compare it against only the 10 centroids to find the closest cluster.",
            "Search only inside that cluster (~1 lakh vectors) for the best match.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#22a06b]/20 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">10 lakh → ~1 lakh comparisons</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Instead of 10 lakh comparisons you do ~1 lakh + 10 — roughly the same best result, far faster. Real vector
            stores use smarter variants like <span className="text-white">Approximate Nearest Neighbor (ANN)</span>
            lookup. You don&apos;t implement these — the vector store does, so your searches stay fast.
          </p>
        </div>
      </div>

      {/* Store vs DB */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.6 Vector Store vs Vector Database</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          People use these terms interchangeably, but there&apos;s a clean distinction:
          <span className="text-white"> vector database = vector store + database-like features</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Vector store</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              A lightweight library/service focused on <span className="text-white">storage + similarity search</span>.
              No transactions, SQL, or role-based access. Ideal for prototyping and small scale. Example:
              <span className="text-white"> FAISS</span> (Facebook).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Vector database</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              A full system adding distributed architecture, backup/restore, ACID-ish guarantees, concurrency control,
              and authentication. For production and large data. Examples:
              <span className="text-white"> Milvus, Qdrant, Weaviate, Pinecone</span>.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The rule to remember: <span className="text-white">every vector database is a vector store, but not every
          vector store is a vector database.</span>
        </p>
      </div>

      {/* In LangChain */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.7 Vector Stores in LangChain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LangChain ships built-in wrappers for every major vector store — FAISS, Pinecone, Chroma, Qdrant, Weaviate,
          and more — all sharing the <span className="text-white">same method signatures</span>. Learn the interface
          once (<code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">from_documents</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> add_documents</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> similarity_search</code>) and you can
          swap FAISS for Pinecone with almost no code change.
        </p>
      </div>

      {/* Chroma hierarchy */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.8 Chroma — A Lightweight Vector DB</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white">Chroma</span> is an open-source vector database, friendly for local development
          and small-to-medium production. It sits <span className="text-white">between</span> a plain vector store and a
          full vector database — some DB features, but lightweight. Its data hierarchy:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`Tenant        (a user / org / team — top level)
  └─ Database
       └─ Collection      (≈ a table in an RDBMS)
            └─ Document    (embedding vector + metadata)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Chroma stores everything on disk as a <span className="text-white">SQLite</span> database — you could even open
          it in a SQL client.
        </p>
      </div>

      {/* Code: create */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.9 Creating a Store &amp; Adding Documents</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document

# 5 documents, one per cricketer; metadata holds the IPL team
docs = [
    Document(page_content="Virat Kohli is a consistent batsman...", metadata={"team": "Royal Challengers Bangalore"}),
    Document(page_content="MS Dhoni is a finisher and wicketkeeper...", metadata={"team": "Chennai Super Kings"}),
    # ... rohit, bumrah, jadeja
]

vector_store = Chroma(
    embedding_function=OpenAIEmbeddings(),  # how docs -> vectors
    persist_directory="my_chroma_db",       # on-disk location
    collection_name="sample",
)

# add documents (each gets an auto-generated unique id)
vector_store.add_documents(docs)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Inspecting the store</p>
          <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10 mt-1">
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`vector_store.get(include=["embeddings", "documents", "metadatas"])
# -> 5 ids, their embedding vectors, texts, and metadata`}</pre>
          </div>
        </div>
      </div>

      {/* Code: search */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.10 Similarity Search &amp; Filtering</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# semantic search: k = how many top results to return
vector_store.similarity_search(
    query="Who among these is a bowler?",
    k=2,
)
# -> Jasprit Bumrah, then Ravindra Jadeja (all-rounder)

# same, but also return a distance score (lower = more similar)
vector_store.similarity_search_with_score(query="Who among these is a bowler?", k=2)

# metadata filtering — no query, just filter by team
vector_store.get(where={"team": "Chennai Super Kings"})
# -> MS Dhoni and Ravindra Jadeja`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Score = distance</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">similarity_search_with_score</code>
            returns a distance, so <span className="text-white">lower is better</span> (closer, more similar). Metadata
            filtering is powerful for narrowing results before or instead of a semantic query.
          </p>
        </div>
      </div>

      {/* Code: update/delete */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.11 Updating &amp; Deleting</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# update: pass the existing document id + the new Document
updated = Document(
    page_content="Virat Kohli, former RCB captain, known for aggressive leadership...",
    metadata={"team": "Royal Challengers Bangalore"},
)
vector_store.update_document(document_id="<kohli-id>", document=updated)

# delete one or more documents by id
vector_store.delete(ids=["<kohli-id>"])
# -> store now has 4 documents`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Homework: re-implement this exact flow with another vector store like
          <span className="text-white"> FAISS</span> or <span className="text-white">Pinecone</span>. Because the
          interface is shared, the same set of functions works with almost no changes.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "A vector store stores and retrieves data as numerical (embedding) vectors — the third RAG component.",
            "Keyword matching gives poor recommendations; comparing meaning via embeddings + cosine similarity is far better.",
            "Building semantic search at scale raises three challenges: generating embeddings, storing them, and searching them fast — vector stores solve all three.",
            "Four core features: storage (in-memory or on-disk), similarity search, indexing (for speed), and CRUD.",
            "Indexing (e.g. clustering into centroids, or ANN) avoids O(n) linear search, keeping similarity search fast.",
            "Vector database = vector store + database features (distribution, backup, ACID, auth). Every vector DB is a vector store, not vice-versa.",
            "LangChain wraps every major store (FAISS, Chroma, Pinecone...) behind one shared interface — swap them with minimal code change.",
            "Chroma is a lightweight vector DB (SQLite on disk) with a Tenant → Database → Collection → Document hierarchy; use add_documents, similarity_search, similarity_search_with_score, metadata filtering, update_document, and delete.",
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
          We can load, split, embed, and store data. Just <span className="text-white">one component left</span> —
          retrievers — and then we build a complete <span className="text-white">RAG application</span> end to end.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
