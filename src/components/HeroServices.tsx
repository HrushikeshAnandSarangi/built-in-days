"use client";

import React from "react";
import { IsometricHeroVisual } from "./IsometricHeroVisual";
import { HeroStatusBar } from "./HeroStatusBar";
import { ServicesShowcase } from "./ServicesShowcase";
import { StatefulButton } from "./ui/stateful-button";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

export function HeroServices() {
  const scrollToContact = () => {
    if (typeof window !== "undefined") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* SECTION 1: HERO (Strictly 100vh on Desktop with Background Ripple Effect) */}
      <section className="relative min-h-screen lg:h-[100dvh] bg-[#F4F6F9] flex flex-col justify-center pt-20 pb-8 sm:py-12 overflow-hidden border-b border-[#D5DCE6]">
        {/* Aceternity Background Ripple Effect with Blueprint Cobalt & Ochre accents */}
        <BackgroundRippleEffect className="opacity-70" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10 pointer-events-none">
          {/* Side-by-Side Flex on large screens */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 pointer-events-auto">
            {/* Left Column: Headline, Description, CTAs */}
            <div className="flex-1 max-w-xl">
              {/* Handwritten editorial accent note (like user reference "we are") */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-handwriting text-xl sm:text-2xl text-[#1D56B3] -rotate-2 select-none">
                  we are building production systems
                </span>
                <span className="w-8 h-[1px] bg-[#1D56B3]/40" />
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] text-[#0F1F38] leading-[1.0] text-balance">
                I build your application, and make your software{" "}
                <span className="text-[#1D56B3] underline decoration-[#E08E0B] decoration-wavy underline-offset-8">
                  faster
                </span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-[1.08rem] text-[#52647C] leading-[1.6] tracking-[-0.015em] max-w-[50ch] text-pretty">
                Independent engineer shipping full-stack web applications, Tauri cross-platform
                desktop software, and high-performance backends. Delivered in days with strict
                architecture, zero fluff, and measurably reduced latency.
              </p>

              {/* Direct Action Links using Aceternity Stateful Button */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7">
                <StatefulButton
                  href="#contact"
                  variant="ochre"
                  successText="Opening intake..."
                  className="shadow-md shadow-[#E08E0B]/20"
                >
                  Work Together
                </StatefulButton>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F4F6F9] text-[#0F1F38] font-semibold text-xs sm:text-[13px] transition-all border border-[#D5DCE6] hover:border-[#1D56B3] shadow-2xs"
                >
                  <span>View Projects ↗</span>
                </a>
              </div>
            </div>

            {/* Right Column: Isometric Engineering Visual + Status Bar Directly Below Animation */}
            <div className="flex-1 w-full max-w-lg lg:max-w-xl flex flex-col items-center shrink-0">
              {/* Isometric Centerpiece Visual */}
              <div className="w-full flex justify-center">
                <IsometricHeroVisual />
              </div>

              {/* Functional Live Status Bar (Directly below the animation, transparent without card background) */}
              <div className="mt-2 sm:mt-3 w-full flex justify-center lg:justify-start">
                <HeroStatusBar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES SHOWCASE (Aceternity Sticky Scroll Reveal + Multiple Real Images) */}
      <ServicesShowcase />
    </>
  );
}
