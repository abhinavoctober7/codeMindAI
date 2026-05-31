import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass7() {
  return (
    <OllamaLessonLayout slug="class-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 7 — Under the Hood</p>
        <h1 className="text-3xl font-bold text-white">The REST API Behind Ollama</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          So far we&apos;ve used Ollama via the CLI and the Python library. But internally, Ollama works
          entirely through a <span className="text-white font-medium">REST API</span> — and both the CLI
          and the library are just <span className="text-white font-medium">wrappers</span> around its
          endpoints. Understanding this demystifies how everything fits together.
        </p>
      </div>

      {/* 7.1 How proprietary models work */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.1 How Proprietary Models Work</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When a company like Google trains Gemini, it stores the model on a web server. As a user, you
          interact with it through API requests. The full flow:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-gray-300 font-mono leading-loose whitespace-pre-wrap">{`User writes a prompt (natural language)
        ↓   (wrapper converts it)
   API request
        ↓
   Web server  (model lives here)
        ↓   processes the request
   Structured response
        ↓   (wrapper converts it)
Human-readable answer → back to the user`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The whole thing runs on API calls. The chatbots and libraries you use are just
          <span className="text-white font-medium"> wrappers</span> that turn your natural-language prompt
          into an API request, and the structured API response back into something human-readable.
        </p>
      </div>

      {/* 7.2 Ollama follows the same flow */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.2 Ollama Follows the Same Flow — Locally</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Ollama follows the exact same flow. The <span className="text-white font-medium">only
          difference</span>: the server isn&apos;t on the web — it&apos;s hosted on your own machine. When you
          run a model, Ollama spins up a local server at:
        </p>
        <div className="bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-xl p-4 text-center">
          <code className="text-base text-[#14b8a6] font-mono font-semibold">http://localhost:11434</code>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Whether you interact through the CLI or the Python library, the back end is identical: your
          request goes to this local server, and the response comes back from it. The CLI and library are
          just <span className="text-white font-medium">wrappers</span> around these REST endpoints — they
          make hitting the API easy for humans.
        </p>
      </div>

      {/* 7.3 Endpoints */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.3 The Endpoints</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every method maps to an endpoint. <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">generate</code> hits a
          POST endpoint; <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">list</code> hits a GET endpoint, and so on.
          You can hit them directly:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Hitting the generate endpoint directly</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`import requests, json

url = "http://localhost:11434/api/generate"
payload = {"model": "llama3.2:1b", "prompt": "Explain black holes"}

response = requests.post(url, json=payload)   # POST
for line in response.iter_lines():
    if line:
        print(json.loads(line)["response"], end="")`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Listing models via the GET endpoint</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`r = requests.get("http://localhost:11434/api/tags")   # GET
for m in r.json()["models"]:
    print(m["name"])`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Both approaches give the same output — but hitting the endpoint directly takes more code. The
            wrapper (CLI / library) decides which endpoint to hit and which request type to send, so
            <span className="text-white font-medium"> you don&apos;t have to</span>. Ollama handles that on
            your behalf.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Internally, Ollama works entirely through a REST API; the CLI and Python library are just wrappers around its endpoints.",
            "Proprietary models follow a prompt → API request → server → response flow, with wrappers handling the conversions.",
            "Ollama follows the same flow, but the server runs locally at http://localhost:11434.",
            "Each method maps to an endpoint: generate → POST, list → GET (api/tags), etc.",
            "You can hit endpoints directly with requests, but it's more code — wrappers pick the endpoint and request type for you.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </OllamaLessonLayout>
  );
}
