export default function ContactPage() {
  return (
    <section id="contact" style={{ background:'#000', display:'flex', flexDirection:'column' }}>

      {/* Full viewport contact image */}
      <div style={{ position:'relative', width:'100%', height:'100svh', overflow:'hidden' }}>
        <img
          src="https://1085.studio/assets/images/1085-studio-contact-background-960.webp"
          alt="Contact"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block' }}
        />
        {/* Gradient overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 45%, transparent 100%)', pointerEvents:'none' }} />

        {/* CTA bottom-left */}
        <div style={{ position:'absolute', bottom:0, left:0, zIndex:10, padding:'clamp(24px,4vw,64px)' }}>
          <div style={{ fontSize:'clamp(10px,1vw,12px)', fontWeight:700, letterSpacing:'0.14em', color:'rgba(255,255,255,0.6)', textTransform:'uppercase', marginBottom:12, fontFamily:'Switzer,sans-serif' }}>
            Interested in working with us?
          </div>
          <a href="mailto:hello@alpeniq.ch"
            style={{ fontSize:'clamp(14px,2vw,22px)', fontWeight:900, letterSpacing:'0.04em', color:'#fff', fontFamily:'Switzer,sans-serif', textDecoration:'none', display:'block', transition:'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}>
            SAY HELLO@ALPENIQ.CH
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background:'#0a0604', borderTop:'1px solid #1a1a1a', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 20px', minHeight:60, flexWrap:'wrap', gap:12 }}>
        {/* Left: social + copyright */}
        <div>
          <div style={{ display:'flex', gap:20, marginBottom:6 }}>
            {[['Instagram','https://instagram.com/alpeniq'],['Email','mailto:hello@alpeniq.ch']].map(([lbl,href]) => (
              <a key={lbl} href={href}
                style={{ fontSize:11, fontWeight:700, letterSpacing:'0.1em', color:'#fff', textDecoration:'none', opacity:0.7, fontFamily:'Switzer,sans-serif', transition:'opacity 0.2s', textTransform:'uppercase' }}
                onMouseEnter={e => e.currentTarget.style.opacity='1'}
                onMouseLeave={e => e.currentTarget.style.opacity='0.7'}>
                {lbl}
              </a>
            ))}
          </div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.3)', fontFamily:'Switzer,sans-serif' }}>
            © 2026, Alpeniq
          </div>
        </div>

        {/* Right: back to top + legal */}
        <div style={{ textAlign:'right' }}>
          <button
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior:'smooth' })}
            style={{ background:'none', border:'none', cursor:'pointer', color:'#fff', fontSize:11, fontWeight:700, letterSpacing:'0.1em', fontFamily:'Switzer,sans-serif', display:'flex', alignItems:'center', gap:6, marginLeft:'auto', marginBottom:6, opacity:0.8, transition:'opacity 0.2s', padding:0 }}
            onMouseEnter={e => e.currentTarget.style.opacity='1'}
            onMouseLeave={e => e.currentTarget.style.opacity='0.8'}>
            BACK TO TOP ∧
          </button>
          <div style={{ display:'flex', gap:16, justifyContent:'flex-end' }}>
            {['COOKIES','IMPRINT & PRIVACY'].map(l => (
              <a key={l} href="#"
                style={{ fontSize:11, color:'rgba(255,255,255,0.4)', textDecoration:'none', fontFamily:'Switzer,sans-serif', transition:'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='#fff'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.4)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
