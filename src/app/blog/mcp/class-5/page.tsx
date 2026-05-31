import MCPLessonLayout from "@/components/MCPLessonLayout";

export default function MCPClass5() {
  return (
    <MCPLessonLayout slug="class-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Class 5 — The How (Part 1)</p>
        <h1 className="text-3xl font-bold text-white">Claude Desktop + MCP Servers</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Classes 1–4 covered <span className="text-white font-medium">why</span> MCP exists and{" "}
          <span className="text-white font-medium">what</span> it is. Now it&apos;s time for the{" "}
          <span className="text-white font-medium">how</span>. In this first hands-on class you will
          connect Claude Desktop — a ready-made MCP host — to four real MCP servers and see the
          client–server communication in action without writing a single line of server code.
        </p>
      </div>

      {/* 5.1 The How: 3-Part Roadmap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.1 The &quot;How&quot; Roadmap</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The How section of this course is split into three videos. Each one adds one more layer of
          ownership over the MCP stack:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              num: "Part 1",
              title: "Experience MCP",
              subtitle: "This class",
              desc: "Use Claude Desktop as the host and connect it to existing MCP servers. No code written. Pure experience.",
              active: true,
            },
            {
              num: "Part 2",
              title: "Build Your Server",
              subtitle: "Next class",
              desc: "Keep Claude Desktop as the host but build your own custom MCP server from scratch and connect it.",
              active: false,
            },
            {
              num: "Part 3",
              title: "Build Your Client",
              subtitle: "Class after",
              desc: "Write your own MCP client too. Your client talks to your server — full end-to-end ownership.",
              active: false,
            },
          ].map((item) => (
            <div
              key={item.num}
              className={`rounded-xl p-4 border flex flex-col gap-2 ${
                item.active
                  ? "bg-[#6366f1]/10 border-[#6366f1]/40"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    item.active ? "bg-[#6366f1]/30 text-[#6366f1]" : "bg-white/10 text-gray-400"
                  }`}
                >
                  {item.num}
                </span>
                {item.active && (
                  <span className="text-xs text-[#6366f1] font-semibold">← You are here</span>
                )}
              </div>
              <p className={`font-semibold text-sm ${item.active ? "text-white" : "text-gray-300"}`}>
                {item.title}
              </p>
              <p className="text-xs text-gray-500">{item.subtitle}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Today: Claude Desktop is the client. Existing servers are the servers. All communication
          happens between these two parties — exactly as the architecture and lifecycle classes described.
        </p>
      </div>

      {/* 5.2 Two Ways to Connect */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.2 Two Ways to Connect an MCP Server</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When you want to attach an MCP server to Claude Desktop (or any AI host like Cursor), you
          have exactly two options:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">Method 1 — JSON Config File</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every AI host keeps a <code className="text-[#6366f1]">claude_desktop_config.json</code>{" "}
              file. You open it, find the <code className="text-[#6366f1]">"mcpServers"</code> key, and
              paste in the server&apos;s connection details (command, args, environment variables). Save,
              restart Claude Desktop — done.
            </p>
            <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10 mt-1">
              <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`{
  "mcpServers": {
    "my-server": {
      "command": "python3",
      "args": ["/path/to/server.py"]
    }
  }
}`}</pre>
            </div>
            <p className="text-xs text-[#6366f1] font-medium mt-1">
              Access: Settings → Developer → Edit Config
            </p>
          </div>
          <div className="bg-[#6366f1]/5 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">Method 2 — Connectors</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Claude Desktop has a built-in &quot;connectors&quot; system. For popular SaaS tools (Google
              Drive, Notion, Slack…) Anthropic has pre-built one-click connectors. You click a button,
              sign in with OAuth, and the server is connected. Zero config file editing.
            </p>
            <div className="bg-[#6366f1]/10 rounded-lg p-3 border border-[#6366f1]/20 mt-1">
              <p className="text-xs text-gray-300 leading-relaxed">
                Click the <span className="text-white font-medium">search &amp; tools icon</span> in
                Claude Desktop → &quot;Add Connectors&quot; → browse Desktop Extensions (local) or Web
                (remote) → install with one click.
              </p>
            </div>
            <p className="text-xs text-[#6366f1] font-medium mt-1">
              Like an App Store for MCP servers
            </p>
          </div>
        </div>
      </div>

      {/* 5.3 What Are Connectors */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.3 What Are Connectors?</h2>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A connector is a <span className="text-white font-medium">built-in feature</span> that
            links Claude to an MCP server <span className="text-white font-medium">automatically</span>,
            without any manual configuration file editing.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Most Claude users are non-technical. They want to connect Claude Desktop to their Google
          Drive, Notion, or Slack to give Claude context from those tools. The problem: doing it via
          the JSON config file requires finding a GitHub repo, copying connection details, editing JSON
          — not user-friendly.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Anthropic&apos;s solution: for the most common SaaS tools, they built connectors — pre-made
          wrappers that handle authentication, API key management, OAuth flows, and stability behind
          the scenes. The end user just clicks a button.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Safer", desc: "Entire connector code written and audited by Anthropic's team" },
            { label: "Easier", desc: "One click. No JSON editing. No terminal commands." },
            { label: "More Consistent", desc: "Higher reliability — servers load correctly more often" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#6366f1]">{item.label}</p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Available connectors today include: Google Drive, Gmail, Google Calendar, Notion, Atlassian,
          Box, Canva, HubSpot, Hugging Face, Indeed, and more — with new ones added regularly.
        </p>
      </div>

      {/* 5.4 Why Not Use Connectors Always */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.4 Why Not Use Connectors for Everything?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          If connectors are so good, why not require every MCP server to have one? Two strong reasons:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#6366f1] uppercase tracking-wider">Reason 1 — Not Scalable</p>
            <p className="text-sm text-white font-medium">Connectors are curated and maintained</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Anthropic must write every connector themselves — including OAuth flows, security patches,
              rate limiting, and stability guarantees. There are thousands of MCP servers in the world,
              and 10–15 new ones appear every day. One company cannot build and maintain a connector for
              every single server. It is simply not scalable.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-bold text-[#6366f1] uppercase tracking-wider">Reason 2 — Closes the Open Standard</p>
            <p className="text-sm text-white font-medium">MCP was designed to be open</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              MCP&apos;s core promise: anyone can build a client, anyone can build a server. If connectors
              were mandatory, your custom server would have to wait for Anthropic to review and approve
              it before Claude Desktop could connect to it. That hands all control back to Anthropic —
              defeating the entire purpose of an open standard.
            </p>
          </div>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-medium">The balanced solution:</span> Anthropic builds
            connectors for popular SaaS tools everyone uses (Google Drive, Notion, Slack). For your
            own custom or company servers, you use the JSON config file — and you can connect{" "}
            <span className="text-white font-medium">today, instantly</span>, with no waiting.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          This is also why in this class we connect two servers via connector and two servers via JSON
          config — to cover every combination you will encounter in practice.
        </p>
      </div>

      {/* 5.5 Downloading Claude Desktop */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.5 Downloading Claude Desktop</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Before connecting any servers, you need Claude Desktop installed on your machine.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Setup steps</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`1. Search "Claude Desktop download" on Google
2. Go to the official Anthropic download page
3. Download for your OS:
   • Mac   → .dmg installer
   • Windows → .exe installer
4. Install and sign in with your Anthropic account
5. Interface looks identical to ChatGPT — familiar and simple`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Once installed, look for the <span className="text-white font-medium">search &amp; tools icon</span> in
          the chat input. Clicking it shows the tools (MCP servers) currently connected. This is
          effectively a live <code className="text-[#6366f1]">tools/list</code> call — the same JSON-RPC
          method you studied in Class 3, now visible in the UI.
        </p>
      </div>

      {/* 5.6 Server 1 — Filesystem */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.6 Server 1 — Filesystem MCP Server</h2>
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-medium">Local Server</span>
          <span className="text-xs bg-[#6366f1]/20 text-[#6366f1] border border-[#6366f1]/30 px-2 py-0.5 rounded-full font-medium">Connector Method</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Filesystem server lets Claude Desktop read from and write to specific directories on your
          machine. A ready-made connector is available, so setup is one click.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Setup steps</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`1. Click the search & tools icon in Claude Desktop
2. Click "Add Connectors"
3. Under Desktop Extensions, find "File System"
4. Click it and install (takes a few seconds)
5. After install: specify which folder(s) Claude can access
   e.g., ~/Desktop — Claude can now read/write there
6. Enable the connector, then close
7. Restart Claude Desktop (required after any new server)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-2">Why you must specify folders</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            By default, the Filesystem server has access to <span className="text-white font-medium">nothing</span>.
            You explicitly grant it access to specific directories. This is a safety feature — if
            something goes wrong behind the scenes, damage is limited to the folders you chose. Never
            grant access to your entire home directory.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Demo: what you can do</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Prompt: "Can you tell me if there are any PDF files on my Desktop?"
→ Claude calls read_directory / search_files tool
→ Claude asks your permission (best part of MCP!)
→ Returns: list of all PDFs found

Prompt: "Write Fibonacci number code in Python"
Prompt: "Now save that as a .py file on my Desktop"
→ Claude writes the file and saves it — file appears on Desktop

Real-world uses:
• Organize a messy Downloads folder into categories
• Summarize all files in a project folder
• Search across documents by content or name`}</pre>
        </div>
      </div>

      {/* 5.7 Server 2 — Manim */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.7 Server 2 — Manim MCP Server</h2>
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-medium">Local Server</span>
          <span className="text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-full font-medium">JSON Config Method</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white font-medium">Manim</span> is the Python animation library that
          3Blue1Brown uses to create those stunning mathematical visualizations on YouTube. Writing
          Manim code by hand is extremely difficult — but LLMs are good at code generation. With the
          Manim MCP server, you describe a concept in plain English and get back a rendered animation
          video.
        </p>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">The magic</p>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="bg-white/10 px-3 py-1 rounded-lg text-white font-medium">English sentence</span>
            <span className="text-[#6366f1] font-bold">→</span>
            <span className="bg-white/10 px-3 py-1 rounded-lg text-white font-medium">Manim code</span>
            <span className="text-[#6366f1] font-bold">→</span>
            <span className="bg-white/10 px-3 py-1 rounded-lg text-white font-medium">Rendered video</span>
          </div>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
            Claude Desktop generates the Manim code and sends it to the Manim server, which executes
            it and returns a video file — all in one prompt.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          No connector exists for Manim, so we use the JSON config method. This server is a
          community-built GitHub repo — not an official Anthropic server.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Setup steps</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Step 1: Install dependencies
pip install manim
pip install mcp

# Step 2: Clone the repo to your Desktop
cd ~/Desktop
git clone <manim-mcp-server-repo-url>

# Step 3: Open Claude Desktop config file
# Claude Desktop → Settings → Developer → Edit Config

# Step 4: Add this to "mcpServers" in the JSON
{
  "manim-server": {
    "command": "/absolute/path/to/python3",
    "args": [
      "/absolute/path/to/manim_executable",
      "/Users/yourname/Desktop/manim-mcp-server/src/manim_server.py"
    ]
  }
}

# Find Python path:     which python3
# Find manim path:      which manim
# Find script path:     cd Desktop/manim-mcp-server/src && pwd

# Step 5: Save the JSON, close it
# Step 6: Restart Claude Desktop`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Example prompt — vector transformation animation</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Use the Manim server to create an animation showing
vector transformation in linear algebra:
- Draw a 2D coordinate grid
- Show two basis vectors: î and ĵ
- Apply the matrix transformation [[2, 1], [1, 2]]
- Show the entire grid bending/transforming
- Show the new transformed vectors î' and ĵ'
- Add title: "Linear Transformation"

→ Claude generates Manim code
→ Manim server executes the code
→ Returns a .mp4 animation file`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-white mb-1">LaTeX note</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            If LaTeX is not installed on your machine, mathematical symbols may not render perfectly.
            For full quality, install LaTeX (though be aware it is a ~10–15 GB install). The
            animations still work without it — Claude finds an alternate rendering path.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Use case: whenever you encounter a difficult concept in machine learning, deep learning, or
          linear algebra — describe it and get a 3Blue1Brown-style visualization in minutes. Sky is
          the limit.
        </p>
      </div>

      {/* 5.8 Server 3 — Google Drive */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.8 Server 3 — Google Drive MCP Server</h2>
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full font-medium">Remote Server</span>
          <span className="text-xs bg-[#6366f1]/20 text-[#6366f1] border border-[#6366f1]/30 px-2 py-0.5 rounded-full font-medium">Connector Method</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Google Drive connector lets Claude Desktop search and read documents from your Google
          Drive. Setup is a single OAuth click.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Setup steps</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`1. Click the search & tools icon in Claude Desktop
2. You will see "Drive Search" already listed (built-in connector)
3. Click it → Google OAuth sign-in opens
4. Sign in with your Google account
5. Done — Drive Search is now enabled

Verify: click the tools icon → "Drive Search: enabled" appears`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Demo</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Prompt: "Can you summarize the document from my Google Drive?"

→ Claude calls drive_search tool
→ Finds the document
→ Returns a summary of its contents

Use cases:
• Summarize meeting notes stored in Drive
• Extract action items from a shared doc
• Ask questions about documents without opening them`}</pre>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">Read-Only</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The Google Drive connector is <span className="text-white font-medium">read-only</span>.
            Claude can read any document in your Drive but cannot create new files or edit existing ones.
            This is intentional — reading your context is useful; accidentally modifying files would
            be dangerous.
          </p>
        </div>
      </div>

      {/* 5.9 Server 4 — Twitter/X */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.9 Server 4 — Twitter / X MCP Server</h2>
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-medium">Local Server (via npm)</span>
          <span className="text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-full font-medium">JSON Config Method</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          This server gives Claude Desktop access to Twitter/X — searching tweets and posting on your
          behalf. It is technically a local server that installs itself via npm behind the scenes.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Step 1: Get Twitter API keys</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`1. Go to developer.twitter.com (log in with your X account)
2. Open the Default Project
3. Go to "Keys and Tokens"
4. Generate / Regenerate:
   • API Key
   • API Key Secret
   • Access Token
   • Access Token Secret
5. Copy all four values — you will need them in the config`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Step 2: Add to Claude Desktop config</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "mcpServers": {
    "twitter": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-twitter"],
      "env": {
        "TWITTER_API_KEY": "your_api_key_here",
        "TWITTER_API_SECRET": "your_api_secret_here",
        "TWITTER_ACCESS_TOKEN": "your_access_token_here",
        "TWITTER_ACCESS_TOKEN_SECRET": "your_access_token_secret_here"
      }
    }
  }
}

# Behind the scenes: npx installs the server via npm on first run`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Available tools after restart</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Tools exposed:
  • search_tweets  — search public tweets by keyword
  • post_tweet     — post a tweet on your behalf

Demo:
  Prompt: "What are the top tweets about AI this week?"
  → Claude calls search_tweets with a search term
  → Returns recent AI-related tweets ✓

  Prompt: "Post a tweet saying: Hello from Campus X"
  → Requires read + write permissions
  → Read-only token → Authentication error`}</pre>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">Enable Write Permissions</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            By default, Twitter Developer tokens are <span className="text-white font-medium">read-only</span>.
            To post tweets, you must go to the Twitter Developer Portal →
            your project → &quot;User Authentication Settings&quot; → enable{" "}
            <span className="text-white font-medium">Read and Write</span> permissions, then regenerate
            your tokens and update the config file.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Also ensure <span className="text-white font-medium">Node.js / npm</span> is installed on
          your machine — npx needs it to download and run the server package.
        </p>
      </div>

      {/* 5.10 Server 5 — Weather */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.10 Server 5 — Weather MCP Server</h2>
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full font-medium">Remote Server</span>
          <span className="text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-full font-medium">JSON Config Method</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Weather server is a genuine remote MCP server — the server code lives on GitHub and is
          fetched directly from there at runtime. No cloning required. This is what distinguishes it
          from the Manim server (where you clone locally) and the Twitter server (where npm installs
          locally).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Setup steps</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`# Step 1: Install uv (Python package runner)
pip install uv

# Step 2: Get an AccuWeather API key
# → Search "AccuWeather API key" → sign up for free account (15-day trial)

# Step 3: Add to Claude Desktop config
{
  "mcpServers": {
    "weather": {
      "command": "/absolute/path/to/uvx",
      "args": ["mcp-server-weather"],
      "env": {
        "ACCUWEATHER_API_KEY": "your_key_here"
      }
    }
  }
}

# Find uvx path: which uvx   (in terminal)
# The server itself is fetched from GitHub — never cloned locally`}</pre>
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">What makes this truly remote?</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The <code className="text-[#6366f1]">uvx</code> command runs the package directly from its
            GitHub path without storing it on your local machine. Compare this to Manim (cloned to
            Desktop) and Twitter (installed to npm cache) — both of those are local servers even though
            the setup feels similar. The Weather server&apos;s code never lives on your disk.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Demo</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Prompt: "Can you tell me the current weather in Gurugram?"
→ Claude calls get_current_weather tool
→ Tool fetches live data from AccuWeather API
→ Returns temperature, conditions, humidity

Troubleshooting: if AccuWeather API key fails, try a fresh
free-tier signup — the trial is sufficient for learning.`}</pre>
        </div>
      </div>

      {/* 5.11 Finding New MCP Servers */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.11 Finding New MCP Servers</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          How do you discover MCP servers for tools you use? There are three main places:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              title: "Awesome MCP Servers",
              url: "GitHub — punkpeye/awesome-mcp-servers",
              desc: "The best curated list. Categorized by type (databases, files, communication, code tools, etc.). Updated regularly. This is where the Manim server was discovered.",
              badge: "Best starting point",
            },
            {
              title: "Claude Desktop Connectors",
              url: "Built into the app",
              desc: "Click the tools icon → Add Connectors. Shows the most popular ready-to-use servers. Desktop Extensions (local) and Web (remote) tabs.",
              badge: "No setup required",
            },
            {
              title: "Other Marketplaces",
              url: "mcp.so, smithery.ai, others",
              desc: "Dedicated MCP server discovery platforms are emerging with search, ratings, and one-click install. Growing ecosystem.",
              badge: "Growing fast",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <span className="text-xs bg-[#6366f1]/20 text-[#6366f1] px-2 py-0.5 rounded-full font-medium w-fit">
                {item.badge}
              </span>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-[#6366f1]">{item.url}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          After watching this class, go into exploration mode. Install Claude Desktop, think of a
          workflow you want to automate with AI, search for the relevant MCP server, and try to connect
          it. The best way to internalize MCP is to use it.
        </p>
      </div>

      {/* 5.12 Summary: Four Servers, Four Combinations */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.12 All Four Server Combinations at a Glance</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This class covered every combination of server type × connection method so you are prepared for
          anything:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs text-gray-500 font-semibold py-2 pr-4">Server</th>
                <th className="text-left text-xs text-gray-500 font-semibold py-2 pr-4">Type</th>
                <th className="text-left text-xs text-gray-500 font-semibold py-2 pr-4">Connection Method</th>
                <th className="text-left text-xs text-gray-500 font-semibold py-2">What It Does</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { server: "Filesystem", type: "Local", method: "Connector", what: "Read & write files in specified directories" },
                { server: "Manim", type: "Local", method: "JSON Config", what: "Generate math animation videos from English prompts" },
                { server: "Google Drive", type: "Remote", method: "Connector", what: "Read (search & summarize) Drive documents" },
                { server: "Twitter / X", type: "Local (npm)", method: "JSON Config", what: "Search tweets; post tweets (with write permission)" },
                { server: "Weather", type: "Remote (GitHub)", method: "JSON Config", what: "Get live weather data for any city" },
              ].map((row) => (
                <tr key={row.server}>
                  <td className="py-2.5 pr-4 text-white font-medium text-sm">{row.server}</td>
                  <td className="py-2.5 pr-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${row.type.startsWith("Local") ? "bg-blue-500/20 text-blue-300" : "bg-green-500/20 text-green-300"}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${row.method === "Connector" ? "bg-[#6366f1]/20 text-[#6366f1]" : "bg-orange-500/20 text-orange-300"}`}>
                      {row.method}
                    </span>
                  </td>
                  <td className="py-2.5 text-xs text-gray-400">{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5.13 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.13 Key Takeaways</h2>
        <div className="flex flex-col gap-2">
          {[
            "The 'How' section has three parts: experience MCP (this class), build your own server (next), build your own client (after that).",
            "There are two ways to connect an MCP server to Claude Desktop: the JSON config file (manual, works for everything) and Connectors (one-click, curated popular tools).",
            "Connectors exist because most Claude users are non-technical — they need a frictionless way to connect common tools like Google Drive and Notion.",
            "Connectors cannot cover every server: Anthropic cannot maintain thousands. And requiring connectors would close the open standard — your custom server would need Anthropic's approval.",
            "The Filesystem server (local, connector) lets Claude read and write to specific directories you choose. Access is scoped — not your whole machine.",
            "The Manim server (local, JSON config) generates 3Blue1Brown-style math animations from plain English descriptions. Input: sentence. Output: video.",
            "The Google Drive connector (remote, connector) is read-only — Claude can search and summarize your Drive docs but cannot create or edit files.",
            "The Twitter/X server (local via npm, JSON config) requires a Developer Account. Searching works with read-only tokens; posting requires enabling read+write permissions.",
            "The Weather server (remote, JSON config) is genuinely remote — code runs from a GitHub URL via uvx, never cloned to your local machine.",
            "To discover MCP servers: search 'awesome mcp servers' on GitHub, browse Claude Desktop's connector gallery, or explore emerging marketplaces like mcp.so.",
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
