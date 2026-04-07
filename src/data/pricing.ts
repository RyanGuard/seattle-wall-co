/**
 * Single source of truth for public pricing bands. Adjust here when your
 * real rates change — the pricing section and contact form budget options stay in sync.
 */
export type PricingTier = {
  name: string;
  range: string;
  detail: string;
  featured: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Half-day / quick scope",
    range: "From ~$500",
    detail:
      "Tight, print-ready work we can finish in a short visit—small graphics, touch-ups, or a modest panel when access is simple and prep is minimal. Travel and site realities still apply; we'll say no if the scope isn't a fit.",
    featured: false,
  },
  {
    name: "Focused accent",
    range: "$2.5k – $6.5k",
    detail:
      "One hero wall with print-ready art—think roughly **10–18 ft × 8–10 ft** (~80–180 sq ft). Many jobs in this bucket land near **~$18–$25/sq ft** of graphic on straightforward drywall before lifts or heavy design.",
    featured: false,
  },
  {
    name: "Signature program",
    range: "$8k – $22k",
    detail:
      "Multi-panel stories, color-managed proofs, lift or after-hours access. Typical for HQ refreshes and flagship retail.",
    featured: true,
  },
  {
    name: "Campus + rollout",
    range: "Custom",
    detail:
      "Phased installs, facility documentation, and optional retainers as you add sites.",
    featured: false,
  },
];

export const pricingDrivers: string[] = [
  "Mobilization vs. time on wall (tiny jobs can still mean a truck roll)",
  "Wall height and lift requirements",
  "Surface prep or priming",
  "Design creation vs. print-ready files",
  "After-hours or weekend access",
  "Rush timelines",
  "Travel outside core Puget Sound service area",
];

/** Budget `<select>` options on /contact — keep labels sensible vs pricingTiers. */
export type ContactBudgetOption = { value: string; label: string; disabled?: boolean };

export const contactBudgetOptions: ContactBudgetOption[] = [
  { value: "", label: "Select a range", disabled: true },
  { value: "Under $1k", label: "Under $1k (small / quick scope)" },
  { value: "$1k – $3k", label: "$1k – $3k" },
  { value: "$3k – $8k", label: "$3k – $8k (typical single accent wall)" },
  { value: "$8k – $22k", label: "$8k – $22k" },
  { value: "$22k+", label: "$22k+" },
  { value: "Not sure yet", label: "Not sure yet" },
];

export type EstimateSurface = "smooth" | "moderate" | "rough";
export type EstimateDesign = "none" | "light" | "heavy";

export type EstimateInputs = {
  widthFt: number;
  heightFt: number;
  surface: EstimateSurface;
  lift: boolean;
  designHelp: EstimateDesign;
  rush: boolean;
  /** Tight half-day style scope — caps the *high* end when graphic area is modest. */
  halfDayScope: boolean;
};

const SURFACE_MULT: Record<EstimateSurface, number> = {
  smooth: 1,
  moderate: 1.12,
  rough: 1.35,
};

const DESIGN_ADD: Record<EstimateDesign, [number, number]> = {
  none: [0, 0],
  light: [800, 2200],
  heavy: [3200, 8500],
};

const LIFT_ADD: [number, number] = [1400, 3600];

/**
 * Typical installed planning band per sq ft of **graphic area** (print-ready art, cooperative drywall).
 * Estimator uses this before surface / design / lift / rush multipliers.
 */
export const PLANNING_RATE_PER_SQ_FT = { min: 18, max: 25 } as const;

const RATE_MIN = PLANNING_RATE_PER_SQ_FT.min;
const RATE_MAX = PLANNING_RATE_PER_SQ_FT.max;
const MIN_WALL_SQFT = 12;
/** Minimum illustrative total—reflects willingness to take tight two-hour scopes; not a universal floor on every job type. */
const FLOOR_MIN = 500;
/** When half-day is checked and wall area is small, keep the band from implying a full-day install. */
const HALF_DAY_MAX_SQFT = 90;
const HALF_DAY_CAP_HIGH = 2800;

/**
 * Returns a rough USD range for the estimator card. Not a binding quote.
 */
export function computeEstimate(input: EstimateInputs): { low: number; high: number } {
  const rawSqft = input.widthFt * input.heightFt;
  const sqft = Number.isFinite(rawSqft) && rawSqft > 0 ? Math.max(MIN_WALL_SQFT, rawSqft) : MIN_WALL_SQFT;
  const sm = SURFACE_MULT[input.surface];
  let low = sqft * RATE_MIN * sm;
  let high = sqft * RATE_MAX * sm;
  const [dLo, dHi] = DESIGN_ADD[input.designHelp];
  low += dLo;
  high += dHi;
  if (input.lift) {
    low += LIFT_ADD[0];
    high += LIFT_ADD[1];
  }
  if (input.rush) {
    low *= 1.12;
    high *= 1.18;
  }
  low = Math.max(low, FLOOR_MIN);
  high = Math.max(high, low * 1.22);

  if (input.halfDayScope && sqft <= HALF_DAY_MAX_SQFT && !input.lift) {
    high = Math.min(high, HALF_DAY_CAP_HIGH);
    if (high < low) high = Math.round(low * 1.12 / 250) * 250;
  }

  const round = (n: number) => Math.round(n / 250) * 250;
  return { low: round(low), high: round(high) };
}

export function formatUsdRange(low: number, high: number): string {
  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return `${fmt(low)} – ${fmt(high)}`;
}

export function formatPlanningRatePerSqFt(): string {
  return `$${PLANNING_RATE_PER_SQ_FT.min}–${PLANNING_RATE_PER_SQ_FT.max}/sq ft`;
}
