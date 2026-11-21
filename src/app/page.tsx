import { Navbar } from "@/components/Navbar";
import { HeroServices } from "@/components/HeroServices";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Apple Glassmorphism Floating Navbar */}
      <Navbar />

      {/* Section 1: Hero & Services (with Interactive Latency/Memory Simulator) */}
      <HeroServices />

      {/* Section 2: Selected Projects & Benchmarked Case Studies */}
      <ProjectsSection />

      {/* Section 3: Contact & Direct Intake */}
      <ContactSection />

      {/* Engineering Footer */}
      <Footer />
    </main>
  );
}
