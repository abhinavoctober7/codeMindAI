import LessonLayout from "@/components/LessonLayout";

export default function Class13() {
  return (
    <LessonLayout slug="class-13">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 13</p>
        <h1 className="text-3xl font-bold text-white">Claude Code × MCP (Model Context Protocol)</h1>
      </div>

      {/* 13.1 What is MCP */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.1 What is MCP?</h2>
        <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Note</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            MCP (Model Context Protocol) is an open standard created by Anthropic that acts as a{" "}
            <span className="font-semibold text-white">universal connector</span> between Claude Code and
            external tools, services, and data sources. The key idea: provide Claude Code with more tools.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Property</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Full Form", "Model Context Protocol"],
                ["Created By", "Anthropic"],
                ["Type", "Open Standard / Universal Connector"],
                ["Purpose", "Connect any external tool/service to any LLM"],
                ["Adoption", "Used by virtually every major AI player today"],
              ].map(([prop, detail], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{prop}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          <span className="font-semibold text-white">One-line summary:</span> MCP is a standardized way to
          plug any external tool, service, or data source into an LLM — without writing brittle, custom
          integration code.
        </p>
      </div>

      {/* 13.2 The Problem Before MCP */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.2 The Problem Before MCP</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Before MCP existed, connecting an LLM to an external tool (e.g., GitHub, Jira, a database) had
          serious problems:
        </p>
        <ul className="flex flex-col gap-1.5">
          {[
            "You had to write custom integration code for every tool.",
            "The code was not standardized — every developer did it differently.",
            "If the service provider changed their API, your connection code broke and you had to rewrite it.",
            "This made integrations fragile, repetitive, and unmaintainable.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 13.3 Why MCP in Claude Code */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.3 Why MCP in Claude Code?</h2>
        <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Note</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            MCP lets you add many more tools to Claude Code, dramatically extending its capabilities.
          </p>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          Claude Code, by itself, is powerful but limited to your local file system and shell. MCP breaks
          those limits.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.3.1 Default Tools Claude Code Already Has</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Tool</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What It Does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Read", "Read files from the file system"],
                  ["Write", "Create new files / write into existing files"],
                  ["Bash", "Execute command-line / shell commands"],
                ].map(([tool, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-semibold">{tool}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.3.2 What Claude Code Can Do With MCP</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Access your GitHub repositories (read repos, issues, PRs, commits)",
              "Access your Google Drive documents",
              "Access your Jira tickets",
              "Access your Slack messages",
              "Access your Figma designs",
              "Access your databases (SQLite, MySQL, PostgreSQL)",
              "Access AWS / Docker / Notion — and much more",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-300 bg-white/[0.02] border border-white/5 rounded-lg px-3 py-2">
                <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 13.4 Practical Integration 1 — SQLite */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.4 Practical Integration 1 — Database MCP Server (SQLite)</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.4.1 Setup</h3>
          <p className="text-sm text-gray-400">
            Server used:{" "}
            <span className="font-mono text-white">@executeautomation/database-server</span> — works with
            SQLite, MySQL, PostgreSQL.
          </p>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`claude mcp add --transport stdio sqlite -- \\
  npx -y @executeautomation/database-server \\
  /absolute/path/to/spendly.db`}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.4.2 Transport Mechanisms</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Transport</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["stdio", "Local setup — process runs on your machine"],
                  ["http / sse", "Remote setup — server runs on a remote host"],
                ].map(([transport, useCase], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-semibold">{transport}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.4.3 Verification</h3>
          <p className="text-sm text-gray-400">
            Inside Claude Code, run{" "}
            <span className="font-mono text-[#cc785c]">/mcp</span>. You should see the SQLite server with
            status <span className="font-semibold text-green-400">Connected</span>.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.4.4 Example Prompts</h3>
          <div className="flex flex-col gap-2">
            {[
              "List all tables in the Spendly database",
              "Describe the schema of the expenses table",
              "Show total spending grouped by category",
            ].map((prompt, i) => (
              <div key={i} className="bg-[#0d1117] border border-white/10 rounded-lg px-4 py-2.5">
                <p className="text-xs text-gray-300 font-mono">{prompt}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.4.5 Why This is Powerful</h3>
          <ul className="flex flex-col gap-1.5">
            {[
              "No need to write any Python or SQL.",
              "Works on tiny demos (2 tables) and on real-world projects (15–20+ tables).",
              "Helps you understand schemas and relationships on the fly.",
              "Works across SQLite, MySQL, PostgreSQL — same MCP server.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 13.5 Practical Integration 2 — Figma */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.5 Practical Integration 2 — Figma MCP Server</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.5.1 What is Figma?</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Figma is a design tool used by designers and product managers to create wireframes and UI/UX
            components. With MCP, the pipeline from wireframe to working code can be automated.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.5.2 Setup</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono">{`claude plugin install figma@claude-plugins-official`}</pre>
          </div>
          <p className="text-sm text-gray-400">
            This installs a Claude Code Plugin which bundles: the Figma MCP Server + Skills for common
            Figma workflows.
          </p>
          <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Note</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Plugin</span> = a package that can contain skills,
              agents, MCP servers, and hooks — all rolled into one.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.5.3 Example Prompt — &quot;Coming Soon&quot; Page</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`I want to add an Analytics module to the Spendly expense tracker app.
Here is the Figma design for the Coming Soon page:
https://www.figma.com/make/...
Please do the following:
1. Read the Figma design and convert it to a Jinja2 HTML template
   (analytics.html) that matches the design exactly
2. Add an "Analytics" menu item to the navbar in base.html
   - Visible only to logged-in users
3. Create a Flask route in app.py for /analytics
   - Protect it so only logged-in users can access
4. Highlight "Analytics" as active when on that page`}</pre>
          </div>
          <div className="bg-green-950/30 border border-green-500/20 rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-1">Key Insight</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Designer makes the wireframe → developer gives the URL → Claude Code builds the page. The
              manual translation step is eliminated.
            </p>
          </div>
        </div>
      </div>

      {/* 13.6 Practical Integration 3 — GitHub */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.6 Practical Integration 3 — GitHub MCP Server</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          The GitHub MCP Server lets Claude Code read repos, issues, PRs, create/merge PRs, push commits,
          and automate the entire Git workflow.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.6.1 Step 1 — Create a GitHub Personal Access Token (PAT)</h3>
          <ol className="flex flex-col gap-2">
            {[
              "Go to github.com → Settings → Developer Settings → Personal Access Tokens → Fine-grained tokens.",
              'Click "Generate new token".',
              "Set token name, expiration date, repository access, and permissions:",
              "Click Generate and copy the token immediately.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                {i === 2 ? (
                  <div className="flex flex-col gap-1">
                    <span>{step}</span>
                    <ul className="flex flex-col gap-1 mt-1">
                      {[
                        "repo — read/write repos, PRs, issues",
                        "workflow — trigger GitHub Actions",
                        "PR create + merge permissions",
                      ].map((perm, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="text-[#cc785c] mt-0.5 shrink-0">–</span>
                          {perm}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <span>{step}</span>
                )}
              </li>
            ))}
          </ol>
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Important</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Always enable <span className="font-semibold text-white">PR create + merge permissions</span>{" "}
              explicitly when creating the token. Forgetting this will cause failures when trying to merge.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.6.2 Step 2 — Add the GitHub MCP Server</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`export PAT=github_pat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
claude mcp add --transport http github \\
  https://api.githubcopilot.com/mcp \\
  -H "Authorization: Bearer $PAT"`}</pre>
          </div>
          <p className="text-sm text-gray-400">
            Notice the transport here is{" "}
            <span className="font-mono text-[#cc785c]">http</span> (not{" "}
            <span className="font-mono text-white">stdio</span>), because GitHub&apos;s MCP server runs remotely.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.6.3 Example Prompts</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Prompt</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What Happens</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['"Which is my most starred repo?"', "Lists top-starred repo with stars/forks"],
                  ['"How many open issues? Give a summary"', "Groups all issues by category"],
                  ['"Are there open PRs? Summarize them"', "Lists PRs with summaries"],
                  ["Full git workflow automation", "Commit, push, PR, merge, cleanup in one shot"],
                ].map(([prompt, what], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{prompt}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.6.4 The &quot;Full Automation&quot; Prompt</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Commit all changes with an appropriate conventional commit message,
push to the current feature branch, create a pull request into main
with a proper title and description based on the spec, merge it
using squash merge, switch to main, pull latest, and delete the
feature branch locally.`}</pre>
          </div>
        </div>
      </div>

      {/* 13.7 Top 10 MCP Servers */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.7 Top 10 MCP Servers Every Developer Should Know</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Server</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Category</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Killer Use Case</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "SQLite / DB", "Data", "Natural-language DB queries"],
                ["2", "Figma", "Design", "Design → working code"],
                ["3", "GitHub", "Version Control", "Full Git workflow automation"],
                ["4", "Context7", "Documentation", "Always-current library docs"],
                ["5", "Jira", "Project Mgmt", "Read tickets → implement features"],
                ["6", "Notion", "Knowledge/Docs", "Read PRDs → scaffold features"],
                ["7", "Slack", "Communication", "Read incidents → fix bugs"],
                ["8", "AWS", "Cloud/DevOps", "Deploy + monitor from chat"],
                ["9", "Docker", "DevOps/Containers", "Generate/optimize Dockerfiles"],
                ["10", "(Your choice!)", "—", "Add your favorite!"],
              ].map(([num, server, category, use], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-500 text-xs font-mono">{num}</td>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{server}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{category}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">13.7.1 Context7</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Context7 pulls live, up-to-date documentation for any library or framework directly into
              Claude&apos;s context. LLMs have a knowledge cutoff — Context7 ensures you always use the
              latest API syntax.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">13.7.2 Jira</p>
            <div className="bg-[#0d1117] border border-white/10 rounded-lg px-3 py-2 mt-1">
              <pre className="text-xs text-gray-300 font-mono">{`Read JIRA-234 and implement the feature`}</pre>
            </div>
            <p className="text-sm text-gray-400">
              No more switching between Jira UI and your editor — context flows automatically.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">13.7.3 Notion</p>
            <div className="bg-[#0d1117] border border-white/10 rounded-lg px-3 py-2 mt-1">
              <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Read the product requirements doc for the
Analytics module in Notion and implement
the feature in my Flask app`}</pre>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#cc785c] uppercase tracking-widest">13.7.4 Slack</p>
            <div className="bg-[#0d1117] border border-white/10 rounded-lg px-3 py-2 mt-1">
              <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Check #incidents for the latest production
error, read the details, find the bug in
the codebase and fix it`}</pre>
            </div>
            <p className="text-sm text-gray-400 text-xs">
              Full incident-response loop: read incident → diagnose → fix → notify team.
            </p>
          </div>
        </div>
      </div>

      {/* 13.8 Managing MCP Servers */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.8 Managing MCP Servers</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.8.1 Add an MCP Server</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`# Local (stdio)
claude mcp add --transport stdio <name> -- <command> <args>

# Remote (http)
claude mcp add --transport http <name> <url> -H "Authorization: Bearer $TOKEN"`}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">13.8.2 List, Reconnect, Remove</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`# List all servers (inside Claude Code)
/mcp

# Remove a server
claude mcp remove <server-name>`}</pre>
          </div>
        </div>
      </div>

      {/* 13.9 Important Caveat */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">13.9 Important Caveat — Don&apos;t Overload MCP Servers</h2>
        <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Important — The Single Biggest Mistake Beginners Make</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            When you connect many MCP servers, every tool&apos;s description automatically loads into
            Claude&apos;s context window at the start of every session. This wastes context tokens, slows
            responses, and degrades model performance.
          </p>
        </div>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl px-4 py-3">
          <p className="text-sm text-white font-semibold leading-relaxed">
            Keep your MCP server list MINIMAL. Only enable the ones you genuinely use regularly. Remove the
            rest.
          </p>
        </div>
      </div>

      {/* 13.10 Golden Rules */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.10 Golden Rules</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Use stdio for local tools, http for remote APIs.",
            "Always grant the MCP server only the permissions it actually needs.",
            "Verify connection with /mcp before issuing prompts.",
            "Keep MCP server count minimal — quality over quantity.",
            "For GitHub PAT: enable PR create + merge permissions explicitly.",
            "For local DB: use absolute file paths (not relative).",
            "Never blindly install every MCP server you find.",
            "Never commit your PAT / API keys to Git.",
          ].map((rule, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {rule}
            </li>
          ))}
        </ol>
      </div>
    </LessonLayout>
  );
}
