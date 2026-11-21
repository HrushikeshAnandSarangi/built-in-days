"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";

interface VisitorAvatar {
  id: string;
  label: string;
  location: string;
  isCurrentUser?: boolean;
  eyes: "dash" | "dot" | "happy" | "sleepy" | "wink";
  mouth: "smile" | "flat" | "curve" | "open";
}

export function HeroStatusBar() {
  const [visitorLocation, setVisitorLocation] = useState<string>("Detecting location...");
  const [timeString, setTimeString] = useState<string>("");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [viewerCount, setViewerCount] = useState<number>(14);

  // Real-time IST clock update
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(now);
        setTimeString(`${formatted} IST`);
      } catch {
        setTimeString("5:30 AM IST");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Detect visitor geolocation with fast fallback
  useEffect(() => {
    let isMounted = true;

    fetch("https://ipapi.co/json/")
      .then((res) => {
        if (!res.ok) throw new Error("Geo lookup error");
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data && (data.city || data.region || data.country_name)) {
          const region = data.region || data.city;
          const country = data.country_name || "India";
          const formatted = region ? `${region}, ${country}` : country;
          setVisitorLocation(formatted);
        } else {
          setVisitorLocation("India");
        }
      })
      .catch(() => {
        if (!isMounted) return;
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (tz) {
            const city = tz.split("/").pop()?.replace(/_/g, " ");
            setVisitorLocation(city ? `${city}` : "India");
          } else {
            setVisitorLocation("India");
          }
        } catch {
          setVisitorLocation("India");
        }
      });

    // Subtle natural viewer count oscillation (12 - 16)
    const countInterval = setInterval(() => {
      setViewerCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return Math.min(Math.max(next, 12), 17);
      });
    }, 22000);

    return () => {
      isMounted = false;
      clearInterval(countInterval);
    };
  }, []);

  const avatars: VisitorAvatar[] = [
    {
      id: "u-current",
      label: "Person",
      location: `You're visiting from ${visitorLocation}`,
      isCurrentUser: true,
      eyes: "dash",
      mouth: "smile",
    },
    {
      id: "u-sf",
      label: "Person",
      location: "Visiting from San Francisco, US",
      eyes: "dot",
      mouth: "flat",
    },
    {
      id: "u-blr",
      label: "Person",
      location: "Visiting from Bengaluru, India",
      eyes: "happy",
      mouth: "smile",
    },
    {
      id: "u-lon",
      label: "Person",
      location: "Visiting from London, UK",
      eyes: "sleepy",
      mouth: "curve",
    },
    {
      id: "u-sin",
      label: "Person",
      location: "Visiting from Singapore",
      eyes: "wink",
      mouth: "smile",
    },
    {
      id: "u-ber",
      label: "Person",
      location: "Visiting from Berlin, Germany",
      eyes: "dash",
      mouth: "flat",
    },
    {
      id: "u-nyc",
      label: "Person",
      location: "Visiting from New York, US",
      eyes: "dot",
      mouth: "smile",
    },
    {
      id: "u-del",
      label: "Person",
      location: "Visiting from New Delhi, India",
      eyes: "happy",
      mouth: "curve",
    },
  ];

  return (
    <div className="relative inline-flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 py-2 px-3 sm:px-4 rounded-full bg-zinc-50 border border-zinc-200/80 text-zinc-600 text-xs sm:text-[13px] font-sans mb-6 select-none shadow-xs">
      {/* 1. Location */}
      <div className="flex items-center gap-1.5 text-zinc-700">
        <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
        <span className="font-medium">Rourkela, India</span>
      </div>

      <span className="text-zinc-300 hidden sm:inline">|</span>

      {/* 2. Real-time Live Clock (IST) */}
      <div className="flex items-center gap-1.5 text-zinc-700">
        <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
        <span className="font-mono text-xs">{timeString || "5:30 AM IST"}</span>
      </div>

      <span className="text-zinc-300 hidden sm:inline">|</span>

      {/* 3. Real-time Viewers Count & Radio Waves */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-zinc-700 font-medium">
          {/* Stylized radio broadcast waves icon */}
          <svg
            className="w-4 h-4 text-zinc-600 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
            <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
          </svg>
          <span className="font-mono text-xs text-zinc-800">{viewerCount}</span>
        </div>

        {/* 4. Avatars cluster with interactive tooltips */}
        <div className="relative flex items-center -space-x-1.5 pl-1">
          {avatars.slice(0, 7).map((avatar, idx) => {
            const isHovered = activeTooltip === avatar.id;
            return (
              <div
                key={avatar.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveTooltip(avatar.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                onClick={() => setActiveTooltip(activeTooltip === avatar.id ? null : avatar.id)}
                style={{ zIndex: isHovered ? 30 : 10 - idx }}
              >
                {/* Hand-drawn minimalist face avatar SVG */}
                <div
                  className={`w-6 h-6 rounded-full bg-white border ${
                    avatar.isCurrentUser ? "border-zinc-800 shadow-xs" : "border-zinc-300"
                  } flex items-center justify-center transition-transform hover:scale-125 hover:shadow-md`}
                >
                  <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none">
                    {/* Eyes */}
                    {avatar.eyes === "dash" && (
                      <>
                        <path d="M7 10h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M14 10h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </>
                    )}
                    {avatar.eyes === "dot" && (
                      <>
                        <circle cx="8" cy="10" r="1.2" fill="currentColor" />
                        <circle cx="16" cy="10" r="1.2" fill="currentColor" />
                      </>
                    )}
                    {avatar.eyes === "happy" && (
                      <>
                        <path d="M7 11c.7-1 2-1 2.5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M14.5 11c.7-1 2-1 2.5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </>
                    )}
                    {avatar.eyes === "sleepy" && (
                      <>
                        <path d="M7 10.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M14 10.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </>
                    )}
                    {avatar.eyes === "wink" && (
                      <>
                        <circle cx="8" cy="10" r="1.2" fill="currentColor" />
                        <path d="M14 10.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </>
                    )}

                    {/* Nose: tiny subtle stroke */}
                    <path d="M12 11.5v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

                    {/* Mouth */}
                    {avatar.mouth === "smile" && (
                      <path d="M9 16c1.5 1 4.5 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                    {avatar.mouth === "flat" && (
                      <path d="M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                    {avatar.mouth === "curve" && (
                      <path d="M9.5 16.5c1.2.6 3.8.6 5 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    )}
                    {avatar.mouth === "open" && (
                      <circle cx="12" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.4" />
                    )}
                  </svg>
                </div>

                {/* Floating Tooltip matching user screenshot */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <div className="bg-white px-3.5 py-2.5 rounded-xl border border-zinc-200 shadow-xl shadow-zinc-950/10 text-left">
                      <div className="text-[11px] font-mono text-zinc-400 font-medium tracking-tight">
                        {avatar.label}
                      </div>
                      <div className="text-xs font-semibold text-zinc-950 tracking-tight mt-0.5 whitespace-nowrap">
                        {avatar.location}
                      </div>
                    </div>
                    {/* Tooltip caret */}
                    <div className="w-2 h-2 bg-white border-r border-b border-zinc-200 rotate-45 mx-auto -mt-1" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
