"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Download, ExternalLink } from "lucide-react";

export interface StickyScrollItem {
  id: string;
  num: string;
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
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Highly responsive: 1 natural scroll moves to the next card
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 0.2));
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className="relative flex justify-center space-x-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Left Column: Scrollable text content cards */}
      <div className="relative flex items-start px-2 w-full lg:w-1/2">
        <div className="max-w-xl w-full">
          {content.map((item, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={item.id}
                className={cn(
                  "min-h-[50vh] flex flex-col justify-center py-10 transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-35 hover:opacity-70"
                )}
              >
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2822] tracking-[-0.035em] leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-[#D98A29] font-bold mt-1.5 mb-3">
                  {item.tagline}
                </p>

                <p className="text-sm text-[#32443A] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* What You Get checklist */}
                <div className="space-y-2.5 pt-4 border-t border-[rgba(28,40,34,0.16)] mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#1C2822] font-bold">
                    What You Get
                  </div>
                  <ul className="space-y-2 text-xs text-[#1C2822]">
                    {item.whatYouGet.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B533E] mt-1.5 shrink-0" />
                        <span className="leading-snug">
                          <strong className="text-[#1C2822] font-semibold">{point.title}:</strong>{" "}
                          <span className="text-[#32443A]">{point.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B533E] hover:bg-[#143F2F] text-[#F5F3EC] transition-all text-xs sm:text-sm font-bold shadow-sm hover:scale-[1.01] active:scale-[0.99] border border-[#143F2F]"
                  >
                    <span>{item.ctaLabel}</span>
                  </a>

                  {item.actions && item.actions.map((act, actIdx) => {
                    if (act.isDownload) {
                      return (
                        <a
                          key={actIdx}
                          href={act.href}
                          download
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#D98A29] hover:bg-[#C2781E] text-[#1C2822] transition-all text-xs sm:text-sm font-bold shadow-sm hover:scale-[1.01] active:scale-[0.99] border border-[#B36F1B]"
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
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#D0D9CD] hover:bg-[#E3E8E1] text-[#1C2822] transition-all text-xs sm:text-sm font-semibold border border-[rgba(28,40,34,0.16)] hover:border-[#1B533E] active:scale-[0.99] cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#32443A]" />
                          <span>{act.label}</span>
                        </button>
                      );
                    }

                    return (
                      <a
                        key={actIdx}
                        href={act.href}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#D0D9CD] hover:bg-[#E3E8E1] text-[#1C2822] transition-all text-xs sm:text-sm font-semibold border border-[rgba(28,40,34,0.16)] hover:border-[#1B533E] active:scale-[0.99]"
                      >
                        <span>{act.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Sticky Multiple Real Images Showcase */}
      <div
        className={cn(
          "hidden lg:block sticky top-24 h-[520px] w-1/2 rounded-3xl overflow-hidden p-6 self-start bg-[#D0D9CD] border border-[rgba(28,40,34,0.16)] shadow-lg shadow-[#1C2822]/5",
          contentClassName
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col justify-between"
          >
            {/* Multiple Real Images Grid / Collage */}
            <div className="grid grid-cols-2 gap-3.5 h-[410px]">
              {content[activeCard].images.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className={cn(
                    "relative rounded-2xl overflow-hidden border border-[rgba(28,40,34,0.16)] shadow-md group transition-all duration-300 hover:border-[#1B533E] hover:shadow-[#1B533E]/10 bg-[#D0D9CD]",
                    imgIdx === 0 && content[activeCard].images.length === 3 ? "col-span-2 h-[220px]" : "h-full"
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle caption */}
                  <div className="absolute bottom-2 left-2 pointer-events-none">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1C2822]/80 text-[#F5F3EC] backdrop-blur-xs truncate max-w-[200px]">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom active service indicator */}
            <div className="pt-3 border-t border-[rgba(28,40,34,0.16)] flex items-center justify-between text-xs font-mono text-[#32443A]">
              <span className="text-[#1B533E] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D98A29] animate-pulse" />
                {content[activeCard].title}
              </span>
              <span>
                Service 0{activeCard + 1} of 0{content.length}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
