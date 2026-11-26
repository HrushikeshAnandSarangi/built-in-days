"use client";

import React from "react";
import { StickyScroll, StickyScrollItem } from "./ui/sticky-scroll-reveal";

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
      tagline: "Bisect bottlenecks, eliminate leaks, slash latency",
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
      title: "Benchmark & Audit",
      tagline: "Isolate bottlenecks & deliver comprehensive report",
      badge: "Deep Diagnostics & Concurrency Profiling",
      description:
        "Before committing to expensive rewrites, I subject your application to rigorous load-testing and kernel/runtime profiling. Example: in our Tempest audit, we diagnosed SQLite lock contention and untested error paths, delivering an empirical 141.5x throughput gain.",
      whatYouGet: [
        {
          title: "Subsystem Deep-Dive",
          desc: "Empirical audit across persistence (tasks_store), network proxy (hephaestus), and IPC layers.",
        },
        {
          title: "Off-CPU & CPU Flamegraphs",
          desc: "Kernel scheduler event tracing (16,265 samples) to expose threads blocked asleep on disk flushes.",
        },
        {
          title: "Mutation Testing & Soak Testing",
          desc: "Uncover untested error-recovery paths with cargo-mutants and verify flat RSS memory soak.",
        },
        {
          title: "Proven Architectural Fixes",
          desc: "Dedicated writer pool + WAL/NORMAL eliminating 1s+ stalls with a measured 141.5x speedup.",
        },
      ],
      ctaLabel: "Benchmark app ↗",
      actions: [
        {
          label: "View Tempest Audit Case Study ↗",
          onClick: handleOpenAudit,
          variant: "secondary",
        },
        {
          label: "Download Audit (.docx)",
          href: "/audit/tempest-performance-audit.docx",
          isDownload: true,
          variant: "download",
        },
      ],
      images: [
        {
          src: "/audit/off-cpu-flamegraph.png",
          caption: "Tempest Off-CPU Flamegraph (16,265 events)",
          tag: "141.5x GAIN",
        },
        {
          src: "/audit/hephaestus-cpu-flamegraph.png",
          caption: "Hephaestus 83% CPU Profiling",
          tag: "MUTATION AUDIT",
        },
      ],
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-[#F4F6F9] border-t border-[#D5DCE6] scroll-mt-20">
      {/* Structural subtle blueprint grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-25" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between pb-6 border-b border-[#D5DCE6]">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.0] text-[#0F1F38]">
              Services
            </h2>
          </div>
          <div className="text-xs font-mono text-[#1D56B3] font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E08E0B] animate-pulse" />
            <span>High-Velocity Engineering Sprints</span>
          </div>
        </div>
      </div>

      {/* Aceternity Sticky Scroll Reveal with Multiple Real Images */}
      <StickyScroll content={servicesContent} />
    </section>
  );
}
