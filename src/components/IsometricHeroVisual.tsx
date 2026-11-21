"use client";

import React from "react";
import { motion } from "framer-motion";

export function IsometricHeroVisual() {
  return (
    <div className="w-full my-6 select-none flex justify-center">
      {/* Borderless SVG canvas floating naturally on the white page */}
      <div className="w-full max-w-5xl flex justify-center">
        <svg
          viewBox="0 0 1100 520"
          className="w-full h-auto max-h-[500px]"
          style={{ overflow: "visible" }}
        >
          <defs>
            {/* Gradients strictly: White, Carbon Black, Precision Emerald */}
            <linearGradient id="isoGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="isoDarkGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="isoDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>
            <filter id="isoShadowClean" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#09090b" floodOpacity="0.06" />
            </filter>
          </defs>

          {/* ============================================================== */}
          {/* BASE ISOMETRIC PLATFORM TILES                                  */}
          {/* ============================================================== */}
          <g id="base-ground" filter="url(#isoShadowClean)">
            {/* Center Main Ground Tile */}
            <polygon
              points="550,260 810,410 550,530 290,380"
              fill="#ffffff"
              stroke="#09090b"
              strokeWidth="2.5"
            />
            {/* Center Front-Left Edge */}
            <polygon
              points="290,380 550,530 550,545 290,395"
              fill="#e4e4e7"
              stroke="#09090b"
              strokeWidth="2.5"
            />
            {/* Center Front-Right Edge */}
            <polygon
              points="550,530 810,410 810,425 550,545"
              fill="#d4d4d8"
              stroke="#09090b"
              strokeWidth="2.5"
            />

            {/* Left Elevated Desk Tile (Emerald Workspace) */}
            <g>
              <polygon
                points="340,280 450,344 260,454 150,390"
                fill="#059669"
                stroke="#09090b"
                strokeWidth="2.5"
              />
              <polygon
                points="150,390 260,454 260,480 150,416"
                fill="#047857"
                stroke="#09090b"
                strokeWidth="2.5"
              />
              <polygon
                points="260,454 450,344 450,370 260,480"
                fill="#065f46"
                stroke="#09090b"
                strokeWidth="2.5"
              />
            </g>

            {/* Right Desk Tile (Runtime Stand) */}
            <g>
              <polygon
                points="760,320 980,420 850,490 630,390"
                fill="#18181b"
                stroke="#09090b"
                strokeWidth="2.5"
              />
              <polygon
                points="630,390 850,490 850,515 630,415"
                fill="#09090b"
                stroke="#09090b"
                strokeWidth="2.5"
              />
              <polygon
                points="850,490 980,420 980,445 850,515"
                fill="#27272a"
                stroke="#09090b"
                strokeWidth="2.5"
              />
            </g>
          </g>

          {/* ============================================================== */}
          {/* LEFT SECTION: CODE & MOTION MONITOR + ROBOTIC ARM             */}
          {/* ============================================================== */}
          <g id="left-editor-section">
            {/* Monitor Stand */}
            <polygon points="240,330 280,353 250,370 210,347" fill="#27272a" stroke="#09090b" strokeWidth="2" />
            <polygon points="245,320 255,326 255,340 245,334" fill="#09090b" />

            {/* Monitor Frame (Back) */}
            <polygon
              points="190,120 350,210 350,340 190,250"
              fill="#09090b"
              stroke="#09090b"
              strokeWidth="3"
            />
            {/* Monitor Bezel */}
            <polygon
              points="180,125 190,120 190,250 180,255"
              fill="#10b981"
              stroke="#09090b"
              strokeWidth="2"
            />

            {/* Screen Glass */}
            <polygon
              points="200,145 338,222 338,325 200,248"
              fill="url(#isoDark)"
              stroke="#27272a"
              strokeWidth="1.5"
            />

            {/* Screen Top Bar */}
            <polygon points="202,148 336,223 336,235 202,160" fill="#27272a" />
            <circle cx="212" cy="157" r="2.5" fill="#10b981" />
            <circle cx="220" cy="161" r="2.5" fill="#71717a" />
            <circle cx="228" cy="166" r="2.5" fill="#71717a" />

            {/* Screen Canvas Window */}
            <polygon points="215,175 285,214 285,270 215,230" fill="#ffffff" stroke="#27272a" strokeWidth="1" />

            {/* Animated Shape inside editor */}
            <motion.path
              d="M235,205 Q250,195 265,210 Q250,225 235,205 Z"
              fill="#059669"
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 4, -4, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="250" cy="206" r="3" fill="#ffffff" />

            {/* Bezier Easing Curve */}
            <polygon points="292,218 330,239 330,285 292,264" fill="#18181b" stroke="#27272a" strokeWidth="1" />
            <path d="M296,260 Q310,258 326,243" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="296" cy="260" r="2" fill="#10b981" />
            <circle cx="326" cy="243" r="2" fill="#10b981" />

            {/* Timeline scrubber */}
            <line x1="208" y1="242" x2="330" y2="312" stroke="#27272a" strokeWidth="3" strokeLinecap="round" />
            <motion.circle
              cx="270"
              cy="278"
              r="4"
              fill="#10b981"
              stroke="#ffffff"
              strokeWidth="1.5"
              animate={{ cx: [230, 310, 230], cy: [255, 301, 255] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotary desk knobs */}
            <polygon points="190,390 220,407 205,416 175,399" fill="#10b981" stroke="#09090b" strokeWidth="1.5" />
            <polygon points="230,412 260,429 245,438 215,421" fill="#ffffff" stroke="#09090b" strokeWidth="1.5" />
            <circle cx="230" cy="405" r="3.5" fill="#09090b" />
            <circle cx="245" cy="413" r="3.5" fill="#09090b" />
            <circle cx="260" cy="422" r="3.5" fill="#10b981" />

            {/* Articulated Robotic Arm */}
            <g id="robotic-arm">
              <polygon points="370,280 400,297 385,306 355,289" fill="#09090b" />
              <polygon points="355,289 385,306 385,360 355,343" fill="#10b981" stroke="#09090b" strokeWidth="2" />
              <polygon points="385,306 400,297 400,351 385,360" fill="#047857" stroke="#09090b" strokeWidth="2" />

              <motion.line
                x1="370"
                y1="290"
                x2="350"
                y2="220"
                stroke="#09090b"
                strokeWidth="8"
                strokeLinecap="round"
                animate={{ y2: [220, 215, 220] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx="350" cy="220" r="6" fill="#10b981" stroke="#09090b" strokeWidth="2" />

              <motion.line
                x1="350"
                y1="220"
                x2="320"
                y2="190"
                stroke="#09090b"
                strokeWidth="6"
                strokeLinecap="round"
                animate={{ x2: [320, 315, 320], y2: [190, 185, 190] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx="320" cy="190" r="5" fill="#09090b" />

              {/* Glowing emerald asset */}
              <motion.polygon
                points="320,185 328,190 320,195 312,190"
                fill="#10b981"
                stroke="#09090b"
                strokeWidth="1.5"
                animate={{
                  scale: [1, 1.15, 1],
                  filter: ["drop-shadow(0 0 2px #10b981)", "drop-shadow(0 0 8px #10b981)", "drop-shadow(0 0 2px #10b981)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </g>

            {/* Badges on Desk */}
            <g transform="translate(300, 320)">
              <polygon points="0,0 45,26 45,45 0,19" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
              <text x="8" y="24" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">
                NEXT.JS
              </text>
            </g>
            <g transform="translate(330, 350)">
              <polygon points="0,0 40,23 40,40 0,17" fill="#059669" stroke="#09090b" strokeWidth="1.5" />
              <text x="8" y="22" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">
                TAURI
              </text>
            </g>
          </g>

          {/* ============================================================== */}
          {/* CENTER SECTION: ZERO-OVERHEAD COMPILER CUBE & CHARACTERS       */}
          {/* ============================================================== */}
          <g id="center-engine-cube">
            {/* Pedestal Top Step */}
            <polygon points="550,200 660,263 550,326 440,263" fill="#ffffff" stroke="#09090b" strokeWidth="2.5" />
            <polygon points="440,263 550,326 550,346 440,283" fill="#e4e4e7" stroke="#09090b" strokeWidth="2.5" />
            <polygon points="550,326 660,263 660,283 550,346" fill="#d4d4d8" stroke="#09090b" strokeWidth="2.5" />

            {/* Main Cube */}
            <g transform="translate(0, -60)">
              {/* Top Face */}
              <polygon points="550,180 640,232 550,284 460,232" fill="#ffffff" stroke="#09090b" strokeWidth="2.5" />
              <polygon
                points="550,195 620,235 550,275 480,235"
                fill="url(#isoGreen)"
                stroke="#09090b"
                strokeWidth="2"
              />
              <path
                d="M520,235 Q550,215 580,235"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />

              {/* Left Face */}
              <polygon
                points="460,232 550,284 550,400 460,348"
                fill="#ffffff"
                stroke="#09090b"
                strokeWidth="2.5"
              />
              {/* Right Face */}
              <polygon
                points="550,284 640,232 640,348 550,400"
                fill="#f4f4f5"
                stroke="#09090b"
                strokeWidth="2.5"
              />

              {/* File Badge: .app */}
              <g transform="translate(435, 250)">
                <polygon
                  points="0,0 55,32 55,100 0,68"
                  fill="#059669"
                  stroke="#09090b"
                  strokeWidth="2.5"
                />
                <polygon points="12,18 36,32 36,54 12,40" fill="#ffffff" stroke="#09090b" strokeWidth="1.5" />
                <path d="M18,28 Q24,20 30,28" stroke="#059669" strokeWidth="2" fill="none" />
                <text x="8" y="76" fill="#ffffff" fontSize="16" fontFamily="monospace" fontWeight="bold">
                  .app
                </text>
              </g>

              {/* Terminal Label */}
              <polygon points="400,360 480,405 450,423 370,378" fill="#09090b" stroke="#09090b" strokeWidth="2" />
              <text x="390" y="395" fill="#71717a" fontSize="8" fontFamily="monospace">
                static.closure
              </text>
              <text x="410" y="410" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">
                814 kB
              </text>

              {/* Billboard Screen beside cube */}
              <polygon points="560,250 650,200 650,280 560,330" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
              <polygon points="570,260 640,220 640,275 570,315" fill="#f4f4f5" />
              <path d="M580,290 Q605,240 630,260" stroke="#059669" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>

            {/* Little Animated Geometric Companions */}
            <g id="companion-characters">
              {/* Character 1: Little Box */}
              <motion.g
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <polygon points="480,430 505,444 505,468 480,454" fill="#10b981" stroke="#09090b" strokeWidth="2" />
                <polygon points="480,430 500,418 525,432 505,444" fill="#34d399" stroke="#09090b" strokeWidth="1.5" />
                <circle cx="490" cy="445" r="1.5" fill="#ffffff" />
                <circle cx="497" cy="449" r="1.5" fill="#ffffff" />
              </motion.g>

              {/* Character 2: Center Pyramid */}
              <motion.g
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <polygon points="535,400 565,470 515,455" fill="#059669" stroke="#09090b" strokeWidth="2" />
                <polygon points="535,400 575,450 565,470" fill="#047857" stroke="#09090b" strokeWidth="1.5" />
                <circle cx="538" cy="442" r="2" fill="#ffffff" />
                <circle cx="548" cy="445" r="2" fill="#ffffff" />
                <circle cx="538" cy="442" r="1" fill="#09090b" />
                <circle cx="548" cy="445" r="1" fill="#09090b" />
                <path d="M540,452 Q545,456 550,453" stroke="#09090b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </motion.g>

              {/* Character 3: Sphere */}
              <motion.g
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                <circle cx="595" cy="445" r="14" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
                <circle cx="591" cy="443" r="2" fill="#09090b" />
                <circle cx="599" cy="443" r="2" fill="#09090b" />
                <path d="M592,450 Q595,454 598,450" stroke="#09090b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </motion.g>
            </g>
          </g>

          {/* ============================================================== */}
          {/* RIGHT SECTION: PRODUCTION RUNTIME & TRANSMITTER                */}
          {/* ============================================================== */}
          <g id="right-runtime-section">
            {/* Radio / Receiver Station */}
            <g transform="translate(680, 220)">
              <motion.line
                x1="20"
                y1="30"
                x2="20"
                y2="-20"
                stroke="#09090b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <motion.circle
                cx="20"
                cy="-20"
                r="3"
                fill="#10b981"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />

              <polygon points="0,40 50,70 50,110 0,80" fill="#18181b" stroke="#09090b" strokeWidth="2" />
              <polygon points="0,40 40,17 90,47 50,70" fill="#27272a" stroke="#09090b" strokeWidth="2" />
              <polygon points="50,70 90,47 90,87 50,110" fill="#09090b" stroke="#09090b" strokeWidth="2" />

              <circle cx="25" cy="70" r="10" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
              <circle cx="25" cy="70" r="4" fill="#10b981" />
              <polygon points="58,74 80,61 80,80 58,93" fill="#059669" />
              <text x="62" y="82" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold">
                LIVE
              </text>
            </g>

            {/* Circular Hologram / Laser Disc Plate */}
            <g transform="translate(730, 340)">
              <ellipse cx="30" cy="20" rx="36" ry="18" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
              <ellipse cx="30" cy="20" rx="22" ry="11" fill="#f4f4f5" stroke="#10b981" strokeWidth="1.5" />
              <ellipse cx="30" cy="20" rx="8" ry="4" fill="#059669" />
              <motion.circle
                cx="30"
                cy="20"
                r="18"
                stroke="#10b981"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 4"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </g>

            {/* Large White Production Screen (Right Monitor) */}
            <g transform="translate(770, 80)">
              <polygon points="60,250 85,265 75,275 50,260" fill="#09090b" />
              <polygon points="65,220 75,226 75,255 65,249" fill="#27272a" />

              {/* Monitor Chassis */}
              <polygon points="0,50 170,148 170,300 0,202" fill="#ffffff" stroke="#09090b" strokeWidth="3" />
              <polygon points="-12,56 0,50 0,202 -12,208" fill="#e4e4e7" stroke="#09090b" strokeWidth="2" />

              {/* Screen Glass */}
              <polygon points="12,74 158,158 158,284 12,200" fill="#fafafa" stroke="#e4e4e7" strokeWidth="1.5" />

              {/* Screen Top Bar */}
              <polygon points="13,76 157,159 157,173 13,90" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <circle cx="24" cy="85" r="3" fill="#10b981" />
              <line x1="34" y1="91" x2="60" y2="106" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" />

              {/* Sidebar items */}
              <line x1="22" y1="108" x2="22" y2="175" stroke="#e4e4e7" strokeWidth="4" />
              <circle cx="22" cy="115" r="2" fill="#10b981" />
              <circle cx="22" cy="130" r="2" fill="#71717a" />
              <circle cx="22" cy="145" r="2" fill="#71717a" />

              {/* Central Vector Artwork */}
              <motion.path
                d="M50,165 Q85,120 120,175 Q85,210 50,165 Z"
                fill="#059669"
                animate={{
                  scale: [1, 1.06, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx="85" cy="165" r="5" fill="#ffffff" />

              {/* Progress Slider Bar */}
              <line x1="38" y1="185" x2="140" y2="244" stroke="#e4e4e7" strokeWidth="3" strokeLinecap="round" />
              <line x1="38" y1="185" x2="95" y2="218" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
              <circle cx="95" cy="218" r="4" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
            </g>

            {/* Remote Controller Device at Bottom Right */}
            <g transform="translate(800, 370)">
              <polygon points="0,0 80,46 65,60 -15,14" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
              <polygon points="-15,14 65,60 65,68 -15,22" fill="#e4e4e7" stroke="#09090b" strokeWidth="2" />
              <polygon points="65,60 80,46 80,54 65,68" fill="#d4d4d8" stroke="#09090b" strokeWidth="2" />

              <circle cx="10" cy="15" r="3.5" fill="#10b981" />
              <circle cx="26" cy="24" r="3.5" fill="#09090b" />
              <circle cx="42" cy="33" r="3.5" fill="#09090b" />
              <circle cx="58" cy="42" r="3.5" fill="#059669" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
