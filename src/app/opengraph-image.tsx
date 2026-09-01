import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #4a0f1c 0%, #7d1f31 60%, #a13246 100%)",
          color: "#fbf6ee",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e3a33d",
            marginBottom: 24,
          }}
        >
          Premium Cloud Kitchen · Kolkata
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, textAlign: "center", lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 36, marginTop: 28, color: "#f4ecdd", textAlign: "center" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
