import MCPLessonLayout from "@/components/MCPLessonLayout";

export default function MCPClass3() {
  return (
    <MCPLessonLayout slug="class-3">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Class 3 — The What (Part 1)</p>
        <h1 className="text-3xl font-bold text-white">MCP Architecture</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Now that you know <span className="text-white font-medium">why</span> MCP exists, it is time to understand
          <span className="text-white font-medium"> what</span> it actually is — from the inside. This class builds the
          complete MCP architecture from scratch, starting with the simplest possible version and adding
          detail layer by layer until the full picture is clear.
        </p>
      </div>

      {/* 3.1 The Simplest Version */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.1 The Simplest Version of MCP Architecture</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          At its most fundamental level, MCP architecture has exactly two entities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              entity: "Host",
              desc: "The AI chatbot that the user interacts with. The user types a prompt, the host receives it and passes it to an LLM behind the scenes.",
              examples: "Claude Desktop, Cursor, your custom AI chatbot",
              color: "text-[#6366f1]",
              border: "border-[#6366f1]/30",
              bg: "bg-[#6366f1]/5",
            },
            {
              entity: "Server",
              desc: "A tool with the capability to execute a specific task. It is a standalone service that the host can reach out to when it needs something done.",
              examples: "GitHub server, Slack server, Google Drive server",
              color: "text-green-400",
              border: "border-green-400/30",
              bg: "bg-green-400/5",
            },
          ].map(({ entity, desc, examples, color, border, bg }) => (
            <div key={entity} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <p className={`text-lg font-bold ${color}`}>{entity}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              <p className="text-[11px] text-gray-600 italic mt-auto">Examples: {examples}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          All communication in MCP happens between these two entities. Everything else is about
          how they communicate — not what they are.
        </p>
      </div>

      {/* 3.2 The Flow: A Real Example */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.2 How the Flow Works — A Real Example</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          User asks the host: <span className="text-white font-medium">"Are there any new commits on the GitHub repo?"</span>
        </p>
        <div className="flex flex-col gap-2">
          {[
            { step: "1", actor: "User → Host", action: "User sends the question as a prompt to the host (the AI chatbot)" },
            { step: "2", actor: "Host → LLM", action: "Host forwards the prompt to the LLM (e.g., Claude, GPT-4)" },
            { step: "3", actor: "LLM thinks", action: "LLM reads the question, realizes the answer is not in its training data, checks which servers are available" },
            { step: "4", actor: "LLM → Host", action: "LLM tells the host: \"I cannot answer this. Go ask the GitHub server\"" },
            { step: "5", actor: "Host → GitHub Server", action: "Host contacts the GitHub server and sends the query" },
            { step: "6", actor: "GitHub Server → Host", action: "GitHub server checks the repository, returns the list of recent commits" },
            { step: "7", actor: "Host → LLM", action: "Host passes this new information back to the LLM" },
            { step: "8", actor: "LLM → Host → User", action: "LLM now has enough context to answer. It generates the response. Host displays it to the user." },
          ].map(({ step, actor, action }) => (
            <div key={step} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
              <span className="w-6 h-6 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                {step}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold text-[#6366f1]">{actor}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3.3 The Client: The Missing Piece */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.3 The Client — The Host&apos;s Helper</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The simplified view above is almost correct — but there is one detail missing. In reality,
          the host never communicates directly with a server. There is always an intermediary: the
          <span className="text-white font-medium"> MCP Client</span>.
        </p>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">What the Client Does</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The client lives inside the host. When the host needs to talk to a server, it hands the
            request to its client. The client translates that into an MCP-compatible message and sends
            it to the server. The client also translates the server&apos;s response back into a format the
            host can understand.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Communication chain with the client</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`User
  ↓
Host (AI Chatbot)
  ↓  [high-level request]
MCP Client  ←  lives inside the Host
  ↓  [MCP-compatible message]
MCP Server (GitHub, Slack, etc.)
  ↓  [MCP-compatible response]
MCP Client
  ↓  [translated result]
Host
  ↓
User`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The client speaks MCP fluently — that is its entire job. Because the server also speaks MCP,
          communication between client and server is smooth and standardized. No custom translation
          needed per tool.
        </p>
      </div>

      {/* 3.4 One-on-One Relationship */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.4 Client-Server: One-on-One Relationship</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Each client can connect to exactly one server. This is a deliberate design decision —
          a <span className="text-white font-medium">one-on-one relationship</span>. If your host needs to communicate
          with multiple servers, it gets one dedicated client per server.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">One client per server — always</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Host (AI Chatbot)
├── MCP Client 1 ──── GitHub Server
├── MCP Client 2 ──── Slack Server
└── MCP Client 3 ──── Google Drive Server

Each client is isolated.
Client 1 knows nothing about the Slack connection.
Client 2 knows nothing about the GitHub connection.`}</pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#6366f1]/5 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">Decoupling</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Each communication channel is isolated. If the GitHub connection has a problem, the
              Slack and Drive connections continue working. Separation of concerns built into the
              architecture.
            </p>
          </div>
          <div className="bg-[#6366f1]/5 border border-[#6366f1]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">Parallel Execution</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Since each server has its own dedicated client, multiple server requests can be made
              in parallel — not sequentially. Complex tasks that need data from multiple sources
              run significantly faster.
            </p>
          </div>
        </div>
      </div>

      {/* 3.5 The Analogy */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.5 The Phone-SIM-Network Analogy</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A useful analogy for understanding the Host-Client-Server relationship:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { mcp: "Host", analogy: "Phone", desc: "The main device you use. It initiates all activity and displays the results." },
            { mcp: "MCP Client", analogy: "SIM card", desc: "Lives inside the phone. The phone never directly touches the network — the SIM handles that low-level communication." },
            { mcp: "MCP Server", analogy: "Carrier network (Airtel, Jio)", desc: "The external service being connected to. The SIM speaks the carrier&apos;s protocol to establish the connection." },
          ].map(({ mcp, analogy, desc }) => (
            <div key={mcp} className="grid grid-cols-3 gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 items-start">
              <p className="text-sm font-semibold text-[#6366f1]">{mcp}</p>
              <p className="text-sm font-semibold text-white">{analogy}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Just as you install multiple SIM cards for multiple carriers, a host installs one client
          per server — and each SIM (client) maintains a one-on-one relationship with its carrier (server).
        </p>
      </div>

      {/* 3.6 MCP Primitives */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">3.6 MCP Primitives — What a Server Offers</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A server is not just a connection endpoint. Every MCP server exposes structured capabilities to
          the host. These are called <span className="text-white font-medium">primitives</span> — the three types
          of offerings a server provides.
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              primitive: "Tools",
              tagline: "Actions the AI can ask the server to perform",
              color: "text-[#6366f1]",
              border: "border-[#6366f1]/30",
              bg: "bg-[#6366f1]/5",
              desc: "Tools are dynamic — they fetch live data or perform real-world actions. Every tool changes state or queries a live system. This is the most-used primitive.",
              examples: [
                "GitHub: list_issues (how many open issues?)",
                "GitHub: create_issue (create a new bug report)",
                "GitHub: list_repos (how many repos in this account?)",
                "Google Drive: create_file (create a new document)",
                "Google Drive: search_files (find a document by name)",
              ],
            },
            {
              primitive: "Resources",
              tagline: "Static data the AI can read",
              color: "text-purple-400",
              border: "border-purple-400/30",
              bg: "bg-purple-400/5",
              desc: "Resources are documents or data that do not change frequently. Fetching a resource is like reading a file — the data is there, it is just a matter of retrieving it.",
              examples: [
                "GitHub: README.md file of a repository",
                "Database server: schema of a database table",
                "Google Drive: contents of a specific document",
                "Code server: the full source of a configuration file",
              ],
            },
            {
              primitive: "Prompts",
              tagline: "Predefined templates that guide the AI&apos;s behavior",
              color: "text-green-400",
              border: "border-green-400/30",
              bg: "bg-green-400/5",
              desc: "Prompts are instructions the server defines that teach the AI how to use the server better. They are optional but powerful in specialized scenarios.",
              examples: [
                "GitHub server: an 'issue_report_prompt' that enforces structured bug reports (title, steps to reproduce, expected, actual, environment)",
                "Without this prompt, the AI creates vague issues. With it, every issue is structured and useful.",
              ],
            },
          ].map(({ primitive, tagline, color, border, bg, desc, examples }) => (
            <div key={primitive} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-3`}>
              <div className="flex flex-col gap-0.5">
                <p className={`text-sm font-bold ${color}`}>{primitive}</p>
                <p className="text-xs text-gray-500 italic">{tagline}</p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              <div className="flex flex-col gap-1">
                {examples.map((ex, i) => (
                  <p key={i} className="text-xs text-gray-500 flex items-start gap-2">
                    <span className={`${color} mt-0.5 shrink-0`}>→</span>{ex}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Simple Rule</p>
          <div className="flex flex-col gap-1 text-xs text-gray-400">
            <p><span className="text-[#6366f1] font-medium">Tools</span> → live, changing data or real-world actions</p>
            <p><span className="text-purple-400 font-medium">Resources</span> → static documents or data you fetch once</p>
            <p><span className="text-green-400 font-medium">Prompts</span> → guidance that shapes how the AI uses the server</p>
          </div>
        </div>
      </div>

      {/* 3.7 Standard Operations */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.7 Standard Operations for Each Primitive</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          MCP does not just define the primitives — it also defines standard functions (called operations)
          for interacting with each one. This is what makes the protocol truly standardized.
        </p>
        <div className="flex flex-col gap-2">
          {[
            {
              category: "Tools",
              ops: [
                { name: "tools/list", desc: "\"What tools does this server offer?\" — Returns the full list of available tools with their parameters." },
                { name: "tools/call", desc: "\"Run this specific tool with these arguments.\" — Executes a tool and returns the result." },
              ],
              color: "text-[#6366f1]",
            },
            {
              category: "Resources",
              ops: [
                { name: "resources/list", desc: "\"What static documents does this server have?\" — Returns a list of available resources." },
                { name: "resources/read", desc: "\"Give me the contents of this specific resource.\" — Fetches and returns a document." },
                { name: "resources/subscribe", desc: "\"Notify me when this resource changes.\" — Server will push updates when the document is modified." },
                { name: "resources/unsubscribe", desc: "\"Stop notifying me about this resource.\"" },
              ],
              color: "text-purple-400",
            },
            {
              category: "Prompts",
              ops: [
                { name: "prompts/list", desc: "\"What prompt templates does this server offer?\"" },
                { name: "prompts/get", desc: "\"Give me this specific prompt template so I can use it.\"" },
              ],
              color: "text-green-400",
            },
          ].map(({ category, ops, color }) => (
            <div key={category} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <p className={`text-xs font-bold ${color} uppercase tracking-widest`}>{category}</p>
              {ops.map(({ name, desc }) => (
                <div key={name} className="flex items-start gap-3">
                  <code className={`text-xs font-mono ${color} w-44 shrink-0 mt-0.5`}>{name}</code>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3.8 Data Layer: JSON-RPC 2.0 */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">3.8 The Data Layer — JSON-RPC 2.0</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          We have established that client and server communicate using &quot;MCP language&quot;. But what does
          that language actually look like? The answer is <span className="text-white font-medium">JSON-RPC 2.0</span> — the
          grammar and rules that govern every message exchanged between client and server.
        </p>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">What is JSON-RPC?</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            JSON-RPC is a protocol that combines two ideas: <span className="text-white font-medium">RPC</span> (Remote Procedure Call —
            calling a function on another machine) and <span className="text-white font-medium">JSON</span> (the data format). Together,
            they give you a standard, lightweight way to call functions on a remote machine using plain JSON.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">A Request</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            When the client wants to discover what tools the GitHub server offers, it sends:
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Client → Server (tools/list request)</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {}
}`}</pre>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { field: "jsonrpc", desc: "Declares the protocol version. Always \"2.0\"." },
              { field: "id", desc: "A unique ID for this request. Used to match the response that comes back." },
              { field: "method", desc: "The operation to invoke — one of the standard MCP operations." },
              { field: "params", desc: "Arguments for the method. Empty here since tools/list needs none." },
            ].map(({ field, desc }) => (
              <div key={field} className="flex items-start gap-3 text-xs">
                <code className="text-[#6366f1] font-mono w-20 shrink-0 mt-0.5">{field}</code>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">A Response</h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Server → Client (tools/list response)</p>
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "tools": [
      { "name": "list_issues",   "description": "List open GitHub issues" },
      { "name": "create_issue",  "description": "Create a new GitHub issue" },
      { "name": "list_repos",    "description": "List repositories" }
    ]
  }
}`}</pre>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            The <code className="text-[#6366f1] bg-[#6366f1]/10 px-1 rounded">id</code> matches the request — the client
            knows exactly which request this answers. The <code className="text-[#6366f1] bg-[#6366f1]/10 px-1 rounded">result</code> contains
            the actual data.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Calling a Tool</h3>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Client → Server (tools/call request)</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "list_issues",
    "arguments": { "repo": "my-project", "state": "open" }
  }
}`}</pre>
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-green-400 font-semibold mb-3">Server → Client (response)</p>
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "issues": [
      { "id": 1, "title": "Login button bug",   "state": "open" },
      { "id": 2, "title": "Dark mode broken",   "state": "open" }
    ]
  }
}`}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Notifications — Fire and Forget</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Normal requests always expect a response. Notifications do not. A notification is sent and
            the sender does not wait for a reply. Notice there is no <code className="text-[#6366f1] bg-[#6366f1]/10 px-1 rounded text-xs">id</code> field
            — because no response is expected.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-purple-400 font-semibold mb-3">Server → Client (notification — file changed)</p>
            <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "method": "notifications/resources/updated",
  "params": {
    "uri": "file://README.md",
    "updatedBy": "alice",
    "updatedAt": "2025-05-27T10:30:00Z"
  }
}`}</pre>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            If a client has subscribed to a resource, the server pushes notifications whenever that
            resource changes. No response is expected — the client simply processes the update.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Batching — Multiple Requests at Once</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            JSON-RPC supports sending multiple requests in a single message. Useful when the AI needs
            data from several operations at the same time.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Batch request — list issues AND pull requests together</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`[
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "tools/call",
    "params": { "name": "list_issues", "arguments": { "repo": "my-project" } }
  },
  {
    "jsonrpc": "2.0", "id": 2,
    "method": "tools/call",
    "params": { "name": "list_pull_requests", "arguments": { "repo": "my-project" } }
  }
]`}</pre>
          </div>
        </div>
      </div>

      {/* 3.9 Why JSON-RPC */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.9 Why JSON-RPC? (Not REST API)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A fair question: REST APIs also let machines communicate over a network. Why did Anthropic
          choose JSON-RPC instead? Five concrete reasons.
        </p>
        <div className="flex flex-col gap-2">
          {[
            {
              n: "1",
              reason: "Lightweight",
              detail: "A JSON-RPC message is a simple JSON object — no HTTP headers, no metadata overhead. REST requests carry significant boilerplate. JSON-RPC is minimal: just the protocol version, method, params, and an ID.",
            },
            {
              n: "2",
              reason: "Bidirectional Communication",
              detail: "REST is one-way: client requests, server responds. JSON-RPC allows the server to also initiate requests to the client. In MCP, this enables servers to push notifications to clients — not possible cleanly with REST.",
            },
            {
              n: "3",
              reason: "Transport Agnostic",
              detail: "REST is tied to HTTP. JSON-RPC does not care what carries it — HTTP, STDIO, WebSockets, or any custom transport. This is critical in MCP because local servers use STDIO and remote servers use HTTP. One protocol, two transport modes.",
            },
            {
              n: "4",
              reason: "Batching Support",
              detail: "REST sends one request at a time. JSON-RPC lets you send multiple requests in a single message. For AI agents that often need data from several sources simultaneously, this is a meaningful performance gain.",
            },
            {
              n: "5",
              reason: "Native Notifications",
              detail: "REST has no built-in notification mechanism. JSON-RPC natively supports fire-and-forget messages. MCP uses this for resource subscription — when a document changes, the server notifies clients without them having to poll.",
            },
          ].map(({ n, reason, detail }) => (
            <div key={n} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="w-6 h-6 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                {n}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{reason}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3.10 Transport Layer */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">3.10 The Transport Layer</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          JSON-RPC defines the language of the messages. The <span className="text-white font-medium">transport layer</span> defines
          how those messages travel from client to server and back. The transport mechanism depends
          on whether the server is local or remote.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              type: "Local Server",
              transport: "STDIO",
              fullform: "Standard Input / Output",
              desc: "The server runs on the same machine as the host. Messages travel via the operating system's built-in input/output streams — no network needed.",
              color: "text-[#6366f1]",
              border: "border-[#6366f1]/30",
              bg: "bg-[#6366f1]/5",
            },
            {
              type: "Remote Server",
              transport: "HTTP + SSE",
              fullform: "HTTP + Server-Sent Events",
              desc: "The server runs on a different machine, on the internet. Messages travel over HTTP. Streaming responses use SSE (Server-Sent Events).",
              color: "text-green-400",
              border: "border-green-400/30",
              bg: "bg-green-400/5",
            },
          ].map(({ type, transport, fullform, desc, color, border, bg }) => (
            <div key={type} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <p className="text-xs text-gray-500 uppercase tracking-widest">{type}</p>
              <p className={`text-lg font-bold ${color}`}>{transport}</p>
              <p className="text-[11px] text-gray-500">{fullform}</p>
              <p className="text-xs text-gray-400 leading-relaxed mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3.11 STDIO Transport */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.11 Local Servers — STDIO Transport</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every program has two built-in streams: <span className="text-white font-medium">stdin</span> (standard input —
          receives data) and <span className="text-white font-medium">stdout</span> (standard output — sends data). MCP uses
          these streams as the communication channel between host and local server.
        </p>
        <div className="flex flex-col gap-2">
          {[
            {
              step: "1",
              title: "Host launches the server as a subprocess",
              desc: "The host starts the server as a child process on the same machine. A parent-child relationship is established. The host now controls the server's stdin and stdout.",
            },
            {
              step: "2",
              title: "Host writes JSON-RPC messages to server's stdin",
              desc: "The client formats the request as a JSON-RPC message and writes it directly into the server's standard input stream.",
            },
            {
              step: "3",
              title: "Server reads, processes, and writes the response to stdout",
              desc: "The server reads from its stdin, processes the request, and writes the JSON-RPC response to its stdout. The host reads from the server's stdout.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="w-6 h-6 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                {step}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { benefit: "Extremely Fast", desc: "No network round-trip. Two processes on the same machine exchanging bytes." },
            { benefit: "Maximally Secure", desc: "No network ports opened. No attack surface. All communication is local to the machine." },
            { benefit: "Simple to Implement", desc: "Every programming language has native stdin/stdout support. Minimal boilerplate needed." },
          ].map(({ benefit, desc }) => (
            <div key={benefit} className="bg-[#6366f1]/5 border border-[#6366f1]/30 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-xs font-semibold text-[#6366f1]">{benefit}</p>
              <p className="text-[11px] text-gray-400 leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3.12 HTTP + SSE Transport */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.12 Remote Servers — HTTP + SSE Transport</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When the server is running on a different machine (on the internet), STDIO does not work. The
          host uses HTTP instead — the same protocol that powers the web.
        </p>
        <div className="flex flex-col gap-2">
          {[
            {
              aspect: "Requests",
              detail: "The client sends JSON-RPC messages as HTTP POST requests. The JSON-RPC payload is placed in the request body. Standard HTTP authentication (API keys, bearer tokens) works out of the box.",
            },
            {
              aspect: "SSE (Server-Sent Events)",
              detail: "For long-running tasks or streaming responses, the server uses SSE — an HTTP extension that keeps the connection open and sends data in chunks as it becomes ready. This gives users the \"streaming\" experience they are used to from ChatGPT.",
            },
          ].map(({ aspect, detail }) => (
            <div key={aspect} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className="text-sm font-semibold text-white w-40 shrink-0">{aspect}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">HTTP POST with JSON-RPC payload (remote server)</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`POST /mcp HTTP/1.1
Host: github-mcp-server.example.com
Authorization: Bearer your-api-key
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {}
}`}</pre>
        </div>
      </div>

      {/* 3.13 Why JSON-RPC Is Transport Agnostic */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.13 Why Transport Agnosticism Matters</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This is one of the most elegant design decisions in MCP. By keeping the data layer (JSON-RPC)
          completely separate from the transport layer, Anthropic ensured MCP works in all environments.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Same JSON-RPC messages, different transport</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Local server:
  JSON-RPC message ──── STDIO ────▶ Server process (same machine)

Remote server:
  JSON-RPC message ──── HTTP  ────▶ Server (internet)

Future server:
  JSON-RPC message ── WebSocket ──▶ Server (real-time, bidirectional)

The message is always the same JSON-RPC format.
Only the delivery mechanism changes.`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          If Anthropic had used REST instead of JSON-RPC, local servers would have required running a
          web server on your laptop — a significant overhead. JSON-RPC&apos;s transport agnosticism made
          STDIO possible for local servers without changing a single line of the message format.
        </p>
      </div>

      {/* 3.14 Complete Architecture Diagram */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.14 The Complete MCP Architecture</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Everything we have covered — in one picture.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`┌─────────────────────────────────────────────────────────────────┐
│                           HOST                                  │
│                    (AI Chatbot / Agent)                         │
│                                                                 │
│   User ──────▶ LLM (Claude / GPT-4 / etc.)                     │
│                       │                                         │
│         ┌─────────────┼─────────────┐                          │
│         ▼             ▼             ▼                           │
│    MCP Client 1  MCP Client 2  MCP Client 3                     │
│         │             │             │                           │
└─────────│─────────────│─────────────│───────────────────────────┘
          │             │             │
   JSON-RPC        JSON-RPC      JSON-RPC
  over STDIO      over STDIO    over HTTP+SSE
          │             │             │
          ▼             ▼             ▼
  ┌──────────────┐ ┌──────────┐ ┌──────────────────┐
  │ Local Server │ │  Local   │ │  Remote Server   │
  │ (Filesystem) │ │ (GitHub) │ │ (Slack API, etc.)│
  │              │ │          │ │                  │
  │ Tools        │ │ Tools    │ │ Tools            │
  │ Resources    │ │ Resources│ │ Resources        │
  │ Prompts      │ │ Prompts  │ │ Prompts          │
  └──────────────┘ └──────────┘ └──────────────────┘`}</pre>
        </div>
        <div className="flex flex-col gap-2">
          {[
            "One Host connects to multiple Servers — each through its own dedicated Client.",
            "Client-Server relationship is always one-on-one.",
            "Every Server exposes three primitives: Tools (dynamic actions), Resources (static data), Prompts (AI guidance).",
            "All Client-Server messages use JSON-RPC 2.0 — the standardized grammar.",
            "Local servers communicate via STDIO (fast, secure, no network). Remote servers communicate via HTTP + SSE.",
            "JSON-RPC is transport-agnostic — the message format never changes, only the delivery mechanism.",
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
              <span className="w-5 h-5 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3.15 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.15 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "MCP architecture has three entities: Host (the AI chatbot), Client (the translator inside the host), and Server (the external tool).",
            "The Host never communicates directly with a Server — all communication goes through a Client.",
            "Each Client maintains a one-on-one relationship with exactly one Server. Multiple servers = multiple clients inside the host.",
            "The one-on-one design enables decoupling (failures are isolated) and parallelism (multiple servers can be queried simultaneously).",
            "Every MCP Server exposes three primitives: Tools (dynamic actions), Resources (static documents), and Prompts (AI guidance templates).",
            "MCP defines standard operations for each primitive: tools/list, tools/call, resources/list, resources/read, prompts/list, prompts/get.",
            "All communication uses JSON-RPC 2.0 — a lightweight, bidirectional, transport-agnostic protocol with native support for batching and notifications.",
            "Local servers use STDIO transport: fast, secure, no network port needed. Remote servers use HTTP + SSE for internet-accessible communication.",
            "The separation of data layer (JSON-RPC) from transport layer (STDIO / HTTP) is what makes MCP flexible enough to work in all deployment scenarios.",
            "If the transport layer changes in the future, the message format stays the same — a deliberate design choice that future-proofs the protocol.",
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
