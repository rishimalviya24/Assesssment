// ─── Exact mockup images from 1085.studio/web ────────────────────────────────
// Each web project has a real photo of a laptop in a unique environment as BG
const W = "https://1085.studio/assets/images/web-portfolio/";
const F = "https://1085.studio/assets/images/front-portfolio/";
const D = "https://1085.studio/assets/images/design-portfolio/";
const P = "https://1085.studio/assets/images/photography-portfolio/";

// ─── Web portfolio — full screen mockup photos ────────────────────────────────
export const WEB_PORTFOLIO = [
  {
    title: "MENS STUDIO",
    url: "menstudio.ch",
    href: "https://menstudio.ch",
    year: "2024",
    // Laptop on dark couch - barber tools on screen
    mockup: `${W}menstudio-web-portfolio-mockup-2024.webp`,
    screen: `${W}menstudio-web-portfolio-screen-2024.webp`,
  },
  {
    title: "SANIVIS AG",
    url: "sanivis.ch",
    href: "https://sanivis.ch",
    year: "2025",
    // Laptop angled on concrete - medical website
    mockup: `${W}sanivis-web-portfolio-mockup-2025.webp`,
    screen: `${F}sanivis-web-development-2025.webp`,
  },
  {
    title: "BAYAR ENERGIE AG",
    url: "bayar-energie.ch",
    href: "https://bayar-energie.ch",
    year: "2026",
    // Laptop on outdoor table - energy company
    mockup: `${W}bayar-energie-web-portfolio-mockup-2026.webp`,
    screen: `${W}bayar-energie-web-portfolio-screen-2026.webp`,
  },
  {
    title: "DA PEPINO",
    url: "dapepino.ch",
    href: "https://dapepino.ch",
    year: "2025",
    // Laptop angled in dark setting - restaurant
    mockup: `${W}da-pepino-web-portfolio-mockup-2025.webp`,
    screen: `${W}da-pepino-web-portfolio-screen-2025.webp`,
  },
  {
    title: "ARISO RESTAURANT",
    url: "ariso.ch",
    href: "https://ariso.ch",
    year: "2024",
    mockup: `${W}ariso-web-portfolio-mockup-2024.webp`,
    screen: `${F}ariso-restaurant-social-media-2024.webp`,
  },
  {
    title: "NWS GRUPPE",
    url: "nws-gruppe.ch",
    href: "#",
    year: "2024",
    mockup: `${W}nws-gruppe-web-portfolio-mockup-2024.webp`,
    screen: `${W}nws-gruppe-web-portfolio-screen-2024.webp`,
  },
  {
    title: "EMZET TRANSPORT",
    url: "emzet-transport.ch",
    href: "#",
    year: "2024",
    mockup: `${W}emzet-web-portfolio-mockup-2024.webp`,
    screen: `${W}emzet-web-portfolio-screen-2024.webp`,
  },
  {
    title: "BAYTEC SOLUTIONS",
    url: "baytec.ch",
    href: "https://baytec.ch",
    year: "2024",
    mockup: `${W}baytec-web-portfolio-mockup-2024.webp`,
    screen: `${F}baytec-solutions-brand-identity-2024.webp`,
  },
  {
    title: "LAZZO LASAGNE",
    url: "lazzo-lasagne.ch",
    href: "#",
    year: "2025",
    mockup: `${W}lazzo-web-portfolio-mockup-2025.webp`,
    screen: `${W}lazzo-web-portfolio-screen-2025.webp`,
  },
  {
    title: "INEA ENGINEERING",
    url: "inea-engineering.ch",
    href: "#",
    year: "2024",
    mockup: `${W}inea-web-portfolio-mockup-2024.webp`,
    screen: `${W}inea-web-portfolio-screen-2024.webp`,
  },
];

