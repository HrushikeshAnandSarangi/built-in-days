"use client";

import React from "react";
import { motion } from "framer-motion";

export function DeskDeveloperIllustration({ className = "w-72 sm:w-88 h-64 sm:h-76" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* ============================================================== */}
        {/* THOUGHT BUBBLES ABOVE HEAD                                    */}
        {/* ============================================================== */}
        {/* Thought trail dots */}
        <circle cx="218" cy="98" r="3" fill="#09090b" />
        <circle cx="212" cy="85" r="4.5" fill="#ffffff" stroke="#09090b" strokeWidth="2.5" />

        {/* Bubble 1: Music Notes (Left) */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Cloud Bubble 1 */}
          <path
            d="M172,60 C162,60 156,70 162,82 C164,88 174,92 188,90 C198,88 206,80 202,70 C198,58 184,58 172,60 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Music Notes inside */}
          <path
            d="M176,78 L176,66 L188,63 L188,75"
            stroke="#09090b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse cx="174" cy="79" rx="3.5" ry="2.5" fill="#09090b" transform="rotate(-15 174 79)" />
          <ellipse cx="186" cy="76" rx="3.5" ry="2.5" fill="#09090b" transform="rotate(-15 186 76)" />
          {/* Tiny companion note */}
          <ellipse cx="194" cy="72" rx="2.5" ry="1.8" fill="#09090b" transform="rotate(-15 194 72)" />
          <line x1="196" y1="71" x2="196" y2="64" stroke="#09090b" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Bubble 2: Code / Architecture Squiggle (Right) */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          {/* Cloud Bubble 2 */}
          <path
            d="M228,48 C215,48 210,60 218,72 C225,82 248,84 262,76 C272,70 274,56 264,48 C252,42 238,44 228,48 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Thick fluid line squiggle */}
          <path
            d="M228,62 Q234,56 240,64 Q246,70 252,60 Q258,54 262,62"
            stroke="#09090b"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>

        {/* ============================================================== */}
        {/* DESK & COMPUTER MONITOR                                       */}
        {/* ============================================================== */}
        <g id="desk-and-pc">
          {/* Desk Top Surface */}
          <path
            d="M152,154 L198,154 C202,154 204,157 200,160 L154,160 C150,160 148,157 152,154 Z"
            fill="#09090b"
          />
          <line x1="150" y1="155" x2="204" y2="155" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />

          {/* Curved Desk Leg & Foot */}
          <path
            d="M164,155 L164,220 C164,228 156,234 156,236 L156,238 L170,238 C170,236 168,228 168,220 L168,155 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Desk Foot Base */}
          <path
            d="M152,238 L174,238 C175,238 176,239 175,240 C173,242 165,244 163,244 C161,244 153,242 151,240 C150,239 151,238 152,238 Z"
            fill="#09090b"
          />

          {/* Monitor Screen (Profile view) */}
          {/* Monitor Stand Base & Stem */}
          <path d="M158,155 L160,146 L164,146" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="158" cy="155" rx="5" ry="1.5" fill="#09090b" />

          {/* Monitor Bezel in Profile */}
          <path
            d="M161,146 L159,102 C159,99 161,98 163,98 L165,98 C167,98 168,100 168,103 L166,146 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Display surface line */}
          <line x1="165" y1="102" x2="164" y2="142" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />

          {/* Keyboard on Desk */}
          <path d="M174,154 L192,154" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />

          {/* Keyboard Typing Action Radiating Marks */}
          <motion.g
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <line x1="172" y1="140" x2="168" y2="136" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
            <line x1="176" y1="137" x2="176" y2="132" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
            <line x1="182" y1="139" x2="185" y2="134" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        </g>

        {/* ============================================================== */}
        {/* DEVELOPER SEATED IN CHAIR                                     */}
        {/* ============================================================== */}
        <g id="developer-figure">
          {/* Wooden Spindle Chair Behind/Under */}
          {/* Chair Legs */}
          <line x1="222" y1="205" x2="216" y2="242" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
          <line x1="245" y1="205" x2="252" y2="242" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
          <line x1="219" y1="228" x2="248" y2="228" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />

          {/* Chair Seat */}
          <path
            d="M214,198 C226,197 242,198 252,204 L212,204 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Chair Backrest Curve & Spindles */}
          <path
            d="M248,198 C256,178 262,150 252,130 C246,124 238,124 234,130 L234,142"
            fill="none"
            stroke="#09090b"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line x1="248" y1="156" x2="242" y2="198" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />

          {/* Legs & Trousers (Patterned / Stipple look) */}
          <path
            d="M214,198 C218,175 228,168 238,176 C242,185 244,198 240,215 C236,230 228,240 222,244 L204,242 C204,235 214,225 218,208 C218,204 214,202 214,198 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Trousers texture shading lines */}
          <path
            d="M218,185 C222,188 230,188 234,184 M222,194 C226,198 232,198 236,192 M224,204 C228,208 234,208 238,200 M222,216 C226,220 230,220 234,212 M218,228 C222,230 226,230 230,224"
            stroke="#09090b"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Shoes */}
          <path
            d="M202,242 C202,240 208,238 214,240 C218,242 224,242 224,246 C224,248 210,248 202,246 Z"
            fill="#09090b"
          />

          {/* Torso & Shirt */}
          <path
            d="M228,142 C236,146 242,158 240,178 C232,176 226,172 222,168 L222,150 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Shirt Collar / Sleeve */}
          <path
            d="M222,142 C225,138 232,138 236,142 C238,146 236,152 232,154 C226,155 222,148 222,142 Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Arms typing on keyboard */}
          <path
            d="M228,148 L206,148 C198,148 188,150 182,152 L178,154"
            fill="none"
            stroke="#09090b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Hands & Fingers resting on keys */}
          <ellipse cx="178" cy="154" rx="4.5" ry="3" fill="#ffffff" stroke="#09090b" strokeWidth="2.5" />
          <ellipse cx="184" cy="153" rx="4" ry="2.5" fill="#ffffff" stroke="#09090b" strokeWidth="2" />

          {/* Head & Face in Profile */}
          <g id="developer-head">
            {/* Neck */}
            <path d="M224,136 L224,142" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />

            {/* Face profile */}
            <path
              d="M222,136 C218,136 212,134 210,128 C209,125 211,123 213,123 C208,121 208,118 211,116 C210,113 212,110 216,110 C219,110 222,113 224,116"
              fill="#ffffff"
              stroke="#09090b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Smile */}
            <path d="M212,126 Q215,129 218,126" stroke="#09090b" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Eye */}
            <circle cx="215" cy="120" r="1.5" fill="#09090b" />

            {/* Dark Hair / Bun */}
            <path
              d="M214,112 C214,105 220,100 228,102 C236,104 240,112 238,122 C236,128 230,132 225,130 C223,126 224,116 220,114 C218,114 215,114 214,112 Z"
              fill="#09090b"
            />
            {/* Hair Bun at Back */}
            <circle cx="236" cy="112" r="6" fill="#09090b" />
          </g>
        </g>
      </svg>
    </div>
  );
}
