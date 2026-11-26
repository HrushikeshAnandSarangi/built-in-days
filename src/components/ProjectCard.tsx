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
    <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:border-zinc-950 transition-all duration-300">
      {/* Window Mockup Chrome Header */}
      <div className="px-5 py-3.5 bg-zinc-100/90 border-b border-zinc-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="text-xs font-mono text-zinc-600 ml-2">
            {projectNumber}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-600">
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-400">·</span>
          <span className="text-xs font-mono text-zinc-600">{project.year}</span>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* Title & Tagline & Conditional Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-100">
          <div>
            {primaryUrl ? (
              <LinkPreview url={primaryUrl} imageSrc={project.image}>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.035em] leading-[1.05] text-zinc-950 hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
              </LinkPreview>
            ) : (
              <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.035em] leading-[1.05] text-zinc-950">
                {project.title}
              </h3>
            )}
            <p className="text-xs sm:text-[13px] font-sans font-medium text-emerald-700 tracking-[-0.01em] mt-1">
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
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 text-xs font-mono transition-colors hover:border-zinc-300">
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-950 bg-zinc-950 hover:bg-zinc-800 text-xs font-mono transition-colors shadow-sm hover:border-emerald-500"
                    style={{ color: "#ffffff", backgroundColor: "#09090b" }}
                  >
                    <span style={{ color: "#ffffff" }}>Live app ↗</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
                  </span>
                </LinkPreview>
              )}
            </div>
          )}
        </div>

        {/* Dedicated Application UI Screenshot Frame */}
        <div className="my-6 rounded-2xl border border-zinc-200/90 bg-zinc-950 overflow-hidden relative shadow-md">
          {primaryUrl ? (
            <LinkPreview url={primaryUrl} imageSrc={project.image} className="w-full block">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:max-h-[580px] overflow-hidden bg-zinc-900 cursor-pointer">
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
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:max-h-[580px] overflow-hidden bg-zinc-900">
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
          <div className="lg:col-span-6 text-xs sm:text-[13.5px] text-zinc-600 leading-[1.55] tracking-[-0.015em] text-pretty">
            {project.description}
          </div>

          <div className="lg:col-span-6 space-y-2.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
