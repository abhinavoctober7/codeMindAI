import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass6() {
  return (
    <RagLessonLayout slug="class-6">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 6 — JSON &amp; Web</p>
        <h1 className="text-3xl font-bold text-white">JSON Loader, Web Loader, Recursive Web Loader</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The last of our loaders take you beyond files on disk: structured
          <span className="text-white font-medium"> JSON</span>, single <span className="text-white font-medium">web
          pages</span>, and entire <span className="text-white font-medium">site sections</span> crawled recursively.
          Same Document objects out — but now you&apos;re selecting fields with jq and pulling content straight off the
          internet.
        </p>
      </div>

      {/* 6.1 JSONLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.1 JSONLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          JSON is nested, so the loader needs to know <span className="text-white">which part</span> to turn into
          Documents. You tell it with a <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">jq_schema</code>
          (a jq-style path), a <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">content_key</code>
          for the text field, and an optional <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">metadata_func</code>
          to shape the metadata.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders.json_loader import JSONLoader
from pathlib import Path
from pprint import pp

file_path = Path("../knowledge-source/apparels.json")

# pull chosen fields into each Document's metadata
def metadata_func(record: dict, metadata: dict) -> dict:
    metadata["product_name"] = record["productName"]
    metadata["category"] = record["category"]
    metadata["price"] = record["price"]
    del metadata["seq_num"]          # drop the default auto field
    return metadata

loader = JSONLoader(
    file_path=file_path.as_posix(),
    jq_schema=".products[]",         # one Document per element of products[]
    content_key="Description",       # this field becomes page_content
    metadata_func=metadata_func,
)

documents = loader.load()
for doc in documents:
    print(doc.page_content, end="\\n\\n")
print(documents[0].metadata)         # product_name, category, price
print(len(documents))`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">jq_schema is the selector</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#8b5cf6]">.products[]</code> means &ldquo;iterate the products array&rdquo; — you get
            one Document per product. <code className="text-[#8b5cf6]">content_key</code> picks the text to embed, while
            <code className="text-[#8b5cf6]"> metadata_func</code> lifts structured fields (name, category, price) into
            metadata for later filtering.
          </p>
        </div>
      </div>

      {/* 6.2 WebBaseLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.2 WebBaseLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Loads and extracts text from <span className="text-white">web pages</span>. Internally it fetches each URL and
          strips the HTML down to text. Pass a <span className="text-white">list of URLs</span> and you get one Document
          per page. Best for static pages (docs, blogs, news).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import WebBaseLoader
from pprint import pp

url_1 = "https://docs.langchain.com/oss/python/integrations/document_loaders/pypdfloader"
url_2 = "https://docs.langchain.com/oss/python/integrations/document_loaders/pdfminer"
url_3 = "https://docs.langchain.com/oss/python/integrations/document_loaders/pdfplumber"

loader = WebBaseLoader(web_paths=[url_1, url_2, url_3])
documents = loader.load()

print(len(documents))                # 3  (one Document per URL)
print(documents[2].page_content)
pp(documents[2].metadata)            # includes source URL, title, etc.`}</pre>
        </div>
      </div>

      {/* 6.3 RecursiveUrlLoader */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.3 RecursiveUrlLoader</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Instead of naming every URL, point it at a base URL and it <span className="text-white">crawls</span>,
          following links up to <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">max_depth</code>.
          Perfect for ingesting a whole documentation section into your knowledge base in one shot.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.document_loaders import RecursiveUrlLoader

base_url = "https://docs.langchain.com/oss/python/integrations/document_loaders"

loader = RecursiveUrlLoader(url=base_url, max_depth=2)   # follow links 2 levels deep
documents = loader.load()

print(len(documents))                # many pages crawled
print(documents[0].page_content[:500])
print(documents[0].metadata)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Crawling can be big — go lazy</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A recursive crawl can return hundreds of pages, so <code className="text-[#8b5cf6]">load()</code> may hog
            memory. Use <code className="text-[#8b5cf6]">lazy_load()</code> to stream one page at a time and process as
            you go.
          </p>
          <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10 mt-2">
            <pre className="text-xs text-purple-300 font-mono leading-relaxed whitespace-pre-wrap">{`documents_lazy = loader.lazy_load()   # a generator, nothing loaded yet

counter = 0
for document in documents_lazy:
    if counter == 20:
        break
    counter += 1
    print(document.page_content[0:300])
    print(document.metadata)`}</pre>
          </div>
        </div>
      </div>

      {/* 6.4 Choosing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.4 Which Web Loader?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">WebBaseLoader</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              You know the exact pages you want. Give it a list of URLs → one Document each. Predictable and fast.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">RecursiveUrlLoader</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              You want a whole section but don&apos;t want to list every link. Give it a base URL + depth and let it
              crawl. Pair with lazy_load for scale.
            </p>
          </div>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "JSONLoader turns a nested JSON into Documents; jq_schema selects the part to iterate (e.g. .products[]), content_key picks the text, metadata_func shapes metadata.",
            "WebBaseLoader loads web pages and strips HTML to text — a list of URLs gives one Document per URL.",
            "RecursiveUrlLoader crawls from a base URL, following links up to max_depth — great for ingesting a whole docs section.",
            "Recursive crawls can be large; use lazy_load() to stream one page at a time instead of loading everything into memory.",
            "Use WebBaseLoader when you know the exact pages; use RecursiveUrlLoader when you want to crawl a section.",
            "All of these still return the same list of Document objects, ready for chunking and embedding.",
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
          With documents loaded from any source, the next indexing step is breaking them into clean, embeddable pieces —
          <span className="text-white"> text splitting &amp; chunking</span>.
        </p>
      </div>
    </RagLessonLayout>
  );
}
