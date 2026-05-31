import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass4() {
  return (
    <OllamaLessonLayout slug="class-4">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 4 — In Code</p>
        <h1 className="text-3xl font-bold text-white">Using Ollama in Python</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The CLI is great for testing, but to build a chatbot or any real app — with an interface and
          memory — you need code. The Ollama Python library lets you call your locally-downloaded models
          programmatically. We&apos;ll cover the <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-sm">generate</code> and
          <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-sm"> chat</code> methods, images, parameters, and helper methods.
        </p>
      </div>

      {/* 4.1 Setup + generate */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.1 Setup &amp; the generate Method</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Install the library, import it, then call <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">generate</code> with a
          model and a prompt. The model must already be downloaded locally.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# pip install ollama
import ollama

response = ollama.generate(
    model="llama3.2:1b",
    prompt="Why does the moon glow?",
)
print(response.response)   # just the text output`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The full response object carries lots of metadata (model, created time, eval counts). The
          actual text lives in <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">response.response</code>.
        </p>
      </div>

      {/* 4.2 Streaming */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.2 Streaming Responses</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Set <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">stream=True</code> to receive the output in
          chunks as it&apos;s generated, instead of waiting for the whole response.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`for chunk in ollama.generate(
    model="llama3.2:1b",
    prompt="Why does the moon glow?",
    stream=True,
):
    print(chunk.response, end="")`}</pre>
        </div>
      </div>

      {/* 4.3 Images */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.3 Passing Images</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Images must be <span className="text-white font-medium">base64-encoded</span> and passed as a
          list to the <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">images</code> parameter — and you need a
          vision-capable model. You can pass multiple images in the same list.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`import base64, ollama

with open("image.png", "rb") as f:
    image_64 = base64.b64encode(f.read()).decode()

response = ollama.generate(
    model="gemma3:4b",          # vision-capable
    prompt="Give a caption to the image",
    images=[image_64],           # list → can hold multiple
)
print(response.response)`}</pre>
        </div>
      </div>

      {/* 4.4 System + options */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.4 System Instructions &amp; Parameters</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Pass a <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">system</code> instruction to shape behavior, and
          an <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">options</code> dictionary to tune parameters like
          temperature, top_p, top_k, and min_p.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`response = ollama.generate(
    model="llama3.2:1b",
    prompt="Tell me about black holes",
    system="You are a funny assistant.",
    options={"temperature": 0.9, "top_p": 0.95},
)
print(response.response)`}</pre>
        </div>
      </div>

      {/* 4.5 chat vs generate */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.5 generate vs chat — Keeping History</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The big limitation of <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">generate</code> is that it has
          <span className="text-white font-medium"> no context awareness</span> — it&apos;s one prompt, one
          output, with no memory of the conversation. For multi-turn chat where history matters, use the
          <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs"> chat</code> method instead.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-white">generate</p>
            <p className="text-xs text-gray-400 leading-relaxed">One prompt → one output. No history, no context across calls.</p>
          </div>
          <div className="bg-[#14b8a6]/5 border border-[#14b8a6]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-[#14b8a6]">chat</p>
            <p className="text-xs text-gray-400 leading-relaxed">Maintains a full conversation with history and context — like ChatGPT/Gemini.</p>
          </div>
        </div>
      </div>

      {/* 4.6 Helper methods */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.6 Management Methods in Code</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every CLI command has a matching library method, so you can replicate any of them in code:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { m: "ollama.list()", d: "List installed models (iterate to read name + size)." },
            { m: "ollama.pull(model)", d: "Download a model." },
            { m: "ollama.delete(model)", d: "Delete a model." },
            { m: "ollama.show(model)", d: "Show details: template, capabilities, parameters, license." },
          ].map(({ m, d }) => (
            <div key={m} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <code className="text-xs text-[#14b8a6] font-mono">{m}</code>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "pip install ollama, import it, then call generate(model, prompt); the text is in response.response.",
            "stream=True returns the output chunk-by-chunk as it's generated.",
            "Images must be base64-encoded and passed as a list to the images parameter, with a vision-capable model.",
            "Use the system argument for behavior and an options dict to tune temperature, top_p, top_k, etc.",
            "generate is one-shot with no memory; use chat for multi-turn conversations with history and context.",
            "Every CLI command (list, pull, delete, show) has an equivalent library method for use in code.",
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
