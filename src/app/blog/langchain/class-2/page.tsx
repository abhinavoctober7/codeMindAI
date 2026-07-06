import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass2() {
  return (
    <LangChainLessonLayout slug="class-2">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 2 — The Big Picture</p>
        <h1 className="text-3xl font-bold text-white">The Six Core Components of LangChain</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before writing any code, it pays to see how LangChain is organized — the way its creators thought
          about the library. Almost everything in LangChain reduces to <span className="text-white font-medium">six
          components</span>. Learn these and you&apos;ve grasped the majority of the framework. This class is
          your roadmap: every future lesson drills into one of these six.
        </p>
      </div>

      {/* Recap */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Quick Recap</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          In Class 1 we saw that LangChain is an open-source framework for building LLM-powered apps. Its
          biggest advantage is <span className="text-white">orchestration</span> — wiring many components
          into a pipeline with minimal code, where one component&apos;s output flows into the next. It&apos;s
          also <span className="text-white">model-agnostic</span>: switching providers takes a line or two.
        </p>
      </div>

      {/* The six components */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">The Six Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { n: "1", t: "Models", d: "A standardized interface to talk to any AI model." },
            { n: "2", t: "Prompts", d: "Flexible, dynamic, reusable inputs you send to an LLM." },
            { n: "3", t: "Chains", d: "Build pipelines where stages connect automatically." },
            { n: "4", t: "Indexes", d: "Connect your app to external knowledge sources." },
            { n: "5", t: "Memory", d: "Give stateless LLM calls a conversation history." },
            { n: "6", t: "Agents", d: "Chatbots with reasoning and access to tools." },
          ].map(({ n, t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#22a06b]/15 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                {n}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{t}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1. Models */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1. Models — The Most Important Component</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          In LangChain, <span className="text-white font-medium">models are the core interface through which
          you interact with AI models</span>. To see why this matters, follow the history. The most popular
          NLP application everyone wanted to build was the <span className="text-white">chatbot</span>, and it
          had two hard problems:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">NLU</p>
            <p className="text-xs text-gray-400 leading-relaxed">Natural Language Understanding — making the bot actually understand &ldquo;Hi, can you check my email?&rdquo;</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">Context-Aware Generation</p>
            <p className="text-xs text-gray-400 leading-relaxed">Even if it understands you, generating a sensible reply is its own challenge.</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white font-medium">LLMs solved both at once</span> — trained on almost the
          whole internet, they gained language understanding and context-aware generation together. But that
          created new problems, and a chain of solutions:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { p: "Problem: huge size", s: "Good LLMs are 100GB+ with billions of parameters — no normal person or small company can host them.", solved: false },
            { p: "Solution: APIs", s: "Companies like OpenAI and Anthropic host the models and expose APIs. You hit the API, pay only for usage.", solved: true },
            { p: "Problem: no standard", s: "Every provider's API is different — OpenAI, Claude, and Gemini all need different code and return different shapes.", solved: false },
            { p: "Solution: LangChain Models", s: "A single standardized interface, so switching providers means changing only a line or two of code.", solved: true },
          ].map(({ p, s, solved }) => (
            <div key={p} className={`rounded-xl px-4 py-3 flex flex-col gap-1 border ${solved ? "bg-[#22a06b]/10 border-[#22a06b]/30" : "bg-red-950/20 border-red-500/20"}`}>
              <p className={`text-sm font-semibold ${solved ? "text-[#22a06b]" : "text-red-400"}`}>{p}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          That&apos;s the whole idea: the Models component standardizes how you talk to any LLM. LangChain
          supports two kinds of models:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Language Models</p>
            <p className="text-xs text-gray-400 leading-relaxed">Text in &rarr; text out. &ldquo;How are you today?&rdquo; &rarr; &ldquo;I&apos;m good, how about you?&rdquo; Used for chatbots, agents, and more.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Embedding Models</p>
            <p className="text-xs text-gray-400 leading-relaxed">Text in &rarr; vector out. The backbone of semantic search (from Class 1).</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">In the Docs</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The LangChain docs list every provider you can connect to — ChatAnthropic, ChatOpenAI,
            ChatMistralAI, ChatVertexAI, ChatBedrock, ChatHuggingFace, and many more — along with which
            features (tool calling, structured/JSON output, local execution, multimodal input) each supports.
          </p>
        </div>
      </div>

      {/* 2. Prompts */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2. Prompts</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white font-medium">prompt is the input you provide to an LLM</span>. Prompts
          are extremely important — and extremely sensitive. Change one word — &ldquo;explain linear
          regression in an <em>academic</em> tone&rdquo; vs &ldquo;in a <em>fun</em> tone&rdquo; — and the
          output shifts dramatically. This sensitivity is why a whole field, <span className="text-white">prompt
          engineering</span>, exists. LangChain gives you a flexible component to craft powerful prompts:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "Dynamic & reusable prompts", d: "Use placeholders — \"Summarize {topic} in a {tone} tone\" — and fill them at runtime. One template serves cricket-in-fun-tone, biology-in-serious-tone, and more." },
            { t: "Role-based prompts", d: "A system message (\"You are an experienced {profession}\") plus a user message (\"Tell me about {topic}\") guides the LLM to answer in a specific role." },
            { t: "Few-shot prompts", d: "Show the model a few labeled examples first (e.g. support tickets tagged Billing / Technical / General), then ask it to classify a new query in the same format." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Chains */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3. Chains</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Chains are so central that the library is named after them. A chain lets you build a
          <span className="text-white font-medium"> pipeline</span> — and its key beauty is that
          <span className="text-white font-medium"> one stage&apos;s output automatically becomes the next
          stage&apos;s input</span>, with no manual wiring. Example: take a 1000-word English text &rarr;
          LLM 1 translates it to Hindi &rarr; LLM 2 summarizes it in under 100 Hindi words. Wrap it in a
          chain, pass the input once, and the whole flow runs behind the scenes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { t: "Sequential", d: "One stage after another, output feeding forward." },
            { t: "Parallel", d: "Send the same input to multiple LLMs at once, then combine their outputs." },
            { t: "Conditional", d: "Branch the processing based on a condition — e.g. good feedback &rarr; say thanks; bad feedback &rarr; email support." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#22a06b]">{t} Chain</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Indexes */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4. Indexes</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Indexes <span className="text-white font-medium">connect your application to external
          knowledge</span> — PDFs, websites, databases. Why needed? ChatGPT can&apos;t answer &ldquo;What is
          the leave policy of my company XYZ?&rdquo; — that private data was never in its training. Connect an
          LLM to an external knowledge source and it can. Indexes are made of four parts:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { c: "Document loader", d: "Pull data in from wherever it lives — e.g. load the company rulebook PDF from Google Drive." },
            { c: "Text splitter", d: "Break the document into small chunks (by page, paragraph, or chapter) so semantic search can work." },
            { c: "Vector store", d: "Embed each chunk and store the vectors in a special vector database for later querying." },
            { c: "Retrievers", d: "Embed the user's query, run semantic search over the vector store, and fetch the most relevant chunks to hand to the LLM." },
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

      {/* 5. Memory */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5. Memory</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white font-medium">LLM API calls are stateless</span> — each request is
          independent, with no memory of the last one. Ask &ldquo;Who is Narendra Modi?&rdquo;, get an answer,
          then ask &ldquo;How old is he?&rdquo; — and the model has no idea who &ldquo;he&rdquo; is. For a
          chatbot, that&apos;s a dealbreaker. The Memory component fixes it. Common types:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { t: "Conversation Buffer Memory", d: "Store the full chat so far and send it with every call. Simple, but a long chat means more text and more cost." },
            { t: "Conversation Buffer Window Memory", d: "Keep only the last N interactions (e.g. last 100 messages), updated continuously." },
            { t: "Summarizer-Based Memory", d: "Send a running summary of the chat history instead of the raw text — saves tokens and money." },
            { t: "Custom Memory", d: "Store specialized facts for advanced use cases — user preferences, key figures — always available in context." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Agents */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6. Agents</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An <span className="text-white font-medium">AI agent is a chatbot with superpowers</span> — it
          doesn&apos;t just talk, it acts. A travel chatbot can <em>tell</em> you the cheapest Delhi&ndash;Shimla
          flight; an agent can also <em>book</em> it. Two things separate an agent from a chatbot:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Reasoning Capability</p>
            <p className="text-xs text-gray-400 leading-relaxed">It can break a query into steps and figure out what to do — often via techniques like Chain-of-Thought.</p>
          </div>
          <div className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Access to Tools</p>
            <p className="text-xs text-gray-400 leading-relaxed">It can call tools — a calculator, a weather API, a booking API — to actually get things done.</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Worked Example</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Query: <span className="italic">&ldquo;Multiply today&apos;s temperature of Delhi by 3.&rdquo;</span>
            An agent with a weather API and a calculator reasons step by step:
          </p>
          <ol className="flex flex-col gap-1.5 mt-1">
            {[
              "Break it down: I need Delhi's temperature, then multiply by 3.",
              "Check tools — a weather API exists. Call it with \"Delhi\" → 25°C.",
              "To multiply, I need the calculator. Call it with (25, 3, ×) → 75.",
              "Return 75 as the final answer.",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-[#22a06b]/20 text-[#22a06b] text-[10px] flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "LangChain is organized around six core components: Models, Prompts, Chains, Indexes, Memory, and Agents.",
            "Models are a standardized interface to any AI provider — solving the chaos of different, incompatible LLM APIs.",
            "There are two model types: language models (text → text) and embedding models (text → vector).",
            "Prompts are the (very sensitive) inputs to an LLM; LangChain supports dynamic, role-based, and few-shot prompts.",
            "Chains build pipelines where one stage's output automatically feeds the next — sequential, parallel, or conditional.",
            "Indexes connect your app to external knowledge via document loaders, text splitters, vector stores, and retrievers.",
            "Memory adds conversation history on top of stateless LLM calls (buffer, window, summarizer, and custom).",
            "Agents = chatbots with reasoning + tool access, letting them take real actions, not just talk.",
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
