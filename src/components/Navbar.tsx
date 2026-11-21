"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-5xl flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Brand Pill */}
        <div className="pointer-events-auto shrink-0">
          <a
            href="#"
            className="glass-pill text-xs sm:text-sm font-semibold tracking-tight gap-1.5 hover:scale-[1.02]"
          >
            <span className="font-bold text-zinc-950">Hrushikesh</span>
            <span className="text-zinc-400 font-normal hidden sm:inline text-xs font-mono">
              / engineering
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation Pill */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 glass-pill text-xs font-mono uppercase tracking-wider text-zinc-600 px-3">
          <a
            href="#services"
            className="px-2.5 py-1 rounded-full hover:text-zinc-950 hover:bg-black/[0.04] transition-colors"
          >
            Services
          </a>
          <span className="text-zinc-300">·</span>
          <a
            href="#projects"
            className="px-2.5 py-1 rounded-full hover:text-zinc-950 hover:bg-black/[0.04] transition-colors"
          >
            Projects
          </a>
          <span className="text-zinc-300">·</span>
          <a
            href="#contact"
            className="px-2.5 py-1 rounded-full hover:text-zinc-950 hover:bg-black/[0.04] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right: Action Glass Pills matching Roman Radchenko's layout */}
        <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Get in touch pill */}
          <a
            href="#contact"
            className="glass-pill text-xs sm:text-sm font-medium hover:scale-[1.02] active:scale-[0.98] gap-1.5"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 hidden sm:inline" />
          </a>

          {/* Book a call pill (hidden on small mobile screens to prevent overflow) */}
          <a
            href="https://wa.me/918260343186?text=Hi%20Hrushikesh,%20I%20would%20like%20to%20book%20a%20call%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill text-xs sm:text-sm font-medium hover:scale-[1.02] active:scale-[0.98] hidden sm:inline-flex"
            title="Book a call on WhatsApp"
          >
            Book a call
          </a>

          {/* CV Pill (circular round pill) */}
          <a
            href="https://hrushi.is-a.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill glass-pill--round text-xs font-mono font-bold text-zinc-950 hover:scale-[1.05] active:scale-[0.98]"
            title="View CV / Dev Portfolio"
          >
            CV
          </a>

          {/* Mobile Menu Hamburger Pill */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="glass-pill glass-pill--round md:hidden text-zinc-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-zinc-950" />
            ) : (
              <Menu className="w-4 h-4 text-zinc-950" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-3 right-3 glass-dropdown rounded-2xl p-5 shadow-2xl md:hidden flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 text-sm font-medium text-zinc-800 font-mono">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-black/[0.04] flex items-center justify-between text-zinc-900"
            >
              <span>[ 01 · Services (Build & Fix) ]</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-black/[0.04] flex items-center justify-between text-zinc-900"
            >
              <span>[ 02 · Selected Projects ]</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-black/[0.04] flex items-center justify-between text-zinc-900"
            >
              <span>[ 03 · Direct Contact ]</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a
              href="https://wa.me/918260343186?text=Hi%20Hrushikesh,%20I%20would%20like%20to%20book%20a%20call%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-black/[0.04] flex items-center justify-between text-zinc-900"
            >
              <span>[ Book a call via WhatsApp ]</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a
              href="https://hrushi.is-a.dev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-black/[0.04] flex items-center justify-between text-zinc-900"
            >
              <span>[ View CV / Portfolio ↗ ]</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
