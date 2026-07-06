import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass9() {
  return (
    <LangChainLessonLayout slug="class-9">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 9 — Runnable Primitives &amp; LCEL</p>
        <h1 className="text-3xl font-bold text-white">Runnable Primitives &amp; LCEL</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Last class we learned <span className="text-white font-medium">what</span> a runnable is and rebuilt it from
          scratch. Now we use the real ones. LangChain ships a handful of
          <span className="text-white"> runnable primitives</span> — the building blocks that orchestrate other
          runnables into any workflow you can imagine. Master these five and you can build
          <span className="text-white"> any</span> chain: sequential, parallel, conditional, or a mix. We&apos;ll finish
          with <span className="text-white">LCEL</span>, the pipe-operator shorthand.
        </p>
      </div>

      {/* Two categories */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.1 Two Kinds of Runnables</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every runnable in LangChain falls into one of two buckets:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Task-specific runnables</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The core LangChain components — <code className="text-[#22a06b]">PromptTemplate</code>,
              <code className="text-[#22a06b]"> ChatOpenAI</code>, parsers, retrievers — each with its own purpose,
              converted into runnables so they slot into pipelines.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Runnable primitives</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Structural building blocks whose only job is to <span className="text-white">connect</span> task-specific
              runnables — sequentially, in parallel, or conditionally. This is our
              <code className="text-[#22a06b]"> RunnableConnector</code> from last class, but built-in.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The five primitives: <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableSequence</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableParallel</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnablePassthrough</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableLambda</code>, and
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableBranch</code>.
        </p>
      </div>

      {/* RunnableSequence */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.2 RunnableSequence</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Connects two or more runnables <span className="text-white">sequentially</span> — each output auto-feeds the
          next input. This is the built-in version of the <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableConnector</code> we
          hand-wrote. Here we generate a joke, then explain it — six runnables in one chain.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain.schema.runnable import RunnableSequence
from dotenv import load_dotenv
load_dotenv()

prompt1 = PromptTemplate(template="Write a joke about {topic}",
                         input_variables=["topic"])
prompt2 = PromptTemplate(template="Explain the following joke {text}",
                         input_variables=["text"])
model = ChatOpenAI()
parser = StrOutputParser()

chain = RunnableSequence(prompt1, model, parser, prompt2, model, parser)
print(chain.invoke({"topic": "AI"}))
# -> the explanation of the joke (the joke itself was an intermediate step)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Pass runnables in order</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableSequence(a, b, c, ...)</code> — no
            list, just the runnables in the order you want them to run. There&apos;s no limit on how many.
          </p>
        </div>
      </div>

      {/* RunnableParallel */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.3 RunnableParallel</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Runs multiple runnables <span className="text-white">at the same time</span>, each on the
          <span className="text-white"> same input</span>, returning a <span className="text-white">dict</span> of
          outputs. Classic use: one topic → a tweet <span className="text-white">and</span> a LinkedIn post,
          generated concurrently.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.schema.runnable import RunnableParallel, RunnableSequence

prompt1 = PromptTemplate(template="Generate a tweet about {topic}",
                         input_variables=["topic"])
prompt2 = PromptTemplate(template="Generate a LinkedIn post about {topic}",
                         input_variables=["topic"])
model = ChatOpenAI()
parser = StrOutputParser()

parallel_chain = RunnableParallel({
    "tweet":    RunnableSequence(prompt1, model, parser),
    "linkedin": RunnableSequence(prompt2, model, parser),
})

result = parallel_chain.invoke({"topic": "AI"})
print(result["tweet"])
print(result["linkedin"])`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Same input, dict output</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Both branches receive the identical <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">{`{"topic": "AI"}`}</code> and
            run independently. The output keys (<code className="text-[#22a06b]">tweet</code>,
            <code className="text-[#22a06b]"> linkedin</code>) match the dict keys you defined.
          </p>
        </div>
      </div>

      {/* RunnablePassthrough */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.4 RunnablePassthrough</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A special primitive that returns its input <span className="text-white">unchanged</span> — no processing at
          all. Sounds useless until you need to <span className="text-white">keep an intermediate value</span> in the
          final output. Example: a sequential chain that generates a joke then explains it normally only prints the
          explanation. To surface <span className="text-white">both</span> the joke and its explanation, branch with
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableParallel</code> and let the joke ride through a passthrough.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.schema.runnable import RunnablePassthrough

prompt1 = PromptTemplate(template="Write a joke about {topic}",
                         input_variables=["topic"])
prompt2 = PromptTemplate(template="Explain the following joke {text}",
                         input_variables=["text"])
model = ChatOpenAI()
parser = StrOutputParser()

joke_gen_chain = RunnableSequence(prompt1, model, parser)   # -> the joke

parallel_chain = RunnableParallel({
    "joke":        RunnablePassthrough(),                    # keep the joke as-is
    "explanation": RunnableSequence(prompt2, model, parser),
})

final_chain = RunnableSequence(joke_gen_chain, parallel_chain)
print(final_chain.invoke({"topic": "cricket"}))
# -> {"joke": "...", "explanation": "..."}`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Verify it does nothing</p>
          <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10 mt-1">
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`RunnablePassthrough().invoke(2)                 # -> 2
RunnablePassthrough().invoke({"name": "Nitish"}) # -> {"name": "Nitish"}`}</pre>
          </div>
        </div>
      </div>

      {/* RunnableLambda */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.5 RunnableLambda</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Turns <span className="text-white">any Python function</span> into a runnable, so your own custom logic can
          live inside a chain. Great for pre-processing (strip HTML, remove punctuation, lemmatize) or post-processing.
          Here we generate a joke and also report its word count — a job LLMs are bad at, so we do it in plain Python.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.schema.runnable import RunnableLambda

def word_count(text):
    return len(text.split())

prompt = PromptTemplate(template="Write a joke about {topic}",
                        input_variables=["topic"])
model = ChatOpenAI()
parser = StrOutputParser()

joke_gen_chain = RunnableSequence(prompt, model, parser)

parallel_chain = RunnableParallel({
    "joke":       RunnablePassthrough(),
    "word_count": RunnableLambda(word_count),      # or: RunnableLambda(lambda x: len(x.split()))
})

final_chain = RunnableSequence(joke_gen_chain, parallel_chain)
result = final_chain.invoke({"topic": "AI"})

final = result["joke"] + "\\n word count - " + str(result["word_count"])
print(final)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Two ways to write it</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Wrap a named function <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableLambda(word_count)</code> or
            an inline lambda <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableLambda(lambda x: len(x.split()))</code> —
            hence the name. Once wrapped, it has <code className="text-[#22a06b]">invoke</code> and joins any chain.
          </p>
        </div>
      </div>

      {/* RunnableBranch */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.6 RunnableBranch</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LangChain&apos;s <span className="text-white">if / elif / else</span> — build
          <span className="text-white"> conditional</span> chains where the next step depends on a condition (routing a
          customer email to complaints / refunds / general query, for instance). Here: generate a report, and if it&apos;s
          longer than a word limit, summarize it; otherwise pass it through unchanged.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.schema.runnable import RunnableBranch, RunnablePassthrough

prompt1 = PromptTemplate(template="Write a detailed report on {topic}",
                         input_variables=["topic"])
prompt2 = PromptTemplate(template="Summarize the following text \\n {text}",
                         input_variables=["text"])
model = ChatOpenAI()
parser = StrOutputParser()

report_gen_chain = RunnableSequence(prompt1, model, parser)

branch_chain = RunnableBranch(
    # (condition, runnable-to-run-if-true)
    (lambda x: len(x.split()) > 300, RunnableSequence(prompt2, model, parser)),
    RunnablePassthrough(),                       # default (else) branch
)

final_chain = RunnableSequence(report_gen_chain, branch_chain)
print(final_chain.invoke({"topic": "Russia vs Ukraine"}))`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Syntax</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableBranch</code> takes any number of
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> (condition, runnable)</code> tuples followed by a single
            <span className="text-white"> default</span> runnable at the end. The first condition that returns
            <code className="text-[#22a06b]"> True</code> wins; if none match, the default runs. Use a
            <code className="text-[#22a06b]"> RunnablePassthrough</code> as the default to just forward the input.
          </p>
        </div>
      </div>

      {/* LCEL */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.7 LCEL — The Pipe Operator</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Notice that <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableSequence</code> showed up
          <span className="text-white"> everywhere</span> — inside parallel, passthrough, lambda and branch examples.
          Sequencing is by far the most common operation, so LangChain gave it a cleaner
          <span className="text-white"> declarative</span> syntax: the pipe operator
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> |</code>. This is
          <span className="text-white"> LCEL — LangChain Expression Language</span>.
        </p>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-gray-500 mb-2">Verbose</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`chain = RunnableSequence(prompt, model, parser)`}</pre>
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-[#22a06b]/30">
            <p className="text-xs text-[#22a06b] mb-2">LCEL — same thing</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`chain = prompt | model | parser`}</pre>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Both produce an identical chain. Going forward you&apos;ll almost always use the pipe form. Today LCEL only
          covers <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableSequence</code>; it&apos;s a young feature, and
          declarative shorthands for parallel and branch may arrive in future versions (imagine
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> R1 &amp; R2</code> for parallel execution).
        </p>
      </div>

      {/* Cheat sheet */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">The Five Primitives at a Glance</h2>
        <div className="bg-[#0d1117] rounded-xl border border-white/10 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-4 py-3 font-semibold">Primitive</th>
                <th className="px-4 py-3 font-semibold">What it does</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["RunnableSequence", "Chains runnables in order — output → next input."],
                ["RunnableParallel", "Runs runnables concurrently on the same input; returns a dict."],
                ["RunnablePassthrough", "Returns input unchanged — used to keep intermediate values."],
                ["RunnableLambda", "Wraps any Python function into a runnable for custom logic."],
                ["RunnableBranch", "Conditional if/elif/else — routes to one runnable based on a condition."],
              ].map(([name, desc], i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-mono text-[#22a06b] whitespace-nowrap">{name}</td>
                  <td className="px-4 py-3">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Runnables come in two kinds: task-specific (components with a purpose) and primitives (structural blocks that connect them).",
            "RunnableSequence connects runnables in order — each output becomes the next input. Pass them as arguments, not a list.",
            "RunnableParallel runs runnables concurrently on the same input and returns a dict keyed by the names you give.",
            "RunnablePassthrough returns its input unchanged — the trick for surfacing an intermediate value (like the joke) in the final output.",
            "RunnableLambda wraps any Python function (named or lambda) into a runnable, so custom logic like word counting or pre-processing fits inside a chain.",
            "RunnableBranch is if/elif/else: a list of (condition, runnable) tuples plus a default; the first true condition wins.",
            "RunnableSequence is used everywhere, so LangChain gave it the pipe operator | — that's LCEL, a declarative way to write sequential chains.",
            "prompt | model | parser is identical to RunnableSequence(prompt, model, parser) — prefer the pipe form going forward.",
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
          You now have every tool to compose arbitrary chains. Next we start building
          <span className="text-white"> RAG applications</span> — document loaders, text splitters, embeddings, vector
          stores and retrievers — wiring these runnables into a system that answers questions from your own data.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
