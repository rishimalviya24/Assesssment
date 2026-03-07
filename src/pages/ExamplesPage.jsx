import { Link } from 'react-router-dom';
import PortfolioCard from '../components/PortfolioCard';
import { PORTFOLIO } from '../data/constants';

export default function ExamplesPage() {
  return (
    <section id="examples" style={{ background:'#000', paddingBottom:120 }}>

      {/* Header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'36px 28px 20px', borderBottom:'1px solid #1a1a1a' }}>
        <h2 style={{ fontSize:'clamp(36px,7vw,84px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1, color:'#fff', margin:0, fontFamily:'Switzer,sans-serif' }}>
          Examples
        </h2>
        <span style={{ fontSize:'clamp(36px,7vw,84px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1, color:'#fff', fontFamily:'Switzer,sans-serif', flexShrink:0 }}>
          S-8
        </span>
      </div>

      <p style={{ fontSize:14, color:'rgba(255,255,255,0.6)', padding:'20px 28px', margin:0, fontFamily:'Switzer,sans-serif' }}>
        Here are 8 highlights from my work:
      </p>

      {/* Portfolio grid */}
      <div className="portfolio-grid">
        {PORTFOLIO.map((item, i) => (
          <div key={i} className="portfolio-cell" style={{ padding:'12px 16px 16px' }}>
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>

      {/* Footer links */}
      <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:'16px 28px', padding:'32px 28px 0' }}>
        <span style={{ fontSize:12, fontWeight:900, letterSpacing:'0.06em', color:'#fff', fontFamily:'Switzer,sans-serif' }}>
          CHECK OUR FULL PORTFOLIO:
        </span>
        {[['GRAPHIC DESIGN','/design'],['PHOTOGRAPHY','/photography'],['WEB DEVELOPMENT','/web']].map(([l,path]) => (
          <Link key={l} to={path}
            style={{ fontSize:12, fontWeight:600, letterSpacing:'0.04em', color:'#fff', textDecoration:'underline', textUnderlineOffset:3, fontStyle:'italic', opacity:0.8, fontFamily:'Switzer,sans-serif', transition:'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity='1'}
            onMouseLeave={e => e.currentTarget.style.opacity='0.8'}>
            {l}
          </Link>
        ))}
      </div>
    </section>
  );
}
