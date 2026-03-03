import { useState } from 'react';
import AccordionItem from '../components/AccordionItem';
import { SPECS } from '../data/constants';

export default function SpecializationPage() {
  const [open, setOpen] = useState(null);
  return (
    <section id="specialization" className="bg-black">
      <div className="flex justify-between items-start px-5 sm:px-7 pt-9 pb-6 border-b border-[#1a1a1a]">
        <h2 className="text-[clamp(24px,5.2vw,68px)] font-black tracking-[-0.02em] leading-none text-white m-0">SPECIALIZATION</h2>
        <span className="text-[clamp(24px,5.2vw,68px)] font-black tracking-[-0.02em] leading-none text-white">S-5</span>
      </div>
      <p className="text-[13px] sm:text-[14px] text-white/50 px-5 sm:px-7 mt-6 mb-10 sm:mb-12" style={{fontFamily:'Arial,sans-serif'}}>
        My expertise spans five pillars, each designed to move ideas into impact.
      </p>
      <div className="px-5 sm:px-7 border-t border-[#222]">
        {SPECS.map((item, i) => (
          <AccordionItem key={i} item={item} isOpen={open === i} onToggle={() => setOpen(p => p === i ? null : i)} />
        ))}
      </div>
    </section>
  );
}
