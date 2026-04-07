const PRODUCTION_URL = "https://seattlewallco.com" as const;

/** Used by `npm run dev` so this app does not share :3000 with other local projects. */
const LOCAL_DEV_PORT = 3010 as const;

function resolvePublicSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:${LOCAL_DEV_PORT}`;
  }
  return PRODUCTION_URL;
}

/** In development, append to titles so local tabs are easy to spot. */
export const devTitleSuffix =
  process.env.NODE_ENV === "development" ? " [local]" : "";

export const site = {
  name: "Seattle Wall Co.",
  tagline:
    "Large-format UV wall printing for Seattle teams—your print-ready files, on the wall, no vinyl to hang. We’ll sanity-check files and surfaces before we quote.",
  url: resolvePublicSiteUrl(),
  phone: "(360) 317-5952",
  phoneHref: "tel:+13603175952",
  email: "hello@seattlewallco.com",
  city: "Seattle",
  region: "WA",
  serviceAreas: ["Seattle", "Bellevue", "Redmond", "Kirkland", "Tacoma corridor"],
  responseSla: "We reply within one business day.",
} as const;

export const navLinks = [
  { href: "/#surfaces", label: "Surfaces" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#compare", label: "Why us" },
  { href: "/#faq", label: "FAQ" },
  { href: "/create", label: "Wall ideas" },
  { href: "/contact", label: "Contact" },
] as const;
