import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass8() {
  return (
    <LangChainLessonLayout slug="class-8">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 8 — Runnables</p>
        <h1 className="text-3xl font-bold text-white">Runnables — The Unit That Powers Every Chain</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Last class we built chains and kept using the word <span className="text-white font-medium">&ldquo;runnable&rdquo;</span> without
          defining it. Chains only work <span className="text-white">because</span> they are built out of runnables. This
          is the most technical — and most rewarding — lesson in the series: understand runnables and you understand
          why every LangChain component (prompts, models, parsers, retrievers) plugs together so cleanly with a single
          pipe operator.
        </p>
      </div>

      {/* Flashback */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.1 A Flashback — Why Runnables Exist</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          To understand runnables you have to understand the problem they were invented to solve. Rewind to late 2022,
          when ChatGPT launched and OpenAI opened its API to the public. The LangChain team realized LLM-powered apps
          were about to explode — every company would want a chatbot, a PDF reader, an AI agent — and set out to build
          a framework that made those apps easy to write.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Problem 1 — Many providers</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              OpenAI wasn&apos;t alone: Anthropic, Google, Mistral and more each shipped their own model with its own
              API that behaved differently. LangChain&apos;s first win was a common set of classes so you could talk to
              <span className="text-white"> any</span> provider&apos;s LLM with minimal code changes.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Problem 2 — Many moving parts</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Talking to the LLM is only <span className="text-white">one</span> step of a real app. A PDF reader also
              loads documents, splits them, embeds chunks, stores vectors, and retrieves context. LangChain built a
              component for each: document loaders, text splitters, embeddings, vector stores, retrievers, parsers,
              memory.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          With these components, an AI engineer could pick them up like building blocks and assemble any LLM app. A
          complex PDF-reader (RAG) app dropped to ~36 lines of code. Life was good.
        </p>
      </div>

      {/* Eureka: chains */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.2 The Eureka Moment — Chains</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The team noticed that across <span className="text-white">every</span> app, some steps were always the same:
          build a prompt, send it to the LLM, get a response. Engineers were wiring that by hand every single time —
          create the template, format it, call <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">predict</code>, read the result.
          So they automated it into a built-in function you just hand a prompt and an LLM: the
          <span className="text-white"> chain</span>. The simplest one — <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">LLMChain</code> —
          formats the prompt and calls the model for you. They kept going: <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RetrievalQAChain</code> for
          RAG, <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">SimpleSequentialChain</code>, SQL chains, API chains, math chains… dozens of them.
        </p>
      </div>

      {/* The problem */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.3 The Trap — Too Many Chains</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The plan backfired. Building a dedicated chain for every use-case created two big problems:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">Bloated codebase</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Dozens of chain classes had to be actively maintained — a heavy, fragile codebase.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">Steep learning curve</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              New engineers couldn&apos;t tell which of 50+ chains to use for which use-case. Learning LangChain got
              hard.
            </p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The root cause</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The components were <span className="text-white font-medium">not standardized</span>. Each was built
            independently with its own interface — you called <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">predict()</code> on
            an LLM, <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">format()</code> on a prompt,
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> get_relevant_documents()</code> on a retriever,
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> parse()</code> on a parser. Because their interfaces didn&apos;t
            line up, connecting any two required hand-written glue code — and every piece of glue became yet another
            chain. If the components had shared one standard interface, they&apos;d snap together with no custom code at
            all. That standard is the <span className="text-white">Runnable</span>.
          </p>
        </div>
      </div>

      {/* What are runnables */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.4 What Is a Runnable?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A runnable is a <span className="text-white font-medium">unit of work</span>: give it an input, it processes
          it, it returns an output. Every runnable in LangChain follows four principles — the same four that
          <span className="text-white"> Lego blocks</span> follow, which is the perfect mental model.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              n: "1",
              t: "A unit of work",
              d: "Each runnable has one purpose — take an input, return an output. (Each Lego block has its own shape and job.)",
            },
            {
              n: "2",
              t: "A common interface",
              d: "Every runnable exposes the same methods: invoke (one input), batch (many inputs), stream (streaming output). (Every Lego block has the same connecting studs.)",
            },
            {
              n: "3",
              t: "They connect",
              d: "Because interfaces match, R1's output automatically becomes R2's input. Chain as many as you like. (Snap blocks together.)",
            },
            {
              n: "4",
              t: "A chain is itself a runnable",
              d: "Connect runnables and the resulting workflow is ALSO a runnable — so you can connect whole chains to other chains. (A built structure is still a Lego block.)",
            },
          ].map(({ n, t, d }) => (
            <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#22a06b]/20 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                  {n}
                </span>
                <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Code: dummy components */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.5 Building It From Scratch — The Components</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The best way to <span className="text-white">feel</span> runnables is to rebuild them by hand. We&apos;ll
          write two dummy components — a fake LLM and a fake prompt template — exactly as LangChain first shipped
          them: independent, with mismatched method names.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`import random

class NakliLLM:                       # dummy LLM component
    def __init__(self):
        print("LLM created")

    def predict(self, prompt):        # note: method is called predict
        response_list = [
            "Delhi is the capital of India",
            "IPL is a cricket league",
            "AI stands for Artificial Intelligence",
        ]
        return {"response": random.choice(response_list)}


class NakliPromptTemplate:            # dummy prompt template component
    def __init__(self, template, input_variables):
        self.template = template
        self.input_variables = input_variables

    def format(self, input_dict):     # note: method is called format
        return self.template.format(**input_dict)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Spot the problem</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            To use the LLM you call <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">predict()</code>;
            to use the prompt you call <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">format()</code>. Different
            names, different shapes — they were never designed to connect.
          </p>
        </div>
      </div>

      {/* Code: manual + brittle chain */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.6 The Brittle Chain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An engineer wires them manually, then LangChain wraps that glue into a chain class:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`class NakliLLMChain:                  # hand-written glue
    def __init__(self, llm, prompt):
        self.llm = llm
        self.prompt = prompt

    def run(self, input_dict):
        final_prompt = self.prompt.format(input_dict)   # call format
        result = self.llm.predict(final_prompt)         # call predict
        return result["response"]

template = NakliPromptTemplate(
    template="Write a {length} poem about {topic}",
    input_variables=["length", "topic"],
)
llm = NakliLLM()
chain = NakliLLMChain(llm, template)
print(chain.run({"length": "short", "topic": "India"}))`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Why this is a dead end</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            This chain is <span className="text-white">not flexible</span>. Want a two-step flow (generate a joke,
            then explain it — two LLM calls)? You can&apos;t, without rewriting <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">run()</code>.
            Every new use-case needs new custom code. The fix: <span className="text-white">standardize the
            components first</span>.
          </p>
        </div>
      </div>

      {/* Code: standardize with abstract Runnable */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.7 The Fix — An Abstract Runnable</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Use OOP <span className="text-white">abstraction</span>. Define an abstract
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> Runnable</code> class with one abstract method —
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> invoke</code> — and make every component inherit from it. Now
          each component is <span className="text-white">forced</span> to implement the same
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> invoke</code>, giving them one common interface.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from abc import ABC, abstractmethod

class Runnable(ABC):
    @abstractmethod
    def invoke(self, input_data):
        pass


class NakliLLM(Runnable):
    def __init__(self):
        print("LLM created")

    def invoke(self, prompt):                  # standardized entry point
        response_list = [
            "Delhi is the capital of India",
            "IPL is a cricket league",
            "AI stands for Artificial Intelligence",
        ]
        return {"response": random.choice(response_list)}

    def predict(self, prompt):                 # keep for backward-compat
        print("WARNING: predict is deprecated, use invoke instead")
        return self.invoke(prompt)


class NakliPromptTemplate(Runnable):
    def __init__(self, template, input_variables):
        self.template = template
        self.input_variables = input_variables

    def invoke(self, input_dict):              # standardized entry point
        return self.template.format(**input_dict)

    def format(self, input_dict):              # keep for backward-compat
        print("WARNING: format is deprecated, use invoke instead")
        return self.invoke(input_dict)`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">abstractmethod</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Any class that inherits <code className="text-[#22a06b]">Runnable</code> but forgets to implement
              <code className="text-[#22a06b]"> invoke</code> can&apos;t even be instantiated — Python throws
              <span className="text-white"> &ldquo;Can&apos;t instantiate abstract class&rdquo;</span>. That&apos;s
              how you enforce a shared interface.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Don&apos;t delete the old methods</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Old code still calls <code className="text-[#22a06b]">predict</code>/<code className="text-[#22a06b]">format</code>. Keep
              them, but print a <span className="text-white">deprecation warning</span> that points users to
              <code className="text-[#22a06b]"> invoke</code>. Break nothing.
            </p>
          </div>
        </div>
      </div>

      {/* Code: RunnableConnector */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.8 Composing — The RunnableConnector</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now that every component speaks <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke</code>, one tiny
          connector class chains <span className="text-white">any</span> number of them — no per-use-case custom code
          ever again. It just loops, feeding each step&apos;s output into the next.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`class RunnableConnector(Runnable):
    def __init__(self, runnable_list):
        self.runnable_list = runnable_list       # a list of components

    def invoke(self, input_data):
        for runnable in self.runnable_list:
            input_data = runnable.invoke(input_data)   # output -> next input
        return input_data


# an optional parser component, also a runnable
class NakliStrOutputParser(Runnable):
    def __init__(self):
        pass

    def invoke(self, input_data):
        return input_data["response"]


template = NakliPromptTemplate(
    template="Write a {length} poem about {topic}",
    input_variables=["length", "topic"],
)
llm = NakliLLM()
parser = NakliStrOutputParser()

chain = RunnableConnector([template, llm, parser])
print(chain.invoke({"length": "long", "topic": "India"}))
# -> a plain string, because the parser pulled "response" out`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The whole trick</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The loop stores each step&apos;s result back into <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">input_data</code>,
            so step&nbsp;N&apos;s output is step&nbsp;N+1&apos;s input. Add a parser? Just append it to the list. The
            chain can be arbitrarily long — this is exactly what LCEL&apos;s <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">|</code> operator
            does under the hood.
          </p>
        </div>
      </div>

      {/* Code: chain of chains */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.9 Principle 4 — Chaining Chains</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Because <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableConnector</code> is itself a Runnable, its
          output is a runnable too — so you can connect whole chains together. Here: chain 1 writes a joke, chain 2
          explains it, and a final connector joins both.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`template1 = NakliPromptTemplate(
    template="Write a joke about {topic}",
    input_variables=["topic"],
)
template2 = NakliPromptTemplate(
    template="Explain the following joke {response}",
    input_variables=["response"],
)
llm = NakliLLM()
parser = NakliStrOutputParser()

chain1 = RunnableConnector([template1, llm])          # topic -> joke
chain2 = RunnableConnector([template2, llm, parser])  # joke  -> explanation

final_chain = RunnableConnector([chain1, chain2])     # chain of chains!
print(final_chain.invoke({"topic": "cricket"}))`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          One <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke</code> runs the entire two-chain workflow. That
          is the payoff of standardization: components → chains → chains-of-chains, all with the same interface.
        </p>
      </div>

      {/* Real LangChain */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.10 This Is Real LangChain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Open the actual source and you&apos;ll find the same design. Trace <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">ChatOpenAI</code>&apos;s
          inheritance and it bottoms out at an abstract <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">Runnable</code> with an
          abstract <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke</code> — exactly our toy class:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`ChatOpenAI
  └─ BaseChatOpenAI
       └─ BaseChatModel
            └─ BaseLanguageModel
                 └─ RunnableSerializable
                      └─ Runnable        # abstract, defines invoke()`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every prompt, model, parser, and retriever ultimately inherits from
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> Runnable</code> and implements
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> invoke</code>. That single shared contract is why
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> prompt | model | parser</code> just works.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Runnables exist to fix a real problem: LangChain's early components were unstandardized, so connecting them needed hand-written glue — and every piece of glue became yet another chain.",
            "Too many chains bloated the codebase and made LangChain hard to learn. The fix was to standardize the components themselves.",
            "A runnable is a unit of work: input in, output out — like a Lego block.",
            "Four principles: (1) a unit of work, (2) a common interface, (3) they connect, (4) a chain of runnables is itself a runnable.",
            "The common interface is invoke (plus batch and stream). An abstract Runnable base class with @abstractmethod forces every component to implement it.",
            "Once standardized, one small connector loops through components, feeding each output into the next input — no custom code per use-case.",
            "Because a chain is a runnable, you can compose chains out of chains to any depth.",
            "This isn't a toy: real ChatOpenAI inherits from Runnable and implements invoke — which is exactly why the LCEL pipe operator works.",
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
          We rebuilt runnables from scratch to understand the idea. Next we&apos;ll use the
          <span className="text-white"> actual runnable primitives</span> LangChain ships —
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableSequence</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableParallel</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableBranch</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableLambda</code>,
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnablePassthrough</code> — and how they map to the
          pipe operator you already used.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
