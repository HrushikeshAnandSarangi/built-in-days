"use client";

import React from "react";
import Image from "next/image";
import { ServicesShowcase } from "./ServicesShowcase";
import { StatefulButton } from "./ui/stateful-button";
import { CurlyUnderline, HandwrittenHook } from "./ui/curly-underline";

export function HeroServices() {
  const handleOpenAuditModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tempest-audit"));
    }
  };

  return (
    <>
      {/* SECTION 1: HERO (BridgeAI-inspired cinematic mountain bridge landscape with pristine contrast) */}
      <section className="relative min-h-screen lg:h-[100dvh] bg-[#F7F5EE] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden border-b border-[rgba(26,56,40,0.12)]">
        {/* Cinematic Photoreal Landscape Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bridge_landscape.jpg"
            alt="Majestic ancient moss-covered bridge spanning misty mountain cliffs in morning light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none"
          />

          {/* Top morning mist blend overlay to ensure crystal clear navbar contrast */}
          <div className="absolute inset-x-0 top-0 h-44 sm:h-52 bg-gradient-to-b from-[#F7F5EE]/95 via-[#F7F5EE]/60 to-transparent pointer-events-none" />

          {/* Bottom ground mist blend overlay smoothly transitioning into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-48 sm:h-60 bg-gradient-to-t from-[#F7F5EE] via-[#F7F5EE]/80 to-transparent pointer-events-none" />

          {/* Central radial soft mist wash to guarantee effortless typographic legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(247,245,238,0.92)_0%,rgba(247,245,238,0.6)_45%,transparent_75%)] pointer-events-none" />

          {/* Subtle atmospheric tint */}
          <div className="absolute inset-0 bg-[#F7F5EE]/10 pointer-events-none" />
        </div>

        {/* Center / Upper: Two-Tone Display Headline (High Contrast Deep Forest Ink) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-3 sm:mt-6">
          {/* Top Handwritten Hook */}
          <div className="mb-2.5 flex items-center justify-center gap-2">
            <HandwrittenHook color="text-[#163826]" rotate="-rotate-2" className="text-xl sm:text-2xl">
              high-craft engineering & speed
            </HandwrittenHook>
          </div>

          <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] tracking-[-0.035em] leading-[1.06] text-balance">
            <span className="block text-[#163826]">Bridge the gap between</span>
            <span className="block text-[#244B36]">
              software and{" "}
              <span className="relative inline-block text-[#163826]">
                speed
                <CurlyUnderline color="#D98A29" strokeWidth={3} className="-bottom-1 sm:-bottom-2" />
              </span>
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#183627] max-w-xl mx-auto text-center leading-relaxed font-sans text-pretty font-medium">
            Turn complex engineering challenges into fast, resilient, production-grade applications{" "}
            <span className="relative inline-block font-bold text-[#163826]">
              shipped in days
              <CurlyUnderline color="#183627" strokeWidth={2.5} className="-bottom-0.5 sm:-bottom-1" />
            </span>{" "}
            with verified benchmarks.
          </p>

          {/* Professional Availability Capsule (Replacing cluttered status bar & cartoon avatars) */}
          <div className="mt-4 sm:mt-5 flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[rgba(26,56,40,0.14)] shadow-xs text-xs font-sans text-[#163826]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-semibold">Available for Q1–Q2 Engineering Sprints</span>
              <span className="text-[#163826]/30">·</span>
              <span className="text-[#2E4A3B] font-medium">Systems · Web · Desktop</span>
            </div>
          </div>
        </div>

        {/* Bottom Horizon: Left Feature Callout & Right Interactive Audit Widget */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full mt-auto pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left Callout: Protected by matching Frosted Glass Card for 100% Contrast */}
          <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-white/80 p-4 sm:p-5 shadow-lg shadow-black/5 max-w-md space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1B533E]" />
              <span className="font-display font-bold text-sm sm:text-base text-[#163826] tracking-tight">
                Systems &amp; Web Engineering
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-[#2E4A3B] leading-relaxed max-w-sm font-sans font-normal">
              Polished full-stack web applications, ultra-lean Tauri cross-platform desktop software, and sub-millisecond database backends shipped in days.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <StatefulButton
                href="#contact"
                variant="forest"
                successText="Opening intake..."
                className="py-2 px-5 text-xs font-semibold shadow-xs"
              >
                Work Together
              </StatefulButton>

              <a
                href="#projects"
                className="text-xs font-semibold text-[#163826] hover:text-[#1B533E] transition-colors py-2 px-3 underline underline-offset-4 decoration-[rgba(26,56,40,0.3)] hover:decoration-[#163826]"
              >
                View Projects ↗
              </a>
            </div>
          </div>

          {/* Right Callout - Video Preview / Audit Card Widget */}
          <div className="shrink-0">
            <div
              onClick={handleOpenAuditModal}
              className="group relative cursor-pointer rounded-2xl bg-white/85 hover:bg-white/95 backdrop-blur-md border border-white/80 p-3 sm:p-3.5 shadow-lg shadow-black/5 transition-all duration-300 hover:scale-[1.02] flex items-center gap-3.5 max-w-xs"
              role="button"
              tabIndex={0}
              aria-label="View Tempest Audit Deep-Dive"
            >
              {/* Thumbnail with Play Button */}
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#183627] flex items-center justify-center shrink-0 shadow-inner">
                <img
                  src="/audit/off-cpu-flamegraph.png"
                  alt="Tempest Audit Preview"
                  className="w-full h-full object-cover opacity-75 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-white/90 text-[#163826] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Label & Indicator */}
              <div className="text-left">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#1B533E] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A29] animate-pulse" />
                  <span>Technical Case Study</span>
                </div>
                <div className="font-display font-bold text-xs sm:text-[13px] text-[#163826] mt-0.5">
                  Tempest · 141.5x Speedup
                </div>
                <div className="text-[10px] font-mono text-[#32443A] mt-0.5">
                  ▶ Interactive Deep-Dive · 16,265 traces
                </div>
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
