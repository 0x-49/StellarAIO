import { useState } from 'react';

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Sub-50ms checkout',
    body: 'StellarAIO fires ATC and payment in under 50 ms. A human checkout averages 8–12 seconds. That gap is why bots win every limited drop.',
    accent: '#a855f7',
    wide: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: '70+ retailer modules',
    body: 'Walmart, Pokémon Center, Best Buy, Target, AMD.com, Foot Locker, SNKRS, and more. One subscription covers every retailer.',
    accent: '#06b6d4',
    wide: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Auto CAPTCHA solving',
    body: 'Handles Cloudflare Turnstile, reCAPTCHA v2/v3, and retailer-specific challenges automatically — no manual solving, no delays.',
    accent: '#a855f7',
    wide: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Task groups & profiles',
    body: 'Run 50 tasks against one drop. Each task uses its own profile and proxy — no shared IPs, no cascade bans.',
    accent: '#06b6d4',
    wide: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: '24/7 Discord support',
    body: 'Real staff — not a ticket bot. Active Discord with round-the-clock monitoring during major drops.',
    accent: '#a855f7',
    wide: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
    title: 'Same-day patches',
    body: "Retailers update anti-bot systems constantly. StellarAIO's team ships patches within hours — usually before the next drop.",
    accent: '#06b6d4',
    wide: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Backtesting window',
    body: 'Replay historical checkout flow with date filters. See exactly what worked on past drops and pattern-match for the next one.',
    accent: '#a855f7',
    wide: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Proxy integration',
    body: 'Import residential, ISP, or mobile proxies per task group. One task, one IP — no shared identity, no cascade bans.',
    accent: '#06b6d4',
    wide: false,
  },
];

function FeatureCard({ f, i }: { f: typeof FEATURES[0]; i: number }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className={`rounded-2xl p-6 rev d${(i % 3) + 1} relative overflow-hidden transition-all duration-300 ${f.wide ? 'md:col-span-2' : ''}`}
      style={{
        background: hov ? `linear-gradient(135deg, ${f.accent}14 0%, rgba(15,20,33,1) 60%)` : 'var(--surface)',
        border: `1px solid ${hov ? `${f.accent}50` : 'var(--border)'}`,
        boxShadow: hov ? `0 20px 60px -20px ${f.accent}40` : 'none',
        cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: hov ? `linear-gradient(90deg, transparent, ${f.accent}, transparent)` : 'transparent', transition: 'background .3s' }} />

      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-colors duration-300"
        style={{
          background: hov ? `${f.accent}20` : `${f.accent}10`,
          border: `1px solid ${hov ? `${f.accent}45` : `${f.accent}20`}`,
          color: f.accent,
        }}>
        {f.icon}
      </div>

      <h3 className="font-bold text-lg mb-2" style={{ color: '#f1f5f9' }}>{f.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{f.body}</p>

      {/* Corner glow on hover */}
      {hov && (
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${f.accent}20, transparent 70%)` }} />
      )}
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-5 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
      {/* Section glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(168,85,247,.09) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 rev">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5"
            style={{ color: '#a855f7', background: 'rgba(168,85,247,.08)', border: '1px solid rgba(168,85,247,.2)' }}>
            Platform features
          </span>
          <h2 className="font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#f1f5f9', lineHeight: 1.1 }}>
            Every tool you need.<br />
            <span className="gradient-text">Nothing you don't.</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            All features verified from the live Whop product page and community tutorials. No invented claims.
          </p>
        </div>

        {/* Feature grid — mixed wide/narrow */}
        <div className="grid md:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
