"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
  isStatic?: boolean;
  imageSrc?: string;
};

export const LinkPreview = ({
  children,
  url,
  className,
  width = 240,
  height = 140,
  isStatic = false,
  imageSrc,
}: LinkPreviewProps) => {
  const [isOpen, setOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Extract a clean domain name for display
  let domain = "";
  try {
    domain = new URL(url).hostname.replace("www.", "");
  } catch {
    domain = url.replace(/^https?:\/\//, "").split("/")[0];
  }

  // Preview image: use provided imageSrc or fallback to a crisp screenshot service
  const src = isStatic && imageSrc
    ? imageSrc
    : imageSrc || `https://api.microlink.io/?url=${encodeURIComponent(
        url
      )}&screenshot=true&meta=false&embed=screenshot.url`;

  // Spring animation for cursor-following floating card
  const springConfig = { stiffness: 260, damping: 20 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <HoverCardPrimitive.Root
      openDelay={50}
      closeDelay={100}
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <HoverCardPrimitive.Trigger
        onMouseMove={handleMouseMove}
        className={cn("inline-flex items-center", className)}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        className="[transform-origin:var(--radix-hover-card-content-transform-origin)] z-50 pointer-events-none"
        side="top"
        align="center"
        sideOffset={12}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, y: 10, scale: 0.94 }}
              className="rounded-2xl bg-white p-2 border border-zinc-200/90 shadow-2xl shadow-zinc-950/15 overflow-hidden"
              style={{
                x: translateX,
              }}
            >
              {/* Preview Image Frame */}
              <div
                className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200/80"
                style={{ width: `${width}px`, height: `${height}px` }}
              >
                {!hasError ? (
                  <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={domain || "Preview image"}
                    className="object-cover w-full h-full"
                    onError={() => setHasError(true)}
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-zinc-900 text-white">
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {domain}
                    </span>
                    <span className="text-[10px] text-zinc-400 mt-1">
                      Click to view live application
                    </span>
                  </div>
                )}
              </div>

              {/* Hostname info bar */}
              <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                <span className="truncate max-w-[180px] font-medium text-zinc-800">
                  {domain}
                </span>
                <span className="inline-flex items-center gap-0.5 text-emerald-600 font-semibold">
                  <span>Visit</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};
