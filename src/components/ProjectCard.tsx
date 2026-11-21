"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "./icons";
import { Project } from "@/data/projects";
import {
  OxideScreen,
  PolynotesScreen,
  AuricScreen,
  N6tScreen,
  WarpLlmScreen,
} from "./ProjectScreens";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Render the dedicated application UI screen for this project
  const renderBespokeScreen = () => {
    switch (project.id) {
      case "oxide":
        return <OxideScreen />;
      case "polynotes":
        return <PolynotesScreen />;
      case "auric":
        return <AuricScreen />;
      case "n6t-health":
        return <N6tScreen />;
      case "warpllm":
        return <WarpLlmScreen />;
      default:
        return <OxideScreen />;
    }
  };

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:border-zinc-950 transition-all duration-300">
      {/* Window Mockup Chrome Header */}
      <div className="px-5 py-3.5 bg-zinc-100/90 border-b border-zinc-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="text-xs font-mono text-zinc-600 ml-2">
            0{index + 1} // {project.id}.app
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
        {/* Title & Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-100">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-emerald-700 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>[ github ]</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-950 bg-zinc-950 hover:bg-zinc-800 text-xs font-mono transition-colors shadow-sm"
                style={{ color: "#ffffff", backgroundColor: "#09090b" }}
              >
                <span style={{ color: "#ffffff" }}>[ live app ]</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
              </a>
            )}
          </div>
        </div>

        {/* Dedicated Application UI Screen Frame */}
        <div className="my-6 rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden relative shadow-inner">
          <div className="h-64 sm:h-80 w-full relative">
            {/* Real Application UI Screen Mockup */}
            {renderBespokeScreen()}

            {/* Cloudinary Image Overlay (if available and loaded) */}
            {!imageError && (
              <Image
                src={project.cloudinaryImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                className={`object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                unoptimized
              />
            )}
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
