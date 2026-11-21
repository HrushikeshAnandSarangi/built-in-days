"use client";

import React from "react";
import { motion } from "framer-motion";

export function MailboxIllustration({ className = "w-72 h-56" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 340 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* ============================================================== */}
        {/* WOODEN POST                                                   */}
        {/* ============================================================== */}
        <g id="wooden-post">
          {/* Post vertical shaft */}
          <path
            d="M242,125 L242,255 L258,255 L258,125 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Wood grain hatch lines */}
          <line x1="244" y1="140" x2="256" y2="148" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
          <line x1="244" y1="165" x2="256" y2="173" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
          <line x1="244" y1="190" x2="256" y2="198" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
          <line x1="244" y1="215" x2="256" y2="223" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
          <line x1="244" y1="238" x2="256" y2="246" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ============================================================== */}
        {/* MAILBOX BODY & FLAG                                           */}
        {/* ============================================================== */}
        <g id="mailbox-main">
          {/* Mailbox Tunnel Body in 3/4 perspective */}
          {/* Top arched ridge & sides */}
          <path
            d="M208,128 C208,102 225,82 250,82 C255,82 260,83 266,86 L262,82 L268,82 C275,82 282,88 285,96 L287,138 C287,144 282,148 276,148 L220,158 C213,158 208,153 208,146 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Mailbox Top Arched Roof Outline */}
          <path
            d="M218,104 C218,80 238,62 265,62 C285,62 296,75 298,92 L298,136 L218,150 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Flag mechanism on side */}
          <g id="mailbox-flag">
            {/* Flagpole */}
            <path
              d="M260,88 L260,35"
              stroke="#09090b"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Flag rectangular pennant */}
            <path
              d="M260,35 L276,35 L276,50 L260,50 Z"
              fill="#09090b"
              stroke="#09090b"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Pivot pin */}
            <circle cx="260" cy="88" r="4.5" fill="#ffffff" stroke="#09090b" strokeWidth="3" />
          </g>

          {/* Mailbox Front Opening Rim (Ellipse) */}
          <ellipse
            cx="218"
            cy="114"
            rx="20"
            ry="36"
            fill="#09090b"
            stroke="#09090b"
            strokeWidth="3.5"
            transform="rotate(-15 218 114)"
          />

          {/* Inside depth gradient/hatch */}
          <ellipse
            cx="220"
            cy="114"
            rx="16"
            ry="31"
            fill="#18181b"
            transform="rotate(-15 220 114)"
          />

          {/* Dropped Open Front Door */}
          <g id="mailbox-open-door">
            <path
              d="M204,136 C200,146 195,162 195,174 C195,182 201,188 209,188 C216,188 222,180 226,170 C228,162 229,150 228,142 Z"
              fill="#ffffff"
              stroke="#09090b"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Latch handle on open door */}
            <path
              d="M194,178 L190,186 L195,190"
              stroke="#09090b"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Door inner ridge */}
            <line x1="205" y1="152" x2="218" y2="152" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="206" y1="160" x2="216" y2="160" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>

        {/* ============================================================== */}
        {/* MOTION DASHES & SPARKLES NEAR MAILBOX ENTRANCE                 */}
        {/* ============================================================== */}
        <g id="motion-rays">
          <motion.line
            x1="184"
            y1="104"
            x2="175"
            y2="102"
            stroke="#09090b"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ opacity: [0.3, 1, 0.3], x2: [175, 170, 175] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="188"
            y1="120"
            x2="178"
            y2="124"
            stroke="#09090b"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ opacity: [1, 0.3, 1], x2: [178, 173, 178] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="192"
            y1="135"
            x2="183"
            y2="142"
            stroke="#09090b"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* ============================================================== */}
        {/* FLYING LETTER / ENVELOPE WITH MOTION TRAIL                    */}
        {/* ============================================================== */}
        {/* Loop-de-loop trail above letter */}
        <motion.path
          d="M110,65 C118,50 135,42 142,54 C148,64 136,78 126,72 C120,68 126,58 135,62"
          stroke="#09090b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Fluttering Flying Letter */}
        <motion.g
          id="flying-paper"
          animate={{
            y: [0, -8, 0],
            x: [0, 6, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Folded paper sheet */}
          <path
            d="M92,80 L132,68 C135,67 138,69 139,72 L128,124 C127,127 124,129 121,128 L84,116 C81,115 80,111 81,108 L90,82 C91,80 92,80 92,80 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Folded corner top right */}
          <path
            d="M125,70 L132,68 L128,78 Z"
            fill="#09090b"
            stroke="#09090b"
            strokeWidth="2"
          />

          {/* Ruled handwriting lines on letter */}
          <line x1="94" y1="88" x2="118" y2="82" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="93" y1="96" x2="122" y2="89" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="91" y1="104" x2="115" y2="98" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="88" y1="112" x2="108" y2="107" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}
