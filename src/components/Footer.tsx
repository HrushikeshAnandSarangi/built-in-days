"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { SketchedScenery } from "./SketchedScenery";

export function Footer() {
  return (
    <footer className="bg-[#F7F5EE] text-[#3A5646] text-xs font-sans pt-6 pb-12 border-t border-[rgba(26,56,40,0.12)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sketched Scenery Architectural & Landscape Line Art */}
        <div className="pt-2 pb-6">
          <SketchedScenery className="w-full h-28 sm:h-36 md:h-44" />
        </div>

        {/* Minimal Bottom Coordinates & Navigation */}
        <div className="pt-6 border-t border-[rgba(26,56,40,0.12)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#3A5646]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D98A29]" />
            <span className="font-display font-bold text-[#152E20] text-xs tracking-tight">
              Hrushikesh Anand Sarangi
            </span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 shrink-0 text-[#3A5646]">
            <a href="#services" className="hover:text-[#183627] transition-colors">
              Services
            </a>
            <a href="#case-study" className="hover:text-[#183627] transition-colors">
              Case Study
            </a>
            <a href="#projects" className="hover:text-[#183627] transition-colors">
              Projects
            </a>
            <a href="#testimonials" className="hover:text-[#183627] transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-[#183627] transition-colors">
              Contact
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#152E20] hover:text-[#183627] transition-colors font-bold"
            >
              <span>Top ↗</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[rgba(26,56,40,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[#3A5646] text-[11px] font-mono">
          <div>Rourkela, Odisha, India</div>
          <div>© 2026 Hrushikesh Anand Sarangi</div>
        </div>
      </div>
    </footer>
  );
}
