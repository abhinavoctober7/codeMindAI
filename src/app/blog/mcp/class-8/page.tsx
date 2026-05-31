import MCPLessonLayout from "@/components/MCPLessonLayout";

export default function MCPClass8() {
  return (
    <MCPLessonLayout slug="class-8">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Class 8 — The How (Part 4)</p>
        <h1 className="text-3xl font-bold text-white">Building an MCP Client</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Every server we have built so far was used through Claude Desktop — which has its own
          built-in MCP client. But what if you are building your own chatbot? In this class
          we build a{" "}
          <span className="text-white font-medium">custom MCP client from scratch</span> — a
          Streamlit-based chatbot wired to both a local and a remote MCP server simultaneously.
        </p>
      </div>

      {/* 8.1 Roadmap — where we are */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.1 Where We Are in the Roadmap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {[
            { num: "Part 1", title: "Experience MCP", sub: "Class 5 ✓", done: true },
            { num: "Part 2", title: "Build Local Server", sub: "Class 6 ✓", done: true },
            { num: "Part 3", title: "Build Remote Server", sub: "Class 7 ✓", done: true },
            { num: "Part 4", title: "Build Your Client", sub: "This class ← you are here", active: true, done: false },
          ].map((item) => (
            <div
              key={item.num}
              className={`rounded-xl p-3 border flex flex-col gap-1 ${
                item.active ? "bg-[#6366f1]/10 border-[#6366f1]/40" :
                item.done ? "bg-white/5 border-white/5 opacity-60" :
                "bg-white/5 border-white/10"
              }`}
            >
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full w-fit ${
                item.active ? "bg-[#6366f1]/30 text-[#6366f1]" :
                item.done ? "bg-green-500/20 text-green-400" :
                "bg-white/10 text-gray-400"
              }`}>{item.num}</span>
              <p className={`text-sm font-semibold ${item.active ? "text-white" : "text-gray-400"}`}>{item.title}</p>
              <p className="text-xs text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          This is the final class of the HOW section — and the final piece that makes MCP fully
          yours. After this you can build a chatbot that connects to any MCP server in the world,
          including ones you built in Classes 6 and 7.
        </p>
      </div>

      {/* 8.2 Library choice */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.2 Choosing a Library: Three Options</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          There are three ways to build an MCP client in Python:
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              name: "Official MCP SDK",
              install: "pip install mcp[cli]",
              desc: "Low-level. Full protocol access but verbose — you handle transport, sessions, and message parsing manually.",
              chosen: false,
            },
            {
              name: "FastMCP client API",
              install: "pip install fastmcp",
              desc: "Higher-level than the SDK. The same library we used to build servers also exposes a client interface.",
              chosen: false,
            },
            {
              name: "langchain-mcp-adapters",
              install: "pip install langchain-mcp-adapters",
              desc: "A lightweight wrapper that makes MCP tools compatible with LangChain and LangGraph. Easiest to use and integrates with the LangChain ecosystem we already know.",
              chosen: true,
            },
          ].map((item) => (
            <div
              key={item.name}
              className={`rounded-xl p-4 border flex flex-col gap-2 ${
                item.chosen ? "bg-[#6366f1]/10 border-[#6366f1]/30" : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                {item.chosen && (
                  <span className="text-xs font-bold text-[#6366f1] bg-[#6366f1]/20 border border-[#6366f1]/30 px-2 py-0.5 rounded-full">
                    Used in this course ✓
                  </span>
                )}
              </div>
              <code className="text-xs text-[#6366f1] font-mono">{item.install}</code>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-1">Why langchain-mcp-adapters?</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Two reasons: (1) it is the simplest way to build an MCP client — minimal boilerplate,
            clean API. (2) Since we are already in the LangChain / LangGraph universe, this
            library integrates seamlessly with everything we already know.
            Once you understand the concept, switching to the other two libraries is trivial.
          </p>
        </div>
      </div>

      {/* 8.3 What we're building */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.3 What We&apos;re Building</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A Streamlit-based chatbot that can do normal conversation AND access tools from
          multiple MCP servers simultaneously.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Normal chat", desc: "Ask anything — the LLM answers directly when no tool is needed" },
            { label: "Math tools", desc: "Local MCP server — add, subtract, multiply, divide, power, modulus" },
            { label: "Expense tools", desc: "Remote MCP server — add expense, list expenses, summarize by category" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#6366f1]">{item.label}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">The variety in server types</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The Math server is a <span className="text-white">local</span> MCP server (STDIO
            transport — runs on your machine). The Expense Tracker is a{" "}
            <span className="text-white">remote</span> MCP server (Streamable HTTP — hosted on
            FastMCP Cloud). Both connect through the same{" "}
            <code className="text-[#6366f1]">MultiServerMCPClient</code> interface.
          </p>
        </div>
      </div>

      {/* 8.4 Project setup */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.4 Project Setup</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Create project and install dependencies</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Step 1: Install uv if you haven't already
pip install uv

# Step 2: Create project folder and open in VS Code
mkdir ~/Desktop/mcp-client
# Open in VS Code

# Step 3: Initialize uv
uv init .

# Step 4: Install dependencies
uv add langchain langchain-openai langchain-mcp-adapters python-dotenv streamlit

# Step 5: Create .env file with your OpenAI API key
# OPENAI_API_KEY=sk-...`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">Dependencies explained</p>
          <div className="flex flex-col gap-1.5 text-xs text-gray-400">
            <p><code className="text-[#6366f1]">langchain</code> — core LangChain framework</p>
            <p><code className="text-[#6366f1]">langchain-openai</code> — ChatOpenAI LLM integration</p>
            <p><code className="text-[#6366f1]">langchain-mcp-adapters</code> — MultiServerMCPClient for MCP connectivity</p>
            <p><code className="text-[#6366f1]">python-dotenv</code> — load OpenAI API key from .env</p>
            <p><code className="text-[#6366f1]">streamlit</code> — GUI for the final chatbot</p>
          </div>
        </div>
      </div>

      {/* 8.5 Step 1: Connect to local server */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.5 Step 1 — Connect to a Local MCP Server</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Math server is already on your Desktop (from Class 6 setup). We will connect our
          client to it and fetch its tools.
        </p>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-1">Important: async/await</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            All MCP client code uses Python&apos;s <code className="text-white">async/await</code> pattern —
            every function that touches the network or a subprocess must be{" "}
            <code className="text-white">async def</code>. If you are not familiar with
            async/await, watch a quick 10-minute explainer before reading this code.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">client1.py — skeleton + server config + fetch tools</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`import asyncio
from langchain_mcp_adapters.client import MultiServerMCPClient

# Server configuration — same format as claude_desktop_config.json
servers = {
    "math": {
        "transport": "stdio",
        "command": "/Users/yourname/.local/bin/uv",   # absolute path from 'which uv'
        "args": ["run", "fastmcp", "run",
                 "/Users/yourname/Desktop/mcp-math-server/main.py"]
    }
}

async def main():
    async with MultiServerMCPClient(servers) as client:
        # Fetch all tools from all connected servers
        tools = await client.get_tools()
        print(tools)   # list of StructuredTool objects

asyncio.run(main())`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Familiar config format</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            This is the exact same configuration format as <code className="text-white">claude_desktop_config.json</code> —
            which you used in Class 5 to connect servers to Claude Desktop.{" "}
            <code className="text-white">transport: &quot;stdio&quot;</code> = local server.
            The <code className="text-white">command</code> + <code className="text-white">args</code>{" "}
            tell the client how to launch the server subprocess.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Running the above prints the tool list</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Output (abbreviated):
[StructuredTool(name='add', description='Add two numbers'),
 StructuredTool(name='subtract', description='Subtract b from a'),
 StructuredTool(name='multiply', description='Multiply two numbers'),
 StructuredTool(name='divide', description='Divide a by b'),
 StructuredTool(name='power', description='Raise a to the power of b'),
 StructuredTool(name='modulus', description='Remainder of a divided by b')]`}</pre>
        </div>
      </div>

      {/* 8.6 Step 2: name_tools dict + bind LLM */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.6 Step 2 — Build name_tools Dict and Bind LLM</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          We convert the tools list into a dictionary keyed by tool name — so we can look up
          any tool by name in O(1) when the LLM tells us which one to call. Then we create an
          LLM with those tools bound to it.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

load_dotenv()

async def main():
    async with MultiServerMCPClient(servers) as client:
        tools = await client.get_tools()

        # Build name → tool lookup dict
        name_tools = {tool.name: tool for tool in tools}
        # {"add": <StructuredTool>, "multiply": <StructuredTool>, ...}

        # Create LLM and bind all tools to it
        llm = ChatOpenAI(model="gpt-4o")
        llm_with_tools = llm.bind_tools(tools)

        # Ask a question that requires a tool
        prompt = "Using the math tool, what is the product of 12 and 15?"
        response = await llm_with_tools.ainvoke(prompt)
        print(response)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-1">What bind_tools does</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            <code className="text-[#6366f1]">llm.bind_tools(tools)</code> attaches the tool
            schemas to the LLM. Now when you invoke the LLM with a prompt, it can respond
            with a <span className="text-white">tool call</span> (the name + arguments to use)
            instead of plain text — when it determines a tool is the right action.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">The LLM response when it decides to use a tool</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# response.content  → "" (empty — tool call, not text)
# response.tool_calls → [{"name": "multiply", "args": {"a": 12, "b": 15}, "id": "call_..."}]`}</pre>
        </div>
      </div>

      {/* 8.7 Step 3: Extract + invoke tool */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.7 Step 3 — Extract the Tool Call and Invoke It</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When the LLM returns a tool call, we need to (1) identify which tool to run and with
          what arguments, then (2) actually run it against the MCP server.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# The LLM told us to call the "multiply" tool with a=12, b=15
# Now we actually invoke it:

selected_tool      = response.tool_calls[0]["name"]   # "multiply"
selected_tool_args = response.tool_calls[0]["args"]   # {"a": 12, "b": 15}
selected_tool_id   = response.tool_calls[0]["id"]     # "call_abc123"

tool_result = await name_tools[selected_tool].ainvoke(selected_tool_args)
# tool_result → 180`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Why we need name_tools</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The LLM gives us a <em>string</em> — the tool&apos;s name. We need the actual tool
            object to call <code className="text-white">.ainvoke()</code> on it.
            The <code className="text-white">name_tools</code> dict is the bridge between
            the LLM&apos;s string output and the callable tool object.
          </p>
        </div>
      </div>

      {/* 8.8 Step 4: Return result to LLM */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.8 Step 4 — Return the Result to the LLM</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The tool ran and returned a result. Now we need to tell the LLM what the tool found,
          so it can formulate a final answer. We do this by re-invoking the LLM with the full
          conversation history.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.messages import ToolMessage

# Wrap the tool result in a ToolMessage
tool_message = ToolMessage(
    content=tool_result,
    tool_call_id=selected_tool_id   # must match the id from the LLM response
)

# Re-invoke LLM with full history:
# [original prompt] + [LLM's tool-call response] + [tool's result]
final_response = await llm_with_tools.ainvoke([prompt, response, tool_message])
print(final_response.content)
# → "The product of 12 and 15 is 180."`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">Why pass the full history?</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The LLM has no memory between calls. Sending the full sequence — original prompt →
            LLM&apos;s tool decision → tool&apos;s result — gives it all the context it needs
            to write a natural-language answer. Omit any piece and the LLM will not know
            what happened.
          </p>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">Complete single-tool flow</p>
          <div className="flex flex-col gap-1.5 text-xs text-gray-400">
            <p>1. Connect client → server, fetch tools</p>
            <p>2. Bind tools to LLM</p>
            <p>3. Send prompt → LLM returns tool call (name + args + id)</p>
            <p>4. Look up tool by name, call <code className="text-[#6366f1]">.ainvoke(args)</code></p>
            <p>5. Wrap result in <code className="text-[#6366f1]">ToolMessage(content, tool_call_id)</code></p>
            <p>6. Re-invoke LLM with [prompt, response, tool_message] → get final answer</p>
          </div>
        </div>
      </div>

      {/* 8.9 Handle no-tool case */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.9 Handling No-Tool Responses</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Not every question needs a tool. If you ask &quot;What is the capital of India?&quot; the LLM
          answers directly — <code className="text-[#6366f1]">response.tool_calls</code> is empty
          and the code crashes trying to index into it. Add a guard:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`response = await llm_with_tools.ainvoke(prompt)

# Guard: if the LLM answered directly (no tool needed), print and exit
if not response.tool_calls:
    print(response.content)
    return

# Otherwise proceed with tool invocation...
for tool_call in response.tool_calls:
    selected_tool      = tool_call["name"]
    selected_tool_args = tool_call["args"]
    selected_tool_id   = tool_call["id"]
    tool_result = await name_tools[selected_tool].ainvoke(selected_tool_args)
    tool_message = ToolMessage(content=tool_result, tool_call_id=selected_tool_id)

final_response = await llm_with_tools.ainvoke([prompt, response, tool_message])
print(final_response.content)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Notice the loop — <code className="text-[#6366f1]">for tool_call in response.tool_calls</code>.
          The LLM can request multiple tool calls at once (e.g. add two expenses simultaneously).
          The loop handles any number of them.
        </p>
      </div>

      {/* 8.10 Add remote server */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.10 Adding a Remote MCP Server</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Adding the remote Expense Tracker server requires a single addition to the{" "}
          <code className="text-[#6366f1]">servers</code> dictionary. No other code changes.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Updated servers dict — two servers</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`servers = {
    "math": {
        "transport": "stdio",
        "command": "/Users/yourname/.local/bin/uv",
        "args": ["run", "fastmcp", "run",
                 "/Users/yourname/Desktop/mcp-math-server/main.py"]
    },
    "expense": {
        "transport": "streamable_http",              # remote server
        "url": "https://your-server.fastmcp.cloud/mcp"   # from FastMCP Cloud
    }
}`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">That&apos;s it</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            <code className="text-white">MultiServerMCPClient</code> handles both transports
            transparently. When you call <code className="text-white">client.get_tools()</code>,
            it connects to all servers simultaneously and returns a merged list of every tool
            from every server.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Print available tools to verify</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`print(list(name_tools.keys()))
# ['add', 'subtract', 'multiply', 'divide', 'power', 'modulus',
#  'add_expense', 'list_expenses', 'summarize']
#   ↑ Math server tools         ↑ Expense Tracker tools`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Test with expense prompt</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`prompt = "Add an expense: ₹800 for groceries on 4th November."

# The LLM sees both Math and Expense tools.
# It picks add_expense and calls it with the right arguments.
# Response: "Your expense has been added — ₹800, Groceries, 2024-11-04."`}</pre>
        </div>
      </div>

      {/* 8.11 Third-party server (Manim) */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.11 Connecting Any Third-Party MCP Server</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          You are not limited to servers you built yourself. Any public MCP server can be
          connected to your client using the same config pattern. As an example we connect
          the Manim animation server — which can generate 3Blue1Brown-style math animations.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Add Manim to the servers dict</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`servers = {
    "math": {
        "transport": "stdio",
        "command": "/path/to/uv",
        "args": ["run", "fastmcp", "run", "/path/to/math-server/main.py"]
    },
    "expense": {
        "transport": "streamable_http",
        "url": "https://your-server.fastmcp.cloud/mcp"
    },
    "manim": {
        "transport": "stdio",
        "command": "/path/to/uv",
        # Same command/args from the Manim server setup in Class 5
        "args": ["--directory", "/path/to/manim-mcp-server",
                 "run", "mcp-server-manim"]
    }
}`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Test Manim via your client</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`prompt = "Draw a triangle rotating in place using the Manim tool."

# LLM picks execute_manim_code, generates Python animation code,
# calls the tool → Manim renders a .mp4 → path returned in response.`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">The key insight</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The config for any STDIO server is exactly what Claude Desktop&apos;s config file
            uses (from Class 5). Copy the{" "}
            <code className="text-white">command</code> + <code className="text-white">args</code>{" "}
            from <code className="text-white">claude_desktop_config.json</code> and paste it here.
            You can wire any MCP server in the world to your chatbot this way.
          </p>
        </div>
      </div>

      {/* 8.12 Full client1.py */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.12 Complete client1.py</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Terminal-based client with Math + Expense servers</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`import asyncio
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.messages import ToolMessage
from langchain_mcp_adapters.client import MultiServerMCPClient

load_dotenv()

servers = {
    "math": {
        "transport": "stdio",
        "command": "/Users/yourname/.local/bin/uv",
        "args": ["run", "fastmcp", "run",
                 "/Users/yourname/Desktop/mcp-math-server/main.py"]
    },
    "expense": {
        "transport": "streamable_http",
        "url": "https://your-server.fastmcp.cloud/mcp"
    }
}

async def main():
    async with MultiServerMCPClient(servers) as client:
        tools = await client.get_tools()
        name_tools = {tool.name: tool for tool in tools}

        llm = ChatOpenAI(model="gpt-4o")
        llm_with_tools = llm.bind_tools(tools)

        prompt = "What is the remainder of 23142314 divided by 7?"

        response = await llm_with_tools.ainvoke(prompt)

        if not response.tool_calls:
            print(response.content)
            return

        for tool_call in response.tool_calls:
            selected_tool      = tool_call["name"]
            selected_tool_args = tool_call["args"]
            selected_tool_id   = tool_call["id"]
            tool_result = await name_tools[selected_tool].ainvoke(selected_tool_args)
            tool_message = ToolMessage(
                content=tool_result,
                tool_call_id=selected_tool_id
            )

        final_response = await llm_with_tools.ainvoke([prompt, response, tool_message])
        print(final_response.content)

asyncio.run(main())`}</pre>
        </div>
      </div>

      {/* 8.13 Streamlit GUI */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.13 Converting to a Streamlit Chatbot</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The terminal client works perfectly. Now we wrap the same logic in a Streamlit UI
          to get a proper chat interface. The MCP + LLM logic is identical — Streamlit
          just adds the visual layer.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">client2.py — Streamlit chatbot (core structure)</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`import asyncio
import streamlit as st
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.messages import ToolMessage, HumanMessage, AIMessage
from langchain_mcp_adapters.client import MultiServerMCPClient

load_dotenv()

# Server configuration (same as client1.py)
servers = { ... }  # math + expense

async def process_message(user_input: str, chat_history: list):
    async with MultiServerMCPClient(servers) as client:
        tools = await client.get_tools()
        name_tools = {tool.name: tool for tool in tools}

        llm = ChatOpenAI(model="gpt-4o")
        llm_with_tools = llm.bind_tools(tools)

        messages = chat_history + [HumanMessage(content=user_input)]
        response = await llm_with_tools.ainvoke(messages)

        if not response.tool_calls:
            return response.content

        for tool_call in response.tool_calls:
            tool_result = await name_tools[tool_call["name"]].ainvoke(tool_call["args"])
            tool_message = ToolMessage(
                content=tool_result,
                tool_call_id=tool_call["id"]
            )

        final = await llm_with_tools.ainvoke(messages + [response, tool_message])
        return final.content

# ── Streamlit UI ──────────────────────────────────────────

st.title("MCP Chatbot")

if "messages" not in st.session_state:
    st.session_state.messages = []

for msg in st.session_state.messages:
    with st.chat_message(msg["role"]):
        st.write(msg["content"])

if user_input := st.chat_input("Ask anything..."):
    st.session_state.messages.append({"role": "user", "content": user_input})
    with st.chat_message("user"):
        st.write(user_input)

    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            reply = asyncio.run(process_message(user_input, []))
        st.write(reply)

    st.session_state.messages.append({"role": "assistant", "content": reply})`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Run the Streamlit app</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`streamlit run client2.py
# → Opens browser at localhost:8501
# → Chat interface ready`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { prompt: "What is the capital of France?", result: "LLM answers directly — no tool called" },
            { prompt: "Show all expenses from last two weeks", result: "Calls list_expenses via the remote server" },
            { prompt: "Make an animation of a rotating circle", result: "Calls Manim tool, renders .mp4" },
          ].map((item) => (
            <div key={item.prompt} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-xs font-mono text-[#6366f1]">&quot;{item.prompt}&quot;</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 8.14 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.14 Key Takeaways</h2>
        <div className="flex flex-col gap-2">
          {[
            "langchain-mcp-adapters is the simplest way to build an MCP client in Python. Its MultiServerMCPClient connects to any number of local (STDIO) or remote (streamable_http) servers simultaneously.",
            "The server configuration format is identical to claude_desktop_config.json. STDIO servers get command + args. Remote servers get url. Same keys, same values — zero new syntax to learn.",
            "client.get_tools() returns a merged list of every tool from every connected server. bind_tools(tools) attaches all of them to the LLM so it can choose the right one automatically.",
            "The name_tools dict — {tool.name: tool} — is the bridge between the LLM's string response (a tool name) and the callable tool object (.ainvoke()). Always build it.",
            "The tool invocation flow: LLM returns tool_calls → extract name, args, id → call name_tools[name].ainvoke(args) → wrap result in ToolMessage(content, tool_call_id) → re-invoke LLM with full history.",
            "Always guard against no-tool responses: if not response.tool_calls: print(response.content); return. The LLM answers directly when no tool is relevant — your code must handle both cases.",
            "Wrap the tool handling loop over response.tool_calls — not just index [0]. The LLM may decide to call multiple tools in a single response.",
            "To add any MCP server (your own or third-party) to your chatbot, copy its command/args from its README or from claude_desktop_config.json and add one entry to the servers dict. That is the entire integration.",
            "Streamlit handles the UI layer; the MCP + LangChain logic underneath is unchanged. The chatbot supports normal conversation (no tool), single-server tool calls, and cross-server tool calls all through the same code path.",
            "This completes the HOW section of the playlist: you can now experience MCP (Class 5), build a local server (Class 6), build a remote server (Class 7), and build your own client (Class 8). You have the full stack.",
          ].map((point, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[#6366f1] font-bold text-sm min-w-[1.25rem]">{i + 1}.</span>
              <p className="text-sm text-gray-400 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </MCPLessonLayout>
  );
}
