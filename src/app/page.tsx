import { Navbar } from "@/components/Navbar";
import { HeroServices } from "@/components/HeroServices";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollTransition } from "@/components/ScrollTransition";
import { TempestAuditModal } from "@/components/TempestAuditModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Joined Frosted Glass Floating Navbar */}
      <Navbar />

      {/* Section 1: Hero (100vh with Background Ripple Effect) & Services (Sticky Scroll with Multiple Real Images & Tempest Audit) */}
      <HeroServices />

      {/* Section 2: Client Testimonials & Verified Outcomes (with Tempest Audit Case Study trigger) */}
      <ScrollTransition>
        <TestimonialsSection />
      </ScrollTransition>

      {/* Section 3: Selected Projects Showcase (Top 3 with expand accordion & Aceternity Link Preview) */}
      <ScrollTransition>
        <ProjectsSection />
      </ScrollTransition>

      {/* Section 4: Direct Intake & Contact (Mailbox Illustration) */}
      <ScrollTransition>
        <ContactSection />
      </ScrollTransition>

      {/* Section 5: Sketched Scenery Footer & Navigation (Anti-Slop Taste Skill) */}
      <ScrollTransition>
        <Footer />
      </ScrollTransition>

      {/* Interactive Tempest Performance & Concurrency Audit Modal */}
      <TempestAuditModal />
    </main>
  );
}
