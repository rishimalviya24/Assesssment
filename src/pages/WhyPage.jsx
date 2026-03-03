import BrandMarquee from '../components/BrandMarquee';
import CountUp from '../components/CountUp';
import { STATS } from '../data/constants';

export default function WhyPage() {
  return (
    <section id="why" className="bg-black">

      {/* ── WHY 1085 header ── */}
      <div className="flex justify-between items-start px-5 sm:px-7 pt-9 pb-7 border-b border-[#1a1a1a]">
        <h2 className="text-[clamp(44px,7vw,84px)] font-black tracking-[-0.02em] leading-none text-white m-0">WHY 1085</h2>
        <span className="text-[clamp(44px,7vw,84px)] font-black tracking-[-0.02em] leading-none text-white">S-1</span>
      </div>

      {/* ── Right-side text blocks ── */}
      <div className="flex justify-end px-5 sm:px-7 pt-14 pb-0">
        <div className="w-full max-w-[540px]">
          <div className="mb-14">
            <h3 className="text-[17px] font-bold text-white mb-4" style={{fontFamily:'Arial,sans-serif'}}>One Partner</h3>
            <p className="text-[14.5px] leading-[1.82] text-white/80" style={{fontFamily:'Arial,sans-serif',fontWeight:400}}>
              I am Alan, a Zurich-based informatics and design student, freelance creative technologist, and founder of 1085 Studio. I work at the intersection of brand, design, and technology, shaping digital identities through branding, UI/UX design, web development, and photography. My focus is on building clear, modern websites and visual systems that give brands direction, presence, and measurable impact — from first idea to final execution.
            </p>
          </div>
          <div className="mb-14">
            <h3 className="text-[17px] font-bold text-white mb-4" style={{fontFamily:'Arial,sans-serif'}}>One Vision</h3>
            <p className="text-[14.5px] leading-[1.82] text-white/80" style={{fontFamily:'Arial,sans-serif',fontWeight:400}}>
              Strong work starts with a clear point of view. I set a single, guiding vision and lead projects with a decisive creative and technical direction. By connecting strategy, design, development, and AI-supported workflows, I create cohesive digital experiences that feel intentional, perform reliably, and remain relevant across platforms, products, and evolving technologies.
            </p>
          </div>
          <h3 className="text-[17px] font-bold text-white mb-9" style={{fontFamily:'Arial,sans-serif'}}>Brands that trust me</h3>
        </div>
      </div>

      {/* ── Brand Marquee ── */}
      <BrandMarquee />

      {/* ── NO BOUNDARIES section — full viewport height ── */}
      <div className="bg-black min-h-screen flex flex-col justify-end px-5 sm:px-7 pt-14 pb-16 sm:pb-20">

        {/* ✅ NO BOUNDARIES + S-0 on THE SAME LINE — flex justify-between */}
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="font-black leading-none text-white m-0 text-[clamp(28px,4.8vw,64px)] tracking-[-0.01em]">
            NO BOUNDARIES
          </h2>
          <span className="font-black leading-none text-white text-[clamp(28px,4.8vw,64px)] tracking-[-0.02em] flex-shrink-0 ml-4">
            S-0
          </span>
        </div>

        <p className="text-[14.5px] leading-[1.75] text-white/80 max-w-[460px] mb-16" style={{fontFamily:'Arial,sans-serif',fontWeight:400}}>
          Zero isn't empty, it's potential. I design with zero compromise and zero noise: sharp identities, fast websites, and content that moves people and metrics.
        </p>

        {/* Stats grid */}
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="font-black text-white leading-none mb-2.5 text-[clamp(32px,4.5vw,58px)] tracking-[-0.02em]">
                <CountUp end={s.end} suffix={s.suffix} duration={2200} />
              </div>
              <div className="text-[13px] text-white/70 leading-[1.5] whitespace-pre-line" style={{fontFamily:'Arial,sans-serif',fontWeight:400}}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="text-[11px] text-white/30 leading-[1.6]" style={{fontFamily:'Arial,sans-serif'}}>
          Selected metrics.<br />Last updated: Aug 2025.
        </div>
      </div>

    </section>
  );
}
