import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass14() {
  return (
    <LangChainLessonLayout slug="class-14">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 14 — RAG</p>
        <h1 className="text-3xl font-bold text-white">RAG — Retrieval Augmented Generation</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Now that we know all four RAG components — document loaders, text splitters, vector stores, and retrievers —
          we can finally understand <span className="text-white">RAG</span> itself. This is the conceptual class: why RAG
          exists (via a historical journey through fine-tuning and in-context learning), what it is, and exactly how a
          RAG pipeline works in four steps. Next class we build one from scratch in LangChain.
        </p>
      </div>

      {/* Parametric knowledge */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.1 Parametric Knowledge &amp; Its Limits</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An LLM is a giant transformer-based neural network with billions of parameters (weights &amp; biases),
          <span className="text-white"> pre-trained</span> on internet-scale data. All the knowledge it absorbs is stored
          inside those parameters — hence <span className="text-white">parametric knowledge</span>. You access it by
          <span className="text-white"> prompting</span>: send a query, the LLM reads it and generates an answer word by
          word from its parametric knowledge. This works most of the time — but fails in three situations:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            ["Private data", "The model never saw your private/company data during pre-training, so it can't answer questions about it."],
            ["Recent data", "Every LLM has a knowledge cut-off date; ask about today's news and an offline model can't answer."],
            ["Hallucination", "The model confidently states factually incorrect, made-up information — because generation is probabilistic."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fine-tuning */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.2 Attempt 1: Fine-Tuning</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Fine-tuning takes a pre-trained LLM and <span className="text-white">re-trains it</span> on a smaller,
          domain-specific dataset — like a fresh engineering graduate who does 2–3 months of company training before
          starting real work. The pre-training is the degree; fine-tuning is the on-the-job training.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Flavors of fine-tuning</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white">Supervised fine-tuning</span> (train on labeled prompt → desired-output pairs,
            usually 1k–1M of them), <span className="text-white">continued pre-training</span> (unsupervised, feed raw
            domain text), and <span className="text-white">RLHF</span> (reinforcement learning from human feedback).
            Techniques like <span className="text-white">LoRA / QLoRA</span> make it parameter-efficient. It solves all
            three problems <span className="text-white">to some degree</span> — private data becomes parametric, you
            can add examples that reduce hallucination, etc.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">But fine-tuning has 3 problems</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            (1) <span className="text-white">Computationally expensive</span> — you're training a huge model.
            (2) <span className="text-white">Needs strong technical expertise</span> (AI engineers, data scientists).
            (3) <span className="text-white">Bad for fast-changing data</span> — every time your knowledge updates, you
            must re-fine-tune and pay again. So it's not ideal where information changes frequently.
          </p>
        </div>
      </div>

      {/* In-context learning */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.3 Attempt 2: In-Context Learning</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Large models like GPT-3, Claude, and Llama can learn to solve a task <span className="text-white">purely from
          examples placed in the prompt</span> — without updating any weights. Show a few labeled examples (few-shot
          prompting) and the model infers the pattern and applies it to a new input.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Below are examples of text labeled with sentiment.

"I love this phone. It's so smooth."   -> Positive
"This app crashes a lot."               -> Negative
"The camera is amazing."                -> Positive
"I hate the battery life"               -> ?     # model answers: Negative`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">An emergent property</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            In-context learning is an <span className="text-white">emergent property</span> — it wasn't explicitly
            programmed; it appeared once models reached a certain scale. GPT-1/GPT-2 didn't reliably show it; GPT-3
            (~175B params) did. The landmark paper <span className="text-white">&ldquo;Language Models are Few-Shot
            Learners&rdquo;</span> first described it: humans learn a new task from a few examples, and at scale, so can
            LLMs. Later alignment (SFT, RLHF) made GPT-3.5/4 even better at it.
          </p>
        </div>
      </div>

      {/* From ICL to RAG */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.4 The Leap: From Examples to Context = RAG</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Few-shot prompting injects <span className="text-white">examples</span> of how to solve a task. But what if,
          instead of examples, we inject the <span className="text-white">context</span> needed to answer the specific
          question? Imagine a 2-hour lecture on linear regression and a student with a doubt about gradient descent. We
          send the LLM two things: the student&apos;s question <span className="text-white">and</span> the transcript of
          just the gradient-descent portion (minutes 5–25). That transcript acts as context the model uses to answer.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white">RAG (Retrieval Augmented Generation)</span> makes a language model smarter by
            giving it extra information at the time you ask your question. You build the prompt from
            <span className="text-white"> query + retrieved context</span>; the LLM combines that context with its own
            parametric knowledge to answer.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`You are a helpful assistant.
Answer the question ONLY from the provided context.
If the context is insufficient, just say you don't know.

Context:
{retrieved_transcript_chunks}

Question:
{user_question}`}</pre>
        </div>
      </div>

      {/* Four steps overview */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.5 How RAG Works — Four Steps</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          RAG is the marriage of two ideas: <span className="text-white">information retrieval</span> (an old computer
          science field) and <span className="text-white">text generation</span> (popularized by LLMs). Broadly, every
          RAG system has four steps:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            ["1. Indexing", "Build the external knowledge base so it can be searched efficiently at query time."],
            ["2. Retrieval", "Find the chunks in that knowledge base most relevant to the user's query."],
            ["3. Augmentation", "Combine the query + retrieved context into a single prompt."],
            ["4. Generation", "The LLM reads the prompt and generates a grounded response."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Indexing detail */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.6 Step 1 — Indexing (Four Sub-Steps)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Indexing prepares your knowledge base so it can be searched at query time. It maps exactly onto the four
          components from the previous classes:
        </p>
        <ol className="flex flex-col gap-2">
          {[
            "Document ingestion — load source knowledge into memory using document loaders (PyPDFLoader, WebBaseLoader, etc.). Result: your document as a string.",
            "Text chunking — split the big document into small, semantically meaningful chunks (RecursiveCharacterTextSplitter). Needed because of the LLM's context limit and because semantic search works better on small chunks.",
            "Embedding generation — convert each chunk into a dense vector that captures its meaning (OpenAIEmbeddings, sentence-transformers).",
            "Storage — save the vectors + original chunk text + metadata in a vector store (FAISS, Chroma, Pinecone, Weaviate, Milvus, Qdrant). This becomes your external knowledge base.",
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

      {/* Retrieval detail */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.7 Step 2 — Retrieval</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A real-time process: given the user&apos;s question, find the 3–5 chunks from the pre-built index most helpful
          to answer it. The retriever does this in stages:
        </p>
        <ol className="flex flex-col gap-2">
          {[
            "Embed the query — using the exact same embedding model used for the chunks, so dimensions match.",
            "Semantic search — find the vectors closest to the query vector (plain similarity, or advanced strategies like MMR / contextual compression).",
            "Rank — order the closest results (cosine similarity, or an advanced re-ranking algorithm).",
            "Fetch — return the text chunks of the top results — this is your context.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#22a06b]/20 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
        <p className="text-gray-400 text-sm leading-relaxed">
          Example: for a gradient-descent question, don&apos;t send the whole 2-hour transcript — retrieve only the
          chunks that discuss gradient descent and use those as context.
        </p>
      </div>

      {/* Augmentation + Generation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.8 Steps 3 &amp; 4 — Augmentation &amp; Generation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Augmentation</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Build a prompt from the query + retrieved context. You&apos;re adding extra knowledge on top of the
              LLM&apos;s parametric knowledge, and instructing it to answer only from the context (say &ldquo;I
              don&apos;t know&rdquo; if insufficient).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Generation</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Send that prompt to the LLM. It uses its text-generation ability and in-context learning to read the
              context and generate a grounded response.
            </p>
          </div>
        </div>
      </div>

      {/* How RAG solves the 3 problems */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">14.9 How RAG Solves the Three Problems</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            ["Private data", "The external knowledge base is built from your own data, so context and answers come straight from it."],
            ["Recent data", "Just add recent articles/news to the knowledge base — no re-training. Much cheaper than re-fine-tuning."],
            ["Hallucination", "Answers are grounded against the provided context, with an explicit 'say I don't know' instruction — cutting hallucination sharply."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Versus fine-tuning, RAG is <span className="text-white">cheaper and simpler</span>: no model training, no
          labeled dataset — just load your documents into a vector store. To update knowledge, add new documents; no
          retraining required.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "LLMs store knowledge in their parameters (parametric knowledge), accessed via prompting — but this fails for private data, recent data, and hallucination.",
            "Fine-tuning re-trains the model on domain data and solves the three problems to a degree, but is computationally expensive, needs expertise, and is bad for frequently-changing data.",
            "In-context learning lets large models learn a task from examples in the prompt without updating weights — an emergent property that appeared at GPT-3 scale.",
            "RAG extends in-context learning: instead of examples, inject the context needed to answer the question (query + retrieved context).",
            "RAG has four steps: indexing, retrieval, augmentation, generation.",
            "Indexing = document ingestion → chunking → embedding → storage in a vector store (the external knowledge base).",
            "Retrieval = embed the query → semantic search → rank → fetch the top chunks as context.",
            "RAG solves all three problems and is a cheaper, simpler alternative to fine-tuning — update knowledge by adding documents, no retraining.",
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
          Theory done. Next class we write code from scratch and build a complete
          <span className="text-white"> RAG application</span> in LangChain — putting all four components and all four
          steps together.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
