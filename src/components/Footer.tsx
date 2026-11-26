"use client";

import React, { useState } from "react";
import { ArrowUp, Check, MessageSquare, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { CurlyUnderline, HandwrittenHook } from "./ui/curly-underline";

/**
 * Forest Silhouette Cutout
 * Replicates the natural forest canopy silhouette line from the reference image,
 * smoothly flowing the warm cream page (#F7F5EE) into the solid deep forest green footer (#163826).
 */
export function ForestSilhouette() {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none -mb-[1px]">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-24 md:h-28 text-[#163826]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,120 L0,82 C15,79 28,70 42,73 C56,66 70,68 84,78 C98,62 118,65 132,73 C145,58 162,55 175,66 C192,50 212,52 226,65 C240,42 264,40 282,53 C298,37 322,38 338,51 C355,40 376,44 388,58 C402,47 420,50 432,63 C442,52 458,55 468,66 C478,50 488,34 498,30 C512,24 528,27 538,38 C548,48 550,62 546,74 L546,82 L536,82 L536,74 C555,79 572,75 588,82 C678,68 700,48 722,35 C745,22 770,16 800,16 C830,16 855,22 878,35 C900,48 922,68 945,78 C960,70 976,72 992,81 C1002,62 1010,44 1022,32 C1038,22 1060,24 1074,37 C1084,48 1084,64 1078,76 L1078,82 L1068,82 L1068,74 C1087,76 1104,68 1120,76 C1142,58 1170,55 1190,68 C1212,48 1238,51 1254,65 C1276,52 1302,55 1318,68 C1340,45 1366,48 1386,61 C1407,52 1428,55 1440,68 L1440,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setFirstName("");
    }, 2000);
  };

  return (
    <footer className="w-full bg-transparent">
      {/* 1. Organic Forest Silhouette Cutout Transition */}
      <ForestSilhouette />

      {/* 2. Main Footer Body in Solid Deep Forest Green */}
      <div className="bg-[#163826] text-[#FAF8F2] pt-10 sm:pt-14 pb-8 border-t border-[#163826]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Three-Column Editorial Grid matching reference layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
            {/* COLUMN 1 (Left): Navigation Links + Social Circles */}
            <div className="md:col-span-3 space-y-5 md:border-r md:border-white/15 md:pr-6">
              <div>
                <HandwrittenHook color="text-[#D3E5DC]" rotate="-rotate-1" className="text-xl">
                  explore
                </HandwrittenHook>
              </div>
              <nav className="flex flex-col space-y-2.5 font-sans text-[13px] sm:text-sm font-medium tracking-tight text-[#FAF8F2]/90">
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
                <a href="#case-study" className="hover:text-white transition-colors">
                  Case Study
                </a>
                <a href="#projects" className="hover:text-white transition-colors">
                  Selected Projects
                </a>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </a>
                <a href="#contact" className="hover:text-white transition-colors">
                  Direct Intake
                </a>
              </nav>

              {/* Social Round Circles */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://github.com/hrushikeshsarangi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#163826] flex items-center justify-center transition-all"
                  aria-label="GitHub profile"
                >
                  <GithubIcon className="w-3.5 h-3.5 fill-current" />
                </a>

                <a
                  href="https://www.linkedin.com/in/hrushikesh-sarangi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#163826] flex items-center justify-center transition-all"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                </a>

                <a
                  href="https://wa.me/918260343186?text=Hi%20Hrushikesh,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#163826] flex items-center justify-center transition-all"
                  aria-label="WhatsApp direct chat"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>

                <a
                  href="mailto:hrushikeshsarangi7@gmail.com"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#163826] flex items-center justify-center transition-all"
                  aria-label="Direct email"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* COLUMN 2 (Center): Get Updates Form */}
            <div className="md:col-span-6 space-y-3.5 text-center md:px-6 md:border-r md:border-white/15">
              <div className="flex justify-center">
                <HandwrittenHook color="text-[#D98A29]" rotate="-rotate-1" className="text-2xl sm:text-3xl">
                  Create from the heart.
                </HandwrittenHook>
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl !text-[#FAF8F2] tracking-tight">
                Get Updates
              </h3>

              <p className="font-serif italic text-xs sm:text-sm !text-[#D3E5DC] max-w-sm mx-auto leading-relaxed">
                Subscribe to receive technical engineering memos, performance audit releases, and availability announcements.
              </p>

              {isSubscribed ? (
                <div className="py-6 px-4 rounded-lg bg-white/10 border border-white/20 text-[#FAF8F2] text-xs font-mono flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-[#D98A29]" />
                  <span>You are subscribed to engineering updates. Thank you!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5 max-w-md mx-auto pt-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="*Email"
                    required
                    className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/35 text-white placeholder-white/60 text-xs sm:text-sm focus:outline-none focus:border-white focus:bg-white/10 transition-colors"
                  />

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="*First Name"
                      required
                      className="flex-1 px-3.5 py-2.5 rounded bg-white/5 border border-white/35 text-white placeholder-white/60 text-xs sm:text-sm focus:outline-none focus:border-white focus:bg-white/10 transition-colors"
                    />

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded bg-white text-[#163826] font-bold text-xs uppercase tracking-wider hover:bg-[#F0ECE1] transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* COLUMN 3 (Right): Send A Message CTA + Contact + Seal */}
            <div className="md:col-span-3 space-y-4 md:pl-6 text-left md:text-right">
              <div>
                <HandwrittenHook color="text-[#D3E5DC]" rotate="-rotate-1" className="text-xl mb-1 block">
                  get in touch
                </HandwrittenHook>
                <a
                  href="mailto:hrushikeshsarangi7@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#FAF8F2] hover:text-[#D98A29] transition-colors"
                >
                  <span className="relative inline-block">
                    Send Us A Message
                    <CurlyUnderline color="#D98A29" strokeWidth={2} className="-bottom-1" />
                  </span>
                  <span>→</span>
                </a>
              </div>

              <div className="text-xs sm:text-[13px] font-mono text-[#FAF8F2]/90">
                +91 8260343186
              </div>

              <div className="text-xs text-[#A5C4B4] space-y-0.5 leading-relaxed">
                <div>285 Systems Studio, Campus Area</div>
                <div>Rourkela, Odisha, India 769008</div>
              </div>

              {/* Bottom Right Verified Badge / Seal */}
              <div className="pt-2 flex md:justify-end">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-[10px] font-mono text-[#FAF8F2]/85 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A29]" />
                  <span>BuiltInDays™ Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Coordinates, Top Link */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A5C4B4] font-sans">
            <div>
              © 2026 Hrushikesh Anand Sarangi. All Rights Reserved.
            </div>

            <div className="flex items-center gap-4 sm:gap-6 font-mono text-[11px]">
              <span>Zero Bloat Engineering</span>
              <span>·</span>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[#FAF8F2] hover:text-[#D98A29] transition-colors font-medium"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
