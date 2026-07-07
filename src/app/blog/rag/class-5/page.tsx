import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass5() {
  return (
    <RagLessonLayout slug="class-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 5 — Text, CSV &amp; PDF</p>
        <h1 className="text-3xl font-bold text-white">Text Loader, CSV Loader and PDF Loader</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Now we load real files. These three loaders cover the most common knowledge sources you&apos;ll hit —
          <span className="text-white font-medium"> plain text, tabular CSV, and PDFs</span>. Each returns the same
          Document objects, but the knobs — how many Documents you get, and what lands in metadata — differ per format.
        </p>
      </div>

      {/* 5.1 TextLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.1 TextLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The simplest loader — reads a <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">.txt</code>
          file into a <span className="text-white">single Document</span>. Good for transcripts, logs, notes, or scraped
          plain text.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from pprint import pp
from langchain_community.document_loaders import TextLoader
from pathlib import Path

file_path = Path("../knowledge-source/transformers.txt")
print(file_path.exists())            # True

loader = TextLoader(file_path=file_path)
documents = loader.load()

print(type(documents))               # <class 'list'>
print(type(documents[0]))            # Document
print(len(documents))                # 1  (whole file = one Document)

extracted_doc = documents[0]
print(extracted_doc.page_content)    # the full text
pp(extracted_doc.metadata)           # {'source': '../knowledge-source/transformers.txt'}`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">One file → one Document</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The entire file becomes a single Document, so <code className="text-[#8b5cf6]">len(documents)</code> is 1.
            Metadata just holds the <code className="text-[#8b5cf6]">source</code> path. You&apos;ll chunk this later —
            a whole file is usually too big to embed as one unit.
          </p>
        </div>
      </div>

      {/* 5.2 CSVLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.2 CSVLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Loads a CSV, creating <span className="text-white">one Document per row</span>. The power here is control over
          which columns become the content, which become metadata, and which is the source.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders.csv_loader import CSVLoader
from pathlib import Path
from pprint import pp

file_path = Path("../knowledge-source/organizations.csv")
print(file_path.exists())

loader = CSVLoader(
    file_path=file_path,
    source_column="Industry",                                  # sets each Document's source
    metadata_columns=["Website", "Founded", "Number of employees"],  # go into metadata
    content_columns=["Description"],                           # become page_content
)

documents = loader.load()
print(len(documents))                # one Document per row
print(documents[0].page_content)     # just the Description column
pp(documents[0].metadata)            # source + Website/Founded/Number of employees`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Shape the Document from columns</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#8b5cf6]">content_columns</code> decides what actually gets embedded — keep it to the
            meaningful text (here, <code className="text-[#8b5cf6]">Description</code>).
            <code className="text-[#8b5cf6]"> metadata_columns</code> keeps structured fields available for filtering
            later, and <code className="text-[#8b5cf6]">source_column</code> tags each row&apos;s origin.
          </p>
        </div>
      </div>

      {/* 5.3 PDF Loaders */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.3 PDF Loaders — PyPDFLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The most-used loader in RAG. In <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">mode=&apos;page&apos;</code>
          it reads a PDF <span className="text-white">page by page</span> — a 15-page paper becomes 15 Documents, each
          with its page number in metadata. Requires <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">pip install pypdf</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders.pdf import PyPDFLoader
from pathlib import Path
from pprint import pp

file_path = Path("../knowledge-source/attention_is_all_you_need.pdf")

pypdf_loader = PyPDFLoader(file_path=file_path.as_posix(), mode="page")
documents = pypdf_loader.load()

print(len(documents))                # one Document per page
pp(documents[0].metadata)            # {'source': ..., 'page': 0, ...}
print(documents[1].page_content)     # text of page 2`}</pre>
        </div>
      </div>

      {/* 5.4 Extracting images */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.4 Pulling Text Out of Images (OCR)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Papers have figures and diagrams with text baked into images. PyPDFLoader can OCR those too — pass an image
          parser and it extracts image text alongside the page text.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders.parsers import RapidOCRBlobParser

pypdf_image_loader = PyPDFLoader(
    file_path=file_path.as_posix(),
    mode="page",
    extract_images=True,
    images_parser=RapidOCRBlobParser(),   # OCR the images
    images_inner_format="html-img",
)
documents_with_images = pypdf_image_loader.load()

page_with_image = documents_with_images[2]
print(page_with_image.page_content[-700:])   # includes OCR'd image text`}</pre>
        </div>
      </div>

      {/* 5.5 Other PDF loaders */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.5 Other PDF Loaders — Pick the Right One</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          No single PDF loader is best for every document. PyPDFLoader is great for simple, text-based PDFs; for tricky
          layouts, tables, or scanned pages, reach for an alternative — same
          <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs"> .load()</code> interface, different
          engine.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">PDFMinerLoader</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Fine-grained text extraction; also supports image OCR like PyPDF. Good when you need control over messy
              layouts.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">PDFPlumberLoader</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Strong at <span className="text-white">tables</span> and rich per-page metadata. Reach for it when tabular
              data matters.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import PDFMinerLoader, PDFPlumberLoader

# PDFMiner with OCR
pdfminer_loader = PDFMinerLoader(
    file_path=file_path.as_posix(), mode="page",
    extract_images=True, images_parser=RapidOCRBlobParser(),
    images_inner_format="html-img",
)
docs = pdfminer_loader.load()

# find a specific page in metadata
for doc in docs:
    if doc.metadata["page"] == 7:
        print(doc.page_content)
        break

# PDFPlumber — good for tables + metadata
plumber = PDFPlumberLoader(file_path=file_path.as_posix())
docs_meta = plumber.load()
pp(docs_meta[0].metadata)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Don&apos;t memorize — match the document</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Simple text PDF → <span className="text-white">PyPDFLoader</span>. Complex layout → PDFMiner. Tables →
            PDFPlumber. Scanned images → any of them with <code className="text-[#8b5cf6]">extract_images=True</code> and
            an OCR parser. Try one on your actual file and inspect the output.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "TextLoader reads a .txt file into a single Document; metadata holds just the source path.",
            "CSVLoader creates one Document per row; content_columns set page_content, metadata_columns set metadata, source_column tags the origin.",
            "PyPDFLoader in mode='page' returns one Document per page, each with its page number in metadata (needs pypdf).",
            "Enable extract_images + an OCR parser (e.g. RapidOCRBlobParser) to pull text out of figures and scanned pages.",
            "Alternatives share the same interface: PDFMinerLoader for tricky layouts, PDFPlumberLoader for tables and rich metadata.",
            "There's no universal best PDF loader — match the loader to the document and inspect the output.",
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
          Beyond files on disk — next we load structured JSON and pull content straight from the web with the
          <span className="text-white"> JSON Loader, Web Loader, and Recursive Web Loader</span>.
        </p>
      </div>
    </RagLessonLayout>
  );
}
