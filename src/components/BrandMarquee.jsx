import { BRANDS } from '../data/constants';
export default function BrandMarquee() {
  const doubled = [...BRANDS, ...BRANDS];
  return (
    <div className="relative overflow-hidden py-10 bg-black">
      <div className="absolute left-0 top-0 bottom-0 w-[100px] sm:w-[120px] z-[2] pointer-events-none" style={{background:'linear-gradient(to right,#000,transparent)'}} />
      <div className="absolute right-0 top-0 bottom-0 w-[100px] sm:w-[120px] z-[2] pointer-events-none" style={{background:'linear-gradient(to left,#000,transparent)'}} />
      <div className="mq">
        {doubled.map((b, i) => (
          <div key={i} style={{ flexShrink:0, color:'rgba(255,255,255,0.45)', fontFamily:b.font, fontWeight:b.w, fontSize:b.sz, letterSpacing:b.ls, fontStyle:b.it?'italic':'normal', lineHeight:b.lh||1.2, whiteSpace:'pre-line', textAlign:'center', userSelect:'none' }}>
            {b.name}
          </div>
        ))}
      </div>
    </div>
  );
}
