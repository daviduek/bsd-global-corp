import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bsdglobalcorp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BSD Global Corp — Wholesale Computing & Electronics Distribution",
    template: "%s · BSD Global Corp",
  },
  description:
    "BSD Global Corp is a Wyoming-based wholesale distributor of computers, notebooks, hardware components, peripherals and electronics for resellers, distributors and corporate buyers across the United States.",
  keywords: [
    "wholesale electronics distributor",
    "computer wholesale USA",
    "B2B IT distribution",
    "notebooks wholesale",
    "hardware components distributor",
    "Wyoming corporation",
    "export computing electronics",
  ],
  authors: [{ name: "BSD Global Corp" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BSD Global Corp — Wholesale Computing & Electronics Distribution",
    description:
      "US-based wholesale distribution of computing and electronics for businesses, resellers and exporters.",
    siteName: "BSD Global Corp",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSD Global Corp — Wholesale Computing & Electronics",
    description:
      "US-based wholesale distribution of computing and electronics for businesses, resellers and exporters.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
