"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Activity, Mic, Radio, Network } from "lucide-react";

/**
 * 1. Oxide Cloud Engine Screen (Web Cloud Deployment Console)
 * Inspired by modern developer cloud consoles (Vercel/Railway/Cloudflare)
 */
export function OxideScreen() {
  return (
    <div className="w-full h-full bg-zinc-950 text-white font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-200 font-semibold text-xs sm:text-sm">app.oxide.cloud</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400 text-[11px]">edge-us-east-1</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px]">
            HEALTHY · 99.99% UP
          </span>
        </div>
      </div>

      {/* Main Console Content */}
      <div className="my-auto py-3 space-y-3">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
            <div className="text-[10px] text-zinc-500">CONTAINER CLOSURE</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">814 kB</div>
            <div className="text-[10px] text-emerald-400">was 2.19 GB (-99.9%)</div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
            <div className="text-[10px] text-zinc-500">ROUTING OVERHEAD</div>
            <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">270 ns</div>
            <div className="text-[10px] text-zinc-400">zero-alloc proxy</div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
            <div className="text-[10px] text-zinc-500">DEPLOY DURATION</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">1.42 s</div>
            <div className="text-[10px] text-emerald-400">instant atomic flip</div>
          </div>
        </div>

        {/* Live Build Stream Terminal */}
        <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 space-y-1 text-[11px]">
          <div className="flex items-center justify-between text-zinc-500 text-[10px] pb-1 border-b border-zinc-800/60">
            <span>nix-build-stream.log</span>
            <span className="text-emerald-400">STAGE 4/4 COMPLETED</span>
          </div>
          <div className="text-zinc-400 flex items-center gap-2">
            <span className="text-emerald-500">&gt;</span>
            <span>nix-build -A package.oxide --pure-eval</span>
          </div>
          <div className="text-zinc-500 truncate">
            [closure-tree] stripped 318 unused dynamic symbols · zero runtime glibc
          </div>
          <div className="text-emerald-400 flex items-center gap-2">
            <span>[success]</span>
            <span className="text-zinc-300">Artifact deployed to 12 edge points of presence.</span>
          </div>
        </div>
      </div>

      {/* Bottom Status Footer */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 pt-2 text-[10px] text-zinc-500">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-emerald-400" />
          <span>PRODUCTION CLUSTER: LIVE</span>
        </div>
        <span className="text-zinc-400 font-mono">HASH: 0x9f4a..7bc2</span>
      </div>
    </div>
  );
}

/**
 * 2. Polynotes Screen (Tauri 2.0 Native Desktop App)
 * Audio transcription & research workspace with real-time audio waveform
 */
export function PolynotesScreen() {
  return (
    <div className="w-full h-full bg-zinc-950 text-white font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="text-zinc-300 font-semibold text-xs sm:text-sm ml-2">
            Polynotes v2.4.0
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-[10px] text-emerald-400">Tauri 2.0 Local Engine</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] text-zinc-400 font-mono">WHISPER.CPP READY</span>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div className="my-auto py-2 space-y-3">
        {/* Active Audio Waveform Visualizer */}
        <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <div className="flex items-center justify-between text-[11px] mb-2">
            <div className="flex items-center gap-2 text-zinc-300">
              <Mic className="w-3.5 h-3.5 text-emerald-400" />
              <span>Input: 48kHz Stereo · PCM Direct Stream</span>
            </div>
            <span className="text-emerald-400 font-bold">00:42.18 / 60:00.00</span>
          </div>

          {/* Equalizer Waveform Bars */}
          <div className="h-10 sm:h-12 flex items-center justify-between gap-1 px-1 bg-zinc-950/80 rounded border border-zinc-800/60 overflow-hidden">
            {[18, 42, 65, 80, 50, 24, 75, 95, 40, 85, 30, 60, 90, 70, 35, 80, 55, 90, 45, 60, 75, 85, 40, 65, 30].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-full"
                style={{
                  backgroundColor: i % 3 === 0 ? "#10b981" : i % 2 === 0 ? "#059669" : "#ffffff",
                  opacity: i % 4 === 0 ? 0.9 : 0.6,
                }}
                animate={{ height: [`${Math.max(12, h * 0.4)}%`, `${h}%`, `${Math.max(15, h * 0.6)}%`] }}
                transition={{
                  duration: 0.8 + (i % 5) * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Real-time Transcription Stream */}
        <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] space-y-1.5">
          <div className="flex items-center justify-between text-zinc-400 text-[10px]">
            <span>live on-device speech-to-text token stream</span>
            <span className="text-emerald-400">48x REAL-TIME</span>
          </div>
          <p className="text-zinc-200 leading-relaxed text-xs">
            &quot;The distributed consensus loop resolved in 3.1ms without dropping socket connections...&quot;
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 pt-2 text-[10px] text-zinc-500">
        <span className="text-emerald-400">MEMORY FOOTPRINT: 24.6 MB · 100% PRIVATE</span>
        <span>ZERO CLOUD TRANSMISSION</span>
      </div>
    </div>
  );
}

/**
 * 3. Auric Geospatial Screen (Spatial Analysis & Polygon Inspector)
 */
export function AuricScreen() {
  return (
    <div className="w-full h-full bg-zinc-950 text-white font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-zinc-200 font-semibold text-xs sm:text-sm">Auric Spatial</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400 text-[11px]">GeoJSON Vector Engine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-emerald-400 text-[10px]">
            12ms SPATIAL QUERY
          </span>
        </div>
      </div>

      {/* Map Grid Visualizer */}
      <div className="my-auto py-2">
        <div className="relative h-28 sm:h-32 rounded-lg bg-zinc-900/80 border border-zinc-800 overflow-hidden flex items-center justify-center">
          {/* Subtle SVG Map Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 120">
            <line x1="0" y1="30" x2="400" y2="30" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="0" y1="60" x2="400" y2="60" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="0" y1="90" x2="400" y2="90" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="100" y1="0" x2="100" y2="120" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="200" y1="0" x2="200" y2="120" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="300" y1="0" x2="300" y2="120" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>

          {/* Animated Geospatial Polygon Scan */}
          <motion.svg className="relative w-full h-full" viewBox="0 0 400 120">
            <polygon
              points="110,35 240,25 310,75 220,105 130,85"
              fill="rgba(16, 185, 129, 0.12)"
              stroke="#10b981"
              strokeWidth="2"
            />
            <circle cx="110" cy="35" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="240" cy="25" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="310" cy="75" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="220" cy="105" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="130" cy="85" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />

            {/* Scanning Radar Arc */}
            <motion.line
              x1="220"
              y1="65"
              x2="310"
              y2="75"
              stroke="#34d399"
              strokeWidth="1.5"
              strokeDasharray="2 2"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "220px 65px" }}
            />
          </motion.svg>

          {/* Coordinate Tag Overlay */}
          <div className="absolute top-2 left-3 text-[10px] text-zinc-400 font-mono bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
            BOUNDS: 22.2492° N, 84.8828° E
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 pt-2 text-[10px] text-zinc-500">
        <span className="text-emerald-400">INDEX: R-TREE ACCELERATED</span>
        <span>MCP AGENT PROTOCOL: ACTIVE</span>
      </div>
    </div>
  );
}

