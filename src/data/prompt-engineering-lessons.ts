export const promptEngineeringLessons = [
  {
    slug: "class-1",
    title: "Class 1: How LLMs Work & What Prompt Engineering Is",
    label: "Class 1",
  },
  {
    slug: "class-2",
    title: "Class 2: Model Configuration & Sampling Parameters",
    label: "Class 2",
  },
  {
    slug: "class-3",
    title: "Class 3: Shot-Based Prompting — Zero, One & Few-Shot",
    label: "Class 3",
  },
  {
    slug: "class-4",
    title: "Class 4: System Instructions — Rules That Shape the AI",
    label: "Class 4",
  },
  {
    slug: "class-5",
    title: "Class 5: Delimiters & XML Tags — Structuring the Wall of Text",
    label: "Class 5",
  },
  {
    slug: "class-6",
    title: "Class 6: Chain-of-Thought — Teaching Models to Reason Step by Step",
    label: "Class 6",
  },
  {
    slug: "class-7",
    title: "Class 7: Self-Consistency — Sampling Many Paths, Voting on One Answer",
    label: "Class 7",
  },
  {
    slug: "class-8",
    title: "Class 8: Plan-and-Solve — Planning Before Answering",
    label: "Class 8",
  },
  {
    slug: "class-9",
    title: "Class 9: Chain of Draft — Reasoning in Shorthand",
    label: "Class 9",
  },
  {
    slug: "class-10",
    title: "Class 10: System 2 Attention — Cleaning the Prompt Before Answering",
    label: "Class 10",
  },
  {
    slug: "class-11",
    title: "Class 11: Prompt Chaining — One Prompt, One Task, One Objective",
    label: "Class 11",
  },
  {
    slug: "class-12",
    title: "Class 12: Meta Prompting — The LLM as Its Own Project Manager",
    label: "Class 12",
  },
  {
    slug: "class-13",
    title: "Class 13: Multimodal Prompting & Chain of Verification",
    label: "Class 13",
  },
  {
    slug: "class-14",
    title: "Class 14: Retrieval Augmented Generation (RAG) & Query Optimization",
    label: "Class 14",
  },
  {
    slug: "class-15",
    title: "Class 15: Image Generation Prompting — Think Like a Director",
    label: "Class 15",
  },
  {
    slug: "class-16",
    title: "Class 16: Video Generation — Timestamp Prompting & Character Consistency",
    label: "Class 16",
  },
  {
    slug: "class-17",
    title: "Class 17: Adversarial Prompting — Attacks, Jailbreaks & Defenses",
    label: "Class 17",
  },
  {
    slug: "class-18",
    title: "Class 18: Prompt Management — The Prompt Lifecycle & Versioning",
    label: "Class 18",
  },
  {
    slug: "class-19",
    title: "Class 19: The Planning Phase — Requirements & the Prompt Blueprint",
    label: "Class 19",
  },
  {
    slug: "class-20",
    title: "Class 20: Prompt Development — Testing, Datasets & Versioning",
    label: "Class 20",
  },
  {
    slug: "class-21",
    title: "Class 21: LLM as a Judge & the DeepEval Framework",
    label: "Class 21",
  },
];

export function getPromptEngineeringLessonHref(slug: string) {
  return `/blog/prompt-engineering/${slug}`;
}
