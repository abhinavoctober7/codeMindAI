import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass4() {
  return (
    <RagLessonLayout slug="class-4">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 4 — Document Loaders</p>
        <h1 className="text-3xl font-bold text-white">What Are Document Loaders &amp; How They Work?</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          We&apos;ve seen the RAG pipeline end to end. Now we start building it — component by component — beginning with
          the very first step of <span className="text-white font-medium">indexing</span>:
          <span className="text-white font-medium"> document loaders</span>. A loader&apos;s job is to reach into any
          data source and pull its content into a single standardized shape that the rest of the pipeline can work with.
        </p>
      </div>

      {/* 4.1 Where they sit */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.1 Where Loaders Sit in the Pipeline</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Recall the indexing phase: <span className="text-white">knowledge source → document loading → parsing →
          chunking → embedding → vector store</span>. Document loaders own the first real step. Your knowledge lives in
          many formats and places — a PDF paper, a CSV export, a JSON API dump, an HTML page — and each needs different
          parsing. A loader abstracts that away: whatever the source, it returns the same thing.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-5 text-sm">
          <p className="text-gray-300 leading-relaxed font-mono text-xs">
            PDF / CSV / JSON / TXT / Web →{" "}
            <span className="text-[#8b5cf6]">Document Loader</span> → List[Document]
          </p>
        </div>
      </div>

      {/* 4.2 The Document object */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.2 The Document Object</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every loader returns a <span className="text-white">list of Document objects</span>. That uniformity is the
          whole point — learn one loader and you can use almost any. Each Document has exactly two parts:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">page_content</p>
            <p className="text-xs text-gray-400 leading-relaxed">The actual text content extracted from the source.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">metadata</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Context around it — source, page number, row, file type, creation date, and anything else you attach.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`# a Document, conceptually
Document(
    page_content="Transformers are a neural network architecture ...",
    metadata={"source": "transformers.txt"},
)`}</pre>
        </div>
      </div>

      {/* 4.3 How they work */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.3 How a Loader Works</h2>
        <div className="flex flex-col gap-2">
          {[
            { c: "1 — Point at a source", d: "Give the loader a file path, a URL, or a connection. It's format-specific: TextLoader for .txt, CSVLoader for .csv, PyPDFLoader for PDFs, and so on." },
            { c: "2 — Parse the raw bytes", d: "The loader reads and parses the source into text — splitting a PDF page by page, a CSV row by row, a JSON array element by element." },
            { c: "3 — Attach metadata", d: "As it parses, it records where each piece came from (source path, page, row) so you can trace and filter later." },
            { c: "4 — Return Documents", d: "You get back a list of Document objects, ready to be chunked, embedded, and stored." },
          ].map(({ c, d }, i) => (
            <div key={c} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#8b5cf6]/15 text-[#8b5cf6] text-xs flex items-center justify-center font-bold shrink-0">
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

      {/* 4.4 The common interface */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.4 The Common Interface</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          All loaders live in <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">langchain_community.document_loaders</code>
          and share the same interface. Two methods matter:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">.load() — eager</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Loads everything into memory at once and returns a <span className="text-white">list</span> of Documents.
              Simple; good for small/few sources.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">.lazy_load() — on demand</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Returns a <span className="text-white">generator</span> — one Document at a time, constant memory. Use it
              for large volumes or streaming, like crawling many web pages.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import TextLoader
from pathlib import Path

file_path = Path("../knowledge-source/transformers.txt")
print(file_path.exists())          # True

loader = TextLoader(file_path=file_path)
documents = loader.load()          # List[Document]

print(type(documents))             # <class 'list'>
print(type(documents[0]))          # <class 'langchain_core.documents.base.Document'>
print(len(documents))              # 1`}</pre>
        </div>
      </div>

      {/* 4.5 Why it matters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.5 Why This Step Matters for RAG</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Everything downstream depends on loading well. If the loader mangles a table, drops a PDF&apos;s figures, or
          loses which page text came from, no amount of clever chunking or retrieval can recover it — this is a classic
          source of <span className="text-white">retriever failure</span>. Getting clean text
          <span className="text-white"> plus</span> faithful metadata out of the source is the foundation the whole
          knowledge base is built on.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Document loaders are the first step of RAG indexing: they pull content from any source into a standardized form.",
            "Every loader returns a list of Document objects; each Document has page_content (text) and metadata (source, page, row, etc.).",
            "A loader points at a source, parses the raw bytes, attaches metadata, and returns Documents.",
            "All loaders share the same interface in langchain_community.document_loaders — learn one, use almost any.",
            ".load() is eager (returns a list); .lazy_load() is on-demand (returns a generator) for large volumes.",
            "Clean loading with faithful metadata is the foundation of the knowledge base — bad loading causes retriever failure downstream.",
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
          Time to get hands-on. Next we load real files with the three most common loaders:
          <span className="text-white"> Text Loader, CSV Loader, and PDF Loader</span>.
        </p>
      </div>
    </RagLessonLayout>
  );
}