/**
 * 4. N6T Health Screen (Clinical Lab EHR Diagnostic Monitor)
 */
export function N6tScreen() {
  return (
    <div className="w-full h-full bg-zinc-950 text-white font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-zinc-200 font-semibold text-xs sm:text-sm">N6T Diagnostics Exchange</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400 text-[11px]">Sysmex XN-1000 Interface</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px]">
            HL7 v2.8 / FHIR SYNCED
          </span>
        </div>
      </div>

      {/* Main Specimen Queue View */}
      <div className="my-auto py-2 space-y-2">
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="text-[10px] text-zinc-500">SPECIMEN QUEUE</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">384 Samples / Hour</div>
            <div className="text-[10px] text-emerald-400">Zero dropped frames</div>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="text-[10px] text-zinc-500">ENCRYPTION ENCLAVE</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">AES-256 GCM</div>
            <div className="text-[10px] text-emerald-400">HIPAA Compliant</div>
          </div>
        </div>

        {/* Live Lab Feed Line */}
        <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-[11px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-300">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>LIS Stream: ACK 200 · Sample ID #91820 Verified</span>
          </div>
          <span className="text-emerald-400 text-[10px]">TRANSMITTED</span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 pt-2 text-[10px] text-zinc-500">
        <span className="text-emerald-400">RELIABILITY GUARANTEE: 100% AUDITED</span>
        <span>ON-PREM EDGE AGENT</span>
      </div>
    </div>
  );
}

/**
 * 5. WarpLLM Screen (High-Performance Distributed Router - Rust)
 */
export function WarpLlmScreen() {
  return (
    <div className="w-full h-full bg-zinc-950 text-white font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-zinc-200 font-semibold text-xs sm:text-sm">WarpLLM Core</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400 text-[11px]">Rust Ring-Buffer</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px]">
            1,400+ REQ / SEC
          </span>
        </div>
      </div>

      {/* Cluster Nodes Visualizer */}
      <div className="my-auto py-2 space-y-2">
        <div className="grid grid-cols-4 gap-2 text-[10px]">
          {["GPU-NODE-01", "GPU-NODE-02", "GPU-NODE-03", "GPU-NODE-04"].map((node, i) => (
            <div key={node} className="p-2 rounded bg-zinc-900 border border-zinc-800 text-center">
              <div className="text-zinc-500">{node}</div>
              <div className="text-emerald-400 font-bold mt-0.5">{94 - i * 4}% LOAD</div>
              <div className="text-[9px] text-zinc-400">2.1ms p99</div>
            </div>
          ))}
        </div>

        {/* Lock-Free Pipeline Stream */}
        <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-[11px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-300">
            <Network className="w-3.5 h-3.5 text-emerald-400" />
            <span>Weighted Round-Robin: Lock-free atomic routing buffer active</span>
          </div>
          <span className="text-emerald-400 text-[10px]">ZERO GC PAUSES</span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 pt-2 text-[10px] text-zinc-500">
        <span className="text-emerald-400">ENGINE: RUST · TOKIO ASYNC</span>
        <span>LATENCY: &lt; 0.4ms PER REQUEST</span>
      </div>
    </div>
  );
}
