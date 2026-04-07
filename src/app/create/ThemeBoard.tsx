"use client";

import type { WallArtTheme } from "@/data/wall-art-themes";

type Props = {
  themes: WallArtTheme[];
  onPick: (theme: WallArtTheme) => void;
  activeId: string | null;
};

export function ThemeBoard({ themes, onPick, activeId }: Props) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink">Pick a vibe (theme board)</p>
      <p className="mt-1 text-sm text-muted">
        Each card sets a starting mood—you can still edit the words before generating.
      </p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((t) => {
          const active = activeId === t.id;
          return (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => onPick(t)}
                className={`flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 text-left transition ${
                  active
                    ? "border-accent bg-white shadow-[6px_6px_0_0_rgba(255,45,122,0.35)] ring-2 ring-accent/40"
                    : "border-mist/80 bg-white shadow-[4px_4px_0_0_rgba(26,11,46,0.06)] hover:border-accent/45"
                }`}
              >
                <div
                  className="h-14 w-full shrink-0 border-b-2 border-mist/50"
                  style={{ background: t.stripe }}
                  aria-hidden
                />
                <div className="flex gap-1.5 px-4 pt-3" aria-hidden>
                  {t.swatches.map((hex) => (
                    <span
                      key={hex}
                      className="size-5 rounded-full border-2 border-ink/15 shadow-inner"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  ))}
                </div>
                <div className="flex flex-1 flex-col p-4 pt-3">
                  <span className="font-display text-base text-ink">{t.title}</span>
                  <span className="mt-1 text-xs leading-relaxed text-muted">{t.blurb}</span>
                  <span className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-accent">
                    {active ? "Selected" : "Use this style"}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
