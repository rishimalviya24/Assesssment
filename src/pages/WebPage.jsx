import { useState, useEffect, useMemo } from "react";

const WEB_ASSET_BASE = "https://1085.studio/admin/storage/uploads";

// EXACT image URLs + aspect ratios from DevTools inspection of 1085.studio/web
// Each ratio taken directly from style="aspect-ratio:W/H" on the <figure> element
const WEB_SOURCE_POOL = [
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/25/menstudio_uid_699f2edcdfc8b.webp",
    aspectRatio: "4000/2667",
    domain: "menstudio.ch",
    link: "https://menstudio.ch",
    title: "MENS STUDIO",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/sanivis-mockup_uid_6961fe75ed22a_uid_697f2d164df9d.webp",
    aspectRatio: "3000/2000",
    domain: "sanivis-gruppe.ch",
    link: "https://sanivis-gruppe.ch",
    title: "SANIVIS AG",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/bayar-energiech_uid_697f2b45835a5.webp",
    aspectRatio: "4000/3000",
    domain: "bayar-energie.ch",
    link: "https://bayar-energie.ch",
    title: "BAYAR ENERGIE AG",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/dapepino-mockup_uid_6961fe75ed3a4_uid_697f2cc977659.webp",
    aspectRatio: "3840/2560",
    domain: "dapepino.ch",
    link: "https://dapepino.ch",
    title: "DA PEPINO",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/wireframe-9_uid_6961fc32a2fcf_uid_697f2c9b9383c.webp",
    aspectRatio: "2200/1300",
    domain: "ppgimmo.ch",
    link: "https://ppgimmo.ch",
    title: "PRIME PROPERTY GROUP",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/baytec-mockup_uid_6961fe7738f48_uid_697f2ce8240b3.webp",
    aspectRatio: "3840/2560",
    domain: "bay-tec.ch",
    link: "https://bay-tec.ch",
    title: "BAYTEC SOLUTIONS",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/stussi-mockup_uid_6961fe7999c12_uid_697f2c126fe36.webp",
    aspectRatio: "5000/3750",
    domain: "stuessi-qs-management.ch",
    link: "https://stuessi-qs-management.ch",
    title: "STÜSSI QS",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/emzet-mockup_uid_6961fe74f1d15_uid_697f2caf364bf.webp",
    aspectRatio: "3840/2560",
    domain: "emzet.ch",
    link: "https://emzet.ch",
    title: "EMZET TRANSPORT",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/bunzen-mockup_uid_6961fe75d3e0f_uid_697f2cd839198.webp",
    aspectRatio: "3840/2560",
    domain: "hirschen-buenzen.ch",
    link: "https://hirschen-buenzen.ch",
    title: "BÜNZEN RESTAURANT",
  },
  {
    url: "https://1085.studio/admin/storage/uploads/2026/02/01/1085-mockup_uid_6961fe78b8087_uid_697f2cf31c692.webp",
    aspectRatio: "4500/3000",
    domain: "1085.studio",
    link: "https://1085.studio",
    title: "1085 STUDIO",
  },
];

