/**
 * Industry-style examples modeled on common vertical wall-printing portfolios
 * (full-height facades, atriums, dining graphics, brand rooms). All Unsplash stock —
 * not Seattle Wall Co. client work; replace with your installs when ready.
 */
export type GalleryCategory = "Office" | "Retail" | "Event" | "Hospitality" | "Mural";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  outcome: string;
  src: string;
  width: number;
  height: number;
  photoCredit: string;
  secondarySrc?: string;
  secondaryWidth?: number;
  secondaryHeight?: number;
  secondaryAlt?: string;
  sliceLabels?: { primary: string; secondary: string };
};

export const galleryItems: GalleryItem[] = [
  {
    id: "exterior-full-height-wrap",
    title: "Campus facade — full-height color story",
    category: "Mural",
    outcome:
      "Typical of how vertical rigs dress tall masonry: one continuous vertical pass, alignment to control joints, and UV-curable ink that survives rain-cycling—useful when briefing Seattle or Eastside property teams on access lifts.",
    src: "https://images.unsplash.com/photo-1653570449715-e764cf567138?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — exterior mural reference (not our install)",
  },
  {
    id: "atrium-color-block",
    title: "Atrium wall — floor-to-ceiling saturation",
    category: "Office",
    outcome:
      "Large vertical fields of color in lobbies and atriums—where color management and seam strategy matter as much as the artwork. Good reference for Bellevue towers that want impact without vinyl seams every few feet.",
    src: "https://images.unsplash.com/photo-1638662676137-927e2475b072?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — interior feature wall (not our install)",
  },
  {
    id: "dining-booth-stripes",
    title: "Fast-casual — patterned booth wall",
    category: "Hospitality",
    outcome:
      "Repeating wall graphics behind banquettes: registration to chair rails and HVAC reveals is the kind of detail we walk through with your architect—common in Tacoma–Seattle restaurant rollouts.",
    src: "https://images.unsplash.com/photo-1769002214898-269ada3c85a2?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — dining graphics reference (not our install)",
  },
  {
    id: "stairwell-graphic-climb",
    title: "Public stair — vertical graphic climb",
    category: "Office",
    outcome:
      "Stairs are natural 'vertical printer' showcases: tall sightlines, handrail conflicts, and fire-rating questions. This scenario helps us talk about night access and protection while the public is off the flight.",
    src: "https://images.unsplash.com/photo-1715593947910-bb37cea253a4?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — stairwell graphics (not our install)",
  },
  {
    id: "reception-cityscape-gypsum",
    title: "Reception — photoreal city on gypsum",
    category: "Office",
    outcome:
      "Photographic murals bonded flush to painted gypsum—similar to how we proof skin tones and skyline detail before we commit ink on your SLU or Kirkland reception wall.",
    src: "https://images.unsplash.com/photo-1677272294437-c7ac54693ac3?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — reception mural reference (not our install)",
  },
  {
    id: "lounge-seating-mural",
    title: "Lounge vignette — seating + full wall",
    category: "Hospitality",
    outcome:
      "Sightlines from entry through seating: matte versus satin finishes, glare from storefront glass—the sort of trade finish conversation we have weekly with Eastside developers.",
    src: "https://images.unsplash.com/photo-1677272294917-3b17980e54d2?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — lounge mural reference (not our install)",
  },
  {
    id: "brand-room-allover",
    title: "Brand room — allover wall program",
    category: "Retail",
    outcome:
      "Immersive pattern work for flagship or pop-up programs: corners, returns, and door wraps in one scope—how vertical equipment shines when everything has to line up in camera tests.",
    src: "https://images.unsplash.com/photo-1758923530347-05cafe8db58e?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — immersive retail walls (not our install)",
  },
  {
    id: "industrial-masonry-wrap",
    title: "Industrial facade — oversized graphic on masonry",
    category: "Mural",
    outcome:
      "Heavy pigment on coarse masonry—substrate tests and dot gain matter here. Helpful benchmark when a client wants warehouse or flex branding visible from the ROW.",
    src: "https://images.unsplash.com/photo-1584951961247-b20fdb8a883d?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — masonry graphic reference (not our install)",
  },
];
