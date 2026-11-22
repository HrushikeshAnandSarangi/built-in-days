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
}

export function StatefulButton({
  children,
  className,
  href,
  onClick,
  successText,
  icon,
  showIcon = true,
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

  const defaultIcon = icon || <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />;

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
            <span style={{ color: "#ffffff", fontWeight: 500 }}>{children}</span>
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
            <Loader2 className="w-4 h-4 text-emerald-400 animate-spin" />
            <span className="text-zinc-300 text-xs font-mono">Routing...</span>
          </motion.span>
        )}

        {status === "success" && (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5 text-emerald-400"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-medium text-emerald-400">
              {successText || "Connected"}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white transition-all shadow-sm active:scale-[0.98] cursor-pointer text-xs sm:text-sm font-medium border border-zinc-800/80 hover:border-zinc-700 select-none",
    status === "loading" && "cursor-wait opacity-90",
    status === "success" && "border-emerald-600/50 bg-zinc-900",
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
