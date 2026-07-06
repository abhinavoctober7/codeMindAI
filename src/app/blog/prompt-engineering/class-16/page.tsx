import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass16() {
  return (
    <PromptEngineeringLessonLayout slug="class-16">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 16 — Prompting in Motion</p>
        <h1 className="text-3xl font-bold text-white">Video Generation — Timestamp Prompting &amp; Character Consistency</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Image prompting froze a single moment. Video adds <span className="text-white font-medium">time</span> —
          motion, camera moves, and audio that must all unfold in sequence. This class covers{" "}
          <span className="text-white font-medium">timestamp prompting</span> for choreographing shots second-by-second,
          plus the <span className="text-white font-medium">character reference sheet</span> trick that keeps a subject
          identical across every clip.
        </p>
      </div>

      {/* 16.1 Why video is different */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.1 Why Video Prompting Is Different</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A still image needs one frozen description. A video clip needs <span className="text-white font-medium">change
          over time</span> — what moves, how the camera travels, and what the viewer hears. Everything you learned in
          Class 15 (subject, context, style, camera, lighting) still applies, but now each beat layers on{" "}
          <span className="text-white font-medium">motion + camera movement + audio</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { k: "Motion", v: "What the subject and environment physically do over the clip." },
            { k: "Camera Movement", v: "Dolly, tracking, crane, push-in, tilt, pan — the camera is a character too." },
            { k: "Audio", v: "Diegetic sound and ambience: footsteps, rain, hums, music cues." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 16.2 Timestamp prompting */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.2 Timestamp Prompting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          For multi-beat clips, break the timeline into labelled segments like{" "}
          <span className="font-mono text-[#ec4899]">[0:00 - 0:02]</span>. Each block gets its own shot type, camera
          move, action, and lighting — turning one prompt into a precise storyboard the model follows in order.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Cinematic sci-fi scene, hyper-realistic, 8k, volumetric
lighting, unreal engine 5 render style.

[0:00 - 0:02] Wide shot, low angle, slow tracking forward.
A lone astronaut in a weathered grey spacesuit walks into
a cavernous metallic ruin. A pulsing neon-blue glow at the
far end. Dust motes float in zero gravity.

[0:02 - 0:04] Over-the-shoulder, panning right. The
astronaut stops. A levitating geometric alien artifact
rotates slowly, casting harsh blue light on rusted walls.

[0:04 - 0:06] Extreme close-up, slow push-in on the gold
visor. The blue light reflects across the curved glass; an
armored glove reaches up toward the light.

[0:06 - 0:08] High angle, fast crane pulling up and away.
The artifact snaps open, releasing a silent shockwave of
bioluminescent energy that floods the cavern.`}</pre>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          Notice the global style line sits up top (applies to the whole clip), then each timestamp escalates the action
          — establishing → reveal → detail → climax.
        </p>
      </div>

      {/* 16.3 Anatomy of a beat */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.3 Anatomy of a Single Beat</h2>
        <p className="text-gray-400 text-sm leading-relaxed">Even a one-shot clip benefits from naming each layer explicitly.</p>
        {[
          { k: "Shot + Angle", v: "Wide / medium / close-up / macro, plus eye-level, low, or high angle." },
          { k: "Camera Movement", v: "Slow dolly-in, tracking backward, vertical tilt-up, crane pull-out, static lock-off." },
          { k: "Subject Action", v: "What changes — walks cautiously, stops abruptly, eyes narrow, reaches up." },
          { k: "Lighting & Mood", v: "Soft diffused overcast, low-key cool blue, golden-hour shift, firelight." },
          { k: "Audio", v: "Leaves crunching, distant howling wind, water drip, ambient birds, cinematic bass hum." },
        ].map(({ k, v }) => (
          <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">{k}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
          </div>
        ))}
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-2">Single-beat example — Knight</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Cinematic low-angle shot of a battle-worn knight in
tarnished silver plate armor with realistic scuffs and
dents. He stands motionless in a windswept meadow of
waist-high golden grass. Soft diffused overcast light.
Camera starts tight on the breastplate, then a slow
majestic vertical tilt-up past the visor, ending wide on
the moving clouds. 8k, shot on 65mm film, hyper-realistic.`}</pre>
        </div>
      </div>

      {/* 16.4 Physics & audio */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.4 Motion Realism &amp; Sound Design</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Video models reward describing <span className="text-white font-medium">believable physics</span> and{" "}
          <span className="text-white font-medium">matched audio</span>. Call out velocity, collisions, and material
          behaviour, then pair every action with the sound it would make.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`An empty parking lot in the rain. A metal shopping cart
rolls downhill, gaining speed. It hits a speed bump, the
front wheels lift, and it bounces with a realistic elastic
collision. Camera follows alongside. Clattering metal and
rain audio.`}</pre>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          &quot;Elastic collision&quot;, &quot;gaining speed&quot;, and &quot;wheels lift&quot; give the model concrete physical cues; the
          audio line keeps sound locked to the action.
        </p>
      </div>

      {/* 16.5 Branding / talking subjects */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.5 Logos, Branding &amp; Talking Subjects</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Commercial clips add two hard requirements: <span className="text-white font-medium">logos/text must stay
          stable</span> (not morph) and, for spokesperson shots, <span className="text-white font-medium">lip-sync must
          match the spoken line</span>. State both explicitly.
        </p>
        <ul className="flex flex-col gap-1.5">
          {[
            "Lock text: 'The brand logo and text remain completely sharp, stable, and locked in place without morphing.'",
            "Sync speech: 'Her lips move perfectly in sync as she clearly speaks the words: \"...\".'",
            "Constrain the frame: 'No other people or males in the frame.' to stop unwanted extras.",
          ].map((i) => (
            <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
          ))}
        </ul>
      </div>

      {/* 16.6 Character consistency */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">16.6 Character Consistency — The Reference Sheet</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The biggest video challenge is keeping a character <span className="text-white font-medium">identical across
          shots</span>. The fix: first generate a <span className="text-white font-medium">character reference sheet</span>{" "}
          (a &quot;cheat-sheet&quot;) showing the subject from multiple angles, then reuse it to anchor every clip.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-2">Cheat-sheet prompt</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Create a professional character reference sheet for a
young female warrior with braided red hair wearing worn
leather armor. Clean plain white background. Arrange into
four vertical columns, each one viewing angle:
  Column 1: front view
  Column 2: left profile facing left
  Column 3: right profile facing right
  Column 4: back view
Beneath each full-body view, include a matching close-up
face portrait. Maintain perfect identity consistency
across every panel. Photorealistic, clean silhouette.`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          With the sheet locked, each subsequent clip just references &quot;character&quot; and describes the new beat:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">Prompt 1 — establishing</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Wide shot, character walks slowly through a dense foggy medieval forest. Moody low-key blue-grey tones.
              Slow tracking shot moving backward ahead of her. Sound of leaves crunching and distant howling wind.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">Prompt 2 — reaction</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Macro close-up. Character stops abruptly, eyes narrowing in suspicion off-screen right. Soft cool natural
              light. Camera static and locked off. A faint mysterious magical hum grows louder.
            </p>
          </div>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Video prompting adds time — every beat layers motion, camera movement, and audio on top of the still-image fundamentals.",
            "Timestamp prompting breaks a clip into labelled segments like [0:00 - 0:02], each with its own shot, camera move, action, and lighting.",
            "Put a global style line at the top (applies to the whole clip), then escalate the action beat by beat: establish → reveal → detail → climax.",
            "Describe believable physics (velocity, elastic collisions, material behaviour) and pair every action with matched audio.",
            "For commercial work, explicitly lock logos/text against morphing and demand accurate lip-sync for spoken lines.",
            "Solve character consistency by generating a multi-angle reference 'cheat-sheet' first, then referencing that character across every subsequent clip.",
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
