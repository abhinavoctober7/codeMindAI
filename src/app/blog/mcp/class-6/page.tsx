import MCPLessonLayout from "@/components/MCPLessonLayout";

export default function MCPClass6() {
  return (
    <MCPLessonLayout slug="class-6">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Class 6 — The How (Part 2)</p>
        <h1 className="text-3xl font-bold text-white">Building a Local MCP Server</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Class 5 was about <span className="text-white font-medium">experiencing</span> MCP using
          ready-made servers and Claude Desktop. Now it&apos;s time to build your own. In this class
          you will write a real, working local MCP server from scratch — an{" "}
          <span className="text-white font-medium">Expense Tracker</span> you can actually use in
          your daily life.
        </p>
      </div>

      {/* 6.1 Where We Are */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.1 Where We Are in the Roadmap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {[
            { num: "Part 1", title: "Experience MCP", sub: "Class 5 ✓", done: true },
            { num: "Part 2", title: "Build Local Server", sub: "This class ← you are here", active: true, done: false },
            { num: "Part 3", title: "Build Remote Server", sub: "Next class", done: false },
            { num: "Part 4", title: "Build Your Client", sub: "After that", done: false },
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
          Today: you write the server. Claude Desktop remains the host/client. All communication
          uses STDIO transport — same machine, no network. Next class we will host this server
          remotely so anyone in the world can connect to it.
        </p>
      </div>

      {/* 6.2 What We're Building */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.2 What We&apos;re Building: Expense Tracker MCP Server</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Instead of a trivial calculator example, we will build something genuinely useful —
          an expense tracker that you control through natural language in Claude Desktop.
        </p>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">The Idea</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Traditional expense apps make you open an app, fill forms, tap through menus.
            This server lets you manage your expenses by simply <span className="text-white font-medium">talking to Claude</span> in
            natural language. Claude figures out the date, category, amount, and writes to the database.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Natural language expense tracking</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`You: "I bought milk today for ₹20"
Claude: ✓ Added — Date: today, Amount: ₹20, Category: Groceries

You: "Show all my September expenses in a table"
Claude: [tabular summary with totals]

You: "How much did I spend on health last month?"
Claude: ₹870 on Health in September

You: "What was my travel spend this week?"
Claude: ₹500 on Travel (3 transactions)`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { feature: "Add Expense", desc: "Natural language entry — Claude infers date, category, amount" },
            { feature: "List Expenses", desc: "Filter by date range — last week, last month, custom range" },
            { feature: "Summarize", desc: "Total spend by category in a given date range" },
          ].map((item) => (
            <div key={item.feature} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#6366f1]">{item.feature}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          We will build this in four incremental iterations — starting minimal and adding features
          one at a time. Each iteration runs and is testable. This is how real software is built.
        </p>
      </div>

      {/* 6.3 The Library Confusion */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.3 The Library Confusion: MCP SDK vs FastMCP</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Before writing any code, there is one confusion you will encounter when searching online:
          YouTube videos show two different libraries for building MCP servers, yet the code inside
          looks almost identical. Here is what is going on.
        </p>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-2">The confusion</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Some videos use <code className="text-[#6366f1]">mcp</code> (the official MCP SDK by
            Anthropic). Others use <code className="text-[#6366f1]">fastmcp</code> (a community
            library). The import paths differ but the code style looks the same. Why do both exist?
          </p>
        </div>
      </div>

      {/* 6.4 Ecosystem Story */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.4 The Ecosystem Story (Chronological)</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              era: "Late 2023 — MCP Launches",
              detail: "Anthropic releases the Model Context Protocol. Developers want to build servers but have to implement the full protocol from scratch. Two problems: it's complex, and every new server repeats the same boilerplate.",
            },
            {
              era: "Early 2024 — Official MCP SDK",
              detail: "Anthropic releases the official Python MCP SDK (pip install mcp[cli]). It bundles three sub-libraries: mcp.server (build servers), mcp.client (build clients), mcp.cli (command-line tools). Problem: even a simple two-number adder needed dozens of lines of boilerplate. You had to handle transport yourself.",
            },
            {
              era: "Mid 2024 — FastMCP Appears",
              detail: "Jeremy Lowin, CEO of Prefect (an MLOps tool), identified the boilerplate problem and built FastMCP — a higher-level abstraction on top of the official MCP SDK. The same two-number adder now fits in 5 lines. FastMCP became enormously popular.",
            },
            {
              era: "Late 2024 — FastMCP Merges into SDK",
              detail: "FastMCP became so popular that Anthropic adopted it. mcp.server now ships FastMCP v1 by default inside the official SDK. The code you write is FastMCP code whether you install mcp or fastmcp.",
            },
            {
              era: "2025 — FastMCP v2 Goes Independent",
              detail: "The FastMCP creator and Anthropic went separate ways. Anthropic focuses on the protocol spec. FastMCP v2 is now an independent library: pip install fastmcp — with more features beyond the MCP spec. FastMCP v1 still ships inside the mcp SDK.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#6366f1] mt-0.5 shrink-0" />
                {i < 4 && <div className="w-px flex-1 bg-[#6366f1]/30 mt-1" />}
              </div>
              <div className="flex flex-col gap-1 pb-4">
                <p className="text-sm font-semibold text-white">{item.era}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">The Analogy</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 text-xs mb-1">Web framework history</p>
              <p className="text-gray-300">WSGI (low-level protocol spec)</p>
              <p className="text-[#6366f1]">↓ abstracted by</p>
              <p className="text-white font-medium">Flask (developer-friendly)</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">MCP history</p>
              <p className="text-gray-300">MCP SDK (low-level protocol spec)</p>
              <p className="text-[#6366f1]">↓ abstracted by</p>
              <p className="text-white font-medium">FastMCP (developer-friendly)</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">Your two options today</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10">
              <p className="text-xs text-gray-400 mb-1">Option A — MCP SDK (includes FastMCP v1)</p>
              <code className="text-sm text-[#6366f1] font-mono">pip install mcp[cli]</code>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-3 border border-[#6366f1]/30">
              <p className="text-xs text-gray-400 mb-1">Option B — FastMCP v2 standalone ✓ (used in this course)</p>
              <code className="text-sm text-[#6366f1] font-mono">pip install fastmcp</code>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Both work. Code is nearly identical. We use FastMCP v2 because it is more developer-friendly and likely becomes the standard.</p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white font-medium">Side note:</span> FastMCP shares design philosophy
          with FastAPI (both prioritize decorator-based simplicity). This connection becomes
          important at the end of this class.
        </p>
      </div>

      {/* 6.5 Code Comparison */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.5 MCP SDK vs FastMCP: Code Comparison</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Same task — a tool that adds two numbers — written both ways:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">MCP SDK (verbose)</p>
            <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10 flex-1">
              <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp import types
import asyncio

app = Server("adder")

@app.list_tools()
async def list_tools():
    return [types.Tool(
        name="add_numbers",
        description="Add two numbers",
        inputSchema={
            "type": "object",
            "properties": {
                "a": {"type": "number"},
                "b": {"type": "number"}
            },
            "required": ["a", "b"]
        }
    )]

@app.call_tool()
async def call_tool(name, arguments):
    if name == "add_numbers":
        return [types.TextContent(
            type="text",
            text=str(arguments["a"] + arguments["b"])
        )]

async def main():
    async with stdio_server() as (r, w):
        await app.run(r, w,
            app.create_initialization_options()
        )

asyncio.run(main())`}</pre>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-wider">FastMCP (concise) ✓</p>
            <div className="bg-[#0d1117] rounded-xl p-4 border border-[#6366f1]/30 flex-1">
              <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`from fastmcp import FastMCP

mcp = FastMCP("Adder")

@mcp.tool()
def add_numbers(a: int, b: int) -> int:
    """Add two numbers together."""
    return a + b

mcp.run()`}</pre>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          FastMCP infers the tool schema from Python type hints. Transport is handled automatically.
          Same result, a fraction of the code.
        </p>
      </div>

      {/* 6.6 Environment Setup */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.6 Environment Setup</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Step-by-step setup</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Step 1: Install uv (faster package manager, recommended by FastMCP)
pip install uv

# Step 2: Create a project folder (e.g., on your Desktop)
mkdir ~/Desktop/expense-tracker-mcp-server
# Then open this folder in VS Code

# Step 3: Initialize uv in the project folder
# In VS Code terminal:
uv init .
# This creates pyproject.toml, main.py, and project structure

# Step 4: Install FastMCP
uv add fastmcp

# Step 5: Verify installation
fastmcp version
# Output:
# FastMCP version: 2.x.x
# MCP SDK version: x.x.x
# Python version: 3.x.x
# Platform: macOS / Windows
# Root path: /path/to/fastmcp`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-1">Why uv instead of pip?</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            uv is a next-generation Python package manager that is significantly faster than pip and
            better at managing virtual environments. FastMCP recommends it. Commands map
            directly: <code className="text-[#6366f1]">pip install X</code> becomes{" "}
            <code className="text-[#6366f1]">uv add X</code> inside a project.
          </p>
        </div>
      </div>

      {/* 6.7 Demo Server */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.7 Demo Server: Learning the Workflow</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Before building the expense tracker, we build a minimal demo server with two toys tools.
          The goal is not the tools — it is mastering the <span className="text-white font-medium">full workflow</span>:
          write → test → install → use.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">main.py — Demo server with 2 tools</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from fastmcp import FastMCP
import random

mcp = FastMCP("Demo Server")

@mcp.tool()
def roll_dice(n: int) -> str:
    """Roll n dice and return results (values 1–6 each)."""
    results = [random.randint(1, 6) for _ in range(n)]
    return f"Rolled {n} dice: {results} (total: {sum(results)})"

@mcp.tool()
def add_numbers(a: int, b: int) -> int:
    """Add two numbers and return the result."""
    return a + b

mcp.run()`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">How tools are defined</p>
          <div className="flex flex-col gap-2 text-xs text-gray-400">
            <p>1. Write a regular Python function.</p>
            <p>2. Add <code className="text-[#6366f1]">@mcp.tool()</code> decorator — it becomes an MCP tool.</p>
            <p>3. FastMCP reads the type hints and docstring to build the JSON schema automatically.</p>
            <p>4. Call <code className="text-[#6366f1]">mcp.run()</code> to start the server.</p>
          </div>
        </div>
      </div>

      {/* 6.8 MCP Inspector */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.8 Testing with MCP Inspector</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Before connecting to Claude Desktop, always test your server with the{" "}
          <span className="text-white font-medium">MCP Inspector</span> — a debugging tool that
          ships with FastMCP. Think of it as Postman, but for MCP servers.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Launch the inspector</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`uv run fastmcp dev main.py
# → Opens MCP Inspector in browser at localhost:5173

# In the Inspector:
# 1. Transport type: STDIO (default for local servers — correct)
# 2. Click "Connect"
# 3. Go to "Tools" tab → "List Tools"
#    → JSON-RPC tools/list is called
#    → Both tools appear: roll_dice, add_numbers
# 4. Click a tool → fill inputs → "Run Tool"
#    → JSON-RPC tools/call is sent
#    → Result appears
# 5. "History" tab shows all JSON-RPC messages exchanged`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-1">What the Inspector shows you</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The History tab displays every JSON-RPC message — initialization handshake, capability
            exchange, tool calls, responses. This is exactly the MCP Lifecycle from Class 4,
            now visible live. Inspect this when something goes wrong before wiring up Claude Desktop.
          </p>
        </div>
      </div>

      {/* 6.9 Install to Claude Desktop */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.9 Installing to Claude Desktop</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">One command to install your server</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`uv run fastmcp install claude-desktop main.py
# Output: Successfully installed Demo Server in Claude Desktop

# Then restart Claude Desktop.
# Click the tools icon — "Demo Server" should appear.
# You should see: roll_dice and add_numbers tools.`}</pre>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">Common issue: relative uv path</p>
          <p className="text-xs text-gray-400 leading-relaxed mb-2">
            If Claude Desktop shows a connection error on startup, open the config file
            (Settings → Developer → Edit Config) and look at the installed server entry.
            The <code className="text-white">command</code> field may say just{" "}
            <code className="text-[#6366f1]">"uv"</code> — a relative path that Claude
            cannot resolve.
          </p>
          <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`# In terminal, find the absolute path:
which uv
# e.g., /Users/yourname/.local/bin/uv

# In claude_desktop_config.json, replace:
"command": "uv"
# with:
"command": "/Users/yourname/.local/bin/uv"

# Save, close, restart Claude Desktop.`}</pre>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          After a successful restart, try it: <em>&quot;Roll a die&quot;</em> or{" "}
          <em>&quot;Roll two dice&quot;</em> or <em>&quot;Add 234 and 567&quot;</em>. Claude will call
          your tools and return results. The full MCP client–server flow is live on your machine.
        </p>
      </div>

      {/* 6.10 Expense Tracker: Iteration 1 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.10 Expense Tracker — Iteration 1</h2>
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Add Expense + List All Expenses</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now we replace the demo server with the real expense tracker. We use SQLite — simple,
          file-based, zero setup. In production you would use PostgreSQL or MySQL, but SQLite is
          perfect for learning since the database file lives right in your project folder.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">main.py — Iteration 1</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from fastmcp import FastMCP
import sqlite3

mcp = FastMCP("Expense Tracker")
DB_PATH = "expenses.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS expenses (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            date        TEXT NOT NULL,
            amount      REAL NOT NULL,
            category    TEXT,
            subcategory TEXT,
            note        TEXT
        )
    """)
    conn.commit()
    conn.close()

init_db()  # run on server startup

@mcp.tool()
def add_expense(date: str, amount: float,
                category: str, subcategory: str, note: str) -> str:
    """Add a new expense entry to the database."""
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        "INSERT INTO expenses (date, amount, category, subcategory, note)"
        " VALUES (?, ?, ?, ?, ?)",
        (date, amount, category, subcategory, note)
    )
    conn.commit()
    conn.close()
    return f"Added: {category} — ₹{amount} on {date}"

@mcp.tool()
def list_expenses() -> list:
    """List all expense entries from the database."""
    conn = sqlite3.connect(DB_PATH)
    rows = conn.execute(
        "SELECT date, amount, category, subcategory, note"
        " FROM expenses ORDER BY date ASC"
    ).fetchall()
    conn.close()
    return [
        {"date": r[0], "amount": r[1], "category": r[2],
         "subcategory": r[3], "note": r[4]}
        for r in rows
    ]

mcp.run()`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">Database schema</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { col: "id", type: "INTEGER", note: "Auto-increment primary key" },
              { col: "date", type: "TEXT", note: "YYYY-MM-DD format" },
              { col: "amount", type: "REAL", note: "Transaction amount in ₹" },
              { col: "category", type: "TEXT", note: "e.g., Travel, Groceries" },
              { col: "subcategory", type: "TEXT", note: "e.g., Cab Ride" },
              { col: "note", type: "TEXT", note: "Free-text description" },
            ].map((item) => (
              <div key={item.col} className="bg-[#0d1117] rounded-lg p-2 border border-white/10">
                <p className="text-xs font-mono text-[#6366f1]">{item.col}</p>
                <p className="text-xs text-gray-500">{item.type}</p>
                <p className="text-xs text-gray-600 mt-0.5">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Install and test</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`uv run fastmcp install claude-desktop main.py
# Restart Claude Desktop

# Test in Claude:
"Add 500 travel expense for cab ride yesterday"
→ Claude infers date, calls add_expense, confirms ✓

"Add groceries 500 yesterday"
→ Another entry added

# Verify the database file was created:
# expenses.db now exists in your project folder`}</pre>
        </div>
      </div>

      {/* 6.11 Iteration 2 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.11 Expense Tracker — Iteration 2</h2>
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Add Date Range Filtering</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Listing all expenses is not very useful. Users want to see expenses for a specific
          time period. We update <code className="text-[#6366f1]">list_expenses</code> to
          accept a date range.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Updated list_expenses function</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`@mcp.tool()
def list_expenses(start_date: str, end_date: str) -> list:
    """List expense entries within an inclusive date range.

    Args:
        start_date: Start date in YYYY-MM-DD format
        end_date:   End date in YYYY-MM-DD format
    """
    conn = sqlite3.connect(DB_PATH)
    rows = conn.execute(
        "SELECT date, amount, category, subcategory, note"
        " FROM expenses"
        " WHERE date BETWEEN ? AND ?"
        " ORDER BY date ASC",
        (start_date, end_date)
    ).fetchall()
    conn.close()
    return [
        {"date": r[0], "amount": r[1], "category": r[2],
         "subcategory": r[3], "note": r[4]}
        for r in rows
    ]`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Test with natural language</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`"Show all expenses from September first week"
→ Claude infers: start_date=2024-09-01, end_date=2024-09-07
→ Returns filtered results

"List my expenses from last week in tabular fashion"
→ Claude calculates date range automatically
→ Returns formatted table with total`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The key insight: Claude is smart enough to translate &quot;last week&quot;,
          &quot;this month&quot;, &quot;September&quot; into exact date ranges. Your tool just
          needs to accept start/end dates — the LLM handles the natural language interpretation.
        </p>
      </div>

      {/* 6.12 Iteration 3 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.12 Expense Tracker — Iteration 3</h2>
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Add Summarize by Category</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now we add the ability to ask &quot;How much did I spend on travel last month?&quot; — a
          total for a specific category in a date range. Category is optional; omitting it returns
          totals across all categories.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">New summarize tool</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from typing import Optional

@mcp.tool()
def summarize(start_date: str, end_date: str,
              category: Optional[str] = None) -> list:
    """Summarize expenses by category within an inclusive date range.

    If category is provided: total for that category only.
    If omitted: totals for all categories.
    """
    conn = sqlite3.connect(DB_PATH)
    base_query = (
        "SELECT category, SUM(amount) AS total"
        " FROM expenses"
        " WHERE date BETWEEN ? AND ?"
    )
    params = [start_date, end_date]

    if category:
        base_query += " AND category = ?"
        params.append(category)

    base_query += " GROUP BY category ORDER BY category ASC"

    rows = conn.execute(base_query, params).fetchall()
    conn.close()
    return [{"category": r[0], "total": r[1]} for r in rows]`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Test queries</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`"What was my total expense on education in last 10 days?"
→ Claude calls: summarize(start_date="...", end_date="...", category="Education")
→ Returns: [{"category": "Education", "total": 1800}]
→ Claude: "You spent ₹1800 on Education (online course subscription)"

"Summarize all my August expenses"
→ No category → returns totals for all categories in August`}</pre>
        </div>
      </div>

      {/* 6.13 Iteration 4 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.13 Expense Tracker — Iteration 4</h2>
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Add a JSON Resource for Consistent Categories</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          There is a subtle but important problem with the current server: when you add an expense,
          Claude <em>invents</em> the category name. Today it writes &quot;Education&quot;. Tomorrow
          it might write &quot;education&quot;, &quot;Upskilling&quot;, or &quot;Online Learning&quot;.
          The same expense enters the database under different names — breaking queries later.
        </p>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">The problem</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Inconsistent category strings make aggregation unreliable. If &quot;Education&quot; and
            &quot;education&quot; coexist in the database, a query for the Education category misses half
            the entries. We need to force Claude to pick from a predefined list.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The solution: create a <code className="text-[#6366f1]">categories.json</code> file with
          your allowed categories and sub-categories, then expose it as an{" "}
          <span className="text-white font-medium">MCP Resource</span>. Claude can read this resource
          and pick from its values when adding an expense.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">categories.json</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "Food": ["Groceries", "Dining Out", "Snacks", "Coffee"],
  "Travel": ["Cab Ride", "Metro", "Flight", "Fuel"],
  "Health": ["Medicine", "Doctor", "Gym", "Insurance"],
  "Education": ["Books", "Online Course", "Coaching"],
  "Entertainment": ["Movies", "Netflix", "Music", "Games"],
  "Shopping": ["Clothing", "Electronics", "Home Items"],
  "Utilities": ["Electricity", "Internet", "Phone Bill"],
  "Miscellaneous": ["Other"]
}`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Add resource to main.py</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`import json
from pathlib import Path

CATEGORIES_PATH = Path(__file__).parent / "categories.json"

@mcp.resource("expense://categories")
def get_categories() -> str:
    """Predefined expense categories and sub-categories."""
    with open(CATEGORIES_PATH) as f:
        return json.dumps(json.load(f), indent=2)`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">How to use it in Claude Desktop</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# In Claude Desktop, click the + (attach) button
# → "Add from Expense Tracker" → "categories"
# → The full JSON is pasted into your message as context

# Now add an expense:
"Add expense: cab ride to airport last Wednesday, ₹700
 [paste the categories JSON]
 Pick category and subcategory from the pasted text."

→ Claude reads the JSON → selects "Travel" + "Cab Ride"
→ Consistent, controlled categorization every time ✓`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Resources vs Tools</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            This is your first use of an MCP <span className="text-white font-medium">Resource</span> (from
            Class 3). Resources are static data that Claude can read as context. Tools are actions
            Claude can call. The categories JSON is static — it never changes during a session —
            so it belongs as a Resource, not a Tool.
          </p>
        </div>
      </div>

      {/* 6.14 FastAPI → FastMCP */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.14 Bonus: Converting a FastAPI App into an MCP Server</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          FastMCP shares the same design philosophy as FastAPI and is built to be compatible with it.
          This has a major practical consequence for companies.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">The typical company scenario</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Imagine a company with an existing FastAPI backend (expense tracker, CRM, ERP — anything).
            That API powers a website, Android app, and iOS app. Now they want to expose their product
            to Claude Desktop and ChatGPT as an MCP server. Normally this means rewriting the entire
            backend logic in FastMCP. FastMCP v2 removes that pain entirely.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Convert FastAPI → FastMCP in 3 lines (server.py)</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from fastmcp import FastMCP
from main import app  # your existing FastAPI app

# Convert the FastAPI app into an MCP server
mcp = FastMCP.from_fastapi(app=app, name="Expense Tracker MCP")

mcp.run()

# FastMCP reads your FastAPI routes and auto-generates MCP tools.
# No duplicated logic. No rewriting. Zero extra code needed.`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Verify in MCP Inspector</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`uv run fastmcp dev server.py
# Connect → Tools → List Tools
# → add_expense, get_expenses, get_expense_summary all appear
# → Same 3 tools, derived automatically from FastAPI routes

# Install to Claude Desktop:
uv run fastmcp install claude-desktop server.py`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">Business impact</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            With one function call, your existing FastAPI backend instantly becomes an MCP server
            accessible from Claude Desktop, ChatGPT, Cursor, and any other MCP-compatible host.
            No duplicated code to maintain. Development time for adding MCP support drops from days
            to minutes. This is why FastMCP + FastAPI compatibility is a very big deal for teams
            with existing Python backends.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The reverse also works: <code className="text-[#6366f1]">FastMCP.to_fastapi()</code> converts
          an MCP server into a FastAPI app — useful if you want to expose your MCP tools as a
          REST API.
        </p>
      </div>

      {/* 6.15 Full File: Expense Tracker main.py */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.15 Final main.py: All Four Iterations Combined</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Complete expense tracker MCP server</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from fastmcp import FastMCP
import sqlite3
import json
from pathlib import Path
from typing import Optional

mcp = FastMCP("Expense Tracker")

DB_PATH = "expenses.db"
CATEGORIES_PATH = Path(__file__).parent / "categories.json"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS expenses (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            date        TEXT NOT NULL,
            amount      REAL NOT NULL,
            category    TEXT,
            subcategory TEXT,
            note        TEXT
        )
    """)
    conn.commit()
    conn.close()

init_db()

# ── TOOLS ────────────────────────────────────────────────

@mcp.tool()
def add_expense(date: str, amount: float,
                category: str, subcategory: str, note: str) -> str:
    """Add a new expense entry to the database."""
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        "INSERT INTO expenses (date, amount, category, subcategory, note)"
        " VALUES (?, ?, ?, ?, ?)",
        (date, amount, category, subcategory, note)
    )
    conn.commit()
    conn.close()
    return f"Added: {category}/{subcategory} — ₹{amount} on {date}"

@mcp.tool()
def list_expenses(start_date: str, end_date: str) -> list:
    """List expense entries within an inclusive date range."""
    conn = sqlite3.connect(DB_PATH)
    rows = conn.execute(
        "SELECT date, amount, category, subcategory, note FROM expenses"
        " WHERE date BETWEEN ? AND ? ORDER BY date ASC",
        (start_date, end_date)
    ).fetchall()
    conn.close()
    return [{"date": r[0], "amount": r[1], "category": r[2],
             "subcategory": r[3], "note": r[4]} for r in rows]

@mcp.tool()
def summarize(start_date: str, end_date: str,
              category: Optional[str] = None) -> list:
    """Summarize total expenses by category in a date range.

    If category is provided, return total for that category only.
    If omitted, return totals for all categories.
    """
    conn = sqlite3.connect(DB_PATH)
    query = ("SELECT category, SUM(amount) AS total FROM expenses"
             " WHERE date BETWEEN ? AND ?")
    params = [start_date, end_date]
    if category:
        query += " AND category = ?"
        params.append(category)
    query += " GROUP BY category ORDER BY category ASC"
    rows = conn.execute(query, params).fetchall()
    conn.close()
    return [{"category": r[0], "total": r[1]} for r in rows]

# ── RESOURCE ─────────────────────────────────────────────

@mcp.resource("expense://categories")
def get_categories() -> str:
    """Predefined expense categories and sub-categories."""
    with open(CATEGORIES_PATH) as f:
        return json.dumps(json.load(f), indent=2)

mcp.run()`}</pre>
        </div>
      </div>

      {/* 6.16 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.16 Key Takeaways</h2>
        <div className="flex flex-col gap-2">
          {[
            "Two libraries exist for building MCP servers: the official MCP SDK (pip install mcp[cli]) and FastMCP v2 (pip install fastmcp). Code style is identical — both use the FastMCP abstraction. This course uses FastMCP v2.",
            "FastMCP is to the MCP SDK what Flask is to WSGI — a developer-friendly abstraction on top of the low-level spec. FastMCP v1 merged into the SDK; FastMCP v2 is now a separate, more powerful library.",
            "Building a tool is just two steps: write a Python function with type-hinted parameters + docstring, add @mcp.tool() decorator. FastMCP infers the JSON schema automatically.",
            "Always test with MCP Inspector (uv run fastmcp dev main.py) before connecting to Claude Desktop. It shows all JSON-RPC messages live — the MCP Lifecycle from Class 4, visible in real time.",
            "Install your server to Claude Desktop with one command: uv run fastmcp install claude-desktop main.py. If the 'uv' path is relative, replace it with the absolute path from 'which uv'.",
            "SQLite is the right database for a local server — zero setup, file lives in the project folder, standard library. For production, use PostgreSQL or MySQL.",
            "Always add a docstring to every MCP tool. The docstring becomes the tool's description in Claude's context, helping the LLM decide when and how to call it.",
            "MCP Resources (decorated with @mcp.resource()) expose static data that Claude can read as context. Categories.json as a resource solves the inconsistent-category problem without hard-coding values inside tools.",
            "FastMCP.from_fastapi(app) converts an existing FastAPI application into an MCP server in three lines. Zero duplicated logic — massive time saving for companies with existing Python backends.",
            "The natural iterative approach works: start with the simplest possible server (add + list), then add features one by one (date range, summarize, resources). Each iteration runs and is testable.",
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
