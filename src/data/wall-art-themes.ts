/**
 * Visual “theme board” for /create — each card sets prompt + style hint.
 * Swatches / stripes are decorative only; tune copy to match how you sell.
 */
export type WallArtTheme = {
  id: string;
  title: string;
  blurb: string;
  prompt: string;
  styleHint: string;
  /** Left-to-right accent colors (hex) shown as dots */
  swatches: string[];
  /** CSS background for the card header strip */
  stripe: string;
};

export const wallArtThemes: WallArtTheme[] = [
  {
    id: "minimal-corporate",
    title: "Quiet corporate",
    blurb: "Calm, lots of breathing room",
    prompt:
      "Minimal abstract composition for a corporate lobby wall: soft gray and warm white planes, one thin gold accent line, no text, calm and expensive feeling",
    styleHint: "Very clean, matte finish look, generous negative space",
    swatches: ["#F5F2EB", "#8A9099", "#B8941F"],
    stripe: "linear-gradient(105deg, #e8eaef 0%, #cfd4dd 45%, #b8941f22 100%)",
  },
  {
    id: "biophilic",
    title: "Biophilic calm",
    blurb: "Nature without clutter",
    prompt:
      "Soft biophilic wall mural: layered leaf silhouettes and diffused light, sage green and dusty blue, healthcare or wellness lobby friendly, no text",
    styleHint: "Soothing, organic shapes, low contrast, modern not kitschy",
    swatches: ["#6B8F71", "#A8C0C9", "#E8E6DC"],
    stripe: "linear-gradient(120deg, #3d5c41 0%, #7a9e86 50%, #c5d5d8 100%)",
  },
  {
    id: "bold-retail",
    title: "Bold retail",
    blurb: "High energy, pattern-forward",
    prompt:
      "Bold retail feature wall: oversized geometric shapes, high contrast coral and deep navy, energetic but not messy, no logos or words",
    styleHint: "Pop color, retail display energy, crisp edges",
    swatches: ["#E85D4C", "#1B2A4A", "#F4E8C8"],
    stripe: "linear-gradient(90deg, #e85d4c 0%, #7c3aed 40%, #1b2a4a 100%)",
  },
  {
    id: "pnw-mood",
    title: "PNW mood",
    blurb: "Regional, moody, atmospheric",
    prompt:
      "Atmospheric Pacific Northwest inspired wall graphic: misty evergreens and cool gray sky abstraction, subtle depth, Seattle office appropriate, no text",
    styleHint: "Moody, layered mist, desaturated greens and blues",
    swatches: ["#2F4F4F", "#8FA3AD", "#D4D9DC"],
    stripe: "linear-gradient(180deg, #6b7d7d 0%, #3d4f4f 60%, #1e2a2a 100%)",
  },
  {
    id: "warm-hospitality",
    title: "Warm hospitality",
    blurb: "Restaurant or hotel warmth",
    prompt:
      "Warm hospitality wall treatment: terracotta, cream, and olive abstract shapes, inviting texture suggestion, dining or lounge vibe, no text",
    styleHint: "Warm tones, artisanal feel, subtle texture, appetizing palette",
    swatches: ["#C67B5C", "#D4C4A8", "#5C6B4A"],
    stripe: "linear-gradient(135deg, #c67b5c 0%, #e8dcc8 50%, #5c6b4a66 100%)",
  },
  {
    id: "tech-gradient",
    title: "Tech / future",
    blurb: "Soft gradients, product-launch energy",
    prompt:
      "Modern tech office accent wall: smooth aurora-like gradients in teal and violet with soft depth, minimal shapes, no text, premium SaaS lobby feel",
    styleHint: "Smooth gradients, futuristic but restrained, no busy details",
    swatches: ["#0F766E", "#6366F1", "#E0E7FF"],
    stripe: "linear-gradient(125deg, #0f766e 0%, #6366f1 55%, #c4b5fd 100%)",
  },
  {
    id: "industrial",
    title: "Industrial texture",
    blurb: "Concrete, steel, craft",
    prompt:
      "Industrial chic wall graphic suggestion: subtle concrete texture overlay with thin linear grid and rust-oxide accent strokes, loft or maker space, no text",
    styleHint: "Grunge-adjacent but clean, architectural, muted palette",
    swatches: ["#78716C", "#A8A29E", "#B45309"],
    stripe: "linear-gradient(90deg, #57534e 0%, #a8a29e 45%, #92400e55 100%)",
  },
  {
    id: "logo-backdrop",
    title: "Logo-friendly backdrop",
    blurb: "Pattern leaves center clear for your mark",
    prompt:
      "Wide wall background pattern for applying a company logo in the center: soft radial fade from edges inward—outer area has gentle abstract line work in two brand-neutral tones, very open calm center, no text no symbols",
    styleHint: "Center must feel empty and calm for a logo overlay; symmetrical balance",
    swatches: ["#E7E5E4", "#A3A3A3", "#292524"],
    stripe: "linear-gradient(ellipse at center, #f5f5f4 0%, #e7e5e4 45%, #d6d3d1 100%)",
  },
];
