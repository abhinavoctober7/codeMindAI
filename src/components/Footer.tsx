import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "AI Tools", href: "/tools" },
  { label: "Tutorials", href: "/tutorials" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#262626] py-6 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xs text-[#737373] hover:text-[#a8a8a8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-[#737373]">
          &copy; {new Date().getFullYear()} CodeMind AI
        </p>
      </div>
    </footer>
  );
}
