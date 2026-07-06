import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass10() {
  return (
    <LangChainLessonLayout slug="class-10">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 10 — Document Loaders</p>
        <h1 className="text-3xl font-bold text-white">Document Loaders — Loading Data for RAG</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Fundamentals done — now we start building <span className="text-white font-medium">RAG applications</span>. A
          RAG app is built from four components: <span className="text-white">document loaders</span>, text splitters,
          vector stores, and retrievers. This class covers the first one: document loaders, which pull data from any
          source into a standardized <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">Document</code> format LangChain can
          work with.
        </p>
      </div>

      {/* What is RAG */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.1 What Is RAG?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Tools like ChatGPT fail when the answer isn&apos;t in their training data — current affairs, your personal
          emails, your company&apos;s private docs. <span className="text-white">RAG</span> (Retrieval-Augmented
          Generation) fixes this by giving the LLM an <span className="text-white">external knowledge base</span> (PDFs,
          a database, your documents). When a user asks something the model doesn&apos;t know, it
          <span className="text-white"> retrieves</span> the relevant chunks from that knowledge base and uses them as
          context to <span className="text-white">generate</span> a grounded answer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            ["Up-to-date info", "Answer questions about data the model was never trained on."],
            ["Privacy", "Query private documents without uploading them to a third-party chatbot."],
            ["No size limit", "Split huge documents into chunks — bypasses the context-length limit."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Document object */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.2 The Document Object</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Data can live in hundreds of sources — PDFs, text files, databases, the cloud. Document loaders bring any of
          them into <span className="text-white">one standardized format</span>: the
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> Document</code> object. Every loader returns a
          <span className="text-white"> list of Document objects</span>, and each Document has exactly two parts:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">page_content</p>
            <p className="text-xs text-gray-400 leading-relaxed">The actual text content of the data.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">metadata</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Context around it — source, page number, creation date, author, etc.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          There are 100s of loaders, but they all share this format and the same
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> .load()</code> interface — learn one and you can use
          almost any. We&apos;ll cover the four most common: <span className="text-white">TextLoader</span>,
          <span className="text-white"> PyPDFLoader</span>, <span className="text-white">DirectoryLoader</span>,
          <span className="text-white"> WebBaseLoader</span>, and <span className="text-white">CSVLoader</span>. All of
          them live in the <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">langchain_community</code> package.
        </p>
      </div>

      {/* TextLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.3 TextLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The simplest loader — reads a <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">.txt</code> file into a
          Document. Use it for log files, code snippets, or transcripts. Here we load a poem and pipe it into a
          summarize chain.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import TextLoader
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
load_dotenv()

loader = TextLoader("cricket.txt", encoding="utf-8")
docs = loader.load()

print(type(docs))          # <class 'list'>
print(len(docs))           # 1
print(docs[0].page_content)
print(docs[0].metadata)    # {'source': 'cricket.txt'}

# feed it straight into a chain
prompt = PromptTemplate(template="Write a summary for the following poem \\n {poem}",
                        input_variables=["poem"])
model = ChatOpenAI()
parser = StrOutputParser()

chain = prompt | model | parser
print(chain.invoke({"poem": docs[0].page_content}))`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Always a list</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">.load()</code> returns a
            <span className="text-white"> list of Documents</span>, even for a single file. Grab
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> docs[0]</code> and read its
            <code className="text-[#22a06b]"> .page_content</code> / <code className="text-[#22a06b]">.metadata</code>. You could
            even wrap <code className="text-[#22a06b]">loader.load()</code> in a <code className="text-[#22a06b]">RunnableLambda</code> to
            make loading part of the chain.
          </p>
        </div>
      </div>

      {/* PyPDFLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.4 PyPDFLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The most-used loader — reads PDFs <span className="text-white">page by page</span>. A 23-page PDF becomes a
          list of <span className="text-white">23 Document objects</span>, each with its page&apos;s content and
          metadata (page number, source). Requires <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">pip install pypdf</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("dl_curriculum.pdf")
docs = loader.load()

print(len(docs))              # 23  (one Document per page)
print(docs[0].page_content)   # text of page 1
print(docs[0].metadata)       # {'source': ..., 'page': 0, 'total_pages': 23, ...}`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Pick the right PDF loader</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            PyPDFLoader uses the <code className="text-[#22a06b]">pypdf</code> library and works best on
            <span className="text-white"> simple, text-based PDFs</span>. It struggles with scanned images and complex
            layouts. Alternatives: <code className="text-[#22a06b]">PDFPlumberLoader</code> (tables),
            <code className="text-[#22a06b]"> UnstructuredPDFLoader</code> / <code className="text-[#22a06b]">AmazonTextractPDFLoader</code> (scanned
            images), <code className="text-[#22a06b]">PyMuPDFLoader</code> (rich layouts). Don&apos;t memorize them —
            look them up per project.
          </p>
        </div>
      </div>

      {/* DirectoryLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.5 DirectoryLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Loads <span className="text-white">many files at once</span> from a folder. You give it the directory path, a
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> glob</code> pattern to select files, and the
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> loader_cls</code> to use for each. Here: three ML books
          (326 + 392 + 468 pages) → 1186 Document objects.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import DirectoryLoader, PyPDFLoader

loader = DirectoryLoader(
    path="books",
    glob="*.pdf",              # all PDFs in the folder
    loader_cls=PyPDFLoader,
)
docs = loader.load()

print(len(docs))              # 1186  (326 + 392 + 468 pages)
print(docs[0].page_content)   # first page of the first book
print(docs[325].metadata)     # last page of book 1 (0-indexed)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">glob patterns</p>
          <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10 mt-1">
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`"**/*.txt"    # all .txt files in every sub-folder
"*.pdf"       # all PDFs in the root directory only
"data/*.csv"  # all CSVs inside the data/ folder
"**/*"        # every file in every sub-folder`}</pre>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mt-2">
            DirectoryLoader works with <span className="text-white">any</span> loader class, not just PDFs.
          </p>
        </div>
      </div>

      {/* load vs lazy_load */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.6 load() vs lazy_load()</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Loading three PDFs took ~10 seconds and put all 1186 documents in RAM at once. With 500 PDFs that&apos;s
          impossible. Every loader has <span className="text-white">two</span> methods to handle this trade-off:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">load() — eager</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Loads <span className="text-white">everything at once</span> into memory and returns a
              <span className="text-white"> list</span> of Documents. Use it when you have few / small documents and
              want them all available together.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">lazy_load() — on demand</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Returns a <span className="text-white">generator</span> — one Document at a time. Load it, process it, it
              leaves memory, then the next one loads. Use it for large numbers of documents or stream processing
              without hogging memory.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# eager: waits until ALL docs are in memory, then loops
docs = loader.load()
for document in docs:
    print(document.metadata)

# lazy: prints immediately, one document at a time, constant memory
for document in loader.lazy_load():
    print(document.metadata)`}</pre>
        </div>
      </div>

      {/* WebBaseLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.7 WebBaseLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Loads and extracts text content from <span className="text-white">web pages</span>. Internally it uses
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> requests</code> to fetch the page and
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> BeautifulSoup</code> to strip HTML tags. Best for
          <span className="text-white"> static</span> pages (blogs, news, public sites); for JavaScript-heavy pages use
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> SeleniumURLLoader</code> instead.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import WebBaseLoader

url = "https://www.flipkart.com/apple-macbook-air-m2/p/itm..."
loader = WebBaseLoader(url)          # or pass a list of URLs
docs = loader.load()

prompt = PromptTemplate(
    template="Answer the following question \\n {question} from the following text \\n {text}",
    input_variables=["question", "text"],
)
chain = prompt | model | parser
print(chain.invoke({
    "question": "What is the product that we are talking about?",
    "text": docs[0].page_content,
}))
# -> The product is the Apple MacBook Air M2 ...`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">One URL → one Document</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A single URL gives one Document. Pass a <span className="text-white">list of URLs</span> and you get one
            Document per URL. Project idea: a Chrome plugin that lets you chat with whatever page you have open, backed
            by a WebBaseLoader.
          </p>
        </div>
      </div>

      {/* CSVLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.8 CSVLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Loads a CSV file, creating <span className="text-white">one Document per row</span>. A 400-row file → 400
          Documents. Each Document&apos;s <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">page_content</code> is a string of
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> column: value</code> pairs; metadata holds the source and row number.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import CSVLoader

loader = CSVLoader(file_path="social_network_ads.csv")
docs = loader.load()

print(len(docs))            # 400  (one Document per row)
print(docs[0])              # page_content = "User ID: ...\\nGender: ...", metadata = {'source': ..., 'row': 0}`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          For big CSVs, use <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">lazy_load()</code> and loop row by row. Handy
          for data-analysis questions like &ldquo;what&apos;s the max value in a column?&rdquo;
        </p>
      </div>

      {/* Other + custom loaders */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.9 Other &amp; Custom Loaders</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LangChain ships loaders for cloud storage (S3, Azure, Dropbox, Google Drive), messaging and social platforms,
          productivity tools, JSON, YouTube transcripts, and more — all in
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> langchain_community</code>, because they&apos;re
          community-built. Don&apos;t study them all; look one up when a project needs it.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          If no loader fits your source, build a <span className="text-white">custom one</span>: subclass
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> BaseLoader</code> and implement your own
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> load()</code> / <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">lazy_load()</code>.
          That&apos;s exactly how the whole community pool of loaders came to exist.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "RAG gives an LLM an external knowledge base so it can answer questions about data it was never trained on — with privacy and no document-size limit.",
            "A RAG app has four components: document loaders, text splitters, vector stores, and retrievers. This class is document loaders.",
            "Every loader returns a list of Document objects; each Document has page_content (the text) and metadata (source, page, etc.).",
            "All loaders share the .load() interface and live in langchain_community — learn one, use almost any.",
            "TextLoader loads .txt; PyPDFLoader loads PDFs one Document per page; CSVLoader loads one Document per row; WebBaseLoader scrapes a web page (one Document per URL).",
            "DirectoryLoader loads many files from a folder using a glob pattern and a loader_cls — works with any loader class.",
            "load() is eager (everything into memory, returns a list); lazy_load() is on-demand (returns a generator, one document at a time) — use lazy_load for large volumes.",
            "No loader for your source? Subclass BaseLoader and write your own load()/lazy_load().",
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
          We can load data — but a whole book in one chunk is too big for an LLM&apos;s context. Next up:
          <span className="text-white"> text splitters</span>, the second RAG component, which break documents into
          clean, overlapping chunks ready for embedding.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
