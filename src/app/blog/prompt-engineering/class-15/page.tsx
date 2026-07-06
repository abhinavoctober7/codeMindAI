import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass15() {
  return (
    <PromptEngineeringLessonLayout slug="class-15">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 15 — Prompting for Pixels</p>
        <h1 className="text-3xl font-bold text-white">Image Generation Prompting — Think Like a Director</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Modern models don&apos;t just write — they <span className="text-white font-medium">paint</span>. But the AI
          builds an image entirely from your words, so <span className="text-white font-medium">prompt quality directly
          equals image quality</span>. This class covers how generation works under the hood, the mistakes that wreck
          outputs, and a 6-step framework for directing the AI like a film scene.
        </p>
      </div>

      {/* 15.1 How it works */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.1 How Image Generation Works</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Most modern generators pair a <span className="text-white font-medium">Transformer</span> (understands your
          text prompt) with a <span className="text-white font-medium">Diffusion model</span> (constructs the visual
          image). Generation happens in two steps:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">1. Prompt Understanding (LLM)</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The conversational model interprets your intent, then expands and refines the request for clarity.
            </p>
          </div>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">2. Image Generation (Diffusion)</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The refined prompt is handed to a diffusion model, which mathematically constructs the image starting from
              pure noise.
            </p>
          </div>
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">The Double-Edged Sword</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Because the AI relies entirely on your input, <span className="text-white font-medium">prompt quality =
            image quality</span>. Good prompts yield high-quality images; poor prompts give low-quality or completely
            irrelevant ones.
          </p>
        </div>
      </div>

      {/* 15.2 Common mistakes */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.2 Common Mistakes to Avoid</h2>
        {[
          { k: "Vague prompts", bad: '"No blur", "No color", "No design"', good: "Be specific and highly descriptive." },
          { k: "Conversational language", bad: '"Can you create an image of..."', good: "Use a direct instruction format." },
          { k: "Negative framing", bad: '"No clouds in the sky"', good: '"Clear blue sky" — state what should be there.' },
        ].map(({ k, bad, good }) => (
          <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">{k}</p>
            <p className="text-xs text-gray-400 leading-relaxed"><span className="text-red-400">✗ </span><span className="font-mono">{bad}</span></p>
            <p className="text-xs text-gray-400 leading-relaxed"><span className="text-green-400">✔ </span>{good}</p>
          </div>
        ))}
      </div>

      {/* 15.3 Think like a director */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.3 Core Philosophy — &quot;Think Like a Director&quot;</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Treat your prompt as if you are directing a movie scene. A good prompt dictates the{" "}
          <span className="text-white font-medium">Scene, Subject, Costume, Shot angle, and Expression</span>.
        </p>
      </div>

      {/* 15.4 The 6-step framework */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.4 The 6-Step Framework</h2>
        {[
          { n: 1, k: "Define Clear Intention", v: "Determine the exact purpose — the use-case (poster, product shot, social post) and the emotional tone you want the viewer to feel (happy, dramatic, calm)." },
          { n: 2, k: "Define the Subject", v: "The main focus. Use clear nouns and descriptive adjectives, avoiding abstract concepts. ✗ 'Coffee mug' → ✔ 'brown ceramic coffee mug'." },
          { n: 3, k: "Explain Context & Environment", v: "Specify where the subject sits and what surrounds it — background, environment, atmospheric conditions, and how elements relate." },
          { n: 4, k: "Define Style & Aesthetic", v: "Two pillars: what it looks like (realistic photography, oil painting, cartoon) and how it's presented (mood, lighting, color palette)." },
          { n: 5, k: "Use Positive Framing", v: "Always state what should be present rather than listing what to exclude." },
          { n: 6, k: "Use Comma-Separated Key Phrases", v: "Avoid long sentences. Structure as distinct keywords: 'brown ceramic coffee mug, wooden table, soft morning light, minimal background, high detail'." },
        ].map(({ n, k, v }) => (
          <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{n}</span>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 15.5 Technical parameters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.5 Advanced — Technical Parameters</h2>
        <p className="text-gray-400 text-sm leading-relaxed">Control the output by explicitly stating technical specs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { k: "Aspect Ratio", v: "1:1 (square), 16:9 (landscape), 9:16 (portrait)." },
            { k: "Resolution", v: "1024×1024, 1792×1024, or 1024×1792." },
            { k: "Quality Settings", v: "'Ultra HD' or '8K style' to boost fidelity." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 15.6 Camera & lighting */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.6 Camera, Photography &amp; Lighting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">For truly professional results, include camera and lighting details.</p>
        {[
          { k: "Camera Angle", v: "Eye-level, low angle, or high angle." },
          { k: "Camera Distance", v: "Close-up, medium shot, or wide shot." },
          { k: "Lens Type", v: "Simulate specific lenses — a portrait lens or a wide-angle lens." },
          { k: "Lighting Techniques", v: "Specify type (soft diffused, dramatic contrast), plus direction, intensity, and resulting shadows — lighting heavily dictates quality." },
        ].map(({ k, v }) => (
          <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">{k}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
          </div>
        ))}
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-bold">Mastery Principle:</span> master the 6 core areas — Intention,
            Subject, Context, Style, Technical parameters, and Camera &amp; lighting — and you&apos;ll consistently
            generate high-quality images.
          </p>
        </div>
      </div>

      {/* 15.7 Image editing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.7 Image Editing with AI (ISON Prompting)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          ISON prompting gives direct instructions to <span className="text-white font-medium">edit an existing
          image</span> rather than creating one from scratch. The original image is converted into an editable
          mathematical representation, then modifications are applied via your text prompt — changing a season from
          summer to winter, adjusting the camera angle, or completely reworking the lighting.
        </p>
      </div>

      {/* 15.8 Master example */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">15.8 Master Example</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`A young woman sitting in a cozy cafe, warm sunlight
through the window, wooden furniture, soft shadows,
candid expression, medium shot, 50mm lens, realistic
photography, high detail, cinematic lighting`}</pre>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          Notice every layer: subject, context, lighting, expression, shot, lens, style, and detail — all as
          comma-separated key phrases, all positively framed.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Image models pair a Transformer (understands the prompt) with a Diffusion model (builds the image from noise) — so prompt quality directly equals image quality.",
            "Avoid the three classic mistakes: vague prompts, conversational phrasing, and negative framing. Be specific, direct, and positive.",
            "Think like a director — your prompt dictates the scene, subject, costume, shot angle, and expression.",
            "Follow the 6-step framework: Intention, Subject, Context, Style, Positive Framing, and Comma-Separated Key Phrases.",
            "Push quality further with technical parameters (aspect ratio, resolution, quality) and camera/lighting controls (angle, distance, lens, lighting).",
            "ISON prompting edits an existing image instead of generating a new one — great for changing season, angle, or lighting.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </PromptEngineeringLessonLayout>
  );
}
