"use client";

import React from "react";
import { Check, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  index: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  projectTag: string;
  metric: string;
  year: string;
}

const testimonials: Testimonial[] = [
  {
    id: "restora",
    index: "01",
    author: "Bikram Jena",
    role: "Co-Founder, Codecanvax",
    organization: "Restora POS",
    projectTag: "Restora",
    year: "2026",
    quote:
      "Hrushikesh architected our entire Restora POS application across Windows, macOS, Linux, and Android. The offline-first SQLite synchronization is rock-solid — during network dropouts in peak restaurant dinner rushes, zero orders are lost and tables sync instantaneously the moment connectivity returns.",
    metric: "4 OS targets · offline-first sync",
  },
  {
    id: "ipf",
    index: "02",
    author: "Yuvrag Singh",
    role: "Lead Coordinator",
    organization: "IPF NGO",
    projectTag: "IPF NGO",
    year: "2025",
    quote:
      "Hrushikesh engineered our NGO outreach platform from the ground up, making sure volunteer coordinators and donors across rural regions could access humanitarian program data and field updates even on low-bandwidth mobile connections without lag.",
    metric: "High throughput · low-bandwidth optimized",
  },
  {
    id: "tempest",
    index: "03",
    author: "Prharsha G",
    role: "Core Maintainer",
    organization: "Tempest",
    projectTag: "Benchmarking Audit",
    year: "2026",
    quote:
      "The benchmarking audit report delivered by Hrushikesh pinpointed our exact database query locking and memory garbage collection stalls. His empirical profiling and actionable remediation plan delivered a measured 141.5x throughput gain and eliminated our 1s UI thread lockouts.",
    metric: "141.5x speedup · 16,265 scheduler switch events",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[#F5F3EC] border-t border-[rgba(28,40,34,0.16)] scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-[rgba(28,40,34,0.16)]">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.0] text-[#1C2822]">
            Testimonials
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B533E] hover:bg-[#143F2F] text-[#F5F3EC] text-xs sm:text-[13px] font-bold transition-all shrink-0 shadow-sm border border-[#143F2F] active:scale-95"
          >
            <span>Collaborate on a project ↗</span>
          </a>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-[rgba(28,40,34,0.16)] bg-[#D0D9CD] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md hover:border-[#1B533E] group"
            >
              <div>
                {/* Header row with project name and year */}
                <div className="flex items-center justify-between text-xs font-mono text-[#32443A] mb-4">
                  <span className="font-semibold text-[#1C2822]">{t.projectTag}</span>
                  <span>{t.year}</span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-5 h-5 text-[rgba(28,40,34,0.2)] absolute -top-1 -left-1 pointer-events-none group-hover:text-[#1B533E]/40 transition-colors" />
                  <p className="relative pl-4 text-xs sm:text-sm text-[#32443A] leading-relaxed font-sans font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info & Metric Verification */}
              <div className="mt-6 pt-5 border-t border-[rgba(28,40,34,0.16)] flex flex-col gap-2.5">
                <div>
                  <div className="font-display font-bold text-sm sm:text-base text-[#1C2822] tracking-tight">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#32443A] font-mono">
                    {t.role} · {t.organization}
                  </div>
                </div>

                {/* Empirical metric */}
                <div className="text-[11px] font-mono text-[#D98A29] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A29]" />
                  <span>{t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
