"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { StatefulButton } from "./ui/stateful-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Unified / Joined Frosted Glass Navbar Capsule */}
      <div
        className={`pointer-events-auto w-full max-w-4xl rounded-full glass-nav px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-lg border-zinc-300" : "shadow-md"
        }`}
      >
        {/* Brand (Left) */}
        <a
          href="#"
          className="text-[#0F1F38] font-display font-bold tracking-tight text-sm sm:text-base hover:text-[#1D56B3] transition-colors flex items-center gap-1.5 shrink-0"
        >
          <span className="font-display font-bold text-[#0F1F38] tracking-[-0.03em]">Hrushikesh</span>
        </a>

        {/* Desktop Nav Links (Services, Testimonials, Case Study, Projects) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[12px] font-sans font-semibold uppercase tracking-[0.04em] text-[#52647C]">
          <a
            href="#services"
            className="hover:text-[#0F1F38] hover:underline underline-offset-4 decoration-[#1D56B3]/40 transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="hover:text-[#0F1F38] hover:underline underline-offset-4 decoration-[#1D56B3]/40 transition-colors py-1"
          >
            Testimonials
          </a>
          <a
            href="#case-study"
            className="hover:text-[#0F1F38] hover:underline underline-offset-4 decoration-[#1D56B3]/40 transition-colors py-1"
          >
            Case Study
          </a>
          <a
            href="#projects"
            className="hover:text-[#0F1F38] hover:underline underline-offset-4 decoration-[#1D56B3]/40 transition-colors py-1"
          >
            Projects
          </a>
        </nav>

        {/* Action Area & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Signal Ochre CTA Button with Stateful feedback */}
          <div className="hidden md:inline-flex">
            <StatefulButton
              href="#contact"
              variant="ochre"
              successText="Opening..."
              className="py-2 px-4 text-xs font-semibold"
            >
              Get in touch
            </StatefulButton>
          </div>

          {/* Hamburger Icon: Strictly for smaller screens only (md:hidden) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-[#0F1F38] hover:text-[#1D56B3] md:hidden flex items-center justify-center border border-[#D5DCE6] bg-white shadow-2xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#0F1F38]" />
            ) : (
              <Menu className="w-4 h-4 text-[#0F1F38]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Visible only on smaller screens when toggled) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl border border-[#D5DCE6] rounded-2xl p-5 shadow-2xl md:hidden flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 text-sm font-medium text-[#0F1F38] font-mono">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F4F6F9] flex items-center justify-between text-[#0F1F38]"
            >
              <span>01 · Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#52647C]" />
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F4F6F9] flex items-center justify-between text-[#0F1F38]"
            >
              <span>02 · Testimonials</span>
              <ArrowUpRight className="w-4 h-4 text-[#52647C]" />
            </a>
            <a
              href="#case-study"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F4F6F9] flex items-center justify-between text-[#0F1F38]"
            >
              <span>03 · Case Study</span>
              <ArrowUpRight className="w-4 h-4 text-[#52647C]" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F4F6F9] flex items-center justify-between text-[#0F1F38]"
            >
              <span>04 · Projects</span>
              <ArrowUpRight className="w-4 h-4 text-[#52647C]" />
            </a>

            {/* In smaller screens, Signal Ochre CTA button inside the hamburger dropdown */}
            <div className="pt-2 mt-1 border-t border-[#D5DCE6]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#E08E0B] hover:bg-[#CF8106] text-[#0F1F38] font-bold text-xs sm:text-[13px] transition-colors shadow-sm"
              >
                <span>Get in touch ↗</span>
                <ArrowUpRight className="w-4 h-4 text-[#0F1F38]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
