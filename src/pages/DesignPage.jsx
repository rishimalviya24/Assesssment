import { useState, useMemo } from "react";

const TAGS = ["IDENTITY & BRANDING", "PRINT MEDIA", "MERCHANDISE & PACKAGING"];
const DESIGN_TAG_TO_SLUG = {
  "IDENTITY & BRANDING": "logo-branding",
  "PRINT MEDIA": "print-media",
  "MERCHANDISE & PACKAGING": "merchandise-packaging",
};

const FAQ_ITEMS = [
  { q: "WHAT DESIGN SERVICES DO YOU OFFER?", a: "I cover branding, visual identity, print media, packaging, and digital-first design systems tailored to business goals." },
  { q: "DO YOU CREATE FULL BRAND IDENTITIES OR JUST LOGOS?", a: "Both are possible. Most projects combine strategy, logo, typography, color, and practical usage guidelines." },
  { q: "WHAT DELIVERABLES WILL WE RECEIVE?", a: "You receive organized final files for digital and print, plus editable source files and handover documentation." },
  { q: "CAN YOU HANDLE PRINT PRODUCTION?", a: "Yes. I can prepare print-ready files and coordinate with print vendors for material, finish, and quality checks." },
  { q: "HOW MANY REVISION ROUNDS ARE INCLUDED?", a: "Most engagements include defined revision rounds per phase, with scope and timing aligned before kickoff." },
  { q: "WHAT IS THE TYPICAL TIMELINE?", a: "Small projects usually take 1-3 weeks, while full identity and rollout work can take 4-8+ weeks." },
];

