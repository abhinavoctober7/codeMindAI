import Link from "next/link";
import { SiAnthropic } from "react-icons/si";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-6 max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-[#cc785c]/20 flex items-center justify-center">
        <SiAnthropic size={32} color="#cc785c" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-white">Pick a topic to start learning</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Choose a language or technology from the sidebar. Start with Claude Code to learn how to build with the latest AI models.
        </p>
      </div>
      <Link
        href="/blog/claude-code/class-1"
        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors"
      >
        Start with Claude Code →
      </Link>
    </div>
  );
}
