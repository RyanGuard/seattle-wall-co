type Props = {
  src: string;
  title: string;
  className?: string;
};

/** HTML5 video for files in `public/videos/`. */
export function SiteVideo({ src, title, className }: Props) {
  return (
    <video
      className={className}
      controls
      playsInline
      preload="metadata"
      aria-label={title}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support embedded video.{" "}
      <a href={src} className="underline">
        Download the clip
      </a>
      .
    </video>
  );
}
