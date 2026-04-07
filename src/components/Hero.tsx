import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Primary hero art — user-supplied OpenAI CDN asset. If this URL ever 403s,
 * download the file and serve from /public (e.g. /hero-primary.jpg) instead.
 */
const heroPrimary =
  "https://images.openai.com/static-rsc-4/JtKOFceUvd2jAbFr8CQwvqWLvpIeB54bNLJX1EiVowXZFk38Q5ipo1rP0B4-4uWrpWK_MCZWH1ULUWYoVf7VsF6lI1H5uVB3PHYPTPJq3bWmC4KK1SaAdJq5Kvju1MyoyTjNju3ZOTQRE2HERoU6lUt_UgGZye7h2kGvuUldzGc?purpose=inline";

/** Secondary paste-up — user-supplied OpenAI CDN asset (same expiry caveat as heroPrimary). */
const heroAccent =
  "https://images.openai.com/static-rsc-4/o3BQ6VhEB8Hg_czRdacFQyvqKla7y0rdQbSE0Icd5-6SroOAFLno9ngYYSNSjQeGDJ0CNnzPfuWVUdTDnl2R3hyL3tjUU3-sg5qinKKCJeC0_N38iXY8GcetUuDd0rkhahs5e4IuyeieRDaRV7MHBLa8OWnIjtPoa6pA2MzGM9D7vJFDXwWTItUm58yiNdE7?purpose=fullsize";

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(100vh,56rem)] overflow-hidden bg-deep lg:min-h-[min(100vh,44rem)]">
      {/* Retro grid + corner flare */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(90deg, var(--cloud) 1px, transparent 1px), linear-gradient(var(--cloud) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-accent-2/20 blur-3xl"
        aria-hidden
      />

      <div className="grid min-h-[inherit] lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        {/* Copy */}
        <div className="relative z-10 order-2 flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-20 lg:order-1 lg:px-12 xl:px-20">
          <div className="absolute left-5 top-24 bottom-24 hidden w-1 bg-gradient-to-b from-accent via-accent-2/80 to-transparent sm:left-8 lg:block xl:left-12" aria-hidden />

          <p className="reveal reveal-delay-1 eyebrow text-accent-soft lg:pl-4">
            Seattle · UV · Vertical rig
          </p>

          <h1 className="reveal reveal-delay-2 mt-6 max-w-xl text-balance font-display text-[1.85rem] leading-[1.05] text-cloud sm:text-5xl sm:leading-[0.98] lg:mt-8 lg:pl-4 lg:text-[3.35rem]">
            <span className="block text-accent-2">Room-scale jobs.</span>
            <span className="mt-1 block">Your files on the substrate.</span>
            <span className="mt-2 block text-[0.92em] text-accent-soft">No vinyl roll-up.</span>
          </h1>

          <ul className="reveal reveal-delay-3 mt-8 max-w-md space-y-2.5 text-sm font-semibold leading-snug text-cloud/90 sm:text-base lg:pl-4">
            <li className="flex gap-3">
              <span className="mt-0.5 font-display text-accent-2" aria-hidden>
                →
              </span>
              <span>
                Print-ready art gets checked <strong className="text-cloud">before</strong> we price—dpi, seams,
                and what your wall can hold.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 font-display text-accent-2" aria-hidden>
                →
              </span>
              <span>Vertical pass, cured ink—built for workplaces, retail, lobbies, and long runs of wall.</span>
            </li>
          </ul>

          <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-3 lg:pl-4">
            <Link
              href="/contact"
              className="retro-btn-accent inline-flex min-h-11 items-center justify-center px-7 text-sm"
            >
              Book a site visit
            </Link>
            <Link
              href="#work"
              className="retro-btn-outline-light inline-flex min-h-11 items-center justify-center px-7 text-sm backdrop-blur-sm"
            >
              View work
            </Link>
          </div>

          <dl className="reveal reveal-delay-4 mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-cloud/20 pt-9 text-left sm:gap-8 lg:pl-4">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-soft/90">Reply</dt>
              <dd className="mt-1 text-sm font-bold text-cloud">1 biz day</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-soft/90">Range</dt>
              <dd className="mt-1 text-sm font-bold text-cloud">Seattle + East</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-soft/90">Phone</dt>
              <dd className="mt-1 text-sm font-bold text-cloud">
                <a
                  href={site.phoneHref}
                  className="underline decoration-cloud/35 underline-offset-4 hover:decoration-accent-soft"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Collage */}
        <div className="group/hero-visual relative order-1 flex min-h-[320px] items-stretch sm:min-h-[380px] lg:order-2 lg:min-h-full">
          <div className="relative w-full pb-10 pt-6 sm:pb-14 sm:pt-8 lg:py-10">
            <div
              className="relative mx-auto h-[min(52vh,420px)] w-[min(100%,520px)] sm:h-[min(54vh,480px)] lg:mx-0 lg:mr-6 lg:ml-auto lg:h-[calc(100%-3rem)] lg:max-h-[min(88vh,620px)] lg:w-[92%]"
              aria-hidden
            >
              <div className="absolute inset-0 rounded-xl border-2 border-cloud/25 bg-deep-elevated shadow-[12px_12px_0_0_rgba(255,45,122,0.22)] lg:rounded-2xl">
                <Image
                  src={heroPrimary}
                  alt="Seattle Wall Co. — featured wall printing photograph"
                  fill
                  priority
                  className="hero-ken-burns rounded-[10px] object-cover object-center lg:rounded-[14px]"
                  sizes="(min-width: 1024px) 42vw, 90vw"
                />
              </div>
            </div>

            <div className="hero-paste-up absolute bottom-6 left-4 z-10 w-[min(52%,240px)] overflow-hidden rounded-lg border-2 border-ink bg-cloud shadow-[6px_6px_0_0_var(--accent-2)] sm:bottom-10 sm:left-8 sm:w-[min(48%,280px)] lg:bottom-16 lg:left-[8%] lg:w-[min(44%,300px)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={heroAccent}
                  alt="Seattle Wall Co. — secondary wall printing photograph"
                  fill
                  className="object-cover object-center"
                  sizes="300px"
                />
              </div>
              <p className="border-t-2 border-ink/10 bg-cloud px-2 py-1.5 text-[9px] font-bold uppercase tracking-wider text-ink/80">
                Secondary ref · not a client install
              </p>
            </div>

            <p className="absolute right-4 top-4 z-10 hidden max-w-[11rem] rounded-md border-2 border-accent/40 bg-deep/90 px-2 py-1 text-right text-[9px] font-bold uppercase leading-tight tracking-wide text-accent-soft shadow-[3px_3px_0_0_rgba(0,212,184,0.35)] sm:block lg:right-8">
              UV direct
              <br />
              to wall
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