// ─── Design portfolio ─────────────────────────────────────────────────────────
export const DESIGN_PORTFOLIO = [
  { cat:"IDENTITY & BRANDING",     year:"2026", title:"BAYAR ENERGIE AG",         img:`${D}bayar-energie-ag-brand-identity-2026.webp` },
  { cat:"MERCHANDISE & PACKAGING", year:"2025", title:"LAZZO LASAGNE",            img:`${D}lazzo-lasagne-merchandise-packaging-2025.webp` },
  { cat:"MERCHANDISE & PACKAGING", year:"2025", title:"LAZZO LASAGNE",            img:`${D}lazzo-lasagne-stickers-packaging-2025.webp` },
  { cat:"MERCHANDISE & PACKAGING", year:"2025", title:"ALAWI LOBBY",              img:`${D}alawi-lobby-vinyl-merchandise-2025.webp` },
  { cat:"MERCHANDISE & PACKAGING", year:"2025", title:"ALAWI ACHDAR",             img:`${D}alawi-achdar-vinyl-merchandise-2025.webp` },
  { cat:"MERCHANDISE & PACKAGING", year:"2025", title:"RAPIDE HAESCHUTAPE",       img:`${D}rapide-haeschutape-merchandise-2025.webp` },
  { cat:"IDENTITY & BRANDING",     year:"2025", title:"SCBLB",                    img:`${D}scblb-brand-identity-2025.webp` },
  { cat:"IDENTITY & BRANDING",     year:"2025", title:"SCBLB",                    img:`${D}scblb-brand-identity-2025-2.webp` },
  { cat:"MERCHANDISE & PACKAGING", year:"2025", title:"EMZET TRANSPORT GMBH",     img:`${D}emzet-transport-merchandise-2025.webp` },
  { cat:"IDENTITY & BRANDING",     year:"2025", title:"DA PEPINO",                img:`${D}da-pepino-brand-identity-2025.webp` },
  { cat:"PRINT MEDIA",             year:"2025", title:"DA PEPINO",                img:`${D}da-pepino-print-media-2025.webp` },
  { cat:"IDENTITY & BRANDING",     year:"2025", title:"1085 STUDIO",              img:`${D}1085-studio-brand-identity-2025.webp` },
  { cat:"IDENTITY & BRANDING",     year:"2025", title:"ZOK",                      img:`${D}zok-brand-identity-2025.webp` },
  { cat:"PRINT MEDIA",             year:"2025", title:"PPG AG",                   img:`${D}ppg-ag-print-media-2025.webp` },
  { cat:"IDENTITY & BRANDING",     year:"2025", title:"FRISCH UF DE TISCH GMBH", img:`${D}frisch-uf-de-tisch-brand-identity-2025.webp` },
  { cat:"IDENTITY & BRANDING",     year:"2024", title:"BAYTEC SOLUTIONS AG",      img:`${F}baytec-solutions-brand-identity-2024.webp` },
  { cat:"PRINT MEDIA",             year:"2023", title:"INEA ENGINEERING AG",      img:`${F}inea-engineering-print-design-2023.webp` },
  { cat:"IDENTITY & BRANDING",     year:"2024", title:"DA PEPINO",                img:`${F}da-pepino-logo-branding-2024.webp` },
  { cat:"SOCIAL MEDIA",            year:"2024", title:"ARISO RESTAURANT",         img:`${F}ariso-restaurant-social-media-2024.webp` },
  { cat:"ADVERTISING",             year:"2024", title:"ALPENIQ CAMPAIGN",         img:`${F}1085-studio-advertising-campaign-2024.webp` },
];

