import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass3() {
  return (
    <LangChainLessonLayout slug="class-3">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 3 — In Code</p>
        <h1 className="text-3xl font-bold text-white">The Models Component — Language &amp; Embedding Models</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Time to write code. The <span className="text-white font-medium">Models</span> component is a common
          interface for talking to any AI model — both <span className="text-white font-medium">language
          models</span> (text in, text out) and <span className="text-white font-medium">embedding models</span>
          (text in, vector out). We&apos;ll work with closed-source providers (OpenAI, Anthropic, Google) and
          open-source models (via Hugging Face), then build a small document-similarity app.
        </p>
      </div>

      {/* Recap of model types */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.1 Two Kinds of Models</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Language Models</p>
            <p className="text-xs text-gray-400 leading-relaxed">Text in &rarr; text out. &ldquo;What is the capital of India?&rdquo; &rarr; &ldquo;New Delhi.&rdquo; Used to build chatbots, agents, and assistants.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Embedding Models</p>
            <p className="text-xs text-gray-400 leading-relaxed">Text in &rarr; vector out. The same text becomes a set of numbers capturing its meaning — the backbone of semantic search and RAG.</p>
          </div>
        </div>
      </div>

      {/* LLMs vs Chat models */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.2 LLMs vs Chat Models</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Language models come in two flavors. <span className="text-white font-medium">LLMs</span> are
          general-purpose (string in &rarr; string out). <span className="text-white font-medium">Chat
          models</span> are specialized for conversation (a sequence of messages in &rarr; a message out).
          LangChain is steadily <span className="text-white">deprecating LLMs</span> — for new projects you
          should use chat models.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">Aspect</th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">LLMs</th>
                <th className="text-left py-2 px-3 text-[#22a06b] font-semibold">Chat Models</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["Purpose", "Free-form text generation", "Multi-turn conversation"],
                ["Training", "General text (books, articles, Wikipedia)", "That, then fine-tuned on chat datasets"],
                ["Memory", "No conversation history", "Supports conversation history"],
                ["Role awareness", "None", "System/user/AI roles"],
                ["Examples", "gpt-3.5-turbo-instruct", "GPT-4, Claude, Gemini"],
              ].map(([a, l, c]) => (
                <tr key={a} className="border-b border-white/5">
                  <td className="py-2 px-3 font-medium text-white">{a}</td>
                  <td className="py-2 px-3">{l}</td>
                  <td className="py-2 px-3">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Setup */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.3 Project Setup</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Create a folder, a virtual environment, install the requirements, and store your API keys in a
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> .env</code> file (never hardcode
          them).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# create & activate a virtual environment
python -m venv venv
venv/Scripts/activate          # Windows

# install everything listed in requirements.txt
pip install -r requirements.txt`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">.env</code> file holds your
          secret keys. The names must match exactly — the loader looks them up by name.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# .env
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
GOOGLE_API_KEY="..."
HUGGINGFACEHUB_ACCESS_TOKEN="hf_..."`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Heads Up — Paid APIs</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            OpenAI, Anthropic, and Google APIs are paid — you&apos;ll need a small balance (≈ $5 on OpenAI is
            plenty). Most companies still use these in production, so it&apos;s worth practicing. If you&apos;d
            rather not pay, the open-source Hugging Face route later is free.
          </p>
        </div>
      </div>

      {/* LLM demo */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.4 An LLM (OpenAI)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The flow is always the same: import the integration, load the keys, build the model object, then
          call <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke()</code> — the most
          important method in LangChain (every core component has it).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import OpenAI
from dotenv import load_dotenv

load_dotenv()                       # loads OPENAI_API_KEY from .env

llm = OpenAI(model="gpt-3.5-turbo-instruct")
result = llm.invoke("What is the capital of India?")
print(result)                       # -> "New Delhi" (a plain string)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Notice: a string goes in, a string comes out. That&apos;s an LLM. The LangChain docs increasingly
          push you toward chat models instead — so let&apos;s switch.
        </p>
      </div>

      {/* Chat models */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.5 Chat Models — One Interface, Many Providers</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This is where LangChain shines. The code is nearly identical across providers — usually just the
          import and the model name change. Every <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">Chat*</code> class
          inherits from <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">BaseChatModel</code>,
          which is what keeps the interface consistent.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# OpenAI
from langchain_openai import ChatOpenAI
model = ChatOpenAI(model="gpt-4")

# Anthropic — change two lines
from langchain_anthropic import ChatAnthropic
model = ChatAnthropic(model="claude-3-5-sonnet-...")

# Google — change two lines
from langchain_google_genai import ChatGoogleGenerativeAI
model = ChatGoogleGenerativeAI(model="gemini-1.5-pro")

# ...and the call is the same everywhere:
result = model.invoke("What is the capital of India?")
print(result.content)               # the actual answer`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">LLM vs Chat Output</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            An LLM returns a plain string. A chat model returns a rich message object — the answer lives in
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> result.content</code>, alongside
            metadata like token counts. That&apos;s why we print <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">result.content</code>,
            not <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">result</code>.
          </p>
        </div>
      </div>

      {/* Parameters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.6 Two Key Parameters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">temperature</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Controls randomness/creativity (≈ 0&ndash;2). Low (0&ndash;0.3) = deterministic, great for math
              and code. High (1.5+) = creative, for stories, poems, brainstorming.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">max_completion_tokens</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Caps the output length (tokens ≈ words). Useful because paid models charge per token — limit
              the response to control cost.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`model = ChatOpenAI(
    model="gpt-4",
    temperature=1.5,            # more creative
    max_completion_tokens=100,  # cap the output
)`}</pre>
        </div>
      </div>

      {/* Open source models */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.7 Open-Source Models</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Closed-source models live on a company&apos;s servers behind a paid API — two downsides: cost, and
          zero control. Open-source models are downloadable, so you can run them free, fine-tune them, and
          keep your data private. The largest repository is <span className="text-white font-medium">Hugging
          Face</span>; popular models include Llama, Mistral, Falcon, and DeepSeek.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Advantages</p>
            <p className="text-xs text-gray-400 leading-relaxed">Free to run locally, full control to fine-tune/deploy, and data privacy — nothing leaves your machine.</p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">Disadvantages</p>
            <p className="text-xs text-gray-400 leading-relaxed">Need solid hardware (GPU), complex setup, often less refined output (less RLHF), and limited multimodal support.</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          You can use an open-source model two ways: through Hugging Face&apos;s <span className="text-white">Inference
          API</span> (model stays on their servers), or by <span className="text-white">downloading it
          locally</span>.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed font-medium">Via the Inference API (model TinyLlama):</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
from dotenv import load_dotenv
load_dotenv()

llm = HuggingFaceEndpoint(
    repo_id="TinyLlama/TinyLlama-1.1B-Chat-v1.0",
    task="text-generation",
)
model = ChatHuggingFace(llm=llm)
print(model.invoke("What is the capital of India?").content)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-medium">Running it locally (downloads the model to your machine):</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_huggingface import ChatHuggingFace, HuggingFacePipeline

llm = HuggingFacePipeline.from_model_id(
    model_id="TinyLlama/TinyLlama-1.1B-Chat-v1.0",
    task="text-generation",
    pipeline_kwargs={"temperature": 0.5, "max_new_tokens": 100},
)
model = ChatHuggingFace(llm=llm)
print(model.invoke("What is the capital of India?").content)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Reality Check</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Running models locally is heavy. Even a small 1.1B model can take minutes and freeze a low-spec
            machine (8GB RAM). The first run downloads the weights and tokenizer; later runs use the cache.
          </p>
        </div>
      </div>

      {/* Embedding models */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.8 Embedding Models</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Embedding models turn text into a vector that captures its meaning. With OpenAI you can pick the
          model <em>and</em> the vector size — a bigger vector captures more context but costs slightly more
          (≈ $0.13 per million tokens, very cheap). Use <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">embed_query</code> for
          one text, <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">embed_documents</code> for many.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv
load_dotenv()

embedding = OpenAIEmbeddings(model="text-embedding-3-large", dimensions=32)

# single text
vector = embedding.embed_query("Delhi is the capital of India")

# multiple documents at once
docs = ["Delhi is the capital of India",
        "Kolkata is the capital of West Bengal",
        "Paris is the capital of France"]
vectors = embedding.embed_documents(docs)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-medium">An open-source embedding model (sentence-transformers, runs locally):</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_huggingface import HuggingFaceEmbeddings

embedding = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2",
)
vector = embedding.embed_query("Delhi is the capital of India")  # 384-dim`}</pre>
        </div>
      </div>

      {/* Document similarity app */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.9 Mini App — Document Similarity Search</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Putting embeddings to work: given a set of documents and a user query, find the most relevant one.
          Embed everything, then compare the query vector to each document vector with
          <span className="text-white font-medium"> cosine similarity</span> — the highest score wins. This is
          exactly the retrieval step inside a RAG app.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import OpenAIEmbeddings
from sklearn.metrics.pairwise import cosine_similarity
from dotenv import load_dotenv
load_dotenv()

embedding = OpenAIEmbeddings(model="text-embedding-3-large", dimensions=300)

documents = [
    "Virat Kohli is an Indian cricketer known for his aggressive approach.",
    "Jasprit Bumrah is an Indian fast bowler known for his yorkers.",
    # ...more documents
]
query = "tell me about Virat Kohli"

doc_embeddings = embedding.embed_documents(documents)
query_embedding = embedding.embed_query(query)

# similarity of the query against every document
scores = cosine_similarity([query_embedding], doc_embeddings)[0]

# pick the highest-scoring document
index, score = sorted(enumerate(scores), key=lambda x: x[1])[-1]
print(query)
print(documents[index])
print("similarity score:", score)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The Takeaway</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            We re-generate document embeddings on every run, which is wasteful and costly. In a real app you
            embed the documents <span className="text-white">once</span> and store them in a
            <span className="text-white"> vector database</span>, then only embed the incoming query on the fly
            — that&apos;s the <span className="text-white">retrieval</span> step we&apos;ll build later.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "The Models component is one consistent interface for language models and embedding models.",
            "Language models split into LLMs (string → string) and chat models (messages → message); prefer chat models.",
            "invoke() is the universal call; for chat models, the answer is in result.content.",
            "Swapping providers (OpenAI ↔ Anthropic ↔ Google) usually means changing only the import and model name.",
            "temperature controls creativity; max_completion_tokens caps length (and cost).",
            "Open-source models (via Hugging Face) trade refinement and hardware ease for cost savings, control, and privacy.",
            "You can use Hugging Face models through the Inference API or by downloading them locally.",
            "Embedding models power semantic search: embed_query for one text, embed_documents for many, then compare with cosine similarity.",
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
