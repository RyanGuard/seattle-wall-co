"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/data/gallery";

type Props = { items: GalleryItem[] };

export function GallerySection({ items }: Props) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="work" className="scroll-mt-28 border-y-2 border-mist/50 bg-gradient-to-b from-cream via-cream to-white/80 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:items-end lg:gap-14">
          <div>
            <p className="eyebrow">Example work</p>
            <h2 className="mt-5 font-display text-[1.65rem] leading-[1.08] tracking-tight text-ink text-balance sm:text-4xl sm:leading-[1.06] lg:text-[2.65rem]">
              <span className="text-accent">See what&apos;s possible</span>
              <span className="mt-1 block text-ink lg:mt-2">on your walls</span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-[1.05rem]">
              Real-world moods—lobbies, retail, stairwells, full-height exteriors—showing what direct-to-wall
              UV printing can look like when the file and surface are dialed in.
            </p>
          </div>
          <aside className="rounded-xl border-2 border-ink/10 bg-white p-5 shadow-[6px_6px_0_0_rgba(0,212,184,0.15)] sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Reference photos</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              These shots are <strong className="font-semibold text-ink">Unsplash stock</strong>, here to
              illustrate scale and finish—not Seattle Wall Co. installs yet. Swap in your Puget Sound jobs as
              you document them.
            </p>
            <p className="mt-4 rounded-lg border-2 border-dashed border-mist/90 bg-cream/80 px-3 py-2.5 text-xs font-semibold text-ink/80">
              Tap any tile → full-size preview
            </p>
          </aside>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const featured = index === 0;
            const imgSizes = featured
              ? "(min-width: 1024px) 62vw, (min-width: 640px) 100vw, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";
            return (
              <button
                key={item.id}
                type="button"
                aria-label={`Open full view: ${item.title}`}
                onClick={() => setActive(item)}
                style={{ animationDelay: `${index * 40}ms` }}
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-mist/80 bg-white text-left shadow-[5px_5px_0_0_rgba(26,11,46,0.07)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[8px_8px_0_0_rgba(255,45,122,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                  featured ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-cream-dark ${
                    featured ? "aspect-[4/3] sm:aspect-[16/9] lg:min-h-[280px] lg:aspect-auto lg:max-h-[360px]" : "aspect-[4/5]"
                  }`}
                >
                {item.secondarySrc ? (
                  <div className="absolute inset-0 grid grid-cols-2 gap-px bg-mist">
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt={item.sliceLabels?.primary ? `${item.title} — ${item.sliceLabels.primary}` : item.title}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                        sizes={
                          featured
                            ? "(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 50vw"
                            : "(min-width: 1024px) 17vw, (min-width: 640px) 25vw, 50vw"
                        }
                      />
                      {item.sliceLabels ? (
                        <span className="absolute bottom-2 left-2 rounded bg-ink/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-cloud">
                          {item.sliceLabels.primary}
                        </span>
                      ) : null}
                    </div>
                    <div className="relative">
                      <Image
                        src={item.secondarySrc}
                        alt={item.secondaryAlt ?? item.title}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                        sizes={
                          featured
                            ? "(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 50vw"
                            : "(min-width: 1024px) 17vw, (min-width: 640px) 25vw, 50vw"
                        }
                      />
                      {item.sliceLabels ? (
                        <span className="absolute bottom-2 right-2 rounded bg-ink/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-cloud">
                          {item.sliceLabels.secondary}
                        </span>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={`${item.title} — ${item.outcome}`}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    sizes={imgSizes}
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="absolute bottom-3 left-3 rounded-md border-2 border-cloud/30 bg-ink/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cloud shadow-[2px_2px_0_0_rgba(0,212,184,0.4)] backdrop-blur-sm">
                  {item.category}
                </span>
                <span className="pointer-events-none absolute right-3 top-3 rounded-md border-2 border-ink/20 bg-cloud/95 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-ink opacity-0 shadow-sm transition group-hover:opacity-100">
                  View
                </span>
              </div>
              <div className="flex flex-1 flex-col border-t-2 border-mist/40 p-5">
                <h3 className="font-display text-lg leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.outcome}</p>
                <p className="mt-3 text-[11px] font-medium text-muted/70">Photo · {item.photoCredit}</p>
              </div>
            </button>
            );
          })}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 rounded-lg border-2 border-cloud/30 bg-white/15 px-4 py-2 text-sm font-bold text-cloud shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition hover:bg-white/25"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto overflow-x-hidden rounded-2xl border-2 border-accent/30 bg-deep-elevated shadow-[10px_10px_0_0_rgba(255,45,122,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {active.secondarySrc ? (
              <div className="grid gap-1 bg-ink p-1 sm:grid-cols-2">
                <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:min-h-[220px]">
                  <Image src={active.src} alt={active.title} fill className="object-cover" />
                  {active.sliceLabels ? (
                    <span className="absolute bottom-3 left-3 rounded bg-ink/85 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-cloud">
                      {active.sliceLabels.primary}
                    </span>
                  ) : null}
                </div>
                <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:min-h-[220px]">
                  <Image
                    src={active.secondarySrc}
                    alt={active.secondaryAlt ?? active.title}
                    fill
                    className="object-cover"
                  />
                  {active.sliceLabels ? (
                    <span className="absolute bottom-3 right-3 rounded bg-ink/85 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-cloud">
                      {active.sliceLabels.secondary}
                    </span>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="relative aspect-[4/3] w-full bg-ink sm:aspect-video">
                <Image src={active.src} alt={active.title} fill className="object-contain" />
              </div>
            )}
            <div className="border-t border-white/10 p-6 text-cloud">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-soft">
                {active.category}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight">{active.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cloud/80">{active.outcome}</p>
              <p className="mt-4 text-[11px] text-cloud/55">Photo · {active.photoCredit}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
