"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Play, Pause, SkipForward, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ServicesShowcase } from "./ServicesShowcase";
import { useHouseAudio } from "./ui/house-music-player";
import {
  PixelHeart,
  PixelSparkle,
  PixelCat,
  PixelCRTMonitor,
  PixelFlowerIcon,
  PixelHandheldIcon,
  PixelCrystalIcon,
  PixelWateringCanIcon,
  PixelPottedPlant,
  PixelRadioIcon,
  PixelGrassBorder,
} from "./ui/pixel-sprites";

const LINKEDIN_URL = "https://www.linkedin.com/in/hrushikesh-anand-sarangi-645b02269/";

export function HeroServices() {
  // Interactive hearts count in left hero sidebar
  const [hearts, setHearts] = useState([true, true, true]);
  const { isPlaying, currentTrack, togglePlay, nextTrack } = useHouseAudio();

  const toggleHeart = (idx: number) => {
    setHearts((prev) => prev.map((h, i) => (i === idx ? !h : h)));
  };

  const handleOpenAudit = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tempest-audit"));
    }
  };

  const pillars = [
    {
      title: "ZERO BLOAT",
      desc: "Clean Next.js & Rust codebases without fragile bloat.",
      icon: <PixelFlowerIcon size={36} />,
    },
    {
      title: "CROSS-PLATFORM",
      desc: "Tauri 2.0 apps compiled under 25MB across 4 OS targets.",
      icon: <PixelHandheldIcon size={36} />,
    },
    {
      title: "SUB-MS SPEED",
      desc: "Flamegraph profiling, WAL pools & lock elimination.",
      icon: <PixelCrystalIcon size={36} />,
    },
    {
      title: "BUILT TO LAST",
      desc: "Strict TypeScript schemas, soak tests & clean handover.",
      icon: <PixelWateringCanIcon size={36} />,
    },
  ];

  const [likedPillars, setLikedPillars] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const togglePillarLike = (idx: number) => {
    setLikedPillars((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      {/* ===================================================================== */}
      {/* SECTION 1: PIXEL DIGITAL GARDEN HERO                                   */}
      {/* ===================================================================== */}
      <section className="relative bg-[#F7F6F1] pt-5 sm:pt-9 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch">
            {/* LEFT VERTICAL PIXEL RAIL (Desktop Sidebar) */}
            <aside className="hidden lg:flex flex-col items-center gap-3 w-16 shrink-0 pt-1">
              {/* Top Monogram Box */}
              <motion.div
                whileHover={{ y: -2 }}
                className="w-14 h-14 bg-white border-[1.5px] border-[#1A2B4C] rounded-md shadow-[2px_2px_0px_#DCE6F2] flex items-center justify-center"
                title="Hrushikesh Anand Sarangi"
              >
                <PixelFlowerIcon size={30} />
              </motion.div>

              {/* Interactive HP Hearts Strip */}
              <div
                className="w-14 py-2 bg-white border-[1.5px] border-[#1A2B4C] rounded-md shadow-[2px_2px_0px_#DCE6F2] flex items-center justify-center gap-1"
                title="Click hearts to toggle health!"
              >
                {hearts.map((filled, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleHeart(idx)}
                    className="cursor-pointer focus:outline-none"
                    aria-label="Toggle pixel heart"
                  >
                    <PixelHeart filled={filled} size={11} interactive />
                  </button>
                ))}
              </div>

              {/* EST 2024 + Potted Plant Box */}
              <div className="w-14 py-3 px-1 bg-white border-[1.5px] border-[#1A2B4C] rounded-md shadow-[2px_2px_0px_#DCE6F2] flex flex-col items-center gap-2 text-center">
                <span className="font-pixel text-[8px] leading-tight text-[#1A2B4C] font-bold">
                  EST.
                  <br />
                  2024
                </span>
                <PixelSparkle size={10} />
                <PixelPottedPlant size={28} />
              </div>

              {/* Social Links Rail */}
              <div className="w-14 py-3 bg-white border-[1.5px] border-[#1A2B4C] rounded-md shadow-[2px_2px_0px_#DCE6F2] flex flex-col items-center gap-3">
                <a
                  href="https://github.com/HrushikeshAnandSarangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A2B4C] hover:text-[#6C8EBF] hover:scale-110 transition-all"
                  title="GitHub: @HrushikeshAnandSarangi"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A2B4C] hover:text-[#6C8EBF] hover:scale-110 transition-all"
                  title="LinkedIn: Hrushikesh Anand Sarangi"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="mailto:hrushikeshsarangi7@gmail.com"
                  className="text-[#1A2B4C] hover:text-[#6C8EBF] hover:scale-110 transition-all"
                  title="Email: hrushikeshsarangi7@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </aside>

            {/* MAIN HERO CONTENT GRID */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-3 sm:pb-5">
              {/* HERO LEFT COPY (6 cols) */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 pt-2 sm:pt-3 pb-2 lg:pb-10 relative z-10">
                {/* Chunky Pixel Display Headline (Clean without top badge as requested) */}
                <h1 className="font-pixel-display font-bold text-[2.6rem] sm:text-6xl xl:text-[4.4rem] tracking-[-0.02em] leading-[0.94] text-[#1A2B4C] uppercase">
                  <span className="block">I BUILD</span>
                  <span className="block">DIGITAL</span>
                  <span className="inline-flex items-center gap-2.5 sm:gap-3 flex-wrap">
                    <span>SYSTEMS</span>
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      <PixelHeart size={28} filled interactive />
                    </motion.span>
                  </span>
                </h1>

                <p className="font-mono-body text-xs sm:text-sm text-[#475D7A] leading-relaxed max-w-md">
                  Full-stack Next.js web platforms, ultra-lean Tauri desktop software, and sub-millisecond Rust systems engineered with empirical speed and heart.
                </p>

                {/* Primary & Secondary Chunky Pixel Buttons (Clean without lightbulb emoji as requested) */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                  <a href="#projects" className="pixel-btn-primary text-[11px] sm:text-xs py-2.5 px-4 sm:px-5">
                    <span>VIEW WORK</span>
                    <span>&gt;</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleOpenAudit}
                    className="pixel-btn-secondary text-[11px] sm:text-xs py-2.5 px-4 sm:px-5"
                  >
                    <span>SYSTEMS AUDIT</span>
                    <span>↗</span>
                  </button>
                </div>

                {/* Mobile & Tablet Social Links Strip */}
                <div className="flex lg:hidden flex-wrap items-center gap-2 pt-1">
                  <a
                    href="https://github.com/HrushikeshAnandSarangi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border-[1.5px] border-[#1A2B4C] rounded text-[10px] font-pixel text-[#1A2B4C]"
                  >
                    <GithubIcon className="w-3.5 h-3.5 fill-current" />
                    <span>GITHUB</span>
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border-[1.5px] border-[#1A2B4C] rounded text-[10px] font-pixel text-[#1A2B4C]"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                    <span>LINKEDIN</span>
                  </a>
                  <a
                    href="mailto:hrushikeshsarangi7@gmail.com"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border-[1.5px] border-[#1A2B4C] rounded text-[10px] font-pixel text-[#1A2B4C]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>EMAIL</span>
                  </a>
                </div>
              </div>

              {/* HERO RIGHT BOTANICAL PIXEL GARDEN + INTERACTIVE HOUSE MUSIC PLAYER + CAT (6 cols) */}
              <div className="lg:col-span-6 relative min-h-[290px] sm:min-h-[390px] flex items-end justify-end">
                {/* Twinkling Stars */}
                <PixelSparkle size={16} delay={0} className="hidden sm:inline-block absolute top-6 left-8 z-20" />
                <PixelSparkle size={14} delay={0.9} className="hidden sm:inline-block absolute top-24 left-4 z-20" />
                <PixelSparkle size={15} delay={1.5} className="absolute top-3 right-6 z-20" />

                {/* Custom Generated Blooming Blue Pixel Poppy Illustration with seamless edge mask */}
                <div className="relative w-full h-[280px] sm:h-[400px] flex items-end justify-start sm:justify-end pointer-events-none select-none">
                  <img
                    src="/images/pixel_hero_flowers.jpg"
                    alt="Pixel art blue poppy flowers in bloom"
                    className="h-full w-auto object-contain object-bottom mix-blend-multiply brightness-[1.06] contrast-[1.05]"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(ellipse 85% 90% at 62% 55%, #000 62%, transparent 98%)",
                      maskImage:
                        "radial-gradient(ellipse 85% 90% at 62% 55%, #000 62%, transparent 98%)",
                    }}
                  />
                </div>

                {/* Cute Purring Pixel Cat at bottom-left */}
                <div className="absolute bottom-1 left-0 sm:left-5 z-20">
                  <PixelCat />
                </div>

                {/* Interactive Retro CRT House Music Player on bottom-right foreground */}
                <div className="absolute bottom-1 right-0 sm:right-2 z-20">
                  <PixelCRTMonitor />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Pixel Grass & Foliage Shoreline Border */}
        <PixelGrassBorder />
      </section>

      {/* ===================================================================== */}
      {/* NOW PLAYING: LIVE HOUSE MUSIC PLAYER BAR                              */}
      {/* ===================================================================== */}
      <div className="bg-[#F7F6F1] pt-4 sm:pt-5 pb-5 sm:pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2.5 sm:gap-3">
          <div className="flex-1 bg-[#DCE6F2]/75 border-[1.5px] border-[#1A2B4C] rounded-md px-2.5 sm:px-4 py-2 shadow-[3px_3px_0px_#DCE6F2] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 overflow-hidden">
            {/* Left Radio + Play/Pause + Track Switcher */}
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
              <button
                type="button"
                onClick={togglePlay}
                className={`shrink-0 flex items-center gap-1.5 px-2 py-1 border border-[#1A2B4C] rounded transition-colors cursor-pointer ${
                  isPlaying
                    ? "bg-[#1A2B4C] text-[#F7F6F1]"
                    : "bg-white hover:bg-[#EBF1F8] text-[#1A2B4C]"
                }`}
                title={isPlaying ? "Pause house music" : "Play house music"}
                aria-label={isPlaying ? "Pause house music" : "Play house music"}
              >
                <PixelRadioIcon size={18} />
                {isPlaying ? (
                  <Pause className="w-3 h-3 fill-current" />
                ) : (
                  <Play className="w-3 h-3 fill-current" />
                )}
              </button>

              <button
                type="button"
                onClick={nextTrack}
                className="text-left min-w-0 flex-1 cursor-pointer group"
                title="Click to switch house track"
              >
                <div className="font-pixel text-[9.5px] sm:text-[11px] font-bold text-[#1A2B4C] truncate group-hover:text-[#475D7A] transition-colors">
                  {isPlaying
                    ? `NOW PLAYING: ${currentTrack.title} · ${currentTrack.bpm} BPM ♪`
                    : `HOUSE RADIO: ${currentTrack.title} (TAP PLAY FOR BEATS) ♪`}
                </div>
              </button>
            </div>

            {/* Right Skip + Case Study Link + Equalizer */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={nextTrack}
                className="p-1 bg-white hover:bg-[#EBF1F8] border border-[#1A2B4C] rounded-xs text-[#1A2B4C] cursor-pointer"
                title="Next house mix"
                aria-label="Next house mix"
              >
                <SkipForward className="w-3 h-3" />
              </button>

              <a
                href="#case-study"
                className="hidden md:inline-flex items-center gap-1 font-pixel text-[10px] font-bold text-[#1A2B4C] hover:underline"
              >
                <span>READ BENCHMARKS</span>
                <ArrowRight className="w-3 h-3" />
              </a>

              {/* Live House Audio Equalizer Bars */}
              <div className="flex items-end gap-[2px] h-4 px-1" aria-hidden="true">
                {[0.5, 0.95, 0.65, 1.0].map((heightRatio, barIdx) => (
                  <motion.span
                    key={barIdx}
                    className="w-[3px] bg-[#1A2B4C]"
                    animate={
                      isPlaying
                        ? { height: ["4px", `${Math.round(heightRatio * 14)}px`, "4px"] }
                        : { height: "4px" }
                    }
                    transition={{
                      duration: 0.42 + barIdx * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Cute Pixel Crystal Accent beside Ticker */}
          <motion.div
            whileHover={{ rotate: [0, -8, 8, 0] }}
            className="hidden sm:flex shrink-0 items-center justify-center w-10 h-10 bg-white border-[1.5px] border-[#1A2B4C] rounded-md shadow-[2px_2px_0px_#DCE6F2] cursor-pointer"
            title="Built with zero bloat"
          >
            <PixelCrystalIcon size={24} />
          </motion.div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* SECTION 2: WHAT I DO (4-Pillar Vertical Pixel Cards)                  */}
      {/* ===================================================================== */}
      <section className="py-10 sm:py-16 bg-[#F7F6F1] border-t border-[#DCE6F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 items-center">
            {/* Left Intro Column (4 cols) */}
            <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
              <div className="pixel-pill-badge">
                <span>WHAT I DO</span>
              </div>

              <h2 className="font-pixel-display font-bold text-2xl sm:text-3xl leading-[1.08] text-[#1A2B4C] uppercase flex items-start gap-2">
                <span>WE GROW IDEAS INTO FAST SYSTEMS</span>
                <span className="shrink-0 mt-1">
                  <PixelFlowerIcon size={22} />
                </span>
              </h2>

              <p className="font-mono-body text-xs sm:text-[13px] text-[#475D7A] leading-relaxed">
                Combining pixel-crisp interface craft with empirical Rust &amp; kernel optimization to deliver measurable, resilient software.
              </p>

              <button
                type="button"
                onClick={handleOpenAudit}
                className="inline-flex items-center gap-2 font-pixel text-[11px] font-bold text-[#1A2B4C] border-b-[1.5px] border-dashed border-[#1A2B4C] pb-0.5 hover:text-[#6C8EBF] hover:border-[#6C8EBF] transition-colors cursor-pointer"
              >
                <span>ABOUT SYSTEMS AUDIT</span>
                <span>→</span>
              </button>
            </div>

            {/* Right 4 Vertical Pillar Cards (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="pixel-card p-3.5 sm:p-5 flex flex-col items-center justify-between text-center min-h-[180px] sm:min-h-[210px] group"
                >
                  <motion.div
                    whileHover={{ y: -3, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 320, damping: 16 }}
                    className="mt-1"
                  >
                    {pillar.icon}
                  </motion.div>

                  <div className="my-2.5 sm:my-3 space-y-1">
                    <h3 className="font-pixel text-[10px] sm:text-[11px] font-bold text-[#1A2B4C] tracking-wide uppercase">
                      {pillar.title}
                    </h3>
                    <p className="font-mono-body text-[10.5px] sm:text-[11px] text-[#475D7A] leading-snug">
                      {pillar.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => togglePillarLike(idx)}
                    className="pt-1 cursor-pointer focus:outline-none"
                    aria-label={`Favorite ${pillar.title}`}
                  >
                    <PixelHeart filled={likedPillars[idx]} size={15} interactive />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3: SERVICES (All 3 Services with Micro-Interactive Specs)     */}
      {/* ===================================================================== */}
      <ServicesShowcase />
    </>
  );
}
