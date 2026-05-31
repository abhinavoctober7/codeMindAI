export const ollamaLessons = [
  {
    slug: "class-1",
    title: "Class 1: LLMs — Proprietary vs Open-Source",
    label: "Class 1",
  },
  {
    slug: "class-2",
    title: "Class 2: Meet Ollama — What, Why & Benefits",
    label: "Class 2",
  },
  {
    slug: "class-3",
    title: "Class 3: Installing Ollama & the CLI",
    label: "Class 3",
  },
  {
    slug: "class-4",
    title: "Class 4: Using Ollama in Python",
    label: "Class 4",
  },
  {
    slug: "class-5",
    title: "Class 5: Tool Calling",
    label: "Class 5",
  },
  {
    slug: "class-6",
    title: "Class 6: Custom Models with Modelfiles",
    label: "Class 6",
  },
  {
    slug: "class-7",
    title: "Class 7: The REST API Behind Ollama",
    label: "Class 7",
  },
  {
    slug: "class-8",
    title: "Class 8: Using Ollama with LangChain",
    label: "Class 8",
  },
  {
    slug: "class-9",
    title: "Class 9: Ollama Cloud & the Desktop App",
    label: "Class 9",
  },
];

export function getOllamaLessonHref(slug: string) {
  return `/blog/ollama/${slug}`;
}
