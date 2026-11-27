"use client";

import React from "react";
import Image from "next/image";
import { ServicesShowcase } from "./ServicesShowcase";
import { StatefulButton } from "./ui/stateful-button";
import { CurlyUnderline, HandwrittenHook } from "./ui/curly-underline";

export function HeroServices() {
  return (
    <>
      {/* SECTION 1: HERO (Quiet Place aesthetic: tranquil pastel lake, pine forests & mindful engineering craft) */}
      <section className="relative min-h-[100dvh] lg:min-h-[112dvh] bg-[#CEDFD9] flex flex-col justify-between pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-hidden border-b border-[rgba(26,56,40,0.12)]">
        {/* Scenic Pixel-Art Panoramic Lakeside Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/quiet_place_hero.jpg"
            alt="Tranquil lakeside with pine tree islands, wooden dock, calm water and a peaceful rabbit fishing"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom select-none"
          />

          {/* Top sky mist blend overlay to ensure crystal clear navbar contrast */}
          <div className="absolute inset-x-0 top-0 h-40 sm:h-48 bg-gradient-to-b from-[#CEDFD9]/95 via-[#CEDFD9]/60 to-transparent pointer-events-none" />

          {/* Central radial soft mist wash for effortless typographic legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,rgba(206,223,217,0.95)_0%,rgba(206,223,217,0.6)_45%,transparent_78%)] pointer-events-none" />

          {/* Bottom water shoreline transition smoothly blending into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#8EAEA0]/40 to-transparent pointer-events-none" />
        </div>

        {/* Center Content: Quiet Place Typography & 3 Feature Pillars */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-1 sm:mt-3">
          {/* Top Handwritten Hook */}
          <div className="mb-1.5 flex items-center justify-center gap-2">
            <HandwrittenHook color="text-[#133526]" rotate="-rotate-1" className="text-lg sm:text-xl">
              where calm meets craft
            </HandwrittenHook>
          </div>

          {/* Display Headline (Matching "Where Calm Meets Creativity.") */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] tracking-[-0.03em] leading-[1.1] text-[#133526] text-balance">
            <span className="block">Where High-Craft Meets</span>
            <span className="block mt-0.5">
              <span className="relative inline-block text-[#133526]">
                Speed.
                <CurlyUnderline color="#ED6C5A" strokeWidth={3.5} className="-bottom-1 sm:-bottom-1.5" />
              </span>
            </span>
          </h1>

          {/* Subhead Paragraph */}
          <p className="mt-3 sm:mt-3.5 text-xs sm:text-sm md:text-base text-[#254A39] max-w-xl mx-auto text-center leading-relaxed font-sans text-pretty font-normal">
            In the rush of bloated software, imagine systems engineered with zero bloat and absolute craft. Fast, resilient full-stack web applications, ultra-lean Tauri desktop software, and sub-millisecond database architectures shipped in days.
          </p>

          {/* 3 Quiet Place Feature Pillars (Mindful Tools / Creative Space / Gentle Reminders adaptation) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mt-4 sm:mt-6 pt-1">
            {/* Pillar 1: High-Speed Systems */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-white/80 border border-white/85 shadow-2xs flex items-center justify-center text-sm sm:text-base select-none mb-0.5">
                ⚡
              </div>
              <div className="font-display font-bold text-xs sm:text-[13px] text-[#133526] tracking-tight">
                High-Speed Systems
              </div>
              <p className="text-[11px] sm:text-xs text-[#2A4D3D] leading-relaxed max-w-[190px] mx-auto font-sans">
                Sub-millisecond query design, async connection pools, and zero-leak memory architectures.
              </p>
            </div>

            {/* Pillar 2: Crafted Applications */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-white/80 border border-white/85 shadow-2xs flex items-center justify-center text-sm sm:text-base select-none mb-0.5">
                🛠️
              </div>
              <div className="font-display font-bold text-xs sm:text-[13px] text-[#133526] tracking-tight">
                Crafted Applications
              </div>
              <p className="text-[11px] sm:text-xs text-[#2A4D3D] leading-relaxed max-w-[190px] mx-auto font-sans">
                Polished Next.js web platforms and ultra-lean cross-platform Tauri desktop software.
              </p>
            </div>

            {/* Pillar 3: Verified Benchmarks */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-white/80 border border-white/85 shadow-2xs flex items-center justify-center text-sm sm:text-base select-none mb-0.5">
                🔬
              </div>
              <div className="font-display font-bold text-xs sm:text-[13px] text-[#133526] tracking-tight">
                Verified Benchmarks
              </div>
              <p className="text-[11px] sm:text-xs text-[#2A4D3D] leading-relaxed max-w-[190px] mx-auto font-sans">
                Empirical kernel profiling, reproducible CI workflows, and transparent audit reports.
              </p>
            </div>
          </div>

          {/* Action Buttons: Coral CTA + Translucent Frosted Pill */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
            <StatefulButton
              href="#contact"
              variant="coral"
              successText="Opening intake..."
              className="py-2.5 px-6 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide shadow-sm"
            >
              Start Your Journey →
            </StatefulButton>

            <a
              href="#projects"
              className="py-2.5 px-6 rounded-full bg-white/60 hover:bg-white/85 text-[#133526] border border-white/80 text-xs sm:text-[13px] font-semibold tracking-wide shadow-2xs backdrop-blur-xs transition-all active:scale-95"
            >
              Explore Projects
            </a>
          </div>
        </div>

        {/* Scenic Shoreline Base (Giving the fishing dock & lake room to breathe) */}
        <div className="relative z-10 w-full h-20 sm:h-32 pointer-events-none" />
      </section>

      {/* SECTION 2: SERVICES SHOWCASE (Aceternity Sticky Scroll Reveal + Multiple Real Images) */}
      <ServicesShowcase />
    </>
  );
}
