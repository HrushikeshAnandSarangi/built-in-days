"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Terminal,
  Laptop,
  Globe,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Activity,
  Check,
} from "lucide-react";

export function LottieMotionStage() {
  const [activeTab, setActiveTab] = useState<"web" | "desktop" | "spatial">("web");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [deployStep, setDeployStep] = useState<"idle" | "building" | "live">("live");

  const handleTriggerDeploy = () => {
    setDeployStep("building");
    setTimeout(() => {
      setDeployStep("live");
    }, 1200);
  };

  return (
    <div className="w-full my-12">
      {/* Playful Lottie-Style Animated SVG Character Troop */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="relative h-32 w-full max-w-md flex items-end justify-center gap-6 sm:gap-10 select-none">
          {/* Character 1: The Bot (Rounded Box) */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
              {/* Antenna */}
              <line x1="34" y1="6" x2="34" y2="16" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
              <motion.circle
                cx="34"
                cy="6"
                r="3"
                fill="#059669"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />

              {/* Head / Body */}
              <rect x="8" y="16" width="52" height="42" rx="12" fill="#09090b" stroke="#27272a" strokeWidth="2" />
              
              {/* Screen Face */}
              <rect x="14" y="22" width="40" height="28" rx="8" fill="#18181b" />

              {/* Eyes with blink animation */}
              <motion.g
                animate={{
                  scaleY: [1, 1, 0.1, 1, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  times: [0, 0.45, 0.5, 0.55, 1],
                }}
              >
                <circle cx="26" cy="34" r="3.5" fill="#10b981" />
                <circle cx="42" cy="34" r="3.5" fill="#10b981" />
                <circle cx="27" cy="33" r="1.2" fill="#ffffff" />
                <circle cx="43" cy="33" r="1.2" fill="#ffffff" />
              </motion.g>

              {/* Smile / Mouth */}
              <path d="M30 42 Q34 45 38 42" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" />

              {/* Feet */}
              <rect x="20" y="58" width="8" height="6" rx="3" fill="#059669" />
              <rect x="40" y="58" width="8" height="6" rx="3" fill="#059669" />
            </svg>
            <span className="text-[10px] font-mono text-zinc-500 mt-1">Web Bot</span>
          </motion.div>

          {/* Character 2: The Star (Geometric Spark) */}
          <motion.div
            animate={{
              y: [0, -9, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
              {/* 5-pointed star body */}
              <path
                d="M38 6 L46 25 L66 26 L50 39 L55 58 L38 47 L21 58 L26 39 L10 26 L30 25 Z"
                fill="#ffffff"
                stroke="#09090b"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Eyes */}
              <motion.g
                animate={{
                  scaleY: [1, 1, 0.1, 1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  times: [0, 0.6, 0.65, 0.7, 1],
                }}
              >
                <circle cx="33" cy="34" r="3" fill="#09090b" />
                <circle cx="43" cy="34" r="3" fill="#09090b" />
                <circle cx="34" cy="33" r="1" fill="#ffffff" />
                <circle cx="44" cy="33" r="1" fill="#ffffff" />
              </motion.g>

              {/* Rosy cheeks */}
              <circle cx="28" cy="38" r="2" fill="#059669" opacity="0.4" />
              <circle cx="48" cy="38" r="2" fill="#059669" opacity="0.4" />

              {/* Mouth */}
              <path d="M35 40 Q38 43 41 40" stroke="#09090b" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Legs */}
              <line x1="32" y1="58" x2="32" y2="70" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="44" y1="58" x2="44" y2="70" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="29" y="68" width="8" height="4" rx="2" fill="#059669" />
              <rect x="41" y="68" width="8" height="4" rx="2" fill="#059669" />
            </svg>
            <span className="text-[10px] font-mono text-zinc-500 mt-1">Tauri Star</span>
          </motion.div>

          {/* Character 3: The Capsule (Pill Headphone) */}
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
              {/* Headband */}
              <path d="M16 32 C16 16 52 16 52 32" stroke="#059669" strokeWidth="3" fill="none" strokeLinecap="round" />
              <rect x="12" y="28" width="6" height="12" rx="3" fill="#059669" />
              <rect x="50" y="28" width="6" height="12" rx="3" fill="#059669" />

              {/* Pill Body */}
              <rect x="20" y="20" width="28" height="40" rx="14" fill="#09090b" stroke="#27272a" strokeWidth="2" />

              {/* Eyes */}
              <circle cx="29" cy="34" r="2.5" fill="#10b981" />
              <circle cx="39" cy="34" r="2.5" fill="#10b981" />

              {/* Mouth */}
              <circle cx="34" cy="42" r="2" fill="#ffffff" />

              {/* Little Shoes */}
              <rect x="24" y="60" width="7" height="4" rx="2" fill="#059669" />
              <rect x="37" y="60" width="7" height="4" rx="2" fill="#059669" />
            </svg>
            <span className="text-[10px] font-mono text-zinc-500 mt-1">Audio Pill</span>
          </motion.div>
        </div>
      </div>

      {/* Main Screen Showcase (Inspired by Image 4) */}
      <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6 sm:p-10 shadow-2xl text-white">
        {/* Top Header Inside the Frame */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Your application, simplified.
          </h3>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Interactive preview of live software products engineered for speed, cross-platform
            reach, and resilience.
          </p>
        </div>

        {/* Tab Switcher (Image 4 style buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "web", label: "Next.js Web App", icon: Globe },
            { id: "desktop", label: "Tauri Desktop Suite", icon: Laptop },
            { id: "spatial", label: "Real-Time Spatial Console", icon: Terminal },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                  isCurrent
                    ? "bg-zinc-800 text-white border-zinc-600 shadow-sm font-semibold"
                    : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-emerald-400" : "text-zinc-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Nested Interactive Screen Window Mockup */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 overflow-hidden shadow-inner">
          {/* Window Chrome Header */}
          <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">
                {activeTab === "web"
                  ? "https://oxide.app/console"
                  : activeTab === "desktop"
                  ? "Polynotes v2.4.0 — whisper.cpp native"
                  : "https://auric-spatial.internal/pipeline"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 text-[11px]">
                {activeTab === "web"
                  ? "PINGORA REVERSE PROXY ACTIVE"
                  : activeTab === "desktop"
                  ? "ON-DEVICE INFERENCE READY"
                  : "MCP SYNC CONNECTED"}
              </span>
            </div>
          </div>

          {/* Screen Content Area */}
          <div className="p-6 sm:p-8 min-h-[340px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === "web" && (
                <motion.div
                  key="web-screen"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase">
                        Deployment Overview · Next.js + Axum Core
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        Oxide Zero-Overhead Web Platform
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={handleTriggerDeploy}
                      disabled={deployStep === "building"}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-medium transition-all shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        {deployStep === "building" ? "Building Static Nix..." : "Trigger Deployment"}
                      </span>
                    </button>
                  </div>

                  {/* Metrics preview row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/60">
                      <div className="text-xs font-mono text-zinc-400">Container Footprint</div>
                      <div className="text-2xl font-mono font-bold text-white mt-1">814 kB</div>
                      <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
                        -99.96% from 2.19 GB
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/60">
                      <div className="text-xs font-mono text-zinc-400">Subdomain Lookup</div>
                      <div className="text-2xl font-mono font-bold text-white mt-1">270 ns</div>
                      <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
                        O(1) lock-free DashMap
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/60">
                      <div className="text-xs font-mono text-zinc-400">Live Telemetry</div>
                      <div className="text-2xl font-mono font-bold text-white mt-1">3.6M ops/s</div>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                        Continuous benchmark
                      </div>
                    </div>
                  </div>

                  {/* Terminal log snippet */}
                  <div className="p-4 rounded-xl bg-zinc-950 font-mono text-xs text-zinc-300 border border-zinc-800/80">
                    <div className="flex items-center gap-2 text-zinc-500 pb-2 border-b border-zinc-900">
                      <span>BUILD_OUTPUT</span>
                      <span className="text-emerald-500">
                        {deployStep === "building" ? "[BUILDING...]" : "[DEPLOYED OK]"}
                      </span>
                    </div>
                    <div className="pt-2 text-zinc-400 space-y-1">
                      <div>$ nix-build -A package.static --pure</div>
                      <div>
                        [+] Container size: <span className="text-emerald-400">814,240 bytes</span> (Nix closure minimal)
                      </div>
                      <div>
                        [+] Pingora proxy routes registered: <span className="text-white">10,000 subdomains</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "desktop" && (
                <motion.div
                  key="desktop-screen"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase">
                        Cross-Platform Desktop Application · Tauri 2.0 + Rust
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        Polynotes Speech Intelligence
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-medium transition-all border border-zinc-700"
                    >
                      <Play className={`w-3.5 h-3.5 ${isPlayingAudio ? "text-emerald-400" : ""}`} />
                      <span>{isPlayingAudio ? "Pause Audio Stream" : "Simulate Local Audio"}</span>
                    </button>
                  </div>

                  {/* Audio waveform visualization */}
                  <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                      <span>WEBRTC VAD SILENCE STRIPPER</span>
                      <span className="text-emerald-400">INFERENCE LATENCY: 2.4s</span>
                    </div>

                    {/* Animated Waveform Bars */}
                    <div className="h-16 flex items-center justify-between gap-1 py-2">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: isPlayingAudio
                              ? [8, Math.sin(i * 0.4) * 24 + 32, 8]
                              : [12, 18, 12],
                          }}
                          transition={{
                            duration: 0.8 + (i % 5) * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`w-1.5 rounded-full ${
                            isPlayingAudio ? "bg-emerald-500" : "bg-zinc-700"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                      <span className="text-emerald-400 font-semibold">[whisper.cpp FFI]:</span>{" "}
                      &quot;Transcribing live audio offline with zero external cloud latency...&quot;
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-center">
                      <span className="text-zinc-500 block text-[10px]">BINARY SIZE</span>
                      <span className="text-white font-bold">&lt;25 MB</span>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-center">
                      <span className="text-zinc-500 block text-[10px]">API TOKEN COST</span>
                      <span className="text-emerald-400 font-bold">$0.00</span>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-center">
                      <span className="text-zinc-500 block text-[10px]">LANGUAGES</span>
                      <span className="text-white font-bold">6+ Code-Switch</span>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-center">
                      <span className="text-zinc-500 block text-[10px]">PLATFORMS</span>
                      <span className="text-white font-bold">Mac / Win / Linux</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "spatial" && (
                <motion.div
                  key="spatial-screen"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase">
                        Enterprise Web Pipeline · MCP Agent Architecture
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        Auric Satellite Geospatial Engine
                      </h4>
                    </div>

                    <div className="text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800">
                      10+ Analysts Concurrent
                    </div>
                  </div>

                  {/* Geospatial pipeline inspector */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950">
                      <div className="text-xs font-mono text-zinc-400 mb-2">
                        COLLAPSED FIVE-STEP WORKFLOW
                      </div>
                      <ul className="space-y-2 text-xs font-mono text-zinc-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Satellite Ingestion & Tiling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>MCP Agent Verification Queries</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Google Earth Sync with Zero Stale Reads</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs">
                      <div className="text-xs font-mono text-zinc-400 mb-2">
                        CENTRAL SPATIAL DATABASE
                      </div>
                      <div className="text-zinc-400 leading-relaxed">
                        Engineered concurrent spatial reads across multiple analysts editing
                        geospatial polygons in real time.
                      </div>
                      <div className="mt-3 text-emerald-400 text-[11px]">
                        PostGIS · Custom MCP Server · Web Telemetry
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
