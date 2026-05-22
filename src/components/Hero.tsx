import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto">

      {/* Left: image */}
      <div className="w-80 md:w-[580px] shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=85"
          alt="Laptop on bright clean desk"
          width={1200}
          height={800}
          className="w-full h-auto rounded-2xl object-cover drop-shadow-2xl border-8 border-white"
          priority
        />
      </div>

      {/* Right: headline + button */}
      <div className="flex flex-col items-center md:items-start max-w-md gap-5">
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug text-center">
          The free, fun, and effective way to learn{" "}
          <span className="text-blue-400">AI &amp; Web Dev!</span>
        </h1>
        <div className="flex flex-col gap-3 w-full">
          <Link
            href="/blog"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded transition-colors text-center uppercase tracking-wide"
          >
            Get Started
          </Link>
        </div>
      </div>

    </div>
  );
}
