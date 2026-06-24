export type Lang = "es" | "en";

export const LANGS: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";

type Dict = {
  nav: { products: string; audience: string; process: string; company: string; cta: string };
  hero: {
    eyebrow: string;
    h1Pre: string;
    h1Highlight: string;
    h1Post: string;
    subcopy: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: { k: string; v: string }[];
    cardEyebrow: string;
    cardTitle: string;
    quick: string[];
    cardLink: string;
  };
  products: { eyebrow: string; h2: string; intro: string; items: { title: string; desc: string }[] };
  audience: { eyebrow: string; h2: string; items: { title: string; desc: string }[] };
  process: { eyebrow: string; h2: string; steps: { title: string; desc: string }[] };
  company: {
    eyebrow: string;
    h2: string;
    paras: string[];
    entityLabel: string;
    entityName: string;
    entityLocation: string;
    points: { k: string; t: string; d: string }[];
  };
  contact: {
    eyebrow: string;
    h2: string;
    subcopy: string;
    primaryContact: string;
    contactName: string;
    emailLabel: string;
    phoneLabel: string;
    fullName: string;
    company: string;
    workEmail: string;
    country: string;
    category: string;
    needs: string;
    placeholders: { name: string; company: string; email: string; country: string; needs: string };
    interests: string[];
    submit: string;
    submitting: string;
    disclaimerPre: string;
    disclaimerPost: string;
  };
  footer: {
    description: string;
    startInquiry: string;
    catalogTitle: string;
    companyTitle: string;
    catalogLinks: string[];
    companyLinks: string[];
    rights: string;
    tagline: string;
  };
  langSwitch: string;
};

