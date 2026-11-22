"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Check, ChevronUp, ChevronDown } from "lucide-react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  id: string;
  num: string;
  shortLabel: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  whatYouGet: { title: string; desc: string }[];
  ctaLabel: string;
  badge: string;
  image: string;
  imageCaption: string;
}

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      id: "build",
      num: "01",
      shortLabel: "Build",
      title: "Build Your Application",
      tagline: "Production-grade software shipped in days",
      category: "Full-Stack Web & Cross-Platform Desktop",
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
      badge: "Fixed-scope & contract",
      image: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1795292984/Screenshot_2026-11-22_015810_ee0hjs.png",
      imageCaption: "Restora POS & Web Platform — Live Production Deployment",
    },
    {
      id: "accelerate",
      num: "02",
      shortLabel: "Accelerate",
      title: "Fix Your Application",
      tagline: "Bisect bottlenecks, eliminate leaks, slash latency",
      category: "Performance Engineering & Speed Rescue",
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
      badge: "Latency & memory rescue",
      image: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1758738205/Screenshot_2025-09-24_235258_hfzc5n.png",
      imageCaption: "Kernel Profiling & Flamegraph Trace — 99.2% Latency Reduction",
    },
    {
      id: "benchmark",
      num: "03",
      shortLabel: "Benchmark",
      title: "Benchmark & Audit",
      tagline: "Isolate bottlenecks & deliver comprehensive report",
      category: "Deep Diagnostics & Stress Profiling",
      description:
        "Before committing to expensive rewrites, I subject your application to rigorous load-testing and kernel/runtime profiling. I trace where latency is lost and provide an actionable, executive-ready technical report.",
      whatYouGet: [
        {
          title: "Comprehensive Audit Report",
          desc: "Executive summary, root-cause diagnostics, and flamegraph captures with remediation steps.",
        },
        {
          title: "Load & Concurrency Curves",
          desc: "P50, P95, and P99 latency percentiles measured under sustained stress traffic.",
        },
        {
          title: "Bottleneck Isolation",
          desc: "Identification of I/O stalls, slow queries, locking issues, and GC pauses.",
        },
        {
          title: "Actionable Roadmap",
          desc: "Step-by-step remediation plan with engineering effort and ROI projections.",
        },
      ],
      ctaLabel: "Benchmark app ↗",
      badge: "Diagnostic audit & report",
      image: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1795297734/Screenshot_2026-11-22_031732_vixvyi.png",
      imageCaption: "Executive Diagnostic Benchmark Report & Concurrency Stress Profile",
    },
  ];

  // Scroll tracking: Switch services as user scrolls
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  const currentService = services[activeIndex];

  const scrollToContact = () => {
    if (typeof window !== "undefined") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToService = (idx: number) => {
    if (containerRef.current && typeof window !== "undefined") {
      const top = containerRef.current.offsetTop;
      const totalH = containerRef.current.offsetHeight - window.innerHeight;
      const targetY = top + totalH * (idx / (services.length - 1));
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else {
      setActiveIndex(idx);
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : services.length - 1;
    scrollToService(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < services.length - 1 ? activeIndex + 1 : 0;
    scrollToService(nextIdx);
  };

  return (
    /* Multi-screen height container enabling natural scroll-driven service switching */
    <div
      ref={containerRef}
      id="services"
      className="relative min-h-[260vh] bg-white border-t border-zinc-200"
    >
      {/* Structural subtle grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20" />

      {/* Sticky viewport frame pinning the showcase while scrolling */}
      <div className="sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto w-full">
        {/* Section Header: Minimalist and clean (tabs removed as requested) */}
        <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-zinc-200">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.0] text-zinc-950">
              Services
            </h2>
          </div>

          {/* Minimal scroll step indicator */}
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
            <span>Scroll to explore</span>
            <span className="font-bold text-zinc-950">
              0{activeIndex + 1} / 0{services.length}
            </span>
          </div>
        </div>

        {/* Main 3-Column Showcase: Left Text, Center Real Images, Right Rail Slider */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center flex-1 max-h-[720px]">
          {/* Left Column: Text, Deliverables, CTAs (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-zinc-950 px-3 py-0.5 rounded-full bg-zinc-100 border border-zinc-200">
                    {currentService.num} · {currentService.shortLabel}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {currentService.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight leading-tight">
                  {currentService.title}
                </h3>

                <p className="text-xs font-mono text-emerald-700 font-semibold mt-1.5 mb-3">
                  {currentService.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5 line-clamp-3 sm:line-clamp-none">
                  {currentService.description}
                </p>

                {/* What You Get checklist */}
                <div className="space-y-2.5 pt-4 border-t border-zinc-100">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-semibold">
                    What You Get
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-700">
                    {currentService.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-emerald-700" />
                        </div>
                        <span className="leading-snug">
                          <strong className="text-zinc-950 font-medium">{item.title}:</strong>{" "}
                          <span className="text-zinc-600">{item.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs and Scope footer */}
            <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4 mt-auto">
              <span className="text-xs font-mono text-zinc-500">
                {currentService.badge}
              </span>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-all text-xs sm:text-sm font-medium shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                style={{ color: "#ffffff", backgroundColor: "#09090b" }}
              >
                <span style={{ color: "#ffffff" }}>{currentService.ctaLabel}</span>
              </a>
            </div>
          </div>

          {/* Center Column: Real Production Images Frame (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-950 overflow-hidden shadow-xl shadow-zinc-950/5 relative flex flex-col">
              {/* Top window chrome */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-zinc-300 ml-2 text-[11px] truncate max-w-[200px] sm:max-w-xs">
                    {currentService.id === "build" && "restora-pos.app · Production Deployment"}
                    {currentService.id === "accelerate" && "hotpath-profiling.trace · 18ms Latency"}
                    {currentService.id === "benchmark" && "diagnostic-report.v2 · Concurrency Audit"}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 shrink-0">
                  Real Screenshot
                </span>
              </div>

              {/* Real Project Image with smooth crossfade */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full bg-zinc-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.image}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentService.image}
                      alt={currentService.imageCaption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom image caption bar */}
              <div className="px-4 py-2 bg-zinc-900/90 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span className="truncate">{currentService.imageCaption}</span>
                <span className="text-emerald-400 font-semibold shrink-0 ml-2">
                  0{activeIndex + 1}/03
                </span>
              </div>
            </div>
          </div>

          {/* Extreme Right Column: Vertical Rail Slider Indicator (lg:col-span-1) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center">
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              title="Previous Service"
              className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors mb-4"
              aria-label="Previous Service"
            >
              <ChevronUp className="w-4 h-4" />
            </button>

            {/* Vertical Rail Indicator */}
            <div className="flex flex-col items-center gap-3 py-2">
              {services.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToService(idx)}
                    title={`${item.num} · ${item.title}`}
                    className="group relative flex items-center justify-center p-1 focus:outline-hidden"
                    aria-label={`Go to service ${item.num}: ${item.title}`}
                  >
                    {isActive ? (
                      /* Active Elongated Capsule / Pill */
                      <div className="w-2.5 h-8 rounded-full bg-zinc-800 shadow-xs transition-all duration-300" />
                    ) : (
                      /* Inactive Dot */
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-zinc-500 transition-all duration-200" />
                    )}

                    {/* Tooltip on hover */}
                    <span className="absolute right-full mr-3 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-30">
                      {item.num} {item.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              title="Next Service"
              className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors mt-4"
              aria-label="Next Service"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
