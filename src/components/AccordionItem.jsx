import { useState, useEffect, useRef } from 'react';
export default function AccordionItem({ item, isOpen, onToggle }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => { if (ref.current) setHeight(isOpen ? ref.current.scrollHeight : 0); }, [isOpen]);
  return (
    <div className="border-b border-[#222]">
      <button onClick={onToggle} className="w-full bg-transparent border-0 cursor-pointer flex justify-between items-center py-6 sm:py-7 text-left gap-4">
        <span className="font-serif font-bold italic leading-none transition-colors duration-300 text-[clamp(18px,3vw,38px)]"
          style={{ color: isOpen ? '#e85c00' : '#fff' }}>
          {item.title}{item.sub && <span className="font-normal ml-2 text-[clamp(12px,1.4vw,20px)]"> ({item.sub})</span>}
        </span>
        <span className="text-[22px] sm:text-[24px] text-white flex-shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'none', fontFamily:'Arial,sans-serif', fontWeight:300 }}>+</span>
      </button>
      <div style={{ overflow:'hidden', height:`${height}px`, transition:'height .4s cubic-bezier(.4,0,.2,1)' }}>
        <div ref={ref} className="pb-7 sm:pb-8 pl-0 sm:pl-[72px]">
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.82] text-white/70 max-w-[520px] m-0" style={{fontFamily:'Arial,sans-serif',fontWeight:400}}>
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}
