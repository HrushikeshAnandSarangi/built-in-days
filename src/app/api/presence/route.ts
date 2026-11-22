import { NextResponse } from "next/server";

interface ActiveSession {
  id: string;
  location: string;
  lastSeen: number;
}

// In-memory active presence tracker
const activeSessions = new Map<string, ActiveSession>();

// Default bot from United States as requested by user
const US_BOT = {
  id: "bot-us",
  label: "Crawler Bot",
  location: "Visiting from United States",
  isBot: true,
  eyes: "dot" as const,
  mouth: "flat" as const,
};

function pruneStaleSessions() {
  const now = Date.now();
  for (const [id, session] of activeSessions.entries()) {
    // Prune if inactive for more than 15 seconds
    if (now - session.lastSeen > 15000) {
      activeSessions.delete(id);
    }
  }
}

export async function GET(request: Request) {
  pruneStaleSessions();

  const realVisitors = Array.from(activeSessions.values()).map((s, idx) => ({
    id: s.id,
    label: "Person",
    location: s.location || "Detecting...",
    isCurrentUser: false,
    eyes: (["dash", "happy", "sleepy", "wink", "dot"] as const)[idx % 5],
    mouth: (["smile", "flat", "curve", "open"] as const)[idx % 4],
  }));

  const allVisitors = [
    // Real visitors
    ...realVisitors,
    // Always present US bot
    US_BOT,
  ];

  return NextResponse.json({
    viewerCount: allVisitors.length,
    visitors: allVisitors,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientId, location } = body;

    if (clientId) {
      activeSessions.set(clientId, {
        id: clientId,
        location: location || "India",
        lastSeen: Date.now(),
      });
    }

    pruneStaleSessions();

    const realVisitors = Array.from(activeSessions.values()).map((s, idx) => ({
      id: s.id,
      label: s.id === clientId ? "Person" : "Person",
      location: s.id === clientId ? `You're visiting from ${s.location}` : `Visiting from ${s.location}`,
      isCurrentUser: s.id === clientId,
      eyes: s.id === clientId ? ("dash" as const) : (["happy", "sleepy", "wink", "dot"] as const)[idx % 4],
      mouth: s.id === clientId ? ("smile" as const) : (["smile", "flat", "curve"] as const)[idx % 3],
    }));

    // Ensure the current user is at the front, followed by other visitors and the US bot
    const currentVisitor = realVisitors.find((v) => v.isCurrentUser);
    const otherVisitors = realVisitors.filter((v) => !v.isCurrentUser);

    const allVisitors = [
      ...(currentVisitor ? [currentVisitor] : []),
      US_BOT,
      ...otherVisitors,
    ];

    return NextResponse.json({
      viewerCount: allVisitors.length,
      visitors: allVisitors,
    });
  } catch {
    return NextResponse.json({
      viewerCount: 2,
      visitors: [US_BOT],
    });
  }
}
