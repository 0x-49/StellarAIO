import { Link, useLocation } from 'react-router-dom';
import CTA from './CTA';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 font-bold text-base no-underline group">
    <img
      src="/logo.png"
      alt="StellarAIO logo"
      width={36}
      height={36}
      style={{ width: 36, height: 36, flexShrink: 0, filter: 'drop-shadow(0 4px 14px rgba(168,85,247,.45))' }}
    />
    <span style={{ color: '#f1f5f9', letterSpacing: '0.05em', fontSize: '0.92rem' }}>
      STELLAR<span style={{ color: '#a855f7' }}>AIO</span>
    </span>
  </Link>
);

const NAV_LINK = 'hover:text-white transition-colors duration-150 relative py-1';

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        background: 'rgba(7,11,22,.85)',
        borderBottom: '1px solid rgba(30,45,71,.7)',
        boxShadow: '0 1px 0 rgba(168,85,247,.06)',
      }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: '#64748b' }} aria-label="Primary">
          {isHome ? (
            <>
              <a href="#features" className={NAV_LINK}>Features</a>
              <a href="#sites" className={NAV_LINK}>Sites</a>
              <a href="#reviews" className={NAV_LINK}>Reviews</a>
              <a href="#pricing" className={NAV_LINK}>Pricing</a>
            </>
          ) : null}
          <Link to="/blog" className={NAV_LINK} style={{ color: '#a855f7' }}>Blog</Link>
          <Link to="/glossary" className={NAV_LINK}>Glossary</Link>
          <Link to="/about" className={NAV_LINK}>About</Link>
        </nav>

        <CTA size="sm">Get StellarAIO</CTA>
      </div>
    </header>
  );
}
