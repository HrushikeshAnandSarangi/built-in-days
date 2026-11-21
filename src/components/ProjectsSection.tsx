"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { GithubIcon } from "./icons";
import { DiagnosticAuditAnimation } from "./SiteAnimations";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = uniqueCategories.length > 1 ? ["All", ...uniqueCategories] : uniqueCategories;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-zinc-50/50 border-t border-zinc-200 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200">
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
              // selected work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Web Platforms & Cross-Platform Software
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-xl">
              Production web applications, offline-first operating systems, and high-performance
              platforms built for real users and verified under real-world traffic.
            </p>
          </div>

          <a
            href="https://github.com/hrushikeshsarangi7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-900 text-xs font-mono font-medium hover:border-zinc-950 transition-colors shrink-0"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>[ github.com/hrushikeshsarangi7 ↗ ]</span>
          </a>
        </div>

        {/* Dynamic Category Filters in clean bracketed style */}
        {categories.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all shrink-0 border ${
                  selectedCategory === cat
                    ? "bg-zinc-950 text-white border-zinc-950 font-semibold shadow-sm"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-950"
                }`}
                style={selectedCategory === cat ? { color: "#ffffff", backgroundColor: "#09090b" } : {}}
              >
                [ {cat.toLowerCase()} ]
              </button>
            ))}
          </div>
        )}

        {/* Verification banner with Diagnostic Audit Animation */}
        <div className="my-6 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <DiagnosticAuditAnimation className="w-44 h-32 shrink-0" />
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                // empirical verification standard
              </div>
              <div className="text-lg sm:text-xl font-bold text-zinc-950 mt-1">
                Every Product Backed by Reproducible Benchmarks
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg leading-relaxed">
                Codebases include automated CI workflows, test suites, flamegraph profiles, and
                measurable latency guarantees.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/hrushikeshsarangi7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-xs font-mono font-medium transition-colors shrink-0 shadow-sm"
            style={{ color: "#ffffff", backgroundColor: "#09090b" }}
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
            <span style={{ color: "#ffffff" }}>[ view repositories ↗ ]</span>
          </a>
        </div>

        {/* Projects Cards List */}
        <div className="grid grid-cols-1 gap-10 mt-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
