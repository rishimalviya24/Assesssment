import { useState } from 'react';
export default function PortfolioCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div className="flex justify-between items-center py-3">
        <span className="text-[10px] font-bold tracking-[0.14em] text-white/55">{item.cat}</span>
        <span className="text-[10px] text-white/40" style={{fontFamily:'Switzer,sans-serif'}}>{item.year}</span>
      </div>
      <div className="w-full relative overflow-hidden bg-[#111]" style={{paddingBottom:'76%'}}>
        <img src={item.img} alt={item.title} loading="lazy"
          className="absolute inset-0 w-full h-full object-cover block"
          style={{ transition:'transform .45s ease, filter .3s', transform:hov?'scale(1.04)':'scale(1)', filter:hov?'brightness(1.1)':'brightness(0.85)' }}
          onError={e => { e.target.style.display='none'; }} />
      </div>
      <div className="pt-2.5 pb-1 text-[11px] sm:text-[12px] font-bold tracking-[0.04em] text-white/88">{item.title}</div>
    </div>
  );
}
