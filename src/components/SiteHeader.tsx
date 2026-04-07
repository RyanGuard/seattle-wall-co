import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { MobileNav } from "@/components/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink/10 bg-cream/90 backdrop-blur-xl backdrop-saturate-150">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2.5">
          <span className="font-display text-[1.08rem] tracking-tight text-ink transition group-hover:text-accent">
            {site.name}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted sm:text-[11px]">
            Seattle
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] font-medium text-ink-muted transition hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <MobileNav />
          <Link
            href="/contact"
            className="retro-btn-dark inline-flex min-h-10 items-center justify-center px-4 py-2.5 text-[13px] sm:px-5"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
