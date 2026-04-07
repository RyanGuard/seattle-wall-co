import Link from "next/link";
import { formatPlanningRatePerSqFt, pricingDrivers, pricingTiers } from "@/data/pricing";
import { PricingCalculator } from "@/components/PricingCalculator";

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-28 bg-deep-elevated px-5 py-24 text-cloud sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-accent-soft">Pricing guide</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl tracking-tight text-balance sm:text-4xl">
          Ranges you can plan against—not a bait-and-switch
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-cloud/65">
          Every wall is different. These bands help you budget; your final quote locks after photos or a site
          visit confirms measurements, access, and finishes. As a planning anchor, a lot of interior work we
          scope lands around{" "}
          <strong className="font-medium text-cloud/80">{formatPlanningRatePerSqFt()}</strong> of graphic area
          when art is print-ready and the wall is cooperative—texture, lift, design time, and rush move that
          number. If you have a{" "}
          <strong className="font-medium text-cloud/80">small, honest scope</strong>—think a couple of hours on
          wall—we won&apos;t invent a faux minimum just to pad the ticket.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:items-stretch xl:grid-cols-4 xl:gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border-2 p-7 transition ${
                tier.featured
                  ? "border-accent/50 bg-white/[0.07] pt-9 shadow-[6px_6px_0_0_rgba(255,45,122,0.35)] ring-1 ring-accent-2/25 lg:-translate-y-1 lg:py-10 lg:pt-12"
                  : "border-white/15 bg-white/[0.03] hover:border-accent-2/30"
              }`}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md border-2 border-ink bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink shadow-[3px_3px_0_0_var(--ink)]">
                  Most common
                </span>
              ) : null}
              <h3 className="font-display text-xl text-cloud">{tier.name}</h3>
              <p className="mt-4 font-display text-3xl tracking-tight text-accent-soft md:text-[2rem]">
                {tier.range}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cloud/70">{tier.detail}</p>
            </div>
          ))}
        </div>

        <PricingCalculator />

        <div className="mt-14 rounded-2xl border-2 border-white/15 bg-slate-mid/40 p-7 shadow-[6px_6px_0_0_rgba(0,212,184,0.12)] sm:p-9">
          <h3 className="font-display text-lg text-cloud">What moves the number</h3>
          <ul className="mt-5 grid gap-3 text-sm text-cloud/75 sm:grid-cols-2">
            {pricingDrivers.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-relaxed text-cloud/50">
            Ranges are estimates for planning—not a binding offer. Contracts and signed proposals govern scope.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="retro-btn-accent inline-flex min-h-11 items-center justify-center px-7 text-sm"
          >
            Tell us about your wall
          </Link>
        </div>
      </div>
    </section>
  );
}
