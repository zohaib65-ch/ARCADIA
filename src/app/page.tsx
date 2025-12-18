import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]"></div>
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      <Header />
      <main className="relative z-10">
        <HeroSection />
      </main>
    </div>
  );
}
