import { Navbar } from "@/components/Navbar";
import { HeroServices } from "@/components/HeroServices";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollTransition } from "@/components/ScrollTransition";
import { TempestAuditModal } from "@/components/TempestAuditModal";
import { HouseAudioProvider } from "@/components/ui/house-music-player";

export default function Home() {
  return (
    <HouseAudioProvider>
      <main className="min-h-screen bg-[#F7F6F1] text-[#1A2B4C] flex flex-col selection:bg-[#A3BFE0]/45 selection:text-[#1A2B4C]">
        {/* Pixel Header Bar */}
        <Navbar />

        {/* Section 1-3: Pixel Digital Garden Hero, House Music Bar, What I Do Pillars, and All 3 Services */}
        <HeroServices />

        {/* Section 4: Selected Work (All 8 Projects with Pagination & Inspect Drawer) */}
        <ScrollTransition>
          <ProjectsSection />
        </ScrollTransition>

        {/* Section 5: Kind Words (Client Testimonials with Pixel Avatars & Hearts) */}
        <ScrollTransition>
          <TestimonialsSection />
        </ScrollTransition>

        {/* Section 6: Deep-Dive Systems Audit Case Study (Tempest 141.5x Speedup & Flamegraphs) */}
        <ScrollTransition>
          <CaseStudySection />
        </ScrollTransition>

        {/* Section 7: Scenic Sky-Blue Contact Banner with Interactive Pixel Mailbox & Developer Buddy */}
        <ScrollTransition>
          <ContactSection />
        </ScrollTransition>

        {/* Section 8: Clean 4-Column Pixel Directory Footer */}
        <Footer />

        {/* Interactive Tempest Performance & Concurrency Audit Modal */}
        <TempestAuditModal />
      </main>
    </HouseAudioProvider>
  );
}
