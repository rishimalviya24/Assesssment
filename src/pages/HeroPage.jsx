import { useState, useEffect } from 'react';
import LiquidEther from '../components/LiquidEther';

export default function HeroPage() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(
        String(n.getHours()).padStart(2,'0') + ':' +
        String(n.getMinutes()).padStart(2,'0') + ':' +
        String(n.getSeconds()).padStart(2,'0') + ' CET'
      );
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  const goto = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">

      {/* ── EXACT same LiquidEther as Alpeniq App.jsx — zero changes ── */}
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
        autoResumeDelay={1000}
        autoRampDuration={0.4}
      />

      {/* ── UI Overlay — pointer-events-none so fluid stays interactive ── */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between">

        {/* Top: location + time */}
        <div className="flex justify-between items-start px-5 sm:px-8 pt-5 sm:pt-6">
          <span style={{
            color: '#00e5ff',
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: 'clamp(11px, 1.1vw, 13px)',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}>
            Zürich, Switzerland
          </span>
          <span style={{
            color: '#00e5ff',
            fontFamily: 'monospace',
            fontSize: 'clamp(11px, 1.1vw, 13px)',
            fontWeight: 700,
            letterSpacing: '0.1em'
          }}>
            {time}
          </span>
        </div>

        {/* Bottom: logo + tagline — sits above nav bar */}
        <div className="flex justify-between items-end px-5 sm:px-8 pb-[54px] sm:pb-[60px]">

          {/* 1085 Studio logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div style={{
              width: 44, height: 44,
              background: '#2a7de1',
              borderRadius: 6,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: 5
            }}>
              <div style={{ width: 18, height: 18, background: '#fff', borderRadius: 2 }} />
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 900, color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif" }}>1085</div>
              <div style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 900, color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif" }}>Studio</div>
            </div>
          </div>

          {/* FULL-SERVICE CREATIVE STUDIO */}
          <div className="text-right">
            <div style={{ fontSize: 'clamp(16px, 2vw, 26px)', fontWeight: 900, color: '#fff', letterSpacing: '0.03em', lineHeight: 1.2, fontFamily: "'Arial Black', Arial, sans-serif" }}>
              FULL-SERVICE
            </div>
            <div style={{ fontSize: 'clamp(16px, 2vw, 26px)', fontWeight: 900, color: '#fff', letterSpacing: '0.03em', lineHeight: 1.2, fontFamily: "'Arial Black', Arial, sans-serif" }}>
              CREATIVE STUDIO
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom nav bar — pointer-events-auto so buttons work ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-auto flex justify-between items-center px-4 sm:px-5"
        style={{ background: '#111', borderTop: '1px solid #222', height: 'clamp(40px, 4vh, 46px)' }}
      >
        <span style={{ fontSize: 'clamp(11px,1vw,13px)', fontWeight: 900, letterSpacing: '0.08em', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif" }}>
          1085.STUDIO
        </span>
        <div className="flex items-center" style={{ gap: 'clamp(16px, 3vw, 32px)' }}>
          {[['WEB','specialization'],['DESIGN','examples'],['PHOTO','examples'],['CONTACT','contact']].map(([lbl, id]) => (
            <button key={lbl} onClick={() => goto(id)}
              style={{ fontSize: 'clamp(10px,0.9vw,13px)', fontWeight: 700, letterSpacing: '0.1em', color: '#fff', background: 'none', border: 'none', cursor: 'pointer', opacity: 0.7, transition: 'opacity 0.2s', fontFamily: "'Arial Black', Arial, sans-serif" }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
            >
              {lbl}
            </button>
          ))}
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff', flexShrink: 0 }} />
        </div>
      </div>
    </section>
  );
}
