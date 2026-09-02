import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Browser-tab favicon: the monogram tile from Brand & Logo Guidelines
 * V1.0 (direction 1a), corner radius at 18% of tile size as specified.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#A6301F",
          borderRadius: 32 * 0.18,
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: "-0.045em",
            color: "#FBF8F1",
          }}
        >
          B&amp;M
        </div>
      </div>
    ),
    { ...size }
  );
}
