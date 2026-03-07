import BrandMarquee from '../components/BrandMarquee';
import CountUp from '../components/CountUp';
import { STATS } from '../data/constants';

export default function WhyPage() {
  return (
    <section id="why" style={{ background:'#000' }}>

      {/* ── Header row ── */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'36px 28px 28px', borderBottom:'1px solid #1a1a1a' }}>
        <h2 style={{ fontSize:'clamp(40px,7vw,84px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1, color:'#fff', margin:0, fontFamily:'Switzer,sans-serif' }}>
          Why Alpeniq
        </h2>
        <span style={{ fontSize:'clamp(40px,7vw,84px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1, color:'#fff', fontFamily:'Switzer,sans-serif', flexShrink:0 }}>
          S-1
        </span>
      </div>

      {/* ── Right-aligned text blocks ── */}
      <div style={{ display:'flex', justifyContent:'flex-end', padding:'56px 28px 0' }}>
        <div style={{ width:'100%', maxWidth:540 }}>
          <div style={{ marginBottom:52 }}>
            <h3 style={{ fontSize:'clamp(18px,1.8vw,24px)', fontWeight:600, color:'#fff', marginBottom:16, fontFamily:'Switzer,sans-serif' }}>
              One Partner
            </h3>
            <p style={{ fontSize:14, lineHeight:1.82, color:'rgba(255,255,255,0.8)', margin:0, fontFamily:'Switzer,sans-serif', fontWeight:400 }}>
              I am Alan, a Zurich-based informatics and design student, freelance creative technologist, and founder of Alpeniq. I work at the intersection of brand, design, and technology, shaping digital identities through branding, UI/UX design, web development, and photography. My focus is on building clear, modern websites and visual systems that give brands direction, presence, and measurable impact — from first idea to final execution.
            </p>
          </div>
          <div style={{ marginBottom:52 }}>
            <h3 style={{ fontSize:'clamp(18px,1.8vw,24px)', fontWeight:600, color:'#fff', marginBottom:16, fontFamily:'Switzer,sans-serif' }}>
              One Vision
            </h3>
            <p style={{ fontSize:14, lineHeight:1.82, color:'rgba(255,255,255,0.8)', margin:0, fontFamily:'Switzer,sans-serif', fontWeight:400 }}>
              Strong work starts with a clear point of view. I set a single, guiding vision and lead projects with a decisive creative and technical direction. By connecting strategy, design, development, and AI-supported workflows, I create cohesive digital experiences that feel intentional, perform reliably, and remain relevant across platforms, products, and evolving technologies.
            </p>
          </div>
          <h3 style={{ fontSize:'clamp(18px,1.8vw,24px)', fontWeight:600, color:'#fff', marginBottom:36, fontFamily:'Switzer,sans-serif' }}>
            Brands that trust me
          </h3>
        </div>
      </div>

      {/* ── Brand Marquee ── */}
      <BrandMarquee />

      {/* ── NO BOUNDARIES — full viewport height ── */}
      <div style={{ background:'#000', minHeight:'100svh', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'56px 28px 72px' }}>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:24, flexWrap:'wrap', gap:8 }}>
          <h2 style={{ fontSize:'clamp(28px,5vw,68px)', fontWeight:900, letterSpacing:'-0.01em', lineHeight:1, color:'#fff', margin:0, fontFamily:'Switzer,sans-serif' }}>
            No Boundaries
          </h2>
          <span style={{ fontSize:'clamp(28px,5vw,68px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1, color:'#fff', fontFamily:'Switzer,sans-serif', flexShrink:0 }}>
            S-0
          </span>
        </div>

        <p style={{ fontSize:14, lineHeight:1.75, color:'rgba(255,255,255,0.8)', maxWidth:460, marginBottom:56, fontFamily:'Switzer,sans-serif', fontWeight:400 }}>
          Zero isn't empty, it's potential. I design with zero compromise and zero noise: sharp identities, fast websites, and content that moves people and metrics.
        </p>

        {/* Stats grid */}
        <div className="stats-grid" style={{ marginBottom:40 }}>
          {STATS.map((s,i) => (
            <div key={i}>
              <div style={{ fontSize:'clamp(32px,4.5vw,58px)', fontWeight:900, color:'#fff', lineHeight:1, marginBottom:10, letterSpacing:'-0.02em', fontFamily:'Switzer,sans-serif' }}>
                <CountUp end={s.end} suffix={s.suffix} duration={2200} />
              </div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.5, whiteSpace:'pre-line', fontFamily:'Switzer,sans-serif', fontWeight:400 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize:11, color:'rgba(255,255,255,0.3)', lineHeight:1.6, fontFamily:'Switzer,sans-serif' }}>
          Selected metrics.<br />Last updated: Aug 2025.
        </div>
      </div>
    </section>
  );
}
