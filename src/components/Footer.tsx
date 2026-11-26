"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { SketchedScenery } from "./SketchedScenery";

export function Footer() {
  return (
    <footer className="bg-[#F4F6F9] text-[#52647C] text-xs font-sans pt-6 pb-12 border-t border-[#D5DCE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sketched Scenery Architectural & Landscape Line Art */}
        <div className="pt-2 pb-6">
          <SketchedScenery className="w-full h-28 sm:h-36 md:h-44" />
        </div>

        {/* Minimal Bottom Coordinates & Navigation */}
        <div className="pt-6 border-t border-[#D5DCE6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#52647C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E08E0B]" />
            <span className="font-display font-bold text-[#0F1F38] text-xs tracking-tight">
              Hrushikesh Anand Sarangi
            </span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 shrink-0 text-[#52647C]">
            <a href="#services" className="hover:text-[#0F1F38] hover:text-[#1D56B3] transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-[#0F1F38] hover:text-[#1D56B3] transition-colors">
              Testimonials
            </a>
            <a href="#case-study" className="hover:text-[#0F1F38] hover:text-[#1D56B3] transition-colors">
              Case Study
            </a>
            <a href="#projects" className="hover:text-[#0F1F38] hover:text-[#1D56B3] transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#0F1F38] hover:text-[#1D56B3] transition-colors">
              Contact
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#0F1F38] hover:text-[#1D56B3] transition-colors font-bold"
            >
              <span>Top ↗</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#D5DCE6]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[#52647C] text-[11px] font-mono">
          <div>Rourkela, Odisha, India</div>
          <div>© 2026 Hrushikesh Anand Sarangi</div>
        </div>
      </div>
    </footer>
  );
}
