"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  computeEstimate,
  formatPlanningRatePerSqFt,
  formatUsdRange,
  type EstimateDesign,
  type EstimateSurface,
} from "@/data/pricing";

const surfaces: { id: EstimateSurface; label: string; hint: string }[] = [
  { id: "smooth", label: "Smooth / painted drywall", hint: "Typical office" },
  { id: "moderate", label: "Medium texture", hint: "Light prep" },
  { id: "rough", label: "Brick or heavy texture", hint: "More prep & ink" },
];

const designOpts: { id: EstimateDesign; label: string }[] = [
  { id: "none", label: "Print-ready files" },
  { id: "light", label: "Light design / cleanup" },
  { id: "heavy", label: "Full design support" },
];

export function PricingCalculator() {
  const [widthFt, setWidthFt] = useState(14);
  const [heightFt, setHeightFt] = useState(10);
  const [surface, setSurface] = useState<EstimateSurface>("smooth");
  const [lift, setLift] = useState(false);
  const [designHelp, setDesignHelp] = useState<EstimateDesign>("none");
  const [rush, setRush] = useState(false);
  const [halfDayScope, setHalfDayScope] = useState(false);

  const range = useMemo(
    () =>
      computeEstimate({
        widthFt,
        heightFt,
        surface,
        lift,
        designHelp,
        rush,
        halfDayScope,
      }),
    [widthFt, heightFt, surface, lift, designHelp, rush, halfDayScope],
  );

  const sqft = Math.max(0, widthFt * heightFt);

  return (
    <div
      id="estimator"
      className="mt-14 rounded-2xl border-2 border-white/15 bg-slate-mid/50 p-7 shadow-[6px_6px_0_0_rgba(0,212,184,0.12)] sm:p-9"
    >
      <p className="eyebrow text-accent-soft">Quick estimator</p>
      <h3 className="mt-5 font-display text-xl text-cloud sm:text-2xl">
        Rough budget from wall size
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cloud/65">
        Math starts near <strong className="font-medium text-cloud/85">{formatPlanningRatePerSqFt()}</strong>{" "}
        of graphic area (width × height), then surface, design, lift, and rush adjust it. Output is a{" "}
        <strong className="font-medium text-cloud/85">planning range only</strong>—we lock real numbers after
        photos or a walkthrough. Half-day scopes with a tight brief can still land in the hundreds—we
        won&apos;t force a big minimum on a small wall.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
        <div className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="calc-width" className="text-sm font-semibold text-cloud">
                Width (ft)
              </label>
              <input
                id="calc-width"
                type="number"
                inputMode="decimal"
                min={1}
                step={0.5}
                value={widthFt}
                onChange={(e) => setWidthFt(Number(e.target.value) || 0)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-deep/60 px-4 py-3 text-sm text-cloud outline-none ring-accent/30 placeholder:text-cloud/30 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="calc-height" className="text-sm font-semibold text-cloud">
                Height (ft)
              </label>
              <input
                id="calc-height"
                type="number"
                inputMode="decimal"
                min={1}
                step={0.5}
                value={heightFt}
                onChange={(e) => setHeightFt(Number(e.target.value) || 0)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-deep/60 px-4 py-3 text-sm text-cloud outline-none ring-accent/30 placeholder:text-cloud/30 focus:ring-2"
              />
            </div>
          </div>

          <fieldset>
            <legend className="text-sm font-semibold text-cloud">Surface</legend>
            <div className="mt-3 space-y-2">
              {surfaces.map((s) => (
                <label
                  key={s.id}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border-2 border-white/12 bg-deep/40 px-4 py-3 shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] transition hover:border-white/25 has-[:checked]:border-accent/45 has-[:checked]:bg-white/[0.06]"
                >
                  <input
                    type="radio"
                    name="calc-surface"
                    value={s.id}
                    checked={surface === s.id}
                    onChange={() => setSurface(s.id)}
                    className="mt-1 accent-accent"
                  />
                  <span>
                    <span className="block text-sm font-medium text-cloud">{s.label}</span>
                    <span className="text-xs text-cloud/55">{s.hint}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-cloud">Design</legend>
            <select
              value={designHelp}
              onChange={(e) => setDesignHelp(e.target.value as EstimateDesign)}
              className="w-full rounded-xl border border-white/15 bg-deep/60 px-4 py-3 text-sm text-cloud outline-none ring-accent/30 focus:ring-2"
              aria-label="Design support level"
            >
              {designOpts.map((o) => (
                <option key={o.id} value={o.id} className="bg-deep text-cloud">
                  {o.label}
                </option>
              ))}
            </select>
          </fieldset>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-cloud/90">
              <input
                type="checkbox"
                checked={halfDayScope}
                onChange={(e) => setHalfDayScope(e.target.checked)}
                className="size-4 rounded border-white/30 bg-deep accent-accent"
              />
              Half-day / tight scope
            </label>
            <label className="flex cursor-pointer items-center gap-3 text-sm text-cloud/90">
              <input
                type="checkbox"
                checked={lift}
                onChange={(e) => setLift(e.target.checked)}
                className="size-4 rounded border-white/30 bg-deep accent-accent"
              />
              Lift or tall access
            </label>
            <label className="flex cursor-pointer items-center gap-3 text-sm text-cloud/90">
              <input
                type="checkbox"
                checked={rush}
                onChange={(e) => setRush(e.target.checked)}
                className="size-4 rounded border-white/30 bg-deep accent-accent"
              />
              Rush timeline
            </label>
          </div>
        </div>

        <aside className="rounded-2xl border-2 border-accent/40 bg-white/[0.06] p-6 shadow-[5px_5px_0_0_rgba(255,45,122,0.25)] ring-1 ring-accent-2/20">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-soft">
            Ballpark range
          </p>
          <p className="mt-3 font-display text-2xl tracking-tight text-cloud sm:text-[1.75rem]">
            {formatUsdRange(range.low, range.high)}
          </p>
          <p className="mt-2 text-xs text-cloud/55">
            ~{Math.round(sqft).toLocaleString()} sq ft graphic area (preliminary)
          </p>
          <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-cloud/50">
            Add-ons like heavy prep, specialty coatings, or travel outside our core Puget Sound corridor
            move this band—tell us on{" "}
            <Link href="/contact" className="font-medium text-accent-soft underline-offset-2 hover:underline">
              the contact form
            </Link>
            .
          </p>
        </aside>
      </div>
    </div>
  );
}
