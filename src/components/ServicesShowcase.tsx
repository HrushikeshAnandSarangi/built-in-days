"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Square, X, ArrowRight, ExternalLink } from "lucide-react";
import {
  PixelFlowerIcon,
  PixelBrushIcon,
  PixelEngineerIcon,
  PixelCat,
  PixelSparkle,
} from "./ui/pixel-sprites";

interface ServiceData {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stack: string[];
  outcomeStat: string;
  ctaLabel: string;
  hasAuditAction?: boolean;
  icon: React.ReactNode;
}

function PixelMiniCRT() {
  return (
    <svg width="46" height="42" viewBox="0 0 24 22" fill="none" shapeRendering="crispEdges">
      <rect x="2" y="2" width="20" height="14" fill="#1A2B4C" />
      <rect x="3" y="3" width="18" height="12" fill="#DCE6F2" />
      <rect x="5" y="5" width="14" height="8" fill="#1A2B4C" />
      <rect x="8" y="8" width="2" height="2" fill="#DCE6F2" />
      <rect x="14" y="8" width="2" height="2" fill="#DCE6F2" />
      <rect x="10" y="11" width="4" height="1" fill="#A3BFE0" />
      <rect x="8" y="16" width="8" height="2" fill="#1A2B4C" />
      <rect x="4" y="18" width="16" height="3" fill="#1A2B4C" />
      <rect x="5" y="19" width="14" height="1" fill="#A3BFE0" />
    </svg>
  );
}

