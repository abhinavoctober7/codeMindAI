import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass6() {
  return (
    <LangChainLessonLayout slug="class-6">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 6 — Output Parsers</p>
        <h1 className="text-3xl font-bold text-white">Output Parsers — Structure From Any Model</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Last class, <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">with_structured_output()</code> only
          worked on models that <span className="text-white">can</span> produce structured output.
          <span className="text-white font-medium"> Output parsers</span> are LangChain classes that convert raw
          text responses into structured formats (JSON, CSV, Pydantic) for <span className="text-white">any</span> model —
          including open-source ones that can&apos;t do it natively. We&apos;ll cover the four most-used parsers.
        </p>
      </div>

      {/* The four */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.1 The Four Parsers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            ["StrOutputParser", "Pulls the plain string out of the response."],
            ["JsonOutputParser", "Forces JSON — quick, but can't enforce a schema."],
            ["StructuredOutputParser", "JSON that follows a schema you define (no validation)."],
            ["PydanticOutputParser", "Schema + validation — the most powerful."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Parsers work with both kinds of models — those that can and can&apos;t do structured output natively.
          (LangChain has more — CSV, list, datetime, enum, markdown, the auto-fixing parser — but these four
          cover most use cases.)
        </p>
      </div>

      {/* StrOutputParser */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.2 StrOutputParser</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The simplest parser: it takes the response and returns just the string — saving you the
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> result.content</code> dance. Its real
          value shows up in <span className="text-white font-medium">chains</span>. Consider a two-step flow:
          generate a detailed report on a topic, then summarize that report in five lines. Without a parser you&apos;d
          invoke, extract <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">.content</code>, invoke
          again. With it, the whole thing becomes a single pipeline.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

template1 = PromptTemplate(
    template="Write a detailed report on {topic}",
    input_variables=["topic"],
)
template2 = PromptTemplate(
    template="Write a five line summary on the following text. \\n {text}",
    input_variables=["text"],
)

parser = StrOutputParser()

# the whole flow as one chain
chain = template1 | model | parser | template2 | model | parser
result = chain.invoke({"topic": "black hole"})
print(result)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Why It Matters</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The parser strips the metadata between steps and hands the next step a clean string — that&apos;s what
            makes a single end-to-end chain possible. Works with OpenAI, Hugging Face, or a local model alike.
          </p>
        </div>
      </div>

      {/* JsonOutputParser */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.3 JsonOutputParser</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Forces the model to reply in JSON — the quickest way to get a dict back. You inject its
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> get_format_instructions()</code> into
          the prompt as a <span className="text-white">partial variable</span> (filled before run time, not by the
          user).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.output_parsers import JsonOutputParser

parser = JsonOutputParser()

template = PromptTemplate(
    template="Give me 5 facts about {topic} \\n {format_instructions}",
    input_variables=["topic"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

# clean, chained version — parse happens automatically
chain = template | model | parser
result = chain.invoke({"topic": "black hole"})
print(result, type(result))    # -> dict`}</pre>
        </div>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">The Big Flaw</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">JsonOutputParser</code> can&apos;t
            <span className="text-white"> enforce a schema</span>. Ask for 5 facts and the model decides the shape
            — maybe one key with a list, when you wanted <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">fact_1, fact_2, fact_3</code>.
            No guarantee. For that you need the next parser.
          </p>
        </div>
      </div>

      {/* StructuredOutputParser */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.4 StructuredOutputParser</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Extracts JSON that follows a <span className="text-white font-medium">predefined schema</span>, built
          from <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">ResponseSchema</code> objects.
          Note the import path: it lives in the main <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">langchain</code> package,
          not <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">langchain_core</code> (core holds
          only the most reusable components).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain.output_parsers import StructuredOutputParser, ResponseSchema

schema = [
    ResponseSchema(name="fact_1", description="Fact 1 about the topic"),
    ResponseSchema(name="fact_2", description="Fact 2 about the topic"),
    ResponseSchema(name="fact_3", description="Fact 3 about the topic"),
]
parser = StructuredOutputParser.from_response_schemas(schema)

template = PromptTemplate(
    template="Give 3 facts about {topic} \\n {format_instructions}",
    input_variables=["topic"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

chain = template | model | parser
print(chain.invoke({"topic": "black hole"}))   # follows the schema`}</pre>
        </div>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">Its Limitation</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            It enforces the <span className="text-white">structure</span> but does <span className="text-white">no
            data validation</span>. Declare <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">age</code> as
            an int and the model returns <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">&quot;35 years&quot;</code> —
            you can&apos;t stop it. That&apos;s why the fourth parser exists.
          </p>
        </div>
      </div>

      {/* PydanticOutputParser */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.5 PydanticOutputParser</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The best of all: a Pydantic model as the schema, so you get <span className="text-white">structure
          enforcement <em>and</em> data validation</span> — strict types, constraints, type coercion, and clean
          integration. This is the one you&apos;ll usually reach for.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field

class Person(BaseModel):
    name: str = Field(description="Name of the person")
    age: int = Field(gt=18, description="Age of the person")
    city: str = Field(description="City the person belongs to")

parser = PydanticOutputParser(pydantic_object=Person)

template = PromptTemplate(
    template="Generate the name, age and city of a fictional {place} person "
             "\\n {format_instructions}",
    input_variables=["place"],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

chain = template | model | parser
result = chain.invoke({"place": "Sri Lankan"})
print(result)        # a validated Person object`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Under the Hood</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">get_format_instructions()</code> injects
            a full JSON-Schema description of <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">Person</code> into
            the prompt (&ldquo;the output should be formatted as a JSON instance that conforms to…&rdquo;). The
            model returns matching JSON, and the parser validates it against the Pydantic model — rejecting an
            age of 18 or below.
          </p>
        </div>
      </div>

      {/* Comparison */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.6 Choosing a Parser</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">Parser</th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">Returns</th>
                <th className="text-left py-2 px-3 text-[#22a06b] font-semibold">Schema</th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">Validation</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["StrOutputParser", "string", "—", "—"],
                ["JsonOutputParser", "dict (JSON)", "No", "No"],
                ["StructuredOutputParser", "dict (JSON)", "Yes", "No"],
                ["PydanticOutputParser", "Pydantic object", "Yes", "Yes"],
              ].map(([a, b, c, d]) => (
                <tr key={a} className="border-b border-white/5">
                  <td className="py-2 px-3 font-medium text-white">{a}</td>
                  <td className="py-2 px-3">{b}</td>
                  <td className="py-2 px-3">{c}</td>
                  <td className="py-2 px-3">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          All four are <span className="text-white">model-agnostic</span> — the same code runs on OpenAI, Claude,
          Gemini, or a Hugging Face open-source model. (Note: free Hugging Face Inference APIs can be unreliable
          and time out; that&apos;s an API issue, not a code one.)
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Output parsers turn raw text responses into structured formats for ANY model, including ones that can't do structured output natively.",
            "StrOutputParser returns the plain string — its real power is enabling single end-to-end chains.",
            "JsonOutputParser forces JSON quickly but cannot enforce a schema.",
            "StructuredOutputParser enforces a schema (via ResponseSchema) but does no data validation; it lives in langchain, not langchain_core.",
            "PydanticOutputParser gives both schema enforcement and validation — the usual go-to.",
            "Inject parser.get_format_instructions() into the prompt as a partial variable.",
            "The pipe syntax (template | model | parser) auto-calls parse() and keeps code clean.",
            "All parsers are model-agnostic — same code across OpenAI, Claude, Gemini, and open-source models.",
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
    </LangChainLessonLayout>
  );
}