// Exact 69 projects with real admin storage URLs — copied 1:1 from source
const DESIGN_FALLBACK_PROJECTS = [
  { id: 1, name: "schigu openair", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/schigu-openair-2025_uid_69144f2ac1345.webp", _created: 1762942053 },
  { id: 2, name: "ariso.uno", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/ariso-2025_uid_6914641cc4a2d.webp", _created: 1762942136 },
  { id: 3, name: "84 Studio", year: "2022", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/84-studio-2022_uid_6914641cc0d67.webp", _created: 1762951064 },
  { id: 4, name: "BAYTEC SOLUTIONS AG", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/baytec-solutions-ag-2024-1_uid_6914641cd04ac.webp", _created: 1762951160 },
  { id: 5, name: "BAYTEC SOLUTIONS AG", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/baytec-solutions-ag-2024_uid_6914641ce3ff8.webp", _created: 1762951237 },
  { id: 6, name: "BYTEREON", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/bytereon-2024_uid_6914641cdb6ef.webp", _created: 1762951289 },
  { id: 7, name: "DA PEPINO", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/da-pepino-2025-1_uid_6914641d04043.webp", _created: 1762951381 },
  { id: 8, name: "DA PEPINO", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/da-pepino-2025_uid_6914641d09503.webp", _created: 1762951483 },
  { id: 9, name: "DARE", year: "2023", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/dare-2023_uid_6914641d0cc05.webp", _created: 1762951512 },
  { id: 10, name: "EMZET TRANSPORT GMBH", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/emzet-transport-2025_uid_6914641d1e461.webp", _created: 1762951588 },
  { id: 11, name: "FRISCH UF DE TISCH GMBH", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/frischufdetisch-2025_uid_6914641d29412.webp", _created: 1762951627 },
  { id: 12, name: "GALAXY CARS", year: "2022", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/galaxycars-2022_uid_6914641d3251a.webp", _created: 1762951696 },
  { id: 13, name: "hypro24", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/hypro24-2024_uid_6914641d3d3cd.webp", _created: 1762951719 },
  { id: 14, name: "INEA ENGINEERING AG", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/inea-engineering-ag-2024_uid_6914641d46516.webp", _created: 1762951753 },
  { id: 15, name: "JAMIL CLOTHING", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/jamil-clothing-2024_uid_6914641d54c64.webp", _created: 1762951778 },
  { id: 16, name: "JOYERIA", year: "2023", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/joyeria-2023_uid_6914641d51baa.webp", _created: 1762951803 },
  { id: 17, name: "KHABBAZEH", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/khabbazeh-2024_uid_6914641d68a36.webp", _created: 1762951831 },
  { id: 18, name: "ONEFILMS", year: "2022", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/onefilms-2022_uid_6914641d65567.webp", _created: 1762951858 },
  { id: 19, name: "PPG AG", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/ppg-ag-2025_uid_6914641d72ff1.webp", _created: 1762951937 },
  { id: 20, name: "ZOK", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/prod-by-zok-2025_uid_6914641d8661e.webp", _created: 1762951965 },
  { id: 21, name: "PRUNUA", year: "2023", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/prunua-2024_uid_6914641d85ddc.webp", _created: 1762951991 },
  { id: 22, name: "qais", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/qais-2024_uid_6914641d8f66e.webp", _created: 1762952018 },
  { id: 23, name: "ROD", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/rod-2024_uid_6914641d98e5f.webp", _created: 1762952075 },
  { id: 24, name: "HSBLB", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/scbl-2024_uid_6914641daae33.webp", _created: 1762952109 },
  { id: 25, name: "ZIMMERMANN", year: "2024", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/zimmermann-2024_uid_6914641dc6810.webp", _created: 1762952136 },
  { id: 26, name: "Alpeniq", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/1085-studio-2024_uid_6914641b67443.webp", _created: 1762952206 },
  { id: 27, name: "Alpeniq", year: "2025", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/1085-studio-2025_uid_6914641b79855.webp", _created: 1763385630 },
  { id: 28, name: "Amora Lounge", year: "2023", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/amora-lounge-2023_uid_6914641b857df.webp", _created: 1763385695 },
  { id: 29, name: "Bayar GmbH", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/bayar-gmbh-2024_uid_6914641b85bfc.webp", _created: 1763385786 },
  { id: 30, name: "BayTec Solutions GmbH", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/baytec-solutions-ag-2024_uid_6914641b92d45.webp", _created: 1763385891 },
  { id: 31, name: "Bytereon", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/bytereon-2024_uid_6914641ba7229.webp", _created: 1763385957 },
  { id: 32, name: "Cantieni", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/cantieni-2024_uid_6914641bb6d98.webp", _created: 1763386073 },
  { id: 33, name: "Choli - Fine Food GmbH", year: "2022", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/choli-fine-food-2022-1_uid_6914641bc6bb6.webp", _created: 1763386196 },
  { id: 34, name: "Choli - Fine Food GmbH", year: "2022", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/choli-fine-food-2022_uid_6914641bd2b78.webp", _created: 1763386236 },
  { id: 35, name: "DA PEPINO - YAKIN ARENA", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/da-pepino-yakin-arena-2024_uid_6914641be40dc.webp", _created: 1763387008 },
  { id: 36, name: "Da pepino", year: "2025", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/dapepino-2025_uid_691b2695d1b0e.png", _created: 1763387065 },
  { id: 37, name: "Da pepino", year: "2025", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/da-pepino-2025-2_uid_6914641c05463.webp", _created: 1763387146 },
  { id: 38, name: "Emzet Transport GmbH", year: "2025", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/emzet-transport-2025_uid_6914641c206da.webp", _created: 1763387211 },
  { id: 39, name: "Galaxy Cars", year: "2022", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/galaxycars-2022_uid_6914641c245a9.webp", _created: 1763387270 },
  { id: 40, name: "HIJAMA FOR YOU", year: "2023", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/hijama-for-you-2023-1_uid_6914641c2c9c4.webp", _created: 1763387319 },
  { id: 41, name: "HIJAMA FOR YOU", year: "2023", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/hijama-for-you-2023_uid_6914641c37dcc.webp", _created: 1763387354 },
  { id: 42, name: "INEA ENGINEERING AG", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/inea-engineering-ag-2024-1_uid_6914641c45e7b.webp", _created: 1763387396 },
  { id: 43, name: "INEA ENGINEERING AG", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/inea-engineering-ag-2024-2_uid_6914641c4d1ea.webp", _created: 1763387436 },
  { id: 44, name: "INEA ENGINEERING AG", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/inea-engineering-ag-2024_uid_6914641c535b1.webp", _created: 1763387469 },
  { id: 45, name: "MANYMEN", year: "2023", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/manymen-2023_uid_6914641c576df.webp", _created: 1763387510 },
  { id: 46, name: "RENOBINI GMBH", year: "2023", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/renobini-gmbh-2023_uid_6914641c664c1.webp", _created: 1763387533 },
  { id: 47, name: "SAFECUTS", year: "2023", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/safecuts-2023_uid_6914641c6fe93.webp", _created: 1763387584 },
  { id: 48, name: "scblb", year: "2025", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/scbl-2024_uid_6914641c96436.webp", _created: 1763387595 },
  { id: 49, name: "scblb", year: "2025", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/scbl-2024-1_uid_6914641c9451f.webp", _created: 1763387715 },
  { id: 50, name: "selma oil", year: "2023", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/selma-oil-2023_uid_6914641c9e8f9.webp", _created: 1763387765 },
  { id: 51, name: "STÜSSI QS MANAGEMENT", year: "2025", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/stussi-qs-management-2025_uid_6914641ca9a16.webp", _created: 1763387792 },
  { id: 52, name: "xenia cafe", year: "2024", categorySlug: "print-media", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/12/xenia-2024_uid_6914641cad007.webp", _created: 1763387818 },
  { id: 53, name: "Alpeniq", year: "2025", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/1085-studio-2025_uid_691b2b08cfb32.webp", _created: 1763387844 },
  { id: 54, name: "Alpeniq", year: "2025", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/1085-studio-2024_uid_691b2b08c9a05.webp", _created: 1763388222 },
  { id: 55, name: "Prunua", year: "2024", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/prunua-2024_uid_691b2b09bd9fc.webp", _created: 1763388266 },
  { id: 56, name: "Prunua", year: "2024", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/prunua-2024-3_uid_691b2b0988c77.webp", _created: 1763388278 },
  { id: 57, name: "Prunua", year: "2024", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/prunua-2024-2_uid_691b2b09348f2.webp", _created: 1763388292 },
  { id: 58, name: "Prunua", year: "2024", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/prunua-2024-1_uid_691b2b09153f0.webp", _created: 1763388304 },
  { id: 59, name: "RAPIDE HAESCHUTAPE", year: "2025", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/rapide-haeschutape-2025_uid_691b2b096be55.webp", _created: 1763388445 },
  { id: 60, name: "ALAWI ACHDAR", year: "2025", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/alawi-achdar-2022_uid_691b2b090f8f4.webp", _created: 1763388474 },
  { id: 61, name: "ALAWI LOBBY", year: "2025", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/alawi-lobby-2025_uid_691b2b08e165b.webp", _created: 1763388565 },
  { id: 62, name: "INEA ENGINEERING AG", year: "2024", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/inea-engineering-ag-2024_uid_691b2b08ef230.webp", _created: 1763388728 },
  { id: 63, name: "RAPIDE X ALAWI", year: "2024", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/rapide-x-alawi-2024_uid_691b2b098feb7.webp", _created: 1763388970 },
  { id: 64, name: "mulanero", year: "2021", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/mulanero-2023_uid_691b2b091bbd2.webp", _created: 1763389008 },
  { id: 65, name: "selma oil", year: "2023", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/selma-oil-2023_uid_691b2b09850d7.webp", _created: 1763389035 },
  { id: 66, name: "Prunua", year: "2024", categorySlug: "merchandise-packaging", imageUrl: "https://1085.studio/admin/storage/uploads/2025/11/17/prunua-2024-5_uid_691b2b0942aaa.webp", _created: 1763389166 },
  { id: 67, name: "lazzo lasagne", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2026/01/08/lazzolasagne-min_uid_695f708405cb7.png", _created: 1767862420 },
  { id: 68, name: "bayar energie ag", year: "2026", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2026/01/08/bayar-energie-ag-min_uid_695f75822077d.png", _created: 1767863689 },
  { id: 69, name: "lazzo lasagne", year: "2025", categorySlug: "logo-branding", imageUrl: "https://1085.studio/admin/storage/uploads/2026/01/08/lazzo-lasagne2-min_uid_695f7a7faef5d.png", _created: 1767864971 },
];

export default function DesignPage() {
  const [activeTag, setActiveTag] = useState("ALL");
  const [designSort, setDesignSort] = useState("year-desc");

  const baseDesignProjects = useMemo(() => DESIGN_FALLBACK_PROJECTS, []);

  // Exact sorting logic from source
  const visibleProjects = useMemo(() => {
    let filtered = baseDesignProjects;
    if (activeTag !== "ALL") {
      const slug = DESIGN_TAG_TO_SLUG[activeTag];
      filtered = filtered.filter((p) => p.categorySlug === slug);
    }
    const sorted = [...filtered];
    switch (designSort) {
      case "year-asc": sorted.sort((a, b) => (Number(a.year) || 0) - (Number(b.year) || 0)); break;
      case "name-asc": sorted.sort((a, b) => String(a.name).localeCompare(String(b.name))); break;
      case "name-desc": sorted.sort((a, b) => String(b.name).localeCompare(String(a.name))); break;
      case "created-desc": sorted.sort((a, b) => (Number(b._created) || 0) - (Number(a._created) || 0)); break;
      case "created-asc": sorted.sort((a, b) => (Number(a._created) || 0) - (Number(b._created) || 0)); break;
      default: sorted.sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));
    }
    return sorted;
  }, [activeTag, baseDesignProjects, designSort]);

  return (
    <div className="w-full bg-black text-white px-5 md:px-8 xl:px-16 pt-[52px] overflow-hidden">
      <section id="design-portfolio" className="pt-32 md:pt-[20vh]">
        <div className="mx-auto max-w-6xl px-2 md:px-8">
          <h2 className="text-3xl md:text-5xl font-[600] uppercase mb-2">DESIGN PORTFOLIO</h2>
          <p className="text-sm mb-32">* selected work</p>

          <div className="mb-8 space-y-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search projects..."
                className="w-full md:w-96 border px-4 py-2 text-sm focus:outline-none transition uppercase bg-black text-white"
                aria-label="Search portfolio projects"
                readOnly
              />
            </div>

            {/* Filter tags — exact from source */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveTag("ALL")}
                className={`px-4 py-2 border text-xs uppercase transition ${
                  activeTag === "ALL"
                    ? "border-white text-white"
                    : "border-zinc-700 text-zinc-300 hover:text-gray-400 hover:border-zinc-500"
                }`}
              >
                ALL
              </button>
              {TAGS.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 border text-xs uppercase transition ${
                    activeTag === tag
                      ? "border-white text-white"
                      : "border-zinc-700 text-zinc-300 hover:text-gray-400 hover:border-zinc-500"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-gray-400 uppercase whitespace-nowrap">
                SHOWING {visibleProjects.length} OF {baseDesignProjects.length} PROJECTS (
                {activeTag === "ALL" ? "ALL" : activeTag})
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase text-gray-400 whitespace-nowrap">Sort:</span>
                <select
                  value={designSort}
                  onChange={(e) => setDesignSort(e.target.value)}
                  className="border px-3 py-2 text-xs uppercase focus:outline-none transition bg-black text-white"
                >
                  <option value="year-desc">YEAR (NEWEST)</option>
                  <option value="year-asc">YEAR (OLDEST)</option>
                  <option value="name-asc">NAME (A-Z)</option>
                  <option value="name-desc">NAME (Z-A)</option>
                  <option value="created-desc">DATE ADDED (NEWEST)</option>
                  <option value="created-asc">DATE ADDED (OLDEST)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Grid — exact from source: grid-cols-2 sm:grid-cols-3 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 uppercase mb-16">
            {visibleProjects.map((project) => (
              <article key={project.id} className="group portfolio-item">
                <div className="relative w-full overflow-hidden aspect-[4/3] bg-neutral-900">
                  <img
                    src={project.imageUrl}
                    alt={`${project.name} (${project.year})`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23333' width='800' height='600'/%3E%3Ctext fill='%23999' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='system-ui' font-size='24'%3EImage not available%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs uppercase font-[400] mt-2">
                  <span>{project.name}</span>
                  <span>{project.year}</span>
                </div>
              </article>
            ))}
          </div>

          {/* FAQ — exact from source */}
          <section id="design-faq" className="bg-black text-white py-24 md:py-[16vh] border-t border-white/10">
            <div className="mx-auto max-w-6xl px-2 md:px-8">
              <h3 className="text-2xl md:text-4xl font-[600] uppercase mb-8">FAQ</h3>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item) => (
                  <details key={item.q} className="border-b border-white/10 pb-4">
                    <summary className="cursor-pointer text-sm uppercase tracking-wide py-2">
                      {item.q}
                    </summary>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Footer image — exact from source */}
        <section className="-mx-5 md:-mx-8 xl:-mx-16 relative text-white h-[90vh] uppercase text-sm overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://1085.studio/assets/images/1085-studio-design-footer-background.webp"
              alt="Alpeniq design footer background"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-10" />
          </div>
          <div className="relative z-10 mx-auto px-2 md:px-8 py-6 flex flex-col h-full justify-end text-white">
            <div className="w-full flex flex-wrap justify-between font-[400]">
              <p className="hover:text-gray-400 transition cursor-pointer">INSTAGRAM</p>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-gray-400 transition">BACK TO TOP ^</button>
            </div>
            <div className="w-full flex justify-between font-[400]">
              <p>© 2026, Alpeniq</p>
              <p>COOKIES _ IMPRINT &amp; PRIVACY</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
