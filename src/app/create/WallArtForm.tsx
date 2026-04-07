"use client";

import { generateWallArtImage, type WallArtState } from "@/app/actions/wall-art";
import { ThemeBoard } from "@/app/create/ThemeBoard";
import { wallArtLogoStarters } from "@/data/wall-art-logo-starters";
import { wallArtStarters } from "@/data/wall-art-starters";
import { wallArtThemes } from "@/data/wall-art-themes";
import type { WallArtQuotaPublic } from "@/lib/wall-art-quota";
import { useEffect, useState } from "react";
import { useActionState } from "react";

const initial: WallArtState = { status: "idle" };

const sizes = [
  { value: "1792x1024", label: "Wide wall (landscape)" },
  { value: "1024x1792", label: "Tall wall (portrait)" },
  { value: "1024x1024", label: "Square" },
] as const;

type Props = { initialQuota: WallArtQuotaPublic };

export function WallArtForm({ initialQuota }: Props) {
  const [state, formAction, pending] = useActionState(generateWallArtImage, initial);
  const [prompt, setPrompt] = useState("");
  const [styleHint, setStyleHint] = useState("");
  const [activeThemeId, setActiveThemeId] = useState<string | null>(null);
  const [quotaHint, setQuotaHint] = useState(initialQuota);

  /* Sync displayed quota when a generation succeeds (server is source of truth). */
  useEffect(() => {
    if (state.status === "success") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- mirror server quota after action resolves; no external store
      setQuotaHint(state.quota);
    }
  }, [state]);

  const remaining = Math.max(0, quotaHint.limit - quotaHint.used);

  function applyTheme(t: (typeof wallArtThemes)[number]) {
    setPrompt(t.prompt);
    setStyleHint(t.styleHint);
    setActiveThemeId(t.id);
  }

  return (
    <div className="space-y-10">
      <p className="rounded-lg border-2 border-mist/90 bg-white px-4 py-3 text-sm text-muted shadow-[4px_4px_0_0_rgba(26,11,46,0.05)]">
        <span className="font-semibold text-ink">Today&apos;s ideas: </span>
        {remaining > 0 ? (
          <>
            <strong className="text-ink">{remaining}</strong> of {quotaHint.limit} left on this device—enough
            to explore, not enough to run up a huge bill.
          </>
        ) : (
          <>
            You&apos;ve used all {quotaHint.limit} for today. Come back tomorrow or{" "}
            <a href="/contact" className="font-semibold text-accent underline-offset-2 hover:underline">
              send us a note
            </a>
            .
          </>
        )}
      </p>

      <ThemeBoard themes={wallArtThemes} onPick={applyTheme} activeId={activeThemeId} />

      <div className="rounded-2xl border-2 border-accent/35 bg-white p-5 shadow-[6px_6px_0_0_rgba(255,45,122,0.12)] sm:p-6">
        <p className="font-display text-lg text-ink">Company logos &amp; brand walls</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Logo walls are a huge use case. This tool won&apos;t faithfully recreate <em>your</em> trademark—
          for production you&apos;ll bring <strong className="text-ink">official vector files</strong> (EPS,
          AI, PDF from brand guidelines). Use the ideas below to explore{" "}
          <strong className="text-ink">patterns, washes, and backdrops</strong> that complement your mark—or
          pick <strong className="text-ink">Logo-friendly backdrop</strong> on the theme board.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          <strong className="text-ink">Don&apos;t</strong> ask the AI to invent Nike, Disney, sports teams,
          etc. You must own the rights to anything that goes on the wall.
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">Quick logo-wall starters</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {wallArtLogoStarters.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setPrompt(s);
                setStyleHint("No fake logos—backdrop only unless user provides official assets");
                setActiveThemeId(null);
              }}
              className="max-w-full rounded-lg border-2 border-mist/80 bg-cream px-3 py-2 text-left text-xs font-semibold text-ink-muted shadow-[2px_2px_0_0_rgba(26,11,46,0.05)] transition hover:border-accent/45 hover:text-ink"
            >
              {s.length > 100 ? `${s.slice(0, 98)}…` : s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-ink">More open-ended prompts</p>
        <p className="mt-1 text-sm text-muted">Tap one—edit it to match your space.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {wallArtStarters.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setPrompt(s);
                setActiveThemeId(null);
              }}
              className="max-w-full rounded-md border-2 border-mist/80 bg-white px-3 py-1.5 text-left text-xs font-semibold text-ink-muted shadow-[2px_2px_0_0_rgba(26,11,46,0.05)] transition hover:border-accent/45 hover:text-ink"
            >
              {s.length > 72 ? `${s.slice(0, 70)}…` : s}
            </button>
          ))}
        </div>
      </div>

      <form action={formAction} className="space-y-6">
        <input type="text" name="_art_hp" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden />

        <div>
          <label htmlFor="wall-art-prompt" className="text-sm font-semibold text-ink">
            What should this wall feel like?
          </label>
          <textarea
            id="wall-art-prompt"
            name="prompt"
            required
            rows={5}
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
              setActiveThemeId(null);
            }}
            placeholder="Mood, colors, subject—e.g. calm forest tones for a breakout room, bold geometry for a retail accent…"
            className="mt-2 w-full rounded-lg border-2 border-mist/90 bg-white px-4 py-3 text-sm shadow-[3px_3px_0_0_rgba(26,11,46,0.05)] outline-none ring-accent/30 focus:ring-2"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="wall-art-size" className="text-sm font-semibold text-ink">
              Shape
            </label>
            <select
              id="wall-art-size"
              name="size"
              className="mt-2 w-full rounded-lg border-2 border-mist/90 bg-white px-4 py-3 text-sm shadow-[3px_3px_0_0_rgba(26,11,46,0.05)] outline-none ring-accent/30 focus:ring-2"
              defaultValue="1792x1024"
            >
              {sizes.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="wall-art-style" className="text-sm font-semibold text-ink">
              Extra hint <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="wall-art-style"
              name="styleHint"
              value={styleHint}
              onChange={(e) => setStyleHint(e.target.value)}
              placeholder="e.g. softer, less busy, no faces"
              className="mt-2 w-full rounded-lg border-2 border-mist/90 bg-white px-4 py-3 text-sm shadow-[3px_3px_0_0_rgba(26,11,46,0.05)] outline-none ring-accent/30 focus:ring-2"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={pending || remaining <= 0}
          className="retro-btn-dark inline-flex min-h-11 items-center justify-center px-8 text-sm disabled:cursor-not-allowed"
        >
          {pending ? "Sketching an idea…" : "Show me an idea"}
        </button>

        {state.status === "error" ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            {state.message}
          </p>
        ) : null}
      </form>

      {state.status === "success" ? (
        <div className="rounded-2xl border-2 border-mist/80 bg-cream-dark/50 p-6 shadow-[6px_6px_0_0_rgba(26,11,46,0.06)] sm:p-8">
          <p className="text-sm font-semibold text-ink">Something like this?</p>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            A conversation starter—not the final art. Share it with your team or attach it when you{" "}
            <a href="/contact" className="font-medium text-accent underline-offset-2 hover:underline">
              get in touch
            </a>
            ; we&apos;ll translate it into something that prints beautifully at full size.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border-2 border-mist/90 bg-white shadow-[5px_5px_0_0_rgba(26,11,46,0.07)]">
            {/* eslint-disable-next-line @next/next/no-img-element -- OpenAI image URLs are short-lived / external */}
            <img
              src={state.imageUrl}
              alt="AI-generated concept for your wall"
              className="h-auto w-full object-contain"
              width={1792}
              height={1024}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={state.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="retro-btn-ghost inline-flex min-h-10 items-center justify-center px-5 text-sm"
            >
              Open full size
            </a>
          </div>
          {state.revisedPrompt ? (
            <details className="mt-6 text-sm text-muted">
              <summary className="cursor-pointer font-medium text-ink">What it focused on</summary>
              <p className="mt-2 leading-relaxed">{state.revisedPrompt}</p>
            </details>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
