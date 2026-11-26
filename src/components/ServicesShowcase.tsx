"use client";

import React from "react";
import { StickyScroll, StickyScrollItem } from "./ui/sticky-scroll-reveal";
import { HandwrittenHook, CurlyUnderline } from "./ui/curly-underline";

export function ServicesShowcase() {
  const handleOpenAudit = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tempest-audit"));
    }
  };

  const servicesContent: StickyScrollItem[] = [
    {
      id: "build",
      num: "01",
      title: "Build Your Application",
      headline: (
        <span>
          Life is too short for slow,{" "}
          <span className="relative inline-block text-[#183627]">
            bloated software
            <CurlyUnderline color="#D98A29" strokeWidth={3} className="-bottom-1 sm:-bottom-1.5" />
          </span>
        </span>
      ),
      tagline: "Production-grade software shipped in days",
      badge: "Full-Stack Web & Cross-Platform Desktop",
      description:
        "I take your product requirement and build a polished, production-ready software application. Clean architecture, strict TypeScript types, snappy interfaces, and robust backend endpoints built to last.",
      whatYouGet: [
        {
          title: "Full-Stack Web Apps",
          desc: "Modern Next.js, React, and reactive Tailwind interfaces with instant interactivity.",
        },
        {
          title: "Tauri Desktop Software",
          desc: "Cross-platform desktop apps (macOS, Windows, Linux) compiled under 25MB with Rust.",
        },
        {
          title: "Resilient APIs & Schemas",
          desc: "Relational PostgreSQL models, sub-millisecond query design, and async handlers.",
        },
        {
          title: "Full Production Handover",
          desc: "Modular code, automated tests, deployment scripts, and complete documentation.",
        },
      ],
      ctaLabel: "Build app ↗",
      images: [
        {
          src: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1795292984/Screenshot_2026-11-22_015810_ee0hjs.png",
          caption: "Restora POS & Web System",
          tag: "PRODUCTION",
        },
        {
          src: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1795297734/Screenshot_2026-11-22_031732_vixvyi.png",
          caption: "Design Showcase Platform",
          tag: "NEXT.JS",
        },
        {
          src: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1758738510/Screenshot_2025-09-24_235747_cvqvza.png",
          caption: "Engineering Workspace",
          tag: "TAURI/RUST",
        },
      ],
    },
    {
      id: "accelerate",
      num: "02",
      title: "Fix Your Application",
      headline: (
        <span>
          Bisect bottlenecks, eliminate leaks,{" "}
          <span className="relative inline-block text-[#183627]">
            slash latency
            <CurlyUnderline color="#D98A29" strokeWidth={3} className="-bottom-1 sm:-bottom-1.5" />
          </span>
        </span>
      ),
      tagline: "Performance Engineering & Speed Rescue",
      badge: "Performance Engineering & Speed Rescue",
      description:
        "When your app feels sluggish, database queries stall, or server bills spike, I profile hotpaths with flamegraphs and code-level inspection. I patch the code, eliminate memory leaks, and prove the speedup with hard numbers.",
      whatYouGet: [
        {
          title: "Frontend Rendering Speed",
          desc: "Eliminate re-render cascades, optimize bundle splitting, and achieve instant page loads.",
        },
        {
          title: "Database Query Tuning",
          desc: "Sub-millisecond EXPLAIN ANALYZE index redesign and multi-tier caching layers.",
        },
        {
          title: "Container & Memory Shrinking",
          desc: "Squeeze bloated container runtimes and isolate memory leaks in production.",
        },
        {
          title: "Empirical Proof",
          desc: "Before/after latency measurements with reproducible benchmark scripts and reports.",
        },
      ],
      ctaLabel: "Accelerate app ↗",
      images: [
        {
          src: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1758738205/Screenshot_2025-09-24_235258_hfzc5n.png",
          caption: "Kernel Flamegraph & Hotpaths",
          tag: "18ms LATENCY",
        },
        {
          src: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1795292984/Screenshot_2026-11-22_015810_ee0hjs.png",
          caption: "Production Telemetry Monitoring",
          tag: "ZERO-ALLOC",
        },
      ],
    },
    {
      id: "benchmark",
      num: "03",
      title: "Systems & Concurrency Audit",
      headline: (
        <span>
          Eliminate locks, thread stalls, and{" "}
          <span className="relative inline-block text-[#183627]">
            silent failure paths
            <CurlyUnderline color="#D98A29" strokeWidth={3} className="-bottom-1 sm:-bottom-1.5" />
          </span>
        </span>
      ),
      tagline: "Concurrency Profiling, Mutation Testing & Architecture Review",
      badge: "Systems Diagnostics & Architecture Auditing",
      description:
        "Before committing to expensive rewrites or scaling infrastructure blind, get an empirical diagnosis of concurrency bottlenecks, lock contention, and unhandled failure paths using kernel profiling and fault injection.",
      whatYouGet: [
        {
          title: "Kernel & Off-CPU Flamegraphs",
          desc: "Trace scheduler context switches to expose threads blocked on disk I/O, mutex locks, and sync barriers.",
        },
        {
          title: "Lock Elimination & Pool Design",
          desc: "Replace serialized mutex locks with non-blocking async pools, dedicated writer queues, and WAL journal modes.",
        },
        {
          title: "Mutation & Fault Injection Testing",
          desc: "Uncover silent error drops and unhandled failure states under heavy network load and socket resets.",
        },
        {
          title: "Measurable Latency Guarantees",
          desc: "Detailed technical remediation blueprint with reproducible benchmark scripts and verified speedups.",
        },
      ],
      ctaLabel: "Request systems audit ↗",
      actions: [
        {
          label: "Read Case Study ↗",
          onClick: handleOpenAudit,
          variant: "secondary",
        },
      ],
      images: [
        {
          src: "/audit/off-cpu-flamegraph.png",
          caption: "Kernel Off-CPU Scheduler Tracing",
          tag: "PROFILING",
        },
        {
          src: "/audit/hephaestus-cpu-flamegraph.png",
          caption: "CPU Cycle Analysis & Mutation Audit",
          tag: "MUTATION AUDIT",
        },
      ],
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-[#F7F5EE] border-t border-[rgba(26,56,40,0.12)] scroll-mt-20">
      {/* Structural subtle blueprint grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[rgba(26,56,40,0.12)]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <HandwrittenHook className="text-xl sm:text-2xl text-[#183627] -rotate-1">
                what I build &amp; ship
              </HandwrittenHook>
              <span className="w-8 h-[1px] bg-[#183627]/30" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.0] text-[#152E20]">
              Services
            </h2>
          </div>
          <div className="text-xs font-mono text-[#183627] font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D98A29] animate-pulse" />
            <span className="relative inline-block">
              High-Velocity Engineering Sprints
              <CurlyUnderline color="#D98A29" strokeWidth={2} className="-bottom-1" />
            </span>
          </div>
        </div>
      </div>

      {/* Aceternity Sticky Scroll Reveal with Multiple Real Images */}
      <StickyScroll content={servicesContent} />
    </section>
  );
}
