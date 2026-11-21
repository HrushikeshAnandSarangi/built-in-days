"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 py-12 text-zinc-600 text-xs font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <div className="flex flex-wrap items-center gap-2 text-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-bold text-zinc-950 tracking-[-0.03em] text-sm">
              Hrushikesh Anand Sarangi
            </span>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-500 font-sans tracking-[-0.01em]">Systems & Web Software</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 shrink-0 text-zinc-700">
            <a href="#services" className="hover:text-zinc-950 hover:underline underline-offset-4 decoration-zinc-300 transition-colors">
              [ services ]
            </a>
            <a href="#testimonials" className="hover:text-zinc-950 hover:underline underline-offset-4 decoration-zinc-300 transition-colors">
              [ testimonials ]
            </a>
            <a href="#projects" className="hover:text-zinc-950 hover:underline underline-offset-4 decoration-zinc-300 transition-colors">
              [ projects ]
            </a>
            <a href="#contact" className="hover:text-zinc-950 hover:underline underline-offset-4 decoration-zinc-300 transition-colors">
              [ contact ]
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-zinc-900 hover:text-emerald-700 transition-colors font-medium"
            >
              <span>[ top ↗ ]</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            Built with Next.js 16, TypeScript, Tailwind CSS & Framer Motion. Zero bloat.
          </div>
          <div className="flex items-center gap-2">
            <span>NIT Rourkela, Odisha, India</span>
            <span className="text-zinc-300">·</span>
            <span>© 2026 Hrushikesh Anand Sarangi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
