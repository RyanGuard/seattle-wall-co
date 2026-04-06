import Link from "next/link";

const steps = [
  {
    num: "1",
    title: "Setup",
    body: "A rail system mounts to or near the wall — setup takes under an hour, no permanent fixtures.",
  },
  {
    num: "2",
    title: "Upload",
    body: "Your artwork is loaded into the print controller. We handle file prep, scaling, and color management.",
  },
  {
    num: "3",
    title: "Print",
    body: "The printer moves in precise vertical passes. UV-curable ink bonds to the surface and cures instantly — no drying time.",
  },
  {
    num: "4",
    title: "Done",
    body: "Rails come down, the wall is ready immediately. No lamination, no wait, no lingering fumes.",
  },
];

const stats = [
  { label: "Surfaces", value: "Brick, concrete, drywall, glass" },
  { label: "Ink", value: "UV-cured — instant dry, rated 7–10+ yrs" },
  { label: "Detail", value: "Photo-realistic gradients & color" },
  { label: "Speed", value: "Most walls finished in hours" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-cream px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl">
          A robot prints directly on your wall — here's what that looks like
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted">
          No vinyl sheets, no wallpaper paste, no hand-painting. A rail-mounted inkjet moves across
          your wall and lays down UV-cured ink that bonds permanently to the surface.
        </p>

        {/* Video embed */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-mist/80 bg-ink shadow-[0_20px_50px_-28px_rgba(10,12,15,0.35)]">
          <iframe
            title="Vertical wall printer in action"
            className="aspect-video w-full border-0"
            src="https://www.youtube.com/embed/dRqzx7fawRE?rel=0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* 4-step process */}
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.title}
              className="rounded-2xl border border-mist/90 bg-gradient-to-br from-white/80 to-white p-7 shadow-[0_1px_3px_rgba(10,12,15,0.04)] transition hover:border-accent/25"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-mist bg-white font-display text-lg font-semibold text-accent shadow-sm"
                aria-hidden
              >
                {step.num}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        {/* Key stats */}
        <div className="mt-10 rounded-2xl border border-mist/90 bg-white p-7 shadow-sm sm:p-9">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-relaxed text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-cloud transition hover:bg-accent hover:text-ink"
          >
            See if your wall qualifies
          </Link>
        </div>
      </div>
    </section>
  );
}
