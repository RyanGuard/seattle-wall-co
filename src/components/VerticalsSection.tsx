import Link from "next/link";

const verticals = [
  {
    icon: "🏋️",
    title: "Gyms & fitness studios",
    body: "Motivational graphics, brand identity, and photo-worthy workout zones that members share on social.",
  },
  {
    icon: "🍽️",
    title: "Restaurants & cafes",
    body: "Feature walls that set the vibe and get shared on Instagram — printed directly on brick, concrete, or drywall.",
  },
  {
    icon: "🏢",
    title: "Offices & coworking",
    body: "Brand storytelling, wayfinding, and culture walls that impress clients and energize teams.",
  },
  {
    icon: "🛍️",
    title: "Retail & pop-ups",
    body: "Immersive brand rooms and seasonal graphics installed in hours — swap campaigns without repainting.",
  },
  {
    icon: "🏙️",
    title: "Real estate lobbies",
    body: "Signature lobby art that elevates perceived building value and makes a statement from day one.",
  },
  {
    icon: "🎓",
    title: "Schools & universities",
    body: "Spirit walls, donor recognition, and campus wayfinding at scale — durable enough for high-traffic hallways.",
  },
];

export function VerticalsSection() {
  return (
    <section id="verticals" className="scroll-mt-28 bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Who we work with</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl">
          Wall printing for spaces that need to make an impression
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted">
          If your space has walls and a brand, we can turn one into the other. These are the kinds of
          businesses we work with most.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-mist/90 bg-gradient-to-br from-cream/50 to-white p-7 shadow-[0_1px_3px_rgba(10,12,15,0.04)] transition hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_40px_-24px_rgba(10,12,15,0.2)]"
            >
              <span className="text-2xl" aria-hidden>{v.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-cloud transition hover:bg-accent hover:text-ink"
          >
            Tell us about your space
          </Link>
        </div>
      </div>
    </section>
  );
}
