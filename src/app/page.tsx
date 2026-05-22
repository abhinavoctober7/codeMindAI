import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBar from "@/components/TechBar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1e2235] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-1 py-12">
        <Hero />
      </main>
      <TechBar />
    </div>
  );
}
