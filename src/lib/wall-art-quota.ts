import { cookies } from "next/headers";

export const WALL_ART_COOKIE_NAME = "swc_wall_art_ideas";

const WINDOW_MS = 86_400_000; // 24 hours

export function getWallArtDailyLimit(): number {
  const n = Number(process.env.WALL_ART_DAILY_LIMIT ?? "6");
  if (!Number.isFinite(n) || n < 1) return 6;
  return Math.min(50, Math.floor(n));
}

type QuotaPayload = { c: number; e: number };

export type WallArtQuotaPublic = {
  used: number;
  limit: number;
  /** ISO timestamp when the window resets (approximate, from cookie). */
  resetsAtIso: string;
};

function parsePayload(raw: string | undefined, now: number): QuotaPayload {
  if (!raw) return { c: 0, e: now + WINDOW_MS };
  try {
    const o = JSON.parse(raw) as QuotaPayload;
    if (typeof o.c !== "number" || typeof o.e !== "number") throw new Error("invalid");
    if (now > o.e) return { c: 0, e: now + WINDOW_MS };
    return { c: o.c, e: o.e };
  } catch {
    return { c: 0, e: now + WINDOW_MS };
  }
}

export async function getWallArtQuotaPublic(): Promise<WallArtQuotaPublic> {
  const limit = getWallArtDailyLimit();
  const jar = await cookies();
  const now = Date.now();
  const { c, e } = parsePayload(jar.get(WALL_ART_COOKIE_NAME)?.value, now);
  return {
    used: Math.min(c, limit),
    limit,
    resetsAtIso: new Date(e).toISOString(),
  };
}

export async function assertWallArtQuotaAvailable(): Promise<
  { ok: true; used: number; limit: number } | { ok: false; message: string }
> {
  const limit = getWallArtDailyLimit();
  const jar = await cookies();
  const now = Date.now();
  const { c, e } = parsePayload(jar.get(WALL_ART_COOKIE_NAME)?.value, now);
  const used = Math.min(c, limit);
  if (used >= limit) {
    const when = new Date(e).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
    return {
      ok: false,
      message: `You've used today's ${limit} free idea${limit === 1 ? "" : "s"}. Try again after ${when}, or contact us and we'll help with artwork.`,
    };
  }
  return { ok: true, used, limit };
}

export async function recordWallArtGeneration(): Promise<WallArtQuotaPublic> {
  const limit = getWallArtDailyLimit();
  const jar = await cookies();
  const now = Date.now();
  const { c, e } = parsePayload(jar.get(WALL_ART_COOKIE_NAME)?.value, now);
  const nextCount = c + 1;
  const resetAt = c === 0 || now > e ? now + WINDOW_MS : e;

  jar.set(WALL_ART_COOKIE_NAME, JSON.stringify({ c: nextCount, e: resetAt }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: Math.max(300, Math.ceil((resetAt - now) / 1000)),
  });

  return {
    used: Math.min(nextCount, limit),
    limit,
    resetsAtIso: new Date(resetAt).toISOString(),
  };
}
