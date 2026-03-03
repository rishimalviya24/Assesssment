export default function Navbar({ showNav, active }) {
  const goto = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const links = [['WEB','specialization'],['DESIGN','examples'],['PHOTO','examples'],['CONTACT','contact']];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[42px] px-4 sm:px-5 bg-[#111] border-b border-[#222]"
      style={{ transform: showNav ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform .35s cubic-bezier(.4,0,.2,1)', pointerEvents: showNav ? 'auto' : 'none' }}>
      <button onClick={() => goto('hero')} className="text-[12px] font-black tracking-[0.08em] text-white bg-transparent border-0 cursor-pointer">1085.STUDIO</button>
      <div className="flex gap-5 sm:gap-8 items-center">
        {links.map(([lbl, id]) => (
          <button key={lbl} onClick={() => goto(id)}
            className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] text-white bg-transparent border-0 cursor-pointer transition-opacity"
            style={{ opacity: active === id ? 1 : 0.65 }}
            onMouseEnter={e => e.currentTarget.style.opacity='1'}
            onMouseLeave={e => e.currentTarget.style.opacity = active === id ? '1' : '0.65'}>
            {lbl}
          </button>
        ))}
        <div className="w-[7px] h-[7px] rounded-full bg-white flex-shrink-0" />
      </div>
    </nav>
  );
}
