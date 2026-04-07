import type { Metadata } from "next";
import { Righteous, Rubik } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { devTitleSuffix, site } from "@/lib/site";

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}${devTitleSuffix} | Wall printing & murals in Seattle, WA`,
    template: `%s | ${site.name}${devTitleSuffix}`,
  },
  description: site.tagline,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name}${devTitleSuffix} — Seattle wall printing`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}${devTitleSuffix} — Seattle wall printing`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${righteous.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-ink selection:bg-accent-soft/50 selection:text-ink">
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
