import { WallArtForm } from "@/app/create/WallArtForm";
import { getWallArtQuotaPublic } from "@/lib/wall-art-quota";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wall art ideas",
  description: `Play with ideas for your next mural or feature wall. ${site.name} helps you imagine the space—we handle print-ready art and install in Seattle and the Eastside.`,
  alternates: { canonical: `${site.url}/create` },
  openGraph: {
    url: `${site.url}/create`,
    title: `${site.name} — Wall art ideas`,
    description: "Explore concept images for your wall—limited free tries per day.",
  },
  robots: { index: true, follow: true },
};

export default async function CreateArtPage() {
  const initialQuota = await getWallArtQuotaPublic();

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="eyebrow">For your space</p>
        <h1 className="mt-6 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Imagine your wall
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted">
          Stuck describing what you want? Use this <strong className="font-medium text-ink">idea sketchpad</strong>
          : scroll the <strong className="font-medium text-ink">theme board</strong> for different visual
          moods, or jump to <strong className="font-medium text-ink">logo-friendly</strong> starters if
          you&apos;re planning a brand wall. You&apos;ll get a quick visual to react to—then we handle
          print-ready files and install.
        </p>

        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>
            <strong className="text-ink">Daily limit</strong> per browser so we stay kind to our systems (you
            can change the cap with <code className="rounded bg-mist/80 px-1.5 py-0.5 text-xs">WALL_ART_DAILY_LIMIT</code>).
          </li>
          <li>
            Imagery is <strong className="text-ink">inspiration only</strong>—not production-ready for a huge
            print. Respect copyright: no characters or logos you don&apos;t own.
          </li>
          <li>
            Runs on OpenAI; don&apos;t paste anything private you wouldn&apos;t send to a third party. See{" "}
            <Link href="/privacy" className="font-medium text-accent underline-offset-2 hover:underline">
              privacy
            </Link>
            .
          </li>
        </ul>

        <div className="mt-10">
          <WallArtForm initialQuota={initialQuota} />
        </div>

        <p className="mt-14 text-sm text-muted">
          Ready to make it real?{" "}
          <Link href="/contact" className="font-semibold text-accent underline-offset-4 hover:underline">
            Tell us about your wall
          </Link>
          —dimensions, photos, and timeline.
        </p>
      </div>
    </div>
  );
}
