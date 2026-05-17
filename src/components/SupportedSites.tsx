const SITES = [
  { name: 'Walmart', abbr: 'WM', color: '#0071ce', note: 'PS5, GPU, toy drops' },
  { name: 'Pokémon Center', abbr: 'PK', color: '#e3350d', note: 'ETBs, booster boxes' },
  { name: 'Best Buy', abbr: 'BB', color: '#1f68b2', note: 'Console & GPU restocks' },
  { name: 'Target', abbr: 'TG', color: '#cc0000', note: 'Sneakers & consoles' },
  { name: 'AMD.com', abbr: 'AM', color: '#ed1c24', note: 'GPU & CPU drops' },
  { name: 'Foot Locker', abbr: 'FL', color: '#6b7280', note: 'Nike & sneaker drops' },
  { name: 'SNKRS', abbr: 'NK', color: '#111111', note: 'Jordan & Nike exclusives' },
  { name: 'Pokémon TCG', abbr: 'PT', color: '#f59e0b', note: 'Sealed booster drops' },
];

const EXTRAS = ['adidas', 'New Balance', 'Finish Line', 'Champs Sports', 'JD Sports', 'GameStop', 'Newegg', 'B&H Photo', 'Micro Center'];
const MARQUEE_ITEMS = [...SITES, ...SITES];

export default function SupportedSites() {
  return (
    <section id="sites" className="py-20 px-5 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 110%, rgba(6,182,212,.08), transparent)' }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 rev">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5"
            style={{ color: '#06b6d4', background: 'rgba(6,182,212,.08)', border: '1px solid rgba(6,182,212,.2)' }}>
            Retailer coverage
          </span>
          <h2 className="font-bold" style={{ fontSize: 'clamp(1.9rem,3.8vw,2.8rem)', color: '#f1f5f9', lineHeight: 1.15 }}>
            70+ sites.<br />
            <span className="gradient-text-cyan">One subscription.</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            Retailer modules confirmed from community tutorials and Whop product documentation.
          </p>
        </div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden rounded-2xl py-5"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.04)' }}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--surface), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--surface), transparent)' }} />

          <div className="flex gap-3" style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}>
            {MARQUEE_ITEMS.map((s, i) => (
              <div key={`${s.name}-${i}`}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 flex-shrink-0"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: `${s.color}22`, border: `1px solid ${s.color}40`, color: s.color }}>
                  {s.abbr}
                </div>
                <div>
                  <div className="font-semibold text-sm leading-tight" style={{ color: '#e2e8f0' }}>{s.name}</div>
                  <div className="text-xs font-mono" style={{ color: '#374151' }}>{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid — key retailers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {SITES.map((s, i) => (
            <div key={s.name}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3.5 rev d${(i % 3) + 1} transition-all duration-300`}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${s.color}50`; (e.currentTarget as HTMLElement).style.background = `${s.color}08`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: `${s.color}18`, border: `1px solid ${s.color}35`, color: s.color }}>
                {s.abbr}
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: '#f1f5f9' }}>{s.name}</div>
                <div className="text-xs font-mono flex items-center gap-1 mt-0.5" style={{ color: '#10b981' }}>
                  <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra retailers pill list */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 rev d2">
          {EXTRAS.map((e) => (
            <span key={e} className="text-xs font-mono rounded-full px-3 py-1"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: '#4b5563' }}>
              {e}
            </span>
          ))}
          <span className="text-xs font-mono rounded-full px-3 py-1"
            style={{ background: 'rgba(168,85,247,.06)', border: '1px solid rgba(168,85,247,.2)', color: '#a855f7' }}>
            +60 more on Whop →
          </span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
