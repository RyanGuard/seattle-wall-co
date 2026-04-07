const steps = [
  {
    title: "Discovery",
    body: "We review your wall, timeline, and creative direction—photos, plans, or an on-site walkthrough in Seattle or the Eastside.",
  },
  {
    title: "Design & approval",
    body: "Color-managed proofs, a substrate compatibility check to confirm your wall is print-ready, and a clear install plan so facilities and marketing stay aligned.",
  },
  {
    title: "Print day",
    body: "The vertical printer mounts on a rail system, moves in precise passes, and lays UV-cured ink that dries instantly. Most single-wall jobs finish in a few hours — no drying time, no fumes.",
  },
  {
    title: "Walkthrough & care",
    body: "Punch list, care notes, and optional maintenance schedule. UV-cured prints need zero cure time — the wall is ready to use immediately. We want it to look intentional on day 300, not just day one.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-28 bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Process</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl tracking-tight text-ink text-balance sm:text-4xl">
          From first email to final photo—with zero ambiguity
        </h2>
        <ol className="mt-16 grid gap-5 md:grid-cols-2 md:gap-6">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border-2 border-mist/80 bg-gradient-to-br from-cream/50 to-white p-7 shadow-[5px_5px_0_0_rgba(26,11,46,0.07)] transition hover:border-accent/35 md:pt-8"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-ink/10 bg-white font-display text-lg text-accent shadow-[3px_3px_0_0_rgba(0,212,184,0.35)]"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
