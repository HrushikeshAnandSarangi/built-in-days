"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { SketchedScenery } from "./SketchedScenery";

export function Footer() {
  return (
    <footer className="bg-white text-zinc-600 text-xs font-sans pt-6 pb-12 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sketched Scenery Architectural & Landscape Line Art */}
        <div className="pt-2 pb-6">
          <SketchedScenery className="w-full h-28 sm:h-36 md:h-44" />
        </div>

        {/* Minimal Bottom Coordinates & Navigation */}
        <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-bold text-zinc-950 font-sans text-xs">
              Hrushikesh Anand Sarangi
            </span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 shrink-0 text-zinc-700">
            <a href="#services" className="hover:text-zinc-950 hover:text-emerald-700 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-zinc-950 hover:text-emerald-700 transition-colors">
              Testimonials
            </a>
            <a href="#projects" className="hover:text-zinc-950 hover:text-emerald-700 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-zinc-950 hover:text-emerald-700 transition-colors">
              Contact
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-zinc-900 hover:text-emerald-700 transition-colors font-medium"
            >
              <span>Top ↗</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-zinc-400 text-[11px] font-mono">
          <div>Rourkela, Odisha, India</div>
          <div>© 2026 Hrushikesh Anand Sarangi</div>
        </div>
      </div>
    </footer>
  );
}
