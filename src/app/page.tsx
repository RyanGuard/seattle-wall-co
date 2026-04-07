import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { CompareSection } from "@/components/CompareSection";
import { FaqJsonLd } from "@/components/JsonLd";
import { FAQSection } from "@/components/FAQSection";
import { FinalCta } from "@/components/FinalCta";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { PrintableSurfacesSection } from "@/components/PrintableSurfacesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServiceArea } from "@/components/ServiceArea";
import { TrustRow } from "@/components/TrustRow";
import { VerticalsSection } from "@/components/VerticalsSection";
import { beforeAfterItems } from "@/data/beforeAfter";
import { galleryItems } from "@/data/gallery";
import { devTitleSuffix, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Direct-to-wall printing & mural graphics in Seattle, WA",
  description: `${site.tagline} Serving Seattle, Bellevue, Redmond, and the broader Puget Sound.`,
  alternates: { canonical: site.url },
  openGraph: {
    url: site.url,
    title: `${site.name}${devTitleSuffix} — Direct-to-wall printing in Seattle, WA`,
    description: site.tagline,
  },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <Hero />
      <TrustRow />
      <PrintableSurfacesSection />
      <HowItWorks />
      <VerticalsSection />
      <GallerySection items={galleryItems} />
      <BeforeAfterSection items={beforeAfterItems} />
      <CompareSection />
      <PricingSection />
      <ProcessSection />
      <ServiceArea />
      <FAQSection />
      <FinalCta />
    </>
  );
}
