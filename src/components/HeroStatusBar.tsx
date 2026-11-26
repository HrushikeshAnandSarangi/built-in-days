"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Clock } from "lucide-react";

interface VisitorAvatar {
  id: string;
  label: string;
  location: string;
  isCurrentUser?: boolean;
  isBot?: boolean;
  eyes?: "dash" | "dot" | "happy" | "sleepy" | "wink";
  mouth?: "smile" | "flat" | "curve" | "open";
}

export function HeroStatusBar() {
  const [visitorLocation, setVisitorLocation] = useState<string>("India");
  const [timeString, setTimeString] = useState<string>("");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [viewerCount, setViewerCount] = useState<number>(2);
  const [visitors, setVisitors] = useState<VisitorAvatar[]>([
    {
      id: "u-curr",
      label: "Person",
      location: "You're visiting from India",
      isCurrentUser: true,
      eyes: "dash",
      mouth: "smile",
    },
    {
      id: "bot-us",
      label: "Crawler Bot",
      location: "Visiting from United States",
      isBot: true,
      eyes: "dot",
      mouth: "flat",
    },
  ]);

  const clientIdRef = useRef<string>("");

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

  // Initialize client ID & presence heartbeat
  useEffect(() => {
    let clientId = "";
    if (typeof window !== "undefined") {
      clientId = sessionStorage.getItem("agy_client_id") || "";
      if (!clientId) {
        clientId = "user_" + Math.random().toString(36).substring(2, 9);
        sessionStorage.setItem("agy_client_id", clientId);
      }
      clientIdRef.current = clientId;
    }

    let isMounted = true;

    // Detect visitor geo-location
    fetch("https://ipapi.co/json/")
      .then((res) => {
        if (!res.ok) throw new Error("Geo lookup");
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data && (data.city || data.region || data.country_name)) {
          const region = data.region || data.city;
          const country = data.country_name || "India";
          const formatted = region ? `${region}, ${country}` : country;
          setVisitorLocation(formatted);
          sendHeartbeat(clientIdRef.current, formatted);
        } else {
          fallbackLocation();
        }
      })
      .catch(() => {
        if (isMounted) fallbackLocation();
      });

    function fallbackLocation() {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const city = tz ? tz.split("/").pop()?.replace(/_/g, " ") : "India";
        const loc = city || "India";
        setVisitorLocation(loc);
        sendHeartbeat(clientIdRef.current, loc);
      } catch {
        setVisitorLocation("India");
        sendHeartbeat(clientIdRef.current, "India");
      }
    }

    function sendHeartbeat(id: string, loc: string) {
      if (!id) return;
      fetch("/api/presence", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientId: id, location: loc }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!isMounted) return;
          if (data?.viewerCount) setViewerCount(data.viewerCount);
          if (data?.visitors && Array.isArray(data.visitors)) {
            setVisitors(data.visitors);
          }
        })
        .catch(() => {});
    }

    // Ping presence every 6 seconds to maintain real-time status
    const pingInterval = setInterval(() => {
      sendHeartbeat(clientIdRef.current, visitorLocation);
    }, 6000);

    return () => {
      isMounted = false;
      clearInterval(pingInterval);
    };
  }, [visitorLocation]);

  return (
    /* Completely transparent and borderless: NO card background, NO glassmorphism */
    <div className="relative inline-flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2 py-1 text-xs sm:text-[13px] font-sans select-none bg-transparent border-0 shadow-none">
      {/* 1. Location */}
      <div className="flex items-center gap-1.5 text-[#3A5646]">
        <MapPin className="w-3.5 h-3.5 text-[#3A5646] shrink-0" />
        <span className="font-medium text-[#152E20]">Rourkela, India</span>
      </div>

      <span className="text-[rgba(26,56,40,0.25)]">|</span>

      {/* 2. Real-time Live Clock (IST) */}
      <div className="flex items-center gap-1.5 text-[#3A5646]">
        <Clock className="w-3.5 h-3.5 text-[#3A5646] shrink-0" />
        <span className="font-mono tabular-nums text-xs text-[#152E20] font-medium">{timeString || "5:30 AM IST"}</span>
      </div>

      <span className="text-[rgba(26,56,40,0.25)]">|</span>

      {/* 3. Real-time Viewers Count & Radio Waves */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-[#3A5646] font-medium">
          {/* Radio signal waves icon in Forest Green */}
          <svg
            className="w-4 h-4 text-[#163826] shrink-0"
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
          <span className="font-mono tabular-nums text-xs text-[#152E20] font-bold">{viewerCount}</span>
        </div>

        {/* 4. Functional Avatars Cluster with interactive tooltips */}
        <div className="relative flex items-center -space-x-1.5 pl-1">
          {visitors.map((avatar, idx) => {
            const isHovered = activeTooltip === avatar.id;
            return (
              <div
                key={avatar.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveTooltip(avatar.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                onClick={() => setActiveTooltip(activeTooltip === avatar.id ? null : avatar.id)}
                style={{ zIndex: isHovered ? 40 : 20 - idx }}
              >
                {/* Minimalist face avatar */}
                <div
                  className={`w-6 h-6 rounded-full bg-white/90 border ${
                    avatar.isCurrentUser
                      ? "border-[#152E20] shadow-xs"
                      : avatar.isBot
                      ? "border-[#D98A29] bg-[#D98A29]/20"
                      : "border-white/80"
                  } flex items-center justify-center transition-transform hover:scale-125 hover:shadow-md`}
                >
                  <svg className="w-4 h-4 text-[#152E20]" viewBox="0 0 24 24" fill="none">
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
                    {(!avatar.eyes || avatar.eyes === "wink") && (
                      <>
                        <circle cx="8" cy="10" r="1.2" fill="currentColor" />
                        <path d="M14 10.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </>
                    )}

                    {/* Nose */}
                    <path d="M12 11.5v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

                    {/* Mouth */}
                    {avatar.mouth === "flat" && (
                      <path d="M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                    {avatar.mouth === "curve" && (
                      <path d="M9.5 16.5c1.2.6 3.8.6 5 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    )}
                    {avatar.mouth === "open" && (
                      <circle cx="12" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.4" />
                    )}
                    {(!avatar.mouth || avatar.mouth === "smile") && (
                      <path d="M9 16c1.5 1 4.5 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                  </svg>
                </div>

                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <div className="bg-white/95 px-3.5 py-2.5 rounded-xl border border-[rgba(26,56,40,0.12)] shadow-xl shadow-[#152E20]/10 text-left">
                      <div className="text-[11px] font-mono text-[#3A5646] font-medium tracking-tight flex items-center gap-1.5">
                        <span>{avatar.label}</span>
                        {avatar.isBot && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#D98A29]/20 text-[#152E20] font-bold">
                            BOT
                          </span>
                        )}
                        {avatar.isCurrentUser && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#183627]/15 text-[#183627] font-bold">
                            YOU
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-semibold text-[#152E20] tracking-tight mt-0.5 whitespace-nowrap">
                        {avatar.location}
                      </div>
                    </div>
                    {/* Tooltip caret */}
                    <div className="w-2 h-2 bg-white/95 border-r border-b border-[rgba(26,56,40,0.12)] rotate-45 mx-auto -mt-1" />
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
