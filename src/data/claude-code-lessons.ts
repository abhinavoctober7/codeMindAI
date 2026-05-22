export const claudeCodeLessons = [
  {
    slug: "class-1",
    title: "Class 1: Introduction",
    label: "Class 1",
  },
  {
    slug: "class-2",
    title: "Class 2: Installation & Setup",
    label: "Class 2",
  },
  {
    slug: "class-3",
    title: "Class 3: Slash Commands",
    label: "Class 3",
  },
  {
    slug: "class-4",
    title: "Class 4: Making Code Changes",
    label: "Class 4",
  },
  {
    slug: "class-5",
    title: "Class 5: Context Window Management",
    label: "Class 5",
  },
  {
    slug: "class-6",
    title: "Class 6: CLAUDE.md & Auto Memory",
    label: "Class 6",
  },
];

export function getLessonHref(slug: string) {
  return `/blog/claude-code/${slug}`;
}
