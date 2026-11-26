"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, ExternalLink, Activity, Cpu, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";

export function CaseStudySection() {
  const [activeTab, setActiveTab] = useState<"off-cpu" | "cpu">("off-cpu");

  const handleOpenAuditModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tempest-audit"));
    }
  };

  return (
    <section
      id="case-study"
      className="py-24 sm:py-32 bg-white border-t border-zinc-200 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-zinc-200">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.0] text-zinc-950">
              Case Study
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-zinc-500">
              Tempest Systems · Performance &amp; Concurrency Audit
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/audit/tempest-performance-audit.docx"
              download="tempest-performance-audit.docx"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-[13px] font-medium transition-all shrink-0 shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Report (.docx)</span>
            </a>
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div className="mt-10 rounded-3xl border border-zinc-200/90 bg-zinc-50/50 p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Card Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-200/80">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-semibold text-zinc-900 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-2xs">
                Systems Engineering
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Commit <code className="text-zinc-900 bg-zinc-200/70 px-1.5 py-0.5 rounded font-mono">0b57702</code>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Verified by Prharsha G, Core Maintainer</span>
              </span>
            </div>

            <div className="text-xs font-mono text-zinc-500">
              Deliverable: 805 KB (.docx)
            </div>
          </div>

          {/* Title and Executive Abstract */}
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Eliminating Database Contention &amp; Uncovering Silent Proxy Failure Paths
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-3xl font-normal">
              An empirical performance, concurrency, and mutation testing audit across Tempest&apos;s core workspace subsystems (<code>tasks_store</code>, <code>hephaestus</code> proxy, <code>service_proxy</code>, <code>dbiso</code>, and <code>node_ingest</code>). By replacing serialized Mutex commits with a dedicated writer + reader pool and configuring WAL/NORMAL, we eliminated 1-second UI thread lockouts and delivered a measured <strong>141.5x throughput gain</strong>.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
              <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
                <span>Speedup</span>
                <Activity className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mt-2 tracking-tight">
                141.5x
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mt-1">
                782ms → 9.6ms P99 latency
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
              <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
                <span>Scheduler Traces</span>
                <Cpu className="w-3.5 h-3.5 text-zinc-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-2 tracking-tight">
                16,265
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mt-1">
                Off-CPU kernel switch events
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
              <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
                <span>Heap Overhead</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-2 tracking-tight">
                &lt; 391 KB
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mt-1">
                0 heap leaks detected (DHAT)
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
              <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
                <span>Soak Stability</span>
                <Activity className="w-3.5 h-3.5 text-zinc-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-2 tracking-tight">
                9.0 MB Flat
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mt-1">
                1.6M ops over 300s soak test
              </div>
            </div>
          </div>

          {/* Interactive Flamegraph Viewer */}
          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-900">
                  Empirical Flamegraph Profiles
                </span>
                <span className="text-xs font-mono text-zinc-400">· Linux perf</span>
              </div>

              {/* Tab Selector Buttons */}
              <div className="inline-flex p-1 rounded-xl bg-zinc-100 border border-zinc-200/70 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab("off-cpu")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "off-cpu"
                      ? "bg-white text-zinc-950 font-bold shadow-2xs"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  Off-CPU: SQLite Lock Contention
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cpu")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "cpu"
                      ? "bg-white text-zinc-950 font-bold shadow-2xs"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  CPU: Hephaestus Proxy Stream
                </button>
              </div>
            </div>

            {/* Flamegraph Image Display */}
            <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-950 p-2 sm:p-3 overflow-hidden shadow-inner">
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-zinc-900">
                {activeTab === "off-cpu" ? (
                  <Image
                    src="/audit/off-cpu-flamegraph.png"
                    alt="Off-CPU Flamegraph showing SQLite Lock Contention and Thread Blocked States"
                    fill
                    sizes="(max-width: 1024px) 100vw, 950px"
                    className="object-contain"
                    priority
                  />
                ) : (
                  <Image
                    src="/audit/hephaestus-cpu-flamegraph.png"
                    alt="Hephaestus CPU Flamegraph showing copy_bidirectional Dominating 83% of CPU Cycles"
                    fill
                    sizes="(max-width: 1024px) 100vw, 950px"
                    className="object-contain"
                  />
                )}
              </div>
              <div className="px-3 pt-3 pb-1 text-[11px] font-mono text-zinc-400 text-center">
                {activeTab === "off-cpu"
                  ? "Off-CPU Flamegraph: 16,265 scheduler switch events exposing threads asleep in futex_wait during disk fsync"
                  : "On-CPU Flamegraph: copy_bidirectional consumed 83.2% of CPU time while 167 proxy mutants went undetected"}
              </div>
            </div>

            {/* Caption & Analysis */}
            <div className="mt-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs sm:text-[13px] text-zinc-700 leading-relaxed font-sans">
              {activeTab === "off-cpu" ? (
                <p>
                  <strong>Off-CPU Analysis:</strong> Standard profilers missed this bottleneck because threads waiting for locks consume zero CPU. By instrumenting Linux kernel scheduler context switches, we uncovered that <strong>28.5%</strong> of sleep time was locked in <code>sqlite3_step → fsync</code>, and <strong>24.7%</strong> in <code>tokio-rt-worker → sys_futex</code>. Tasks queued for up to 1,243 ms waiting for a single connection mutex, causing repeated UI thread stalls.
                </p>
              ) : (
                <p>
                  <strong>Proxy CPU &amp; Mutation Analysis:</strong> While Hephaestus spends <strong>83.2%</strong> of CPU time inside <code>tokio::io::copy_bidirectional</code> streaming network buffers, mutation testing with <code>cargo-mutants</code> revealed that <strong>167 out of 204 mutations survived</strong> (only 18.1% mutation score). The proxy lacked assertions for socket resets and timeout cascades, creating silent drop risks under load.
                </p>
              )}
            </div>
          </div>

          {/* Architectural Remediation & Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-rose-700 font-mono text-xs font-bold uppercase">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>The Blocker</span>
              </div>
              <h4 className="font-bold text-zinc-950 text-sm mt-2">
                Database Mutex Contention
              </h4>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Single <code>DbState(Mutex&lt;Connection&gt;)</code> held across disk commits blocked all concurrent read/write IPC calls.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-800 font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>The Fix</span>
              </div>
              <h4 className="font-bold text-zinc-950 text-sm mt-2">
                Dedicated Writer + WAL Pool
              </h4>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Separated read and write connections with an r2d2 pool and enabled WAL journal mode with NORMAL synchronization.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-zinc-800 font-mono text-xs font-bold uppercase">
                <Activity className="w-4 h-4 text-zinc-700" />
                <span>The Outcome</span>
              </div>
              <h4 className="font-bold text-zinc-950 text-sm mt-2">
                141.5x Speedup &amp; 0 Stalls
              </h4>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Throughput jumped from 87 ops/s to 12,359 ops/s; P99 latency dropped from 782ms to 9.6ms with zero timeouts.
              </p>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-600">
              Complete document contains 5 technical benchmark tables and target file remediation steps.
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleOpenAuditModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 text-xs sm:text-[13px] font-medium transition-colors cursor-pointer shadow-2xs"
              >
                <span>Read Full Technical Deep-Dive</span>
                <span>↗</span>
              </button>

              <a
                href="/audit/tempest-performance-audit.docx"
                download="tempest-performance-audit.docx"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-[13px] font-medium transition-colors shadow-sm"
                style={{ color: "#ffffff", backgroundColor: "#09090b" }}
              >
                <Download className="w-3.5 h-3.5" />
                <span style={{ color: "#ffffff" }}>Download Audit (.docx)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}