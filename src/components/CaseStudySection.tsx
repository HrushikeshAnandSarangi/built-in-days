"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Activity, Cpu, ShieldAlert, CheckCircle2 } from "lucide-react";
import { CurlyUnderline, HandwrittenHook } from "./ui/curly-underline";

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
      className="py-20 sm:py-28 bg-[#F7F5EE] border-t border-[rgba(26,56,40,0.12)] scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[rgba(26,56,40,0.12)]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <HandwrittenHook className="text-xl sm:text-2xl text-[#183627] -rotate-1">
                deep-dive systems audit
              </HandwrittenHook>
              <span className="w-8 h-[1px] bg-[#183627]/30" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.0] text-[#152E20]">
              Case Study
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#3A5646]">
              Tempest Systems · Performance &amp; Concurrency Audit
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/audit/tempest-performance-audit.docx"
              download="tempest-performance-audit.docx"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#183627] hover:bg-[#11261B] text-[#FAF8F2] text-xs sm:text-[13px] font-semibold transition-all shrink-0 shadow-sm border border-[#11261B] active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Report (.docx)</span>
            </a>
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div className="mt-10 rounded-3xl border border-[rgba(26,56,40,0.12)] bg-[#EBF0E8] p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Card Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[rgba(26,56,40,0.12)] text-xs font-mono text-[#3A5646]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-[#152E20]">Systems Engineering</span>
              <span className="text-[rgba(26,56,40,0.3)]">·</span>
              <span>Commit <code className="text-[#152E20] font-mono">0b57702</code></span>
              <span className="text-[rgba(26,56,40,0.3)]">·</span>
              <span className="text-[#183627] font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D98A29] animate-pulse" />
                Verified by Prharsha G, Core Maintainer
              </span>
            </div>

            <div>
              Deliverable: 805 KB (.docx)
            </div>
          </div>

          {/* Title and Executive Abstract */}
          <div className="mt-8 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#152E20]">
              Eliminating Database Contention &amp; Uncovering Silent Proxy Failure Paths
            </h3>
            <p className="text-sm sm:text-base text-[#3A5646] leading-relaxed max-w-3xl font-normal">
              An empirical performance, concurrency, and mutation testing audit across Tempest&apos;s core workspace subsystems (<code>tasks_store</code>, <code>hephaestus</code> proxy, <code>service_proxy</code>, <code>dbiso</code>, and <code>node_ingest</code>). By replacing serialized Mutex commits with a dedicated writer + reader pool and configuring WAL/NORMAL, we eliminated 1-second UI thread lockouts and delivered a measured{" "}
              <span className="relative inline-block font-bold text-[#152E20]">
                141.5x throughput gain
                <CurlyUnderline color="#D98A29" strokeWidth={2.5} className="-bottom-1" />
              </span>.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[rgba(26,56,40,0.12)] shadow-2xs">
              <div className="flex items-center justify-between text-[#3A5646] text-xs font-mono">
                <span>Speedup</span>
                <Activity className="w-3.5 h-3.5 text-[#D98A29]" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#D98A29] mt-2 tracking-tight tabular-nums">
                141.5x
              </div>
              <div className="text-[11px] font-mono text-[#3A5646] mt-1 tabular-nums">
                782ms → 9.6ms P99 latency
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[rgba(26,56,40,0.12)] shadow-2xs">
              <div className="flex items-center justify-between text-[#3A5646] text-xs font-mono">
                <span>Scheduler Traces</span>
                <Cpu className="w-3.5 h-3.5 text-[#183627]" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#152E20] mt-2 tracking-tight tabular-nums">
                16,265
              </div>
              <div className="text-[11px] font-mono text-[#3A5646] mt-1 tabular-nums">
                Off-CPU kernel switch events
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[rgba(26,56,40,0.12)] shadow-2xs">
              <div className="flex items-center justify-between text-[#3A5646] text-xs font-mono">
                <span>Heap Overhead</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#183627]" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#152E20] mt-2 tracking-tight tabular-nums">
                &lt; 391 KB
              </div>
              <div className="text-[11px] font-mono text-[#3A5646] mt-1">
                0 heap leaks detected (DHAT)
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[rgba(26,56,40,0.12)] shadow-2xs">
              <div className="flex items-center justify-between text-[#3A5646] text-xs font-mono">
                <span>Soak Stability</span>
                <Activity className="w-3.5 h-3.5 text-[#183627]" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#152E20] mt-2 tracking-tight tabular-nums">
                9.0 MB Flat
              </div>
              <div className="text-[11px] font-mono text-[#3A5646] mt-1 tabular-nums">
                1.6M ops over 300s soak test
              </div>
            </div>
          </div>

          {/* Interactive Flamegraph Viewer */}
          <div className="mt-10 rounded-2xl border border-[rgba(26,56,40,0.12)] bg-white/60 p-5 sm:p-6 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[rgba(26,56,40,0.12)]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#152E20]">
                  Empirical Flamegraph Profiles
                </span>
                <span className="text-xs font-mono text-[#3A5646]">· Linux perf</span>
              </div>

              {/* Tab Selector Buttons */}
              <div className="inline-flex p-1 rounded-xl bg-[#EBF0E8] border border-[rgba(26,56,40,0.12)] text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab("off-cpu")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "off-cpu"
                      ? "bg-[#183627] text-[#FAF8F2] font-semibold shadow-2xs"
                      : "text-[#3A5646] hover:text-[#152E20]"
                  }`}
                >
                  Off-CPU: SQLite Lock Contention
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cpu")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "cpu"
                      ? "bg-[#183627] text-[#FAF8F2] font-semibold shadow-2xs"
                      : "text-[#3A5646] hover:text-[#152E20]"
                  }`}
                >
                  CPU: Hephaestus Proxy Stream
                </button>
              </div>
            </div>

            {/* Flamegraph Image Display */}
            <div className="mt-5 rounded-xl border border-[rgba(26,56,40,0.12)] bg-[#12241A] p-2 sm:p-3 overflow-hidden shadow-inner">
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#0D1C13]">
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
              <div className="px-3 pt-3 pb-1 text-[11px] font-mono text-[#EBF0E8]/80 text-center">
                {activeTab === "off-cpu"
                  ? "Off-CPU Flamegraph: 16,265 scheduler switch events exposing threads asleep in futex_wait during disk fsync"
                  : "On-CPU Flamegraph: copy_bidirectional consumed 83.2% of CPU time while 167 proxy mutants went undetected"}
              </div>
            </div>

            {/* Caption & Analysis */}
            <div className="mt-4 p-4 rounded-xl bg-white/70 border border-[rgba(26,56,40,0.12)] text-xs sm:text-[13px] text-[#3A5646] leading-relaxed font-sans">
              {activeTab === "off-cpu" ? (
                <p>
                  <strong className="text-[#152E20]">Off-CPU Analysis:</strong> Standard profilers missed this bottleneck because threads waiting for locks consume zero CPU. By instrumenting Linux kernel scheduler context switches, we uncovered that <strong className="text-[#152E20]">28.5%</strong> of sleep time was locked in <code>sqlite3_step → fsync</code>, and <strong className="text-[#152E20]">24.7%</strong> in <code>tokio-rt-worker → sys_futex</code>. Tasks queued for up to 1,243 ms waiting for a single connection mutex, causing repeated UI thread stalls.
                </p>
              ) : (
                <p>
                  <strong className="text-[#152E20]">Proxy CPU &amp; Mutation Analysis:</strong> While Hephaestus spends <strong className="text-[#152E20]">83.2%</strong> of CPU time inside <code>tokio::io::copy_bidirectional</code> streaming network buffers, mutation testing with <code>cargo-mutants</code> revealed that <strong className="text-[#152E20]">167 out of 204 mutations survived</strong> (only 18.1% mutation score). The proxy lacked assertions for socket resets and timeout cascades, creating silent drop risks under load.
                </p>
              )}
            </div>
          </div>

          {/* Architectural Remediation & Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[rgba(26,56,40,0.12)] shadow-2xs">
              <div className="flex items-center gap-2 text-rose-800 font-mono text-xs font-bold uppercase">
                <ShieldAlert className="w-4 h-4 text-rose-700" />
                <span>The Blocker</span>
              </div>
              <h4 className="font-display font-bold text-[#152E20] text-sm mt-2">
                Database Mutex Contention
              </h4>
              <p className="text-xs text-[#3A5646] mt-1 leading-relaxed">
                Single <code>DbState(Mutex&lt;Connection&gt;)</code> held across disk commits blocked all concurrent read/write IPC calls.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[rgba(26,56,40,0.12)] shadow-2xs">
              <div className="flex items-center gap-2 text-[#183627] font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 text-[#183627]" />
                <span>The Fix</span>
              </div>
              <h4 className="font-display font-bold text-[#152E20] text-sm mt-2">
                Dedicated Writer + WAL Pool
              </h4>
              <p className="text-xs text-[#3A5646] mt-1 leading-relaxed">
                Separated read and write connections with an r2d2 pool and enabled WAL journal mode with NORMAL synchronization.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[rgba(26,56,40,0.12)] shadow-2xs">
              <div className="flex items-center gap-2 text-[#D98A29] font-mono text-xs font-bold uppercase">
                <Activity className="w-4 h-4 text-[#D98A29]" />
                <span>The Outcome</span>
              </div>
              <h4 className="font-display font-bold text-[#152E20] text-sm mt-2">
                141.5x Speedup &amp; 0 Stalls
              </h4>
              <p className="text-xs text-[#3A5646] mt-1 leading-relaxed">
                Throughput jumped from 87 ops/s to 12,359 ops/s; P99 latency dropped from 782ms to 9.6ms with zero timeouts.
              </p>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-6 border-t border-[rgba(26,56,40,0.12)] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#3A5646]">
              Complete document contains 5 technical benchmark tables and target file remediation steps.
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleOpenAuditModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#152E20] border border-[rgba(26,56,40,0.12)] hover:border-[#183627] text-xs sm:text-[13px] font-semibold transition-colors cursor-pointer shadow-2xs"
              >
                <span>Read Full Technical Deep-Dive</span>
                <span>↗</span>
              </button>

              <a
                href="/audit/tempest-performance-audit.docx"
                download="tempest-performance-audit.docx"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#183627] hover:bg-[#11261B] text-[#FAF8F2] text-xs sm:text-[13px] font-semibold transition-all shadow-sm border border-[#11261B] active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Audit (.docx)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
