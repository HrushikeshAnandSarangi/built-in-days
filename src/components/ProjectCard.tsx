"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { Project } from "@/data/projects";
import { PixelHeart } from "./ui/pixel-sprites";

interface ProjectCardProps {
  project: Project;
  index: number;
  onInspect: (project: Project) => void;
}

export function ProjectCard({ project, index, onInspect }: ProjectCardProps) {
  const [liked, setLiked] = useState(index === 0 || index === 2);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="pixel-card p-3.5 sm:p-4 flex flex-col justify-between group"
    >
      {/* Top Bevel Window Chrome */}
      <div>
        <div
          onClick={() => onInspect(project)}
          className="relative w-full aspect-[16/10] bg-[#1A2B4C] rounded border-[1.5px] border-[#1A2B4C] overflow-hidden cursor-pointer group/img"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.04]"
            priority={index < 3}
            unoptimized
          />

          {/* Top-left Index Badge */}
          <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#F7F6F1] border border-[#1A2B4C] rounded-xs font-pixel text-[9px] font-bold text-[#1A2B4C] shadow-[1.5px_1.5px_0px_#1A2B4C]">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Hover Inspect Pill */}
          <div className="absolute inset-0 bg-[#1A2B4C]/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F6F1] border-[1.5px] border-[#1A2B4C] rounded font-pixel text-[10px] font-bold text-[#1A2B4C] shadow-[2px_2px_0px_#1A2B4C]">
              <Maximize2 className="w-3 h-3" />
              <span>INSPECT PROJECT</span>
            </span>
          </div>
        </div>

        {/* Title Row with Heart Like Button */}
        <div className="mt-3.5 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <button
              type="button"
              onClick={() => onInspect(project)}
              className="text-left font-pixel text-xs sm:text-[13px] font-bold text-[#1A2B4C] uppercase hover:text-[#6C8EBF] transition-colors truncate block cursor-pointer"
            >
              {project.title}
            </button>
            <p className="font-mono-body text-[11px] text-[#475D7A] truncate mt-0.5">
              {project.type}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setLiked(!liked)}
            className="p-1 shrink-0 cursor-pointer focus:outline-none"
            title={liked ? "Unlike project" : "Like project"}
            aria-label={`Favorite ${project.title}`}
          >
            <PixelHeart filled={liked} size={16} interactive />
          </button>
        </div>

        {/* Brief Summary */}
        <p className="mt-2 font-mono-body text-[11.5px] text-[#475D7A] leading-snug line-clamp-2">
          {project.tagline}
        </p>
      </div>

      {/* Footer Tags + Inspect/Live Links */}
      <div className="mt-4 pt-3 border-t border-[#DCE6F2] flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {project.techStack.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-[#EBF1F8] border border-[#1A2B4C] rounded-xs font-pixel text-[9px] font-bold text-[#1A2B4C] uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 px-2 py-1 bg-[#1A2B4C] hover:bg-[#243B66] text-[#F7F6F1] rounded-xs font-pixel text-[9px] font-bold transition-colors"
              title="Open Live Deployment"
            >
              <span>LIVE</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          )}
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="px-2 py-1 bg-white hover:bg-[#DCE6F2] border border-[#1A2B4C] rounded-xs font-pixel text-[9px] font-bold text-[#1A2B4C] transition-colors cursor-pointer"
          >
            DETAILS
          </button>
        </div>
      </div>
    </motion.div>
  );
}
