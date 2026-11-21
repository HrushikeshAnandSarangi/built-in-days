"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "./icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasGithubLink = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveLink = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const hasAnyLink = hasGithubLink || hasLiveLink;
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
            {projectNumber} // {project.id}.app
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-600">
            [ {project.category.toLowerCase()} ]
          </span>
          <span className="text-xs font-mono text-zinc-400">·</span>
          <span className="text-xs font-mono text-zinc-600">{project.year}</span>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* Title & Tagline & Conditional Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-100">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-emerald-700 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* If a link is provided with the project then add a button to open the link in another page otherwise hide the button */}
          {hasAnyLink && (
            <div className="flex items-center gap-2 shrink-0">
              {hasGithubLink && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>[ github ↗ ]</span>
                </a>
              )}
              {hasLiveLink && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-950 bg-zinc-950 hover:bg-zinc-800 text-xs font-mono transition-colors shadow-sm"
                  style={{ color: "#ffffff", backgroundColor: "#09090b" }}
                >
                  <span style={{ color: "#ffffff" }}>[ live app ↗ ]</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Dedicated Application UI Screenshot Frame */}
        <div className="my-6 rounded-2xl border border-zinc-200/90 bg-zinc-950 overflow-hidden relative shadow-md">
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
        </div>

        {/* Narrative Description & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          <div className="lg:col-span-6 text-sm text-zinc-600 leading-relaxed">
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

        {/* Tech Stack Brackets */}
        <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-400">// stack:</span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-zinc-700 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200"
            >
              [ {tech.toLowerCase()} ]
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
