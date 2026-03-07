import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ showNav, alwaysShow }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const show = alwaysShow || showNav;

  const links = [
    { label: 'WEB',     path: '/web' },
    { label: 'DESIGN',  path: '/design' },
    { label: 'PHOTO',   path: '/photography' },
    { label: 'CONTACT', path: '/#contact' },
  ];

  const handleContact = (e) => {
    if (location.pathname !== '/') {
      // navigate to home then scroll
      window.location.href = '/#contact';
      e.preventDefault();
    } else {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      height: 52, padding: '0 24px',
      background: 'rgba(0,0,0,0.97)', borderBottom: '1px solid #1a1a1a',
      transform: show ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
      pointerEvents: show ? 'auto' : 'none',
    }}>
      <Link to="/" style={{ fontSize: 13, fontWeight: 900, letterSpacing: '0.08em', color: '#fff', textDecoration: 'none', fontFamily: 'Switzer,sans-serif' }}>
        Alpeniq
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.5vw,32px)' }}>
        {links.map(({ label, path }) => {
          const isActive = location.pathname === path || (label === 'CONTACT' && location.hash === '#contact');
          return label === 'CONTACT' ? (
            <a key={label} href="/#contact" onClick={handleContact}
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#fff', textDecoration: 'none', fontFamily: 'Switzer,sans-serif', opacity: isActive ? 1 : 0.6, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = isActive ? '1' : '0.6'}>
              {label}
            </a>
          ) : (
            <Link key={label} to={path}
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#fff', textDecoration: isActive ? 'underline' : 'none', textUnderlineOffset: 4, fontFamily: 'Switzer,sans-serif', opacity: isActive ? 1 : 0.6, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = isActive ? '1' : '0.6'}>
              {label}
            </Link>
          );
        })}
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff', flexShrink: 0 }} />
      </div>
    </nav>
  );
}
