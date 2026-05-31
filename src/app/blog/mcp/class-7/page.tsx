import MCPLessonLayout from "@/components/MCPLessonLayout";

export default function MCPClass7() {
  return (
    <MCPLessonLayout slug="class-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Class 7 — The How (Part 3)</p>
        <h1 className="text-3xl font-bold text-white">Building a Remote MCP Server</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Class 6 built a local MCP server that only you can use — it runs on your machine
          and connects to Claude Desktop over STDIO. Now we go further:{" "}
          <span className="text-white font-medium">deploy that server to the internet</span> so
          anyone in the world can connect to it. This transforms a personal tool into a shareable
          product.
        </p>
      </div>

      {/* 7.1 Local vs Remote */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.1 Local vs Remote: What&apos;s the Difference?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-sm font-semibold text-white">Local MCP Server (Class 6)</p>
            <div className="flex flex-col gap-1.5 text-xs text-gray-400">
              <p>• Runs on your own machine</p>
              <p>• Communication via <span className="text-white">STDIO</span> (stdin/stdout)</p>
              <p>• Only you can use it</p>
              <p>• No networking required</p>
              <p>• Claude Desktop manages the process lifecycle</p>
            </div>
          </div>
          <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-sm font-semibold text-white">Remote MCP Server (This Class)</p>
            <div className="flex flex-col gap-1.5 text-xs text-gray-400">
              <p>• Runs on a server in the cloud</p>
              <p>• Communication via <span className="text-[#6366f1]">HTTP</span> (network)</p>
              <p>• Anyone in the world can connect</p>
              <p>• Always-on, independent process</p>
              <p>• Multiple users can use it simultaneously</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Transport layer comparison</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Local server — STDIO transport (default)
mcp.run()                    # subprocess communicates via stdin/stdout

# Remote server — HTTP transport
mcp.run(transport="http",    # listens on a network port
        host="0.0.0.0",      # accept connections from any IP
        port=8000)           # on this port`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The transport type is the <span className="text-white font-medium">only</span> change
          needed to turn a local server into a remote one. All your tools, resources, and
          prompts remain identical.
        </p>
      </div>

      {/* 7.2 Where We Are */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.2 Where We Are in the Roadmap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {[
            { num: "Part 1", title: "Experience MCP", sub: "Class 5 ✓", done: true },
            { num: "Part 2", title: "Build Local Server", sub: "Class 6 ✓", done: true },
            { num: "Part 3", title: "Build Remote Server", sub: "This class ← you are here", active: true, done: false },
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
      </div>

      {/* 7.3 Plan of Attack */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.3 Plan of Attack</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Going remote requires four steps, done in order:
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              n: "1",
              title: "Build a simple remote server locally",
              desc: "Start fresh with a minimal server — just a calculator. Change the transport from STDIO to HTTP. Verify it runs locally on a port.",
            },
            {
              n: "2",
              title: "Test with MCP Inspector",
              desc: "Use the Inspector's Streamable HTTP mode to connect to localhost:8000 and verify tools work before deploying.",
            },
            {
              n: "3",
              title: "Deploy to FastMCP Cloud",
              desc: "Push to GitHub. FastMCP Cloud detects the commit and auto-builds a hosted URL for your server.",
            },
            {
              n: "4",
              title: "Connect Claude Desktop to the remote server",
              desc: "Claude Desktop Pro: Settings → Connectors → add the remote URL. Free plan: set up a local proxy server.",
            },
          ].map((step) => (
            <div key={step.n} className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/40 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-[#6366f1]">{step.n}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          After completing these four steps, we will upgrade the Expense Tracker from Class 6 to
          run remotely — and encounter (and fix) four real-world problems along the way.
        </p>
      </div>

      {/* 7.4 Building a Simple Remote Server */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.4 Building a Simple Remote Server</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          We start with a minimal server — two tools and one resource. The goal is
          mastering the remote workflow, not the business logic.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">main.py — Simple Calculator Remote Server</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from fastmcp import FastMCP
import random

mcp = FastMCP("Simple Calculator Server")

@mcp.tool()
def add(a: float, b: float) -> float:
    """Add two numbers."""
    return a + b

@mcp.tool()
def random_number(min_val: int, max_val: int) -> int:
    """Generate a random number between min_val and max_val."""
    return random.randint(min_val, max_val)

@mcp.resource("server://info")
def server_info() -> str:
    """Information about this server."""
    return "Simple Calculator Remote MCP Server v1.0"

# THE KEY CHANGE: transport="http" instead of default stdio
mcp.run(transport="http", host="0.0.0.0", port=8000)`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">The one key change</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Everything is identical to a local server. The only difference is the last line:{" "}
            <code className="text-white">mcp.run(transport=&quot;http&quot;, host=&quot;0.0.0.0&quot;, port=8000)</code>.
            <br /><br />
            <span className="text-white">host=&quot;0.0.0.0&quot;</span> means &quot;accept connections
            from any IP address&quot; — not just localhost. This is required for remote access.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Alternative: run via CLI instead of code</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Option A: command-line flags
fastmcp run main.py --transport http --host 0.0.0.0 --port 8000

# Option B: just run the file (if transport is configured in code)
uv run main.py

# Both are equivalent. Option B is used for deployment.`}</pre>
        </div>
      </div>

      {/* 7.5 Testing with MCP Inspector */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.5 Testing with MCP Inspector</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          For local servers we used STDIO mode in the Inspector. Remote servers use{" "}
          <span className="text-white font-medium">Streamable HTTP</span> mode.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Launch and connect</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Terminal 1: start the server
uv run main.py
# → Uvicorn running on http://0.0.0.0:8000

# Terminal 2: open the Inspector
fastmcp dev main.py
# → Opens Inspector at localhost:5173

# In the Inspector:
# 1. Transport type: change from "STDIO" → "Streamable HTTP"
# 2. URL: http://localhost:8000/mcp
# 3. Click "Connect"
# 4. Tools → List Tools → add and random_number appear
# 5. Run a tool → verify the response`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-1">Why /mcp?</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            FastMCP mounts the MCP endpoint at <code className="text-[#6366f1]">/mcp</code> by
            default when using HTTP transport. This is the path the Inspector and Claude Desktop
            must connect to.
          </p>
        </div>
      </div>

      {/* 7.6 Deploying to FastMCP Cloud */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.6 Deploying to FastMCP Cloud</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          FastMCP Cloud (<code className="text-[#6366f1]">fastmcp.cloud</code>) is a free platform
          that hosts FastMCP servers. Connect a GitHub repo, and it auto-deploys on every push.
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              step: "Step 1",
              title: "Push to GitHub",
              desc: "Create a new GitHub repository, push your server code (main.py, pyproject.toml). The repo must contain a pyproject.toml with fastmcp as a dependency.",
            },
            {
              step: "Step 2",
              title: "Connect to FastMCP Cloud",
              desc: "Go to fastmcp.cloud → sign in with GitHub → click 'New Server' → select your repository.",
            },
            {
              step: "Step 3",
              title: "Configure deployment",
              desc: "Set the entry point (e.g., main.py or the module path). FastMCP Cloud reads pyproject.toml and installs dependencies automatically.",
            },
            {
              step: "Step 4",
              title: "Wait for first build",
              desc: "FastMCP Cloud pulls the code, builds a container, and starts the server. You get a URL like https://your-server.fastmcp.cloud.",
            },
            {
              step: "Step 5",
              title: "Verify with Inspector",
              desc: "Open MCP Inspector → Streamable HTTP → paste the cloud URL → Connect. If your tools appear, deployment succeeded.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <span className="text-xs font-bold text-[#6366f1] bg-[#6366f1]/10 border border-[#6366f1]/30 px-2 py-0.5 rounded-full shrink-0 mt-0.5">{item.step}</span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Auto-rebuild on push</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            FastMCP Cloud watches your GitHub repo. Every time you push a commit, it automatically
            rebuilds and restarts the server. This makes iteration very fast — push code, wait
            a minute, the live server is updated.
          </p>
        </div>
      </div>

      {/* 7.7 Connecting to Claude Desktop */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.7 Connecting Claude Desktop to the Remote Server</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          How you connect depends on your Claude subscription plan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">Claude Pro / Team / Enterprise</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Direct HTTP connection is supported natively:
            </p>
            <ol className="flex flex-col gap-1 text-xs text-gray-400 list-none">
              <li>1. Open Claude Desktop</li>
              <li>2. Settings → Connectors (or Integrations)</li>
              <li>3. Click &quot;Add Custom Connector&quot;</li>
              <li>4. Paste your FastMCP Cloud URL</li>
              <li>5. Save and restart</li>
            </ol>
            <p className="text-xs text-green-400 mt-1">Your remote tools appear immediately.</p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">Claude Free Plan</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Free plan does not support remote HTTP servers directly. Workaround: run a local
              proxy server that bridges STDIO → HTTP.
            </p>
            <p className="text-xs text-amber-300 mt-1">See Section 7.10 for the proxy setup.</p>
          </div>
        </div>
      </div>

      {/* 7.8 Converting the Expense Tracker */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.8 Converting the Expense Tracker to Remote</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Class 6 expense tracker used STDIO. Converting it to remote is a single line change —
          but deploying it exposes four real problems we will fix one by one.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">The single line change</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Before (local — Class 6):
mcp.run()

# After (remote):
mcp.run(transport="http", host="0.0.0.0", port=8000)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Deploy this to FastMCP Cloud and immediately hit four problems. Each one teaches
          something important about building production-grade MCP servers.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { n: "Flaw 1", label: "SQLite read-only error" },
            { n: "Flaw 2", label: "Synchronous blocking code" },
            { n: "Flaw 3", label: "Free plan can't connect" },
            { n: "Flaw 4", label: "No multi-user isolation" },
          ].map((f) => (
            <div key={f.n} className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-xs font-bold text-red-400">{f.n}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{f.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7.9 Flaw 1 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.9 Flaw 1: SQLite Read-Only Error</h2>
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">The problem</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            When deployed, the server cannot create <code className="text-white">expenses.db</code>{" "}
            in the default directory because the filesystem is read-only on most cloud containers.
            Any write to SQLite fails with a permission error.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">The fix — use a writable directory</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`import os
from pathlib import Path

# Before (class 6 — relative path, fails on server):
DB_PATH = "expenses.db"

# After — use /tmp or a persistent volume path:
DATA_DIR = Path(os.getenv("DATA_DIR", "/tmp"))
DB_PATH = str(DATA_DIR / "expenses.db")

# /tmp is always writable on cloud containers.
# For persistence across restarts, set DATA_DIR to a
# mounted volume path in your deployment configuration.`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-1">Why /tmp?</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            <code className="text-[#6366f1]">/tmp</code> is a standard writable directory available
            on all Unix systems, including cloud containers. However, it is ephemeral — data is
            lost when the container restarts. For production, configure a persistent volume and
            set the <code className="text-[#6366f1]">DATA_DIR</code> environment variable to point to it.
          </p>
        </div>
      </div>

      {/* 7.10 Flaw 2 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.10 Flaw 2: Synchronous Code Blocks the Server</h2>
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">The problem</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The Class 6 expense tracker uses the standard <code className="text-white">sqlite3</code>{" "}
            library — a synchronous, blocking library. On a remote server handling multiple users,
            a database call from User A blocks the server for all other users until it completes.
            This causes timeouts and poor performance under concurrent load.
          </p>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">The fix — async/await with aiosqlite</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Replace <code className="text-white">sqlite3</code> with{" "}
            <code className="text-white">aiosqlite</code> — an async wrapper around SQLite.
            Make all tool functions <code className="text-white">async def</code>. The server
            can now handle multiple requests concurrently without blocking.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Install aiosqlite</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`uv add aiosqlite`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Before vs After: add_expense tool</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# BEFORE — synchronous (sqlite3), blocks server
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


# AFTER — asynchronous (aiosqlite), non-blocking
@mcp.tool()
async def add_expense(date: str, amount: float,
                      category: str, subcategory: str, note: str) -> str:
    """Add a new expense entry to the database."""
    async with aiosqlite.connect(DB_PATH) as conn:
        await conn.execute(
            "INSERT INTO expenses (date, amount, category, subcategory, note)"
            " VALUES (?, ?, ?, ?, ?)",
            (date, amount, category, subcategory, note)
        )
        await conn.commit()
    return f"Added: {category}/{subcategory} — ₹{amount} on {date}"`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">All three tools converted to async</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`import aiosqlite

@mcp.tool()
async def add_expense(date: str, amount: float,
                      category: str, subcategory: str, note: str) -> str:
    """Add a new expense entry to the database."""
    async with aiosqlite.connect(DB_PATH) as conn:
        await conn.execute(
            "INSERT INTO expenses (date, amount, category, subcategory, note)"
            " VALUES (?, ?, ?, ?, ?)",
            (date, amount, category, subcategory, note)
        )
        await conn.commit()
    return f"Added: {category}/{subcategory} — ₹{amount} on {date}"

@mcp.tool()
async def list_expenses(start_date: str, end_date: str) -> list:
    """List expense entries within an inclusive date range."""
    async with aiosqlite.connect(DB_PATH) as conn:
        async with conn.execute(
            "SELECT date, amount, category, subcategory, note FROM expenses"
            " WHERE date BETWEEN ? AND ? ORDER BY date ASC",
            (start_date, end_date)
        ) as cursor:
            rows = await cursor.fetchall()
    return [{"date": r[0], "amount": r[1], "category": r[2],
             "subcategory": r[3], "note": r[4]} for r in rows]

@mcp.tool()
async def summarize(start_date: str, end_date: str,
                    category: Optional[str] = None) -> list:
    """Summarize total expenses by category in a date range."""
    query = ("SELECT category, SUM(amount) AS total FROM expenses"
             " WHERE date BETWEEN ? AND ?")
    params: list = [start_date, end_date]
    if category:
        query += " AND category = ?"
        params.append(category)
    query += " GROUP BY category ORDER BY category ASC"
    async with aiosqlite.connect(DB_PATH) as conn:
        async with conn.execute(query, params) as cursor:
            rows = await cursor.fetchall()
    return [{"category": r[0], "total": r[1]} for r in rows]`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">Key async pattern to remember</p>
          <div className="flex flex-col gap-1 text-xs text-gray-400">
            <p>1. <code className="text-[#6366f1]">def</code> → <code className="text-[#6366f1]">async def</code> on every tool function</p>
            <p>2. <code className="text-[#6366f1]">sqlite3.connect()</code> → <code className="text-[#6366f1]">async with aiosqlite.connect()</code></p>
            <p>3. Every database operation gets an <code className="text-[#6366f1]">await</code> prefix</p>
            <p>4. Use <code className="text-[#6366f1]">async with cursor</code> for SELECT queries that return rows</p>
          </div>
        </div>
      </div>

      {/* 7.11 Flaw 3 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.11 Flaw 3: Free Plan Can&apos;t Connect (Proxy Workaround)</h2>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-1">The problem</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Claude Desktop Free plan only supports STDIO transport — it cannot connect directly
            to a remote HTTP MCP server. The Connectors settings panel (which enables remote
            HTTP connections) is only available on Pro / Team / Enterprise.
          </p>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">The solution — local proxy server</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Create a tiny local Python script that uses{" "}
            <code className="text-white">FastMCP.as_proxy()</code> to bridge your local machine
            to the remote server. Claude Desktop connects to this local proxy via STDIO
            (which it supports), and the proxy forwards all requests to the remote HTTP server.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">proxy.py — local proxy server</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from fastmcp import FastMCP

# Replace with your actual FastMCP Cloud URL
REMOTE_URL = "https://your-server.fastmcp.cloud/mcp"

# Create a local proxy that forwards to the remote server
mcp = FastMCP.as_proxy(REMOTE_URL, name="Expense Tracker Proxy")

# Run on stdio — Claude Desktop can connect to this
mcp.run()`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Install the proxy to Claude Desktop</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`uv run fastmcp install claude-desktop proxy.py

# Claude Desktop → restart
# Tools icon → "Expense Tracker Proxy" appears
# All tools from the remote server are available ✓

# How it works:
# Claude Desktop → stdio → proxy.py → HTTP → FastMCP Cloud`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">Architecture with proxy</p>
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="bg-[#6366f1]/20 text-[#6366f1] border border-[#6366f1]/30 rounded-lg px-2 py-1">Claude Desktop</span>
            <span className="text-gray-500">─ stdio ─→</span>
            <span className="bg-white/10 text-white border border-white/20 rounded-lg px-2 py-1">proxy.py (local)</span>
            <span className="text-gray-500">─ HTTP ─→</span>
            <span className="bg-[#6366f1]/20 text-[#6366f1] border border-[#6366f1]/30 rounded-lg px-2 py-1">FastMCP Cloud</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            The proxy is a thin forwarder — no business logic. It exists only to translate transport protocols.
          </p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">Common issue: relative uv path</p>
          <p className="text-xs text-gray-400 leading-relaxed mb-2">
            Same issue as Class 6: the installed config may have{" "}
            <code className="text-white">&quot;command&quot;: &quot;uv&quot;</code> (relative).
            Fix: run <code className="text-[#6366f1]">which uv</code> and replace with the
            absolute path in <code className="text-white">claude_desktop_config.json</code>.
          </p>
        </div>
      </div>

      {/* 7.12 Flaw 4 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.12 Flaw 4: The Multi-User Problem</h2>
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">The problem — identified, not yet solved</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            This flaw is not technical — it is architectural. The current expense tracker has no
            concept of users. All data goes into one shared database with no{" "}
            <code className="text-white">user_id</code> column. If User A and User B both connect
            to the same remote server, they see each other&apos;s expenses.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">The broken schema</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`CREATE TABLE expenses (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    date        TEXT NOT NULL,
    amount      REAL NOT NULL,
    category    TEXT,
    subcategory TEXT,
    note        TEXT
    -- NO user_id column — all users share the same rows
);`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">What&apos;s missing</p>
          <div className="flex flex-col gap-1.5 text-xs text-gray-400">
            <p>• No <code className="text-[#6366f1]">user_id</code> column in the expenses table</p>
            <p>• No authentication — the server doesn&apos;t know who is making the request</p>
            <p>• No authorization — no way to filter data by user</p>
            <p>• If 10 people use this server, their expenses are all mixed together</p>
          </div>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Coming up next</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Solving this requires understanding how MCP handles authentication — specifically
            how the server identifies which user is making each request. This is the
            topic of the next class.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Flaws 1–3", status: "Fixed ✓", color: "green" },
            { label: "Flaw 4 (auth)", status: "Next class →", color: "indigo" },
            { label: "Production-ready", status: "After auth", color: "gray" },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-xl p-3 border text-center ${
                item.color === "green" ? "bg-green-500/10 border-green-500/20" :
                item.color === "indigo" ? "bg-[#6366f1]/10 border-[#6366f1]/30" :
                "bg-white/5 border-white/10"
              }`}
            >
              <p className="text-xs font-semibold text-white">{item.label}</p>
              <p className={`text-xs mt-1 ${
                item.color === "green" ? "text-green-400" :
                item.color === "indigo" ? "text-[#6366f1]" :
                "text-gray-500"
              }`}>{item.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7.13 Full Remote main.py */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.13 Full Remote main.py</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The complete expense tracker with all three fixes applied — writable DB path,
          async tools with aiosqlite, and HTTP transport.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">main.py — Remote Expense Tracker (production-ish)</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`from fastmcp import FastMCP
import aiosqlite
import json
import os
from pathlib import Path
from typing import Optional

mcp = FastMCP("Expense Tracker")

DATA_DIR = Path(os.getenv("DATA_DIR", "/tmp"))
DB_PATH = str(DATA_DIR / "expenses.db")
CATEGORIES_PATH = Path(__file__).parent / "categories.json"

async def init_db():
    async with aiosqlite.connect(DB_PATH) as conn:
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS expenses (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                date        TEXT NOT NULL,
                amount      REAL NOT NULL,
                category    TEXT,
                subcategory TEXT,
                note        TEXT
            )
        """)
        await conn.commit()

import asyncio
asyncio.run(init_db())

# ── TOOLS ────────────────────────────────────────────────

@mcp.tool()
async def add_expense(date: str, amount: float,
                      category: str, subcategory: str, note: str) -> str:
    """Add a new expense entry to the database."""
    async with aiosqlite.connect(DB_PATH) as conn:
        await conn.execute(
            "INSERT INTO expenses (date, amount, category, subcategory, note)"
            " VALUES (?, ?, ?, ?, ?)",
            (date, amount, category, subcategory, note)
        )
        await conn.commit()
    return f"Added: {category}/{subcategory} — ₹{amount} on {date}"

@mcp.tool()
async def list_expenses(start_date: str, end_date: str) -> list:
    """List expense entries within an inclusive date range."""
    async with aiosqlite.connect(DB_PATH) as conn:
        async with conn.execute(
            "SELECT date, amount, category, subcategory, note FROM expenses"
            " WHERE date BETWEEN ? AND ? ORDER BY date ASC",
            (start_date, end_date)
        ) as cursor:
            rows = await cursor.fetchall()
    return [{"date": r[0], "amount": r[1], "category": r[2],
             "subcategory": r[3], "note": r[4]} for r in rows]

@mcp.tool()
async def summarize(start_date: str, end_date: str,
                    category: Optional[str] = None) -> list:
    """Summarize total expenses by category in a date range."""
    query = ("SELECT category, SUM(amount) AS total FROM expenses"
             " WHERE date BETWEEN ? AND ?")
    params: list = [start_date, end_date]
    if category:
        query += " AND category = ?"
        params.append(category)
    query += " GROUP BY category ORDER BY category ASC"
    async with aiosqlite.connect(DB_PATH) as conn:
        async with conn.execute(query, params) as cursor:
            rows = await cursor.fetchall()
    return [{"category": r[0], "total": r[1]} for r in rows]

# ── RESOURCE ─────────────────────────────────────────────

@mcp.resource("expense://categories")
def get_categories() -> str:
    """Predefined expense categories and sub-categories."""
    with open(CATEGORIES_PATH) as f:
        return json.dumps(json.load(f), indent=2)

mcp.run(transport="http", host="0.0.0.0", port=8000)`}</pre>
        </div>
      </div>

      {/* 7.14 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.14 Key Takeaways</h2>
        <div className="flex flex-col gap-2">
          {[
            "The only code change needed to turn a local MCP server into a remote one is the transport: mcp.run(transport='http', host='0.0.0.0', port=8000). All tools, resources, and prompts remain unchanged.",
            "When testing a remote server with MCP Inspector, switch the transport type from STDIO to Streamable HTTP and point it to localhost:8000/mcp — the /mcp path is FastMCP's default HTTP endpoint.",
            "FastMCP Cloud (fastmcp.cloud) is a free deployment platform. Connect a GitHub repo and it auto-builds on every push — iteration loop is push → wait ~1 minute → live.",
            "Claude Desktop Pro connects to remote MCP servers directly via Settings → Connectors. Free plan only supports STDIO — use a local proxy (FastMCP.as_proxy) to bridge Free plan to a remote server.",
            "Deploying to a server exposes the SQLite read-only problem: the default relative path fails in read-only container filesystems. Fix: point DB_PATH to /tmp or a mounted persistent volume via an environment variable.",
            "The standard sqlite3 library is synchronous — it blocks the entire server while a database call runs. On a remote multi-user server this causes timeouts. Fix: replace sqlite3 with aiosqlite, make all tool functions async def, add await to all DB operations.",
            "The async/await pattern in Python allows the server to handle multiple requests concurrently. While User A's database query is waiting for disk I/O, the server can process User B's request in parallel.",
            "A local proxy server (proxy.py using FastMCP.as_proxy) is a thin forwarder with no business logic. It translates: Claude Desktop (STDIO) → proxy → remote server (HTTP). Zero business logic duplication.",
            "The current expense tracker has no authentication — all users share the same database with no user_id column. This is Flaw 4 and the subject of the next class: MCP authentication.",
            "The iterative debugging approach — deploy, observe what breaks, fix, redeploy — is how remote systems are developed. Each flaw discovered and fixed in this class represents a real production concern.",
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
