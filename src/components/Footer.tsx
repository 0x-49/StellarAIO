import { Link } from 'react-router-dom';
import { AFFILIATE_URL } from '../data/links';

const Logo = () => (
  <div className="flex items-center gap-2.5 font-bold text-base">
    <div style={{
      width: 30, height: 30, borderRadius: 9,
      background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      boxShadow: '0 3px 10px rgba(168,85,247,.4)',
    }}>
      <svg viewBox="0 0 20 20" fill="none" style={{ width: 13, height: 13 }}>
        <path d="M11 2L4 11h7l-2 7 9-10h-7l2-6z" fill="white" opacity={0.95} />
      </svg>
    </div>
    <span style={{ color: '#94a3b8', letterSpacing: '0.05em', fontSize: '0.88rem' }}>
      STELLAR<span style={{ color: '#a855f7' }}>AIO</span>
    </span>
  </div>
);

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: '#050810' }}>
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-4 gap-10 text-sm">

          {/* Brand col */}
          <div className="md:col-span-2">
            <Logo />
            <p className="text-muted mt-4 leading-relaxed max-w-xs text-sm" style={{ color: '#374151' }}>
              Independent affiliate landing page for Stellar AIO. Stellar AIO is a trademark of its respective owner. This site is not operated by Stellar AIO.
            </p>
            <a href={AFFILIATE_URL} target="_blank" rel="noopener sponsored"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: '#a855f7' }}>
              Get StellarAIO on Whop
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: '#374151' }}>Navigation</div>
            <ul className="space-y-2.5">
              {[
                { label: 'Features', href: '/#features' },
                { label: 'Supported Sites', href: '/#sites' },
                { label: 'Reviews', href: '/#reviews' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Blog', href: '/blog' },
                { label: 'Glossary', href: '/glossary' },
                { label: 'About', href: '/about' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="transition-colors hover:text-white" style={{ color: '#4b5563' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: '#374151' }}>Legal</div>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="transition-colors hover:text-white" style={{ color: '#4b5563' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: '#374151' }}>Disclosure</div>
            <p className="text-xs leading-relaxed" style={{ color: '#1f2937' }}>
              This site earns a commission when you buy via the links here. Pricing and ratings sourced from Whop and may change.
            </p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(30,45,71,.5)' }}>
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono" style={{ color: '#1f2937' }}>
          <span>© {new Date().getFullYear()} StellarAIO Affiliate Site</span>
          <span>Not affiliated with or endorsed by Stellar AIO or Whop.</span>
        </div>
      </div>
    </footer>
  );
}
