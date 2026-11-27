"use client";

import React, { useState } from "react";
import { PixelTestimonialAvatar, PixelHeart, PixelCat } from "./ui/pixel-sprites";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  projectTag: string;
  metric: string;
  quote: string;
  avatarVariant: number;
}

const testimonials: Testimonial[] = [
  {
    id: "restora",
    author: "Bikram Jena",
    role: "Co-Founder, Codecanvax",
    organization: "Restora POS",
    projectTag: "RESTORA POS",
    metric: "4 OS TARGETS · OFFLINE SYNC",
    avatarVariant: 0,
    quote:
      "Hrushikesh architected our entire Restora POS across Windows, macOS, Linux, and Android. Zero orders are lost during peak rushes and sync happens instantaneously.",
  },
  {
    id: "ipf",
    author: "Yuvrag Singh",
    role: "Lead Coordinator",
    organization: "IPF NGO",
    projectTag: "IPF PLATFORM",
    metric: "LOW-BANDWIDTH OPTIMIZED",
    avatarVariant: 1,
    quote:
      "He engineered our outreach platform from the ground up so coordinators across rural regions can access updates smoothly even on slow connections without lag.",
  },
  {
    id: "tempest",
    author: "Prharsha G",
    role: "Core Maintainer",
    organization: "Tempest",
    projectTag: "SYSTEMS AUDIT",
    metric: "141.5X GAIN · 0 UI LOCKS",
    avatarVariant: 2,
    quote:
      "His benchmarking audit pinpointed our exact SQLite lock stalls and GC pauses, delivering a measured 141.5x throughput gain and eliminating 1s UI lockouts.",
  },
];

function PixelSpeechBubbleIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 18 16" fill="none" shapeRendering="crispEdges">
      <path d="M2 1h14v10H7l-3 3v-3H2V1z" fill="#1A2B4C" />
      <path d="M3 2h12v8H6.5L5 11.5V10H3V2z" fill="#FFFFFF" />
      <rect x="5" y="5" width="2" height="2" fill="#6C8EBF" />
      <rect x="8" y="5" width="2" height="2" fill="#6C8EBF" />
      <rect x="11" y="5" width="2" height="2" fill="#6C8EBF" />
    </svg>
  );
}

export function TestimonialsSection() {
  const [heartsMap, setHeartsMap] = useState<Record<string, number>>({
    restora: 4,
    ipf: 4,
    tempest: 4,
  });

  const handleHeartClick = (id: string, starNum: number) => {
    setHeartsMap((prev) => ({
      ...prev,
      [id]: starNum,
    }));
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-22 bg-[#F7F6F1] border-t border-[#DCE6F2] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Eyebrow Badge matching reference KIND WORDS + speech bubble */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="pixel-pill-badge">
              <span>KIND WORDS</span>
            </div>
            <PixelSpeechBubbleIcon />
          </div>

          <span className="font-mono-body text-xs text-[#475D7A]">
            Verified feedback from founders &amp; core maintainers
          </span>
        </div>

        {/* 3-Column Horizontal Cards with Responsive Avatar & Quote */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t) => {
            const rating = heartsMap[t.id] ?? 4;
            return (
              <div
                key={t.id}
                className="pixel-card p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4"
              >
                {/* Pixel Avatar Square (Row header on mobile, left col on sm+) */}
                <div className="shrink-0 flex sm:flex-col items-center gap-2.5 sm:gap-2 w-full sm:w-auto pb-2 sm:pb-0 border-b sm:border-b-0 border-[#DCE6F2]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded border-[1.5px] border-[#1A2B4C] overflow-hidden shadow-[2px_2px_0px_#DCE6F2] bg-[#EBF1F8] shrink-0">
                    <PixelTestimonialAvatar variant={t.avatarVariant} />
                  </div>
                  <div className="flex flex-col sm:items-center min-w-0">
                    <span className="font-pixel text-[8px] px-1.5 py-0.5 bg-[#DCE6F2] border border-[#1A2B4C] rounded-xs text-[#1A2B4C] font-bold text-center w-fit">
                      {t.projectTag}
                    </span>
                    <span className="sm:hidden font-pixel text-[10px] font-bold text-[#1A2B4C] uppercase mt-1 truncate">
                      {t.author}
                    </span>
                  </div>
                </div>

                {/* Right Quote + Attribution + Interactive Pixel Hearts */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full w-full">
                  <div>
                    <p className="font-mono-body text-xs text-[#475D7A] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DCE6F2] space-y-1.5">
                    <div>
                      <div className="hidden sm:block font-pixel text-[11px] font-bold text-[#1A2B4C] uppercase">
                        {t.author}
                      </div>
                      <div className="font-mono-body text-[10px] text-[#6C8EBF] font-bold">
                        {t.role} · {t.organization}
                      </div>
                    </div>

                    {/* Pixel Hearts Rating Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => handleHeartClick(t.id, num)}
                            className="cursor-pointer focus:outline-none p-0.5"
                            aria-label={`Rate ${num} hearts`}
                          >
                            <PixelHeart filled={num <= rating} size={13} interactive />
                          </button>
                        ))}
                      </div>

                      <span className="font-pixel text-[8px] text-[#475D7A]">
                        {t.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom-right sitting pixel cat accent matching reference */}
        <div className="hidden lg:flex justify-end pt-3">
          <PixelCat />
        </div>
      </div>
    </section>
  );
}
