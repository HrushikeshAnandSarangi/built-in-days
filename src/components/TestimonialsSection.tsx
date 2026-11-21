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
    role: "Engineering Lead",
    organization: "Tempest",
    projectTag: "Benchmarking Audit",
    year: "2026",
    quote:
      "The benchmarking audit report delivered by Hrushikesh pinpointed our exact database query locking and memory garbage collection stalls. His empirical profiling and actionable remediation plan allowed us to cut latency and accelerate our critical user paths significantly.",
    metric: "Flamegraph profiling · bottleneck isolation",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-white border-t border-zinc-200 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-zinc-200">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.0] text-zinc-950">
            Testimonials
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-xs sm:text-[13px] font-medium transition-colors shrink-0 shadow-sm"
            style={{ color: "#ffffff", backgroundColor: "#09090b" }}
          >
            <span style={{ color: "#ffffff" }}>Collaborate on a project ↗</span>
          </a>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-zinc-200/90 bg-zinc-50/60 hover:bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-950 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Header row with index tag and verified badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="font-mono text-xs font-semibold text-zinc-900 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-2xs">
                    {t.index} · {t.projectTag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>verified</span>
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-5 h-5 text-zinc-200 absolute -top-1 -left-1 pointer-events-none group-hover:text-emerald-200 transition-colors" />
                  <p className="relative pl-4 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info & Verified Metric Footer */}
              <div className="mt-8 pt-5 border-t border-zinc-200/70 flex flex-col gap-2.5">
                <div>
                  <div className="font-bold text-zinc-950 text-sm tracking-tight">
                    {t.author}
                  </div>
                  <div className="text-xs font-mono text-zinc-500">
                    {t.role} · {t.organization}
                  </div>
                </div>

                <div className="inline-flex items-center text-[10.5px] font-mono text-zinc-600 bg-white px-2.5 py-1 rounded-lg border border-zinc-200/80 shadow-2xs self-start">
                  <span className="text-emerald-700 font-semibold mr-1.5">✓</span>
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
