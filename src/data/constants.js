// ─── Portfolio Images ─────────────────────────────────────────────────────────
const BASE = "https://1085.studio/assets/images/front-portfolio/";

export const PORTFOLIO = [
  { cat:"PHOTOGRAPHY",       year:"2024", title:"RAPIDE X ALAWI",      img:`${BASE}rapidexalawi-event-photography-2024.webp` },
  { cat:"PRINT DESIGN",      year:"2023", title:"INEA ENGINEERING AG",  img:`${BASE}inea-engineering-print-design-2023.webp` },
  { cat:"EVENT PHOTOGRAPHY", year:"2025", title:"KHELANI CRASH TOUR",   img:`${BASE}kehlani-crash-tour-event-photography-2025.webp` },
  { cat:"IDENTITY",          year:"2024", title:"BAYTEC SOLUTIONS AG",  img:`${BASE}baytec-solutions-brand-identity-2024.webp` },
  { cat:"SOCIAL MEDIA",      year:"2024", title:"ARISO",                img:`${BASE}ariso-restaurant-social-media-2024.webp` },
  { cat:"ADVERTISING",       year:"2024", title:"Alpeniq",          img:`${BASE}1085-studio-advertising-campaign-2024.webp` },
  { cat:"LOGO & BRANDING",   year:"2024", title:"DA PEPINO",            img:`${BASE}da-pepino-logo-branding-2024.webp` },
  { cat:"WEB DEVELOPMENT",   year:"2025", title:"SANIVIS AG",           img:`${BASE}sanivis-web-development-2025.webp` },
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
  {
    title: "STRATEGY & BRANDING",
    sub: null,
    body: "Positioning, messaging, and full identity systems. I define how your brand looks, feels, and speaks, building a foundation that is distinct, scalable, and consistent. From naming and brand architecture to tone of voice and visual direction — every decision is intentional and built to last.",
  },
  {
    title: "DESIGN & VISUAL IDENTITY",
    sub: null,
    body: "Logo design, typography systems, color palettes, and complete visual languages. I craft identities that are immediately recognizable, versatile across all touchpoints, and engineered for real-world use — print, digital, environmental.",
  },
  {
    title: "DIGITAL",
    sub: "Web Development",
    body: "Fast, modern websites built with clean code and purposeful design. I develop bespoke web experiences — from landing pages to full brand platforms — focused on performance, accessibility, and conversion. Every site I build is optimized, responsive, and designed to stand out.",
  },
  {
    title: "CONTENT CREATION",
    sub: "Photo/Video",
    body: "Commercial photography and videography that captures the essence of a brand. From product shoots and campaign imagery to event coverage and reels — I produce content that is visually cohesive, platform-ready, and crafted to perform.",
  },
  {
    title: "CAMPAIGNS & SOCIAL MEDIA",
    sub: null,
    body: "Strategic content planning, creative direction, and execution for social platforms. I design campaigns that cut through noise — with consistent visuals, compelling copy, and a clear message that resonates with your audience and drives measurable results.",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { end: 120, suffix: "+", l: "creative assets delivered" },
  { end: 15,  suffix: "+", l: "industries served" },
  { end: 85,  suffix: "%", l: "returning clients &\nlong-term collaborations" },
  { end: 40,  suffix: "+", l: "partners &\ncollaborators" },
];

// ─── Noise SVG film grain ─────────────────────────────────────────────────────
const noiseSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='300' height='300' filter='url(#n)' opacity='0.15'/></svg>`;
export const NOISE = `data:image/svg+xml;base64,${btoa(noiseSVG)}`;
