export default function ContactPage() {
  return (
    <section id="contact" className="bg-black flex flex-col">
      <div className="relative w-full h-screen overflow-hidden">
        <img src="https://1085.studio/assets/images/1085-studio-contact-background-960.webp" alt="Contact"
          className="absolute inset-0 w-full h-full object-cover object-center block" />
        <div className="absolute inset-0 pointer-events-none"
          style={{background:'linear-gradient(to top,rgba(0,0,0,.7) 0%,rgba(0,0,0,.15) 40%,transparent 100%)'}} />
        <div className="absolute bottom-0 left-0 z-10" style={{padding:'clamp(24px,4vw,72px)'}}>
          <div className="text-[11px] sm:text-[13px] font-bold tracking-[0.12em] text-white/60 uppercase mb-3" style={{fontFamily:'Switzer,sans-serif'}}>
            Interested in working with us?
          </div>
          <div className="text-[14px] sm:text-[18px] md:text-[20px] font-black tracking-[0.04em] text-white" style={{fontFamily:'Switzer,sans-serif'}}>
            SAY HELLO@ALPENIQ
          </div>
        </div>
      </div>
      <footer className="bg-[#0a0604] border-t border-[#1a1a1a] flex justify-between items-center px-4 sm:px-5 min-h-[60px] flex-wrap gap-2.5 py-2">
        <div className="py-2">
          <div className="flex gap-4 mb-1">
            {['INSTAGRAM','EMAIL'].map(l => (
              <a key={l} href="#" className="text-[11px] font-bold tracking-[0.1em] text-white no-underline opacity-70 hover:opacity-100 transition-opacity" style={{fontFamily:'Switzer,sans-serif'}}>{l}</a>
            ))}
          </div>
          <div className="text-[11px] text-white/30" style={{fontFamily:'Switzer,sans-serif'}}>© 2026, Alpeniq</div>
        </div>
        <div className="text-right py-2">
          <button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior:'smooth'})}
            className="bg-transparent border-0 cursor-pointer text-white text-[11px] font-bold tracking-[0.1em] p-0 flex items-center gap-1.5 ml-auto mb-1 opacity-80 hover:opacity-100 transition-opacity" style={{fontFamily:'Switzer,sans-serif'}}>
            BACK TO TOP ∧
          </button>
          <div className="flex gap-4 justify-end">
            {['COOKIES','IMPRINT & PRIVACY'].map(l => (
              <a key={l} href="#" className="text-[11px] text-white/40 no-underline hover:text-white transition-colors" style={{fontFamily:'Switzer,sans-serif'}}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
