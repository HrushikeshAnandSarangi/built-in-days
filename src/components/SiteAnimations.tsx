"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * 1. Handshake Animation (Inspired by user image: partnership handshake)
 * Strictly: Pure White, Carbon Black, Precision Emerald.
 * Zero borders, zero hover captions, zero cursor arrows.
 */
export function HandshakeAnimation({ className = "w-40 h-28" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <motion.svg
        viewBox="0 0 200 140"
        className="w-full h-full drop-shadow-sm"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Left Hand Cuff (Cufflink & Sleeve) */}
        <motion.g
          animate={{ x: [0, 2, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon
            points="25,55 55,25 75,45 45,75"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="40" r="3.5" stroke="#09090b" strokeWidth="2.5" fill="#10b981" />
        </motion.g>

        {/* Right Hand Cuff */}
        <motion.g
          animate={{ x: [0, -2, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon
            points="145,25 175,55 145,85 115,55"
            fill="#ecfdf5"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <circle cx="150" cy="45" r="3.5" stroke="#09090b" strokeWidth="2.5" fill="#059669" />
        </motion.g>

        {/* Interlocking Hands Clasp */}
        <motion.g
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Left Hand Base & Thumb */}
          <path
            d="M50,65 C60,50 85,35 110,35 C125,35 135,45 130,60 C125,70 110,80 95,85"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Hand Clasp Fingers (Light Emerald tint) */}
          <path
            d="M130,55 C120,40 100,40 85,50 C70,60 70,75 80,90 C90,105 110,105 125,95"
            fill="#d1fae5"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interlocked Finger Knuckles */}
          <g stroke="#09090b" strokeWidth="3" strokeLinecap="round" fill="#d1fae5">
            <rect x="70" y="60" width="16" height="24" rx="8" />
            <rect x="80" y="68" width="16" height="24" rx="8" />
            <rect x="90" y="76" width="16" height="24" rx="8" />
            <rect x="100" y="84" width="16" height="24" rx="8" />
          </g>

          {/* Left Hand Fingers overlapping */}
          <g stroke="#09090b" strokeWidth="3" strokeLinecap="round" fill="#ffffff">
            <line x1="100" y1="58" x2="135" y2="78" />
            <line x1="90" y1="68" x2="125" y2="88" />
          </g>
        </motion.g>

        {/* Subtle motion energy spark */}
        <motion.circle
          cx="100"
          cy="70"
          r="2.5"
          fill="#10b981"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

/**
 * 2. Jetpack Velocity Animation (Inspired by user image: jetpack flyer)
 * Strictly: Pure White, Carbon Black, Precision Emerald.
 * Zero borders, zero hover captions, zero cursor arrows.
 */
export function JetpackSpeedAnimation({ className = "w-40 h-28" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <motion.svg
        viewBox="0 0 200 140"
        className="w-full h-full drop-shadow-sm"
        animate={{
          y: [-2, 3, -2],
          x: [-1, 2, -1],
          rotate: [-1, 1.5, -1],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Exhaust Speed Trails (Emerald bursts) */}
        <g stroke="#10b981" strokeWidth="2.5" strokeLinecap="round">
          <motion.line
            x1="20"
            y1="85"
            x2="5"
            y2="92"
            animate={{ opacity: [0.2, 1, 0.2], x2: [5, 0, 5] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
          <motion.line
            x1="25"
            y1="98"
            x2="8"
            y2="105"
            animate={{ opacity: [1, 0.2, 1], x2: [8, 2, 8] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <motion.line
            x1="35"
            y1="110"
            x2="15"
            y2="120"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 0.7, repeat: Infinity }}
          />
        </g>

        {/* Rocket Thruster Engine */}
        <g id="jetpack-cylinder">
          {/* Flame Nozzle */}
          <polygon points="40,88 28,95 44,105 52,98" fill="#18181b" stroke="#09090b" strokeWidth="2.5" />
          <motion.polygon
            points="28,95 12,102 36,104"
            fill="#10b981"
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />

          {/* Main Metallic Tank */}
          <rect
            x="45"
            y="52"
            width="55"
            height="36"
            rx="18"
            transform="rotate(-25 45 52)"
            fill="#18181b"
            stroke="#09090b"
            strokeWidth="3"
          />
          <line x1="60" y1="50" x2="85" y2="38" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Flying Character Body */}
        <g id="flyer-body">
          {/* Legs & Torso */}
          <path
            d="M50,90 L95,65 L135,55 L160,35"
            stroke="#09090b"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Shirt / Sleeve (White & Emerald) */}
          <path
            d="M85,70 L125,50 L155,30"
            stroke="#ffffff"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Outstretched Flying Fist */}
          <circle cx="165" cy="25" r="9" fill="#ffffff" stroke="#09090b" strokeWidth="3" />
          <path d="M162,23 L169,27" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />

          {/* Head & Hair */}
          <circle cx="120" cy="40" r="14" fill="#ffffff" stroke="#09090b" strokeWidth="3" />
          {/* Hair swoop (Dark) */}
          <path
            d="M110,34 C112,24 126,24 132,32 C134,38 128,42 120,40 Z"
            fill="#09090b"
          />
          {/* Eyes & Smile */}
          <circle cx="124" cy="40" r="1.8" fill="#09090b" />
          <path d="M123,45 Q127,48 131,44" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Emerald Tie / Collar */}
          <polygon points="112,50 118,58 114,64 108,54" fill="#059669" stroke="#09090b" strokeWidth="1.5" />
        </g>
      </motion.svg>
    </div>
  );
}

/**
 * 3. Beanbag Developer with Laptop (Inspired by user image: dev in beanbag)
 * Strictly: Pure White, Carbon Black, Precision Emerald.
 * Zero borders, zero hover captions, zero cursor arrows.
 */
export function BeanbagBuildAnimation({ className = "w-40 h-28" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <motion.svg
        viewBox="0 0 200 140"
        className="w-full h-full drop-shadow-sm"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Background Analytics Chart Curve */}
        <g opacity="0.6">
          <line x1="30" y1="120" x2="170" y2="120" stroke="#e4e4e7" strokeWidth="2" />
          <motion.path
            d="M40,110 Q90,95 130,55 T170,20"
            stroke="#10b981"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <circle cx="170" cy="20" r="4" fill="#059669" />
        </g>

        {/* Beanbag Chair (Emerald/Mint Comfort Sack) */}
        <ellipse cx="85" cy="95" rx="42" ry="32" fill="#ecfdf5" stroke="#09090b" strokeWidth="3" />
        <path d="M50,90 Q85,115 120,90" stroke="#a7f3d0" strokeWidth="2" fill="none" />

        {/* Developer Seated Body */}
        <g id="dev-seated">
          {/* Legs relaxed forward */}
          <path
            d="M85,90 L115,100 L140,118"
            stroke="#09090b"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Sneaker */}
          <rect x="135" y="115" width="14" height="6" rx="3" fill="#059669" stroke="#09090b" strokeWidth="2" />

          {/* Torso & Head */}
          <path d="M75,95 L85,65" stroke="#09090b" strokeWidth="12" strokeLinecap="round" fill="none" />
          <circle cx="90" cy="50" r="11" fill="#ffffff" stroke="#09090b" strokeWidth="3" />
          {/* Hair */}
          <path d="M82,46 C84,38 98,38 101,46 Z" fill="#09090b" />
          <circle cx="94" cy="51" r="1.5" fill="#09090b" />

          {/* Arms holding laptop */}
          <path d="M83,72 L102,82 L118,75" stroke="#09090b" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>

        {/* Laptop on Lap with Glow */}
        <g transform="translate(100, 65)">
          {/* Laptop Base */}
          <line x1="5" y1="18" x2="35" y2="18" stroke="#09090b" strokeWidth="3.5" strokeLinecap="round" />
          {/* Laptop Screen */}
          <line x1="26" y1="18" x2="33" y2="4" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
          {/* Screen Light Glow */}
          <motion.polygon
            points="24,16 32,5 20,4 12,15"
            fill="#10b981"
            opacity="0.3"
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </g>

        {/* Floating Token / Upward Coin */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          transform="translate(145, 45)"
        >
          <circle cx="10" cy="10" r="10" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
          <path d="M10,5 L10,15 M7,8 L13,8 M7,12 L13,12" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

/**
 * 4. Architectural Diagnostic Presenter (Inspired by user image: whiteboard audit)
 * Strictly: Pure White, Carbon Black, Precision Emerald.
 * Zero borders, zero hover captions, zero cursor arrows.
 */
export function DiagnosticAuditAnimation({ className = "w-40 h-28" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <motion.svg
        viewBox="0 0 200 140"
        className="w-full h-full drop-shadow-sm"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Presentation Whiteboard Canvas */}
        <rect
          x="75"
          y="20"
          width="105"
          height="75"
          rx="8"
          fill="#ffffff"
          stroke="#0F1F38"
          strokeWidth="3"
        />
        {/* Header line on board */}
        <line x1="85" y1="32" x2="170" y2="32" stroke="#D5DCE6" strokeWidth="2" />

        {/* Animated Bar Chart on Board */}
        <g id="bars">
          <rect x="90" y="60" width="10" height="25" fill="#0F1F38" rx="2" />
          <rect x="108" y="50" width="10" height="35" fill="#52647C" rx="2" />
          <motion.rect
            x="126"
            y="38"
            width="10"
            height="47"
            fill="#E08E0B"
            rx="2"
            animate={{ height: [47, 51, 47], y: [38, 34, 38] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </g>

        {/* Circular Telemetry Pie on Board */}
        <g transform="translate(155, 60)">
          <circle cx="0" cy="0" r="12" fill="#F4F6F9" stroke="#0F1F38" strokeWidth="2" />
          <path d="M0,0 L0,-12 A12,12 0 0,1 12,0 Z" fill="#1D56B3" />
        </g>

        {/* Presenter / Engineer Figure on Left */}
        <g id="engineer-presenter">
          {/* Body & Arm pointing wand at board */}
          <path d="M40,115 L45,75" stroke="#0F1F38" strokeWidth="12" strokeLinecap="round" fill="none" />
          <circle cx="48" cy="55" r="10" fill="#ffffff" stroke="#0F1F38" strokeWidth="3" />
          <path d="M42,50 C44,43 54,43 57,50 Z" fill="#0F1F38" />

          {/* Pointing Arm with Indicator Wand */}
          <motion.path
            d="M48,78 L78,65 L115,50"
            stroke="#0F1F38"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="115" cy="50" r="2.5" fill="#E08E0B" />
        </g>
      </motion.svg>
    </div>
  );
}

/**
 * 5. Compute & Cloud Bill Savings Animation (Inspired by user image: coins stack & bills)
 * Strictly: Pure White, Carbon Black, Precision Emerald.
 * Zero borders, zero hover captions, zero cursor arrows.
 */
export function ComputeSavingsAnimation({ className = "w-40 h-28" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <motion.svg
        viewBox="0 0 200 140"
        className="w-full h-full drop-shadow-sm"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Background Stack of Server Resource Vouchers / Bills */}
        <g opacity="0.9">
          <rect
            x="45"
            y="25"
            width="75"
            height="45"
            rx="4"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="2.5"
          />
          <rect
            x="50"
            y="30"
            width="65"
            height="35"
            rx="2"
            fill="#ecfdf5"
            stroke="#10b981"
            strokeWidth="1.5"
          />
          <circle cx="82" cy="47" r="10" fill="#ffffff" stroke="#059669" strokeWidth="1.5" />
          <path d="M82,41 L82,53 M79,44 L85,44 M79,50 L85,50" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Stack 1: Left Coins */}
        <g id="coin-stack-1">
          <ellipse cx="60" cy="115" rx="18" ry="7" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="60" cy="107" rx="18" ry="7" fill="#ecfdf5" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="60" cy="99" rx="18" ry="7" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="60" cy="91" rx="18" ry="7" fill="#10b981" stroke="#09090b" strokeWidth="2" />
        </g>

        {/* Stack 2: Center Higher Coins */}
        <g id="coin-stack-2">
          <ellipse cx="100" cy="118" rx="20" ry="8" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="100" cy="109" rx="20" ry="8" fill="#ecfdf5" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="100" cy="100" rx="20" ry="8" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="100" cy="91" rx="20" ry="8" fill="#ecfdf5" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="100" cy="82" rx="20" ry="8" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="100" cy="73" rx="20" ry="8" fill="#059669" stroke="#09090b" strokeWidth="2" />
        </g>

        {/* Stack 3: Right Elevated Stack */}
        <g id="coin-stack-3">
          <ellipse cx="140" cy="115" rx="18" ry="7" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="140" cy="106" rx="18" ry="7" fill="#ecfdf5" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="140" cy="97" rx="18" ry="7" fill="#ffffff" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="140" cy="88" rx="18" ry="7" fill="#ecfdf5" stroke="#09090b" strokeWidth="2" />
          <ellipse cx="140" cy="79" rx="18" ry="7" fill="#10b981" stroke="#09090b" strokeWidth="2" />
        </g>

        {/* Animated Dropping Precision Coin on Top */}
        <motion.g
          animate={{ y: [-8, 0, -8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="100" cy="60" rx="18" ry="7" fill="#34d399" stroke="#09090b" strokeWidth="2" />
          <circle cx="100" cy="60" r="3" fill="#ffffff" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
