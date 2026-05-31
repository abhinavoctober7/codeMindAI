export const mcpLessons = [
  {
    slug: "class-1",
    title: "Class 1: MCP in Action — The Trailer",
    label: "Class 1",
  },
  {
    slug: "class-2",
    title: "Class 2: The Why — The Story Behind MCP",
    label: "Class 2",
  },
  {
    slug: "class-3",
    title: "Class 3: The What — MCP Architecture",
    label: "Class 3",
  },
  {
    slug: "class-4",
    title: "Class 4: The What — MCP Lifecycle",
    label: "Class 4",
  },
  {
    slug: "class-5",
    title: "Class 5: The How (Part 1) — Claude Desktop + MCP Servers",
    label: "Class 5",
  },
  {
    slug: "class-6",
    title: "Class 6: The How (Part 2) — Building a Local MCP Server",
    label: "Class 6",
  },
  {
    slug: "class-7",
    title: "Class 7: The How (Part 3) — Building a Remote MCP Server",
    label: "Class 7",
  },
  {
    slug: "class-8",
    title: "Class 8: The How (Part 4) — Building an MCP Client",
    label: "Class 8",
  },
];

export function getMcpLessonHref(slug: string) {
  return `/blog/mcp/${slug}`;
}
