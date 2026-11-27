"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { StatefulButton } from "./ui/stateful-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-4 sm:pt-6 flex items-center justify-between relative">
        {/* Brand (Left) - Protected by frosted pill for 100% contrast on scroll */}
        <div className="pointer-events-auto shrink-0">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-xs text-[#14291E] transition-all hover:bg-white hover:shadow-sm"
          >
            <span className="text-sm select-none">🌲</span>
            <span className="font-display font-bold text-base sm:text-lg text-[#14291E] tracking-tight">
              Hrushikesh
            </span>
            <span className="text-[10px] font-mono font-bold text-[#1B533E] -mt-1.5">
              ™
            </span>
          </a>
        </div>

        {/* Floating Capsule (Center) - Matches reference pill with embedded CTA */}
        <div className="pointer-events-auto hidden md:flex items-center md:absolute md:left-1/2 md:-translate-x-1/2">
          <div
            className={`glass-nav-capsule pl-6 pr-1.5 py-1.5 flex items-center gap-7 transition-all duration-300 ${
              scrolled ? "shadow-md bg-white/95" : "bg-white/85"
            }`}
          >
            <nav className="flex items-center gap-6 text-[13px] font-sans font-medium text-[#2E4A3B]">
              <a
                href="#services"
                className="hover:text-[#14291E] transition-colors py-1"
              >
                Services
              </a>
              <a
                href="#case-study"
                className="hover:text-[#14291E] transition-colors py-1"
              >
                Case Study
              </a>
              <a
                href="#projects"
                className="hover:text-[#14291E] transition-colors py-1"
              >
                Projects
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#14291E] transition-colors py-1"
              >
                Testimonials
              </a>
            </nav>

            {/* Quiet Place Coral Accent CTA inside pill */}
            <StatefulButton
              href="#contact"
              variant="coral"
              successText="Opening..."
              className="py-2 px-5 text-xs font-semibold tracking-wide"
            >
              Start Your Journey →
            </StatefulButton>
          </div>
        </div>

        {/* Mobile Hamburger (Right on small screens) */}
        <div className="pointer-events-auto md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#14291E] bg-white/85 backdrop-blur-md border border-white/80 shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#14291E]" />
            ) : (
              <Menu className="w-5 h-5 text-[#14291E]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mx-4 mt-3 bg-white/95 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-2xl md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-[#14291E]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl hover:bg-[#F7F5EE] flex items-center justify-between"
            >
              <span>Services</span>
              <span className="text-xs text-[#5C8970]">01</span>
            </a>
            <a
              href="#case-study"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl hover:bg-[#F7F5EE] flex items-center justify-between"
            >
              <span>Case Study</span>
              <span className="text-xs text-[#5C8970]">02</span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl hover:bg-[#F7F5EE] flex items-center justify-between"
            >
              <span>Projects</span>
              <span className="text-xs text-[#5C8970]">03</span>
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl hover:bg-[#F7F5EE] flex items-center justify-between"
            >
              <span>Testimonials</span>
              <span className="text-xs text-[#5C8970]">04</span>
            </a>
          </nav>

          <div className="pt-3 border-t border-[rgba(26,56,40,0.12)] flex flex-col gap-3">
            <StatefulButton
              href="#contact"
              variant="forest"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center py-3"
            >
              Work Together
            </StatefulButton>
          </div>
        </div>
      )}
    </header>
  );
}
