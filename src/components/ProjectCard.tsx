"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "./icons";
import { Project } from "@/data/projects";
import { LinkPreview } from "./ui/link-preview";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasGithubLink = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveLink = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const hasAnyLink = hasGithubLink || hasLiveLink;
  const primaryUrl = project.liveUrl || project.githubUrl;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="rounded-3xl border border-[#D5DCE6] bg-white overflow-hidden shadow-sm hover:border-[#1D56B3] transition-all duration-300">
      {/* Window Mockup Chrome Header */}
      <div className="px-5 py-3.5 bg-[#F4F6F9] border-b border-[#D5DCE6] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D5DCE6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D5DCE6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D5DCE6]" />
          <span className="text-xs font-mono font-bold text-[#0F1F38] ml-2 tabular-nums">
            {projectNumber}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#52647C]">
            {project.category}
          </span>
          <span className="text-xs font-mono text-[#D5DCE6]">·</span>
          <span className="text-xs font-mono text-[#52647C] tabular-nums">{project.year}</span>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* Title & Tagline & Conditional Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#D5DCE6]/60">
          <div>
            {primaryUrl ? (
              <LinkPreview url={primaryUrl} imageSrc={project.image}>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1F38] hover:text-[#1D56B3] transition-colors">
                  {project.title}
                </h3>
              </LinkPreview>
            ) : (
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1F38]">
                {project.title}
              </h3>
            )}
            <p className="text-xs sm:text-[13px] font-mono font-semibold text-[#E08E0B] tracking-[-0.01em] mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Action links with Aceternity LinkPreview popup on hover */}
          {hasAnyLink && (
            <div className="flex items-center gap-2 shrink-0">
              {hasGithubLink && (
                <LinkPreview
                  url={project.githubUrl!}
                  imageSrc={project.image}
                  className="cursor-pointer"
                >
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D5DCE6] bg-[#F4F6F9] hover:bg-white text-[#0F1F38] text-xs font-mono font-medium transition-colors hover:border-[#1D56B3]">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub ↗</span>
                  </span>
                </LinkPreview>
              )}
              {hasLiveLink && (
                <LinkPreview
                  url={project.liveUrl!}
                  imageSrc={project.image}
                  className="cursor-pointer"
                >
                  <span
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F1F38] hover:bg-[#1A3154] text-white text-xs font-mono font-bold transition-colors shadow-sm"
                  >
                    <span>Live app ↗</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E08E0B]" />
                  </span>
                </LinkPreview>
              )}
            </div>
          )}
        </div>

        {/* Dedicated Application UI Screenshot Frame */}
        <div className="my-6 rounded-2xl border border-[#D5DCE6] bg-[#0F1F38] overflow-hidden relative shadow-md">
          {primaryUrl ? (
            <LinkPreview url={primaryUrl} imageSrc={project.image} className="w-full block">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:max-h-[580px] overflow-hidden bg-[#0A1526] cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-cover object-top transition-transform duration-300 hover:scale-[1.01]"
                  priority={index < 2}
                  unoptimized
                />
              </div>
            </LinkPreview>
          ) : (
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:max-h-[580px] overflow-hidden bg-[#0A1526]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-cover object-top transition-transform duration-300 hover:scale-[1.01]"
                priority={index < 2}
                unoptimized
              />
            </div>
          )}
        </div>

        {/* Narrative Description & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          <div className="lg:col-span-6 text-xs sm:text-[13.5px] text-[#52647C] leading-[1.6] tracking-[-0.015em] text-pretty">
            {project.description}
          </div>

          <div className="lg:col-span-6 space-y-2.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#0F1F38]">
                <Check className="w-3.5 h-3.5 text-[#1D56B3] shrink-0 mt-0.5" />
                <span className="leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
