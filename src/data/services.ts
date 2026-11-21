export interface ServiceOffering {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  keyOutcomes: string[];
  idealFor: string;
  techArsenal: string[];
  benchmarkQuote: string;
}

export const services: ServiceOffering[] = [
  {
    id: "build",
    step: "01",
    title: "Build Your Application",
    tagline: "0 to 1 full-stack & systems engineering shipped in days, not months",
    description:
      "Turn your product specification into an airtight, production-grade application. Every line is written with strict type safety, predictable database schemas, resilient API boundaries, and lightning-fast user interactions. No boilerplate clutter, no fragile dependencies.",
    idealFor:
      "Founders and engineering teams who need an MVP, new feature vertical, or internal mission-critical tool delivered at highest velocity without accumulating technical debt.",
    deliverables: [
      "Production-ready Next.js / TypeScript web application or Tauri desktop software",
      "High-throughput backend architecture (Rust/Axum, Tokio, or Node.js)",
      "Strict relational data schema with migrations & indexing (PostgreSQL, SQLite)",
      "Automated CI/CD build pipelines with reproducible Nix / Docker environments",
      "Full test coverage: integration, end-to-end, and unit verification",
      "Zero-latency state synchronization and telemetry integration",
    ],
    keyOutcomes: [
      "Rapid time-to-market with rock-solid reliability",
      "Clean, modular codebase your internal team will enjoy maintaining",
      "Designed from day one to handle scale without architectural rewrites",
    ],
    techArsenal: [
      "Next.js",
      "TypeScript",
      "Rust / Axum",
      "PostgreSQL",
      "Tokio",
      "Tailwind CSS",
      "Docker / Nix",
    ],
    benchmarkQuote: "Built to endure high concurrency from day one with zero fragile shortcuts.",
  },
  {
    id: "fix-and-accelerate",
    step: "02",
    title: "Fix Your Application (Make It Faster)",
    tagline: "Flamegraph-guided profiling, p99 latency crushing, and memory trimming",
    description:
      "When your application slows down, users churn and cloud compute costs explode. I systematically profile your hotpaths using flamegraphs, perf, and Criterion to bisect divergence, eliminate memory leaks, optimize slow SQL queries, and shrink container footprints by orders of magnitude.",
    idealFor:
      "Companies suffering from sluggish API response times, high p99 latency spikes, runaway AWS/GCP bills, bloated container images, or elusive concurrency bottlenecks.",
    deliverables: [
      "Empirical diagnostic audit with flamegraphs and hotpath cost analysis",
      "Sub-millisecond query optimization and index redesign for PostgreSQL/databases",
      "Container footprint minimization (e.g., slashing 2.19 GB down to 814 kB)",
      "Memory leak eradication and thread contention reduction (lock-free patterns)",
      "Reproducible Criterion.rs / k6 benchmark suites committed to your CI",
      "Detailed before/after verification report with verifiable delta measurements",
    ],
    keyOutcomes: [
      "Immediate 50% to 90%+ reduction in p99 latency",
      "Dramatically reduced server bills and compute overhead",
      "Predictable, deterministic performance under surge traffic",
    ],
    techArsenal: [
      "Perf & Flamegraph",
      "Criterion.rs",
      "Rust / C++",
      "LLVM IR Analysis",
      "PostgreSQL EXPLAIN ANALYZE",
      "Pingora Proxy",
    ],
    benchmarkQuote: "Proven track record: reduced container images by 99.96% and routing to 270ns.",
  },
  {
    id: "systems-and-edge",
    step: "03",
    title: "On-Device AI & High-Throughput Engines",
    tagline: "Sub-second local inference, custom FFI, and zero cloud API tax",
    description:
      "Cut recurring third-party AI provider costs by running transcription, anomaly detection, and embedded inference directly on client hardware. I build native C++/Rust FFI bridges that execute whisper, deep learning models, and custom compute kernels with zero external network reliance.",
    idealFor:
      "Products needing confidential on-premise execution, zero per-minute transcription costs, real-time audio processing, or low-power edge diagnostics.",
    deliverables: [
      "Native whisper.cpp FFI integration for sub-4s on-device transcription",
      "WebRTC-VAD silence stripping pipelines for inference acceleration",
      "Embedded computer vision & deep learning anomaly detection (patent-backed)",
      "Lightweight cross-platform desktop executables under 25MB (Tauri 2.0)",
      "Lock-free provider routing and failover load balancers",
      "Complete offline verification harness with zero cloud dependencies",
    ],
    keyOutcomes: [
      "$0 recurring cloud API token bills for transcription & inference",
      "Guaranteed privacy: zero audio or sensitive telemetry leaves the device",
      "Sub-second response times unaffected by network jitter",
    ],
    techArsenal: [
      "whisper.cpp",
      "C++ / Rust FFI",
      "Tauri 2.0",
      "WebRTC-VAD",
      "PyTorch / ONNX",
      "Lock-free DashMap",
    ],
    benchmarkQuote: "Transcribes audio locally in 2-4 seconds in a standalone desktop binary under 25MB.",
  },
];
