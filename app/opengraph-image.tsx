import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "BSD Global Corp — Wholesale Computing & Electronics Distribution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (kept in sync with tailwind.config.ts)
const INK = "#0A0E17";
const PANEL = "#0E1420";
const LINE = "#1F2A3D";
const TEXT = "#E8EEF9";
const MUTED = "#8696B3";
const SIGNAL = "#FFB020";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: INK,
          backgroundImage: `linear-gradient(to right, ${LINE}55 1px, transparent 1px), linear-gradient(to bottom, ${LINE}55 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: monogram + entity */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              backgroundColor: SIGNAL,
              color: INK,
              fontSize: 40,
              fontWeight: 900,
              borderRadius: 4,
            }}
          >
            B
          </div>
          <div
            style={{
              color: MUTED,
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            BSD Global Corp · Wyoming, USA
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            <span style={{ color: TEXT, paddingRight: 24 }}>
              Wholesale computing &amp;
            </span>
            <span style={{ color: SIGNAL, paddingRight: 24 }}>electronics</span>
            <span style={{ color: TEXT }}>distribution.</span>
          </div>
          <div style={{ display: "flex", color: MUTED, fontSize: 30, maxWidth: 900 }}>
            Source. Stock. Distribute. Export. For resellers, distributors and
            corporate buyers across the United States.
          </div>
        </div>

        {/* Bottom rail */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
          }}
        >
          {["Computers", "Components", "Peripherals", "Networking", "Storage"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  color: MUTED,
                  fontSize: 22,
                  border: `1px solid ${LINE}`,
                  backgroundColor: PANEL,
                  padding: "8px 16px",
                  borderRadius: 3,
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
