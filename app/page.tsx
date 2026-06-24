import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Audience from "@/components/Audience";
import Process from "@/components/Process";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteUrl } from "./site";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BSD Global Corp",
  url: siteUrl,
  description:
    "Distribución mayorista de computadoras, notebooks, componentes de hardware, periféricos y electrónica para empresas, con base en Estados Unidos.",
  email: "bsdglobalcorp@gmail.com",
  telephone: "+54-9-11-3383-2945",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  },
  areaServed: "US",
  knowsAbout: [
    "Computer wholesale",
    "Electronics distribution",
    "IT hardware",
    "B2B distribution",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Products />
        <Audience />
        <Process />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
