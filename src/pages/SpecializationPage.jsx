import { useState } from 'react';
import AccordionItem from '../components/AccordionItem';
import { SPECS } from '../data/constants';

export default function SpecializationPage() {
  const [open, setOpen] = useState(null);
  return (
    <section id="specialization" style={{ background:'#000' }}>

      {/* Header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'36px 28px 24px', borderBottom:'1px solid #1a1a1a' }}>
        <h2 style={{ fontSize:'clamp(22px,5.2vw,68px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1, color:'#fff', margin:0, fontFamily:'Switzer,sans-serif' }}>
          Specialization
        </h2>
        <span style={{ fontSize:'clamp(22px,5.2vw,68px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1, color:'#fff', fontFamily:'Switzer,sans-serif', flexShrink:0 }}>
          S-5
        </span>
      </div>

      <p style={{ fontSize:14, color:'rgba(255,255,255,0.5)', padding:'24px 28px', margin:0, fontFamily:'Switzer,sans-serif' }}>
        My expertise spans five pillars, each designed to move ideas into impact.
      </p>

      <div style={{ padding:'0 28px', borderTop:'1px solid #222' }}>
        {SPECS.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={open === i}
            onToggle={() => setOpen(p => p === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
