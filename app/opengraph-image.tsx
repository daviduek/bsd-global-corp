import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "BSD Global Corp — Wholesale Computing & Electronics Distribution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (kept in sync with tailwind.config.ts)
const BG = "#FFFFFF";
const MIST = "#F4F7FB";
const LINE = "#E5EAF1";
const INK = "#0F1E33";
const BODY = "#46566D";
const MUTED = "#93A1B5";
const BRAND = "#1C50D8";
const BRAND_SOFT = "#EAF1FE";

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
          backgroundColor: BG,
          backgroundImage: `linear-gradient(180deg, ${BRAND_SOFT} 0%, ${BG} 55%)`,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: monogram + entity */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              backgroundColor: BRAND,
              color: "#FFFFFF",
              fontSize: 38,
              fontWeight: 900,
              borderRadius: 12,
            }}
          >
            B
          </div>
          <div
            style={{
              color: MUTED,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            BSD Global Corp · Estados Unidos
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
              maxWidth: 1040,
            }}
          >
            <span style={{ color: INK, paddingRight: 20 }}>
              Distribución mayorista de computación y
            </span>
            <span style={{ color: BRAND }}>electrónica.</span>
          </div>
          <div style={{ display: "flex", color: BODY, fontSize: 30, maxWidth: 960 }}>
            Adquirir. Almacenar. Distribuir. Exportar. Para revendedores,
            distribuidores y empresas.
          </div>
        </div>

        {/* Bottom rail */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
          }}
        >
          {["Computadoras", "Componentes", "Periféricos", "Redes", "Almacenamiento"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  color: BODY,
                  fontSize: 22,
                  fontWeight: 500,
                  border: `1px solid ${LINE}`,
                  backgroundColor: MIST,
                  padding: "8px 16px",
                  borderRadius: 8,
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
