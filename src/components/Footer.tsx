"use client";

import React from "react";
import { ArrowUp, Mail, Phone, Globe, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  const directEmail = "hrushikeshsarangi7@gmail.com";
  const directPhone = "+91 8260343186";
  const githubUrl = "https://github.com/hrushikeshsarangi7";
  const linkedinUrl = "https://www.linkedin.com/in/hrushikesh-sarangi/";
  const portfolioUrl = "https://hrushi.is-a.dev";

  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-12 text-zinc-600 text-xs font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand Statement & Primary Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200">
          {/* Brand & Persona Info */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <h3 className="text-zinc-950 font-bold tracking-tight text-lg sm:text-xl">
                Hrushikesh Anand Sarangi
              </h3>
            </div>

            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-lg">
              Independent Systems & Full-Stack Engineer. Building production software applications
              from scratch in days, and diagnosing hotpaths to make existing systems measurably faster.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-zinc-500">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Available for high-impact contracts</span>
              </div>
              <span className="text-zinc-400">·</span>
              <span>NIT Rourkela, India</span>
              <span className="text-zinc-400">·</span>
              <span>UTC+5:30 (IST)</span>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-5 flex flex-col sm:items-end justify-between space-y-4">
            <div className="text-xs uppercase tracking-widest text-zinc-400 sm:text-right">
              // site index
            </div>

            <nav className="flex flex-col sm:items-end gap-2.5 text-xs text-zinc-700 font-mono">
              <a
                href="#services"
                className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors"
              >
                [ 01 · services (build & fix) ]
              </a>
              <a
                href="#projects"
                className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors"
              >
                [ 02 · selected projects ]
              </a>
              <a
                href="#contact"
                className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors"
              >
                [ 03 · direct contact & brief ]
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-zinc-950 font-semibold hover:text-emerald-700 transition-colors pt-2"
              >
                <span>[ back to top ↗ ]</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </nav>
          </div>
        </div>

        {/* Middle Section: Direct Coordinates Grid (GitHub, LinkedIn, Dev Portfolio, Email, Phone) */}
        <div className="py-10 border-b border-zinc-200">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
            // direct coordinates & profiles
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100 hover:border-zinc-400 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <GithubIcon className="w-4 h-4 text-zinc-900 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-zinc-400 uppercase">GitHub</div>
                  <div className="text-xs font-medium text-zinc-900 truncate group-hover:text-emerald-700">
                    github.com/hrushikeshsarangi7
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100 hover:border-zinc-400 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <LinkedinIcon className="w-4 h-4 text-zinc-900 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-zinc-400 uppercase">LinkedIn</div>
                  <div className="text-xs font-medium text-zinc-900 truncate group-hover:text-emerald-700">
                    linkedin.com/in/hrushikesh-sarangi
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Dev Portfolio */}
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100 hover:border-zinc-400 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-zinc-400 uppercase">Dev Portfolio</div>
                  <div className="text-xs font-medium text-zinc-900 truncate group-hover:text-emerald-700">
                    hrushi.is-a.dev
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Direct Email */}
            <a
              href={`mailto:${directEmail}`}
              className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100 hover:border-zinc-400 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-zinc-900 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-zinc-400 uppercase">Direct Email</div>
                  <div className="text-xs font-medium text-zinc-900 truncate group-hover:text-emerald-700">
                    {directEmail}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Phone & WhatsApp */}
            <a
              href={`tel:${directPhone.replace(/\s+/g, "")}`}
              className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100 hover:border-zinc-400 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Phone className="w-4 h-4 text-zinc-900 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-zinc-400 uppercase">Direct Phone / WhatsApp</div>
                  <div className="text-xs font-medium text-zinc-900 truncate group-hover:text-emerald-700">
                    {directPhone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Academic & Systems Affiliation */}
            <div className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/70 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <Terminal className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-zinc-400 uppercase">Affiliation</div>
                  <div className="text-xs font-medium text-zinc-900 truncate">
                    NIT Rourkela · Systems & Design
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 shrink-0">B.Tech 2027</span>
            </div>
          </div>
        </div>

        {/* Bottom Colophon: Architecture & Standards */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div className="flex flex-wrap items-center gap-2">
            <span>Built with Next.js 16 (App Router), TypeScript, Tailwind CSS & Framer Motion.</span>
            <span className="hidden sm:inline text-zinc-300">·</span>
            <span className="text-zinc-600">Strictly zero emojis · Zero bloat.</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span>© 2026 Hrushikesh Anand Sarangi</span>
            <span className="text-zinc-300">·</span>
            <span className="text-emerald-600 font-medium">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
