"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Download, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export interface StickyScrollItem {
  id: string;
  num: string;
  headline?: string | React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  whatYouGet: { title: string; desc: string }[];
  ctaLabel: string;
  badge: string;
  images: {
    src: string;
    caption: string;
    tag?: string;
  }[];
  actions?: {
    label: string;
    href?: string;
    onClick?: () => void;
    isDownload?: boolean;
    variant?: "primary" | "secondary" | "download";
  }[];
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: StickyScrollItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeImageIndices, setActiveImageIndices] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Maps progress across 3 discrete card states
    const step = 1 / cardLength;
    const newIndex = Math.min(
      cardLength - 1,
      Math.max(0, Math.floor(latest / step))
    );
    if (newIndex !== activeCard) {
      setActiveCard(newIndex);
    }
  });

  const handleSelectCard = (index: number) => {
    setActiveCard(index);
    if (containerRef.current) {
      const targetScroll =
        containerRef.current.offsetTop +
        (index / (cardLength - 0.2)) * (containerRef.current.offsetHeight - window.innerHeight);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const handleSelectImage = (cardIndex: number, imgIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => ({
      ...prev,
      [cardIndex]: imgIndex,
    }));
  };

  const currentItem = content[activeCard] || content[0];
  const currentImgIndex = activeImageIndices[activeCard] || 0;
  const currentImage = currentItem.images[currentImgIndex] || currentItem.images[0];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[240vh] pb-24"
    >
      {/* Sticky Stage Container */}
      <div className="sticky top-20 sm:top-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Unified Showcase Card (Matching media_1795699019485_f4dd0fd9.jpg layout) */}
        <div className="relative rounded-3xl overflow-hidden border border-[rgba(26,56,40,0.15)] bg-[#FAF8F2] shadow-2xl shadow-[#152E20]/10 flex flex-col lg:flex-row min-h-[580px] lg:h-[620px]">
          
          {/* LEFT PANEL: Content, Step Index, Headline, Deliverables, CTA (~54% width) */}
          <div className="w-full lg:w-[54%] bg-[#FAF8F2] p-6 sm:p-9 lg:p-11 flex flex-col justify-between relative z-10 border-b lg:border-b-0 lg:border-r border-[rgba(26,56,40,0.12)]">
            
            {/* Triangular Notch pointing into right visual panel (Exact layout match from reference) */}
            <div
              className="hidden lg:block absolute -right-[23px] top-1/2 -translate-y-1/2 w-0 h-0 z-30 pointer-events-none drop-shadow-[2px_0_3px_rgba(0,0,0,0.08)]"
              style={{
                borderTop: "22px solid transparent",
                borderBottom: "22px solid transparent",
                borderLeft: "23px solid #FAF8F2",
              }}
            />

            {/* TOP ROW: Service Category Badge & Tagline (Progress tracker removed as requested) */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(26,56,40,0.1)]">
                <div className="text-xs font-mono text-[#183627] font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A29] shrink-0" />
                  <span>{currentItem.badge}</span>
                </div>

                <div className="text-[11px] font-mono text-[#3A5646] font-medium hidden sm:flex items-center gap-1.5 ml-4 text-right truncate">
                  <span className="truncate">{currentItem.tagline}</span>
                </div>
              </div>

              {/* DYNAMIC CONTENT AREA */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 sm:mt-5"
                >
                  {/* Editorial Headline matching the reference's bold display quote */}
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-[#152E20] tracking-[-0.035em] leading-[1.12] text-balance">
                    {currentItem.headline || currentItem.title}
                    <span className="text-[#D98A29] ml-1.5 font-normal">*</span>
                  </h3>

                  {/* Body Paragraph copy */}
                  <p className="mt-3 text-xs sm:text-sm text-[#3A5646] leading-relaxed font-normal">
                    {currentItem.description}
                  </p>

                  {/* Key Deliverables Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4 pt-3.5 pb-2 border-t border-[rgba(26,56,40,0.1)]">
                    {currentItem.whatYouGet.slice(0, 4).map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#152E20]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#183627] mt-0.5 shrink-0" />
                        <span className="leading-snug">
                          <strong className="font-semibold">{point.title}:</strong>{" "}
                          <span className="text-[#3A5646]">{point.desc}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* BOTTOM ROW: Action Button + Secondary Links + Editorial Footnote */}
            <div className="pt-4 border-t border-[rgba(26,56,40,0.1)] space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#183627] hover:bg-[#11261B] text-[#FAF8F2] transition-all text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:scale-[1.01] active:scale-[0.99] border border-[#11261B]"
                >
                  <span>{currentItem.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {currentItem.actions && currentItem.actions.map((act, actIdx) => {
                  if (act.isDownload) {
                    return (
                      <a
                        key={actIdx}
                        href={act.href}
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#D98A29] hover:bg-[#C2781E] text-[#152E20] transition-all text-xs sm:text-sm font-bold shadow-sm border border-[#B36F1B]"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{act.label}</span>
                      </a>
                    );
                  }

                  if (act.onClick) {
                    return (
                      <button
                        key={actIdx}
                        type="button"
                        onClick={act.onClick}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/90 hover:bg-white text-[#152E20] transition-all text-xs sm:text-sm font-semibold border border-[rgba(26,56,40,0.18)] hover:border-[#183627] cursor-pointer shadow-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#3A5646]" />
                        <span>{act.label}</span>
                      </button>
                    );
                  }

                  return (
                    <a
                      key={actIdx}
                      href={act.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/90 hover:bg-white text-[#152E20] transition-all text-xs sm:text-sm font-semibold border border-[rgba(26,56,40,0.18)] hover:border-[#183627] shadow-xs"
                    >
                      <span>{act.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Footnote matching `* We don't sell email address.` in reference */}
              <div className="text-[11px] font-mono text-[#3A5646]/75">
                * Fixed sprint scope · Verified code handover · Zero bloat architecture.
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Full-Bleed Photographic Visual (~46% width) */}
          <div className="w-full lg:w-[46%] bg-[#163826] relative overflow-hidden h-[340px] sm:h-[400px] lg:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCard}-${currentImgIndex}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.caption}
                  className="w-full h-full object-cover object-top select-none"
                />

                {/* Atmospheric Dark Forest Gradient Dissolve */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#163826]/90 via-[#163826]/20 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* MULTI-IMAGE THUMBNAIL SELECTOR (if service has multiple screenshots) */}
            {currentItem.images.length > 1 && (
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#152E20]/80 backdrop-blur-md p-1.5 rounded-full border border-white/20">
                {currentItem.images.map((img, imgIdx) => (
                  <button
                    key={imgIdx}
                    type="button"
                    onClick={(e) => handleSelectImage(activeCard, imgIdx, e)}
                    className={cn(
                      "text-[10px] font-mono px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold",
                      currentImgIndex === imgIdx
                        ? "bg-[#FAF8F2] text-[#163826] shadow-xs"
                        : "text-[#FAF8F2]/70 hover:text-white hover:bg-white/10"
                    )}
                  >
                    0{imgIdx + 1}
                  </button>
                ))}
              </div>
            )}

            {/* BOTTOM CAPTION BAR */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20 flex items-center justify-between text-xs font-mono text-[#FAF8F2]">
              <div className="flex items-center gap-2 truncate max-w-[280px]">
                <span className="w-2 h-2 rounded-full bg-[#D98A29] shrink-0" />
                <span className="truncate font-semibold">{currentImage.caption}</span>
              </div>

              {currentImage.tag && (
                <span className="text-[10px] px-2.5 py-0.5 rounded bg-white/15 text-[#FAF8F2] border border-white/20 shrink-0 font-bold uppercase tracking-wider">
                  {currentImage.tag}
                </span>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
