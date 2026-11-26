import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hrushikesh Anand Sarangi | Systems & Full-Stack Engineering",
  description:
    "I build production applications from scratch, and make existing systems measurably faster. Slashed container images from 2.19 GB to 814 kB and held routing to 270ns.",
  keywords: [
    "Systems Engineer",
    "Full-Stack Developer",
    "Rust",
    "Next.js",
    "Performance Optimization",
    "LLVM",
    "Pingora",
    "Axum",
    "whisper.cpp",
    "Hrushikesh Anand Sarangi",
  ],
  authors: [{ name: "Hrushikesh Anand Sarangi" }],
  openGraph: {
    title: "Hrushikesh Anand Sarangi — Build & Accelerate Production Software",
    description:
      "Full-stack and systems engineering. Building production software in days, and bisecting compiler passes, latency bottlenecks, and container bloat.",
    type: "website",
    url: "https://hrushi.is-a.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${caveat.variable} h-full antialiased`}
      style={{ backgroundColor: "#F4F6F9", color: "#0F1F38" }}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ backgroundColor: "#F4F6F9", color: "#0F1F38" }}
      >
        {children}
      </body>
    </html>
  );
}
