import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass7() {
  return (
    <LangChainLessonLayout slug="class-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 7 — Chains</p>
        <h1 className="text-3xl font-bold text-white">Chains — Building Pipelines</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          This is the component LangChain is <span className="text-white font-medium">named after</span>. Every
          LLM app is built from small steps — ask for a prompt, send it to the model, process the response.
          Doing that by hand (invoke, extract <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">.content</code>,
          invoke again) gets painful fast. <span className="text-white font-medium">Chains</span> wire those steps
          into a <span className="text-white">pipeline</span> where each step&apos;s output auto-feeds the next.
          We&apos;ll build <span className="text-white">sequential</span>, <span className="text-white">parallel</span>,
          and <span className="text-white">conditional</span> chains.
        </p>
      </div>

      {/* What & why */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.1 Why Chains?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A chain is a pipeline: connect the small steps once, then just feed input to the first step and trigger
          it. The output of step 1 automatically becomes the input of step 2, and so on — you don&apos;t manually
          shuttle data between stages. Beyond simple linear flows, chains also let you build
          <span className="text-white"> parallel</span> and <span className="text-white">conditional</span> pipelines,
          which makes very complex applications easy to assemble.
        </p>
      </div>

      {/* LCEL / simple chain */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.2 A Simple Chain (LCEL)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Chains are declared with the <span className="text-white font-medium">pipe operator</span>
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> |</code> — this is
          <span className="text-white"> LangChain Expression Language (LCEL)</span>. Read it left to right: prompt →
          model → parser.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
load_dotenv()

prompt = PromptTemplate(
    template="Generate 5 interesting facts about {topic}",
    input_variables=["topic"],
)
model = ChatOpenAI()
parser = StrOutputParser()

chain = prompt | model | parser          # the pipeline
result = chain.invoke({"topic": "cricket"})
print(result)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          One <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke</code> runs the whole
          thing — no manual <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">.content</code> extraction.
          You can even <span className="text-white">visualize</span> any chain:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`chain.get_graph().print_ascii()
# PromptInput -> PromptTemplate -> ChatOpenAI -> StrOutputParser -> output`}</pre>
        </div>
      </div>

      {/* Sequential */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.3 Sequential Chain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Steps run one after another, each output feeding the next. Here we generate a detailed report on a
          topic, then summarize that report into five points — the model is invoked twice in one chain.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`prompt1 = PromptTemplate(
    template="Generate a detailed report on {topic}",
    input_variables=["topic"],
)
prompt2 = PromptTemplate(
    template="Generate a five pointer summary from the following text \\n {text}",
    input_variables=["text"],
)

model = ChatOpenAI()
parser = StrOutputParser()

chain = prompt1 | model | parser | prompt2 | model | parser
result = chain.invoke({"topic": "Unemployment in India"})
print(result)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">How It Flows</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">parser</code> turns the report into
            a clean string, which slots straight into <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">{`{text}`}</code> of
            the second prompt. The chain can be as long as you like.
          </p>
        </div>
      </div>

      {/* Parallel */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.4 Parallel Chain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Run multiple chains <span className="text-white">at the same time</span>, then merge their results. From
          one document we generate <span className="text-white">notes</span> (with GPT) and a
          <span className="text-white"> quiz</span> (with Claude) in parallel, then merge both with a third model.
          The parallel part is built with <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">RunnableParallel</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic
from langchain.schema.runnable import RunnableParallel

model1 = ChatOpenAI()
model2 = ChatAnthropic(model="claude-3-5-sonnet-20241022")
parser = StrOutputParser()

prompt1 = PromptTemplate(
    template="Generate short and simple notes from the following text \\n {text}",
    input_variables=["text"],
)
prompt2 = PromptTemplate(
    template="Generate 5 short question answers from the following text \\n {text}",
    input_variables=["text"],
)
prompt3 = PromptTemplate(
    template="Merge the provided notes and quiz into a single document \\n "
             "notes -> {notes} and quiz -> {quiz}",
    input_variables=["notes", "quiz"],
)

# run the two chains side by side
parallel_chain = RunnableParallel({
    "notes": prompt1 | model1 | parser,
    "quiz":  prompt2 | model2 | parser,
})

merge_chain = prompt3 | model1 | parser

chain = parallel_chain | merge_chain
result = chain.invoke({"text": text})
print(result)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">RunnableParallel</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            It takes a dict of named chains and executes them concurrently. Its output dict
            (<code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">{`{notes, quiz}`}</code>) becomes the
            input for the merge chain. (We&apos;ll unpack what a &ldquo;runnable&rdquo; really is in the next
            class.)
          </p>
        </div>
      </div>

      {/* Conditional */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.5 Conditional Chain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Pick <span className="text-white">one</span> of several paths based on a condition. We classify a product
          feedback&apos;s sentiment, then reply appropriately — only the matching branch runs. To make the
          condition reliable we first force the classifier output into a fixed shape with
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> PydanticOutputParser</code> (so it is
          always exactly <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">positive</code> or
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> negative</code>), then branch with
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> RunnableBranch</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.output_parsers import PydanticOutputParser
from langchain.schema.runnable import RunnableBranch, RunnableLambda
from pydantic import BaseModel, Field
from typing import Literal

model = ChatOpenAI()
parser = StrOutputParser()

# 1. structured sentiment so the condition is consistent
class Feedback(BaseModel):
    sentiment: Literal["positive", "negative"] = Field(
        description="Give the sentiment of the feedback")

parser2 = PydanticOutputParser(pydantic_object=Feedback)

prompt1 = PromptTemplate(
    template="Classify the sentiment of the following feedback into positive "
             "or negative \\n {feedback} \\n {format_instruction}",
    input_variables=["feedback"],
    partial_variables={"format_instruction": parser2.get_format_instructions()},
)
classifier_chain = prompt1 | model | parser2

# 2. one prompt per branch
prompt2 = PromptTemplate(
    template="Write an appropriate response to this positive feedback \\n {feedback}",
    input_variables=["feedback"])
prompt3 = PromptTemplate(
    template="Write an appropriate response to this negative feedback \\n {feedback}",
    input_variables=["feedback"])

# 3. if / elif / else
branch_chain = RunnableBranch(
    (lambda x: x.sentiment == "positive", prompt2 | model | parser),
    (lambda x: x.sentiment == "negative", prompt3 | model | parser),
    RunnableLambda(lambda x: "could not find sentiment"),   # default
)

chain = classifier_chain | branch_chain
print(chain.invoke({"feedback": "This is a terrible phone"}))`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">RunnableBranch</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              A list of <code className="text-[#22a06b]">(condition, chain)</code> tuples plus a default — LangChain&apos;s
              if / elif / else. Exactly one branch executes (unlike parallel, where all run).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">RunnableLambda</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Wraps a plain Python (lambda) function into a runnable so it can sit inside a chain — used here for
              the default branch.
            </p>
          </div>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "A chain is a pipeline: each step's output auto-feeds the next, so you trigger once instead of wiring steps by hand.",
            "Chains are declared with the pipe operator (prompt | model | parser) — that's LCEL.",
            "Sequential chains run steps in order; you can chain invoke→parse→invoke in a single line.",
            "RunnableParallel runs multiple chains concurrently and returns a dict you can merge downstream.",
            "RunnableBranch builds conditional (if/elif/else) chains where only one path executes.",
            "Use a PydanticOutputParser to make a classifier's output consistent before branching on it.",
            "RunnableLambda turns a plain function into a runnable so it fits inside a chain.",
            "chain.get_graph().print_ascii() visualizes any chain's structure.",
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
          We kept saying <span className="text-white">&ldquo;runnable&rdquo;</span> without defining it. The next
          class decodes the <span className="text-white">Runnable</span> concept — what it is, how LCEL&apos;s pipe
          operator works under the hood, and why every component (prompts, models, parsers) plugs together so
          cleanly.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
