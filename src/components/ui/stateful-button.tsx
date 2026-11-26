"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatefulButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void | Promise<void>;
  successText?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  variant?: "forest" | "juniper" | "white" | "ghost" | "mustard" | "fig" | "outline" | "ochre" | "navy";
}

export function StatefulButton({
  children,
  className,
  href,
  onClick,
  successText,
  icon,
  showIcon = true,
  variant = "forest",
  ...props
}: StatefulButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (status !== "idle") return;

    if (onClick) {
      setStatus("loading");
      try {
        await Promise.resolve(onClick(e));
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          if (href && typeof window !== "undefined") {
            if (href.startsWith("#")) {
              const el = document.querySelector(href);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = href;
            }
          }
        }, 800);
      } catch {
        setStatus("idle");
      }
    } else if (href) {
      setStatus("loading");
      setTimeout(() => {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          if (typeof window !== "undefined") {
            if (href.startsWith("#")) {
              const el = document.querySelector(href);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = href;
            }
          }
        }, 500);
      }, 400);
    }
  };

  const isForest = variant === "forest" || variant === "juniper" || variant === "ochre";
  const isWhite = variant === "white";
  const isGhost = variant === "ghost";
  const isMustard = variant === "mustard";
  const isFig = variant === "fig" || variant === "navy";
  const isOutline = variant === "outline";

  let textColor = "#FAF8F2";
  if (isWhite || isGhost || isMustard || isOutline) textColor = "#152E20";

  const defaultIcon = icon || (
    <ArrowUpRight
      className={cn(
        "w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors",
        isWhite || isGhost || isMustard || isOutline
          ? "text-[#152E20]/80 group-hover:text-[#152E20]"
          : "text-[#FAF8F2]/90 group-hover:text-[#FAF8F2]"
      )}
    />
  );

  const buttonContent = (
    <motion.div
      className="relative flex items-center justify-center gap-1.5 sm:gap-2"
      layout
    >
      <AnimatePresence mode="wait" initial={false}>
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center gap-1.5 sm:gap-2"
          >
            <span style={{ color: textColor, fontWeight: 600 }}>{children}</span>
            {showIcon && defaultIcon}
          </motion.span>
        )}

        {status === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2"
          >
            <Loader2 className={cn("w-4 h-4 animate-spin", isWhite || isGhost ? "text-[#152E20]" : "text-[#D98A29]")} />
            <span style={{ color: textColor }} className="text-xs font-mono font-medium">Opening...</span>
          </motion.span>
        )}

        {status === "success" && (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            <Check className={cn("w-4 h-4", isWhite || isGhost ? "text-[#152E20]" : "text-[#D98A29]")} />
            <span style={{ color: textColor }} className="text-xs font-mono font-bold">
              {successText || "Connected"}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-sm active:scale-[0.98] cursor-pointer text-xs sm:text-[13px] font-semibold select-none",
    isForest && "bg-[#183627] hover:bg-[#11261B] text-[#FAF8F2] border border-[#11261B] shadow-sm shadow-[#183627]/20",
    isWhite && "bg-white hover:bg-[#FAF8F2] text-[#152E20] border border-white/80 shadow-sm shadow-black/5",
    isGhost && "bg-white/40 hover:bg-white/60 text-[#152E20] backdrop-blur-md border border-white/60",
    isMustard && "bg-[#D98A29] hover:bg-[#C2781E] text-[#152E20] border border-[#B36F1B] shadow-sm shadow-[#D98A29]/20",
    isFig && "bg-[#152E20] hover:bg-[#20402E] text-[#FAF8F2] border border-[#152E20]",
    isOutline && "bg-[#EBF0E8] hover:bg-[#FAF8F2] text-[#152E20] border border-[rgba(26,56,40,0.14)]",
    status === "loading" && "cursor-wait opacity-90",
    className
  );

  if (href && status === "idle") {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          handleClick(e);
        }}
        className={baseClasses}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={props.type || "button"}
      onClick={handleClick}
      className={baseClasses}
      disabled={status === "loading"}
      {...props}
    >
      {buttonContent}
    </button>
  );
}
