import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass15() {
  return (
    <LangChainLessonLayout slug="class-15">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 15 — Building a RAG App</p>
        <h1 className="text-3xl font-bold text-white">Building a RAG App — YouTube Chat</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Theory done — now we build. We&apos;ll create <span className="text-white">YouTube Chat</span>: a RAG system
          that lets you chat with any YouTube video in real time. Ask &ldquo;is AI discussed here?&rdquo;, &ldquo;summarize
          this in five bullets&rdquo;, or clear a doubt from a lecture — and get an instant grounded answer. Everything
          from the last five classes (document loaders, text splitters, vector stores, retrievers, chains) comes together
          here.
        </p>
      </div>

      {/* Problem statement */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.1 The Problem &amp; the Plan</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Long videos (2–3 hour podcasts, lectures) are painful to search. YouTube Chat lets you ask questions and get
          answers grounded in the video&apos;s transcript. The final product could be a Chrome plugin or a Streamlit
          site, but since the focus is <span className="text-white">RAG functionality</span>, we build it in a notebook.
          The plan is exactly the four-step RAG architecture:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            ["1. Indexing", "Load the video transcript → split into chunks → embed → store in a vector store."],
            ["2. Retrieval", "Build a retriever, send it a query, get back the most relevant chunks."],
            ["3. Augmentation", "Merge query + retrieved context into a prompt."],
            ["4. Generation", "Send the prompt to an LLM to generate the answer. Finally, wire it all into one chain."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1a: ingestion */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.2 Indexing — Load the Transcript</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LangChain has a <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">YoutubeLoader</code>, but
          it can be buggy. We use the <span className="text-white">youtube-transcript-api</span> directly. Pass the
          video <span className="text-white">id</span> (not the full URL) and the language; it returns a list of
          time-stamped snippets, which we join into one big string.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled

video_id = "Gfr50f6ZBvo"   # ONLY the id, not the full URL

try:
    transcript_list = YouTubeTranscriptApi.get_transcript(video_id, languages=["en"])
    # each item: {"text": ..., "start": ..., "duration": ...}
    transcript = " ".join(chunk["text"] for chunk in transcript_list)
except TranscriptsDisabled:
    print("No captions available for this video")`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Language matters</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            If a video has no English captions you&apos;ll get an error — switch
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> languages=["hi"]</code> (or the right
            language). This completes <span className="text-white">step 1</span>: the transcript is now a string in
            memory.
          </p>
        </div>
      </div>

      {/* Step 1b: split */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.3 Indexing — Split, Embed &amp; Store</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A 2-hour transcript is huge, so we split it with
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RecursiveCharacterTextSplitter</code>,
          embed each chunk with OpenAI embeddings, and store them in a <span className="text-white">FAISS</span> vector
          store.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
chunks = splitter.create_documents([transcript])   # e.g. 168 chunks

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = FAISS.from_documents(chunks, embeddings)
# each chunk is now embedded and stored under a unique id`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          That completes indexing: the transcript is loaded, chunked, embedded, and stored — our
          <span className="text-white"> external knowledge base</span> is ready.
        </p>
      </div>

      {/* Step 2: retrieval */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.4 Retrieval</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Turn the vector store into a retriever with a simple similarity search returning the top 4 chunks. It takes a
          query and returns a list of relevant Document objects.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`retriever = vector_store.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 4},
)

retriever.invoke("What is DeepMind?")   # -> list of 4 Document objects`}</pre>
        </div>
      </div>

      {/* Step 3+4 manual */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.5 Augmentation &amp; Generation (Manual)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Build a prompt with two variables — <span className="text-white">context</span> and
          <span className="text-white"> question</span> — and instruct the LLM to answer only from the context (to avoid
          hallucination). The retriever returns a <span className="text-white">list</span> of documents, but the prompt
          needs a single string, so we concatenate their <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">page_content</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)

prompt = PromptTemplate(
    template="""You are a helpful assistant.
Answer ONLY from the provided transcript context.
If the context is insufficient, just say you don't know.

{context}
Question: {question}""",
    input_variables=["context", "question"],
)

question = "Is the topic of aliens discussed in this video? If yes, what was discussed?"
retrieved_docs = retriever.invoke(question)
context_text = "\\n\\n".join(doc.page_content for doc in retrieved_docs)

final_prompt = prompt.invoke({"context": context_text, "question": question})
answer = llm.invoke(final_prompt)
print(answer.content)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The problem with this</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            It works — but every step is invoked <span className="text-white">manually</span>: retriever, then prompt,
            then LLM. We want a single <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke()</code>
            that triggers the whole pipeline automatically, each step feeding the next.
          </p>
        </div>
      </div>

      {/* Chain structure */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.6 Wiring It Into a Chain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The prompt needs two inputs: <span className="text-white">question</span> (comes straight from the user) and
          <span className="text-white"> context</span> (must be retrieved). So the chain has a
          <span className="text-white"> parallel</span> part that produces both, feeding a simple
          <span className="text-white"> prompt → LLM → parser</span> part.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.runnables import RunnableParallel, RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import StrOutputParser

def format_docs(retrieved_docs):
    return "\\n\\n".join(doc.page_content for doc in retrieved_docs)

# parallel: build context (retrieve + format) AND pass the question through
parallel_chain = RunnableParallel({
    "context": retriever | RunnableLambda(format_docs),
    "question": RunnablePassthrough(),
})

parser = StrOutputParser()

# main chain: parallel -> prompt -> llm -> parser
main_chain = parallel_chain | prompt | llm | parser

main_chain.invoke("Can you summarize the video?")`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">How the parallel chain works</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableParallel</code> runs two branches:
            the <span className="text-white">context</span> branch pipes the question into the retriever then through
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> format_docs</code> (wrapped in a
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableLambda</code> so a plain
            function becomes chainable), and the <span className="text-white">question</span> branch uses
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnablePassthrough</code> to forward
            the query unchanged. The output is a dict <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">{`{context, question}`}</code>
            — exactly what the prompt needs. Now one <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke()</code>
            runs the whole RAG pipeline.
          </p>
        </div>
      </div>

      {/* Improvements */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.7 From Basic to Industry-Grade (Optional)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          What we built is a <span className="text-white">basic</span> RAG system. Industry systems add many layers.
          A flavor of what can be improved, by stage:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">UI &amp; evaluation</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Wrap it in a Streamlit site or Chrome plugin. Evaluate with <span className="text-white">Ragas</span>
              (faithfulness, answer relevancy, context precision/recall) and trace with
              <span className="text-white"> LangSmith</span>.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Indexing</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Fix auto-caption errors, translate non-English transcripts, use a
              <span className="text-white"> semantic chunker</span>, and swap FAISS for a cloud store like
              <span className="text-white"> Pinecone</span>.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Retrieval</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Pre-retrieval query rewriting, multi-query, domain-aware routing; MMR / hybrid (semantic + keyword)
              search and re-ranking; post-retrieval contextual compression.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Augmentation &amp; generation</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Prompt templating, answer grounding, context-window optimization; answer-with-citations, guardrails. And
              whole system types: <span className="text-white">multimodal</span>, <span className="text-white">agentic</span>,
              and <span className="text-white">memory-based</span> RAG.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          All of this belongs to a growing field called <span className="text-white">Advanced RAG</span> — a separate
          topic covered in its own dedicated series, not this playlist.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "YouTube Chat is a RAG app built on the four-step architecture: indexing, retrieval, augmentation, generation.",
            "Load transcripts with youtube-transcript-api using the video id (not URL) and the right language; join snippets into one string.",
            "Split with RecursiveCharacterTextSplitter (chunk_size 1000, overlap 200), embed with OpenAI embeddings, store in FAISS — that's indexing.",
            "Build a retriever via as_retriever(search_kwargs={'k': 4}); it takes a query and returns Document objects.",
            "The retriever returns a list, but the prompt needs a string — concatenate each document's page_content into the context.",
            "Manually invoking retriever → prompt → LLM works but is clunky; wire it into one chain instead.",
            "The chain needs a RunnableParallel producing {context, question}: context = retriever | RunnableLambda(format_docs), question = RunnablePassthrough; then parallel | prompt | llm | parser.",
            "This is basic RAG; industry-grade Advanced RAG adds evaluation, better indexing/retrieval, guardrails, and multimodal/agentic/memory variants.",
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
          You&apos;ve built a complete, working RAG application. Try it on a different video, or wrap it in a UI. The
          deeper techniques hinted at here — <span className="text-white">Advanced RAG</span> — are a story for their own
          series.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
