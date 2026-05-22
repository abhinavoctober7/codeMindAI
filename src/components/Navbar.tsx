import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8 shrink-0">
      {/* Logo + nav links */}
      <div className="flex items-center gap-8 flex-1">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-blue-600 font-bold text-2xl tracking-tight">CodeMind</span>
          <span className="text-white bg-blue-600 px-2 py-1 rounded-md text-sm leading-tight font-semibold">AI</span>
        </Link>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <Link
          href="/blog"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-8 py-2.5 rounded transition-colors tracking-wide uppercase"
        >
          Start Learning
        </Link>
      </div>
    </header>
  );
}
