"use client";

import {
  SiJavascript, SiCss, SiHtml5, SiReact, SiTypescript,
  SiPython, SiNodedotjs, SiNextdotjs, SiGit, SiMysql,
  SiRust, SiDocker, SiPhp, SiDart,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", icon: SiJavascript,  color: "#f7df1e" },
  { name: "Python",     icon: SiPython,       color: "#3776ab" },
  { name: "HTML",       icon: SiHtml5,        color: "#e34c26" },
  { name: "CSS",        icon: SiCss,          color: "#264de4" },
  { name: "TypeScript", icon: SiTypescript,   color: "#3178c6" },
  { name: "React",      icon: SiReact,        color: "#61dafb" },
  { name: "Next.js",    icon: SiNextdotjs,    color: "#000000" },
  { name: "Node.js",    icon: SiNodedotjs,    color: "#68a063" },
  { name: "Git",        icon: SiGit,          color: "#f05032" },
  { name: "SQL",        icon: SiMysql,        color: "#4479a1" },
  { name: "Docker",     icon: SiDocker,       color: "#2496ed" },
  { name: "Rust",       icon: SiRust,         color: "#ce422b" },
  { name: "PHP",        icon: SiPhp,          color: "#8892be" },
  { name: "Dart",       icon: SiDart,         color: "#0175c2" },
];

function TechList() {
  return (
    <>
      {techs.map(({ name, icon: Icon, color }) => (
        <span
          key={name}
          className="flex items-center gap-2 px-5 py-2 text-sm text-gray-600 whitespace-nowrap"
        >
          <Icon style={{ color }} size={18} />
          {name}
        </span>
      ))}
    </>
  );
}

export default function TechBar() {
  return (
    <div className="bg-white border-t border-gray-200 py-2 overflow-hidden">
      <div className="flex w-max" style={{ animation: "marquee 30s linear infinite" }}>
        {/* Duplicated for seamless loop */}
        <TechList />
        <TechList />
      </div>
    </div>
  );
}
