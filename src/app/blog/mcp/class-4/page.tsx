import MCPLessonLayout from "@/components/MCPLessonLayout";

export default function MCPClass4() {
  return (
    <MCPLessonLayout slug="class-4">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#6366f1] font-semibold uppercase tracking-widest">Class 4 — The What (Part 2)</p>
        <h1 className="text-3xl font-bold text-white">MCP Lifecycle</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Class 3 explained the <span className="text-white font-medium">structure</span> of MCP — who the players are and what
          they offer. This class explains the <span className="text-white font-medium">sequence</span> — the exact step-by-step
          process by which host and server establish a connection, exchange requests, and cleanly shut
          down. This is the MCP Lifecycle.
        </p>
      </div>

      {/* 4.1 What is the MCP Lifecycle? */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.1 What is the MCP Lifecycle?</h2>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The MCP Lifecycle describes the <span className="text-white font-medium">complete sequence of steps</span> that
            govern how a Host and a Server establish, use, and end a connection during a session.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          In Class 3 you learned the architecture — what a Host, Client, and Server are. The Lifecycle
          is the rulebook for how that architecture operates at runtime. It defines what happens first,
          what can happen next, and what happens last. When you build your own MCP servers and clients
          later, every line of code will follow these lifecycle rules.
        </p>
      </div>

      {/* 4.2 What is a Session? */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.2 What is a Session?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Before the lifecycle, we need to define what a <span className="text-white font-medium">session</span> is.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            A session is <span className="text-white font-medium">one continuous connection between a Client and a Server</span>.
            It begins when the host starts up and connects to a server, and ends when either the host
            or the server shuts down.
          </p>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">A session with Claude Desktop + GitHub MCP server</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`You open Claude Desktop
    ↓
Claude Desktop connects to the GitHub MCP server   ← Session begins
    ↓
You ask questions, Claude uses GitHub tools
    ↓
You close Claude Desktop                           ← Session ends`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Everything that happens between session start and session end — that entire sequence — is what
          the MCP Lifecycle governs.
        </p>
      </div>

      {/* 4.3 Three Phases */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.3 Three Phases of the Lifecycle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              phase: "Phase 1",
              name: "Initialization",
              desc: "Client and server connect for the first time. They verify protocol compatibility and exchange capabilities. The handshake.",
              color: "text-[#6366f1]",
              border: "border-[#6366f1]/30",
              bg: "bg-[#6366f1]/5",
            },
            {
              phase: "Phase 2",
              name: "Operation",
              desc: "The working phase. Client discovers what the server offers in detail, then starts making real requests — calling tools, reading resources.",
              color: "text-green-400",
              border: "border-green-400/30",
              bg: "bg-green-400/5",
            },
            {
              phase: "Phase 3",
              name: "Shutdown",
              desc: "One side closes the connection. The transport layer handles the termination. No JSON-RPC messages involved.",
              color: "text-orange-400",
              border: "border-orange-400/30",
              bg: "bg-orange-400/5",
            },
          ].map(({ phase, name, desc, color, border, bg }) => (
            <div key={phase} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">{phase}</p>
              <p className={`text-sm font-bold ${color}`}>{name}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4.4 Phase 1: Initialization */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">4.4 Phase 1 — Initialization</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Initialization is <span className="text-white font-medium">always the first interaction</span> between client and
          server. Before any tool can be called or any data can be fetched, this phase must complete
          successfully. Think of it as a formal handshake where both parties agree on the terms of
          the session.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Two things happen during initialization: <span className="text-white font-medium">version compatibility is verified</span> and
          <span className="text-white font-medium"> capabilities are exchanged</span>. Initialization completes in exactly three steps.
        </p>

        {/* Step 1 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-sm flex items-center justify-center font-bold shrink-0">1</span>
            <h3 className="text-base font-semibold text-white">Client sends initialize request</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The client fires the first message of the session — an <code className="text-[#6366f1] bg-[#6366f1]/10 px-1 rounded text-xs">initialize</code> request
            containing three pieces of information:
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Client → Server (initialize request)</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "initialize",
  "params": {
    "protocolVersion": "2024-11-05",
    "capabilities": {
      "roots": { "listChanged": true },
      "sampling": {}
    },
    "clientInfo": {
      "name": "Claude AI",
      "version": "0.1.0"
    }
  }
}`}</pre>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { field: "protocolVersion", desc: "The MCP version the client is running. Used to verify compatibility." },
              { field: "capabilities", desc: "What the client can offer to the server: roots (directory access), sampling (AI on demand), elicitation (request clarification)." },
              { field: "clientInfo", desc: "Name and version of the client software — for identification and debugging." },
            ].map(({ field, desc }) => (
              <div key={field} className="flex items-start gap-3 text-xs">
                <code className="text-[#6366f1] font-mono w-32 shrink-0 mt-0.5">{field}</code>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-sm flex items-center justify-center font-bold shrink-0">2</span>
            <h3 className="text-base font-semibold text-white">Server responds with its own info</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The server mirrors the structure — it tells the client its protocol version, what primitives
            it offers, and identifies itself.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-green-400 font-semibold mb-3">Server → Client (initialize response)</p>
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 0,
  "result": {
    "protocolVersion": "2024-11-05",
    "capabilities": {
      "tools": {},
      "resources": {},
      "prompts": {},
      "logging": {}
    },
    "serverInfo": {
      "name": "Secure Filesystem Server",
      "version": "2.0.0"
    }
  }
}`}</pre>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-sm flex items-center justify-center font-bold shrink-0">3</span>
            <h3 className="text-base font-semibold text-white">Client sends "initialized" notification</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Once the client receives the server&apos;s response, it sends a final notification confirming the
            connection is live. This notification has <span className="text-white font-medium">no ID</span> — because no reply is
            expected. It is fire-and-forget.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Client → Server (initialized notification)</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "method": "notifications/initialized"
}`}</pre>
          </div>
          <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-1">Connection is now live</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              The moment the server receives this notification, the session is fully established. Both
              parties can now exchange any MCP messages freely.
            </p>
          </div>
        </div>
      </div>

      {/* 4.5 Two Rules */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.5 Two Rules During Initialization</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          These rules exist to prevent communication before the handshake is complete — which would
          cause unpredictable behavior.
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              rule: "Rule 1 — Client must wait",
              detail: "The client must not send any requests (other than pings) until the server has responded to the initialize request. No tool calls, no resource reads. Nothing. Only the initialize request and optionally a ping.",
              color: "text-[#6366f1]",
              border: "border-[#6366f1]/30",
              bg: "bg-[#6366f1]/5",
            },
            {
              rule: "Rule 2 — Server must wait",
              detail: "The server must not serve any requests (other than pings and log messages) until it receives the initialized notification. It cannot start sending data or accepting tool calls until Step 3 is complete.",
              color: "text-purple-400",
              border: "border-purple-400/30",
              bg: "bg-purple-400/5",
            },
          ].map(({ rule, detail, color, border, bg }) => (
            <div key={rule} className={`rounded-xl p-4 border ${border} ${bg} flex flex-col gap-2`}>
              <p className={`text-sm font-bold ${color}`}>{rule}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The summary: until all three steps complete, neither party may exchange any other type of
          message. Violating this order can crash the system because the handshake — the agreement on
          terms — has not happened yet.
        </p>
      </div>

      {/* 4.6 Version Negotiation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.6 Version Negotiation</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          MCP is an evolving protocol with multiple versions. The client and server may be running
          different versions. Version negotiation determines what happens in that case.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">Version mismatch scenario</p>
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`Client sends:   { "protocolVersion": "2024-11-05" }
Server responds: { "protocolVersion": "2024-10-01" }  ← different

Client checks its list of supported versions.
Does it support "2024-10-01"?

Yes → Client sends the initialized notification → session continues
No  → Client disconnects immediately → no further communication`}</pre>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { scenario: "Versions match", outcome: "Proceed normally — both on the same protocol version." },
            { scenario: "Server version is older, client supports it", outcome: "Client sends initialized notification — session continues on the older version." },
            { scenario: "Server version is not in client's supported list", outcome: "Client disconnects immediately — no initialized notification, no further communication." },
          ].map(({ scenario, outcome }) => (
            <div key={scenario} className="grid grid-cols-2 gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
              <p className="text-xs font-semibold text-white">{scenario}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4.7 Capability Negotiation */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">4.7 Capability Negotiation</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Alongside version checking, client and server tell each other exactly what they are capable of.
          This sets expectations for the entire session — each side only asks for things the other has
          declared it can provide.
        </p>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Client Capabilities</h3>
          <div className="flex flex-col gap-2">
            {[
              {
                cap: "Roots",
                desc: "The client grants the server access to a base directory on the host machine. Example: Cursor IDE gives the filesystem MCP server access to the current project folder so it can create/modify files there.",
                adv: "Advanced",
              },
              {
                cap: "Sampling",
                desc: "The server can request AI assistance from the client's LLM. Example: if a server needs to summarize thousands of documents, instead of running its own AI, it asks the client's AI to do it. The server calls the AI through the client.",
                adv: "Advanced",
              },
              {
                cap: "Elicitation",
                desc: "The server can request missing information from the client. Example: client asks the GitHub server to list repos without providing an API key — server replies asking for the API key before it can proceed.",
                adv: "Advanced",
              },
            ].map(({ cap, desc, adv }) => (
              <div key={cap} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#6366f1]">{cap}</p>
                    <span className="text-[10px] text-gray-600 bg-white/5 px-1.5 py-0.5 rounded">{adv}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Server Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { cap: "Tools", desc: "Server can execute dynamic actions on behalf of the client." },
              { cap: "Resources", desc: "Server can provide static documents and data." },
              { cap: "Prompts", desc: "Server can offer prompt templates that guide the AI's behavior." },
              { cap: "Logging", desc: "Server can send log messages to the client during long-running operations — status updates, progress info, debug output." },
            ].map(({ cap, desc }) => (
              <div key={cap} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-[#6366f1] mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">{cap}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Sub-Capabilities</h3>
          <div className="flex flex-col gap-2">
            {[
              {
                sub: "listChanged",
                parent: "Tools / Resources / Prompts",
                desc: "If the server's list of tools, resources, or prompts changes during a session (e.g., a new tool is added), the server sends a notification informing the client. The client can then refresh its list.",
              },
              {
                sub: "subscribe",
                parent: "Resources",
                desc: "The client can subscribe to a specific resource. When that resource changes, the server pushes a notification automatically — no polling required.",
              },
            ].map(({ sub, parent, desc }) => (
              <div key={sub} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-[#6366f1] font-mono">{sub}</code>
                    <span className="text-xs text-gray-600">on {parent}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4.8 Phase 2: Operation */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">4.8 Phase 2 — Operation</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Once initialization completes, the session enters the Operation phase. During initialization,
          the server only said <span className="text-white italic">what kinds</span> of capabilities it has (tools, resources, prompts).
          Operation begins by finding out <span className="text-white italic">exactly which</span> tools, resources, and prompts
          those are — then using them.
        </p>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Part A — Capability Discovery (automatic)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Immediately after the initialized notification is sent, the client automatically fires three
            batch requests to discover exactly what the server offers.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Automatic batch discovery — client → server</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`[
  { "jsonrpc": "2.0", "id": 1, "method": "tools/list",     "params": {} },
  { "jsonrpc": "2.0", "id": 2, "method": "prompts/list",   "params": {} },
  { "jsonrpc": "2.0", "id": 3, "method": "resources/list", "params": {} }
]`}</pre>
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-green-400 font-semibold mb-3">Server responds with the full tool list (tools/list)</p>
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "tools": [
      { "name": "read_file",          "description": "Read file contents" },
      { "name": "write_file",         "description": "Write content to file" },
      { "name": "list_directory",     "description": "List files in directory" },
      { "name": "create_directory",   "description": "Create a new directory" },
      { "name": "edit_file",          "description": "Edit file contents" }
    ]
  }
}`}</pre>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The client stores this complete list. From now on, whenever the user sends a request, the
            host reads this list, figures out which tool fits best, and calls it.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">What if the server does not have prompts or resources?</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The server returns a <code className="text-red-400 bg-red-950/30 px-1 rounded">-32601 Method Not Found</code> error for
              those requests. This is expected and handled normally — the client simply notes that those
              capabilities are unavailable for this server.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Part B — Tool Calling</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Once capabilities are discovered, real work begins. User makes a request → host picks the
            right tool → client calls it → server executes it → result comes back.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-gray-500 mb-3">User asks: "What is written in hello.py on my Desktop?"</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`// Client calls the read_file tool:
{
  "jsonrpc": "2.0",
  "id": 10,
  "method": "tools/call",
  "params": {
    "name": "read_file",
    "arguments": {
      "path": "/Users/username/Desktop/hello.py"
    }
  }
}`}</pre>
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-green-400 font-semibold mb-3">Server reads the file and responds</p>
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 10,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "name = input('Enter your name: ')\nprint(f'Hello, {name}!')"
      }
    ]
  }
}`}</pre>
          </div>
        </div>
      </div>

      {/* 4.9 Phase 3: Shutdown */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">4.9 Phase 3 — Shutdown</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The session ends when the client or server shuts down. One critical fact: <span className="text-white font-medium">no
          JSON-RPC messages are exchanged during shutdown</span>. The entire shutdown process is handled by
          the transport layer — not the application layer.
        </p>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">STDIO Transport — Local Servers</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Recall that local servers communicate via stdin/stdout. The client launched the server as
            a subprocess, so it controls the server&apos;s streams.
          </p>
          <div className="flex flex-col gap-2">
            {[
              {
                trigger: "Client-initiated (common)",
                steps: [
                  "Client closes the server's stdin stream",
                  "Client waits for the server process to exit gracefully",
                  "If server does not exit → client sends SIGTERM (polite: \"please shut down\")",
                  "If still no exit → client sends SIGKILL (forceful: \"shut down now\")",
                ],
                color: "text-[#6366f1]",
              },
              {
                trigger: "Server-initiated (rare)",
                steps: [
                  "Server closes its own stdout stream",
                  "Server process exits",
                  "Client detects the closed stream and cleans up",
                ],
                color: "text-purple-400",
              },
            ].map(({ trigger, steps, color }) => (
              <div key={trigger} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
                <p className={`text-xs font-semibold ${color} uppercase tracking-widest`}>{trigger}</p>
                <ol className="flex flex-col gap-1">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className={`${color} font-bold shrink-0`}>{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">SIGTERM vs SIGKILL</p>
            <div className="flex flex-col gap-1 text-xs text-gray-400">
              <p><span className="text-white font-medium">SIGTERM</span> — polite signal: &quot;please shut down cleanly when you are ready&quot;. The server can wrap up ongoing tasks.</p>
              <p><span className="text-white font-medium">SIGKILL</span> — forceful signal: &quot;shut down immediately, no cleanup&quot;. The OS terminates the process.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">HTTP Transport — Remote Servers</h3>
          <div className="flex flex-col gap-2">
            {[
              { trigger: "Client-initiated (common)", detail: "Client closes the HTTP POST connection it has open with the server. The TCP connection is torn down. Session ends." },
              { trigger: "Server-initiated (rare)", detail: "Server closes the HTTP connection on its side. Client detects the dropped connection, handles any in-flight requests gracefully, and may attempt to reconnect." },
            ].map(({ trigger, detail }) => (
              <div key={trigger} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div>
                  <p className="text-xs font-semibold text-[#6366f1] mb-0.5">{trigger}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4.10 Special Cases */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">4.10 Special Cases</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The three-phase lifecycle is the normal flow. But several special situations can occur at any
          point during a session. Understanding these is essential before writing production code.
        </p>

        {/* Pings */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Pings — Heartbeat Checks</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            A ping is a lightweight request-response that either side can send to verify the other is
            still alive and responsive. Unlike most requests, pings are allowed even during
            initialization — before the handshake is complete.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
              <p className="text-xs text-[#6366f1] font-semibold mb-3">Ping request (either side)</p>
              <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 5,
  "method": "ping"
}`}</pre>
            </div>
            <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
              <p className="text-xs text-green-400 font-semibold mb-3">Ping response (empty result)</p>
              <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 5,
  "result": {}
}`}</pre>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { use: "Before full initialization", desc: "Either side can ping to verify connectivity before the handshake completes." },
              { use: "During long-running tasks", desc: "Periodic pings keep the connection alive. Without them, the OS, proxy, or firewall may silently drop an idle connection." },
            ].map(({ use, desc }) => (
              <div key={use} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
                <p className="text-xs font-semibold text-[#6366f1] w-44 shrink-0">{use}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Error Handling */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Error Handling</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            MCP inherits JSON-RPC&apos;s standard error object format. Every error response contains a
            structured object with a code, a human-readable message, and optional debug data.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-red-400 font-semibold mb-3">Standard MCP error response</p>
            <pre className="text-sm text-red-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 7,
  "error": {
    "code": -32601,
    "message": "Method not found",
    "data": { "method": "prompts/list" }
  }
}`}</pre>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { scenario: "Version mismatch in initialization", code: "Connection terminated", note: "Client disconnects if server version is not supported." },
              { scenario: "Method not found", code: "-32601", note: "You called a method/tool the server does not offer." },
              { scenario: "Invalid parameters", code: "-32602", note: "You called a tool with wrong or missing arguments." },
              { scenario: "Invalid request format", code: "-32600", note: "The JSON-RPC message itself is malformed." },
              { scenario: "Parse error (bad JSON)", code: "-32700", note: "The message could not be parsed as valid JSON." },
              { scenario: "Server/app errors", code: "-32000 and above", note: "Auth failure, rate limit exceeded, server overloaded, quota errors." },
            ].map(({ scenario, code, note }) => (
              <div key={scenario} className="grid grid-cols-3 gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 items-start">
                <p className="text-xs font-semibold text-white">{scenario}</p>
                <code className="text-xs text-red-400 font-mono">{code}</code>
                <p className="text-xs text-gray-400">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeout & Cancellation */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Timeout & Cancellation</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sometimes a server takes too long to respond. Instead of letting the user wait forever,
            the client sets a timeout — a deadline for how long it will wait. If the deadline passes,
            the client cancels the request.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { step: "1", action: "Client sets a timeout", desc: "When calling a tool, the client SDK lets you specify a timeout per request (e.g., 30 seconds)." },
              { step: "2", action: "Deadline passes", desc: "The server has not responded within the timeout window." },
              { step: "3", action: "Client sends cancellation notification", desc: "A fire-and-forget notification telling the server to stop processing that specific request." },
              { step: "4", action: "Server stops and releases resources", desc: "The server abandons the task and frees any memory or CPU it was using." },
            ].map(({ step, action, desc }) => (
              <div key={step} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <span className="w-6 h-6 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{action}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Cancellation notification (no ID — fire and forget)</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "method": "notifications/cancelled",
  "params": {
    "requestId": 7,
    "reason": "Request timeout exceeded 30s"
  }
}`}</pre>
          </div>
        </div>

        {/* Progress Notifications */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-white">Progress Notifications</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            For long-running tasks, the server can stream progress updates back to the client in
            real time. The client includes a <code className="text-[#6366f1] bg-[#6366f1]/10 px-1 rounded text-xs">progressToken</code> in
            its request — the server uses that token to send periodic updates.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-[#6366f1] font-semibold mb-3">Client request with progressToken</p>
            <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 12,
  "method": "tools/call",
  "params": {
    "name": "scan_repository",
    "arguments": { "repo": "my-project" },
    "_meta": { "progressToken": "token-7" }
  }
}`}</pre>
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-purple-400 font-semibold mb-3">Server sends periodic progress notifications</p>
            <pre className="text-sm text-purple-300 font-mono leading-loose whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "method": "notifications/progress",
  "params": {
    "progressToken": "token-7",
    "progress": 60,
    "total": 100,
    "message": "Scanning file 600 of 1000"
  }
}`}</pre>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The client displays these updates to the user — a real-time progress indicator. Users see
            "60% complete" instead of a blank spinner. This is the same pattern you see in research
            assistants that show you which sources they are checking as they go.
          </p>
        </div>
      </div>

      {/* 4.11 Complete Lifecycle Summary */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.11 Complete Lifecycle at a Glance</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`══════════════════ PHASE 1: INITIALIZATION ══════════════════

  Client ──── initialize ───────────────────────────▶ Server
             (protocolVersion, capabilities, info)

  Client ◀─── initialize response ────────────────── Server
             (protocolVersion, capabilities, info)

  Client ──── notifications/initialized ────────────▶ Server
             (no ID — fire and forget)

  ✓ Session is now LIVE

══════════════════ PHASE 2: OPERATION ════════════════════

  [Automatic capability discovery]
  Client ──── tools/list ───────────────────────────▶ Server
  Client ◀─── list of tools ───────────────────────── Server

  [Normal tool usage — repeats as needed]
  Client ──── tools/call (tool name + args) ────────▶ Server
  Client ◀─── tool result ─────────────────────────── Server

  [Special cases can occur at any time]
  ↕ Pings (either direction, any time)
  ← Progress notifications (server → client, for long tasks)
  ← Error responses (server → client, on failure)
  → Cancellation notifications (client → server, on timeout)

══════════════════ PHASE 3: SHUTDOWN ═════════════════════

  [No JSON-RPC messages — handled by transport layer]

  STDIO: Client closes stdin stream
         → waits → SIGTERM → SIGKILL if needed

  HTTP:  Client closes the HTTP POST connection`}</pre>
        </div>
      </div>

      {/* 4.12 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.12 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "The MCP Lifecycle is the complete sequence of steps governing how client and server establish, use, and end a connection — the rulebook for a session.",
            "A session is one continuous connection between a client and server — it begins when the host starts and ends when either side shuts down.",
            "The lifecycle has three phases: Initialization (handshake), Operation (do the work), Shutdown (clean up).",
            "Initialization has exactly three steps: initialize request → server response → initialized notification. No other messages may be exchanged until all three complete.",
            "Version negotiation: if the server's version is not in the client's supported list, the client disconnects immediately.",
            "Capability negotiation: client announces what it can offer the server (roots, sampling, elicitation); server announces what it can offer the client (tools, resources, prompts, logging).",
            "Operation begins with automatic capability discovery — the client sends batch tools/list, resources/list, and prompts/list requests immediately after initialization.",
            "Shutdown is handled entirely by the transport layer — no JSON-RPC messages. STDIO: close stdin → SIGTERM → SIGKILL. HTTP: close the POST connection.",
            "Pings are heartbeats — either side can send them at any point, even during initialization. They keep connections alive and verify the other side is responsive.",
            "Progress notifications let the server stream real-time status updates to the client using a progressToken. Timeout + cancellation let the client abort requests that are taking too long.",
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
