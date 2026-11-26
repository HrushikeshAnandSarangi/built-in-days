import { Navbar } from "@/components/Navbar";
import { HeroServices } from "@/components/HeroServices";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollTransition } from "@/components/ScrollTransition";
import { TempestAuditModal } from "@/components/TempestAuditModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5EE] text-[#152E20] flex flex-col selection:bg-[#D98A29]/25 selection:text-[#152E20]">
      {/* Joined Frosted Glass Floating Navbar */}
      <Navbar />

      {/* Section 1: Hero (100vh with Background Ripple Effect) & Services (Sticky Scroll with Multiple Real Images) */}
      <HeroServices />

      {/* Section 2: Client Testimonials & Verified Outcomes */}
      <ScrollTransition>
        <TestimonialsSection />
      </ScrollTransition>

      {/* Section 3: Dedicated Case Study (Tempest Performance & Concurrency Audit with Flamegraphs & Docx Download) */}
      <ScrollTransition>
        <CaseStudySection />
      </ScrollTransition>

      {/* Section 4: Selected Projects Showcase (Top 3 with expand accordion & Aceternity Link Preview) */}
      <ScrollTransition>
        <ProjectsSection />
      </ScrollTransition>

      {/* Section 5: Direct Intake & Contact (Mailbox Illustration) */}
      <ScrollTransition>
        <ContactSection />
      </ScrollTransition>

      {/* Section 6: Sketched Scenery Footer & Navigation (Anti-Slop Taste Skill) */}
      <ScrollTransition>
        <Footer />
      </ScrollTransition>

      {/* Interactive Tempest Performance & Concurrency Audit Modal */}
      <TempestAuditModal />
    </main>
  );
}
