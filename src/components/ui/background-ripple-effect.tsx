"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RipplePoint {
  id: number;
  x: number;
  y: number;
  startTime: number;
}

export function BackgroundRippleEffect({
  className,
  rows = 12,
  cols = 24,
}: {
  className?: string;
  rows?: number;
  cols?: number;
}) {
  const [ripples, setRipples] = useState<RipplePoint[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto ambient wave every few seconds if idle
  useEffect(() => {
    const ambientInterval = setInterval(() => {
      if (typeof window === "undefined") return;
      const x = Math.random() * (window.innerWidth || 1200);
      const y = Math.random() * 400 + 100;
      setRipples((prev) => [
        ...prev.slice(-4),
        { id: Date.now() + Math.random(), x, y, startTime: Date.now() },
      ]);
    }, 6000);

    return () => clearInterval(ambientInterval);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipples((prev) => [
      ...prev.slice(-6),
      { id: Date.now() + Math.random(), x, y, startTime: Date.now() },
    ]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Throttled subtle ripple on pointer movement
    if (Math.random() > 0.85) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setRipples((prev) => [
        ...prev.slice(-5),
        { id: Date.now() + Math.random(), x, y, startTime: Date.now() },
      ]);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      className={cn(
        "absolute inset-0 overflow-hidden select-none pointer-events-auto",
        className
      )}
    >
      {/* Background SVG grid of ripple dots */}
      <svg
        className="w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="ripple-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1.5" className="fill-emerald-600/30" />
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(16, 185, 129, 0.08)"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ripple-grid)" />
      </svg>

      {/* Dynamic Animated Ripple Waves */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "140px",
            height: "140px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(5, 150, 105, 0.12) 40%, transparent 70%)",
            border: "1px solid rgba(16, 185, 129, 0.35)",
            animationDuration: "2.4s",
            animationTimingFunction: "cubic-bezier(0, 0.2, 0.8, 1)",
          }}
        />
      ))}

      {/* Ambient gradient glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
}
