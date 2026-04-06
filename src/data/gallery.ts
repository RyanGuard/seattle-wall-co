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
      "Turned a blank concrete facade into the building's signature landmark — visible from the street and impossible to miss.",
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
      "Gave a corporate lobby the visual punch of a gallery installation — floor-to-ceiling color with zero vinyl seams.",
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
      "Transformed a plain dining wall into an Instagram-worthy backdrop that customers photograph every night.",
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
      "Turned a forgettable stairwell into a visual journey — employees actually take the stairs now.",
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
      "Made the reception wall the first thing visitors talk about — photo-realistic detail that looks painted by hand.",
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
      "Created an immersive lounge atmosphere where the wall art sets the mood before guests even sit down.",
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
      "Delivered a fully branded pop-up room that photographs perfectly from every angle — corners, returns, and all.",
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
      "Put the company's identity on a raw warehouse wall — bold enough to read from the road, detailed enough to admire up close.",
    src: "https://images.unsplash.com/photo-1584951961247-b20fdb8a883d?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    photoCredit: "Unsplash — masonry graphic reference (not our install)",
  },
];
