import { site } from "@/lib/site";

const highlights = [
  "Direct-to-wall UV printing",
  "No seams or peeling",
  "Prints on any surface",
  "Done in hours, not days",
] as const;

export function TrustRow() {
  return (
    <section className="border-y-2 border-mist/60 bg-white py-7">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-muted sm:text-left">
            On-site in the Puget Sound
          </p>
          <ul className="flex flex-wrap justify-center gap-2 sm:justify-end">
            {highlights.map((label) => (
              <li key={label}>
                <span className="inline-block rounded-md border-2 border-mist/80 bg-cream px-3.5 py-1.5 text-[13px] font-semibold text-ink-muted shadow-[2px_2px_0_0_rgba(26,11,46,0.05)] transition hover:border-accent/35">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-center text-[12px] text-muted sm:text-left">
          {site.serviceAreas.join(" · ")}
        </p>
      </div>
    </section>
  );
}
