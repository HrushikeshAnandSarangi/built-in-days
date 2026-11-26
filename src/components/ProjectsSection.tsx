"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { GithubIcon } from "./icons";
import { DiagnosticAuditAnimation } from "./SiteAnimations";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = uniqueCategories.length > 1 ? ["All", ...uniqueCategories] : uniqueCategories;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Limit to top 3 projects by default, expand to all when toggled
  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F5F3EC] border-t border-[rgba(28,40,34,0.16)] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-[rgba(28,40,34,0.16)]">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.0] text-[#1C2822]">
            Projects
          </h2>

          <LinkPreview url="https://github.com/hrushikeshsarangi7">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#D0D9CD] border border-[rgba(28,40,34,0.16)] text-[#1C2822] text-xs sm:text-[13px] font-semibold hover:border-[#1B533E] transition-colors shrink-0 shadow-2xs cursor-pointer">
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
                    ? "bg-[#1C2822] text-[#F5F3EC] border-[#1C2822] font-bold shadow-sm"
                    : "bg-[#D0D9CD] text-[#32443A] border-[rgba(28,40,34,0.16)] hover:border-[#1B533E] hover:text-[#1C2822]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Verification banner with Diagnostic Audit Animation */}
        <div className="my-6 rounded-3xl border border-[rgba(28,40,34,0.16)] bg-[#D0D9CD] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <DiagnosticAuditAnimation className="w-44 h-32 shrink-0" />
            <div>
              <div className="text-xs font-mono text-[#1B533E] font-bold uppercase tracking-wider">
                Empirical Verification Standard
              </div>
              <div className="font-display text-lg sm:text-xl font-bold text-[#1C2822] mt-1">
                Every Product Backed by Reproducible Benchmarks
              </div>
              <p className="text-xs sm:text-sm text-[#32443A] mt-1 max-w-lg leading-relaxed">
                Codebases include automated CI workflows, test suites, flamegraph profiles, and
                measurable latency guarantees.
              </p>
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(28,40,34,0.16)] bg-[#D0D9CD] hover:bg-[#E3E8E1] text-[#1C2822] text-xs sm:text-sm font-mono font-medium transition-all shadow-sm active:scale-95 hover:border-[#1B533E] cursor-pointer"
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
