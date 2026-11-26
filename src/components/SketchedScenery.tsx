"use client";

import React from "react";

export function SketchedScenery({ className = "w-full h-36 sm:h-44" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-zinc-800"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* Subtle hatch pattern */}
          <pattern id="sketchHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#52647C" strokeWidth="0.8" opacity="0.3" />
          </pattern>
        </defs>

        {/* 1. Distant sketched mountain ridges */}
        <path
          d="M0 160 Q 150 90, 320 135 T 640 100 T 960 140 T 1200 110 L 1200 200 L 0 200 Z"
          fill="none"
          stroke="#52647C"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          opacity="0.6"
        />
        <path
          d="M40 140 Q 180 80, 360 120 T 720 90 T 1080 130 L 1200 120"
          fill="none"
          stroke="#D5DCE6"
          strokeWidth="1"
        />

        {/* 2. Midground Sketched Architectural Skyline & Pines */}
        <g stroke="#0F1F38" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Distant building silhouettes and roofs */}
          <path d="M120 180 L 120 130 L 145 130 L 145 180" />
          <path d="M145 145 L 175 145 L 175 180" />
          <path d="M132 130 L 132 118 L 133 118" /> {/* spire */}

          {/* Group of sketched pine trees */}
          {/* Tree 1 */}
          <path d="M220 180 L 220 125" />
          <path d="M220 125 L 210 140 L 230 140 Z" />
          <path d="M220 135 L 206 155 L 234 155 Z" />
          <path d="M220 148 L 202 172 L 238 172 Z" />

          {/* Tree 2 */}
          <path d="M245 180 L 245 138" />
          <path d="M245 138 L 237 150 L 253 150 Z" />
          <path d="M245 148 L 233 164 L 257 164 Z" />

          {/* Modern architectural pavilion / studio */}
          <path d="M420 180 L 420 120 L 520 120 L 520 180" />
          <path d="M410 120 L 530 120" strokeWidth="2" /> {/* cantilever roof */}
          {/* Window hatching */}
          <line x1="435" y1="130" x2="435" y2="175" />
          <line x1="455" y1="130" x2="455" y2="175" />
          <line x1="475" y1="130" x2="475" y2="175" />
          <line x1="495" y1="130" x2="495" y2="175" />
          <line x1="420" y1="145" x2="520" y2="145" />

          {/* Bridge / viaduct arches across water */}
          <path d="M620 180 L 620 150 L 820 150 L 820 180" />
          <path d="M635 180 A 25 25 0 0 1 685 180" />
          <path d="M700 180 A 25 25 0 0 1 750 180" />
          <path d="M765 180 A 25 25 0 0 1 815 180" />
          <line x1="610" y1="150" x2="830" y2="150" strokeWidth="2" />

          {/* Lighthouse / Telecom Observatory Tower */}
          <path d="M960 180 L 968 105 L 982 105 L 990 180" />
          <path d="M964 105 L 986 105 L 986 92 L 964 92 Z" />
          <line x1="975" y1="92" x2="975" y2="78" strokeWidth="1.8" /> {/* antenna */}
          <circle cx="975" cy="76" r="2.5" fill="#E08E0B" stroke="#C47905" />

          {/* Shoreline trees */}
          <path d="M1030 180 L 1030 140" />
          <path d="M1030 140 L 1022 152 L 1038 152 Z" />
          <path d="M1030 150 L 1018 166 L 1042 166 Z" />
        </g>

        {/* 3. Foreground Riverbank & Hand-sketched Baseline */}
        <g stroke="#0F1F38" strokeWidth="1.6" strokeLinecap="round">
          {/* Main terrain baseline with pen hatching */}
          <path d="M0 182 Q 300 178, 600 182 T 1200 180" />
          <path d="M0 186 Q 400 184, 800 186 T 1200 184" strokeWidth="1" strokeDasharray="8 4" opacity="0.6" />

          {/* Delicate water ripple reflections */}
          <line x1="80" y1="192" x2="160" y2="192" stroke="#52647C" strokeWidth="1" opacity="0.6" />
          <line x1="280" y1="194" x2="420" y2="194" stroke="#52647C" strokeWidth="1" opacity="0.6" />
          <line x1="650" y1="193" x2="780" y2="193" stroke="#52647C" strokeWidth="1" opacity="0.6" />
          <line x1="920" y1="192" x2="1040" y2="192" stroke="#52647C" strokeWidth="1" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
