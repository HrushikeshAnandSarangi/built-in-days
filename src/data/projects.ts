export interface Project {
  id: string;
  title: string;
  type: string;
  category: "Web Applications" | "Tauri Cross-Platform" | "Developer Tools & APIs";
  year: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  cloudinaryImage: string;
  githubUrl?: string;
  liveUrl?: string;
  screenType: "web" | "desktop" | "dashboard";
}

export const projects: Project[] = [
  {
    id: "oxide",
    title: "Oxide Cloud",
    type: "Web Platform & Deployment Suite",
    category: "Web Applications",
    year: "2026",
    tagline: "Self-hosted deployment console with zero-overhead container virtualization",
    description:
      "A full-stack deployment platform combining a reactive Next.js web console with a Rust/Axum orchestration backend, Pingora reverse proxy, and Nix reproducible builds. Features real-time log streaming, subdomain routing, and Prometheus metrics telemetry.",
    highlights: [
      "Next.js web dashboard with real-time deployment status and build logs",
      "O(1) lock-free subdomain routing holding 270ns lookup latency",
      "Nix-built static images reducing container footprints from 2.19 GB to 814 kB",
      "Full Docker/Bollard container isolation with automated SSL termination",
    ],
    techStack: ["Next.js", "TypeScript", "Rust", "Axum", "Pingora", "Tokio", "PostgreSQL", "Nix"],
    cloudinaryImage:
      "https://res.cloudinary.com/dydvuhg9x/image/upload/v1724391200/portfolio/oxide-preview.webp",
    githubUrl: "https://github.com/hrushikeshsarangi7/oxide",
    screenType: "web",
  },
  {
    id: "polynotes",
    title: "Polynotes",
    type: "Cross-Platform Desktop Application",
    category: "Tauri Cross-Platform",
    year: "2026",
    tagline: "Sub-4s on-device speech transcription desktop suite built with Tauri 2.0",
    description:
      "A native cross-platform desktop application for macOS, Windows, and Linux that runs speech-to-text entirely on client hardware. Integrates whisper.cpp via native C++ FFI bindings with WebRTC-VAD silence stripping and multilingual code-switching across 6+ Indian languages.",
    highlights: [
      "Lightweight desktop binary under 25MB with zero Electron runtime memory bloat",
      "2-4s end-to-end transcription latency on standard CPU hardware",
      "Zero recurring cloud API token fees and 100% offline privacy",
      "Cross-platform file export, audio timeline scrubbing, and hotkey triggers",
    ],
    techStack: ["Tauri 2.0", "Rust", "SolidJS", "whisper.cpp", "C++ FFI", "Tokio", "WebRTC-VAD"],
    cloudinaryImage:
      "https://res.cloudinary.com/dydvuhg9x/image/upload/v1724391200/portfolio/polynotes-preview.webp",
    githubUrl: "https://github.com/hrushikeshsarangi7/polynotes",
    screenType: "desktop",
  },
  {
    id: "auric-spatial",
    title: "Auric Geospatial",
    type: "Collaborative Web Data Engine",
    category: "Web Applications",
    year: "2026",
    tagline: "Real-time satellite imagery annotation verification system with MCP agent pipelines",
    description:
      "Built the end-to-end web data pipeline and spatial database engine behind an automated satellite imagery annotation-verification system, collapsing a 5-step manual review workflow into a unified single-pane web flow for 10+ concurrent analysts with Google Earth live synchronization.",
    highlights: [
      "Custom MCP servers providing agent-based access to internal spatial datasets",
      "Centralized spatial database engine supporting concurrent query, edit, and render without stale reads",
      "Live synchronization with Google Earth desktop and web viewer sessions",
      "Interactive multi-layer geospatial map viewer with polygon vector annotation",
    ],
    techStack: ["Next.js", "TypeScript", "PostGIS", "MCP Servers", "Python", "Google Earth API"],
    cloudinaryImage:
      "https://res.cloudinary.com/dydvuhg9x/image/upload/v1724391200/portfolio/auric-preview.webp",
    screenType: "web",
  },
  {
    id: "n6t-health",
    title: "N6T EHR Bridge",
    type: "Healthcare Web & Lab Integration",
    category: "Web Applications",
    year: "2025",
    tagline: "Automated EHR integration and real-time laboratory reporting for 3 hospital networks",
    description:
      "Engineered the full-stack bridge integrating automated Sysmex laboratory analyzers directly with hospital Electronic Health Records (EHR). Eliminated manual transcription from the critical diagnostic path and provided production web dashboards for hospital lab staff.",
    highlights: [
      "Zero-transcription automated data pipeline direct from hardware analyzers to EHR",
      "Deployed and supported across 3 live hospital production environments",
      "Sub-second alert routing for critical panic-range blood specimen values",
      "Role-based web access for pathology staff and on-duty clinicians",
    ],
    techStack: ["TypeScript", "Node.js", "React", "PostgreSQL", "HL7 / FHIR", "Docker"],
    cloudinaryImage:
      "https://res.cloudinary.com/dydvuhg9x/image/upload/v1724391200/portfolio/n6t-preview.webp",
    screenType: "dashboard",
  },
  {
    id: "warpllm",
    title: "WarpLLM Gateway",
    type: "High-Throughput Model Router",
    category: "Developer Tools & APIs",
    year: "2026",
    tagline: "Lock-free weighted round-robin LLM gateway client and provider router",
    description:
      "Production contribution to an open-source Rust-native LLM gateway: engineered OpenRouter integration across 5 model vendors with authentication and error attribution, and built a lock-free weighted round-robin load balancer shipped in release 0.5.0.",
    highlights: [
      "Lock-free weighted round-robin balancer eliminating mutex lock stalls",
      "Comprehensive test suite covering auth, model-slug resolution, and error routing",
      "High-throughput concurrent streaming request pipeline",
    ],
    techStack: ["Rust", "Tokio", "OpenRouter", "Async FFI", "cargo-mutants"],
    cloudinaryImage:
      "https://res.cloudinary.com/dydvuhg9x/image/upload/v1724391200/portfolio/warpllm-preview.webp",
    githubUrl: "https://github.com/rust-bitcoin/rust-bech32",
    screenType: "desktop",
  },
];
