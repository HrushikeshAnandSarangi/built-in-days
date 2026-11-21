"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Globe,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { HandshakeAnimation } from "./SiteAnimations";

export function ContactSection() {
  const [projectType, setProjectType] = useState<string>("build");
  const [timeline, setTimeline] = useState<string>("urgent");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const directEmail = "hrushikeshsarangi7@gmail.com";
  const directPhone = "+91 8260343186";

  // Listen to select-scope event from Hero Service cards
  useEffect(() => {
    const handleScopeSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        if (customEvent.detail === "build") setProjectType("build");
        else if (customEvent.detail === "fix") setProjectType("fix");
      }
    };
    window.addEventListener("select-scope", handleScopeSelect);
    return () => window.removeEventListener("select-scope", handleScopeSelect);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getBriefText = () => {
    const typeLabel =
      projectType === "build"
        ? "Build Application (0 → 1 Web / Desktop)"
        : projectType === "fix"
        ? "Fix & Accelerate (Performance & Latency)"
        : "Tauri Cross-Platform Software";

    return `Hi Hrushikesh,\n\nI would like to discuss a project:\n\n- Scope: ${typeLabel}\n- Desired Timeline: ${timeline}\n- From: ${name || "[Your Name]"}\n- Email: ${email || "[Your Email]"}\n- Overview:\n${details || "[Details of what you need built or fixed]"}\n\nLooking forward to speaking.`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getBriefText());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const typeSubject =
      projectType === "build"
        ? "Project Inquiry: Build Application"
        : projectType === "fix"
        ? "Performance Rescue Inquiry"
        : "Cross-Platform Desktop Inquiry";

    const mailtoUrl = `mailto:${directEmail}?subject=${encodeURIComponent(
      `[Inquiry] ${typeSubject} - ${name || "Client"}`
    )}&body=${encodeURIComponent(getBriefText())}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-zinc-200 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
            // direct contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Tell me what needs to be built, or what’s slowing you down.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-[60ch]">
            No sales reps or layers of management. You work directly with the engineer who
            architects the database, writes the TypeScript and Rust, and ships the software.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          {/* Left Column: Direct Project Intake Form */}
          <div className="lg:col-span-7 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-10">
            <form onSubmit={handleMailto} className="space-y-6">
              {/* Scope Selector */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  // select scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: "build", label: "Build Application", sub: "Web / Full-Stack" },
                    { id: "fix", label: "Fix & Accelerate", sub: "Speed / Tuning" },
                    { id: "tauri", label: "Tauri Desktop", sub: "Cross-Platform" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        projectType === item.id
                          ? "bg-white border-zinc-950 shadow-sm ring-1 ring-zinc-950"
                          : "bg-white/80 border-zinc-200 hover:border-zinc-300 text-zinc-600"
                      }`}
                    >
                      <div className="text-xs font-semibold text-zinc-950">
                        {item.label}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                        {item.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline selector */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  // target timeline
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "urgent", label: "[ 1-2 weeks (urgent) ]" },
                    { id: "standard", label: "[ within 1 month ]" },
                    { id: "ongoing", label: "[ ongoing contract ]" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        timeline === t.id
                          ? "bg-zinc-950 text-white border-zinc-950 font-semibold"
                          : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
                      }`}
                      style={timeline === t.id ? { color: "#ffffff", backgroundColor: "#09090b" } : {}}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Founder / CTO"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 bg-white text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 bg-white text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                  Project Requirements
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline what needs to be created or fixed. What is the current stack, goals, or constraints?..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 bg-white text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-all shadow-sm font-medium text-sm"
                  style={{ color: "#ffffff", backgroundColor: "#09090b" }}
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span style={{ color: "#ffffff", fontWeight: 500 }}>Send Direct Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-zinc-300 bg-white text-zinc-800 font-mono text-xs hover:bg-zinc-100 transition-all"
                >
                  {copiedBrief ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>[ brief copied! ]</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-500" />
                      <span>[ copy brief ]</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-zinc-500 pt-1">
                // Direct inbox: typically replying within 4 hours.
              </div>
            </form>
          </div>

          {/* Right Column: Direct Channels & Engineering Commitment */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
              {/* Handshake Partnership Vector Animation */}
              <HandshakeAnimation className="w-36 h-24 mx-auto mb-2" />

              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1 text-center">
                // direct partnership
              </div>
              <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-4 text-center">
                Direct Channels
              </h3>

              <div className="space-y-3">
                {/* Email Direct */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                    <a
                      href={`mailto:${directEmail}`}
                      className="font-mono text-xs text-zinc-900 hover:text-emerald-700 truncate"
                    >
                      {directEmail}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-950 transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                    <a
                      href={`tel:${directPhone.replace(/\s+/g, "")}`}
                      className="font-mono text-xs text-zinc-900 hover:text-emerald-700"
                    >
                      {directPhone}
                    </a>
                  </div>
                  <a
                    href={`https://wa.me/918260343186?text=${encodeURIComponent(
                      "Hi Hrushikesh, I would like to discuss building an application / performance consulting."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-mono text-emerald-700 hover:underline px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200"
                  >
                    [ whatsapp ↗ ]
                  </a>
                </div>

                {/* Location / Base */}
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-600 flex items-center justify-between">
                  <span>Base: NIT Rourkela, India</span>
                  <span className="text-zinc-950 font-semibold">IST (UTC+5:30)</span>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-6 mt-6 border-t border-zinc-200">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  // verified coordinates
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/hrushikeshsarangi7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-mono text-zinc-800 hover:bg-zinc-100 hover:border-zinc-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>[ github ↗ ]</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hrushikesh-sarangi/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-mono text-zinc-800 hover:bg-zinc-100 hover:border-zinc-400 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>[ linkedin ↗ ]</span>
                  </a>

                  <a
                    href="https://hrushi.is-a.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-mono text-zinc-800 hover:bg-zinc-100 hover:border-zinc-400 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>[ hrushi.is-a.dev ↗ ]</span>
                  </a>
                </div>
              </div>

              {/* Engagement Standards Card */}
              <div className="mt-6 pt-5 border-t border-zinc-200 space-y-2.5 text-xs text-zinc-600 font-mono">
                <div className="flex items-center gap-2 text-zinc-800">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Turnaround: Delivered in days (fixed scope)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Quality: Full code handover & zero debt</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-800">
                  <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Empirical: Verified before/after benchmarks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
