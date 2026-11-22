"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
                {/* Number Badge & Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={cn(
                      "font-mono text-xs font-bold px-3 py-1 rounded-full border transition-colors",
                      isActive
                        ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                        : "bg-zinc-100 text-zinc-600 border-zinc-200"
                    )}
                  >
                    {item.num} · {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-emerald-600 font-semibold mt-1.5 mb-3">
                  {item.tagline}
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* What You Get checklist */}
                <div className="space-y-2.5 pt-4 border-t border-zinc-100 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                    What You Get
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-700">
                    {item.whatYouGet.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span className="leading-snug">
                          <strong className="text-zinc-950 font-medium">{point.title}:</strong>{" "}
                          <span className="text-zinc-600">{point.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-emerald-700 text-white transition-all text-xs sm:text-sm font-medium shadow-sm hover:scale-[1.01] active:scale-[0.99] border border-zinc-900"
                  >
                    <span>{item.ctaLabel}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Sticky Multiple Real Images Showcase (NO terminal chrome) */}
      <div
        className={cn(
          "hidden lg:block sticky top-24 h-[520px] w-1/2 rounded-3xl overflow-hidden p-6 self-start bg-zinc-50 border border-zinc-200/90 shadow-lg shadow-zinc-950/5",
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
            {/* Multiple Real Images Grid / Collage (No terminal layout) */}
            <div className="grid grid-cols-2 gap-3.5 h-[410px]">
              {content[activeCard].images.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className={cn(
                    "relative rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md group transition-all duration-300 hover:border-emerald-500/60 hover:shadow-emerald-500/10",
                    imgIdx === 0 && content[activeCard].images.length === 3 ? "col-span-2 h-[220px]" : "h-full"
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle emerald pill caption tag */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-950/80 text-white backdrop-blur-xs border border-white/10 truncate max-w-[200px]">
                      {img.caption}
                    </span>
                    {img.tag && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500 text-zinc-950">
                        {img.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom active service indicator */}
            <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
