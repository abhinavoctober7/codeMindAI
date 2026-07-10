import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass8() {
  return (
    <RagLessonLayout slug="class-8">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 8 — Advanced Splitters</p>
        <h1 className="text-3xl font-bold text-white">Advanced Text Splitter Techniques</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Length-based splitting doesn&apos;t understand the text. This class covers three smarter families:
          <span className="text-white font-medium"> document-structure</span> splitters (code, JSON, Markdown),
          <span className="text-white font-medium"> semantic</span> chunking that cuts on meaning, and
          <span className="text-white font-medium"> LLM-based</span> chunking where the model decides the boundaries.
        </p>
      </div>

      {/* 8.1 Code splitting */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.1 Document-Structure — Code</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Splitting code on blank lines can cut a function in half. The recursive splitter&apos;s
          <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs"> from_language</code> factory loads a
          separator list tuned for a language — so it prefers to break at <span className="text-white">class and
          function boundaries</span> instead.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_text_splitters import RecursiveCharacterTextSplitter, Language

python_splitter = RecursiveCharacterTextSplitter.from_language(
    language=Language.PYTHON,
    chunk_size=700,
    chunk_overlap=100
)

code_chunks = python_splitter.split_text(python_code)

# inspect the language-aware separators
python_splitter.get_separators_for_language(Language.PYTHON)
python_splitter.get_separators_for_language(Language.MARKDOWN)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Many languages</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#8b5cf6]">Language</code> covers Python, JS, Java, Go, Markdown, HTML and more —
            each with separators like <code className="text-[#8b5cf6]">&quot;\\nclass &quot;</code> and
            <code className="text-[#8b5cf6]"> &quot;\\ndef &quot;</code> so a whole function tends to stay in one chunk.
          </p>
        </div>
      </div>

      {/* 8.2 JSON */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.2 Document-Structure — JSON</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">RecursiveJsonSplitter</code> walks the JSON
          tree and keeps <span className="text-white">nested key/value structure intact</span>, splitting deep objects
          into pieces under <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">max_chunk_size</code>
          without breaking valid JSON.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_text_splitters import RecursiveJsonSplitter

json_splitter = RecursiveJsonSplitter(max_chunk_size=200)

# return a list of dicts
chunks_dict = json_splitter.split_json(json_data=JSON_DATA)

# or return JSON strings
chunks = json_splitter.split_text(JSON_DATA)`}</pre>
        </div>
      </div>

      {/* 8.3 Markdown */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.3 Document-Structure — Markdown</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">MarkdownHeaderTextSplitter</code> splits on
          <span className="text-white"> headers</span> and records the header hierarchy into each chunk&apos;s
          <span className="text-white"> metadata</span> — so a chunk always knows which section it came from.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_text_splitters import MarkdownHeaderTextSplitter

headers_to_split_on = [
    ("#", "Header_1"),
    ("##", "Header_2"),
    ("###", "Header_3"),
]

markdown_splitter = MarkdownHeaderTextSplitter(
    headers_to_split_on=headers_to_split_on,
    strip_headers=False        # keep the header text inside the chunk
)

markdown_chunks = markdown_splitter.split_text(MARKDOWN_TEXT)

for doc in markdown_chunks:
    print(doc.page_content, end="\\n\\n")   # metadata carries Header_1/2/3`}</pre>
        </div>
      </div>

      {/* 8.4 Semantic */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.4 Semantic Chunking</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Everything so far splits on <span className="text-white">structure</span>, never
          <span className="text-white"> meaning</span>. The <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">SemanticChunker</code>
          embeds each sentence and places a break wherever the meaning <span className="text-white">shifts</span> — so
          a paragraph about AI and one about pasta land in different chunks even without a blank line between them.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv

load_dotenv()

chunker = SemanticChunker(
    embeddings=OpenAIEmbeddings(),
    breakpoint_threshold_type="standard_deviation",
    breakpoint_threshold_amount=0.1     # how big a shift triggers a split
)

chunks = chunker.split_text(text)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The cost</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Semantic chunking calls an <span className="text-white">embedding model</span> to split — slower and more
            expensive than character splitting. Use it when topic boundaries matter more than raw speed.
          </p>
        </div>
      </div>

      {/* 8.5 LLM based */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.5 LLM-Based Chunking</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The most powerful — and most expensive — approach: hand the text to an
          <span className="text-white"> LLM</span> and ask it to split on natural topic boundaries. With
          <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs"> with_structured_output</code> you get
          clean chunks back — and can even ask for a <span className="text-white">summary per chunk</span> in the same
          call.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai.chat_models import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.documents import Document
from pydantic import BaseModel

class Chunk(BaseModel):
    chunk_text: str
    summary: str

class Chunker(BaseModel):
    chunks: list[Chunk]

model = ChatOpenAI(model="gpt-5-mini")
llm_chunker = model.with_structured_output(schema=Chunker)

prompt = ChatPromptTemplate(messages=[
    ("system",
     "You are an expert Text Chunker. Split the text at natural topic "
     "boundaries WITHOUT changing the text, and write a 1-2 line summary "
     "for each chunk."),
    ("human", "Split the given text into chunks\\nText: {text}")
], input_variables=["text"])

model_chain = prompt | llm_chunker
response = model_chain.invoke({"text": text})

# turn each chunk into a Document, summary in metadata
docs = [Document(page_content=c.chunk_text, metadata={"summary": c.summary})
        for c in response.chunks]`}</pre>
        </div>
      </div>

      {/* 8.6 Choosing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.6 Which Splitter Should You Use?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">Recursive (from Class 7)</p>
            <p className="text-xs text-gray-400 leading-relaxed">The default for plain text. Fast, free, good enough for most RAG.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">Document-Structure</p>
            <p className="text-xs text-gray-400 leading-relaxed">Code, JSON, or Markdown — split along the format so structure stays intact.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">Semantic</p>
            <p className="text-xs text-gray-400 leading-relaxed">Topic boundaries matter and you can afford embedding calls per split.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">LLM-Based</p>
            <p className="text-xs text-gray-400 leading-relaxed">Highest quality with summaries per chunk — slowest and most expensive.</p>
          </div>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "from_language loads language-aware separators (class/def boundaries) so RecursiveCharacterTextSplitter keeps functions and classes whole.",
            "RecursiveJsonSplitter walks the JSON tree and splits nested structures under max_chunk_size while keeping valid JSON.",
            "MarkdownHeaderTextSplitter splits on headers and stores the header hierarchy in each chunk's metadata.",
            "SemanticChunker embeds sentences and breaks where meaning shifts — great for topic boundaries, but costs an embedding call to split.",
            "LLM-based chunking asks a model to split on topic and (via with_structured_output) return chunks plus a summary each — highest quality, highest cost.",
            "Pick by content and budget: recursive for plain text, structure splitters for code/JSON/Markdown, semantic or LLM when meaning matters most.",
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
          With documents loaded and chunked, the next step is turning those chunks into vectors —
          <span className="text-white"> embeddings and vector stores</span> — so we can search them by meaning.
        </p>
      </div>
    </RagLessonLayout>
  );
}
