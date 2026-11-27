"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Activity, Cpu, ShieldAlert, CheckCircle2, ExternalLink } from "lucide-react";
import { PixelCrystalIcon, PixelSparkle } from "./ui/pixel-sprites";

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
      className="py-16 sm:py-22 bg-[#F7F6F1] border-t border-[#DCE6F2] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="pixel-pill-badge">
                <span>CASE STUDY</span>
              </div>
              <PixelSparkle size={16} delay={0.4} />
            </div>

            <h2 className="font-pixel-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] leading-none text-[#1A2B4C] uppercase tracking-tight">
              TEMPEST SYSTEMS AUDIT
            </h2>
            <p className="font-mono-body text-xs sm:text-sm text-[#475D7A]">
              Empirical Off-CPU flamegraphs, concurrency locks &amp; mutation testing · Verified by Prharsha G
            </p>
          </div>

          <a
            href="/audit/tempest-performance-audit.docx"
            download="tempest-performance-audit.docx"
            className="pixel-btn-primary py-2.5 px-4 text-[11px] shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD REPORT (.DOCX)</span>
          </a>
        </div>

        {/* Main Retro OS Window Card */}
        <div className="pixel-window overflow-hidden bg-white">
          {/* OS Titlebar */}
          <div className="px-4 sm:px-6 py-3 bg-[#DCE6F2] border-b-[1.5px] border-[#1A2B4C] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 font-pixel text-[10px] font-bold text-[#1A2B4C]">
              <PixelCrystalIcon size={18} />
              <span>AUDIT REPORT // COMMIT 0B57702</span>
            </div>
            <div className="flex items-center gap-2 font-pixel text-[10px] text-[#1A2B4C]">
              <span className="w-2 h-2 rounded-full bg-[#1A2B4C] animate-pulse" />
              <span>805 KB DELIVERABLE</span>
            </div>
          </div>

          <div className="p-5 sm:p-8 space-y-8">
            {/* Abstract */}
            <div className="space-y-3">
              <h3 className="font-pixel-display text-xl sm:text-2xl font-bold text-[#1A2B4C] uppercase">
                Eliminating Database Contention &amp; Silent Proxy Failure Paths
              </h3>
              <p className="font-mono-body text-xs sm:text-[13px] text-[#475D7A] leading-relaxed max-w-4xl">
                An empirical performance, concurrency, and mutation testing audit across Tempest&apos;s core workspace subsystems (<code>tasks_store</code>, <code>hephaestus</code>, <code>service_proxy</code>, <code>dbiso</code>, <code>node_ingest</code>). Replacing serialized Mutex commits with a dedicated writer + reader pool and WAL/NORMAL delivered a measured{" "}
                <span className="px-1.5 py-0.5 bg-[#DCE6F2] border border-[#1A2B4C] rounded-xs font-pixel text-[11px] font-bold text-[#1A2B4C]">
                  141.5x throughput gain
                </span>.
              </p>
            </div>

            {/* 4 Key Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              <div className="p-4 bg-[#EBF1F8] border-[1.5px] border-[#1A2B4C] rounded-md shadow-[3px_3px_0px_#DCE6F2]">
                <div className="flex items-center justify-between font-pixel text-[10px] text-[#475D7A]">
                  <span>SPEEDUP</span>
                  <Activity className="w-3.5 h-3.5 text-[#1A2B4C]" />
                </div>
                <div className="font-pixel-display text-2xl sm:text-3xl font-bold text-[#1A2B4C] mt-1.5 tabular-nums">
                  141.5x
                </div>
                <div className="font-mono-body text-[11px] text-[#475D7A] mt-0.5">
                  782ms → 9.6ms P99
                </div>
              </div>

              <div className="p-4 bg-[#F7F6F1] border-[1.5px] border-[#1A2B4C] rounded-md shadow-[3px_3px_0px_#DCE6F2]">
                <div className="flex items-center justify-between font-pixel text-[10px] text-[#475D7A]">
                  <span>TRACES</span>
                  <Cpu className="w-3.5 h-3.5 text-[#1A2B4C]" />
                </div>
                <div className="font-pixel-display text-2xl sm:text-3xl font-bold text-[#1A2B4C] mt-1.5 tabular-nums">
                  16,265
                </div>
                <div className="font-mono-body text-[11px] text-[#475D7A] mt-0.5">
                  Off-CPU kernel switches
                </div>
              </div>

              <div className="p-4 bg-[#F7F6F1] border-[1.5px] border-[#1A2B4C] rounded-md shadow-[3px_3px_0px_#DCE6F2]">
                <div className="flex items-center justify-between font-pixel text-[10px] text-[#475D7A]">
                  <span>HEAP OVERHEAD</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A2B4C]" />
                </div>
                <div className="font-pixel-display text-2xl sm:text-3xl font-bold text-[#1A2B4C] mt-1.5 tabular-nums">
                  &lt; 391 KB
                </div>
                <div className="font-mono-body text-[11px] text-[#475D7A] mt-0.5">
                  0 leaks detected (DHAT)
                </div>
              </div>

              <div className="p-4 bg-[#EBF1F8] border-[1.5px] border-[#1A2B4C] rounded-md shadow-[3px_3px_0px_#DCE6F2]">
                <div className="flex items-center justify-between font-pixel text-[10px] text-[#475D7A]">
                  <span>SOAK RSS</span>
                  <Activity className="w-3.5 h-3.5 text-[#1A2B4C]" />
                </div>
                <div className="font-pixel-display text-2xl sm:text-3xl font-bold text-[#1A2B4C] mt-1.5 tabular-nums">
                  9.0 MB
                </div>
                <div className="font-mono-body text-[11px] text-[#475D7A] mt-0.5">
                  1.6M ops over 300s
                </div>
              </div>
            </div>

            {/* Interactive Flamegraph Frame */}
            <div className="border-[1.5px] border-[#1A2B4C] rounded-md bg-[#F7F6F1] p-4 sm:p-5 shadow-[3px_3px_0px_#DCE6F2]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#DCE6F2]">
                <span className="font-pixel text-[11px] font-bold text-[#1A2B4C] uppercase">
                  EMPIRICAL FLAMEGRAPH PROFILES · LINUX PERF
                </span>

                <div className="flex flex-col sm:inline-flex sm:flex-row gap-1.5 p-1 bg-white border-[1.5px] border-[#1A2B4C] rounded w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveTab("off-cpu")}
                    className={`px-3 py-2 sm:py-1.5 rounded-xs font-pixel text-[10px] font-bold transition-colors cursor-pointer text-center ${
                      activeTab === "off-cpu"
                        ? "bg-[#1A2B4C] text-[#F7F6F1]"
                        : "text-[#475D7A] hover:text-[#1A2B4C]"
                    }`}
                  >
                    OFF-CPU: SQLITE LOCKS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("cpu")}
                    className={`px-3 py-2 sm:py-1.5 rounded-xs font-pixel text-[10px] font-bold transition-colors cursor-pointer text-center ${
                      activeTab === "cpu"
                        ? "bg-[#1A2B4C] text-[#F7F6F1]"
                        : "text-[#475D7A] hover:text-[#1A2B4C]"
                    }`}
                  >
                    CPU: HEPHAESTUS PROXY
                  </button>
                </div>
              </div>

              <div className="mt-4 rounded border-[1.5px] border-[#1A2B4C] bg-[#1A2B4C] p-2 overflow-hidden">
                <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden bg-[#121E36]">
                  {activeTab === "off-cpu" ? (
                    <Image
                      src="/audit/off-cpu-flamegraph.png"
                      alt="Off-CPU Flamegraph showing SQLite Lock Contention"
                      fill
                      sizes="(max-width: 1024px) 100vw, 950px"
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <Image
                      src="/audit/hephaestus-cpu-flamegraph.png"
                      alt="Hephaestus CPU Flamegraph showing copy_bidirectional"
                      fill
                      sizes="(max-width: 1024px) 100vw, 950px"
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="pt-2.5 pb-1 px-2 font-mono-body text-[11px] text-[#DCE6F2] text-center">
                  {activeTab === "off-cpu"
                    ? "Off-CPU Flamegraph: 16,265 scheduler switches exposing threads sleeping in futex_wait during disk fsync"
                    : "On-CPU Flamegraph: copy_bidirectional consumed 83.2% CPU while 167 proxy mutants went undetected"}
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-white border-[1.5px] border-[#1A2B4C] rounded font-mono-body text-xs text-[#475D7A] leading-relaxed">
                {activeTab === "off-cpu" ? (
                  <p>
                    <strong className="text-[#1A2B4C]">Off-CPU Analysis:</strong>{" "}
                    Standard profilers missed this because blocked threads consume 0% CPU. Kernel context switches revealed{" "}
                    <strong className="text-[#1A2B4C]">28.5%</strong> sleep locked inside <code>sqlite3_step → fsync</code> and{" "}
                    <strong className="text-[#1A2B4C]">24.7%</strong> inside <code>sys_futex</code>, stalling IPC tasks for up to 1,243 ms.
                  </p>
                ) : (
                  <p>
                    <strong className="text-[#1A2B4C]">Proxy CPU &amp; Mutation Analysis:</strong>{" "}
                    Hephaestus spends <strong className="text-[#1A2B4C]">83.2%</strong> CPU time in{" "}
                    <code>tokio::io::copy_bidirectional</code>, while <code>cargo-mutants</code> uncovered{" "}
                    <strong className="text-[#1A2B4C]">167 surviving mutations out of 204</strong> due to missing timeout &amp; socket-reset checks.
                  </p>
                )}
              </div>
            </div>

            {/* Blocker / Fix / Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white border-[1.5px] border-[#1A2B4C] rounded-md shadow-[3px_3px_0px_#DCE6F2]">
                <div className="flex items-center gap-2 font-pixel text-[10px] font-bold text-[#1A2B4C]">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#6C8EBF]" />
                  <span>THE BLOCKER</span>
                </div>
                <h4 className="font-pixel text-xs font-bold text-[#1A2B4C] mt-2">
                  MUTEX CONTENTION
                </h4>
                <p className="font-mono-body text-[11.5px] text-[#475D7A] mt-1 leading-snug">
                  Single <code>DbState(Mutex&lt;Connection&gt;)</code> blocked all concurrent IPC calls across fsync.
                </p>
              </div>

              <div className="p-4 bg-[#EBF1F8] border-[1.5px] border-[#1A2B4C] rounded-md shadow-[3px_3px_0px_#DCE6F2]">
                <div className="flex items-center gap-2 font-pixel text-[10px] font-bold text-[#1A2B4C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A2B4C]" />
                  <span>THE FIX</span>
                </div>
                <h4 className="font-pixel text-xs font-bold text-[#1A2B4C] mt-2">
                  WRITER + WAL POOL
                </h4>
                <p className="font-mono-body text-[11.5px] text-[#475D7A] mt-1 leading-snug">
                  Separated reader/writer pools with <code>r2d2</code> and WAL + NORMAL synchronization.
                </p>
              </div>

              <div className="p-4 bg-white border-[1.5px] border-[#1A2B4C] rounded-md shadow-[3px_3px_0px_#DCE6F2]">
                <div className="flex items-center gap-2 font-pixel text-[10px] font-bold text-[#1A2B4C]">
                  <Activity className="w-3.5 h-3.5 text-[#1A2B4C]" />
                  <span>THE OUTCOME</span>
                </div>
                <h4 className="font-pixel text-xs font-bold text-[#1A2B4C] mt-2">
                  141.5X SPEEDUP
                </h4>
                <p className="font-mono-body text-[11.5px] text-[#475D7A] mt-1 leading-snug">
                  87 ops/s → 12,359 ops/s; P99 latency slashed from 782ms to 9.6ms with 0 timeouts.
                </p>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="pt-4 border-t border-[#DCE6F2] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono-body text-[11.5px] text-[#475D7A]">
                Includes 5 benchmark tables and target remediation blueprints.
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleOpenAuditModal}
                  className="pixel-btn-secondary py-2 px-4 text-[11px]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>READ FULL TECHNICAL DEEP-DIVE</span>
                </button>

                <a
                  href="/audit/tempest-performance-audit.docx"
                  download="tempest-performance-audit.docx"
                  className="pixel-btn-primary py-2 px-4 text-[11px]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD (.DOCX)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
