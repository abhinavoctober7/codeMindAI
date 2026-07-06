import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass1() {
  return (
    <LangChainLessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 1 — Introduction</p>
        <h1 className="text-3xl font-bold text-white">What Is LangChain &amp; Why It Exists</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before learning <span className="text-white font-medium">what</span> LangChain is, it helps to
          understand <span className="text-white font-medium">why</span> it was needed in the first place.
          So we&apos;ll take the long road: build a real LLM-powered app in our heads, hit every wall along
          the way, and discover that the last wall is exactly the one LangChain was built to knock down. By
          the end you&apos;ll have a deep, intuitive picture of where this framework fits.
        </p>
      </div>

      {/* 1.1 What is LangChain */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 What Is LangChain?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          In a single sentence:
        </p>
        <div className="bg-[#22a06b]/10 border border-[#22a06b]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#22a06b] uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-medium">LangChain is an open-source framework for developing
            applications powered by LLMs.</span> If you want to build any LLM-based application, LangChain is
            the framework that helps you build it.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          That one line won&apos;t convince you of its importance, though. To really feel why LangChain
          matters, we need a concrete problem.
        </p>
      </div>

      {/* 1.2 The motivating example */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 The Motivating Example: Chat With Your PDF</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Imagine an application where anyone can <span className="text-white font-medium">upload a
          PDF</span> and then not just read it, but <span className="text-white font-medium">talk to
          it</span>. Say you upload a machine-learning textbook. Through a chat box you could ask:
        </p>
        <div className="flex flex-col gap-2">
          {[
            "Explain page 5 like I'm a 5-year-old.",
            "Generate some true/false questions on linear regression so I can practice.",
            "Make revision notes on the decision-trees chapter.",
          ].map((q) => (
            <div key={q} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 italic">
              &ldquo;{q}&rdquo;
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Incredibly useful — you aren&apos;t only reading the book, you&apos;re having a conversation with
          it. Now let&apos;s design how such a system would actually work.
        </p>
      </div>

      {/* 1.3 High-level design */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.3 The High-Level Flow</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When a user uploads a PDF, we store it in a database. When they ask a question — say
          <span className="text-white font-medium"> &ldquo;What are the assumptions of linear
          regression?&rdquo;</span> — we don&apos;t hand the whole book to the model. Instead we
          <span className="text-white font-medium"> search</span> the book to find only the pages that
          discuss this topic, then send those pages plus the question to a component we&apos;ll call the
          <span className="text-white font-medium"> brain</span>.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { step: "Upload & store", detail: "The user's PDF is stored (e.g. on cloud storage like AWS S3)." },
            { step: "User asks a query", detail: "A natural-language question about the document." },
            { step: "Search the document", detail: "Find the few pages most relevant to the question." },
            { step: "Build a system query", detail: "Combine the original question with those relevant pages." },
            { step: "Send to the brain", detail: "The brain reads the pages, understands the question, and generates the answer." },
          ].map(({ step, detail }, i) => (
            <div key={step} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#22a06b]/15 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{step}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Why not send the whole book?</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Think of asking a teacher for help. &ldquo;Sir, I have a doubt — here&apos;s the whole
            book&rdquo; gets a slower, worse answer than &ldquo;Sir, I have a doubt on page 155.&rdquo;
            Handing the brain only the relevant pages is cheaper to compute and produces sharper answers.
          </p>
        </div>
      </div>

      {/* 1.4 Keyword vs semantic search */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.4 Keyword Search vs Semantic Search</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          How do we find the relevant pages? There are two kinds of search:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">Keyword Search</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Match the literal words — &ldquo;assumptions&rdquo;, &ldquo;linear regression&rdquo; — wherever
              they appear. The word &ldquo;assumptions&rdquo; alone shows up everywhere, so you drown in
              irrelevant pages. Inefficient.
            </p>
          </div>
          <div className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Semantic Search</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Match the <span className="text-white">meaning</span> of the query. Search for
              &ldquo;assumptions of linear regression&rdquo; as a concept, and get back fewer but far more
              meaningful pages.
            </p>
          </div>
        </div>
      </div>

      {/* 1.5 How semantic search works */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 How Semantic Search Works</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Suppose you have three paragraphs about three cricketers — Virat Kohli, Jasprit Bumrah, Rohit
          Sharma — and the question <span className="text-white font-medium">&ldquo;How many runs has Virat
          scored?&rdquo;</span> The answer is hidden in one paragraph, but how does code know which?
        </p>
        <div className="flex flex-col gap-2">
          {[
            { step: "Embed everything", detail: "Convert each paragraph into an embedding — a vector, i.e. a set of numbers (say 100 dimensions) that represents its meaning. Techniques: Word2Vec, Doc2Vec, BERT embeddings, and more." },
            { step: "Embed the query", detail: "Convert the question into a vector in the same space." },
            { step: "Compare similarity", detail: "Measure the similarity (distance) between the query vector and each paragraph vector." },
            { step: "Pick the closest", detail: "The vector with the strongest similarity points to the paragraph that answers the question." },
          ].map(({ step, detail }, i) => (
            <div key={step} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#22a06b]/15 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
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
          This is exactly what we&apos;ll run over the pages of our PDF.
        </p>
      </div>

      {/* 1.6 Low-level pipeline */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.6 The Full Pipeline, Low-Level</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Putting it together, here is the detailed design of the whole system:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { c: "Document loader", d: "Pull the uploaded PDF from cloud storage into the system." },
            { c: "Text splitter", d: "Break the document into small chunks — by chapter, page, or paragraph. A 1000-page PDF split by page becomes 1000 chunks." },
            { c: "Embedding model", d: "Generate an embedding (vector) for each chunk." },
            { c: "Vector database", d: "Store all the embeddings so we can query them later." },
            { c: "Retriever", d: "Embed the user's query, compare it against stored vectors, and return the top-k closest chunks (and their pages)." },
            { c: "LLM", d: "Receive the original query plus the retrieved pages, then read and generate the final answer." },
          ].map(({ c, d }, i) => (
            <div key={c} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#22a06b]/15 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
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

      {/* 1.7 The three challenges */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.7 The Three Big Challenges</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Building this system raises three serious challenges. The good news: by 2025, the first two are
          already solved — and the third is where LangChain enters.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
          <p className="text-sm font-bold text-white">Challenge 1 — Building the brain</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The brain needs two abilities: <span className="text-white">Natural Language Understanding</span>
            (truly understand the query) and <span className="text-white">context-aware text
            generation</span> (read the pages and produce a relevant answer). Historically very hard — until
            the 2017 Transformers paper, then BERT and GPT, kicked off the LLM era.
            <span className="text-[#22a06b] font-medium"> Solution: just use an LLM.</span>
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
          <p className="text-sm font-bold text-white">Challenge 2 — Computation</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            LLMs are huge models. Hosting one on your own servers means heavy engineering and enormous cost.
            But companies like OpenAI and Anthropic host their models and wrap them in an
            <span className="text-white"> API</span>. You simply call the API and pay only for what you use.
            <span className="text-[#22a06b] font-medium"> Solution: use an LLM API, not a self-hosted LLM.</span>
          </p>
        </div>

        <div className="bg-[#22a06b]/10 border border-[#22a06b]/30 rounded-xl p-4 flex flex-col gap-1.5">
          <p className="text-sm font-bold text-[#22a06b]">Challenge 3 — Orchestration</p>
          <p className="text-xs text-gray-300 leading-relaxed">
            Five-plus components (storage, splitter, embedding model, vector DB, LLM) and six-plus tasks
            (load, split, embed, store, retrieve, talk to the LLM) must work together as one pipeline.
            Coding all of that by hand — and rewiring it every time you swap OpenAI for Google, or change
            your embedding model — is extremely difficult.
            <span className="text-white font-medium"> This is where LangChain comes in.</span>
          </p>
        </div>
      </div>

      {/* 1.8 Where LangChain fits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.8 Where LangChain Fits</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LangChain gives you <span className="text-white font-medium">built-in, plug-and-play</span>
          functionality to make all these components talk to each other — without writing mountains of
          boilerplate. Swap OpenAI for Google&apos;s model in a line or two; behind the scenes LangChain
          handles the interfacing. In short: the LLM does the heavy lifting, but running the whole app
          <em> with all its moving parts</em> is the hard part — and LangChain lets you focus on your idea
          instead of the plumbing.
        </p>
      </div>

      {/* 1.9 Benefits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.9 The Benefits of LangChain</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { t: "Chains", d: "Compose components and tasks into a pipeline where one component's output automatically becomes the next one's input. Build sequential, parallel, and conditional chains — this is what gives LangChain its name." },
            { t: "Model-agnostic development", d: "Use any model — OpenAI, Google, open-source. Switch providers with a couple of lines and your whole codebase shifts over. Focus on business logic, not vendors." },
            { t: "Complete ecosystem", d: "Every component has many ready-made options: document loaders for any source, 50+ text splitters, lots of embedding models, and many vector databases. Whatever your stack, there's an interface." },
            { t: "Memory & state handling", d: "Conversation memory lets a follow-up like 'give me interview questions on this algorithm' know that 'this' meant linear regression from the previous turn." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.10 What you can build */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.10 What You Can Build</h2>
        <div className="flex flex-col gap-2">
          {[
            { t: "Conversational chatbots", d: "The most popular use case — handle the first layer of customer support at scale, then hand off to a human when needed." },
            { t: "AI knowledge assistants", d: "A chatbot that also has access to your data — e.g. a course site bot that answers doubts about the exact lecture being watched." },
            { t: "AI agents", d: "Chatbots on steroids — they don't just talk, they act. Tell an agent to book the cheapest flight between two dates and it executes the whole task with tools." },
            { t: "Workflow automation", d: "Automate workflows at personal, professional, or company level." },
            { t: "Summarization & research helpers", d: "Process very large or private documents your company can't upload to a public chatbot, and answer questions over them." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.11 Alternatives */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.11 Alternatives to LangChain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LangChain isn&apos;t the only framework for building LLM apps. Two other popular ones are worth
          knowing:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "LlamaIndex", note: "A popular framework, especially strong for data-centric / retrieval workloads." },
            { name: "Haystack", note: "A similar library/framework for building LLM-based applications." },
          ].map(({ name, note }) => (
            <div key={name} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{name}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Which one you pick depends on pricing and fit. For now, just know the alternatives exist — we&apos;ll
          study LangChain itself first.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "LangChain is an open-source framework for developing applications powered by LLMs.",
            "A 'chat with your PDF' app shows the need: load, split, embed, store, retrieve, then ask the LLM.",
            "Don't feed the whole document to the model — use semantic search to retrieve only the relevant pages.",
            "Semantic search works by embedding text into vectors and comparing similarity (this is the heart of RAG).",
            "Of the three challenges — the brain, computation, orchestration — LLMs and LLM APIs solve the first two.",
            "Orchestrating many components into one pipeline is the hard part, and that's exactly what LangChain handles.",
            "Its key benefits: chains, model-agnostic development, a complete ecosystem, and memory/state handling.",
            "Alternatives include LlamaIndex and Haystack.",
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
    </LangChainLessonLayout>
  );
}
