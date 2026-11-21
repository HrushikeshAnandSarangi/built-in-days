"use client";

import React, { useState } from "react";
import { Check, ArrowUpRight, ChevronUp, ChevronDown, Zap, ShieldCheck, Terminal, Cpu, Database, Activity } from "lucide-react";

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
}

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
    },
  ];

  const currentService = services[activeIndex];

  const scrollToContact = () => {
    if (typeof window !== "undefined") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white border-t border-zinc-200 scroll-mt-24">
      {/* Structural subtle grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-25" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimalist and clean */}
        <div className="flex items-center justify-between pb-8 border-b border-zinc-200">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.0] text-zinc-950">
              Services
            </h2>
          </div>

          {/* Quick tab switcher for all screen sizes */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 border border-zinc-200">
            {services.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeIndex === idx
                    ? "bg-white text-zinc-950 shadow-xs border border-zinc-200"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {item.num} {item.shortLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Main Charles Honig Showcase Body: Left text & CTAs, Center rich visual examples, Right slider rail */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Text, What You Get, CTAs (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-zinc-950 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200">
                  {currentService.num} · {currentService.shortLabel}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {currentService.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight leading-tight">
                {currentService.title}
              </h3>

              <p className="text-xs font-mono text-emerald-700 font-semibold mt-2 mb-4">
                {currentService.tagline}
              </p>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                {currentService.description}
              </p>

              {/* What You Get checklist */}
              <div className="space-y-3 pt-5 border-t border-zinc-100">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-semibold">
                  What You Get
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-700">
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
            </div>

            {/* CTAs and Scope footer */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
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

          {/* Center Column: High-fidelity Visual Example Screens (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Visual Example Card Frame */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-900 text-zinc-100 p-5 sm:p-6 shadow-xl shadow-zinc-950/5 relative overflow-hidden min-h-[440px] flex flex-col justify-between">
              {/* Subtle top window chrome */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-zinc-400 ml-2 text-[11px]">
                    {currentService.id === "build" && "restora-pos.app — Tauri Desktop"}
                    {currentService.id === "accelerate" && "flamegraph-latency-profiler.trace"}
                    {currentService.id === "benchmark" && "stress-diagnostic-report.v2"}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60">
                  Live Production
                </span>
              </div>

              {/* Dynamic Service Visual Demonstrations */}
              <div className="py-4 flex-1 flex flex-col justify-center">
                {/* 1. BUILD APPLICATION EXAMPLE: Multi-Window App & Dashboard */}
                {activeIndex === 0 && (
                  <div className="space-y-4">
                    {/* Top KPI row */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase">Daily Orders</div>
                        <div className="text-lg font-bold text-white mt-0.5">1,482</div>
                        <div className="text-[10px] text-emerald-400 font-mono">+28% vs wk</div>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase">Gross Volume</div>
                        <div className="text-lg font-bold text-white mt-0.5">$38.4k</div>
                        <div className="text-[10px] text-emerald-400 font-mono">100% synced</div>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase">Client Binary</div>
                        <div className="text-lg font-bold text-white mt-0.5">18.4 MB</div>
                        <div className="text-[10px] text-zinc-400 font-mono">macOS/Win/Linux</div>
                      </div>
                    </div>

                    {/* Live active queue preview */}
                    <div className="rounded-xl bg-zinc-950/90 border border-zinc-800 p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-zinc-800/80 pb-2">
                        <span className="font-semibold text-zinc-200">Active POS Ticket Stream</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Zero-Latency WebSockets
                        </span>
                      </div>
                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 font-bold">#4092</span>
                            <span>Table 12 · 4 items</span>
                          </div>
                          <span className="text-zinc-400">Printed 2s ago</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-zinc-400">
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 font-bold">#4091</span>
                            <span>Bar Counter · 2 cocktails</span>
                          </div>
                          <span className="text-zinc-500">Paid ($42.00)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                      <span>Stack: Next.js 16 · Rust/Tauri · PostgreSQL</span>
                      <span className="text-emerald-400">Ship Velocity: 4 days</span>
                    </div>
                  </div>
                )}

                {/* 2. ACCELERATE APPLICATION EXAMPLE: Latency & Flamegraph Speedup */}
                {activeIndex === 1 && (
                  <div className="space-y-4">
                    {/* Before & After comparison card */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40">
                        <div className="text-[10px] font-mono uppercase text-red-400 font-bold">Before Optimization</div>
                        <div className="text-2xl font-bold text-red-300 mt-1 font-mono">2,450 ms</div>
                        <div className="text-[11px] text-zinc-400 mt-1">Stalled N+1 queries & memory leaks</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
                        <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold">After Latency Patch</div>
                        <div className="text-2xl font-bold text-emerald-400 mt-1 font-mono">18 ms</div>
                        <div className="text-[11px] text-emerald-300 font-semibold mt-1">99.2% Latency Reduction</div>
                      </div>
                    </div>

                    {/* Flamegraph hotpath visual inspector */}
                    <div className="rounded-xl bg-zinc-950/90 border border-zinc-800 p-3.5 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-200 font-semibold flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-emerald-400" />
                          Kernel Flamegraph & Hotpath Trace
                        </span>
                        <span className="text-emerald-400 font-mono">Resolved</span>
                      </div>

                      {/* Visual flamegraph bars */}
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div>
                          <div className="flex justify-between text-zinc-400 mb-1">
                            <span>Blocking PostgreSQL Table Scan</span>
                            <span className="text-red-400">1,820ms → 2.1ms (Indexed)</span>
                          </div>
                          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[4%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-zinc-400 mb-1">
                            <span>Cascading React Re-renders</span>
                            <span className="text-red-400">410ms → 0.8ms (Memoized)</span>
                          </div>
                          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[2%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-zinc-400 mb-1">
                            <span>Docker Container Image Size</span>
                            <span className="text-emerald-400 font-bold">2.19 GB → 814 kB (99.96% Squeeze)</span>
                          </div>
                          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-emerald-400 rounded-full w-[1%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                      <span>Zero-allocation buffers · Sub-ms queries</span>
                      <span className="text-emerald-400">100% reproducible</span>
                    </div>
                  </div>
                )}

                {/* 3. BENCHMARK & AUDIT EXAMPLE: Comprehensive Load-Test Report */}
                {activeIndex === 2 && (
                  <div className="space-y-4">
                    {/* Concurrency Percentile Metrics */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase">P50 Latency</div>
                        <div className="text-lg font-bold text-emerald-400 mt-0.5 font-mono">2.4 ms</div>
                        <div className="text-[10px] text-zinc-400 font-mono">Median turn</div>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase">P95 Latency</div>
                        <div className="text-lg font-bold text-white mt-0.5 font-mono">8.1 ms</div>
                        <div className="text-[10px] text-zinc-400 font-mono">95th percentile</div>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase">P99 Tail</div>
                        <div className="text-lg font-bold text-white mt-0.5 font-mono">14.2 ms</div>
                        <div className="text-[10px] text-emerald-400 font-mono">0 timeouts</div>
                      </div>
                    </div>

                    {/* Bottleneck Isolation & Executive Summary */}
                    <div className="rounded-xl bg-zinc-950/90 border border-zinc-800 p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-zinc-800/80 pb-2">
                        <span className="font-semibold text-zinc-200">Executive Technical Audit Summary</span>
                        <span className="text-emerald-400 font-mono">10,000 req/sec stress</span>
                      </div>

                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <span className="text-zinc-300">Connection Pool Contention</span>
                          <span className="text-emerald-400 font-bold">Diagnosed & Patched</span>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <span className="text-zinc-300">Garbage Collector GC Pauses</span>
                          <span className="text-emerald-400 font-bold">Mitigated</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                      <span className="text-zinc-300">Deliverable: 24-Page Technical Audit PDF</span>
                      <span className="text-emerald-400">Executive Ready</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom status note */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Verified engineering outcomes</span>
                <span className="text-zinc-500">Service {activeIndex + 1} of 3</span>
              </div>
            </div>
          </div>

          {/* Extreme Right Column: Charles Honig Vertical Pill Slider Rail (lg:col-span-1) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center">
            {/* Top Prev Arrow */}
            <button
              onClick={handlePrev}
              title="Previous Service"
              className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors mb-4"
              aria-label="Previous Service"
            >
              <ChevronUp className="w-4 h-4" />
            </button>

            {/* Vertical Rail Indicator Matching User Screenshot */}
            <div className="flex flex-col items-center gap-3 py-2">
              {services.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
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

                    {/* Hover tooltip showing service label */}
                    <span className="absolute right-full mr-3 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-30">
                      {item.num} {item.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Next Arrow */}
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
    </section>
  );
}
