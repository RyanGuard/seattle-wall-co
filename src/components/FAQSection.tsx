import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-28 bg-cream px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Answers before we step onsite
        </h2>
        <p className="mt-4 text-muted">
          Straight talk on substrates, access, and schedules—so your facilities team sees us coming.
        </p>
        <div className="mt-12 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border-2 border-mist/80 bg-white px-5 py-4 shadow-[4px_4px_0_0_rgba(26,11,46,0.06)] open:pb-5"
            >
              <summary className="cursor-pointer list-none text-[15px] font-semibold text-ink outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span className="text-pretty">{item.question}</span>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-mist/80 text-sm font-bold text-accent shadow-[2px_2px_0_0_rgba(26,11,46,0.08)] transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
