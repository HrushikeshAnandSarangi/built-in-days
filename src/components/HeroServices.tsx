"use client";

import React from "react";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { DeskDeveloperIllustration } from "./DeskDeveloperIllustration";
import {
  BeanbagBuildAnimation,
  JetpackSpeedAnimation,
  DiagnosticAuditAnimation,
} from "./SiteAnimations";

export function HeroServices() {
  const scrollToContact = () => {
    if (typeof window !== "undefined") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative pt-28 md:pt-36 pb-20 bg-white">
      {/* Structural subtle grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-25" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================== */}
        {/* EDITORIAL HERO SECTION (SPLIT LAYOUT WITH HAND-DRAWN ART)       */}
        {/* ============================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-14 pt-4 pb-12">
          {/* Left Column: Editorial Statement, Action CTAs & Clients Row */}
          <div className="flex-1 max-w-2xl">
            {/* Editorial Serif Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-zinc-950 tracking-tight leading-[1.18]">
              Based at NIT Rourkela, I&apos;m an independent systems and full-stack engineer
              building production applications and making software{" "}
              <span className="text-emerald-700 italic">measurably faster</span>.
            </h1>

            <p className="mt-5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl font-sans">
              Shipping full-stack web applications, Tauri cross-platform desktop software, and
              high-performance backends. Delivered in days with strict architecture and zero fluff.
            </p>

            {/* Direct Action Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-all shadow-sm hover:scale-[1.01] active:scale-[0.99] text-xs sm:text-sm font-medium"
                style={{ color: "#ffffff", backgroundColor: "#09090b" }}
              >
                <span style={{ color: "#ffffff", fontWeight: 500 }}>
                  Work Together
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-mono text-xs transition-all border border-zinc-200"
              >
                <span>[ view projects ]</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-zinc-500 hover:text-zinc-900 font-mono text-xs transition-colors"
              >
                <span>services & scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Clients & Collaborators Row */}
            <div className="mt-12 pt-8 border-t border-zinc-200/80">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3">
                // clients & systems i&apos;ve worked with
              </div>
              <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 text-xs sm:text-sm font-mono text-zinc-500 font-semibold tracking-wider">
                <span className="hover:text-zinc-950 transition-colors">NIT ROURKELA</span>
                <span className="text-zinc-300">·</span>
                <span className="hover:text-zinc-950 transition-colors">IEEE INDISCON</span>
                <span className="text-zinc-300">·</span>
                <span className="hover:text-zinc-950 transition-colors">SYSMEX</span>
                <span className="text-zinc-300">·</span>
                <span className="hover:text-zinc-950 transition-colors">AURIC AI</span>
                <span className="text-zinc-300">·</span>
                <span className="hover:text-zinc-950 transition-colors">RESTORA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hand-Drawn Animated Developer at Desk Illustration */}
          <div className="shrink-0 flex justify-center lg:justify-end">
            <DeskDeveloperIllustration className="w-72 sm:w-80 md:w-92 h-64 sm:h-76" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION: THREE MAJOR SERVICES (BUILD, FIX, BENCHMARK)           */}
        {/* ============================================================== */}
        <div id="services" className="mt-20 sm:mt-28 scroll-mt-24">
          <div className="pb-6 sm:pb-8 border-b border-zinc-200">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
              // core services
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Three Services. High Precision. Zero Clutter.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Whether you need a brand new product shipped from scratch, an existing application
              accelerated, or an empirical diagnostic benchmark report identifying bottlenecks.
            </p>
          </div>

          {/* Three Service Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {/* SERVICE 1: BUILD YOUR APPLICATION */}
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-950 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-zinc-950 px-3 py-1 rounded-full bg-white border border-zinc-200">
                    [ 01 · BUILD ]
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Web & Cross-Platform
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  Build Your Application
                </h3>

                <p className="text-xs font-mono text-emerald-700 font-medium mt-1 mb-3">
                  Production-grade software shipped in days
                </p>

                {/* Animated Developer Vector Illustration */}
                <BeanbagBuildAnimation className="w-full h-28 sm:h-32 my-2" />

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  I take your product requirement and build a polished, production-ready software
                  application. Clean architecture, strict TypeScript types, snappy interfaces, and
                  robust backend endpoints built to last.
                </p>

                <div className="space-y-3 pt-5 border-t border-zinc-200">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-semibold">
                    What You Get
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Full-Stack Web Apps:</strong> Modern Next.js, React, and reactive Tailwind interfaces.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Tauri Desktop Software:</strong> Cross-platform desktop apps (macOS, Windows, Linux) under 25MB.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Resilient APIs & DBs:</strong> Relational schemas, PostgreSQL, and high-throughput async handlers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Full Handover:</strong> Modular code, automated tests, deployment scripts, zero debt.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">Fixed-scope & contract</span>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-colors text-xs font-mono font-medium shadow-sm"
                  style={{ color: "#ffffff", backgroundColor: "#09090b" }}
                >
                  <span style={{ color: "#ffffff" }}>[ build app ↗ ]</span>
                </a>
              </div>
            </div>

            {/* SERVICE 2: FIX YOUR APPLICATION (MAKE IT FASTER) */}
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-950 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-zinc-950 px-3 py-1 rounded-full bg-white border border-zinc-200">
                    [ 02 · FIX & ACCELERATE ]
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                    Speed Rescue
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  Fix Your Application
                </h3>

                <p className="text-xs font-mono text-emerald-700 font-medium mt-1 mb-3">
                  Bisect bottlenecks, eliminate leaks, slash latency
                </p>

                {/* Animated Jetpack Velocity Vector Illustration */}
                <JetpackSpeedAnimation className="w-full h-28 sm:h-32 my-2" />

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  When your app feels sluggish, database queries stall, or server bills spike, I
                  profile hotpaths with flamegraphs and code-level inspection. I patch the code,
                  eliminate memory leaks, and prove the speedup with hard numbers.
                </p>

                <div className="space-y-3 pt-5 border-t border-zinc-200">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-semibold">
                    What You Get
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Frontend Speed:</strong> Eliminate re-renders, optimize bundle splitting, and achieve instant page loads.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Database & Query Tuning:</strong> Sub-millisecond EXPLAIN ANALYZE index redesign and caching layers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Container Shrinking:</strong> Squeeze bloated runtimes (e.g. 2.19 GB down to 814 kB) and fix leaks.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Empirical Proof:</strong> Before/after latency measurements with reproducible benchmark scripts.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">Latency & memory rescue</span>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-colors text-xs font-mono font-medium shadow-sm"
                  style={{ color: "#ffffff", backgroundColor: "#09090b" }}
                >
                  <span style={{ color: "#ffffff" }}>[ accelerate ↗ ]</span>
                </a>
              </div>
            </div>

            {/* SERVICE 3: BENCHMARKING & COMPREHENSIVE REPORT */}
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-950 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-zinc-950 px-3 py-1 rounded-full bg-white border border-zinc-200">
                    [ 03 · BENCHMARK & AUDIT ]
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Deep Diagnostics
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  Benchmark & Audit
                </h3>

                <p className="text-xs font-mono text-emerald-700 font-medium mt-1 mb-3">
                  Isolate bottlenecks & deliver comprehensive report
                </p>

                {/* Animated Diagnostic Whiteboard Illustration */}
                <DiagnosticAuditAnimation className="w-full h-28 sm:h-32 my-2" />

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  Before committing to expensive rewrites, I subject your application to rigorous
                  load-testing and kernel/runtime profiling. I trace where latency is lost and
                  provide an actionable, executive-ready technical report.
                </p>

                <div className="space-y-3 pt-5 border-t border-zinc-200">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-semibold">
                    What You Get
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Comprehensive Audit Report:</strong> Executive summary, root-cause diagnostics, and flamegraph captures.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Load & Concurrency Curves:</strong> P50, P95, and P99 latency percentiles under sustained stress traffic.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Bottleneck Isolation:</strong> Identification of I/O stalls, slow queries, locking issues, and GC pauses.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Actionable Roadmap:</strong> Step-by-step remediation plan with engineering effort and ROI projections.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">Diagnostic audit & report</span>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-colors text-xs font-mono font-medium shadow-sm"
                  style={{ color: "#ffffff", backgroundColor: "#09090b" }}
                >
                  <span style={{ color: "#ffffff" }}>[ benchmark app ↗ ]</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
