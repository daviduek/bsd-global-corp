import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site";
import LanguageProvider from "@/components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: "BSD Global Corp — Distribución mayorista de computación y electrónica",
    template: "%s · BSD Global Corp",
  },
  description:
    "BSD Global Corp es un distribuidor mayorista con base en EE. UU. de computadoras, notebooks, componentes de hardware, periféricos y electrónica para revendedores, distribuidores y compradores corporativos.",
  keywords: [
    "distribuidor mayorista de electrónica",
    "computación al por mayor",
    "mayorista de tecnología B2B",
    "notebooks al por mayor",
    "distribuidor de hardware",
    "wholesale electronics distributor USA",
    "exportación computación electrónica",
  ],
  authors: [{ name: "BSD Global Corp" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "es_ES",
    alternateLocale: "en_US",
    title: "BSD Global Corp — Distribución mayorista de computación y electrónica",
    description:
      "Distribución mayorista de computación y electrónica con base en EE. UU. para empresas, revendedores y exportadores.",
    siteName: "BSD Global Corp",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSD Global Corp — Computación y electrónica al por mayor",
    description:
      "Distribución mayorista de computación y electrónica con base en EE. UU. para empresas, revendedores y exportadores.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