// ─── Photography portfolio — exact images from masonry ────────────────────────
export const PHOTO_PORTFOLIO = [
  { img:`${P}portrait-indoor-chandelier-2024.webp` },
  { img:`${P}street-portrait-rapper-car-2024.webp` },
  { img:`${P}ivdimetaj-truck-photography-2023.webp` },
  { img:`${P}bmw-teal-automotive-2024.webp` },
  { img:`${P}portrait-dark-sitting-2024.webp` },
  { img:`${P}portrait-studio-2024.webp` },
  { img:`${P}portrait-bw-window-2024.webp` },
  { img:`${P}building-architecture-2024.webp` },
  { img:`${P}bmw-pink-grille-2024.webp` },
  { img:`${P}bmw-wheel-white-2024.webp` },
  { img:`${P}bmw-red-black-2024.webp` },
  { img:`${P}ivdimetaj-green-trucks-2024.webp` },
  { img:`${P}bmw-black-wheel-2024.webp` },
  { img:`${P}rapper-dark-portrait-2024.webp` },
  { img:`${P}concert-rapper-stage-blue-2024.webp` },
  { img:`${P}badmomzjay-neon-concert-2024.webp` },
  { img:`${P}bmw-m3-white-rear-2024.webp` },
  { img:`${P}concert-singer-spotlight-2024.webp` },
  { img:`${P}concert-bw-performer-2024.webp` },
  { img:`${P}road-asphalt-bw-2024.webp` },
  { img:`${P}rapper-stage-performer-2024.webp` },
  { img:`${P}concert-singer-rapper-2024.webp` },
  { img:`${P}photographer-bts-2024.webp` },
  { img:`${P}portrait-seated-2024.webp` },
];

// ─── Design FAQ ───────────────────────────────────────────────────────────────
export const DESIGN_FAQ = [
  { q:"WHAT DESIGN SERVICES DO YOU OFFER?",           a:"Brand identity, logo design, print media, merchandise and packaging, social media content, and advertising campaigns." },
  { q:"DO YOU CREATE FULL BRAND IDENTITIES OR JUST LOGOS?", a:"Both. I offer full brand identity systems — including typography, colour palettes, and usage guidelines — as well as standalone logo projects." },
  { q:"WHAT DELIVERABLES WILL WE RECEIVE?",           a:"Final files in all necessary formats: vector (AI, EPS, SVG), rasterized (PNG, JPG, PDF). Print-ready files where applicable." },
  { q:"CAN YOU HANDLE PRINT PRODUCTION?",             a:"Yes. I work with trusted print partners and can manage the full production process from design to delivery." },
  { q:"HOW MANY REVISION ROUNDS ARE INCLUDED?",      a:"Two revision rounds are included as standard. Additional rounds can be arranged." },
  { q:"WHAT IS THE TYPICAL TIMELINE?",               a:"A logo project typically takes 1–2 weeks. Full brand identity systems range from 3–6 weeks depending on scope." },
];

// ─── Photography FAQ ──────────────────────────────────────────────────────────
export const PHOTO_FAQ = [
  { q:"WHAT TYPES OF PHOTOGRAPHY DO YOU OFFER?",     a:"Event, product, editorial, and lifestyle photography with consistent art direction." },
  { q:"DO YOU PROVIDE ART DIRECTION AND STYLING?",   a:"Yes. Art direction, styling guidance, and shot planning can be part of the project." },
  { q:"CAN YOU SHOOT ON LOCATION OR IN A STUDIO?",   a:"Both. I work on-location across Switzerland and can arrange studio setups for product and portrait shoots." },
  { q:"HOW ARE THE IMAGES DELIVERED?",               a:"High-resolution files via download link, organized and retouched. Typically delivered within 5–10 business days." },
  { q:"DO YOU HANDLE RETOUCHING?",                   a:"Yes. Basic retouching is included. Advanced editing or composite work is available at an additional rate." },
  { q:"WHAT IS THE TYPICAL TURNAROUND TIME?",        a:"Standard delivery is 7–10 business days. Rush delivery available on request." },
];

