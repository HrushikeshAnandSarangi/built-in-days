"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PixelFlowerIcon, PixelSparkle } from "./ui/pixel-sprites";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Case Study", href: "#case-study" },
    { label: "Kind Words", href: "#testimonials" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#F7F6F1]/95 backdrop-blur-md border-b-[1.5px] border-[#1A2B4C] shadow-[0_3px_0_#DCE6F2]"
          : "bg-[#F7F6F1]/90 backdrop-blur-sm border-b border-[#DCE6F2]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Monogram */}
        <a
          href="#"
          className="inline-flex items-center gap-2.5 group shrink-0"
        >
          <span className="w-9 h-9 rounded bg-white border-[1.5px] border-[#1A2B4C] shadow-[2px_2px_0px_#DCE6F2] group-hover:shadow-[3px_3px_0px_#A3BFE0] group-hover:-translate-y-0.5 transition-all flex items-center justify-center">
            <PixelFlowerIcon size={24} />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-pixel-display font-bold text-lg sm:text-xl text-[#1A2B4C] tracking-tight flex items-center gap-1">
              HRUSHIKESH
              <PixelSparkle size={12} />
            </span>
            <span className="font-pixel text-[9px] text-[#475D7A] tracking-widest uppercase">
              SYSTEMS &amp; FULL-STACK
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white border-[1.5px] border-[#1A2B4C] rounded-md px-2 py-1 shadow-[3px_3px_0px_#DCE6F2]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded font-pixel text-[11px] font-bold uppercase tracking-wider text-[#475D7A] hover:text-[#1A2B4C] hover:bg-[#DCE6F2]/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex pixel-btn-primary py-2 px-4 text-[11px]"
          >
            <span>GET IN TOUCH</span>
            <span>&gt;</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-white border-[1.5px] border-[#1A2B4C] text-[#1A2B4C] shadow-[2px_2px_0px_#DCE6F2]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F6F1] border-t-[1.5px] border-b-[1.5px] border-[#1A2B4C] px-4 py-4 space-y-2 shadow-[0_6px_0_#DCE6F2]">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded bg-white border-[1.5px] border-[#1A2B4C] font-pixel text-xs font-bold text-[#1A2B4C]"
            >
              <span>{link.label}</span>
              <span className="text-[#6C8EBF]">0{idx + 1}</span>
            </a>
          ))}
          <a
            href="https://github.com/HrushikeshAnandSarangi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2.5 rounded bg-[#DCE6F2] border-[1.5px] border-[#1A2B4C] font-pixel text-xs font-bold text-[#1A2B4C]"
          >
            <span>GitHub: @HrushikeshAnandSarangi</span>
            <span>↗</span>
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full pixel-btn-primary py-3 mt-2"
          >
            <span>GET IN TOUCH &gt;</span>
          </a>
        </div>
      )}
    </header>
  );
}
