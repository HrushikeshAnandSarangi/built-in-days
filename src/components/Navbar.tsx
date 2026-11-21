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
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-4xl rounded-full transition-all duration-300 ease-out glass-nav px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled ? "shadow-md border-zinc-300" : "border-zinc-200"
        }`}
      >
        {/* Clean text-only Brand (No Logo per user request) */}
        <a
          href="#"
          className="text-zinc-950 font-bold tracking-tight text-sm sm:text-base hover:text-emerald-700 transition-colors flex items-center gap-1.5 shrink-0"
        >
          <span className="font-semibold text-zinc-950">Hrushikesh</span>
          <span className="text-zinc-400 font-normal hidden sm:inline text-xs font-mono">
            / engineering
          </span>
        </a>

        {/* Desktop Nav Links (Hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-600">
          <a
            href="#services"
            className="hover:text-zinc-950 transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-950 transition-colors py-1"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-950 transition-colors py-1"
          >
            Contact
          </a>
        </nav>

        {/* CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm text-xs font-medium"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#ffffff", fontWeight: 500 }}>
              Start a Project
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-zinc-700 hover:text-zinc-950 md:hidden flex items-center justify-center border border-zinc-200 bg-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-zinc-900" />
            ) : (
              <Menu className="w-4 h-4 text-zinc-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-white/98 backdrop-blur-2xl border border-zinc-200 rounded-2xl p-5 shadow-2xl md:hidden flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 text-sm font-medium text-zinc-800 font-mono">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-zinc-100 flex items-center justify-between text-zinc-900"
            >
              <span>[ 01 · Services (Build & Fix) ]</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-zinc-100 flex items-center justify-between text-zinc-900"
            >
              <span>[ 02 · Selected Projects ]</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-zinc-100 flex items-center justify-between text-zinc-900"
            >
              <span>[ 03 · Direct Contact ]</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
