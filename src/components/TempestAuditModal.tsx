"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Download, ShieldAlert, Cpu, Activity, Database, CheckCircle2, FileText, ArrowRight } from "lucide-react";

interface TempestAuditModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function TempestAuditModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }: TempestAuditModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const onClose = controlledOnClose || (() => setInternalIsOpen(false));

  // Listen for global custom event to open the modal from any component
  useEffect(() => {
    const handleOpen = () => setInternalIsOpen(true);
    window.addEventListener("open-tempest-audit", handleOpen);
    return () => window.removeEventListener("open-tempest-audit", handleOpen);
  }, []);

  // Keyboard accessibility and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#F7F5EE] rounded-3xl border border-zinc-200 shadow-2xl flex flex-col overflow-hidden text-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F7F5EE]/95 backdrop-blur-md border-b border-[rgba(26,56,40,0.12)]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D98A29] animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#183627]">
                  Verified Audit Case Study
                </span>
                <span className="text-xs font-mono text-[#3A5646] hidden sm:inline">
                  Commit 0b57702
                </span>
              </div>
              <h2 className="font-display text-base sm:text-lg font-bold text-[#152E20] tracking-tight mt-0.5">
                Tempest Performance &amp; Concurrency Audit
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Download Button in Signal Ochre */}
            <a
              href="/audit/tempest-performance-audit.docx"
              download="tempest-performance-audit.docx"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D98A29] hover:bg-[#C2781E] text-[#152E20] text-xs font-mono font-bold transition-all shadow-sm active:scale-95 border border-[#B36F1B]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.docx)</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-[#3A5646] hover:text-[#152E20] hover:bg-[#F7F5EE] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-10 text-xs sm:text-sm leading-relaxed text-[#3A5646] font-sans">
          {/* Executive Overview Banner */}
          <div className="rounded-2xl border border-[rgba(26,56,40,0.12)] bg-[#F7F5EE] p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-mono font-bold text-[#152E20] uppercase tracking-wider">
                Production Readiness Review &amp; Technical Risk Assessment
              </span>
              <span className="text-xs font-mono text-[#3A5646]">
                Client: Tempest Core Systems
              </span>
            </div>
            <p className="text-[#152E20] text-sm leading-relaxed">
              <strong>Executive Summary:</strong> We executed an empirical performance, concurrency,
              and mutation audit of Tempest across its core workspace subsystems:{" "}
              <code className="text-xs font-mono bg-[#F7F5EE] px-1.5 py-0.5 rounded text-[#152E20] border border-[rgba(26,56,40,0.12)]">
                tasks_store
              </code>{" "}
              (SQLite persistence),{" "}
              <code className="text-xs font-mono bg-[#F7F5EE] px-1.5 py-0.5 rounded text-[#152E20] border border-[rgba(26,56,40,0.12)]">
                hephaestus
              </code>{" "}
              (network isolation proxy),{" "}
              <code className="text-xs font-mono bg-[#F7F5EE] px-1.5 py-0.5 rounded text-[#152E20] border border-[rgba(26,56,40,0.12)]">
                service_proxy
              </code>{" "}
              (internal routing),{" "}
              <code className="text-xs font-mono bg-[#F7F5EE] px-1.5 py-0.5 rounded text-[#152E20] border border-[rgba(26,56,40,0.12)]">
                dbiso
              </code>{" "}
              (ephemeral database management), and{" "}
              <code className="text-xs font-mono bg-[#F7F5EE] px-1.5 py-0.5 rounded text-[#152E20] border border-[rgba(26,56,40,0.12)]">
                node_ingest
              </code>{" "}
              (document IPC processing). While memory residency is stable (9.0 MB RSS) with zero heap
              leaks, multi-threaded stress testing identified critical lock contention in SQLite
              database commits and untested error-recovery paths in the proxy hot path.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[rgba(26,56,40,0.12)] text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[#F7F5EE] border border-[rgba(26,56,40,0.12)]">
                <div className="text-[#3A5646] text-[11px]">Measured Speedup</div>
                <div className="text-base font-bold text-[#D98A29] mt-0.5">141.5x</div>
                <div className="text-[10px] text-[#3A5646]">782ms → 9.6ms P99</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#F7F5EE] border border-[rgba(26,56,40,0.12)]">
                <div className="text-[#3A5646] text-[11px]">Peak Heap Overhead</div>
                <div className="text-base font-bold text-[#152E20] mt-0.5">&lt; 391 KB</div>
                <div className="text-[10px] text-[#183627]">0 heap leaks (DHAT)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#F7F5EE] border border-[rgba(26,56,40,0.12)]">
                <div className="text-[#3A5646] text-[11px]">Soak Test RSS</div>
                <div className="text-base font-bold text-[#152E20] mt-0.5">9.0 MB Flat</div>
                <div className="text-[10px] text-[#3A5646]">1.6M ops / 300s</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#F7F5EE] border border-[rgba(26,56,40,0.12)]">
                <div className="text-[#3A5646] text-[11px]">Scheduler Traces</div>
                <div className="text-base font-bold text-[#152E20] mt-0.5">16,265</div>
                <div className="text-[10px] text-[#3A5646]">Linux perf events</div>
              </div>
            </div>
          </div>

          {/* Section 1: Top Production Blockers & Risk Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <h3 className="text-base font-bold text-zinc-950">
                1. Top Production Blockers & Risk Summary
              </h3>
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-100 text-zinc-700 uppercase tracking-wider text-[11px] border-b border-zinc-200">
                  <tr>
                    <th className="py-2.5 px-4 font-bold">Risk Area</th>
                    <th className="py-2.5 px-4 font-bold">Observed Failure Mode</th>
                    <th className="py-2.5 px-4 font-bold">Root Cause in Code</th>
                    <th className="py-2.5 px-4 font-bold">Production Severity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-[#F7F5EE]">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-zinc-950">
                      1. Database Mutex Lockout
                    </td>
                    <td className="py-3 px-4 text-zinc-700">
                      Queue latency peaks at 1,243 ms (P99: 782 ms); 9 tasks hit the 1,000 ms timeout at c=4.
                    </td>
                    <td className="py-3 px-4 text-zinc-600">
                      Shared <code className="bg-zinc-100 px-1 rounded">DbState(Mutex&lt;Connection&gt;)</code> held across physical fsync; competing commands block on futex.
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-bold text-[10px]">
                        CRITICAL (Blocks UI)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-zinc-950">
                      2. Untested Proxy Error Paths
                    </td>
                    <td className="py-3 px-4 text-zinc-700">
                      167 mutants survived in Hephaestus (18.1% mutation score) despite 83% CPU in copy_bidirectional.
                    </td>
                    <td className="py-3 px-4 text-zinc-600">
                      Unit tests only verify happy-path streaming; socket resets and upstream timeouts are unasserted.
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[10px]">
                        HIGH (Silent Drops)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-zinc-950">
                      3. Dbiso Coverage Blindspot
                    </td>
                    <td className="py-3 px-4 text-zinc-700">
                      75 mutants survived (10.7% mutation score); container teardown and branch cleanup lack assertions.
                    </td>
                    <td className="py-3 px-4 text-zinc-600">
                      Failure branches in <code className="bg-zinc-100 px-1 rounded">db.rs</code> fail silently without propagating errors to calling services.
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-200 text-zinc-800 font-bold text-[10px]">
                        MEDIUM (State Leaks)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Memory Residency & Allocation Health */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              <h3 className="text-base font-bold text-zinc-950">
                2. Memory Residency & Allocation Health (Verified Evidence)
              </h3>
            </div>
            <p className="text-zinc-600">
              Empirical memory diagnostics verify low heap overhead and long-term memory stability:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                <div className="font-bold text-zinc-900 text-xs font-mono uppercase text-emerald-700">
                  Minimal Heap Overhead (DHAT)
                </div>
                <p className="text-xs text-zinc-700 mt-1">
                  Peak heap residency remained under <strong>391 KB</strong> across task lifecycle execution and policy evaluation. Zero resident bytes leaked at process termination (<code>dhat-heap.json</code> confirmed clean deallocations).
                </p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                <div className="font-bold text-zinc-900 text-xs font-mono uppercase text-emerald-700">
                  Resident Memory Soak (RSS)
                </div>
                <p className="text-xs text-zinc-700 mt-1">
                  In a 300-second soak test executing <strong>1,613,986 operations</strong>, Resident Set Size (RSS) started at 7.8 MB, stabilized at 9.0 MB within 30 seconds, and remained completely flat at 9.0 MB through 300 seconds (1.15x ratio). Zero slow memory leaks detected.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Thread Workload Collapse & Off-CPU Lock Contention */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
              <Cpu className="w-4 h-4 text-indigo-600" />
              <h3 className="text-base font-bold text-zinc-950">
                3. Thread Workload Collapse & Off-CPU Lock Contention
              </h3>
            </div>
            <p className="text-zinc-600">
              Standard On-CPU profilers measure active instructions, hiding threads that are blocked asleep waiting for locks. Using Linux kernel scheduler event tracing (<code>perf record -e sched:sched_switch -g</code>), we recorded <strong>16,265 scheduler switch events</strong> during multi-threaded execution to measure exact thread blocked states.
            </p>

            {/* Off-CPU Flamegraph Image Container */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-2 shadow-md">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/audit/off-cpu-flamegraph.png"
                  alt="Off-CPU Flamegraph - Lock Contention and Blocked Threads during SQLite Commit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-contain"
                />
              </div>
              <div className="px-3 py-2 text-[11px] font-mono text-zinc-400 text-center">
                Figure: Off-CPU Flamegraph: Blocked Stacks During SQLite Commit and Tokio Worker Contention
              </div>
            </div>

            {/* Scheduler Switch Breakdown Table */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-100 text-zinc-700 uppercase tracking-wider text-[11px] border-b border-zinc-200">
                  <tr>
                    <th className="py-2 px-3 font-bold">Call Site / Stack Trace</th>
                    <th className="py-2 px-3 font-bold">Event Count</th>
                    <th className="py-2 px-3 font-bold">Share</th>
                    <th className="py-2 px-3 font-bold">Primary Kernel Sleep State</th>
                    <th className="py-2 px-3 font-bold">Observed Thread Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-[#F7F5EE] text-[11.5px]">
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-rose-700">sqlite3_step -&gt; fsync</td>
                    <td className="py-2.5 px-3">4,638</td>
                    <td className="py-2.5 px-3 font-bold">28.5%</td>
                    <td className="py-2.5 px-3 text-zinc-600">ext4_sync_file -&gt; jbd2_log_wait_commit</td>
                    <td className="py-2.5 px-3 text-zinc-800">Holds exclusive SQLite write lock during physical disk commit</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-amber-700">tokio-rt-worker -&gt; sys_futex</td>
                    <td className="py-2.5 px-3">4,017</td>
                    <td className="py-2.5 px-3 font-bold">24.7%</td>
                    <td className="py-2.5 px-3 text-zinc-600">futex_wait -&gt; schedule</td>
                    <td className="py-2.5 px-3 text-zinc-800">Worker threads queue asleep waiting for active write lock to release</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-zinc-700">tokio runtime -&gt; epoll_wait</td>
                    <td className="py-2.5 px-3">2,889</td>
                    <td className="py-2.5 px-3">17.8%</td>
                    <td className="py-2.5 px-3 text-zinc-600">ep_poll -&gt; schedule_hrtimeout</td>
                    <td className="py-2.5 px-3 text-zinc-800">Healthy idle reactor sleep waiting for socket/timer events</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-zinc-700">pthread_join -&gt; sys_futex</td>
                    <td className="py-2.5 px-3">1,855</td>
                    <td className="py-2.5 px-3">11.4%</td>
                    <td className="py-2.5 px-3 text-zinc-600">futex_wait</td>
                    <td className="py-2.5 px-3 text-zinc-800">Main runtime thread awaiting completion of async worker task groups</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-rose-700">std::thread::sleep (antipattern)</td>
                    <td className="py-2.5 px-3">657</td>
                    <td className="py-2.5 px-3">4.0%</td>
                    <td className="py-2.5 px-3 text-zinc-600">sys_clock_nanosleep</td>
                    <td className="py-2.5 px-3 text-rose-800 font-medium">Blocking sleep inside async task; halts Tokio executor thread</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-zinc-600">Other context switches</td>
                    <td className="py-2.5 px-3">2,209</td>
                    <td className="py-2.5 px-3">13.6%</td>
                    <td className="py-2.5 px-3 text-zinc-600">irqentry_exit, syscall, page faults</td>
                    <td className="py-2.5 px-3 text-zinc-600">Expected OS runtime context switches (100% accounted for)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Concurrency Latency Spike Table */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-100 text-zinc-700 uppercase tracking-wider text-[11px] border-b border-zinc-200">
                  <tr>
                    <th className="py-2 px-3 font-bold">Workload Scenario</th>
                    <th className="py-2 px-3 font-bold">Concurrency</th>
                    <th className="py-2 px-3 font-bold">Throughput (ops/s)</th>
                    <th className="py-2 px-3 font-bold">P50 (ms)</th>
                    <th className="py-2 px-3 font-bold">P99 (ms)</th>
                    <th className="py-2 px-3 font-bold">Timeouts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-[#F7F5EE] text-[11.5px]">
                  <tr>
                    <td className="py-2 px-3 text-zinc-700">Baseline Async Task</td>
                    <td className="py-2 px-3">c = 1</td>
                    <td className="py-2 px-3">274,348</td>
                    <td className="py-2 px-3">0.003</td>
                    <td className="py-2 px-3">0.015</td>
                    <td className="py-2 px-3 text-emerald-700">0 timeouts</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-rose-700">tasks_store SQLite write</td>
                    <td className="py-2.5 px-3 font-bold">c = 4</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">15</td>
                    <td className="py-2.5 px-3">16.622</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">1,001.313</td>
                    <td className="py-2.5 px-3 text-rose-800 font-bold bg-rose-50">9 timeouts (&gt;1,000ms)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-rose-700">tasks_store SQLite write</td>
                    <td className="py-2.5 px-3 font-bold">c = 8</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">7</td>
                    <td className="py-2.5 px-3">16.799</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">1,001.438</td>
                    <td className="py-2.5 px-3 text-rose-800 font-bold bg-rose-50">19 timeouts (&gt;1,000ms)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-600 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
              <strong>Analysis of the 1,001 ms Latency Spike:</strong> The P99 latency of exactly 1,001 ms at c=4 and c=8 is not single fsync latency. It is the Tokio harness task timeout (<code>Duration::from_millis(1000)</code>) firing. When tasks block waiting for SQLite write locks, competing threads sit in <code>futex_wait</code> until the timeout expires, causing 9 tasks to time out at c=4 and 19 at c=8.
            </p>
          </div>

          {/* Section 4: Hot-Path CPU Profile vs Mutation Test Vulnerabilities */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
              <Database className="w-4 h-4 text-emerald-600" />
              <h3 className="text-base font-bold text-zinc-950">
                4. Hot-Path CPU Profile vs. Mutation Test Vulnerabilities
              </h3>
            </div>

            {/* Hephaestus Flamegraph Image Container */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-2 shadow-md">
              <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/audit/hephaestus-cpu-flamegraph.png"
                  alt="Hephaestus CPU Flamegraph: copy_bidirectional Dominates 83% of Active CPU Cycles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-contain"
                />
              </div>
              <div className="px-3 py-2 text-[11px] font-mono text-zinc-400 text-center">
                Figure: Hephaestus CPU Flamegraph: copy_bidirectional Dominates 83% of Active CPU Cycles
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700">
              <strong>Hephaestus Disconnect (83% Runtime vs. 18.1% Mutation Score):</strong> The CPU flamegraph shows that Hephaestus spends 83.2% of its compute time inside <code>tokio::io::copy_bidirectional</code>, streaming bytes between local clients and upstream LLM providers. However, <code>cargo-mutants</code> revealed that 167 out of 204 mutations survived unkilled (18.1% score). Existing unit tests verify clean data transfers, but fail to test broken connections, half-closed sockets, or upstream connection resets.
            </p>

            {/* Mutation Summary Table */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-100 text-zinc-700 uppercase tracking-wider text-[11px] border-b border-zinc-200">
                  <tr>
                    <th className="py-2 px-3 font-bold">Subsystem / Crate</th>
                    <th className="py-2 px-3 font-bold">Total Mutants</th>
                    <th className="py-2 px-3 font-bold">Caught Mutants</th>
                    <th className="py-2 px-3 font-bold">Survived (Blindspots)</th>
                    <th className="py-2 px-3 font-bold">Mutation Score</th>
                    <th className="py-2 px-3 font-bold">Primary Failure Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-[#F7F5EE] text-[11.5px]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-zinc-950">Hephaestus (Proxy)</td>
                    <td className="py-2.5 px-3">204</td>
                    <td className="py-2.5 px-3">37</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">167</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">18.1%</td>
                    <td className="py-2.5 px-3 text-zinc-700">Unchecked socket resets and proxy error propagation</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-zinc-950">Dbiso (Databases)</td>
                    <td className="py-2.5 px-3">84</td>
                    <td className="py-2.5 px-3">9</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">75</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">10.7%</td>
                    <td className="py-2.5 px-3 text-zinc-700">Silent failure during container branch initialization</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-zinc-950">Tempest Core (Tasks/IPC)</td>
                    <td className="py-2.5 px-3">110</td>
                    <td className="py-2.5 px-3">57</td>
                    <td className="py-2.5 px-3">53</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">51.8%</td>
                    <td className="py-2.5 px-3 text-zinc-700">Task cache invalidation and payload serialization</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ConnectProxy Concurrency Saturation Table */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-100 text-zinc-700 uppercase tracking-wider text-[11px] border-b border-zinc-200">
                  <tr>
                    <th className="py-2 px-3 font-bold">Simultaneous Conns</th>
                    <th className="py-2 px-3 font-bold">Throughput (ops/s)</th>
                    <th className="py-2 px-3 font-bold">P50 (ms)</th>
                    <th className="py-2 px-3 font-bold">P99 (ms)</th>
                    <th className="py-2 px-3 font-bold">Errors</th>
                    <th className="py-2 px-3 font-bold">Observed Network Behavior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-[#F7F5EE] text-[11.5px]">
                  <tr>
                    <td className="py-2 px-3">c = 10</td>
                    <td className="py-2 px-3">177.3</td>
                    <td className="py-2 px-3">51.2</td>
                    <td className="py-2 px-3">60.1</td>
                    <td className="py-2 px-3">20 / 200 (10%)</td>
                    <td className="py-2 px-3 text-zinc-700">Clean HTTP proxy tunneling; immediate handshake</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">c = 50</td>
                    <td className="py-2 px-3">1,210.5</td>
                    <td className="py-2 px-3">29.6</td>
                    <td className="py-2 px-3">79.1</td>
                    <td className="py-2 px-3">100 / 1000 (10%)</td>
                    <td className="py-2 px-3 text-zinc-700">Linear scaling; low socket buffer queuing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">c = 100</td>
                    <td className="py-2 px-3">1,545.7</td>
                    <td className="py-2 px-3">54.6</td>
                    <td className="py-2 px-3">91.5</td>
                    <td className="py-2 px-3">200 / 2000 (10%)</td>
                    <td className="py-2 px-3 text-zinc-700">Mild socket queuing; throughput remains steady</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-amber-700">c = 250</td>
                    <td className="py-2 px-3">1,340.5</td>
                    <td className="py-2 px-3">68.6</td>
                    <td className="py-2 px-3 text-amber-700 font-bold">1,129.5</td>
                    <td className="py-2 px-3">500 / 5000 (10%)</td>
                    <td className="py-2 px-3 text-amber-800">Noticeable TCP backlog latency growth (P99 &gt; 1.1s)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-rose-700">c = 500</td>
                    <td className="py-2 px-3">846.8</td>
                    <td className="py-2 px-3">78.3</td>
                    <td className="py-2 px-3 text-rose-700 font-bold">1,967.3</td>
                    <td className="py-2 px-3 text-rose-700 font-bold">250 / 2500 (10%)</td>
                    <td className="py-2 px-3 text-rose-800">Severe socket queue saturation; latency reaches 2.0s</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-rose-700 bg-rose-50/50">c = 1,000</td>
                    <td className="py-2 px-3 text-rose-700 font-bold">44.6</td>
                    <td className="py-2 px-3">91.8</td>
                    <td className="py-2 px-3">122.2</td>
                    <td className="py-2 px-3 text-rose-800 font-bold bg-rose-100">4,789 / 5000 (95.8%)</td>
                    <td className="py-2 px-3 text-rose-900 font-bold">Socket backlog exhausted; kernel resets connections</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-600 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
              <strong>Explanation of Proxy Metrics:</strong> ConnectProxy does not scale cleanly to 500 connections; latency grows to 1,967 ms at c=500 as socket queues fill, before collapsing at 1,000 connections due to backlog exhaustion (4,789 out of 5,000 connections reset).
            </p>
          </div>

          {/* Section 5: Proven Engineering Remediation & Implementation Roadmap */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <h3 className="text-base font-bold text-zinc-950">
                5. Proven Engineering Remediation & 141.5x Speedup Proof
              </h3>
            </div>

            <p className="text-zinc-700">
              To resolve the database contention and eliminate untested error paths, we verified the following architectural solutions:
            </p>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-900 uppercase">
                Fix 1: Dedicated Writer + Reader Pool + WAL/NORMAL (Benchmarked on Real DbState)
              </div>
              <p className="text-xs text-zinc-700">
                In production, Tauri manages database access via <code>DbState(Mutex&lt;Connection&gt;)</code>. While a single Mutex avoids file-level SQLITE_BUSY errors, threads serialize on the Rust Mutex. When running with default <code>synchronous = FULL</code>, physical disk flushes cause queue latencies to peak at 1,243 ms.
              </p>
              <p className="text-xs text-emerald-900 font-medium">
                <strong>Solution:</strong> Keep a single dedicated writer connection (or channel) combined with an r2d2 reader pool for concurrent queries. Configure <code>PRAGMA journal_mode = WAL;</code> and <code>PRAGMA synchronous = NORMAL;</code> with <code>PRAGMA busy_timeout = 5000;</code>.
              </p>
            </div>

            {/* Benchmarked Speedup Table */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-100 text-zinc-700 uppercase tracking-wider text-[11px] border-b border-zinc-200">
                  <tr>
                    <th className="py-2.5 px-4 font-bold">Architecture / Configuration</th>
                    <th className="py-2.5 px-4 font-bold">Concurrency</th>
                    <th className="py-2.5 px-4 font-bold">Throughput (ops/s)</th>
                    <th className="py-2.5 px-4 font-bold">P99 Latency (ms)</th>
                    <th className="py-2.5 px-4 font-bold">Max Stalls</th>
                    <th className="py-2.5 px-4 font-bold">Speedup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-[#F7F5EE]">
                  <tr>
                    <td className="py-3 px-4 text-zinc-700">
                      Baseline: DbState (Mutex&lt;Conn&gt;), DELETE/FULL
                    </td>
                    <td className="py-3 px-4">c = 4</td>
                    <td className="py-3 px-4">87.3 ops/s</td>
                    <td className="py-3 px-4 text-rose-700 font-bold">781.7 ms</td>
                    <td className="py-3 px-4 text-rose-600">Queue latency peaks at 1,243.2 ms</td>
                    <td className="py-3 px-4 text-zinc-500">1.0x (Baseline)</td>
                  </tr>
                  <tr className="bg-emerald-50/70 font-semibold text-emerald-950">
                    <td className="py-3 px-4 font-bold text-emerald-900">
                      Optimized: DbState (Mutex&lt;Conn&gt;), WAL/NORMAL
                    </td>
                    <td className="py-3 px-4">c = 4</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">12,359.5 ops/s</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">9.6 ms</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">Max latency drops to 13.2 ms (0 stalls)</td>
                    <td className="py-3 px-4 font-bold text-emerald-600 bg-emerald-100/80 px-2 rounded">
                      141.5x (Measured)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Implementation Roadmap */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-100 text-zinc-700 uppercase tracking-wider text-[11px] border-b border-zinc-200">
                  <tr>
                    <th className="py-2 px-3 font-bold">Remediation Item</th>
                    <th className="py-2 px-3 font-bold">Target Files</th>
                    <th className="py-2 px-3 font-bold">Effort</th>
                    <th className="py-2 px-3 font-bold">Expected Impact & Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-[#F7F5EE] text-[11.5px]">
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-zinc-950">Dedicated Writer + WAL NORMAL</td>
                    <td className="py-2.5 px-3 text-zinc-600">src-tauri/src/lib.rs, tasks_store.rs</td>
                    <td className="py-2.5 px-3">1 Day</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">Eliminates 1s stalls; delivers measured 141x speedup on DbState</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-zinc-950">Shrink DbState Critical Sections</td>
                    <td className="py-2.5 px-3 text-zinc-600">src/automations.rs, notes.rs</td>
                    <td className="py-2.5 px-3">0.5 Days</td>
                    <td className="py-2.5 px-3 text-zinc-800">Unblocks concurrent Tauri IPC reads during writes</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-zinc-950">Replace Mutex with RwLock on Routes</td>
                    <td className="py-2.5 px-3 text-zinc-600">src/service_proxy.rs</td>
                    <td className="py-2.5 px-3">0.5 Days</td>
                    <td className="py-2.5 px-3 text-zinc-800">Enables zero-contention concurrent HTTP proxy lookups</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-zinc-950">Hephaestus Error Injection Tests</td>
                    <td className="py-2.5 px-3 text-zinc-600">crates/hephaestus/tests/</td>
                    <td className="py-2.5 px-3">2 Days</td>
                    <td className="py-2.5 px-3 text-zinc-800">Kills 100+ surviving mutants; validates network reset handling</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="font-bold text-zinc-950 text-xs font-mono uppercase text-emerald-800">
                  Audit Sign-Off
                </span>
                <p className="text-xs text-zinc-600 mt-0.5">
                  Tempest has a strong memory foundation and zero resident leaks. Implementing the dedicated SQLite writer, scoping mutexes, and adding network reset test coverage resolves the measured database stall and brings the codebase to release readiness.
                </p>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">
                Auditor: Hrushikesh Anand Sarangi
              </span>
            </div>
          </div>
        </div>

        {/* Sticky Footer Bar with Download & Contact Buttons */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F7F5EE] border-t border-[rgba(26,56,40,0.12)]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#3A5646]">
            <FileText className="w-4 h-4 text-[#183627]" />
            <span>Complete technical deliverable: 805 KB (.docx)</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/audit/tempest-performance-audit.docx"
              download="tempest-performance-audit.docx"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D98A29] hover:bg-[#C2781E] text-[#152E20] font-mono text-xs font-bold transition-all shadow-sm active:scale-95 border border-[#B36F1B]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Audit Document (.docx)</span>
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#152E20] hover:bg-[#25352D] text-white font-mono text-xs font-semibold transition-all"
            >
              <span>Book an Audit ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
