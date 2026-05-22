import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-[#1e2235] flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
