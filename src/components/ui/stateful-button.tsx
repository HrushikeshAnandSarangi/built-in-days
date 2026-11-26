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
  variant?: "ochre" | "navy" | "outline";
}

export function StatefulButton({
  children,
  className,
  href,
  onClick,
  successText,
  icon,
  showIcon = true,
  variant = "ochre",
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

  const isOchre = variant === "ochre";
  const textColor = isOchre ? "#0F1F38" : "#FFFFFF";

  const defaultIcon = icon || (
    <ArrowUpRight
      className={cn(
        "w-4 h-4 transition-colors",
        isOchre ? "text-[#0F1F38]/80 group-hover:text-[#0F1F38]" : "text-white/80 group-hover:text-white"
      )}
    />
  );

  const buttonContent = (
    <motion.div
      className="relative flex items-center justify-center gap-2"
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
            className="inline-flex items-center gap-2"
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
            <Loader2 className={cn("w-4 h-4 animate-spin", isOchre ? "text-[#0F1F38]" : "text-[#E08E0B]")} />
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
            <Check className={cn("w-4 h-4", isOchre ? "text-[#0F1F38]" : "text-[#E08E0B]")} />
            <span style={{ color: textColor }} className="text-xs font-mono font-bold">
              {successText || "Connected"}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-sm active:scale-[0.98] cursor-pointer text-xs sm:text-sm font-semibold select-none",
    isOchre && "bg-[#E08E0B] hover:bg-[#CF8106] text-[#0F1F38] border border-[#C47905] shadow-sm shadow-[#E08E0B]/20",
    variant === "navy" && "bg-[#0F1F38] hover:bg-[#1A3154] text-white border border-[#0F1F38]",
    variant === "outline" && "bg-white hover:bg-[#F4F6F9] text-[#0F1F38] border border-[#D5DCE6]",
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