export function ServicesShowcase() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("build");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  const handleOpenAudit = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tempest-audit"));
    }
  };

  const servicesList: ServiceData[] = [
    {
      id: "build",
      num: "01",
      title: "BUILD YOUR APP",
      shortDesc: "Next.js web apps & <25MB Tauri desktop software shipped in days.",
      tagline: "0 to 1 Full-Stack & Desktop Engineering",
      description:
        "Turn your product requirement into a rock-solid, production-ready application. Strict TypeScript schemas, responsive interfaces, offline-first SQLite sync, and resilient Rust or Node endpoints engineered without boilerplate.",
      deliverables: [
        "Full-Stack Next.js, React & reactive Tailwind CSS interfaces",
        "Cross-platform Tauri 2.0 desktop binaries compiled under 25MB",
        "Strict PostgreSQL / SQLite schemas with indexed queries",
        "Modular codebase, CI scripts & full source handover",
      ],
      stack: ["Next.js", "TypeScript", "Rust", "Tauri 2.0", "PostgreSQL"],
      outcomeStat: "4-OS Targets · Offline-First Ready",
      ctaLabel: "BUILD APP",
      icon: <PixelMiniCRT />,
    },
    {
      id: "accelerate",
      num: "02",
      title: "FIX & ACCELERATE",
      shortDesc: "Bisect bottlenecks, shrink bloated containers & crush P99 latency.",
      tagline: "Performance Engineering & Speed Rescue",
      description:
        "When apps stall or cloud bills surge, I instrument your hotpaths with flamegraphs and code-level tracing. I patch lock contention, eliminate heap leaks, tune SQL queries, and verify gains with deterministic benchmarks.",
      deliverables: [
        "Frontend re-render & bundle splitting elimination",
        "Sub-millisecond EXPLAIN ANALYZE database index redesign",
        "Container minimization (slashed 2.19 GB → 814 kB in prod)",
        "Reproducible Criterion.rs / k6 before & after reports",
      ],
      stack: ["Linux Perf", "Criterion.rs", "EXPLAIN ANALYZE", "Docker", "LLVM"],
      outcomeStat: "99.96% Image Trim · 270ns Routing",
      ctaLabel: "SPEED UP APP",
      icon: <PixelBrushIcon size={44} />,
    },
    {
      id: "audit",
      num: "03",
      title: "SYSTEMS & CONCURRENCY AUDIT",
      shortDesc: "Off-CPU kernel flamegraphs, WAL lock fixes & on-device AI FFI.",
      tagline: "Concurrency Diagnostics & Local Inference",
      description:
        "Before expensive rewrites, get empirical proof of hidden mutex stalls, unhandled proxy error drops, and thread starvation — or eliminate recurring AI token bills with native C++/Rust whisper.cpp FFI pipelines.",
      deliverables: [
        "Kernel Off-CPU traces exposing futex_wait & fsync blocks",
        "Dedicated SQLite writer + WAL r2d2 read pool remediation",
        "Mutation & fault injection testing (cargo-mutants)",
        "Native whisper.cpp / WebRTC-VAD zero-API-tax inference",
      ],
      stack: ["Off-CPU Traces", "SQLite WAL", "cargo-mutants", "whisper.cpp", "C++/Rust FFI"],
      outcomeStat: "141.5x Speedup · 0 Heap Leaks",
      ctaLabel: "REQUEST AUDIT",
      hasAuditAction: true,
      icon: <PixelEngineerIcon size={44} />,
    },
  ];

  const activeService =
    servicesList.find((s) => s.id === selectedServiceId) || servicesList[0];

  const handleCardClick = (id: string) => {
    if (selectedServiceId === id && isDrawerOpen) {
      return;
    }
    setSelectedServiceId(id);
    setIsDrawerOpen(true);
  };

  return (
    <section
      id="services"
      className="relative py-14 sm:py-20 bg-[#F7F6F1] border-t border-[#DCE6F2] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* TOP HEADER ROW matching reference: Badge on left, Window controls [-][□][×] on right */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="pixel-pill-badge">
              <span>SERVICES</span>
            </div>
            <PixelSparkle size={16} delay={0.3} />
            <span className="hidden sm:inline font-mono-body text-xs text-[#475D7A]">
              Click any card to inspect technical deliverables
            </span>
          </div>

          {/* Interactive Pixel Window Controls [-][□][×] */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="w-6 h-6 bg-white border-[1.5px] border-[#1A2B4C] rounded-xs flex items-center justify-center hover:bg-[#DCE6F2] transition-colors cursor-pointer"
              title="Minimize service spec panel"
              aria-label="Minimize spec panel"
            >
              <Minus className="w-3 h-3 text-[#1A2B4C]" />
            </button>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="w-6 h-6 bg-white border-[1.5px] border-[#1A2B4C] rounded-xs flex items-center justify-center hover:bg-[#DCE6F2] transition-colors cursor-pointer"
              title="Expand service spec panel"
              aria-label="Expand spec panel"
            >
              <Square className="w-2.5 h-2.5 text-[#1A2B4C]" />
            </button>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="w-6 h-6 bg-[#DCE6F2] border-[1.5px] border-[#1A2B4C] rounded-xs flex items-center justify-center hover:bg-[#A3BFE0] transition-colors cursor-pointer"
              title="Toggle service spec panel"
              aria-label="Toggle spec panel"
            >
              <X className="w-3 h-3 text-[#1A2B4C]" />
            </button>
          </div>
        </div>

        {/* 3 SERVICE CARDS GRID (Exact framed pixel layout from reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 relative z-10">
          {servicesList.map((service) => {
            const isActive = service.id === selectedServiceId && isDrawerOpen;
            return (
              <motion.div
                key={service.id}
                onClick={() => handleCardClick(service.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                className={`cursor-pointer rounded-md border-[1.5px] border-[#1A2B4C] p-5 transition-all flex items-start gap-4 ${
                  isActive
                    ? "bg-[#EBF1F8] shadow-[4px_4px_0px_#1A2B4C] -translate-y-0.5"
                    : "bg-white shadow-[3px_3px_0px_#DCE6F2] hover:shadow-[4px_4px_0px_#A3BFE0]"
                }`}
              >
                {/* Left Pixel Sprite Box */}
                <div className="shrink-0 w-14 h-14 rounded border-[1.5px] border-[#1A2B4C] bg-[#F7F6F1] flex items-center justify-center shadow-[2px_2px_0px_#DCE6F2]">
                  {service.icon}
                </div>

                {/* Right Text Block */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full space-y-2.5">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-pixel text-[9px] text-[#6C8EBF] font-bold">
                        SERVICE {service.num}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#1A2B4C] animate-pulse" />
                      )}
                    </div>
                    <h3 className="font-pixel text-xs sm:text-[13px] font-bold text-[#1A2B4C] leading-snug uppercase">
                      {service.title}
                    </h3>
                    <p className="font-mono-body text-[11.5px] text-[#475D7A] leading-relaxed mt-1.5">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-1 flex items-center gap-1.5 font-pixel text-[10px] font-bold text-[#1A2B4C]">
                    <span>{isActive ? "INSPECTING" : "LEARN MORE"}</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EXPANDED SERVICE SPEC OS WINDOW (Micro-interactive Inspection Panel) */}
        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-6 pixel-window overflow-hidden"
            >
              {/* Window Titlebar */}
              <div className="px-4 py-2.5 bg-[#DCE6F2] border-b-[1.5px] border-[#1A2B4C] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 bg-[#1A2B4C] text-[#F7F6F1] font-pixel text-[9px] rounded-xs">
                    {activeService.num}
                  </span>
                  <span className="font-pixel text-[11px] font-bold text-[#1A2B4C] uppercase tracking-wider truncate">
                    {activeService.tagline}
                  </span>
                </div>
                <span className="hidden sm:inline-block font-pixel text-[10px] text-[#1A2B4C] bg-white px-2 py-0.5 rounded border border-[#1A2B4C]">
                  {activeService.outcomeStat}
                </span>
              </div>

              {/* Window Body */}
              <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <p className="font-mono-body text-xs sm:text-[13px] text-[#475D7A] leading-relaxed">
                    {activeService.description}
                  </p>

                  {/* Tech Arsenal Tags */}
                  <div className="flex flex-wrap gap-2">
                    {activeService.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#EBF1F8] border border-[#1A2B4C] rounded-xs font-pixel text-[10px] font-bold text-[#1A2B4C]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a href="#contact" className="pixel-btn-primary py-2 px-4 text-[11px]">
                      <span>{activeService.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    {activeService.hasAuditAction && (
                      <button
                        type="button"
                        onClick={handleOpenAudit}
                        className="pixel-btn-secondary py-2 px-4 text-[11px]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>READ CASE STUDY</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Deliverables Box */}
                <div className="lg:col-span-5 bg-[#F7F6F1] border-[1.5px] border-[#1A2B4C] rounded-md p-4 shadow-[3px_3px_0px_#DCE6F2] space-y-2.5">
                  <div className="font-pixel text-[10px] font-bold text-[#1A2B4C] uppercase tracking-wider border-b border-[#DCE6F2] pb-1.5">
                    DELIVERABLES CHECKLIST
                  </div>
                  <ul className="space-y-2">
                    {activeService.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-mono-body text-[11.5px] text-[#1A2B4C] leading-snug"
                      >
                        <span className="mt-0.5 w-4 h-4 shrink-0 rounded-xs bg-[#DCE6F2] border border-[#1A2B4C] flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-[#1A2B4C]" />
                        </span>
                        <span className="text-[#475D7A]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom corner cute pixel flora & cat accents mirroring reference */}
        <div className="hidden lg:flex items-center justify-between pt-4 pointer-events-none select-none opacity-90">
          <div className="-mb-6">
            <PixelFlowerIcon size={30} />
          </div>
          <div className="-mb-6 pointer-events-auto">
            <PixelCat />
          </div>
        </div>
      </div>
    </section>
  );
}
