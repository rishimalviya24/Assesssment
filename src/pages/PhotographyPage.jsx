import { useState, useEffect, useMemo } from "react";

const PHOTO_FAQ_ITEMS = [
  { q: "WHAT TYPES OF PHOTOGRAPHY DO YOU OFFER?", a: "I cover portraits, event coverage, brand lifestyle shoots, automotive, and editorial-style campaigns." },
  { q: "DO YOU PROVIDE ART DIRECTION AND STYLING?", a: "Yes, I can support concepting, shot planning, references, and on-set visual direction." },
  { q: "CAN YOU SHOOT ON LOCATION OR IN A STUDIO?", a: "Both options are available depending on the look, logistics, and production requirements." },
  { q: "HOW ARE THE IMAGES DELIVERED?", a: "Final images are delivered digitally in web and high-resolution formats through a private gallery or link." },
  { q: "DO YOU HANDLE RETOUCHING?", a: "Yes, selected images include professional color and retouching based on project scope." },
  { q: "WHAT IS THE TYPICAL TURNAROUND TIME?", a: "Most photo projects are delivered within 3-10 business days depending on quantity and post-production." },
];

// Exact 64 images — P1.jpg through P64.jpg
const PHOTO_LOCKED_IMAGES = Array.from({ length: 64 }, (_, index) =>
  `https://1085.studio/assets/images/photo/P${index + 1}.jpg`,
);

export default function PhotographyPage() {
  const [photoColumnCount, setPhotoColumnCount] = useState(1);

  // Exact responsive column logic from source
  useEffect(() => {
    const getColumnCount = () => {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };
    const updateColumns = () => setPhotoColumnCount(getColumnCount());
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Exact column distribution logic from source
  const photoColumns = useMemo(() => {
    const cols = Array.from({ length: photoColumnCount }, () => []);
    PHOTO_LOCKED_IMAGES.forEach((src, index) => {
      cols[index % photoColumnCount].push({ src, index: index + 1 });
    });
    return cols;
  }, [photoColumnCount]);

  return (
    <div className="w-full bg-black text-white px-5 md:px-8 xl:px-16 pt-[52px] overflow-hidden">
      <section id="photo-portfolio" className="pt-32 md:pt-[20vh]">
        <div className="mx-auto max-w-6xl px-2 md:px-8">
          <h2 className="text-3xl md:text-5xl font-[600] uppercase mb-2">PHOTOGRAPHY PORTFOLIO</h2>
          <p className="text-sm mb-32">* selected work</p>
        </div>

        {/* Masonry grid — exact from source */}
        <div
          id="masonryGrid"
          role="list"
          aria-label="Photography portfolio items"
          className="mx-auto max-w-6xl px-2 md:px-8 grid gap-x-4 gap-y-4 mb-16"
          style={{ gridTemplateColumns: `repeat(${photoColumnCount}, minmax(0, 1fr))` }}
        >
          {photoColumns.map((column, columnIndex) => (
            <div key={`photo-column-${columnIndex + 1}`} className="flex flex-col space-y-4">
              {column.map((item) => (
                <figure key={`photo-${item.index}`} role="listitem" className="mb-4">
                  <img
                    src={item.src}
                    alt={`Portfolio photo ${item.index} - Alpeniq`}
                    loading={item.index <= 4 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="block w-full h-auto"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>

        {/* FAQ — exact from source */}
        <section id="photo-faq" className="bg-black text-white py-24 md:py-[16vh] border-t border-white/10">
          <div className="mx-auto max-w-6xl px-2 md:px-8">
            <h3 className="text-2xl md:text-4xl font-[600] uppercase mb-8">FAQ</h3>
            <div className="mt-0 border-t border-zinc-800">
              {PHOTO_FAQ_ITEMS.map((item) => (
                <details key={item.q} className="border-b border-zinc-800 group">
                  <summary className="list-none cursor-pointer py-5 md:py-6 text-sm uppercase tracking-wide">
                    <span className="text-sm text-zinc-300 group-open:rotate-90 transition-transform">
                      &#9654;
                    </span>
                    <span className="ml-3 text-sm uppercase tracking-wide">
                      {item.q}
                    </span>
                  </summary>
                  <p className="mt-3 pb-6 pl-8 md:pl-10 text-sm text-gray-400 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer visual — exact CSS from source, "Alpeniq" in place of "1085 STUDIO" */}
        <section className="-mx-5 md:-mx-8 xl:-mx-16 h-[100svh] w-screen relative overflow-hidden border-t border-zinc-700">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_25%,#c7b28f_0%,#9a845f_35%,#6a5a3f_60%,#3f3527_100%)]" />
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(130deg,rgba(255,255,255,0.15)_0%,transparent_30%,transparent_72%,rgba(0,0,0,0.35)_100%)]" />

          <div className="absolute inset-x-[22%] md:inset-x-[26%] top-[14%] bottom-[16%] bg-[linear-gradient(140deg,#d97735_0%,#c95f24_40%,#a8471d_100%)] rounded-[10px] shadow-[0_35px_80px_rgba(0,0,0,0.55)] overflow-hidden">
            <div className="absolute inset-0 opacity-80 bg-[repeating-linear-gradient(8deg,rgba(255,255,255,0.9)_0px,rgba(255,255,255,0.9)_14px,transparent_14px,transparent_34px)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.22)_50%,transparent_100%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-zinc-100/90 text-2xl md:text-4xl font-semibold tracking-tight">
                ALPENIQ
              </p>
            </div>
          </div>

          <div className="relative z-10 mx-auto px-2 md:px-8 py-6 flex flex-col h-full justify-end text-zinc-100">
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
