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
    <div className="rounded-3xl border border-[rgba(28,40,34,0.16)] bg-[#D0D9CD] overflow-hidden shadow-sm hover:border-[#1B533E] transition-all duration-300">
      {/* Window Mockup Chrome Header */}
      <div className="px-5 py-3.5 bg-[#F5F3EC] border-b border-[rgba(28,40,34,0.16)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(28,40,34,0.2)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(28,40,34,0.2)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(28,40,34,0.2)]" />
          <span className="text-xs font-mono font-bold text-[#1C2822] ml-2 tabular-nums">
            {projectNumber}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#32443A]">
            {project.category}
          </span>
          <span className="text-xs font-mono text-[rgba(28,40,34,0.3)]">·</span>
          <span className="text-xs font-mono text-[#32443A] tabular-nums">{project.year}</span>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* Title & Tagline & Conditional Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[rgba(28,40,34,0.16)]">
          <div>
            {primaryUrl ? (
              <LinkPreview url={primaryUrl} imageSrc={project.image}>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1C2822] hover:text-[#1B533E] transition-colors">
                  {project.title}
                </h3>
              </LinkPreview>
            ) : (
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1C2822]">
                {project.title}
              </h3>
            )}
            <p className="text-xs sm:text-[13px] font-mono font-semibold text-[#D98A29] tracking-[-0.01em] mt-1">
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
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[rgba(28,40,34,0.16)] bg-[#F5F3EC] hover:bg-[#E3E8E1] text-[#1C2822] text-xs font-mono font-medium transition-colors hover:border-[#1B533E]">
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
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1B533E] hover:bg-[#143F2F] text-[#F5F3EC] text-xs font-mono font-bold transition-colors shadow-sm"
                  >
                    <span>Live app ↗</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D98A29]" />
                  </span>
                </LinkPreview>
              )}
            </div>
          )}
        </div>

        {/* Dedicated Application UI Screenshot Frame */}
        <div className="my-6 rounded-2xl border border-[rgba(28,40,34,0.16)] bg-[#1C2822] overflow-hidden relative shadow-md">
          {primaryUrl ? (
            <LinkPreview url={primaryUrl} imageSrc={project.image} className="w-full block">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:max-h-[580px] overflow-hidden bg-[#15211B] cursor-pointer">
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
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:max-h-[580px] overflow-hidden bg-[#15211B]">
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
          <div className="lg:col-span-6 text-xs sm:text-[13.5px] text-[#32443A] leading-[1.6] tracking-[-0.015em] text-pretty">
            {project.description}
          </div>

          <div className="lg:col-span-6 space-y-2.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#1C2822]">
                <Check className="w-3.5 h-3.5 text-[#1B533E] shrink-0 mt-0.5" />
                <span className="leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
