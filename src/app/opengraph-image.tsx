import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #2a0f4e 0%, #3d1770 45%, #1a0b2e 100%)",
          color: "#f8f4ff",
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: -0.5,
        }}
      >
        <div style={{ fontSize: 26, color: "#00d4b8", textTransform: "uppercase", letterSpacing: 4 }}>
          Seattle · Bellevue · Eastside
        </div>
        <div style={{ marginTop: 16 }}>{site.name}</div>
        <div style={{ marginTop: 24, fontSize: 28, fontWeight: 400, maxWidth: 820, color: "#e8d5f0" }}>
          Large-format wall printing for workplaces, retail, and events.
        </div>
      </div>
    ),
    { ...size },
  );
}
