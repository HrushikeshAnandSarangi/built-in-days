"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, Music } from "lucide-react";
import { useHouseAudio } from "./house-music-player";

/**
 * Pixel Heart Sprite — clickable / hoverable interactive heart
 */
export function PixelHeart({
  filled = true,
  size = 16,
  className = "",
  interactive = false,
}: {
  filled?: boolean;
  size?: number;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 16 15"
      fill="none"
      shapeRendering="crispEdges"
      className={`inline-block shrink-0 ${className}`}
      whileHover={interactive ? { scale: 1.25, y: -1 } : undefined}
      whileTap={interactive ? { scale: 0.9 } : undefined}
    >
      {/* Navy Outline */}
      <path
        d="M3 1h3v1h1v1h2V2h1V1h3v1h1v1h1v4h-1v2h-1v1h-1v1h-1v1h-1v1H9v1H7v-1H6v-1H5v-1H4v-1H3V9H2V7H1V3h1V2h1V1z"
        fill="#1A2B4C"
      />
      {/* Inner Fill */}
      {filled ? (
        <>
          <path
            d="M3 2h3v1h1v1h2V3h1V2h3v1h1v4h-1v2h-1v1h-1v1h-1v1H9v1H7v-1H6v-1H5v-1H4V9H3V7H2V3h1V2z"
            fill="#6C8EBF"
          />
          <path d="M3 3h2v1H3V3zm1 1h1v1H4V4z" fill="#DCE6F2" />
          <path d="M12 3h1v4h-1v2h-1v1h-1v1H9v1H8v1h1v-1h1v-1h1v-1h1V9h1V7h1V3h-2z" fill="#475D7A" />
        </>
      ) : (
        <path
          d="M3 2h3v1h1v1h2V3h1V2h3v1h1v4h-1v2h-1v1h-1v1h-1v1H9v1H7v-1H6v-1H5v-1H4V9H3V7H2V3h1V2z"
          fill="#F7F6F1"
        />
      )}
    </motion.svg>
  );
}

/**
 * Twinkling 4-point Pixel Star
 */
export function PixelSparkle({
  size = 16,
  className = "",
  delay = 0,
}: {
  size?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      shapeRendering="crispEdges"
      className={`inline-block shrink-0 ${className}`}
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2.4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path d="M5 0h2v3h1v2h3v2H8v2H7v3H5V9H4V7H1V5h3V3h1V0z" fill="#6C8EBF" />
      <path d="M5 2h2v3h2v2H7v3H5V7H3V5h2V2z" fill="#A3BFE0" />
      <rect x="5" y="5" width="2" height="2" fill="#FFFFFF" />
    </motion.svg>
  );
}

/**
 * Cute Interactive Pixel Cat (Blinks, wags tail, purrs speech bubble on click/hover)
 */
export function PixelCat({ className = "" }: { className?: string }) {
  const [purring, setPurring] = useState(false);

  const handleInteract = () => {
    setPurring(true);
    setTimeout(() => setPurring(false), 1800);
  };

  return (
    <div
      className={`relative inline-block cursor-pointer select-none ${className}`}
      onClick={handleInteract}
      onMouseEnter={() => setPurring(true)}
      onMouseLeave={() => setPurring(false)}
      title="Click to say hi!"
    >
      <AnimatePresence>
        {purring && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.85 }}
            animate={{ opacity: 1, y: -6, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.85 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-white border-[1.5px] border-[#1A2B4C] rounded text-[10px] font-pixel text-[#1A2B4C] whitespace-nowrap shadow-[2px_2px_0px_#DCE6F2] z-20"
          >
            meow! ♡
          </motion.div>
        )}
      </AnimatePresence>

      <motion.svg
        width="54"
        height="48"
        viewBox="0 0 24 22"
        fill="none"
        shapeRendering="crispEdges"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.94 }}
      >
        {/* Tail */}
        <motion.path
          d="M17 15h3v-2h1v-3h-2v3h-2v2z"
          fill="#1A2B4C"
          animate={{ rotate: [0, 8, -4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "17px 15px" }}
        />
        <motion.path
          d="M18 14h2v-1h1v-2h-1v2h-2v1z"
          fill="#DCE6F2"
          animate={{ rotate: [0, 8, -4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "17px 15px" }}
        />

        {/* Body & Head Outline */}
        <path
          d="M5 2h2v2h1v1h4V4h1V2h2v2h1v6h-1v1h1v2h1v6H5v-6h1v-2H5v-1H4V4h1V2z"
          fill="#1A2B4C"
        />
        {/* Body Fill */}
        <path
          d="M6 4h1v2h6V4h1v1h1v5h-1v2h1v2h1v4H6v-4h1v-2H6v-2H5V5h1V4z"
          fill="#FFFFFF"
        />
        {/* Shading */}
        <path d="M13 6h2v4h-1v2h1v6h-2v-6h-1V9h1V6z" fill="#DCE6F2" />
        {/* Eyes */}
        <rect x="7" y="7" width="1.5" height="2" fill="#1A2B4C" />
        <rect x="11.5" y="7" width="1.5" height="2" fill="#1A2B4C" />
        {/* Cheek Blush */}
        <rect x="6" y="9" width="1" height="1" fill="#A3BFE0" />
        <rect x="13" y="9" width="1" height="1" fill="#A3BFE0" />
        {/* Nose & Mouth */}
        <rect x="9.5" y="8.5" width="1" height="1" fill="#6C8EBF" />
        {/* Inner Ears */}
        <rect x="5" y="3" width="1" height="1" fill="#A3BFE0" />
        <rect x="14" y="3" width="1" height="1" fill="#A3BFE0" />
        {/* Paws */}
        <rect x="7" y="18" width="2" height="1" fill="#A3BFE0" />
        <rect x="11" y="18" width="2" height="1" fill="#A3BFE0" />
      </motion.svg>
    </div>
  );
}

