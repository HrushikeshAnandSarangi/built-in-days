"use client";

import React from "react";
import { Check, Quote, ArrowUpRight } from "lucide-react";

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
    author: "Bikram Keshari Sahoo",
    role: "Founder & Lead Operator",
    organization: "Restora POS",
    projectTag: "Restora POS",
    year: "2026",
    quote:
      "Hrushikesh architected our entire POS application across Windows, macOS, Linux, and Android. The offline-first SQLite synchronization is rock-solid — during network dropouts in peak restaurant dinner rushes, zero orders are lost and tables sync instantaneously the moment connectivity returns.",
    metric: "4 OS targets · 0 downtime during outages",
  },
  {
    id: "edustarr",
    index: "02",
    author: "EduStarr Academic Team",
    role: "Director of Assessment Operations",
    organization: "EduStarr India",
    projectTag: "EduStarr Platform",
    year: "2026",
    quote:
      "We needed a high-concurrency exam engine for competitive ESAT mocks with strict timer synchronization and instant result tabulation. Hrushikesh built and deployed the full system in days. It handled hundreds of concurrent mock exam takers without a single dropped response or latency spike.",
    metric: "100% session persistence · sub-200ms API",
  },
  {
    id: "ieee-indiscon",
    index: "03",
    author: "Organizing Secretariat",
    role: "Technical Committee Member",
    organization: "IEEE Indiscon 2025",
    projectTag: "IEEE Indiscon Portal",
    year: "2025",
    quote:
      "Hrushikesh delivered the official web portal for IEEE Indiscon with strict adherence to IEEE brand and typography standards. Paper tracks, speaker schedules, and delegate registrations were accessible globally with zero downtime for academic researchers.",
    metric: "99.99% portal uptime · zero layout shift",
  },
  {
    id: "pranaya-pradhan",
    index: "04",
    author: "Pranaya Pradhan",
    role: "Lead Visual & Brand Designer",
    organization: "Pranaya Studio",
    projectTag: "Designer Showcase",
    year: "2026",
    quote:
      "Finding an engineer who respects layout details, micro-interactions, and typography as much as raw performance is rare. Hrushikesh took my complex portfolio prototypes and delivered a fluid, buttery 60fps web experience with zero image jank.",
    metric: "60fps interaction · 100 Lighthouse score",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200">
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
              // client testimonials & verified outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              What Clients & Collaborators Say.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-xl">
              Feedback from founders, conference organizers, and designers on delivered reliability,
              turnaround speed, and measurable application performance.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-xs font-mono font-medium transition-colors shrink-0 shadow-sm"
            style={{ color: "#ffffff", backgroundColor: "#09090b" }}
          >
            <span style={{ color: "#ffffff" }}>[ collaborate on a project ↗ ]</span>
          </a>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-zinc-200/90 bg-zinc-50/60 hover:bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-950 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Header row with index tag and verified badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="font-mono text-xs font-semibold text-zinc-900 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-2xs">
                    [ {t.index} · {t.projectTag} ]
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>verified delivery</span>
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-zinc-200 absolute -top-2 -left-1 pointer-events-none group-hover:text-emerald-200 transition-colors" />
                  <p className="relative pl-5 text-sm sm:text-base text-zinc-700 leading-relaxed font-sans font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info & Verified Metric Footer */}
              <div className="mt-8 pt-5 border-t border-zinc-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-zinc-950 text-sm tracking-tight">
                    {t.author}
                  </div>
                  <div className="text-xs font-mono text-zinc-500">
                    {t.role} · {t.organization}
                  </div>
                </div>

                <div className="inline-flex items-center text-[11px] font-mono text-zinc-600 bg-white px-2.5 py-1 rounded-lg border border-zinc-200/80 shadow-2xs shrink-0">
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
