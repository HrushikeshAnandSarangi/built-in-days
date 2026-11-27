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
      <section className="relative min-h-[100dvh] lg:min-h-[105dvh] bg-[#CEDFD9] flex flex-col justify-between pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden border-b border-[rgba(26,56,40,0.12)]">
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
          <div className="absolute inset-x-0 top-0 h-44 sm:h-52 bg-gradient-to-b from-[#CEDFD9]/95 via-[#CEDFD9]/70 to-transparent pointer-events-none" />

          {/* Central radial soft mist wash for effortless typographic legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,rgba(206,223,217,0.92)_0%,rgba(206,223,217,0.55)_48%,transparent_80%)] pointer-events-none" />

          {/* Bottom water shoreline transition smoothly blending into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[#8EAEA0]/50 to-transparent pointer-events-none" />
        </div>

        {/* Center Content: Quiet Place Typography & 3 Feature Pillars */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-2 sm:mt-5">
          {/* Top Handwritten Hook */}
          <div className="mb-2 flex items-center justify-center gap-2">
            <HandwrittenHook color="text-[#133526]" rotate="-rotate-1" className="text-xl sm:text-2xl">
              where calm meets craft
            </HandwrittenHook>
          </div>

          {/* Display Headline (Matching "Where Calm Meets Creativity.") */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[4.65rem] tracking-[-0.035em] leading-[1.08] text-[#133526] text-balance">
            <span className="block">Where High-Craft Meets</span>
            <span className="block mt-1">
              <span className="relative inline-block text-[#133526]">
                Speed.
                <CurlyUnderline color="#ED6C5A" strokeWidth={3.5} className="-bottom-1 sm:-bottom-2" />
              </span>
            </span>
          </h1>

          {/* Subhead Paragraph */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#254A39] max-w-2xl mx-auto text-center leading-relaxed font-sans text-pretty font-normal">
            In the rush of bloated software, imagine systems engineered with zero bloat and absolute craft. Fast, resilient full-stack web applications, ultra-lean Tauri desktop software, and sub-millisecond database architectures shipped in days.
          </p>

          {/* 3 Quiet Place Feature Pillars (Mindful Tools / Creative Space / Gentle Reminders adaptation) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 max-w-3xl mx-auto mt-6 sm:mt-8 pt-1">
            {/* Pillar 1: High-Speed Systems */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-9 h-9 rounded-full bg-white/75 border border-white/80 shadow-2xs flex items-center justify-center text-base sm:text-lg select-none mb-1">
                ⚡
              </div>
              <div className="font-display font-bold text-xs sm:text-[13.5px] text-[#133526] tracking-tight">
                High-Speed Systems
              </div>
              <p className="text-[11.5px] sm:text-xs text-[#2A4D3D] leading-relaxed max-w-[210px] mx-auto font-sans">
                Sub-millisecond query design, async connection pools, and zero-leak memory architectures.
              </p>
            </div>

            {/* Pillar 2: Crafted Applications */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-9 h-9 rounded-full bg-white/75 border border-white/80 shadow-2xs flex items-center justify-center text-base sm:text-lg select-none mb-1">
                🛠️
              </div>
              <div className="font-display font-bold text-xs sm:text-[13.5px] text-[#133526] tracking-tight">
                Crafted Applications
              </div>
              <p className="text-[11.5px] sm:text-xs text-[#2A4D3D] leading-relaxed max-w-[210px] mx-auto font-sans">
                Polished Next.js web platforms and ultra-lean cross-platform Tauri desktop software.
              </p>
            </div>

            {/* Pillar 3: Verified Benchmarks */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-9 h-9 rounded-full bg-white/75 border border-white/80 shadow-2xs flex items-center justify-center text-base sm:text-lg select-none mb-1">
                🔬
              </div>
              <div className="font-display font-bold text-xs sm:text-[13.5px] text-[#133526] tracking-tight">
                Verified Benchmarks
              </div>
              <p className="text-[11.5px] sm:text-xs text-[#2A4D3D] leading-relaxed max-w-[210px] mx-auto font-sans">
                Empirical kernel profiling, reproducible CI workflows, and transparent audit reports.
              </p>
            </div>
          </div>

          {/* Action Buttons: Coral CTA + Translucent Frosted Pill */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <StatefulButton
              href="#contact"
              variant="coral"
              successText="Opening intake..."
              className="py-2.5 px-6 sm:px-7 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
            >
              Start Your Journey →
            </StatefulButton>

            <a
              href="#projects"
              className="py-2.5 px-6 sm:px-7 rounded-full bg-white/60 hover:bg-white/85 text-[#133526] border border-white/80 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs backdrop-blur-xs transition-all active:scale-95"
            >
              Explore Projects
            </a>
          </div>
        </div>

        {/* Scenic Shoreline Base (Giving the fishing dock & lake room to breathe) */}
        <div className="relative z-10 w-full h-16 sm:h-24 pointer-events-none" />
      </section>

      {/* SECTION 2: SERVICES SHOWCASE (Aceternity Sticky Scroll Reveal + Multiple Real Images) */}
      <ServicesShowcase />
    </>
  );
}