export default function WebPage() {
  const [webReferenceProjects, setWebReferenceProjects] = useState([]);
  const [webQuery, setWebQuery] = useState("");
  const [webSort, setWebSort] = useState("modified-desc");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://1085.studio/api/web.php");
        if (!res.ok) return;
        const data = await res.json();
        const records = Array.isArray(data) ? data
          : Array.isArray(data?.entries) ? data.entries
          : Array.isArray(data?.items) ? data.items : [];
        const entries = records.map((item, i) => {
          const link = item?.link || "";
          const title = item?.img?.title || item?.description || `Project ${i + 1}`;
          const domain = link ? link.replace(/^https?:\/\//i, "").replace(/\/$/, "") : title;
          const imagePath = item?.img?.path || "";
          const w = item?.img?.width || 4000;
          const h = item?.img?.height || 2667;
          return {
            id: i + 1, title, domain, link,
            imageUrl: imagePath ? `${WEB_ASSET_BASE}${imagePath}` : "",
            aspectRatio: `${w}/${h}`,
            _modified: Number(item?._modified) || 0,
          };
        }).filter(x => x.imageUrl);
        if (entries.length > 0) setWebReferenceProjects(entries);
      } catch {}
    };
    load();
  }, []);

  const baseWebProjects = useMemo(() => {
    if (webReferenceProjects.length > 0) return webReferenceProjects;
    return WEB_SOURCE_POOL.map((p, i) => ({
      id: i + 1,
      title: p.title,
      domain: p.domain,
      link: p.link,
      imageUrl: p.url,
      aspectRatio: p.aspectRatio,
      _modified: WEB_SOURCE_POOL.length - i,
    }));
  }, [webReferenceProjects]);

  const visibleWebProjects = useMemo(() => {
    const q = webQuery.trim().toLowerCase();
    const filtered = baseWebProjects.filter(p =>
      `${p.title} ${p.domain}`.toLowerCase().includes(q)
    );
    if (webSort === "modified-asc") return [...filtered].sort((a, b) => a._modified - b._modified);
    if (webSort === "name-asc")     return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    if (webSort === "name-desc")    return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    return [...filtered].sort((a, b) => b._modified - a._modified);
  }, [baseWebProjects, webQuery, webSort]);

  return (
    <div className="w-full bg-black text-white px-5 md:px-8 xl:px-16 pt-[52px]">

      {/* Float-zoom keyframe — exact from 1085.studio */}
      <style>{`
        @keyframes float-zoom {
          0%   { transform: scale(1.00) translate3d(  0%,    0%, 0px); }
          25%  { transform: scale(1.06) translate3d( 1.5%, -1.5%, 0px); }
          50%  { transform: scale(1.08) translate3d(-1.0%,  1.0%, 0px); }
          75%  { transform: scale(1.06) translate3d( 0.5%,  1.5%, 0px); }
          100% { transform: scale(1.00) translate3d(  0%,    0%, 0px); }
        }
        .project-image {
          will-change: transform;
          animation: float-zoom 24s ease-in-out infinite;
          animation-play-state: paused;
        }
        .project-card:hover .project-image,
        .project-card:focus-within .project-image {
          animation-play-state: running;
        }
      `}</style>

      <section id="web-portfolio" className="bg-black text-white pt-32 md:pt-[20vh]">
        <div className="mx-auto max-w-6xl px-2 md:px-8">
          <h2 className="text-3xl md:text-5xl font-[600] uppercase mb-2">WEB DEVELOPMENT</h2>
          <p className="text-sm mb-32">* selected work</p>

          {/* Search + Sort */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <input
                type="search"
                value={webQuery}
                onChange={e => setWebQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full md:w-96 border px-4 py-2 text-sm focus:outline-none transition uppercase bg-black text-white"
                aria-label="Search web projects"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-gray-400 uppercase whitespace-nowrap">
                SHOWING {visibleWebProjects.length} OF {baseWebProjects.length} PROJECTS
                {webQuery.trim() ? ` ("${webQuery.trim().toUpperCase()}")` : ""}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase text-gray-400 whitespace-nowrap">Sort:</span>
                <select
                  value={webSort}
                  onChange={e => setWebSort(e.target.value)}
                  className="border px-3 py-2 text-xs uppercase focus:outline-none transition bg-black text-white"
                >
                  <option value="modified-desc">MODIFIED (NEWEST)</option>
                  <option value="modified-asc">MODIFIED (OLDEST)</option>
                  <option value="name-asc">NAME (A-Z)</option>
                  <option value="name-desc">NAME (Z-A)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Projects list — exact aspect ratio per image, space-y-20 gap same as source */}
          <div id="webProjects" className="space-y-20 md:space-y-24 w-full mb-16">
            {visibleWebProjects.map(project => (
              <article
                key={project.id}
                className="w-full project-card web-project-item uppercase"
                tabIndex={0}
              >
                {/* figure with EXACT per-image aspect ratio from DevTools */}
                <figure
                  className="relative w-full overflow-hidden bg-neutral-900/40 project-figure full-bleed"
                  style={{ aspectRatio: project.aspectRatio || "4000/2667" }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="project-image w-full h-full object-cover transition duration-300 ease-out"
                    onError={e => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'%3E%3Crect fill='%23111' width='1600' height='900'/%3E%3C/svg%3E";
                    }}
                  />
                </figure>

                {/* Domain left + VISIT right */}
                <div className="max-w-6xl mx-auto px-2 md:px-6">
                  <div className="mt-4 flex items-center justify-between text-[11px] md:text-xs tracking-[0.08em] uppercase font-[400]">
                    <span>{project.domain}</span>
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-gray-400 transition"
                    >
                      VISIT
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Footer — NO extra gap/space below */}
        <section className="-mx-5 md:-mx-8 xl:-mx-16 relative text-white h-[90vh] uppercase text-sm overflow-hidden [text-shadow:0px_1px_2px_rgba(0,0,0,0.15),0px_2px_4px_rgba(0,0,0,0.15)]">
          <div className="absolute inset-0">
            <img
              src="https://1085.studio/assets/images/1085-studio-web-footer-background.webp"
              alt="Alpeniq web footer"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-10" />
          </div>
          <div className="relative z-10 px-2 md:px-8 pb-4 md:pb-6 flex flex-col h-full justify-end text-xs md:text-sm tracking-wide leading-tight">
            <div className="w-full flex flex-wrap justify-between items-end gap-x-4 gap-y-1 font-[400]">
              <p className="hover:text-gray-400 transition cursor-pointer">INSTAGRAM</p>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-gray-400 transition">BACK TO TOP ^</button>
            </div>
            <div className="w-full mt-1 flex flex-wrap justify-between items-end gap-x-4 gap-y-1 font-[400]">
              <p>© 2026, Alpeniq</p>
              <div className="inline-flex items-center gap-2 md:gap-3">
                <span className="hover:text-gray-400 transition cursor-pointer">COOKIES</span>
                <span className="hover:text-gray-400 transition cursor-pointer normal-case">Imprint &amp; Privacy</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
