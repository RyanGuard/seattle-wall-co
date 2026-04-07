/**
 * Local videos served from `public/videos/`.
 *
 * Add MP4 (or WebM) files there, then list them here. Paths are root-relative
 * (e.g. `/videos/demo.mp4` → file at `public/videos/demo.mp4`).
 *
 * If `howItWorks` is empty, the How it works section uses the YouTube embed only.
 */
export type SiteVideoRef = {
  /** e.g. "/videos/my-clip.mp4" */
  src: string;
  title: string;
};

export const howItWorksVideos: SiteVideoRef[] = [
  { src: "/videos/clip-01.mp4", title: "On site — printing in progress" },
  { src: "/videos/clip-02.mp4", title: "Vertical printer in motion" },
  { src: "/videos/clip-04.mp4", title: "Another angle on the rig" },
];

/** Long-form reference (kept when using local clips so visitors can still dig deeper). */
export const howItWorksYoutubeId = "8_kOQzIYEdo";
