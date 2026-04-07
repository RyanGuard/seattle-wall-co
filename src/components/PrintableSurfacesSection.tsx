import Image from "next/image";

const SURFACE_IMG = "/images/print-surfaces-grid.png";

export function PrintableSurfacesSection() {
  return (
    <section id="surfaces" className="scroll-mt-28 border-y-2 border-mist/50 bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">What we print on</p>
        <h2 className="mt-6 max-w-2xl font-display text-3xl tracking-tight text-ink text-balance sm:text-4xl">
          Substrates from brick to glass—if it’s in spec, we’ll tell you upfront
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted">
          Texture, coating, and moisture still rule every job. This grid is the shorthand; your wall gets a
          real compatibility check before we lock pricing.
        </p>

        <figure className="mx-auto mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border-2 border-ink/10 bg-cream shadow-[8px_8px_0_0_rgba(0,212,184,0.12)]">
            <Image
              src={SURFACE_IMG}
              alt="Collage of printable surfaces including wood, brick, drywall, concrete, metal, glass, tile, and other labeled materials."
              width={698}
              height={565}
              className="h-auto w-full"
              sizes="(min-width: 896px) 56rem, 100vw"
              priority={false}
            />
          </div>
          <figcaption className="mt-4 text-center text-xs leading-relaxed text-muted">
            Reference graphic for common materials UV wall printing can bond to—confirm yours on a site visit
            or with photos.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
