"use client";

import React, { useState, useEffect, useRef } from "react";
import { Copy, Check, ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState<boolean>(false);
  const [bikePosition, setBikePosition] = useState<number>(5); // 0 to 95 percent
  const [isRiding, setIsRiding] = useState<boolean>(false);
  const [rideCount, setRideCount] = useState<number>(0);
  const animFrameRef = useRef<number | null>(null);

  const email = "hrushikeshsarangi7@gmail.com";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Bicycle Ride Mechanics: Spacebar to ride
  const startRide = () => {
    if (isRiding) return;
    setIsRiding(true);
    setRideCount((prev) => prev + 1);

    const startTime = performance.now();
    const duration = 2800; // ms to ride across the skyline
    const startPos = bikePosition >= 88 ? 2 : bikePosition;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // smooth easeInOutQuad
      const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      const newPos = startPos + eased * (90 - startPos);

      setBikePosition(newPos);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsRiding(false);
        // Loop back after reaching the end
        setTimeout(() => {
          setBikePosition(3);
        }, 500);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger ride on Spacebar if user isn't typing in an input/textarea
      if (e.code === "Space") {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== "input" && activeTag !== "textarea") {
          e.preventDefault();
          startRide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isRiding, bikePosition]);

  return (
    <footer className="bg-white text-zinc-600 text-xs font-sans pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CHARLES HONIG DARK FOOTER GAME BANNER */}
        <div className="rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-zinc-900">
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:18px_18px] opacity-30 pointer-events-none" />

          {/* Top Half: Statement & Direct Contact */}
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8 pb-16 md:pb-24">
            {/* Left Big Headline */}
            <div className="max-w-md">
              <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-[-0.04em] leading-[1.05]">
                Let&apos;s make something <br />
                <span className="text-zinc-400">great together.</span>
              </h2>
            </div>

            {/* Right Contact & Links */}
            <div className="space-y-4 md:text-right">
              {/* Email with 1-click Copy button */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:border-zinc-700 transition-all font-mono text-xs sm:text-sm shadow-sm group">
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1 text-zinc-400 hover:text-white transition-colors ml-1 focus:outline-hidden"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  )}
                </button>
              </div>

              {/* Social Navigation Links */}
              <div className="flex items-center md:justify-end gap-5 text-xs text-zinc-400 font-mono pt-2">
                <a
                  href="#contact"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Work With Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://github.com/HrushikeshAnandSarangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hrushikesh-anand-sarangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Badge: [SPACE] to ride interactive trigger */}
          <div className="relative z-10 flex flex-col items-center justify-center pb-4">
            <button
              onClick={startRide}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-zinc-500 text-zinc-300 hover:text-white transition-all text-[11px] font-mono shadow-sm active:scale-95 cursor-pointer"
            >
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold text-[10px]">
                SPACE
              </span>
              <span>to ride</span>
              {isRiding && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Skyline Track & Interactive Bicycle Rider */}
          <div className="relative w-full h-20 sm:h-24 overflow-hidden border-b border-zinc-800 cursor-pointer select-none" onClick={startRide}>
            {/* Skyline Architecture SVG Illustration */}
            <svg
              className="absolute bottom-0 w-full h-16 sm:h-20 text-zinc-800 stroke-zinc-700"
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
              fill="none"
              strokeWidth="1.2"
            >
              {/* Skyline silhouette buildings outline */}
              <path
                d="
                  M0 80 
                  L0 60 L20 60 L20 40 L35 40 L35 60 L50 60 L50 30 L65 30 L65 15 L70 15 L70 30 L80 30 L80 60
                  L110 60 L110 45 L130 45 L130 60 L160 60 L160 25 L180 25 L180 60 L210 60 L210 50 L230 50
                  L230 35 L245 35 L245 50 L270 50 L270 20 L280 10 L290 20 L290 60 L320 60 L320 40 L345 40
                  L345 60 L380 60 L380 30 L400 30 L400 15 L405 15 L405 30 L420 30 L420 60 L450 60 L450 48
                  L470 48 L470 60 L500 60 L500 22 L525 22 L525 60 L560 60 L560 42 L580 42 L580 60 L610 60
                  L610 32 L625 32 L625 18 L630 18 L630 32 L645 32 L645 60 L680 60 L680 45 L710 45 L710 60
                  L740 60 L740 28 L765 28 L765 60 L800 60 L800 38 L820 38 L820 60 L850 60 L850 20 L860 12
                  L870 20 L870 60 L900 60 L900 46 L930 46 L930 60 L970 60 L970 25 L995 25 L995 60 L1030 60
                  L1030 40 L1055 40 L1055 60 L1090 60 L1090 30 L1110 30 L1110 60 L1150 60 L1150 45 L1180 45
                  L1180 60 L1200 60 L1200 80 Z
                "
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Skyline ground baseline */}
              <line x1="0" y1="78" x2="1200" y2="78" stroke="#3f3f46" strokeWidth="1.5" />
            </svg>

            {/* Bicycle Rider moving along the baseline */}
            <div
              className="absolute bottom-[2px] transition-all duration-75 flex flex-col items-center"
              style={{
                left: `${bikePosition}%`,
                transform: `translateX(-50%)`,
              }}
            >
              {/* SVG Cyclist Rider */}
              <div className="relative">
                <svg
                  className={`w-9 h-9 text-white transition-transform ${
                    isRiding ? "animate-bounce" : ""
                  }`}
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Rider Head */}
                  <circle cx="16" cy="7" r="2.5" fill="currentColor" stroke="none" />
                  {/* Rider Torso & Arms */}
                  <path d="M16 9.5 L14 16 L19 14 L22 17" />
                  {/* Rider Legs pedaling */}
                  <path
                    d={
                      isRiding
                        ? "M14 16 L12 21 L16 23"
                        : "M14 16 L13 22 L17 22"
                    }
                  />
                  {/* Bike Frame */}
                  <path d="M8 24 L14 17 L21 17 L24 24" stroke="#a1a1aa" />
                  <path d="M14 17 L14 24 L8 24" stroke="#a1a1aa" />
                  <path d="M21 17 L23 13 L25 13" stroke="#a1a1aa" />
                  {/* Wheels */}
                  <circle
                    cx="8"
                    cy="24"
                    r="4.5"
                    stroke="currentColor"
                    className={isRiding ? "animate-spin" : ""}
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="4.5"
                    stroke="currentColor"
                    className={isRiding ? "animate-spin" : ""}
                  />
                </svg>

                {/* Speed lines when riding */}
                {isRiding && (
                  <div className="absolute -left-3 top-3 flex flex-col gap-1 text-[9px] text-zinc-500 font-mono">
                    <span>=</span>
                    <span>=</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-bold text-zinc-950 font-sans text-xs">
              Hrushikesh Anand Sarangi
            </span>
            <span className="text-zinc-300">/</span>
            <span>Systems & Web Software</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 shrink-0 text-zinc-700">
            <a href="#services" className="hover:text-zinc-950 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-zinc-950 transition-colors">
              Testimonials
            </a>
            <a href="#projects" className="hover:text-zinc-950 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">
              Contact
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-zinc-900 hover:text-emerald-700 transition-colors font-medium"
            >
              <span>Top ↗</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-zinc-400 text-[10px] font-mono">
          <div>Built with Next.js 16, TypeScript, Tailwind CSS & Framer Motion. Zero bloat.</div>
          <div>NIT Rourkela, Odisha, India · © 2026 Hrushikesh Anand Sarangi</div>
        </div>
      </div>
    </footer>
  );
}
