import { Navbar } from "@/components/Navbar";
import { HeroServices } from "@/components/HeroServices";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollTransition } from "@/components/ScrollTransition";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Joined Frosted Glass Floating Navbar */}
      <Navbar />

      {/* Section 1: Hero (Side-by-Side on desktop with live status bar) & Services Showcase */}
      <HeroServices />

      {/* Section 2: Client Testimonials & Verified Outcomes */}
      <ScrollTransition>
        <TestimonialsSection />
      </ScrollTransition>

      {/* Section 3: Selected Projects Showcase (Top 3 with expand accordion) */}
      <ScrollTransition>
        <ProjectsSection />
      </ScrollTransition>

      {/* Section 4: Direct Intake & Contact */}
      <ScrollTransition>
        <ContactSection />
      </ScrollTransition>

      {/* Charles Honig Skyline Bicycle Ride Game Footer */}
      <ScrollTransition>
        <Footer />
      </ScrollTransition>
    </main>
  );
}
