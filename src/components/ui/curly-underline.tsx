"use client";

import React from "react";

interface CurlyUnderlineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
  variant?: "wave" | "loop" | "scribble";
}

export function CurlyUnderline({
  className = "",
  color = "#D98A29",
  strokeWidth = 2.5,
  variant = "wave",
}: CurlyUnderlineProps) {
  if (variant === "loop") {
    return (
      <svg
        viewBox="0 0 120 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 sm:h-3.5 pointer-events-none overflow-visible ${className}`}
        preserveAspectRatio="none"
      >
        <path
          d="M2 9 C 18 3, 34 13, 50 7 C 66 2, 82 12, 98 6 C 106 3, 114 8, 118 7"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default organic curly wave underline
  return (
    <svg
      viewBox="0 0 100 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute left-0 -bottom-1 sm:-bottom-2 w-full h-2.5 sm:h-3.5 pointer-events-none overflow-visible ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M2 7 C 15 2, 28 12, 42 6 C 56 1, 70 11, 84 5 C 90 3, 95 8, 98 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * HandwrittenHook
 * Reusable hook badge rendering in the user-specified casual marker handwriting font.
 */
export function HandwrittenHook({
  children,
  className = "",
  rotate = "-rotate-1",
  color = "text-[#183627]",
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
  color?: string;
}) {
  return (
    <span
      className={`font-handwriting text-xl sm:text-2xl ${color} ${rotate} inline-block select-none tracking-normal font-normal ${className}`}
    >
      {children}
    </span>
  );
}