export const dict: Record<Lang, Dict> = {
  es: {
    nav: {
      products: "Productos",
      audience: "A quién servimos",
      process: "Cómo trabajamos",
      company: "Empresa",
      cta: "Solicitar cotización",
    },
    hero: {
      eyebrow: "Mayorista de computación y electrónica",
      h1Pre: "La columna vertebral de distribución para computación y ",
      h1Highlight: "electrónica",
      h1Post: ".",
      subcopy:
        "BSD Global Corp adquiere, almacena y distribuye computadoras, hardware y electrónica al por mayor, abasteciendo a revendedores, distribuidores y compradores corporativos en Estados Unidos.",
      ctaPrimary: "Solicitar cotización",
      ctaSecondary: "Ver líneas de producto",
      facts: [
        { k: "Entidad", v: "C-Corporation" },
        { k: "Jurisdicción", v: "Estados Unidos" },
        { k: "Modelo", v: "Mayorista B2B" },
        { k: "Alcance", v: "Lista para exportar" },
      ],
      cardEyebrow: "Lo que movemos",
      cardTitle: "Un catálogo en operación, abastecido y en stock.",
      quick: [
        "Computadoras y notebooks",
        "Componentes y hardware",
        "Redes y conectividad",
        "Electrónica para exportación",
      ],
      cardLink: "Ver las seis líneas de producto",
    },
    products: {
      eyebrow: "Líneas de producto",
      h2: "Un catálogo completo de computación y electrónica, listo para mover.",
      intro:
        "Cubrimos las categorías que las empresas piden más, y conseguimos lo que necesiten después. Especificaciones y disponibilidad confirmadas en cada cotización.",
      items: [
        {
          title: "Computadoras y notebooks",
          desc: "Desktops, laptops, workstations y all-in-ones de los principales fabricantes, disponibles en volumen para reventa y flotas corporativas.",
        },
        {
          title: "Componentes y hardware",
          desc: "Procesadores, motherboards, memorias, placas de video y fuentes para armadores e integradores.",
        },
        {
          title: "Periféricos y entrada",
          desc: "Monitores, teclados, mouses, docks y webcams: el hardware cotidiano que equipa una oficina.",
        },
        {
          title: "Redes y conectividad",
          desc: "Routers, switches, access points y cableado para construir y escalar una infraestructura confiable.",
        },
        {
          title: "Almacenamiento y memoria",
          desc: "Discos sólidos, discos rígidos, módulos y almacenamiento externo en grados consumo y empresa.",
        },
        {
          title: "Accesorios y electrónica",
          desc: "Cables, cargadores, energía, audio y un amplio catálogo de electrónica complementaria para completar cada pedido.",
        },
      ],
    },
    audience: {
      eyebrow: "A quién servimos",
      h2: "Pensado para empresas que compran para revender, equipar y exportar.",
      items: [
        {
          title: "Revendedores",
          desc: "Abastecé las líneas de mayor rotación con márgenes mayoristas y mantené tus góndolas y locales surtidos.",
        },
        {
          title: "Distribuidores",
          desc: "Suministro upstream confiable con precios por volumen para alimentar tu propia red de distribución.",
        },
        {
          title: "Retailers especializados",
          desc: "Computación y electrónica seleccionadas para comercios que atienden a un público específico.",
        },
        {
          title: "Compras corporativas",
          desc: "Equipá equipos y renová flotas con abastecimiento constante y un único punto de contacto.",
        },
        {
          title: "Exportadores",
          desc: "Conseguí producto del mercado estadounidense para programas de exportación, pensado para socios que mueven mercadería entre países.",
        },
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      h2: "Un modelo de punta a punta: adquirir, almacenar, distribuir, exportar.",
      steps: [
        {
          title: "Adquirir",
          desc: "Compramos producto a una red de fabricantes, distribuidores y proveedores, confirmando especificaciones, condición y precio antes de comprometer nada.",
        },
        {
          title: "Almacenar",
          desc: "Consolidamos y mantenemos inventario para cumplir pedidos rápido, con disponibilidad verificada contra cada cotización que emitimos.",
        },
        {
          title: "Distribuir",
          desc: "La mercadería llega a revendedores, comercios y empresas en todo Estados Unidos, coordinada a través de un único contacto de cuenta.",
        },
        {
          title: "Exportar",
          desc: "Para socios que envían al exterior, preparamos producto del mercado estadounidense para programas de exportación y distribución internacional.",
        },
      ],
    },
    company: {
      eyebrow: "La empresa",
      h2: "Distribución, con disciplina corporativa.",
      paras: [
        "BSD Global Corp se dedica a la compra, venta y distribución de productos de computación y electrónica. Comercializamos computadoras, notebooks, componentes de hardware, periféricos, accesorios tecnológicos y otros productos electrónicos, principalmente para el mercado corporativo.",
        "Nuestra operación es simple: adquirimos mercadería de proveedores y distribuidores, y luego la comercializamos a clientes empresariales. Ese foco mantiene el abastecimiento afinado, el inventario relevante y cada pedido respondiendo a un único punto de contacto.",
      ],
      entityLabel: "Entidad registrada",
      entityName: "BSD Global Corp · Corporation",
      entityLocation: "Estados Unidos",
      points: [
        {
          k: "Con base en EE. UU.",
          t: "Una corporación de EE. UU.",
          d: "Constituida y operando en Estados Unidos, BSD Global Corp está estructurada para relaciones comerciales estables y de largo plazo.",
        },
        {
          k: "Solo B2B",
          t: "Mayorista, no minorista",
          d: "Vendemos a empresas: revendedores, distribuidores y compradores corporativos, con precios y condiciones pensados para volumen.",
        },
        {
          k: "Abastecimiento",
          t: "Suministro multiproveedor",
          d: "Una amplia red de proveedores nos permite cubrir las categorías principales y conseguir el producto específico que un cliente necesita.",
        },
        {
          k: "Exportación",
          t: "Lista para cruzar fronteras",
          d: "Orientada a socios exportadores, con abastecimiento y logística preparados para la distribución internacional.",
        },
      ],
    },
    contact: {
      eyebrow: "Solicitar cotización",
      h2: "Hablemos de abastecimiento.",
      subcopy:
        "Contanos qué necesitás y con qué volumen trabajás. Confirmamos disponibilidad, especificaciones y precios, y te respondemos.",
      primaryContact: "Contacto principal",
      contactName: "José Javier Duek",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      fullName: "Nombre completo",
      company: "Empresa",
      workEmail: "Email de trabajo",
      country: "País",
      category: "Categoría de interés",
      needs: "¿Qué necesitás?",
      placeholders: {
        name: "Juan Pérez",
        company: "Acme Distribución S.A.",
        email: "juan@empresa.com",
        country: "Argentina",
        needs: "Productos, cantidades, plazo objetivo…",
      },
      interests: [
        "Computadoras y notebooks",
        "Componentes y hardware",
        "Periféricos y entrada",
        "Redes y conectividad",
        "Almacenamiento y memoria",
        "Accesorios y electrónica",
        "General / Varias categorías",
      ],
      submit: "Enviar solicitud",
      submitting: "Abriendo tu email…",
      disclaimerPre: "Abre tu cliente de email con el mensaje dirigido a ",
      disclaimerPost:
        ". ¿Preferís escribir directamente? Usá los datos de contacto de la izquierda.",
    },
    footer: {
      description:
        "Distribución mayorista de computación y electrónica para revendedores, distribuidores y compradores corporativos.",
      startInquiry: "Iniciar una consulta",
      catalogTitle: "Catálogo",
      companyTitle: "Empresa",
      catalogLinks: ["Líneas de producto", "A quién servimos", "Cómo trabajamos"],
      companyLinks: ["Sobre BSD", "Solicitar cotización", "Volver arriba"],
      rights: "Una corporación de EE. UU. Todos los derechos reservados.",
      tagline: "Mayorista B2B · Estados Unidos",
    },
    langSwitch: "Cambiar idioma",
  },

  en: {
    nav: {
      products: "Products",
      audience: "Who we serve",
      process: "How we work",
      company: "Company",
      cta: "Request a quote",
    },
    hero: {
      eyebrow: "Wholesale computing & electronics",
      h1Pre: "The distribution backbone for computing & ",
      h1Highlight: "electronics",
      h1Post: ".",
      subcopy:
        "BSD Global Corp sources, stocks and distributes computers, hardware and electronics at wholesale — supplying resellers, distributors and corporate buyers across the United States.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "View product lines",
      facts: [
        { k: "Entity", v: "C-Corporation" },
        { k: "Jurisdiction", v: "United States" },
        { k: "Model", v: "B2B wholesale" },
        { k: "Reach", v: "Export-ready" },
      ],
      cardEyebrow: "What we move",
      cardTitle: "A working catalog, sourced and stocked.",
      quick: [
        "Computers & notebooks",
        "Components & hardware",
        "Networking & connectivity",
        "Electronics for export",
      ],
      cardLink: "See all six product lines",
    },
    products: {
      eyebrow: "Product lines",
      h2: "A full catalog of computing and electronics, ready to move.",
      intro:
        "We carry the categories businesses order most — and source what they ask for next. Specifications and availability confirmed per quote.",
      items: [
        {
          title: "Computers & Notebooks",
          desc: "Desktops, laptops, workstations and all-in-ones from leading manufacturers, available in volume for resale and corporate fleets.",
        },
        {
          title: "Components & Hardware",
          desc: "Processors, motherboards, memory, graphics cards and power supplies for system builders and integrators.",
        },
        {
          title: "Peripherals & Input",
          desc: "Monitors, keyboards, mice, docks and webcams — the everyday hardware that equips a working office.",
        },
        {
          title: "Networking & Connectivity",
          desc: "Routers, switches, access points and cabling to build and scale reliable business infrastructure.",
        },
        {
          title: "Storage & Memory",
          desc: "Solid-state drives, hard disks, modules and external storage across consumer and enterprise grades.",
        },
        {
          title: "Accessories & Electronics",
          desc: "Cables, chargers, power, audio and a broad catalog of supporting electronics to complete every order.",
        },
      ],
    },
    audience: {
      eyebrow: "Who we serve",
      h2: "Built for businesses that buy to sell, equip and export.",
      items: [
        {
          title: "Resellers",
          desc: "Stock fast-moving lines at wholesale margins and keep your shelves and storefronts supplied.",
        },
        {
          title: "Distributors",
          desc: "Reliable upstream supply with volume pricing to feed your own distribution network.",
        },
        {
          title: "Specialty retailers",
          desc: "Curated computing and electronics for shops that serve a focused customer base.",
        },
        {
          title: "Corporate procurement",
          desc: "Equip teams and refresh fleets with consistent sourcing and a single point of contact.",
        },
        {
          title: "Exporters",
          desc: "Source US-market product for export programs, built for partners moving goods across borders.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      h2: "One model, end to end: source, stock, distribute, export.",
      steps: [
        {
          title: "Source",
          desc: "We acquire product from a network of manufacturers, distributors and suppliers — confirming specs, condition and price before anything is committed.",
        },
        {
          title: "Stock",
          desc: "Inventory is consolidated and held so orders can be fulfilled quickly, with availability verified against every quote we issue.",
        },
        {
          title: "Distribute",
          desc: "Goods move to resellers, retailers and corporate buyers across the United States, coordinated through a single account contact.",
        },
        {
          title: "Export",
          desc: "For partners shipping abroad, we prepare US-market product for export programs and cross-border distribution.",
        },
      ],
    },
    company: {
      eyebrow: "The company",
      h2: "Distribution, handled with corporate discipline.",
      paras: [
        "BSD Global Corp is dedicated to the purchase, sale and distribution of computing and electronics products. We commercialize computers, notebooks, hardware components, peripherals, technology accessories and other electronics — primarily for the corporate market.",
        "Our operation is straightforward: we acquire merchandise from suppliers and distributors, then commercialize it to business clients. That focus keeps sourcing sharp, inventory relevant and every order accountable to a single point of contact.",
      ],
      entityLabel: "Registered entity",
      entityName: "BSD Global Corp · Corporation",
      entityLocation: "United States",
      points: [
        {
          k: "US-based",
          t: "A US corporation",
          d: "Incorporated and operating in the United States, BSD Global Corp is structured for stable, long-term commercial relationships.",
        },
        {
          k: "B2B only",
          t: "Wholesale, not retail",
          d: "We sell to businesses — resellers, distributors and corporate buyers — with pricing and terms built for volume.",
        },
        {
          k: "Sourcing",
          t: "Multi-vendor supply",
          d: "A broad supplier network lets us cover core categories and chase down the specific product a client needs.",
        },
        {
          k: "Export",
          t: "Cross-border ready",
          d: "Oriented toward exporting partners, with sourcing and handling geared to international distribution.",
        },
      ],
    },
    contact: {
      eyebrow: "Request a quote",
      h2: "Let's talk supply.",
      subcopy:
        "Tell us what you need and the volume you're working with. We'll confirm availability, specs and pricing and get back to you.",
      primaryContact: "Primary contact",
      contactName: "José Javier Duek",
      emailLabel: "Email",
      phoneLabel: "Phone",
      fullName: "Full name",
      company: "Company",
      workEmail: "Work email",
      country: "Country",
      category: "Category of interest",
      needs: "What do you need?",
      placeholders: {
        name: "Jane Smith",
        company: "Acme Distribution LLC",
        email: "jane@company.com",
        country: "United States",
        needs: "Products, quantities, target timeline…",
      },
      interests: [
        "Computers & Notebooks",
        "Components & Hardware",
        "Peripherals & Input",
        "Networking & Connectivity",
        "Storage & Memory",
        "Accessories & Electronics",
        "General / Multiple categories",
      ],
      submit: "Send quote request",
      submitting: "Opening your email…",
      disclaimerPre: "Opens your email client addressed to ",
      disclaimerPost:
        ". Prefer to write directly? Use the contact details on the left.",
    },
    footer: {
      description:
        "Wholesale distribution of computing and electronics for resellers, distributors and corporate buyers.",
      startInquiry: "Start an inquiry",
      catalogTitle: "Catalog",
      companyTitle: "Company",
      catalogLinks: ["Product lines", "Who we serve", "How we work"],
      companyLinks: ["About BSD", "Request a quote", "Back to top"],
      rights: "A US Corporation. All rights reserved.",
      tagline: "B2B wholesale · United States",
    },
    langSwitch: "Switch language",
  },
};
