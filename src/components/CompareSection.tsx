const rows = [
  {
    dimension: "Speed to finished wall",
    us: "Robotic printer + UV-cured ink — most single walls finish in hours, not days or weeks.",
    vinyl: "Fast when design is simple; complex gradients can require multiple panels.",
    muralist: "Authentic craft; timeline scales with artist availability and complexity.",
    diy: "Depends on operator skill; mistakes are costly on large surfaces.",
  },
  {
    dimension: "Color fidelity & gradients",
    us: "Color-managed RIP; strong for brand gradients and photography at scale.",
    vinyl: "Excellent solids; some gradients show seams or lamination tradeoffs.",
    muralist: "Organic blending; may deviate slightly from Pantone-perfect matches.",
    diy: "Variable; often limited by file prep and onsite conditions.",
  },
  {
    dimension: "Max height & access",
    us: "Tall installs with planned lifts/scaffold; coordinated with building teams.",
    vinyl: "Similar access needs; panel seams increase with height.",
    muralist: "May require extended lifts for large façades.",
    diy: "Equipment limits frequently cap safe height.",
  },
  {
    dimension: "Design support",
    us: "Partners with your agency or builds print-ready art in-house.",
    vinyl: "Often print-only unless shop retains designers.",
    muralist: "Custom artwork is the core deliverable.",
    diy: "You source files and own outcomes.",
  },
  {
    dimension: "Durability aftercare",
    us: "UV-cured inks rated 7–10+ years indoors. Protective finishes specified to traffic; documented care guides.",
    vinyl: "Durable when specified correctly; edges can lift in dirty installs.",
    muralist: "Touch-up tied to artist schedule and travel.",
    diy: "Varies widely by ink/media; often minimal warranty.",
  },
  {
    dimension: "Seam visibility",
    us: "Zero seams — the printer covers the wall in continuous passes regardless of size.",
    vinyl: "Panel seams visible on large walls and solid colors; edges can lift over time.",
    muralist: "No seams — hand-painted is inherently seamless.",
    diy: "Seams or overlap marks common with panel-based approaches.",
  },
  {
    dimension: "Textured & rough surfaces",
    us: "Prints directly on brick, CMU, concrete, stucco — surfaces that reject vinyl.",
    vinyl: "Requires smooth surfaces; textured walls cause bubbling and poor adhesion.",
    muralist: "Artists can paint on any surface, though speed varies with texture.",
    diy: "Very difficult on rough surfaces without professional experience.",
  },
];

export function CompareSection() {
  return (
    <section id="compare" className="scroll-mt-28 bg-cream px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Why us</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl tracking-tight text-ink text-balance sm:text-4xl">
          How wall printing stacks up for brand-led spaces
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted">
          Wall printing is one tool among many—here’s how we compare on the details that matter to
          facilities and brand teams.
        </p>

        <div className="mt-14 hidden overflow-hidden rounded-2xl border-2 border-mist/80 bg-white shadow-[6px_6px_0_0_rgba(0,212,184,0.12)] lg:block">
          <table className="min-w-full border-collapse text-left text-[13px] leading-snug">
            <thead>
              <tr className="bg-ink text-cloud">
                <th className="px-5 py-4 font-semibold">Dimension</th>
                <th className="bg-accent/25 px-5 py-4 font-semibold text-ink">Seattle Wall Co.</th>
                <th className="px-5 py-4 font-medium text-cloud/80">Vinyl install</th>
                <th className="px-5 py-4 font-medium text-cloud/80">Muralist</th>
                <th className="px-5 py-4 font-medium text-cloud/80">DIY / budget</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              {rows.map((row) => (
                <tr key={row.dimension} className="border-t border-mist/90 align-top text-ink-muted">
                  <th className="px-5 py-4 font-semibold text-ink">{row.dimension}</th>
                  <td className="bg-accent/[0.06] px-5 py-4 text-ink">{row.us}</td>
                  <td className="px-5 py-4">{row.vinyl}</td>
                  <td className="px-5 py-4">{row.muralist}</td>
                  <td className="px-5 py-4">{row.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 space-y-4 lg:hidden">
          {rows.map((row) => (
            <article
              key={row.dimension}
              className="rounded-2xl border-2 border-mist/80 bg-white p-6 shadow-[5px_5px_0_0_rgba(26,11,46,0.06)]"
            >
              <h3 className="font-display text-lg text-ink">{row.dimension}</h3>
              <dl className="mt-4 space-y-4 text-[13px]">
                <div className="rounded-xl bg-cream/80 p-4">
                  <dt className="font-semibold text-accent">Seattle Wall Co.</dt>
                  <dd className="mt-1.5 leading-relaxed text-muted">{row.us}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Vinyl install</dt>
                  <dd className="mt-1.5 text-muted">{row.vinyl}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Muralist</dt>
                  <dd className="mt-1.5 text-muted">{row.muralist}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">DIY / budget</dt>
                  <dd className="mt-1.5 text-muted">{row.diy}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
