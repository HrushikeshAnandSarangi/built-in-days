"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { GithubIcon } from "./icons";
import { PixelSparkle, PixelCrystalIcon, PixelFlowerIcon } from "./ui/pixel-sprites";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [inspectedProject, setInspectedProject] = useState<Project | null>(null);

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["All", ...uniqueCategories];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const pageSize = 3;
  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(0);
    setShowAll(false);
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-22 bg-[#F7F6F1] border-t border-[#DCE6F2] scroll-mt-16 overflow-hidden"
    >
      {/* Decorative left/right pixel flora matching reference */}
      <div className="hidden xl:block absolute left-3 top-28 pointer-events-none opacity-85">
        <PixelFlowerIcon size={36} />
      </div>
      <div className="hidden xl:block absolute right-3 bottom-24 pointer-events-none opacity-85">
        <PixelCrystalIcon size={44} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow + Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="pixel-pill-badge">
                <span>OUR WORK</span>
              </div>
              <PixelSparkle size={16} delay={0.2} />
            </div>

            <h2 className="font-pixel-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] leading-none text-[#1A2B4C] uppercase tracking-tight">
              SELECTED WORK
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/HrushikeshAnandSarangi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border-[1.5px] border-[#1A2B4C] rounded shadow-[2px_2px_0px_#DCE6F2] hover:bg-[#DCE6F2] font-pixel text-[10px] font-bold text-[#1A2B4C] transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 fill-current" />
              <span>GITHUB.COM/HRUSHIKESHANANDSARANGI</span>
            </a>

            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 font-pixel text-[11px] font-bold text-[#1A2B4C] border-b-[1.5px] border-dashed border-[#1A2B4C] pb-0.5 hover:text-[#6C8EBF] hover:border-[#6C8EBF] transition-colors cursor-pointer"
            >
              <span>{showAll ? "SHOW 3 AT A TIME" : `VIEW ALL ${filteredProjects.length} PROJECTS`}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-5 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-1.5 rounded font-pixel text-[10px] font-bold uppercase tracking-wider shrink-0 border-[1.5px] border-[#1A2B4C] transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#1A2B4C] text-[#F7F6F1] shadow-[2px_2px_0px_#A3BFE0]"
                  : "bg-white text-[#475D7A] hover:bg-[#EBF1F8] hover:text-[#1A2B4C] shadow-[2px_2px_0px_#DCE6F2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Pixel Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {displayedProjects.map((project) => {
            const globalIndex = projects.findIndex((p) => p.id === project.id);
            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={globalIndex}
                onInspect={(p) => setInspectedProject(p)}
              />
            );
          })}
        </div>

        {/* Pagination Dots + Arrows (matching reference `● ○ ○`) */}
        {!showAll && totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-1.5 rounded bg-white border-[1.5px] border-[#1A2B4C] text-[#1A2B4C] disabled:opacity-40 hover:bg-[#DCE6F2] transition-colors cursor-pointer disabled:cursor-not-allowed"
              aria-label="Previous project page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentPage(idx)}
                  className={`transition-all rounded-full border border-[#1A2B4C] cursor-pointer ${
                    currentPage === idx
                      ? "w-6 h-2.5 bg-[#1A2B4C]"
                      : "w-2.5 h-2.5 bg-[#DCE6F2] hover:bg-[#A3BFE0]"
                  }`}
                  aria-label={`Page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-1.5 rounded bg-white border-[1.5px] border-[#1A2B4C] text-[#1A2B4C] disabled:opacity-40 hover:bg-[#DCE6F2] transition-colors cursor-pointer disabled:cursor-not-allowed"
              aria-label="Next project page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* INTERACTIVE PROJECT DETAIL MODAL (Pixel OS Window) */}
      <AnimatePresence>
        {inspectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setInspectedProject(null)}
            className="fixed inset-0 z-50 bg-[#1A2B4C]/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] pixel-window overflow-hidden flex flex-col bg-[#F7F6F1]"
            >
              {/* Titlebar */}
              <div className="px-4 py-3 bg-[#DCE6F2] border-b-[1.5px] border-[#1A2B4C] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-2 py-0.5 bg-[#1A2B4C] text-[#F7F6F1] font-pixel text-[10px] rounded-xs shrink-0">
                    {inspectedProject.year}
                  </span>
                  <span className="font-pixel text-xs font-bold text-[#1A2B4C] uppercase truncate">
                    {inspectedProject.title} — {inspectedProject.type}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setInspectedProject(null)}
                  className="w-7 h-7 bg-white border-[1.5px] border-[#1A2B4C] rounded-xs flex items-center justify-center hover:bg-[#A3BFE0] transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 text-[#1A2B4C]" />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
                <div className="relative aspect-[16/9] w-full rounded border-[1.5px] border-[#1A2B4C] bg-[#1A2B4C] overflow-hidden shadow-[3px_3px_0px_#DCE6F2]">
                  <Image
                    src={inspectedProject.image}
                    alt={inspectedProject.title}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-pixel-display text-2xl sm:text-3xl font-bold text-[#1A2B4C] uppercase">
                      {inspectedProject.title}
                    </h3>
                    {inspectedProject.liveUrl && (
                      <a
                        href={inspectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-btn-primary py-2 px-4 text-[11px]"
                      >
                        <span>OPEN LIVE DEPLOYMENT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="font-mono-body text-xs sm:text-sm text-[#475D7A] leading-relaxed">
                    {inspectedProject.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="bg-white border-[1.5px] border-[#1A2B4C] rounded-md p-4 shadow-[3px_3px_0px_#DCE6F2] space-y-2.5">
                  <div className="font-pixel text-[10px] font-bold text-[#1A2B4C] uppercase tracking-wider border-b border-[#DCE6F2] pb-1.5">
                    ENGINEERING HIGHLIGHTS
                  </div>
                  <ul className="space-y-2">
                    {inspectedProject.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-mono-body text-xs text-[#475D7A] leading-snug"
                      >
                        <span className="mt-0.5 w-4 h-4 shrink-0 rounded-xs bg-[#DCE6F2] border border-[#1A2B4C] flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-[#1A2B4C]" />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {inspectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#DCE6F2] border border-[#1A2B4C] rounded-xs font-pixel text-[10px] font-bold text-[#1A2B4C]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
