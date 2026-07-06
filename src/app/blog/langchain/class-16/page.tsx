import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass16() {
  return (
    <LangChainLessonLayout slug="class-16">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 16 — Tools</p>
        <h1 className="text-3xl font-bold text-white">Tools — Giving an LLM Hands &amp; Legs</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          This starts Part 3 of the playlist: <span className="text-white">Agents</span>. An LLM can think and speak, but
          it can&apos;t <span className="text-white">do</span> anything. A <span className="text-white">tool</span> is a
          Python function packaged so an LLM can understand and call it — giving the model hands and legs. This class
          covers built-in tools, three ways to build custom tools, and toolkits. (Connecting tools to an LLM — tool
          calling — is the next class.)
        </p>
      </div>

      {/* Why tools */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.1 Why Tools Exist</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An LLM has two core capabilities: it can <span className="text-white">think</span> (reasoning) and
          <span className="text-white"> speak</span> (language generation). That&apos;s it. Ask it the best way from
          Delhi to Mumbai and it reasons out flight/train/bus — but ask it to actually
          <span className="text-white"> book</span> the train and it can&apos;t. It&apos;s like a human body with a
          brain and a mouth, but no hands or legs.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Things LLMs can&apos;t do alone</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Fetch live weather, do reliable math on complex problems, call external APIs (e.g. tweet on your behalf), run
            code, or interact with databases. A <span className="text-white">tool</span> is a mechanism that gives the
            LLM these abilities: package a function that performs a task, connect it to the LLM, and the model can now
            execute that task. The more tools you add, the more it can do.
          </p>
        </div>
      </div>

      {/* Tools & agents */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.2 How Tools Relate to Agents</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An <span className="text-white">AI agent</span> is an LLM-powered system that can autonomously think, decide,
          and take actions using external tools/APIs to achieve a goal. It has two capabilities:
          <span className="text-white"> reasoning &amp; decision-making</span> (from the LLM) and
          <span className="text-white"> taking action</span> (powered by tools). In short:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Agent  =  LLM (reasoning)  +  Tools (action)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          That&apos;s why tools are as important as LLMs for building agents. LangChain gives you two kinds:
          <span className="text-white"> built-in tools</span> (pre-made for popular use cases) and
          <span className="text-white"> custom tools</span> (that you write yourself).
        </p>
      </div>

      {/* Built-in tools */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.3 Built-in Tools</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Production-ready tools LangChain already provides for common needs — you just import and use them, no logic to
          write. Examples: <span className="text-white">DuckDuckGoSearchRun</span> (web search),
          <span className="text-white"> WikipediaQueryRun</span>, <span className="text-white">PythonREPLTool</span> (run
          Python), <span className="text-white">ShellTool</span> (shell commands),
          <span className="text-white"> RequestsGetTool</span>, Gmail, Slack, SQL database tools, and more.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.tools import DuckDuckGoSearchRun

search_tool = DuckDuckGoSearchRun()

# tools are Runnables too -> they have .invoke()
results = search_tool.invoke("IPL news today")
print(results)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">ShellTool — powerful but risky</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">ShellTool</code> (needs
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> langchain_experimental</code>) runs
            commands like <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">whoami</code> or
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> ls</code> on the host machine. Be
            careful in production — it can delete files. Browse the full built-in tool list in LangChain&apos;s docs;
            each entry has a description and working code.
          </p>
        </div>
      </div>

      {/* Custom tool: @tool */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.4 Custom Tool — the @tool Decorator</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When no built-in tool fits your use case (your own API, business logic, or database), build a custom one. The
          simplest way is a <span className="text-white">three-step</span> process:
        </p>
        <ol className="flex flex-col gap-2">
          {[
            "Write a normal Python function with the logic — and add a docstring (the LLM reads it to understand what the tool does).",
            "Add type hints to the arguments and return value (so the LLM knows what to pass in and expect back).",
            "Put the @tool decorator on top — this turns the function into a tool the LLM can communicate with.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#22a06b]/20 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.tools import tool

@tool
def multiply(a: int, b: int) -> int:
    """Multiply two numbers."""     # docstring = tool description
    return a * b

# it's a Runnable -> invoke with a dict of named inputs
print(multiply.invoke({"a": 3, "b": 5}))   # 15

# every tool exposes these attributes
print(multiply.name)          # "multiply"
print(multiply.description)   # "Multiply two numbers."
print(multiply.args)          # {'a': {'type': 'integer'}, 'b': {'type': 'integer'}}`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The LLM sees a schema, not code</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            When you connect a tool to an LLM, the model doesn&apos;t see the function logic — it sees the tool&apos;s
            <span className="text-white"> JSON schema</span> (name, description, argument properties/types). Inspect it
            with <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">multiply.args_schema.model_json_schema()</code>.
            That&apos;s why the docstring and type hints matter — they become the schema the LLM reads.
          </p>
        </div>
      </div>

      {/* Custom tool: StructuredTool + Pydantic */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.5 Custom Tool — StructuredTool + Pydantic</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A stricter way to build a tool. The <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">@tool</code>
          approach enforces input types loosely via type hints; with
          <span className="text-white"> StructuredTool</span> you enforce a strict input schema using a
          <span className="text-white"> Pydantic model</span>. Better for production-ready agents.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.tools import StructuredTool
from pydantic import BaseModel, Field

class MultiplyInput(BaseModel):
    a: int = Field(required=True, description="The first number to multiply")
    b: int = Field(required=True, description="The second number to multiply")

def multiply_func(a: int, b: int) -> int:
    return a * b

multiply = StructuredTool.from_function(
    func=multiply_func,
    name="multiply",
    description="Multiply two numbers",
    args_schema=MultiplyInput,       # strict schema via Pydantic
)

print(multiply.invoke({"a": 3, "b": 5}))   # 15`}</pre>
        </div>
      </div>

      {/* Custom tool: BaseTool */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.6 Custom Tool — Subclassing BaseTool</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white">BaseTool</span> is the abstract base class every tool inherits from — it defines
          the core structure any tool must follow. Both <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">@tool</code>
          and <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">StructuredTool</code> are built on top
          of it. Subclass it directly for the deepest customization.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.tools import BaseTool
from pydantic import BaseModel, Field
from typing import Type

class MultiplyInput(BaseModel):
    a: int = Field(required=True, description="The first number")
    b: int = Field(required=True, description="The second number")

class MultiplyTool(BaseTool):
    name: str = "multiply"
    description: str = "Multiply two numbers"
    args_schema: Type[BaseModel] = MultiplyInput

    def _run(self, a: int, b: int) -> int:   # name MUST be _run
        return a * b

multiply = MultiplyTool()
print(multiply.invoke({"a": 3, "b": 5}))   # 15`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Which one to use?</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            For 80–90% of cases, the <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">@tool</code>
            decorator is enough. Use <span className="text-white">StructuredTool</span> for stricter, production-ready
            schemas, and <span className="text-white">BaseTool</span> for deep customization — like an
            <span className="text-white"> async</span> version of your tool for handling concurrency (only possible via
            BaseTool).
          </p>
        </div>
      </div>

      {/* Toolkits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.7 Toolkits</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white">toolkit</span> is a collection of related tools serving a common purpose,
          packaged together for convenience and <span className="text-white">reusability</span>. E.g. a Google Drive
          toolkit bundling upload, search, and read tools. Build one anywhere and reuse it across applications.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.tools import tool

@tool
def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b

@tool
def multiply(a: int, b: int) -> int:
    """Multiply two numbers."""
    return a * b

class MathToolkit:
    def get_tools(self):
        return [add, multiply]

toolkit = MathToolkit()
tools = toolkit.get_tools()
for t in tools:
    print(t.name, "->", t.description)`}</pre>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "An LLM can only think and speak; a tool is a function packaged so the LLM can call it — giving the model hands and legs.",
            "Agent = LLM (reasoning & decision-making) + Tools (action). That's why tools are essential for building agents.",
            "Built-in tools (DuckDuckGoSearchRun, WikipediaQueryRun, PythonREPLTool, ShellTool, etc.) need no logic — just import and .invoke(). Tools are Runnables.",
            "Build a custom tool the simple way with @tool: write the function + docstring, add type hints, decorate with @tool.",
            "Every tool exposes .name, .description, and .args; the LLM sees the tool's JSON schema (from docstring + type hints), not the code.",
            "StructuredTool + a Pydantic args_schema enforces stricter input validation — better for production.",
            "BaseTool is the abstract base all tools inherit from; subclass it (implement _run) for deep customization like async tools.",
            "A toolkit groups related tools (a get_tools() method) for convenience and reusability.",
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
          We can build tools, but haven&apos;t connected them to an LLM yet. Next up:
          <span className="text-white"> tool calling</span> — how an LLM decides which tool to use and calls it with the
          right arguments.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
