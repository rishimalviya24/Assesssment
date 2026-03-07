import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LiquidEther from '../components/LiquidEther';

export default function HeroPage() {
  const [time, setTime] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      // Convert to CET (UTC+1) / CEST (UTC+2)
      const utc = n.getTime() + n.getTimezoneOffset() * 60000;
      const offset = 1; // CET
      const cet = new Date(utc + 3600000 * offset);
      setTime(
        String(cet.getHours()).padStart(2,'0') + ':' +
        String(cet.getMinutes()).padStart(2,'0') + ':' +
        String(cet.getSeconds()).padStart(2,'0') + ' CET'
      );
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  const goto = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{ position:'relative', width:'100%', height:'100svh', overflow:'hidden', background:'#000', touchAction:'auto' }}>

      {/* ── Background: LiquidEther on desktop, video loop on mobile ── */}
      {!isMobile ? (
        <LiquidEther
          colors={['#ffa927', '#FF9FFC', '#FF6B2B']}
          mouseForce={60}
          cursorSize={250}
          isViscous={true}
          viscous={20}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.8}
          autoIntensity={5.0}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={1.2}
        />
      ) : (
        /* Mobile: looping video like reference site */
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          poster="https://1085.studio/assets/images/1085-studio-hero-poster.png"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}
        >
          <source src="https://1085.studio/assets/videos/header-video2.webm" type="video/webm" />
          {/* fallback poster shown if video fails */}
        </video>
      )}

      {/* ── Overlay UI — pointer-events-none so fluid stays interactive ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:10, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

        {/* Top row: location + time */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'20px 28px 0' }}>
          <span style={{ color:'#00e5ff', fontFamily:'Switzer,sans-serif', fontSize:'clamp(10px,1.1vw,12px)', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' }}>
            Zürich, Switzerland
          </span>
          <span style={{ color:'#00e5ff', fontFamily:'monospace', fontSize:'clamp(10px,1.1vw,12px)', fontWeight:700, letterSpacing:'0.08em' }}>
            {time}
          </span>
        </div>

        {/* Bottom: logo left + tagline right */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', padding:'0 24px 54px' }}>

          {/* Logo */}
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <img
              src="https://1085.studio/assets/images/1085-studio-logo-white.png"
              alt="Alpeniq"
              style={{ height:'clamp(32px,4vw,48px)', width:'auto', objectFit:'contain', filter:'brightness(1)' }}
              onError={e => { e.target.style.display='none'; }}
            />
          </div>

          {/* FULL-SERVICE CREATIVE STUDIO */}
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:'clamp(13px,1.8vw,22px)', fontWeight:900, color:'#fff', letterSpacing:'0.04em', lineHeight:1.15, fontFamily:'Switzer,sans-serif' }}>FULL-SERVICE</div>
            <div style={{ fontSize:'clamp(13px,1.8vw,22px)', fontWeight:900, color:'#fff', letterSpacing:'0.04em', lineHeight:1.15, fontFamily:'Switzer,sans-serif' }}>CREATIVE STUDIO</div>
          </div>
        </div>
      </div>

      {/* ── Bottom nav bar ── */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, zIndex:20, pointerEvents:'auto', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 16px', background:'rgba(10,10,10,0.95)', borderTop:'1px solid #222', height:42 }}>
        <button onClick={() => goto('hero')} style={{ fontSize:12, fontWeight:900, letterSpacing:'0.08em', color:'#fff', background:'none', border:'none', cursor:'pointer', fontFamily:'Switzer,sans-serif', padding:0 }}>
          Alpeniq
        </button>
        <div style={{ display:'flex', alignItems:'center', gap:'clamp(14px,2.5vw,28px)' }}>
          {[['WEB','/web'],['DESIGN','/design'],['PHOTO','/photography']].map(([lbl,path]) => (
            <Link key={lbl} to={path}
              style={{ fontSize:'clamp(10px,0.85vw,12px)', fontWeight:700, letterSpacing:'0.1em', color:'#fff', textDecoration:'none', opacity:0.65, transition:'opacity 0.2s', fontFamily:'Switzer,sans-serif' }}
              onMouseEnter={e => e.currentTarget.style.opacity='1'}
              onMouseLeave={e => e.currentTarget.style.opacity='0.65'}>
              {lbl}
            </Link>
          ))}
          <a href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }}
            style={{ fontSize:'clamp(10px,0.85vw,12px)', fontWeight:700, letterSpacing:'0.1em', color:'#fff', textDecoration:'none', opacity:0.65, transition:'opacity 0.2s', fontFamily:'Switzer,sans-serif' }}
            onMouseEnter={e => e.currentTarget.style.opacity='1'}
            onMouseLeave={e => e.currentTarget.style.opacity='0.65'}>
            CONTACT
          </a>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'#fff', flexShrink:0 }} />
        </div>
      </div>
    </section>
  );
}
