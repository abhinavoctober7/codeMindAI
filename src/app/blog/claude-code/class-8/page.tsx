import LessonLayout from "@/components/LessonLayout";

export default function Class8() {
  return (
    <LessonLayout slug="class-8">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 8</p>
        <h1 className="text-3xl font-bold text-white">Plan Mode in Claude Code</h1>
      </div>

      {/* 8.1 Context and Goals */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.1 Context and Goals</h2>
        <p className="text-sm text-gray-400 leading-relaxed">This chapter covers two main areas:</p>
        <ol className="flex flex-col gap-2">
          {[
            "Start building the Expense Tracker project — specifically, set up the database layer.",
            "Learn Plan Mode — a powerful Claude Code feature for generating implementation plans before writing any code.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      {/* 8.2 About the Expense Tracker Project */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">8.2 About the Expense Tracker Project</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          The example project is an <span className="text-white font-semibold">Expense Tracker Web Application</span>:
        </p>
        <ul className="flex flex-col gap-2">
          {[
            "A user can visit the website and create an account.",
            "Log in and log out.",
            "Log (record) their expenses.",
            "Analyse their expenses with summaries and insights.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#cc785c] uppercase tracking-widest">What the Database Setup Involves</p>
          <ol className="flex flex-col gap-2 mt-1">
            {[
              "Create tables — define the structure of the database.",
              "Insert dummy/seed data — add sample data for testing.",
              "Write Python functions in database/db.py.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 8.3 The SDD Workflow in Practice */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">8.3 The SDD Workflow in Practice</h2>

        {[
          {
            num: "8.3.1",
            title: "Step 1 — Start a New Claude Code Session",
            code: `claude\n/rename database setup`,
          },
          {
            num: "8.3.2",
            title: "Step 2 — Pull Latest Code from GitHub",
            code: `git pull origin main\n# Expected: Already up to date.`,
          },
          {
            num: "8.3.3",
            title: "Step 3 — Create and Switch to a Feature Branch",
            code: `git checkout -b feature/database-setup`,
            note: "This creates and immediately switches to the branch. Branch naming convention: feature/<feature-name>.",
          },
          {
            num: "8.3.4",
            title: "Step 4 — Create the Spec Document",
            code: `.claude/specs/01-database-setup.md`,
            note: "Spec documents are stored in .claude/specs/",
          },
        ].map(({ num, title, code, note }) => (
          <div key={num} className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-white">{num} {title}</h3>
            <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
              <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">{code}</pre>
            </div>
            {note && <p className="text-sm text-gray-400 leading-relaxed">{note}</p>}
          </div>
        ))}
      </div>

      {/* 8.4 The Spec Document */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">8.4 The Spec Document — Database Setup</h2>

        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Overview</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Replace the stub in <span className="font-mono text-white">database/db.py</span> with a working SQLite
            implementation. This step establishes the data layer foundation for the Spendly application. All future
            features depend on this being correctly implemented.
          </p>
        </div>

        {/* Schema Tables */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">8.4.2 Database Schema</h3>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400 font-semibold">Table A: users</p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-4 py-2.5 text-gray-300 font-semibold">Column</th>
                    <th className="px-4 py-2.5 text-gray-300 font-semibold">Type</th>
                    <th className="px-4 py-2.5 text-gray-300 font-semibold">Constraints</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["id", "INTEGER", "Primary key, autoincrement"],
                    ["name", "TEXT", "Not null"],
                    ["email", "TEXT", "Unique, not null"],
                    ["password_hash", "TEXT", "Not null"],
                    ["created_at", "TEXT", "Default datetime('now')"],
                  ].map(([col, type, constraint], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{col}</td>
                      <td className="px-4 py-2.5 text-blue-400 font-mono text-xs">{type}</td>
                      <td className="px-4 py-2.5 text-gray-400 text-xs">{constraint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400 font-semibold">Table B: expenses</p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-4 py-2.5 text-gray-300 font-semibold">Column</th>
                    <th className="px-4 py-2.5 text-gray-300 font-semibold">Type</th>
                    <th className="px-4 py-2.5 text-gray-300 font-semibold">Constraints</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["id", "INTEGER", "Primary key, autoincrement"],
                    ["user_id", "INTEGER", "Foreign key → users.id, not null"],
                    ["amount", "REAL", "Not null"],
                    ["category", "TEXT", "Not null"],
                    ["date", "TEXT", "Not null (format: YYYY-MM-DD)"],
                    ["description", "TEXT", "Nullable"],
                    ["created_at", "TEXT", "Default datetime('now')"],
                  ].map(([col, type, constraint], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{col}</td>
                      <td className="px-4 py-2.5 text-blue-400 font-mono text-xs">{type}</td>
                      <td className="px-4 py-2.5 text-gray-400 text-xs">{constraint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Functions */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">8.4.3 Functions to Implement in database/db.py</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed overflow-x-auto">{`def get_db():
    """Open and return a database connection."""
    conn = sqlite3.connect("spendly.db")
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")  # Critical!
    return conn

def init_db():
    """Create tables if they don't already exist."""
    db = get_db()
    db.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now'))
        )
    """)
    db.execute("""
        CREATE TABLE IF NOT EXISTS expenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            amount REAL NOT NULL,
            category TEXT NOT NULL,
            date TEXT NOT NULL,
            description TEXT,
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    """)
    db.commit()

def seed_db():
    """Insert demo data once (prevents duplicates)."""
    db = get_db()
    existing = db.execute("SELECT COUNT(*) FROM users").fetchone()[0]
    if existing > 0:
        return  # Exit early -- don't insert again
    from werkzeug.security import generate_password_hash
    db.execute(
        "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
        ("Demo User", "demo@spendly.com", generate_password_hash("demo123"))
    )
    db.commit()`}</pre>
          </div>
        </div>

        {/* Implementation Rules */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.4.4 Implementation Rules</h3>
          <ul className="flex flex-col gap-2">
            {[
              "No ORMs — do not use SQLAlchemy. Write raw SQL.",
              "Parameterized queries only — never use Python string formatting inside SQL.",
              "Foreign keys must be ON — explicitly set PRAGMA foreign_keys = ON.",
              "Store amounts as REAL (float), not INTEGER.",
              "Hash passwords with Werkzeug.",
              "Date format: YYYY-MM-DD.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                <span>{item.startsWith("No ORMs") || item.startsWith("Parameterized") || item.startsWith("Foreign") ? (
                  item
                ) : item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Acceptance Criteria */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.4.5 Acceptance Criteria</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Database file is created on app startup.",
              "Both tables exist with correct schema and constraints.",
              "Demo user exists with a properly hashed password.",
              "8 sample expenses exist spread across categories.",
              "Running seed again does NOT create duplicate records.",
              "App starts without errors.",
              "Foreign key enforcement is working.",
              "All queries use parameterized SQL.",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-4 h-4 rounded border border-green-400/50 bg-green-400/10 flex items-center justify-center shrink-0">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 8.5 Plan Mode Deep Dive */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">8.5 Plan Mode — Deep Dive</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.5.1 What Is Plan Mode?</h3>
          <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Definition</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Plan Mode is a special operating mode in Claude Code where it{" "}
              <span className="font-semibold text-white">only reads, never writes</span>. During Plan Mode:
            </p>
          </div>
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "Claude Code spawns multiple agents that explore and read your entire codebase.",
              "It reads your spec document, existing files, and project structure.",
              "Zero file modifications happen — it cannot write, edit, or create files.",
              "At the end, it produces a detailed implementation plan.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400 italic">
            Think of it as a &quot;thinking phase&quot; before any actual coding begins.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.5.2 How to Activate Plan Mode</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-sm text-green-400 font-mono">{`# Method 1\nShift + Tab (press twice)\n\n# Method 2\n/plan`}</pre>
          </div>
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl px-4 py-3">
            <p className="text-sm text-gray-300">
              When Plan Mode is active, you&apos;ll see:{" "}
              <span className="font-mono text-amber-400 font-semibold">Plan Mode ON</span> in the interface.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.5.3 Example Prompt Used in Plan Mode</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Read .claude/specs/01-database-setup.md and the existing\ndatabase/db.py and app.py, then generate an implementation\nplan.\n\nSave this plan to .claude/plans/01-database-setup.md`}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.5.4 Implementing the Plan</h3>
          <ol className="flex flex-col gap-2">
            {[
              "Exit Plan Mode.",
              "Tell Claude Code to implement the plan.",
              "Review each change manually — approve or reject every edit.",
              "Claude Code runs its own tests to verify.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 8.6 Good Practices */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">8.6 Good Practices for Plan Mode</h2>

        {/* Model Selection */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.6.1 Model Selection</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Model</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Speed</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Power</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Token Cost</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Haiku", "Fastest", "Basic", "Low", "Simple tasks, quick edits"],
                  ["Sonnet", "Balanced", "Good", "Medium", "Most everyday features"],
                  ["Opus", "Slowest", "Strongest", "High", "Complex planning, large refactors"],
                ].map(([model, speed, power, cost, best], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className={`px-4 py-2.5 font-semibold text-xs ${i === 0 ? "text-blue-400" : i === 1 ? "text-green-400" : "text-purple-400"}`}>{model}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{speed}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{power}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{cost}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-950/30 border border-green-500/20 rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-1">Best Practice</p>
            <p className="text-sm text-gray-300">
              Recommended workflow: <span className="font-semibold text-white">Use Opus for planning</span> →{" "}
              <span className="font-semibold text-white">Use Sonnet for coding</span>.
            </p>
          </div>
        </div>

        {/* Extended Thinking */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.6.2 Extended Thinking</h3>
          <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">What is it?</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Normally, when you ask Claude a question, it starts answering immediately. For complex questions,
              this can lead to problems — it starts &quot;talking&quot; before it has fully &quot;thought.&quot;
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Extended Thinking = a whiteboard phase.</span> Claude first
              writes its reasoning in a scratchpad, then produces its final answer.
            </p>
          </div>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-400 font-mono leading-relaxed">{`Question received
        |
        v
[ Reasoning Phase -- Scratchpad ]  <- Internal thoughts
        |
        v
[ Response Phase ]                 <- Final answer based on completed reasoning`}</pre>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400">How to enable/disable:</p>
            <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
              <pre className="text-sm text-green-400 font-mono">{`/config\n# Navigate to 'thinking' -> set to true or false`}</pre>
            </div>
          </div>
        </div>

        {/* Effort Level */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.6.3 Effort Level</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Effort Level directly controls how many tokens Claude can use during the reasoning/scratchpad phase.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Effort Level</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Token Budget</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Use When</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Low", "~500–1,000 tokens", "Quick, simple planning"],
                  ["Medium", "Moderate", "Most everyday features"],
                  ["High", "Large budget", "Complex features with many files"],
                  ["Max", "Unlimited", "Only with Opus, very complex architecture"],
                ].map(([level, budget, when], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className={`px-4 py-2.5 font-semibold text-xs ${i === 0 ? "text-blue-400" : i === 1 ? "text-green-400" : i === 2 ? "text-yellow-400" : "text-red-400"}`}>{level}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{budget}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-sm text-green-400 font-mono">{`/effort low\n/effort medium\n/effort high\n/effort max\n/effort auto   <- Recommended: Claude decides automatically`}</pre>
          </div>
        </div>

        {/* Ultraplan */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">8.6.4 Ultraplan</h3>
          <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">What is Ultraplan?</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Ultraplan is a superior, remote version of Plan Mode that runs on Anthropic&apos;s cloud servers
              using Opus 4 — always.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Feature</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Regular Plan Mode</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Ultraplan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Where it runs", "Your local machine", "Cloud (Anthropic's servers)"],
                  ["Model used", "Whatever you've selected", "Opus 4 (always)"],
                  ["Editing experience", "Terminal output", "Rich web editor"],
                  ["Best for", "Typical features", "Highly complex features"],
                ].map(([feature, regular, ultra], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{feature}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{regular}</td>
                    <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{ultra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-sm text-green-400 font-mono">{`/ultraplan\n# OR include the word "ultraplan" in your prompt:\nultraplan the registration feature for this website`}</pre>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400 font-semibold">When to use Ultraplan:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Regular Plan Mode output doesn't satisfy you.",
                "Extremely complex features touching many files.",
                "Deep architectural decisions.",
                "Mass-level refactoring.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 8.7 Git Workflow */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.7 Git Workflow — Commit, Push, PR, Merge</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
          <pre className="text-sm text-green-400 font-mono leading-relaxed">{`git add .
git commit -m "create database setup"
git push origin feature/database-setup

# On GitHub: Compare & Pull Request -> Confirm merge
git checkout main
git pull origin main
git branch -D feature/database-setup`}</pre>
        </div>
      </div>

      {/* 8.8 Full SDD Workflow Summary */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.8 Full SDD Workflow Summary</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Step</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Command / Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Start new Claude Code session", "Rename to database setup"],
                ["2", "Pull latest code", "git pull origin main"],
                ["3", "Create & switch to new branch", "git checkout -b feature/database-setup"],
                ["4", "Create spec document", "Write .claude/specs/01-database-setup.md"],
                ["5", "Review the spec document", "Read thoroughly, validate completeness"],
                ["6", "Enter Plan Mode", "Shift+Tab twice or /plan"],
                ["7", "Generate implementation plan", "Provide prompt referencing spec and files"],
                ["8", "Review the generated plan", "Verify plan matches spec"],
                ["9", "Save plan to .claude/plans/", "01-database-setup.md"],
                ["10", "Implement the plan", "Approve edits manually"],
                ["11", "Validate against acceptance criteria", "Check each item in the spec"],
                ["12", "Iterate if required", "Re-prompt if anything is wrong"],
                ["13", "Commit changes", "git add . && git commit"],
                ["14", "Push to GitHub", "git push origin feature/database-setup"],
                ["15", "Create PR, merge, cleanup", "PR → merge → switch to main → pull → delete branch"],
              ].map(([num, step, action], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-bold">{num}</td>
                  <td className="px-4 py-2.5 text-white text-xs font-semibold">{step}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs font-mono">{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Key Insight</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Plan Mode is the bridge between your spec document and the actual implementation. By keeping
            the thinking phase (Plan Mode) separate from the coding phase, you catch design problems early
            — before they&apos;re baked into code.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