// ─── Landing portfolio ────────────────────────────────────────────────────────
export const PORTFOLIO = [
  { cat:"PHOTOGRAPHY",       year:"2024", title:"RAPIDE X ALAWI",      img:`${F}rapidexalawi-event-photography-2024.webp` },
  { cat:"PRINT DESIGN",      year:"2023", title:"INEA ENGINEERING AG",  img:`${F}inea-engineering-print-design-2023.webp` },
  { cat:"EVENT PHOTOGRAPHY", year:"2025", title:"KEHLANI CRASH TOUR",   img:`${F}kehlani-crash-tour-event-photography-2025.webp` },
  { cat:"IDENTITY",          year:"2024", title:"BAYTEC SOLUTIONS AG",  img:`${F}baytec-solutions-brand-identity-2024.webp` },
  { cat:"SOCIAL MEDIA",      year:"2024", title:"ARISO",                img:`${F}ariso-restaurant-social-media-2024.webp` },
  { cat:"ADVERTISING",       year:"2024", title:"ALPENIQ",              img:`${F}1085-studio-advertising-campaign-2024.webp` },
  { cat:"LOGO & BRANDING",   year:"2024", title:"DA PEPINO",            img:`${F}da-pepino-logo-branding-2024.webp` },
  { cat:"WEB DEVELOPMENT",   year:"2025", title:"SANIVIS AG",           img:`${F}sanivis-web-development-2025.webp` },
];

// ─── Brand Marquee ────────────────────────────────────────────────────────────
export const BRANDS = [
  { name:"NWS\nGRUPPE",           font:"'Arial Black',Arial,sans-serif", w:900, sz:"13px", ls:"0.05em", lh:1.2 },
  { name:"STÜSSI",                font:"'Arial Black',Arial,sans-serif", w:900, sz:"20px", ls:"0.02em" },
  { name:"ARiSO",                 font:"Arial,sans-serif",               w:300, sz:"22px", ls:"0.08em" },
  { name:"BayTec+",               font:"Arial,sans-serif",               w:700, sz:"20px", ls:"0" },
  { name:"da pepino",             font:"Georgia,serif",                  w:400, sz:"19px", ls:"0.03em", it:true },
  { name:"EMZET\nTRANSPORT",     font:"Arial,sans-serif",               w:900, sz:"12px", ls:"0.06em", lh:1.4 },
  { name:"FRISCH\nuf de\nTISCH", font:"'Arial Black',Arial,sans-serif",  w:900, sz:"14px", ls:"0.02em", lh:1.2 },
  { name:"Gasthof\nHirsche",      font:"Georgia,serif",                  w:400, sz:"14px", ls:"0.02em", it:true, lh:1.3 },
];

// ─── Specializations ──────────────────────────────────────────────────────────
export const SPECS = [
  { title:"STRATEGY & BRANDING",    sub:null,              body:"Positioning, messaging, and full identity systems. I define how your brand looks, feels, and speaks, building a foundation that is distinct, scalable, and consistent. From naming and brand architecture to tone of voice and visual direction — every decision is intentional and built to last." },
  { title:"DESIGN & VISUAL IDENTITY",sub:null,             body:"Logo design, typography systems, color palettes, and complete visual languages. I craft identities that are immediately recognizable, versatile across all touchpoints, and engineered for real-world use — print, digital, environmental." },
  { title:"DIGITAL",                 sub:"Web Development",body:"Fast, modern websites built with clean code and purposeful design. I develop bespoke web experiences — from landing pages to full brand platforms — focused on performance, accessibility, and conversion. Every site I build is optimized, responsive, and designed to stand out." },
  { title:"CONTENT CREATION",        sub:"Photo/Video",    body:"Commercial photography and videography that captures the essence of a brand. From product shoots and campaign imagery to event coverage and reels — I produce content that is visually cohesive, platform-ready, and crafted to perform." },
  { title:"CAMPAIGNS & SOCIAL MEDIA",sub:null,             body:"Strategic content planning, creative direction, and execution for social platforms. I design campaigns that cut through noise — with consistent visuals, compelling copy, and a clear message that resonates with your audience and drives measurable results." },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { end:120, suffix:"+", l:"creative assets delivered" },
  { end:15,  suffix:"+", l:"industries served" },
  { end:85,  suffix:"%", l:"returning clients &\nlong-term collaborations" },
  { end:40,  suffix:"+", l:"partners &\ncollaborators" },
];
