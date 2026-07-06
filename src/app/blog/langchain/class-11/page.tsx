import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass11() {
  return (
    <LangChainLessonLayout slug="class-11">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 11 — Text Splitters</p>
        <h1 className="text-3xl font-bold text-white">Text Splitters — Breaking Big Text Into Chunks</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The second RAG component. Document loaders bring data in; a whole book in a single chunk is useless to an LLM.
          <span className="text-white"> Text splitting</span> is the process of breaking large text — articles, PDFs,
          HTML pages, books — into smaller, manageable pieces an LLM can handle effectively. The code that does it is a
          <span className="text-white"> text splitter</span>. This class covers four strategies: length-based,
          text-structure, document-structure, and semantic.
        </p>
      </div>

      {/* Why split */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.1 Why Split Text At All?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A golden rule of LLM apps: <span className="text-white">never feed one huge blob of text at once</span>. Output
          quality drops. Splitting a large document into small chunks before feeding it to the model reliably improves
          results. There are three concrete reasons:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            [
              "Overcome context limits",
              "Every embedding and language model has a maximum input size. A 100k-word PDF cannot fit a 50k-token context window. Splitting lets you process documents that would otherwise be rejected.",
            ],
            [
              "Better downstream tasks",
              "Embedding, semantic search, and summarization all get better with chunks. Small chunks capture meaning more precisely; big documents make LLMs drift or hallucinate.",
            ],
            [
              "Optimize compute",
              "Small chunks need less memory to store and can be processed in parallel — cheaper and faster than one giant blob.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Why chunks embed better</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Embedding turns text into a vector. Squeezing the semantic meaning of a huge passage into a few numbers is
            hard, so the vector represents it poorly. Split an IPL article so each team (CSK, MI, RCB) gets its own
            chunk, embed each separately, and every vector captures its meaning far more accurately — which also makes
            <span className="text-white"> semantic search</span> more precise.
          </p>
        </div>
      </div>

      {/* Length based */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.2 Length-Based Splitting — CharacterTextSplitter</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The simplest and fastest method. You decide the chunk size up front — in
          <span className="text-white"> characters</span> or <span className="text-white">tokens</span> — then walk the
          text and cut a new chunk every time you hit that count. Set
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> chunk_size=100</code> and you get a
          chunk every 100 characters, straight through to the end.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.text_splitter import CharacterTextSplitter

splitter = CharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=0,
    separator="",        # cut purely on length, ignore structure
)

# split raw text -> list of strings
chunks = splitter.split_text(text)
print(chunks[0])

# ...or split Document objects from a loader
from langchain_community.document_loaders import PyPDFLoader
docs = PyPDFLoader("dl_curriculum.pdf").load()
result = splitter.split_documents(docs)   # list of Document objects
print(result[0].page_content)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Fast, but structure-blind</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The big win is simplicity and speed. The big flaw: it ignores linguistic structure, grammar, and meaning. If
            it must stop at 100 characters, it stops — even mid-word or mid-sentence. Context gets cut in half across two
            chunks, hurting embeddings. Because of this, it&apos;s rarely used in practice.
          </p>
        </div>
      </div>

      {/* Chunk overlap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.3 Chunk Overlap</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">chunk_overlap</code> sets how many
          characters two consecutive chunks <span className="text-white">share</span>. With an overlap of 5, the last 5
          characters of chunk 1 are also the first 5 of chunk 2. The idea: when a length-based split abruptly cuts
          context, starting the next chunk a little earlier <span className="text-white">retains</span> that context so
          it&apos;s not lost.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">It&apos;s a trade-off</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            More overlap = more shared context, but also <span className="text-white">more chunks</span> and therefore
            more computation. Too little and you still cut context mid-thought. A good rule of thumb for RAG apps:
            <span className="text-white"> 10–20% of chunk size</span>. So a chunk_size of 100 → overlap of 10–20.
          </p>
        </div>
      </div>

      {/* Text structure based */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.4 Text-Structure Splitting — RecursiveCharacterTextSplitter</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The <span className="text-white">most-used</span> splitter. It exploits the fact that text has an inherent
          hierarchy: paragraphs → sentences → words → characters. It holds an ordered list of separators and tries them
          top-down, only falling to the next level when a chunk still exceeds
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> chunk_size</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`separators = ["\\n\\n",  # paragraphs   (try first)
              "\\n",    # lines / sentences
              " ",     # words
              ""]      # characters     (last resort)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          It first splits on paragraphs. Any resulting chunk still bigger than the limit is split again on sentences,
          then words, then characters — and when neighbouring small pieces fit together under the limit, it
          <span className="text-white"> merges</span> them back up to make chunks as large as allowed. The whole time it
          works to <span className="text-white">avoid cutting mid-word or mid-sentence</span>.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Chunk size steers the level</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Bigger chunk_size → it can keep whole paragraphs together. Smaller → it drops to sentences, then words. Very
            small → characters (like the plain splitter). Very large → the whole text is one chunk. Pick a sensible
            number and it splits cleanly along natural boundaries — which is exactly why it&apos;s the default choice.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=300,
    chunk_overlap=0,
)
chunks = splitter.split_text(text)
print(len(chunks))       # e.g. 2 chunks = 2 paragraphs, cleanly split
print(chunks[0])`}</pre>
        </div>
      </div>

      {/* Document structure based */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.5 Document-Structure Splitting — Code &amp; Markdown</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          What if the &ldquo;text&rdquo; isn&apos;t prose? Source code and Markdown aren&apos;t organized into paragraphs
          and sentences — they use constructs like <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">class</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> def</code>, headings, and lists. This is
          the <span className="text-white">same RecursiveCharacterTextSplitter</span> — only the separator list changes
          to match the format. Use <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">from_language()</code>
          and it picks the right separators for you.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.text_splitter import (
    RecursiveCharacterTextSplitter,
    Language,
)

# split Python code along class / def boundaries
py_splitter = RecursiveCharacterTextSplitter.from_language(
    language=Language.PYTHON,
    chunk_size=350,
    chunk_overlap=0,
)
chunks = py_splitter.split_text(python_code)
print(len(chunks))       # e.g. class -> one chunk, usage -> another

# same idea for Markdown
md_splitter = RecursiveCharacterTextSplitter.from_language(
    language=Language.MARKDOWN,
    chunk_size=200,
    chunk_overlap=0,
)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Same engine, new separators</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Behind the scenes the algorithm is identical — it just uses a language-specific set of separators. LangChain
            supports Python, JavaScript, Java, PHP, C++, HTML, Markdown, and many more. A tuned chunk_size on Markdown
            keeps each heading section as its own chunk; on Python it keeps each class/method together.
          </p>
        </div>
      </div>

      {/* Semantic */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">11.6 Semantic Splitting — SemanticChunker</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Sometimes length and structure both fail: a single paragraph talks about
          <span className="text-white"> two completely different topics</span> (say, agriculture and then IPL).
          Structure-based splitting keeps that mixed paragraph as one chunk, so its embedding is muddy. What you want is
          to split on <span className="text-white">meaning</span>, not size or punctuation.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          A semantic splitter embeds each sentence, then slides a window comparing the similarity between consecutive
          sentences. Where similarity <span className="text-white">suddenly drops</span>, the topic changed — so it
          splits there.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

splitter = SemanticChunker(
    OpenAIEmbeddings(),
    breakpoint_threshold_type="standard_deviation",
    breakpoint_threshold_amount=1,   # split when a gap exceeds 1 std dev
)
docs = splitter.create_documents([sample_text])
print(len(docs))`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Breakpoint thresholds</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            How low a similarity counts as a topic change is set by the threshold type:
            <span className="text-white"> percentile</span>, <span className="text-white">interquartile</span>,
            <span className="text-white"> standard_deviation</span>, or <span className="text-white">gradient</span>. A
            higher amount (e.g. 3 std dev) tolerates more variation, producing fewer/larger chunks; a lower amount splits
            more aggressively.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Still experimental</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            It lives in <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">langchain_experimental</code>,
            not the main library, and in practice results aren&apos;t always accurate yet. The concept is promising and
            will grow as embedding models improve — but as of now, <span className="text-white">RecursiveCharacterTextSplitter
            is still the best default</span> and the one you&apos;ll reach for most.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Text splitting breaks large text into small, manageable chunks; the code that does it is a text splitter — the second RAG component.",
            "Split because: models have context limits, downstream tasks (embedding, semantic search, summarization) work better on chunks, and small chunks are cheaper and parallelizable.",
            "Length-based (CharacterTextSplitter) cuts every N characters/tokens — fast but structure-blind, so it cuts mid-word; rarely used.",
            "chunk_overlap shares characters between consecutive chunks to retain context across a cut; ~10–20% of chunk_size is a good default.",
            "RecursiveCharacterTextSplitter walks paragraphs → sentences → words → characters, only going deeper when a chunk exceeds the limit — the most-used splitter.",
            "For code and Markdown, use RecursiveCharacterTextSplitter.from_language() — same engine, format-specific separators.",
            "SemanticChunker splits where sentence-to-sentence similarity drops (a topic change) — promising but experimental and not yet consistently accurate.",
            "Default to RecursiveCharacterTextSplitter unless you have a specific reason not to.",
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
          We can load documents and split them into clean chunks. Next we turn those chunks into vectors and store them
          for fast retrieval — the third RAG component: <span className="text-white">vector stores</span>.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
