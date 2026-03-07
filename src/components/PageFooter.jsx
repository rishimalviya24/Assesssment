export default function PageFooter() {
  return (
    <footer style={{
      background: '#000', borderTop: '1px solid #161616',
      padding: '18px 28px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 12,
    }}>
      {/* Left: INSTAGRAM + copyright */}
      <div>
        <a href="https://www.instagram.com/alpeniq" target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#fff', textDecoration: 'none', fontFamily: 'Switzer,sans-serif', marginBottom: 4, opacity: 0.8, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}>
          INSTAGRAM
        </a>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'Switzer,sans-serif' }}>
          © 2026, Alpeniq
        </span>
      </div>

      {/* Right: BACK TO TOP + COOKIES + IMPRINT & PRIVACY */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'Switzer,sans-serif', padding: 0, opacity: 0.8, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}>
          BACK TO TOP ∧
        </button>
        <div style={{ display: 'flex', gap: 16 }}>
          {['COOKIES', 'IMPRINT & PRIVACY'].map(l => (
            <a key={l} href="#"
              style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontFamily: 'Switzer,sans-serif', transition: 'color 0.2s', letterSpacing: '0.04em' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
