"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { GithubIcon } from "./icons";
import { ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";
import { HandwrittenHook, CurlyUnderline } from "./ui/curly-underline";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = uniqueCategories.length > 1 ? ["All", ...uniqueCategories] : uniqueCategories;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F7F5EE] border-t border-[rgba(26,56,40,0.12)] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[rgba(26,56,40,0.12)]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <HandwrittenHook className="text-xl sm:text-2xl text-[#183627] -rotate-1">
                selected software &amp; tools
              </HandwrittenHook>
              <span className="w-8 h-[1px] bg-[#183627]/30" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.0] text-[#152E20]">
              Projects
            </h2>
          </div>

          <LinkPreview url="https://github.com/hrushikeshsarangi7">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 border border-[rgba(26,56,40,0.12)] text-[#152E20] text-xs sm:text-[13px] font-semibold hover:border-[#183627] transition-colors shrink-0 shadow-2xs cursor-pointer">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/hrushikeshsarangi7 ↗</span>
            </span>
          </LinkPreview>
        </div>

        {/* Dynamic Category Filters */}
        {categories.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsExpanded(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all shrink-0 border ${
                  selectedCategory === cat
                    ? "bg-[#183627] text-[#FAF8F2] border-[#183627] font-semibold shadow-sm"
                    : "bg-white/70 text-[#3A5646] border-[rgba(26,56,40,0.12)] hover:border-[#183627] hover:text-[#152E20]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Empirical Verification Standard Banner - High-Craft Minimalist Editorial (Zero Cartoon Animations) */}
        <div className="my-6 rounded-3xl border border-[rgba(26,56,40,0.12)] bg-[#EBF0E8] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-xl">
            <div className="text-xs font-mono text-[#183627] font-bold uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#183627]" />
              <span>Empirical Verification Standard</span>
            </div>
            <div className="font-display text-lg sm:text-2xl font-bold text-[#152E20] tracking-tight">
              Every Product Backed by{" "}
              <span className="relative inline-block text-[#152E20]">
                Reproducible Benchmarks
                <CurlyUnderline color="#D98A29" strokeWidth={2.5} className="-bottom-1" />
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#3A5646] leading-relaxed font-normal">
              Codebases include automated CI workflows, deterministic test suites, flamegraph profiles, and
              measurable latency guarantees.
            </p>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 pt-2 md:pt-0 shrink-0 border-t md:border-t-0 md:border-l border-[rgba(26,56,40,0.12)] md:pl-8">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#152E20] tabular-nums">
                16,265
              </div>
              <div className="text-[11px] font-mono text-[#3A5646] uppercase tracking-wider mt-0.5">
                Audit Traces
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#183627] tabular-nums">
                100%
              </div>
              <div className="text-[11px] font-mono text-[#3A5646] uppercase tracking-wider mt-0.5">
                CI Reproducible
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Stack of Projects */}
        <div className="space-y-8 mt-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Expand / Show More Projects Action */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(26,56,40,0.12)] bg-white/80 hover:bg-white text-[#152E20] text-xs sm:text-sm font-mono font-medium transition-all shadow-sm active:scale-95 hover:border-[#183627] cursor-pointer"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>Show Top 3 Projects</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>
                    Show All {filteredProjects.length} Projects ({filteredProjects.length - 3} more)
                  </span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
