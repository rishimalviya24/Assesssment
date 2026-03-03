import { useState, useEffect } from 'react';
import LiquidEther from '../components/LiquidEther';

const nSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='300' height='300' filter='url(#n)' opacity='0.15'/></svg>`;
const NOISE = `data:image/svg+xml;base64,${btoa(nSVG)}`;

export default function HeroPage() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(`${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')} CET`);
    };
    tick(); const iv = setInterval(tick, 1000); return () => clearInterval(iv);
  }, []);
  const goto = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-[#0a0604]">
      <LiquidEther colors={['#FF6420','#E63C0A','#FF2850','#0a0604']} mouseForce={22} cursorSize={120} resolution={0.5}
        autoDemo={true} autoSpeed={0.45} autoIntensity={2.5} autoResumeDelay={800} autoRampDuration={0.8} BFECC={true} dt={0.014} />
      <div className="absolute inset-0 pointer-events-none z-[5]"
        style={{backgroundImage:`url("${NOISE}")`,backgroundRepeat:'repeat',backgroundSize:'300px',mixBlendMode:'overlay',opacity:.65}} />

      {/* Top */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between px-4 sm:px-5 pt-4">
        <span className="text-[#00e5ff] text-[10px] sm:text-[11px] font-bold tracking-[0.12em] font-mono">ZÜRICH, SWITZERLAND</span>
        <span className="text-[#00e5ff] text-[10px] sm:text-[11px] font-bold tracking-[0.12em] font-mono">{time}</span>
      </div>

      {/* Branding */}
      <div className="absolute bottom-[42px] left-0 right-0 z-10 flex justify-between items-end px-4 sm:px-5 pb-4 sm:pb-5">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] border-[2.5px] border-white rounded-[5px] relative flex-shrink-0">
            <div className="absolute bottom-[4px] left-[4px] sm:bottom-[5px] sm:left-[5px] w-[14px] h-[14px] sm:w-[17px] sm:h-[17px] bg-white rounded-[2px]" />
          </div>
          <div className="leading-[1.1]">
            <div className="text-[20px] sm:text-[24px] font-black text-white">1085</div>
            <div className="text-[20px] sm:text-[24px] font-black text-white">Studio</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[15px] sm:text-[20px] font-black tracking-[0.04em] text-white leading-[1.2]">FULL-SERVICE</div>
          <div className="text-[15px] sm:text-[20px] font-black tracking-[0.04em] text-white leading-[1.2]">CREATIVE STUDIO</div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#111] border-t border-[#222] flex justify-between items-center px-4 sm:px-5 h-[42px]">
        <span className="text-[11px] sm:text-[12px] font-black tracking-[0.08em] text-white">1085.STUDIO</span>
        <div className="flex gap-4 sm:gap-8 items-center">
          {[['WEB','specialization'],['DESIGN','examples'],['PHOTO','examples'],['CONTACT','contact']].map(([lbl,id]) => (
            <button key={lbl} onClick={() => goto(id)}
              className="text-[10px] sm:text-[12px] font-bold tracking-[0.1em] text-white bg-transparent border-0 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
              {lbl}
            </button>
          ))}
          <div className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
