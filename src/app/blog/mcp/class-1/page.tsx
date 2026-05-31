import MCPLessonLayout from "@/components/MCPLessonLayout";

export default function MCPClass1() {
  return (
    <MCPLessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Class 1 — The Trailer</p>
        <h1 className="text-3xl font-bold text-white">MCP in Action Before the Theory</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before the concepts, before the architecture, before the code — see what MCP actually
          does. This class walks through a real project built with MCP: an end-to-end AI newsletter
          generator, from raw research to production HTML email, using just three prompts.
        </p>
      </div>

      {/* 1.1 The Mini-Series */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 The MCP Trilogy</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          MCP (Model Context Protocol) is one of those topics where understanding unfolds in layers.
          Three videos — or in our case, three classes — each addressing a different depth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              label: "Class 2",
              title: "The Why",
              focus: "Conceptual Foundation",
              color: "text-[#6366f1]",
              border: "border-[#6366f1]/30",
              bg: "bg-[#6366f1]/5",
              desc: "Why MCP came into existence. The exact problem it solves: AI isolation, fragmented N×M integrations, and lack of context.",
            },
            {
              label: "Class 3",
              title: "The What",
              focus: "Architecture",
              color: "text-purple-400",
              border: "border-purple-400/30",
              bg: "bg-purple-400/5",
              desc: "How MCP works at the architecture level. Servers, clients, hosts. How they interact. Tools, Resources, Prompts.",
            },
            {
              label: "Class 4",
              title: "The How",
              focus: "Hands-on Code",
              color: "text-green-400",
              border: "border-green-400/30",
              bg: "bg-green-400/5",
              desc: "Building your own MCP servers and clients from scratch. Solving real problems. Practical implementation with the TypeScript SDK.",
            },
          ].map(({ label, title, focus, color, border, bg, desc }) => (
            <div key={title} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</p>
              <p className={`text-sm font-bold ${color}`}>{title}</p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wide">{focus}</p>
              <p className="text-xs text-gray-300 leading-relaxed mt-1">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Why This Class Comes First</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A teacher&apos;s job is not just to explain — it&apos;s to inspire. Before three information-dense
            classes on MCP, the most valuable thing is to show you a real problem being solved with MCP.
            Once you see it with your own eyes, the theory in the next classes becomes far more meaningful.
          </p>
        </div>
      </div>

      {/* 1.2 The Problem */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 The Problem: Keeping Up with AI</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          In today&apos;s AI landscape, new products, libraries, and research papers ship every single day.
          If you try to build a 6-month learning roadmap today, within one or two months many of those
          topics will be obsolete — replaced by something newer. This is not a student problem. Even
          people who have been in this domain for six or seven years face it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { issue: "Rapid AI Growth", detail: "New products, papers, and libraries ship daily — the pace is impossible to track manually" },
            { issue: "Obsolete Roadmaps", detail: "A roadmap you build today may have outdated topics within weeks of creating it" },
            { issue: "No Time to Execute", detail: "Even great ideas (like starting a newsletter) remain unexecuted because research alone takes hours every week" },
          ].map(({ issue, detail }) => (
            <div key={issue} className="bg-red-950/20 border border-red-500/20 rounded-xl p-3 flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-red-400">{issue}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 text-sm leading-relaxed">
            One of the most effective ways to stay updated is through newsletters. Subscribing to
            multiple AI newsletters and reading at least one daily is a surprisingly powerful habit —
            it keeps you in the loop on what actually matters without spending hours browsing.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">The Insight</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              What if we started our own AI newsletter? Not manually — automatically. Research via AI,
              writing via AI, design via AI. A system where the entire newsletter creation process
              is automated, so it can run on a regular schedule without eating hours of your week.
              That is exactly the problem MCP was used to solve here.
            </p>
          </div>
        </div>
      </div>

      {/* 1.3 Newsletter Structure */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.3 Step 1 — Visualise the Final Product</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Before writing a single prompt or touching any tool, the most important step is to have a
          clear picture in your head of what the final newsletter looks like. After studying several
          successful AI newsletters, a 9-section structure was designed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { n: 1, title: "Introduction", desc: "A short paragraph that builds curiosity and sets expectations for this issue" },
            { n: 2, title: "Big Story of the Week", desc: "The single piece of AI news that shook the world this week" },
            { n: 3, title: "Quick Updates (3–5)", desc: "Important but smaller news items — things you should know about" },
            { n: 4, title: "Top Research Papers", desc: "This week's most interesting papers with summaries and download links" },
            { n: 5, title: "Top GitHub Repos", desc: "Trending AI repositories from major companies and the open-source community" },
            { n: 6, title: "Quick Tutorial", desc: "A 5-minute read that teaches you something useful — short but valuable" },
            { n: 7, title: "Top AI Products", desc: "New AI products that launched this week, described crisply" },
            { n: 8, title: "Top X Posts", desc: "The most popular tweets from leading AI personalities this week" },
            { n: 9, title: "Closing Notes", desc: "A summary of the issue plus a teaser for what's coming next week" },
          ].map(({ n, title, desc }) => (
            <div key={n} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
              <span className="w-6 h-6 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                {n}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold text-white">{title}</p>
                <p className="text-[11px] text-gray-500 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          This is not claimed to be the perfect newsletter structure — but it is a very solid
          starting point. And once this picture is clear in your head, the rest of the design
          becomes much easier.
        </p>
      </div>

      {/* 1.4 The Process */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.4 Step 2 — Define the Process Clearly</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Since all the work is being done by AI, the process must be spelled out with complete
          clarity. There are three stages.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-gray-400 font-mono leading-loose whitespace-pre-wrap">{`Stage 1 — Research
  AI searches multiple platforms based on a prompt
  Output: 5 separate research documents (Markdown)

Stage 2 — Editing
  AI reads the 5 documents + a sample template
  Combines everything into a structured final draft
  Output: final_draft.md

Stage 3 — Designing
  AI reads the final draft + design specifications
  Generates production-ready HTML email
  Output: newsletter.html + newsletter.txt (plain text fallback)`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { stage: "1", name: "Research", input: "Prompts + data sources", process: "AI searches 5 platforms", output: "5 Markdown files", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5" },
            { stage: "2", name: "Editing", input: "5 research files + template", process: "AI combines and formats", output: "1 final draft (Markdown)", color: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/5" },
            { stage: "3", name: "Designing", input: "Final draft + design specs", process: "AI generates HTML", output: "Production-ready HTML email", color: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/5" },
          ].map(({ stage, name, input, process, output, color, border, bg }) => (
            <div key={stage} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full bg-white/5 ${color} text-xs flex items-center justify-center font-bold shrink-0`}>{stage}</span>
                <p className={`text-sm font-bold ${color}`}>{name}</p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-400">
                <div className="flex gap-2"><span className="text-gray-600 w-14 shrink-0">Input</span><span>{input}</span></div>
                <div className="flex gap-2"><span className="text-gray-600 w-14 shrink-0">Process</span><span>{process}</span></div>
                <div className="flex gap-2"><span className="text-gray-600 w-14 shrink-0">Output</span><span className="text-white font-medium">{output}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1.5 The Tools */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 Step 3 — Choose the Tools</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Claude was chosen as the main AI for a straightforward reason: MCP was built by Anthropic —
          the same company that makes Claude. That means Claude has the tightest MCP integration of
          any model. Other chatbots lag behind in MCP support; Claude is where MCP works best.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Claude was then connected to 8 MCP tools. Here is what each one does in the newsletter pipeline:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { tool: "Web Search", server: "Brave Search MCP", purpose: "Search the internet for the latest AI news (Big Story + Quick Updates sections)" },
            { tool: "GitHub", server: "GitHub MCP", purpose: "Find trending AI repositories of the week" },
            { tool: "Google Drive", server: "Google Drive MCP", purpose: "Read the Content Ideas file, Performance Data file, and Sample Newsletter template" },
            { tool: "Arxiv", server: "Arxiv MCP", purpose: "Find trending AI research papers published this week" },
            { tool: "Gmail", server: "Gmail MCP", purpose: "Read reader feedback emails to understand what the audience wants" },
            { tool: "Product Hunt", server: "Product Hunt MCP", purpose: "Find newly launched AI products for the week" },
            { tool: "Twitter / X", server: "Twitter MCP", purpose: "Find the most popular tweets from leading AI personalities" },
            { tool: "Local Filesystem", server: "Filesystem MCP", purpose: "Save all research files and final outputs to the Desktop folder" },
          ].map(({ tool, server, purpose }) => (
            <div key={tool} className="flex flex-col gap-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-white w-32 shrink-0">{tool}</p>
                <code className="text-xs text-[#6366f1] font-mono">{server}</code>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{purpose}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">The Key Point</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            You might wonder: why do we need MCP to connect Claude to these tools? Why not just call
            the APIs directly? That is exactly the question the next two classes answer in depth.
            For now, just hold this: Claude is the main AI, and it has been given the capability of
            all these tools. The connection was made through MCP.
          </p>
        </div>
      </div>

      {/* 1.6 Research Phase Demo */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">1.6 Demo: The Research Phase</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Research Phase has two parts. First, Claude figures out <span className="text-white font-medium">what</span> to
          research. Then it goes and does the actual research.
        </p>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Part A — What to Research</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Before searching anywhere, Claude reads three sources to understand what the audience
            wants and what has worked historically:
          </p>
          <div className="flex flex-col gap-2">
            {[
              { source: "Content Ideas file", location: "Google Drive", desc: "A list of topics the newsletter could cover — potential themes to research around" },
              { source: "Performance Data file", location: "Google Drive", desc: "Past newsletter data: send date, subject line, open rate, click rate, average read time. This data comes from tools like Mailchimp once the newsletter has been running for a while." },
              { source: "Feedback emails", location: "Gmail", desc: "Reader replies and feedback. Claude searches the inbox and reads what the audience has explicitly asked for." },
            ].map(({ source, location, desc }) => (
              <div key={source} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white">{source}</p>
                    <span className="text-xs text-[#6366f1] bg-[#6366f1]/10 px-2 py-0.5 rounded-full">{location}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-gray-500 mb-2">Example performance data Claude reads</p>
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Date        Subject                Open Rate  Click Rate  Avg Read Time
2024-01-15  AI in Healthcare       45%        12%         4.5 min
2024-01-22  LLM Comparison Guide   52%        18%         5.2 min
2024-01-29  Open Source LLMs       61%        22%         6.1 min`}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Part B — Conducting the Research</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Once Claude knows what to research, it goes to five platforms and generates one
            Markdown file for each. Importantly — Claude is smart enough to run these in
            parallel, not sequentially.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { platform: "Web Search", finds: "Top AI news of the week", file: "web_research.md", section: "Big Story + Quick Updates" },
              { platform: "Arxiv", finds: "Trending research papers", file: "arxiv_research.md", section: "Top Research Papers" },
              { platform: "GitHub", finds: "Trending AI repositories", file: "github_repos.md", section: "Top GitHub Repos" },
              { platform: "Product Hunt", finds: "Newly launched AI products", file: "ai_products.md", section: "Top AI Products" },
              { platform: "Twitter / X", finds: "Popular AI tweets from key figures", file: "top_tweets.md", section: "Top X Posts" },
            ].map(({ platform, finds, file, section }) => (
              <div key={platform} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <p className="text-xs font-semibold text-white w-28 shrink-0">{platform}</p>
                <p className="text-xs text-gray-400 flex-1">{finds}</p>
                <code className="text-xs text-[#6366f1] font-mono w-44 shrink-0">{file}</code>
                <p className="text-xs text-gray-500 w-36 shrink-0 text-right">→ {section}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-gray-500 mb-2">Output — 5 files appear in Desktop/AI Newsletter/</p>
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`AI Newsletter/
├── web_research.md      ← Big Story + Quick Updates
├── arxiv_research.md    ← Top Research Papers
├── github_repos.md      ← Top GitHub Repos
├── ai_products.md       ← Top AI Products
└── top_tweets.md        ← Top X Posts`}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">The Research Prompt</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            All of Phase 1 is triggered by a single prompt. You copy it, paste it into
            Claude Desktop, hit Enter — and then just watch.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Prompt 1 — Research Phase</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`You are an AI Newsletter Research Agent.
Your task is to generate fresh newsletter content by combining
past performance insights, content ideas, audience feedback,
and community trends. Follow the instructions carefully.

Step 1: Read source files from Google Drive
  1. File: "Content Ideas"    — list of possible topics
  2. File: "Performance Data" — past newsletter metrics

Step 2: Check email feedback
  Search Gmail for recent feedback emails
  Analyse what the audience is asking for

Step 3: Conduct research based on the insights above
  Part A: Web Search    → save to web_research.md
  Part B: Arxiv         → save to arxiv_research.md
  Part C: GitHub        → save to github_repos.md
  Part D: Product Hunt  → save to ai_products.md
  Part E: Twitter/X     → save to top_tweets.md

Save all five files to: Desktop/AI Newsletter/`}</pre>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">What Claude does after you hit Enter</p>
            <ol className="flex flex-col gap-2">
              {[
                "Reads the two Google Drive files",
                "Searches Gmail for feedback emails, analyses what readers want",
                "Determines research focus areas based on performance data + feedback",
                "Fires all 5 platform searches — partially in parallel",
                "Saves each research output as a separate Markdown file on your Desktop",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* 1.7 Editing Phase Demo */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">1.7 Demo: The Editing Phase</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          At this point, five research Markdown files are sitting on the Desktop. Now Claude
          reads all five, picks up a sample newsletter template from Google Drive, and compiles
          everything into one final draft.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-[#6366f1] font-semibold mb-3">Prompt 2 — Editing Phase</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`You are an AI Newsletter Assembly Agent.
Your task is to create this week's AI newsletter using
the research material and the sample template.

Step 1: Read the source research files
  Location: Desktop/AI Newsletter/
  Files: web_research.md, arxiv_research.md,
         github_repos.md, ai_products.md, top_tweets.md

Step 2: Read the sample newsletter template
  Location: Google Drive → AI Newsletter folder
  File: "Sample Newsletter"

Step 3: Generate the newsletter
  - Populate each section with the latest research
  - Ensure smooth transitions between sections
  - Maintain a clear, engaging editorial tone
  - Add working links for every item listed

Output:
  Save as: final_draft.md
  Location: Desktop/AI Newsletter/`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The result is a complete newsletter draft in Markdown — with every section populated,
          all links included, and the same structure as the sample template. The file appears
          in the Desktop folder alongside the five research files.
        </p>
      </div>

      {/* 1.8 Designing Phase Demo */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">1.8 Demo: The Designing Phase</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The final phase converts the Markdown draft into a production-ready HTML email. Two
          output formats are generated — HTML for the rich designed version, and plain text as
          a fallback for email clients that don&apos;t render HTML well (or flag it as spam).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-[#6366f1] font-semibold mb-3">Prompt 3 — Designing Phase</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`You are an Email Template Builder Agent.
Convert the finalised weekly newsletter Markdown into a
production-ready HTML email with solid design and
compatibility across major email clients.

Input:
  Location: Desktop/AI Newsletter/
  File: final_draft.md

Design requirements:
  Layout:  Max width 600px, centred, clear section headers
  CSS:     Inline only — no external stylesheets
  Fonts:   Arial / Helvetica
  Clients: Must render correctly in Gmail, Outlook, Apple Mail

Content mapping:
  Introduction   → Full-width banner
  Big Story      → Featured hero card
  Quick Updates  → Numbered list
  Research Papers → Styled table
  GitHub Repos   → Card layout
  AI Products    → Product showcase cards
  Top Tweets     → Quoted tweet cards
  Closing Notes  → Footer section

Output — save both files to Desktop/AI Newsletter/:
  1. newsletter.html  — designed HTML email
  2. newsletter.txt   — plain text fallback`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          When this prompt runs, Claude reads the final draft, applies the design specifications,
          and generates a complete HTML file. Open it in a browser — that is exactly how it
          will look when recipients open it in their email client. All links work. All sections
          are styled. Ready to send via Mailchimp or any email platform.
        </p>
      </div>

      {/* 1.9 The Punchline */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.9 The Punchline: How Much Code Did This Require?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          GitHub, Product Hunt, Twitter, Google Drive, Calendar, Arxiv, Gmail, local filesystem —
          eight tools integrated into Claude. How much code was written to make all of that work?
        </p>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-sm font-semibold text-white mb-1">Just one JSON configuration file.</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            No API client code. No custom function calls. No authentication boilerplate.
            One config file — and every tool becomes available to Claude.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">The entire MCP setup — claude_desktop_config.json</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "mcpServers": {
    "twitter": {
      "command": "npx",
      "args": ["-y", "@twitter/mcp-server"],
      "env": {
        "TWITTER_API_KEY": "your_key",
        "TWITTER_API_SECRET": "your_secret"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "your_token" }
    },
    "arxiv": {
      "command": "npx",
      "args": ["-y", "@arxiv/mcp-server"]
    },
    "google-drive": {
      "command": "npx",
      "args": ["-y", "@google/drive-mcp-server"],
      "env": { "GOOGLE_CREDENTIALS": "path/to/credentials.json" }
    },
    "gmail": {
      "command": "npx",
      "args": ["-y", "@google/gmail-mcp-server"],
      "env": { "GOOGLE_CREDENTIALS": "path/to/credentials.json" }
    },
    "product-hunt": {
      "command": "npx",
      "args": ["-y", "@producthunt/mcp-server"],
      "env": { "PH_API_TOKEN": "your_token" }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": { "BRAVE_API_KEY": "your_key" }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "env": { "ALLOWED_PATHS": "/Users/username/Desktop" }
    }
  }
}`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Each block has three fields: <code className="text-[#6366f1] bg-[#6366f1]/10 px-1 rounded text-xs">command</code> (the
          executable), <code className="text-[#6366f1] bg-[#6366f1]/10 px-1 rounded text-xs">args</code> (the server package),
          and <code className="text-[#6366f1] bg-[#6366f1]/10 px-1 rounded text-xs">env</code> (credentials).
          That is the entirety of what you need to write to give Claude access to a tool.
          And if the GitHub MCP server updates tomorrow? You change nothing. The config stays
          the same — the server handles its own updates.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Traditional API Integration</p>
            <ul className="flex flex-col gap-1.5 mt-1">
              {["Write a full API client for every tool", "Handle OAuth flows manually", "Build error handling from scratch", "Update code whenever the API changes", "Repeat all of the above for each AI model"].map((item) => (
                <li key={item} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#6366f1]/5 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest">MCP Configuration</p>
            <ul className="flex flex-col gap-1.5 mt-1">
              {["One JSON block per tool — that's it", "Credentials go in the env field", "MCP layer handles all error propagation", "Server updates automatically, no code changes", "Works with every MCP-compatible model"].map((item) => (
                <li key={item} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-[#6366f1] mt-0.5 shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 1.10 What's Next */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.10 What&apos;s Next</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          You have now seen MCP in action. An end-to-end newsletter — research, writing, and design
          — automated entirely by AI, triggered by three prompts, powered by eight tools, requiring
          zero API integration code. Only configuration.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now the natural questions arise: <span className="text-white font-medium">why</span> does MCP work this way?
          What problem was it designed to solve? <span className="text-white font-medium">What</span> is happening at
          the architecture level when Claude calls a tool? And <span className="text-white font-medium">how</span> do you build
          your own MCP server from scratch?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { next: "Class 2 → The Why", desc: "The N×M problem. Why MCP was invented. The exact failure modes it fixes.", color: "text-[#6366f1]", border: "border-[#6366f1]/30", bg: "bg-[#6366f1]/5" },
            { next: "Class 3 → The What", desc: "Architecture deep dive. Hosts, clients, servers. Tools vs Resources vs Prompts. Transport layers.", color: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/5" },
            { next: "Class 4 → The How", desc: "Build your own MCP server. Expose custom tools. Connect them to Claude Code.", color: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/5" },
          ].map(({ next, desc, color, border, bg }) => (
            <div key={next} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <p className={`text-xs font-bold ${color}`}>{next}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.11 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.11 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "The AI space moves too fast to track manually — newsletters are one of the most practical ways to stay current.",
            "MCP was used to build a fully automated newsletter pipeline: research → editing → designing, triggered by 3 prompts.",
            "The newsletter has 9 sections. Designing the output first — before writing a single prompt — is the most important step.",
            "The process has 3 phases: Research (5 Markdown files), Editing (1 final draft), Designing (HTML email + plain text).",
            "Claude was chosen because MCP is an Anthropic protocol — it has the best MCP support of any AI model available.",
            "Eight MCP tools were integrated. The entire integration required zero API client code — just a single JSON config file.",
            "Each MCP server block is command + args + env. When the server updates, your config stays unchanged.",
            "This class was the demo. The next three classes explain the why, the what, and the how behind everything you just saw.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </MCPLessonLayout>
  );
}
