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
];

export function getPromptEngineeringLessonHref(slug: string) {
  return `/blog/prompt-engineering/${slug}`;
}
