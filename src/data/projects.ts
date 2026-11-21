export interface Project {
  id: string;
  title: string;
  type: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  screenType?: "web" | "desktop" | "dashboard";
}

export const projects: Project[] = [
  {
    id: "restora",
    title: "Restora",
    type: "Offline-First Restaurant POS & Operating System",
    category: "Cross-Platform Desktop & Mobile",
    year: "2026",
    tagline: "Offline-first restaurant POS application served across macOS, Linux, Windows, and Android",
    description:
      "A high-reliability, offline-first Point of Sale (POS) and restaurant operations application engineered to function seamlessly without persistent internet access. Delivers sub-millisecond local order processing, visual floor table management, real-time Kitchen Display Systems (KDS), credit tracking (Udhaari), inventory synchronization, and bi-directional multi-terminal sync across 4 operating systems.",
    highlights: [
      "4-Platform Cross-Compilation: Unified architecture serving native macOS, Windows, Linux, and Android clients",
      "Offline-First Reliability: Local embedded database with conflict-free background sync queues when reconnecting",
      "Interactive Table & Floor Mapping: Real-time table occupancy status, order timers, and multi-floor routing",
      "End-to-End Restaurant Workflow: Integrated order portal, kitchen display routing, udhaari ledger, and Power BI analytics export",
    ],
    techStack: [
      "Tauri 2.0",
      "Rust",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "SQLite",
      "Android",
      "Local-First Sync",
    ],
    image:
      "https://res.cloudinary.com/dk6m1qejk/image/upload/v1795296524/copy_of_whatsapp_image_2026-11-22_at_013610_jnvct7.jpg",
    githubUrl: undefined,
    liveUrl: undefined,
    screenType: "desktop",
  },
  {
    id: "edustarr",
    title: "EduStarr",
    type: "EdTech & Assessment Platform",
    category: "Web Applications",
    year: "2026",
    tagline: "Business website for ESAT mock exam preparation and student evaluation",
    description:
      "A comprehensive educational assessment platform designed for competitive ESAT mock exam preparation. Built with high-throughput test engines, real-time question timers, automated score tabulation, and granular student performance analytics.",
    highlights: [
      "Real-Time Mock Exam Simulation: Timed assessment modules with dynamic question sequencing",
      "Instant Analytical Feedback: Score breakdowns, percentile tracking, and section-by-section analysis",
      "High-Performance Web Portal: Fast, responsive interface engineered for desktop and tablet exam takers",
      "Secure Assessment Delivery: Anti-cheat safeguards, session persistence, and instant result generation",
    ],
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PostgreSQL", "Node.js"],
    image:
      "https://res.cloudinary.com/dk6m1qejk/image/upload/v1773235623/portfolio/projects/oxsty8gk0pt2lv6nfqcv.png",
    liveUrl: "https://www.edustarr.in/",
    githubUrl: undefined,
    screenType: "web",
  },
  {
    id: "ieee-indiscon-2025",
    title: "IEEE Indiscon 2025",
    type: "International Conference Portal",
    category: "Web Applications",
    year: "2025",
    tagline: "Official international conference web platform for IEEE Indiscon 2025",
    description:
      "The official web presence and conference portal for IEEE Indiscon 2025, a prestigious international academic and industry conference. Handles paper submission guidelines, speaker profiles, track schedules, committee listings, and delegate registrations.",
    highlights: [
      "Conference Information Architecture: Clear navigation for call-for-papers, tracks, and keynote sessions",
      "High-Traffic Reliability: Statically optimized page loads ensuring instant access for global researchers",
      "Official IEEE Brand Standards: Strict adherence to IEEE design guidelines, clean typography, and accessibility",
      "Interactive Multi-Track Schedule: Day-wise timeline view with track filtering and venue maps",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/dk6m1qejk/image/upload/v1758738244/Screenshot_2025-09-24_235334_pu3e11.png",
    githubUrl: undefined,
    liveUrl: undefined,
    screenType: "web",
  },
  {
    id: "ipf-ngo",
    title: "IPF",
    type: "Non-Governmental Organization Platform",
    category: "Web Applications",
    year: "2025",
    tagline: "Official web platform and community outreach portal for the IPF NGO",
    description:
      "A responsive, mission-driven web platform developed for the IPF Non-Governmental Organization (NGO). Engineered to document humanitarian initiatives, community health programs, volunteer onboarding, and verified impact metrics.",
    highlights: [
      "Grassroots Impact Transparency: Detailed program reports, beneficiary counts, and field updates",
      "Volunteer & Partner Onboarding: Streamlined forms for volunteer signups and community initiatives",
      "Mobile-First Optimization: Fast load times on low-bandwidth mobile connections across rural regions",
      "Media & Event Showcase: Photo and video galleries documenting active ground-level campaigns",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/dk6m1qejk/image/upload/v1758738205/Screenshot_2025-09-24_235258_hfzc5n.png",
    githubUrl: undefined,
    liveUrl: undefined,
    screenType: "web",
  },
  {
    id: "shantanu-panda",
    title: "Personal Portfolio",
    type: "Engineering Showcase Portfolio",
    category: "Web Applications",
    year: "2025",
    tagline: "Personal portfolio for a mechanical engineer showcasing CAD, FEA, and robotics",
    description:
      "A technical portfolio custom-built for mechanical engineer Shantanu Panda. Showcases complex Finite Element Analysis (FEA) simulations, 3D CAD models, robotics hardware projects, academic publications, and fabrication experience.",
    highlights: [
      "Technical Project Walkthroughs: Interactive project breakdowns with CAD renders and FEA heatmaps",
      "Fluid Spatial Aesthetics: Smooth Framer Motion transitions with high-contrast editorial hierarchy",
      "Zero Layout Shift: Highly optimized media delivery with instant image preloading",
      "Direct Inquiry Channels: One-click contact mechanisms for academic labs and engineering recruiters",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image:
      "https://res.cloudinary.com/dk6m1qejk/image/upload/v1758738510/Screenshot_2025-09-24_235747_cvqvza.png",
    liveUrl: "https://mechanical-portfolio-xi.vercel.app/",
    githubUrl: undefined,
    screenType: "web",
  },
  {
    id: "hotel-himalayan",
    title: "Hotel Himalayan",
    type: "Hospitality & Retreat Showcase",
    category: "Web Applications",
    year: "2026",
    tagline: "Scenic hilltop retreat and resort discovery platform in Pelling, West Sikkim",
    description:
      "A scenic hospitality and booking portal created for Hotel Himalayan in Pelling, West Sikkim. Features high-definition room showcases, panoramic mountain views, local sightseeing itineraries, and direct guest reservation inquiry flows.",
    highlights: [
      "Room Catalog & Amenities: Visual suites detailing room specifications, mountain views, and tariff rates",
      "Direct Reservation Routing: Seamless inquiry system connecting prospective travelers directly with front desk",
      "Curated Sikkim Travel Guides: Regional itineraries, monastery tours, and photography hotspots",
      "Smooth Mobile Booking Experience: Fast, touch-friendly UI optimized for travelers on mobile devices",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image:
      "https://res.cloudinary.com/dk6m1qejk/image/upload/v1795292984/Screenshot_2026-11-22_015810_ee0hjs.png",
    liveUrl: "https://hotel-himalayan.vercel.app/",
    githubUrl: undefined,
    screenType: "web",
  },
  {
    id: "pranaya-pradhan",
    title: "Designer Personal Portfolio",
    type: "Design Showcase Portfolio",
    category: "Web Applications",
    year: "2026",
    tagline: "Personal portfolio for designer Pranaya Pradhan showcasing spatial UI and brand craft",
    description:
      "A bespoke personal portfolio crafted for designer Pranaya Pradhan, featuring high-resolution design case studies, interactive UI prototypes, and typography-first visual storytelling.",
    highlights: [
      "Editorial Portfolio Showcase: Curated brand identity, product design, and mobile UI case studies",
      "Fluid Interaction Design: High-performance animations and zero-layout-shift image galleries",
      "Mobile-Responsive Layout: Clean touch-friendly navigation across all viewport sizes",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image:
      "https://res.cloudinary.com/dk6m1qejk/image/upload/v1795297734/Screenshot_2026-11-22_031732_vixvyi.png",
    liveUrl: "https://pranay-portfolio-ashy-nine.vercel.app/",
    githubUrl: undefined,
    screenType: "web",
  },
];
