"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./icons";
import {
  PixelMailbox,
  PixelDeveloperBuddy,
  PixelFlowerIcon,
  PixelHeart,
  PixelSparkle,
} from "./ui/pixel-sprites";

export function ContactSection() {
  const directEmail = "hrushikeshsarangi7@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="relative bg-[#F7F6F1] pt-6 pb-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scenic Periwinkle Sky-Blue Pixel Banner matching reference bottom CTA */}
        <div className="relative rounded-md border-[1.5px] border-[#1A2B4C] bg-gradient-to-b from-[#DCE8F5] to-[#C2D8EE] shadow-[4px_4px_0px_#1A2B4C] overflow-hidden px-5 sm:px-10 py-10 sm:py-12">
          {/* Twinkling Pixel Stars in sky */}
          <PixelSparkle size={14} delay={0.1} className="absolute top-4 left-12 opacity-80" />
          <PixelSparkle size={12} delay={0.8} className="absolute top-6 right-16 opacity-80" />

          {/* Subtle Pixel Clouds Silhouette at bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-8 pointer-events-none opacity-45"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 100%, #FFFFFF 28px, transparent 29px), radial-gradient(circle at 48% 100%, #FFFFFF 36px, transparent 37px), radial-gradient(circle at 80% 100%, #FFFFFF 32px, transparent 33px)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* LEFT: Interactive Pixel Mailbox */}
            <div className="hidden sm:flex flex-col items-center shrink-0">
              <PixelMailbox size={88} />
            </div>

            {/* CENTER: Headline, Email Copy, CTA & Channel Links */}
            <div className="flex-1 text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="font-pixel-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#1A2B4C] uppercase tracking-tight leading-tight">
                LET&apos;S BUILD SOMETHING{" "}
                <span className="underline decoration-wavy decoration-[#6C8EBF] underline-offset-4">
                  MEASURABLE
                </span>{" "}
                TOGETHER
              </h2>

              <p className="font-mono-body text-xs sm:text-sm text-[#1A2B4C]/85">
                Have a product specification or latency bottleneck in mind? Let&apos;s turn it into fast software.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <a
                  href={`mailto:${directEmail}`}
                  className="pixel-btn-primary py-2.5 px-5 text-xs"
                >
                  <span>GET IN TOUCH</span>
                  <Mail className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="pixel-btn-secondary py-2.5 px-4 text-[11px]"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1A2B4C]" />
                      <span>COPIED EMAIL!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono-body lowercase tracking-normal font-bold">
                        {directEmail}
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Direct Channels */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                <a
                  href="https://github.com/HrushikeshAnandSarangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 hover:bg-white border border-[#1A2B4C] rounded-xs font-pixel text-[9px] font-bold text-[#1A2B4C] transition-colors"
                >
                  <GithubIcon className="w-3 h-3 fill-current" />
                  <span>@HrushikeshAnandSarangi</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hrushikesh-anand-sarangi-645b02269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white border border-[#1A2B4C] rounded-xs font-pixel text-[9px] font-bold text-[#1A2B4C] transition-colors"
                >
                  <LinkedinIcon className="w-3 h-3 fill-current" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://wa.me/918260343186?text=Hi%20Hrushikesh,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 hover:bg-white border border-[#1A2B4C] rounded-xs font-pixel text-[9px] font-bold text-[#1A2B4C] transition-colors"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* RIGHT: Blooming Flower + Pixel Developer Character with Heart Speech Bubble */}
            <div className="hidden sm:flex items-end gap-2 shrink-0 relative">
              <div className="mb-1">
                <PixelFlowerIcon size={46} />
              </div>

              <div className="relative flex flex-col items-center">
                {/* Tiny Heart Speech Bubble */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-1 px-2 py-1 bg-white border-[1.5px] border-[#1A2B4C] rounded shadow-[2px_2px_0px_#1A2B4C]"
                >
                  <PixelHeart filled size={11} />
                </motion.div>
                <PixelDeveloperBuddy size={68} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
