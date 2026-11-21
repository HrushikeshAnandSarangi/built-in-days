"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const experiences = [
    {
      company: "Restora",
      role: "Founding Engineer & Architect",
      period: "(2024 — Present)",
    },
    {
      company: "EduStarr",
      role: "Full-Stack Lead",
      period: "(2023 — 2024)",
    },
    {
      company: "IEEE INDISCON",
      role: "Technical Lead & Speaker",
      period: "(2024)",
    },
    {
      company: "NIT Rourkela",
      role: "B.Tech Systems & Computing",
      period: "(2022 — 2026)",
    },
  ];

  const awards = [
    {
      title: "FY26 Top Builder Award",
      organization: "Restora Platform",
      detail: "Production POS architecture & multi-unit rollout",
    },
    {
      title: "IEEE INDISCON 2024",
      organization: "IEEE Society",
      detail: "Best Technical Research & High-Performance Computing",
    },
    {
      title: "Smart India Hackathon Finalist",
      organization: "Govt. of India",
      detail: "Distributed low-latency backend architecture",
    },
    {
      title: "Production Velocity Record",
      organization: "Independent Practice",
      detail: "7+ production applications shipped with zero technical debt",
    },
  ];

  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-600 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROW 1: MY STORY (Matching Charles Honig layout) */}
        <div className="py-12 sm:py-16 border-b border-zinc-200 flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left label */}
          <div className="w-full md:w-36 lg:w-44 shrink-0">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
              My Story
            </h3>
          </div>

          {/* Middle Story narrative */}
          <div className="flex-1 max-w-2xl text-sm sm:text-[15px] text-zinc-700 leading-relaxed space-y-4">
            <p>
              I&apos;m an independent systems and full-stack software engineer with deep expertise in
              high-performance web applications, low-latency backends, and cross-platform desktop
              architecture spanning tech, healthcare, and enterprise software.
            </p>
            <p>
              At NIT Rourkela and collaborating with high-velocity product teams, I architect
              mission-critical software, turning complex specifications into scalable, production-grade
              systems shipped in days. On the side, I design, build, and ship my own software products,
              reaching thousands of active users.
            </p>
          </div>

          {/* Right author photo card */}
          <div className="w-full md:w-64 lg:w-72 shrink-0">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-900 group">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
                alt="Hrushikesh Anand Sarangi — Engineering Workspace"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white/90">
                Hrushikesh Anand Sarangi
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: EXPERIENCE (4-column timeline matching Charles Honig) */}
        <div className="py-12 sm:py-14 border-b border-zinc-200 flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left label */}
          <div className="w-full md:w-36 lg:w-44 shrink-0">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
              Experience
            </h3>
          </div>

          {/* 4 Columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-bold text-zinc-950 text-sm tracking-tight">
                  {exp.company}
                </div>
                <div className="text-xs text-zinc-600 leading-snug">
                  {exp.role}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 pt-1">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: AWARDS (4-column awards matching Charles Honig) */}
        <div className="py-12 sm:py-14 border-b border-zinc-200 flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left label */}
          <div className="w-full md:w-36 lg:w-44 shrink-0">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
              Awards
            </h3>
          </div>

          {/* 4 Columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {awards.map((award, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-bold text-zinc-950 text-sm tracking-tight">
                  {award.title}
                </div>
                <div className="text-xs text-zinc-600 leading-snug">
                  {award.organization}
                </div>
                <div className="text-[11px] text-zinc-500 pt-1 leading-relaxed">
                  {award.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 4: BOTTOM NAVIGATION & COPYRIGHT */}
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2 text-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-bold text-zinc-950 tracking-[-0.03em] text-sm font-sans">
              Hrushikesh Anand Sarangi
            </span>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-500 font-sans tracking-[-0.01em]">Systems & Web Software</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 shrink-0 text-zinc-700">
            <a href="#services" className="hover:text-zinc-950 hover:underline underline-offset-4 decoration-zinc-300 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-zinc-950 hover:underline underline-offset-4 decoration-zinc-300 transition-colors">
              Testimonials
            </a>
            <a href="#projects" className="hover:text-zinc-950 hover:underline underline-offset-4 decoration-zinc-300 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-zinc-950 hover:underline underline-offset-4 decoration-zinc-300 transition-colors">
              Contact
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-zinc-900 hover:text-emerald-700 transition-colors font-medium hover:underline underline-offset-4 decoration-zinc-300"
            >
              <span>Top ↗</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-zinc-400 text-[11px] font-mono border-t border-zinc-100 pt-6">
          <div>
            Built with Next.js 16, TypeScript, Tailwind CSS & Framer Motion. Zero bloat.
          </div>
          <div className="flex items-center gap-2">
            <span>NIT Rourkela, Odisha, India</span>
            <span className="text-zinc-300">·</span>
            <span>© 2026 Hrushikesh Anand Sarangi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
