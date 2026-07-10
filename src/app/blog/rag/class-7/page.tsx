import RagLessonLayout from "@/components/RagLessonLayout";

export default function RagClass7() {
  return (
    <RagLessonLayout slug="class-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#8b5cf6] font-semibold uppercase tracking-widest">Class 7 — Text Splitters</p>
        <h1 className="text-3xl font-bold text-white">What are Text Splitters, Text &amp; Length Based Splitters</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Loaders hand you whole documents — often far too big to embed or feed to a model. A
          <span className="text-white font-medium"> text splitter</span> breaks that text into smaller
          <span className="text-white font-medium"> chunks</span>. This class covers the two most fundamental
          splitters: the <span className="text-white font-medium">CharacterTextSplitter</span> (length &amp;
          separator based) and the <span className="text-white font-medium">RecursiveCharacterTextSplitter</span>
          (text-structure aware) — plus overlap and token-based splitting.
        </p>
      </div>

      {/* 7.1 Why split */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.1 Why Split Text?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Three reasons force us to chunk. <span className="text-white">Embedding models have token limits</span> —
          you can&apos;t embed a 300-page PDF in one call. <span className="text-white">Retrieval is more precise</span>
          when each chunk is one focused idea, so similarity search returns exactly the relevant passage instead of a
          whole document. And <span className="text-white">the LLM&apos;s context window is finite</span> — smaller
          chunks let you pack in only what matters.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The core trade-off</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Chunks too <span className="text-white">large</span> → retrieval drags in irrelevant text and wastes
            context. Chunks too <span className="text-white">small</span> → you lose the surrounding meaning. Good
            chunking finds the middle ground, and <code className="text-[#8b5cf6]">chunk_overlap</code> repairs
            meaning lost at the boundaries.
          </p>
        </div>
      </div>

      {/* 7.2 CharacterTextSplitter */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.2 CharacterTextSplitter — Length Based</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The simplest splitter. It cuts text into chunks of roughly <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">chunk_size</code>
          characters, splitting on a single <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">separator</code>.
          With <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">separator=&quot;&quot;</code> it splits on raw
          characters, ignoring word or sentence boundaries.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_text_splitters import CharacterTextSplitter

text = """Artificial intelligence is transforming technology and shaping the future.
Machine learning algorithms are becoming more sophisticated every day.
Deep learning models can now process vast amounts of data efficiently."""

splitter = CharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=0,
    length_function=len,     # how "size" is measured
    separator=""             # split on raw characters
)

chunks = splitter.split_text(text)
print(chunks)
print(f"Number of Chunks {len(chunks)}")`}</pre>
        </div>
      </div>

      {/* 7.3 The separator matters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.3 The Separator Controls the Cut</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The same text splits very differently depending on the <span className="text-white">separator</span>. A
          reusable helper makes the difference easy to see:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`def create_chunks(text, chunk_size, separator, chunk_overlap=0):
    splitter = CharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separator=separator
    )
    return splitter.split_text(text=text)

create_chunks(text, 100, "")       # split on raw characters
create_chunks(text, 100, " ")      # respect word boundaries
create_chunks(text, 100, "\\n\\n")   # split on paragraphs`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">&quot;&quot; (characters)</p>
            <p className="text-xs text-gray-400 leading-relaxed">Cuts mid-word. Exact sizes, but breaks meaning.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">&quot; &quot; (words)</p>
            <p className="text-xs text-gray-400 leading-relaxed">Never splits a word. Keeps tokens intact.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#8b5cf6]">&quot;\\n\\n&quot; (paragraphs)</p>
            <p className="text-xs text-gray-400 leading-relaxed">Keeps whole ideas together — the most natural unit.</p>
          </div>
        </div>
      </div>

      {/* 7.4 Chunk overlap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.4 Chunk Overlap</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A hard cut can slice a sentence in half, losing the thread between two chunks.
          <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs"> chunk_overlap</code> repeats the last
          <span className="text-white"> N characters</span> of one chunk at the start of the next, so context flows
          across the boundary.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`splitter = CharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=20,        # last 20 chars repeat into the next chunk
    separator=""
)

chunks = splitter.split_text(text)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Rule of thumb</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Overlap is usually <span className="text-white">10–20%</span> of chunk_size. Enough to preserve context,
            not so much that you duplicate half your data (and pay to embed it twice).
          </p>
        </div>
      </div>

      {/* 7.5 Token based */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.5 Token-Based Splitting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Models don&apos;t think in characters — they think in <span className="text-white">tokens</span>. Since
          embedding and context limits are measured in tokens, you can size chunks by token count using the model&apos;s
          real tokenizer via <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">from_tiktoken_encoder</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`token_splitter = CharacterTextSplitter.from_tiktoken_encoder(
    encoding_name="cl100k_base",   # the tokenizer used by OpenAI models
    chunk_size=50,                 # 50 tokens, not characters
    chunk_overlap=5
)

token_splitter.split_text(text)`}</pre>
        </div>
      </div>

      {/* 7.6 Splitting documents */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.6 Splitting Documents (Not Just Strings)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Loaders give you <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">Document</code> objects,
          not raw strings. Use <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">split_documents()</code>
          instead of <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded text-xs">split_text()</code> — it chunks
          the content while <span className="text-white">carrying the metadata onto every chunk</span>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.documents import Document

docs = [Document(page_content=text, metadata={"source": "Text on AI"})]

splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=20, separator="")

chunks = splitter.split_documents(docs)

print(chunks[0])   # a Document — each chunk keeps {"source": "Text on AI"}`}</pre>
        </div>
      </div>

      {/* 7.7 RecursiveCharacterTextSplitter */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.7 RecursiveCharacterTextSplitter — Text-Structure Aware</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          CharacterTextSplitter uses <span className="text-white">one</span> separator. The recursive splitter uses an
          <span className="text-white"> ordered list</span> — <code className="text-[#8b5cf6]">[&quot;\\n\\n&quot;, &quot;\\n&quot;, &quot; &quot;, &quot;&quot;]</code>.
          It tries paragraphs first; if a piece is still too big it falls back to newlines, then spaces, then raw
          characters. This keeps chunks as semantically whole as possible — it&apos;s the
          <span className="text-white"> recommended default</span> for general text.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=150,
    chunk_overlap=20
)

chunks = splitter.split_text(example_text)

# same split_documents API for Document lists
docs = [Document(page_content=t) for t in [text, example_text]]
chunks_docs = splitter.split_documents(docs)
print(len(chunks_docs))`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Character vs Recursive</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white">CharacterTextSplitter</span> = one separator, simple and predictable.
            <span className="text-white"> RecursiveCharacterTextSplitter</span> = a fallback ladder of separators that
            respects structure. Reach for the recursive one by default.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Text splitters break loaded documents into smaller chunks so they fit embedding limits, retrieve precisely, and fit the LLM's context window.",
            "CharacterTextSplitter cuts on a single separator up to chunk_size — separator=\"\" splits on raw characters, \" \" on words, \"\\n\\n\" on paragraphs.",
            "chunk_overlap repeats the last N characters into the next chunk so meaning survives the boundary — keep it around 10–20% of chunk_size.",
            "from_tiktoken_encoder sizes chunks by tokens (the unit models actually use) instead of characters.",
            "Use split_documents() for Document objects — it chunks the text while carrying metadata onto every chunk; split_text() is for raw strings.",
            "RecursiveCharacterTextSplitter tries an ordered list of separators (paragraph → line → word → char), keeping chunks structurally whole — the recommended default.",
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
          Length-based splitting is blind to what the text <em>means</em>. Next we go further — splitting by
          <span className="text-white"> document structure</span> (code, JSON, Markdown) and by
          <span className="text-white"> meaning itself</span> with semantic and LLM-based splitters.
        </p>
      </div>
    </RagLessonLayout>
  );
}
