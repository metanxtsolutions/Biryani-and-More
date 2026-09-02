import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * iOS applies its own corner mask on top of this, so this ships full-bleed
 * and unrounded — same monogram tile as icon.tsx, just without the
 * borderRadius since iOS would double it up.
 */
export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            fontSize: 82,
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
