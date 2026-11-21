import { Navbar } from "@/components/Navbar";
import { HeroServices } from "@/components/HeroServices";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Joined Frosted Glass Floating Navbar */}
      <Navbar />

      {/* Section 1: Hero & Three Core Services (Build, Fix & Accelerate, Benchmark & Audit) */}
      <HeroServices />

      {/* Section 2: Client Testimonials & Verified Outcomes */}
      <TestimonialsSection />

      {/* Section 3: Selected Projects Showcase (Top 3 with expand accordion) */}
      <ProjectsSection />

      {/* Section 4: Direct Intake & Contact */}
      <ContactSection />

      {/* Minimalist Engineering Footer */}
      <Footer />
    </main>
  );
}
