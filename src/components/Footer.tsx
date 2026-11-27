"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PixelFlowerIcon, PixelHeart } from "./ui/pixel-sprites";

export function Footer() {
  return (
    <footer className="bg-[#F7F6F1] border-t border-[#DCE6F2] pt-10 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Crisp Pixel Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b-[1.5px] border-[#DCE6F2]">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white border-[1.5px] border-[#1A2B4C] rounded flex items-center justify-center shadow-[2px_2px_0px_#DCE6F2]">
                <PixelFlowerIcon size={22} />
              </div>
              <span className="font-pixel-display font-bold text-xl text-[#1A2B4C] uppercase tracking-tight">
                HRUSHIKESH
              </span>
            </div>
            <p className="font-mono-body text-xs text-[#475D7A] leading-relaxed max-w-xs">
              Engineering fast Next.js applications, ultra-lean Tauri desktop software, and verified low-latency systems from Rourkela, India.
            </p>
          </div>

          {/* Navigation Column (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="font-pixel text-[10px] font-bold text-[#1A2B4C] uppercase tracking-wider">
              NAVIGATION
            </div>
            <ul className="space-y-1.5 font-mono-body text-xs text-[#475D7A]">
              <li>
                <a href="#" className="hover:text-[#1A2B4C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1A2B4C] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#1A2B4C] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#case-study" className="hover:text-[#1A2B4C] transition-colors">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#1A2B4C] transition-colors">
                  Kind Words
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="font-pixel text-[10px] font-bold text-[#1A2B4C] uppercase tracking-wider">
              SERVICES
            </div>
            <ul className="space-y-1.5 font-mono-body text-xs text-[#475D7A]">
              <li>
                <a href="#services" className="hover:text-[#1A2B4C] transition-colors">
                  Build Your App
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1A2B4C] transition-colors">
                  Fix &amp; Accelerate
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1A2B4C] transition-colors">
                  Systems Audit
                </a>
              </li>
              <li>
                <a
                  href="/audit/tempest-performance-audit.docx"
                  download="tempest-performance-audit.docx"
                  className="hover:text-[#1A2B4C] transition-colors"
                >
                  Audit Report (.docx)
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="font-pixel text-[10px] font-bold text-[#1A2B4C] uppercase tracking-wider">
              CONNECT
            </div>
            <ul className="space-y-1.5 font-mono-body text-xs text-[#475D7A]">
              <li>
                <a
                  href="https://github.com/HrushikeshAnandSarangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1A2B4C] transition-colors font-bold text-[#1A2B4C]"
                >
                  github.com/HrushikeshAnandSarangi ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hrushikesh-anand-sarangi-645b02269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1A2B4C] transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918260343186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1A2B4C] transition-colors"
                >
                  WhatsApp (+91 8260343186) ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:hrushikeshsarangi7@gmail.com"
                  className="hover:text-[#1A2B4C] transition-colors"
                >
                  hrushikeshsarangi7@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-pixel text-[10px] text-[#475D7A]">
          <div>
            © 2026 HRUSHIKESH ANAND SARANGI · ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              MADE WITH ZERO BLOAT <PixelHeart filled size={11} />
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border-[1.5px] border-[#1A2B4C] rounded-xs text-[#1A2B4C] hover:bg-[#DCE6F2] transition-colors font-bold"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
