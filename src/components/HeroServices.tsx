"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { IsometricHeroVisual } from "./IsometricHeroVisual";
import { HeroStatusBar } from "./HeroStatusBar";
import { ServicesShowcase } from "./ServicesShowcase";

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
      {/* SECTION 1: HERO (Strictly 100vh on Desktop with Status Bar below the animation) */}
      <section className="relative min-h-screen lg:h-[100dvh] bg-white flex flex-col justify-center pt-20 pb-8 sm:py-12 overflow-hidden">
        {/* Structural subtle grid */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          {/* Side-by-Side Flex on large screens */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left Column: Headline, Description, CTAs */}
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.045em] text-zinc-950 leading-[0.98] text-balance">
                I build your application, and make your software{" "}
                <span className="text-emerald-600 underline decoration-emerald-200 decoration-wavy underline-offset-8">
                  faster
                </span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-[1.1rem] text-zinc-600 leading-[1.5] tracking-[-0.015em] max-w-[48ch] text-pretty">
                Independent engineer shipping full-stack web applications, Tauri cross-platform
                desktop software, and high-performance backends. Delivered in days with strict
                architecture, zero fluff, and measurably reduced latency.
              </p>

              {/* Direct Action Links */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-all shadow-sm hover:scale-[1.01] active:scale-[0.99] text-xs sm:text-sm font-medium"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", fontWeight: 500 }}>
                    Work Together
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-300" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium text-xs sm:text-[13px] transition-all border border-zinc-200"
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

              {/* Functional Live Status Bar (Moved to directly below the animation, transparent without card background) */}
              <div className="mt-2 sm:mt-3 w-full flex justify-center lg:justify-start">
                <HeroStatusBar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES SHOWCASE (Scroll-driven switching + real project images) */}
      <ServicesShowcase />
    </>
  );
}
