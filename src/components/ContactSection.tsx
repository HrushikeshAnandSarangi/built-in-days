"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

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
    <section id="contact" className="py-20 sm:py-28 bg-[#F7F5EE] border-t border-[rgba(26,56,40,0.12)] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Left Column: Editorial Headline, Large Email, and Social Links */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-handwriting text-xl sm:text-2xl text-[#183627] -rotate-1 select-none">
                  let&apos;s talk
                </span>
                <span className="w-6 h-[1px] bg-[#183627]/40" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#152E20] tracking-[-0.035em] leading-[1.12] max-w-xl text-balance">
                Have a project in mind or want to make systems faster?
              </h2>
            </div>

            {/* Prominent Direct Email with quick-copy option */}
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${directEmail}`}
                className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#152E20] hover:text-[#183627] transition-colors tracking-[-0.025em] underline decoration-[#D98A29] decoration-2 underline-offset-8"
              >
                {directEmail}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-[#3A5646] hover:text-[#152E20] hover:bg-white/80 transition-all shrink-0 cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#183627] bg-[#183627]/10 px-2.5 py-0.5 rounded-full border border-[#183627]/30 font-bold">
                    <Check className="w-3 h-3 text-[#183627]" />
                    copied!
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Coordinates Links (Uppercase with underlines) */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono tracking-widest uppercase">
              <a
                href="https://www.linkedin.com/in/hrushikesh-sarangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A5646] hover:text-[#152E20] underline underline-offset-4 decoration-[rgba(26,56,40,0.18)] hover:decoration-[#183627] transition-colors font-semibold"
              >
                LINKEDIN
              </a>

              <a
                href="https://github.com/hrushikeshsarangi7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A5646] hover:text-[#152E20] underline underline-offset-4 decoration-[rgba(26,56,40,0.18)] hover:decoration-[#183627] transition-colors font-semibold"
              >
                GITHUB
              </a>

              <a
                href="https://hrushi.is-a.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A5646] hover:text-[#152E20] underline underline-offset-4 decoration-[rgba(26,56,40,0.18)] hover:decoration-[#183627] transition-colors font-semibold"
              >
                DEV PORTFOLIO
              </a>

              <a
                href="https://wa.me/918260343186?text=Hi%20Hrushikesh,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A5646] hover:text-[#152E20] underline underline-offset-4 decoration-[rgba(26,56,40,0.18)] hover:decoration-[#183627] transition-colors font-semibold"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
