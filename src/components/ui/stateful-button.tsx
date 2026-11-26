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
  variant?: "juniper" | "mustard" | "fig" | "outline" | "ochre" | "navy";
}

export function StatefulButton({
  children,
  className,
  href,
  onClick,
  successText,
  icon,
  showIcon = true,
  variant = "juniper",
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

  const isJuniper = variant === "juniper" || variant === "ochre"; // default primary CTA
  const isMustard = variant === "mustard";
  const isFig = variant === "fig" || variant === "navy";
  const isOutline = variant === "outline";

  let textColor = "#F5F3EC";
  if (isMustard) textColor = "#1C2822";
  else if (isOutline) textColor = "#1C2822";

  const defaultIcon = icon || (
    <ArrowUpRight
      className={cn(
        "w-4 h-4 transition-colors",
        isMustard || isOutline
          ? "text-[#1C2822]/80 group-hover:text-[#1C2822]"
          : "text-[#F5F3EC]/90 group-hover:text-[#F5F3EC]"
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
            <Loader2 className={cn("w-4 h-4 animate-spin", isMustard ? "text-[#1C2822]" : "text-[#D98A29]")} />
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
            <Check className={cn("w-4 h-4", isMustard ? "text-[#1C2822]" : "text-[#D98A29]")} />
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
    isJuniper && "bg-[#1B533E] hover:bg-[#143F2F] text-[#F5F3EC] border border-[#143F2F] shadow-sm shadow-[#1B533E]/20",
    isMustard && "bg-[#D98A29] hover:bg-[#C2781E] text-[#1C2822] border border-[#B36F1B] shadow-sm shadow-[#D98A29]/20",
    isFig && "bg-[#1C2822] hover:bg-[#2A3C33] text-[#F5F3EC] border border-[#1C2822]",
    isOutline && "bg-[#D0D9CD] hover:bg-[#E3E8E1] text-[#1C2822] border border-[rgba(28,40,34,0.16)]",
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