/**
 * Interactive Smiling Retro CRT House Music Player
 * Plays synthesized Deep / French House beats via Web Audio API when toggled!
 */
export function PixelCRTMonitor({ className = "" }: { className?: string }) {
  const { isPlaying, currentTrack, togglePlay, nextTrack } = useHouseAudio();

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Retro Pixel Music Player Bubble Card */}
      <div className="mb-2 bg-white border-[1.5px] border-[#1A2B4C] rounded-md px-2.5 sm:px-3 py-2 shadow-[3px_3px_0px_#DCE6F2] w-[178px] sm:w-[200px]">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1 font-pixel text-[9px] font-bold text-[#1A2B4C] truncate">
              <Music className="w-2.5 h-2.5 shrink-0 text-[#6C8EBF]" />
              <span className="truncate">{currentTrack.title}</span>
            </div>
            <div className="font-pixel text-[8px] text-[#475D7A] truncate mt-0.5">
              {isPlaying ? `PLAYING · ${currentTrack.bpm} BPM` : currentTrack.subtitle}
            </div>
          </div>

          <button
            type="button"
            onClick={nextTrack}
            className="p-1 bg-[#EBF1F8] hover:bg-[#DCE6F2] border border-[#1A2B4C] rounded-xs text-[#1A2B4C] transition-colors cursor-pointer shrink-0"
            title="Next House Mix"
            aria-label="Next House track"
          >
            <SkipForward className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Play/Pause Button + Mini Equalizer Bar */}
        <div className="mt-2 flex items-center gap-2">
          <motion.button
            type="button"
            onClick={togglePlay}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1 px-2 rounded-xs border-[1.5px] border-[#1A2B4C] font-pixel text-[9px] font-bold cursor-pointer transition-colors ${
              isPlaying
                ? "bg-[#1A2B4C] text-[#F7F6F1]"
                : "bg-[#DCE6F2] hover:bg-[#A3BFE0] text-[#1A2B4C]"
            }`}
            aria-label={isPlaying ? "Pause house music" : "Play house music"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-2.5 h-2.5 fill-current" />
                <span>PAUSE</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 fill-current" />
                <span>PLAY HOUSE</span>
              </>
            )}
          </motion.button>

          {/* Animated Level Meter */}
          <div className="flex items-end gap-[2px] h-4 px-1 bg-[#F7F6F1] border border-[#1A2B4C] rounded-xs">
            {[0.4, 0.95, 0.6, 0.85].map((ratio, i) => (
              <motion.span
                key={i}
                className="w-[2.5px] bg-[#6C8EBF]"
                animate={
                  isPlaying
                    ? { height: ["3px", `${Math.round(ratio * 12)}px`, "4px"] }
                    : { height: "3px" }
                }
                transition={{
                  duration: 0.38 + i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Retro Pixel CRT Hardware SVG (Clicking screen also toggles Play/Pause!) */}
      <motion.div
        onClick={togglePlay}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="relative cursor-pointer"
        title={isPlaying ? "Click monitor to pause house music" : "Click monitor to play house music"}
      >
        <svg
          width="116"
          height="104"
          viewBox="0 0 42 38"
          fill="none"
          shapeRendering="crispEdges"
          className="sm:w-[126px] sm:h-[112px]"
        >
          {/* Outer CRT Shell */}
          <rect x="4" y="2" width="32" height="23" fill="#1A2B4C" />
          <rect x="5" y="3" width="30" height="21" fill="#DCE6F2" />
          <rect x="33" y="3" width="2" height="21" fill="#A3BFE0" />
          <rect x="5" y="22" width="30" height="2" fill="#A3BFE0" />

          {/* Screen Bezel */}
          <rect x="7" y="5" width="24" height="15" fill="#1A2B4C" />
          <rect x="8" y="6" width="22" height="13" fill="#2A426E" />
          <rect x="9" y="7" width="20" height="11" fill="#1A2B4C" />

          {/* Screen Highlight */}
          <rect x="9" y="7" width="2" height="1" fill="#6C8EBF" />
          <rect x="9" y="8" width="1" height="2" fill="#6C8EBF" />

          {/* Screen Display: Equalizer Bars when playing OR cute smiling face when paused */}
          {isPlaying ? (
            <g>
              <rect x="11" y="13" width="2" height="4" fill="#6C8EBF" />
              <rect x="14" y="10" width="2" height="7" fill="#DCE6F2" />
              <rect x="17" y="11" width="2" height="6" fill="#A3BFE0" />
              <rect x="20" y="9" width="2" height="8" fill="#DCE6F2" />
              <rect x="23" y="12" width="2" height="5" fill="#6C8EBF" />
              <rect x="26" y="10" width="2" height="7" fill="#A3BFE0" />
            </g>
          ) : (
            <g>
              <rect x="13" y="10" width="2" height="2" fill="#DCE6F2" />
              <rect x="23" y="10" width="2" height="2" fill="#DCE6F2" />
              <rect x="16" y="13" width="6" height="1" fill="#DCE6F2" />
              <rect x="15" y="12" width="1" height="1" fill="#DCE6F2" />
              <rect x="22" y="12" width="1" height="1" fill="#DCE6F2" />
            </g>
          )}

          {/* Power LED (Pulses when playing) */}
          <rect x="30" y="21" width="2" height="1" fill={isPlaying ? "#6C8EBF" : "#A3BFE0"} />

          {/* Stand */}
          <rect x="14" y="25" width="12" height="2" fill="#1A2B4C" />
          <rect x="15" y="25" width="10" height="1" fill="#A3BFE0" />

          {/* Desktop Tower / Disk Drive Base */}
          <rect x="2" y="27" width="36" height="9" fill="#1A2B4C" />
          <rect x="3" y="28" width="34" height="7" fill="#DCE6F2" />
          <rect x="5" y="30" width="14" height="2" fill="#1A2B4C" />
          <rect x="6" y="30.5" width="12" height="1" fill="#A3BFE0" />
          <rect x="24" y="30" width="3" height="2" fill={isPlaying ? "#1A2B4C" : "#6C8EBF"} />
          <rect x="29" y="30" width="5" height="2" fill="#1A2B4C" />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Pixel Flower Icon (for What I Do #1, Hero badges, borders)
 */
export function PixelFlowerIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" shapeRendering="crispEdges">
      {/* Stem & Leaves */}
      <rect x="9" y="11" width="2" height="8" fill="#1A2B4C" />
      <rect x="5" y="14" width="4" height="2" fill="#1A2B4C" />
      <rect x="6" y="14.5" width="3" height="1" fill="#6C8EBF" />
      <rect x="11" y="13" width="4" height="2" fill="#1A2B4C" />
      <rect x="11" y="13.5" width="3" height="1" fill="#A3BFE0" />
      {/* Petals */}
      <path d="M7 2h6v2h2v2h2v4h-2v2H5v-2H3V6h2V4h2V2z" fill="#1A2B4C" />
      <path d="M8 3h4v2h2v1h2v3h-2v2H6V9H4V6h2V5h2V3z" fill="#A3BFE0" />
      <rect x="8" y="4" width="2" height="2" fill="#DCE6F2" />
      <rect x="5" y="6" width="2" height="2" fill="#DCE6F2" />
      {/* Center */}
      <rect x="8" y="6" width="4" height="4" fill="#1A2B4C" />
      <rect x="9" y="7" width="2" height="2" fill="#6C8EBF" />
    </svg>
  );
}

/**
 * Pixel Gameboy / Handheld Icon (for What I Do #2 - Cross-Platform)
 */
export function PixelHandheldIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" shapeRendering="crispEdges">
      <rect x="4" y="1" width="12" height="18" fill="#1A2B4C" />
      <rect x="5" y="2" width="10" height="16" fill="#DCE6F2" />
      <rect x="13" y="2" width="2" height="16" fill="#A3BFE0" />
      {/* Screen */}
      <rect x="6" y="3" width="8" height="7" fill="#1A2B4C" />
      <rect x="7" y="4" width="6" height="5" fill="#6C8EBF" />
      <rect x="8" y="5" width="2" height="2" fill="#FFFFFF" />
      {/* D-pad */}
      <rect x="6" y="13" width="3" height="1" fill="#1A2B4C" />
      <rect x="7" y="12" width="1" height="3" fill="#1A2B4C" />
      {/* A/B buttons */}
      <rect x="11" y="13" width="1.5" height="1.5" fill="#1A2B4C" />
      <rect x="13" y="12" width="1.5" height="1.5" fill="#1A2B4C" />
    </svg>
  );
}

/**
 * Pixel Crystal Icon (for What I Do #3 - Sub-ms Systems Speed)
 */
export function PixelCrystalIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" shapeRendering="crispEdges">
      <path d="M9 1h2l4 5v8l-4 5H9l-4-5V6l4-5z" fill="#1A2B4C" />
      <path d="M9.5 2.5h1L14 6.5v7l-3.5 4h-1L6 13.5v-7l3.5-4z" fill="#A3BFE0" />
      <rect x="7" y="7" width="3" height="6" fill="#DCE6F2" />
      <rect x="10" y="6" width="3" height="8" fill="#6C8EBF" />
      <rect x="8" y="4" width="2" height="2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Pixel Watering Can Icon (for What I Do #4 - Built to Last)
 */
export function PixelWateringCanIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" shapeRendering="crispEdges">
      {/* Spout */}
      <rect x="2" y="7" width="4" height="2" fill="#1A2B4C" />
      <rect x="4" y="9" width="3" height="2" fill="#1A2B4C" />
      <rect x="1" y="6" width="2" height="2" fill="#6C8EBF" />
      {/* Body */}
      <rect x="6" y="7" width="9" height="9" fill="#1A2B4C" />
      <rect x="7" y="8" width="7" height="7" fill="#A3BFE0" />
      <rect x="7" y="8" width="3" height="7" fill="#DCE6F2" />
      {/* Handle */}
      <rect x="15" y="8" width="3" height="6" fill="#1A2B4C" />
      <rect x="15" y="9" width="2" height="4" fill="#F7F6F1" />
      <rect x="8" y="4" width="5" height="3" fill="#1A2B4C" />
      <rect x="9" y="5" width="3" height="2" fill="#F7F6F1" />
      {/* Water drops */}
      <rect x="1" y="10" width="1.5" height="2" fill="#6C8EBF" />
      <rect x="2" y="14" width="1.5" height="2" fill="#A3BFE0" />
    </svg>
  );
}

/**
 * Pixel Potted Plant Icon (Hero Sidebar & corners)
 */
export function PixelPottedPlant({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 20" fill="none" shapeRendering="crispEdges">
      {/* Flower & Leaves */}
      <rect x="7" y="2" width="4" height="4" fill="#1A2B4C" />
      <rect x="8" y="3" width="2" height="2" fill="#A3BFE0" />
      <rect x="8" y="6" width="2" height="5" fill="#1A2B4C" />
      <rect x="5" y="8" width="3" height="2" fill="#6C8EBF" />
      <rect x="10" y="7" width="3" height="2" fill="#6C8EBF" />
      {/* Pot */}
      <rect x="4" y="11" width="10" height="2" fill="#1A2B4C" />
      <rect x="5" y="11.5" width="8" height="1" fill="#DCE6F2" />
      <rect x="5" y="13" width="8" height="5" fill="#1A2B4C" />
      <rect x="6" y="14" width="6" height="3" fill="#A3BFE0" />
    </svg>
  );
}

/**
 * Pixel Radio Sprite (for Now Playing Bar)
 */
export function PixelRadioIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 18" fill="none" shapeRendering="crispEdges">
      <rect x="4" y="2" width="12" height="1" fill="#1A2B4C" />
      <rect x="14" y="1" width="1" height="4" fill="#1A2B4C" />
      <rect x="2" y="5" width="16" height="11" fill="#1A2B4C" />
      <rect x="3" y="6" width="14" height="9" fill="#DCE6F2" />
      <rect x="4" y="8" width="6" height="5" fill="#1A2B4C" />
      <rect x="5" y="9" width="4" height="3" fill="#6C8EBF" />
      <rect x="11" y="8" width="5" height="2" fill="#1A2B4C" />
      <rect x="12" y="12" width="2" height="2" fill="#1A2B4C" />
      <rect x="15" y="12" width="1.5" height="1.5" fill="#6C8EBF" />
    </svg>
  );
}

/**
 * Pixel Paintbrush Icon (Service #2 - Fix & Accelerate)
 */
export function PixelBrushIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" shapeRendering="crispEdges">
      <path d="M14 2h3v3l-7 7-3-3 7-7z" fill="#1A2B4C" />
      <path d="M14.5 3h2v2l-6 6-2-2 6-6z" fill="#A3BFE0" />
      <rect x="4" y="12" width="4" height="4" fill="#1A2B4C" />
      <rect x="5" y="13" width="2" height="2" fill="#6C8EBF" />
      <rect x="2" y="15" width="4" height="3" fill="#6C8EBF" />
      <rect x="3" y="16" width="2" height="1" fill="#DCE6F2" />
    </svg>
  );
}

/**
 * Pixel Terminal / Engineer Avatar Icon (Service #3 - Systems Audit)
 */
export function PixelEngineerIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" shapeRendering="crispEdges">
      {/* Hair / Cap */}
      <rect x="6" y="2" width="8" height="4" fill="#1A2B4C" />
      <rect x="7" y="3" width="6" height="2" fill="#475D7A" />
      {/* Face */}
      <rect x="6" y="6" width="8" height="5" fill="#1A2B4C" />
      <rect x="7" y="6" width="6" height="4" fill="#FFFFFF" />
      <rect x="8" y="7" width="1" height="2" fill="#1A2B4C" />
      <rect x="11" y="7" width="1" height="2" fill="#1A2B4C" />
      {/* Torso */}
      <rect x="5" y="11" width="10" height="7" fill="#1A2B4C" />
      <rect x="6" y="12" width="8" height="5" fill="#6C8EBF" />
      <rect x="8" y="12" width="4" height="2" fill="#DCE6F2" />
    </svg>
  );
}

/**
 * Pixel Avatar Portraits for Testimonials (distinct clean pixel characters)
 */
export function PixelTestimonialAvatar({ variant = 0 }: { variant?: number }) {
  const hairColors = ["#475D7A", "#1A2B4C", "#6C8EBF"];
  const shirtColors = ["#A3BFE0", "#6C8EBF", "#DCE6F2"];
  const bgColors = ["#EBF1F8", "#DCE6F2", "#F7F6F1"];

  const hair = hairColors[variant % hairColors.length];
  const shirt = shirtColors[variant % shirtColors.length];
  const bg = bgColors[variant % bgColors.length];

  return (
    <svg width="52" height="52" viewBox="0 0 20 20" fill="none" shapeRendering="crispEdges">
      <rect width="20" height="20" fill={bg} />
      {/* Hair / Hat */}
      {variant === 1 ? (
        <>
          <rect x="5" y="3" width="10" height="3" fill="#1A2B4C" />
          <rect x="6" y="4" width="8" height="2" fill="#6C8EBF" />
          <rect x="4" y="6" width="12" height="1" fill="#1A2B4C" />
        </>
      ) : (
        <>
          <rect x="5" y="3" width="10" height="5" fill="#1A2B4C" />
          <rect x="6" y="4" width="8" height="3" fill={hair} />
        </>
      )}
      {/* Face */}
      <rect x="6" y="7" width="8" height="6" fill="#1A2B4C" />
      <rect x="7" y="7" width="6" height="5" fill="#FFFFFF" />
      <rect x="8" y="9" width="1" height="1.5" fill="#1A2B4C" />
      <rect x="11" y="9" width="1" height="1.5" fill="#1A2B4C" />
      <rect x="9" y="11" width="2" height="0.8" fill="#6C8EBF" />
      {/* Shoulders */}
      <rect x="4" y="13" width="12" height="7" fill="#1A2B4C" />
      <rect x="5" y="14" width="10" height="6" fill={shirt} />
    </svg>
  );
}

/**
 * Interactive Pixel Mailbox (Footer CTA banner left)
 */
export function PixelMailbox({ size = 84 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      shapeRendering="crispEdges"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer select-none"
      whileHover={{ y: -3 }}
    >
      {/* Post */}
      <rect x="14" y="18" width="4" height="12" fill="#1A2B4C" />
      <rect x="15" y="18" width="2" height="12" fill="#6C8EBF" />
      {/* Mailbox Body */}
      <rect x="5" y="7" width="20" height="12" fill="#1A2B4C" />
      <rect x="6" y="8" width="18" height="10" fill="#6C8EBF" />
      <rect x="6" y="8" width="18" height="3" fill="#A3BFE0" />
      {/* Open Door */}
      <rect x="4" y="10" width="4" height="8" fill="#1A2B4C" />
      <rect x="5" y="11" width="2" height="6" fill="#2A426E" />
      {/* Peeking Letter Envelope */}
      <motion.g
        animate={{ x: hovered ? -3 : 0, y: hovered ? -1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <rect x="2" y="11" width="7" height="5" fill="#1A2B4C" />
        <rect x="3" y="12" width="5" height="3" fill="#FFFFFF" />
        <rect x="4" y="13" width="3" height="1" fill="#6C8EBF" />
      </motion.g>
      {/* Red/Blue Mailbox Flag */}
      <motion.g
        animate={{ rotate: hovered ? -25 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{ transformOrigin: "21px 11px" }}
      >
        <rect x="20" y="3" width="2" height="9" fill="#1A2B4C" />
        <rect x="20" y="3" width="5" height="3" fill="#1A2B4C" />
        <rect x="21" y="4" width="3" height="1" fill="#DCE6F2" />
      </motion.g>
    </motion.svg>
  );
}

/**
 * Cute Pixel Character waving (Footer CTA banner right)
 */
export function PixelDeveloperBuddy({ size = 76 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 26"
      fill="none"
      shapeRendering="crispEdges"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08 }}
      className="cursor-pointer select-none"
    >
      {/* Hair */}
      <rect x="6" y="2" width="12" height="6" fill="#1A2B4C" />
      <rect x="7" y="3" width="10" height="4" fill="#2A426E" />
      {/* Face */}
      <rect x="6" y="7" width="12" height="7" fill="#1A2B4C" />
      <rect x="7" y="8" width="10" height="5" fill="#F7F6F1" />
      <rect x="8.5" y="10" width="1.5" height="2" fill="#1A2B4C" />
      <rect x="14" y="10" width="1.5" height="2" fill="#1A2B4C" />
      <rect x="11" y="12" width="2" height="0.8" fill="#6C8EBF" />
      {/* Shirt */}
      <rect x="5" y="14" width="14" height="7" fill="#1A2B4C" />
      <rect x="6" y="15" width="12" height="5" fill="#FFFFFF" />
      <rect x="8" y="15" width="8" height="4" fill="#A3BFE0" />
      {/* Pants & Boots */}
      <rect x="6" y="20" width="5" height="4" fill="#1A2B4C" />
      <rect x="13" y="20" width="5" height="4" fill="#1A2B4C" />
      <rect x="7" y="21" width="3" height="2" fill="#475D7A" />
      <rect x="14" y="21" width="3" height="2" fill="#475D7A" />
    </motion.svg>
  );
}

/**
 * Pixel Grass Divider Strip running across full sections
 */
export function PixelGrassBorder() {
  return (
    <div className="w-full h-3 overflow-hidden flex items-end border-b-[1.5px] border-[#1A2B4C] select-none pointer-events-none">
      <div
        className="w-full h-full opacity-90"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent 0px, transparent 10px,
            #6C8EBF 10px, #6C8EBF 12px,
            transparent 12px, transparent 22px,
            #A3BFE0 22px, #A3BFE0 26px,
            transparent 26px, transparent 42px,
            #1A2B4C 42px, #1A2B4C 44px,
            transparent 44px, transparent 60px
          )`,
        }}
      />
    </div>
  );
}
