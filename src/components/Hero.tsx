import CTA from './CTA';

const drops = [
  { site: 'Walmart', item: 'PS5 Pro Bundle', sku: '#WMRT-9924', qty: 2, status: 'CHECKED OUT', color: '#10b981', ts: '00:00.041' },
  { site: 'Pokémon Center', item: 'Destined Rivals ETB', sku: '#PKMN-5512', qty: 4, status: 'CHECKED OUT', color: '#10b981', ts: '00:00.038' },
  { site: 'Best Buy', item: 'RTX 5090 FE', sku: '#GPU-0201', qty: 1, status: 'CARTING…', color: '#a855f7', ts: '00:00.052' },
  { site: 'Target', item: 'Jordan 1 Retro High OG', sku: '#SHOE-114', qty: 2, status: 'MONITORING', color: '#06b6d4', ts: '—' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }} />

      {/* Aurora bar */}
      <div className="aurora absolute pointer-events-none" style={{ top: 0, left: 0, right: 0, height: 2 }} />

      {/* Big glow orbs */}
      <div className="absolute pointer-events-none" style={{ top: '-20%', left: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,.20) 0%, transparent 65%)', filter: 'blur(0px)' }} />
      <div className="absolute pointer-events-none" style={{ top: '10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,.14) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto px-5 relative">
        <div className="grid lg:grid-cols-[1fr_480px] gap-14 lg:gap-10 items-center">

          {/* ── LEFT: copy ── */}
          <div>
            {/* Live badge */}
            <div className="rev inline-flex items-center gap-2 text-xs font-mono tracking-[0.16em] uppercase mb-8 rounded-full px-3.5 py-1.5"
              style={{ color: '#10b981', borderColor: 'rgba(16,185,129,.3)', background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.28)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block flex-shrink-0" />
              Live since 2020 · 256 verified checkouts
            </div>

            {/* Headline */}
            <h1 className="font-bold tracking-tight rev d1"
              style={{ fontSize: 'clamp(2.8rem, 5.8vw, 4.6rem)', lineHeight: 1.03, color: '#f1f5f9' }}>
              <span className="gradient-text">Stellar AIO</span><br />
              stop missing<br />
              every drop.
            </h1>

            <p className="mt-6 leading-relaxed rev d2"
              style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '460px' }}>
              StellarAIO fires 70+ retailer modules in under 50&thinsp;ms. While you're still on the checkout page, the bot already has a confirmation email.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 rev d3">
              <CTA size="lg">Get StellarAIO on Whop →</CTA>
              <a href="#features" className="btn-secondary text-sm">See how it works</a>
            </div>

            {/* Stats strip */}
            <div className="mt-10 rev d3" style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: '1.5rem' }}>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { val: '4.8★', sub: '256 Whop reviews', color: '#facc15' },
                  { val: '<50ms', sub: 'checkout speed', color: '#a855f7' },
                  { val: '70+', sub: 'retailer modules', color: '#06b6d4' },
                  { val: '5yr+', sub: 'live & patching', color: '#10b981' },
                ].map((s) => (
                  <div key={s.sub}>
                    <div className="font-bold text-2xl leading-none" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-xs font-mono mt-1" style={{ color: '#4b5563' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: terminal card ── */}
          <div className="hidden lg:block rev d2">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(168,85,247,.22), transparent)', filter: 'blur(20px)', transform: 'scale(1.1)' }} />

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: '#0c1120',
                  border: '1px solid rgba(168,85,247,.3)',
                  boxShadow: '0 40px 80px -20px rgba(0,0,0,.8), 0 0 0 1px rgba(168,85,247,.1), inset 0 1px 0 rgba(255,255,255,.05)',
                }}>

                {/* Window chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3.5"
                  style={{ background: '#0f1729', borderBottom: '1px solid rgba(168,85,247,.15)' }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                  <span className="ml-auto text-xs font-mono" style={{ color: '#475569' }}>StellarAIO — Task Monitor</span>
                  <span className="ml-3 flex items-center gap-1.5 text-xs font-mono" style={{ color: '#10b981' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    LIVE
                  </span>
                </div>

                {/* Column headers */}
                <div className="grid px-4 py-2 text-xs font-mono uppercase tracking-widest"
                  style={{ color: '#374151', gridTemplateColumns: '1fr 1fr auto auto', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                  <span>Item</span>
                  <span>Retailer</span>
                  <span className="text-right pr-4">Speed</span>
                  <span className="text-right">Status</span>
                </div>

                {/* Task rows */}
                <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,.04)' }}>
                  {drops.map((d) => (
                    <div key={d.item}
                      className="grid px-4 py-3.5 items-center gap-2"
                      style={{ gridTemplateColumns: '1fr 1fr auto auto', background: 'transparent' }}>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold truncate" style={{ color: '#e2e8f0' }}>{d.item}</div>
                        <div className="text-xs font-mono mt-0.5" style={{ color: '#374151' }}>{d.sku} · qty {d.qty}</div>
                      </div>
                      <div className="text-xs font-mono" style={{ color: '#475569' }}>{d.site}</div>
                      <div className="text-xs font-mono text-right pr-4" style={{ color: '#4b5563' }}>{d.ts}</div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: d.color, boxShadow: `0 0 6px ${d.color}` }} />
                        <span className="text-xs font-mono font-bold" style={{ color: d.color, whiteSpace: 'nowrap' }}>{d.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer bar */}
                <div className="flex items-center justify-between px-4 py-2.5"
                  style={{ background: '#0f1729', borderTop: '1px solid rgba(168,85,247,.12)' }}>
                  <span className="text-xs font-mono" style={{ color: '#374151' }}>4 tasks · 2 groups</span>
                  <span className="text-xs font-mono" style={{ color: '#10b981' }}>✓ 2 orders confirmed</span>
                </div>
              </div>

              {/* Floating badge — rating */}
              <div className="absolute -left-6 -bottom-5 glass rounded-xl px-4 py-3"
                style={{ boxShadow: '0 12px 40px rgba(0,0,0,.5)', border: '1px solid rgba(168,85,247,.25)' }}>
                <div className="text-yellow-400 text-base leading-none">★★★★★</div>
                <div className="text-xs font-mono mt-1" style={{ color: '#94a3b8' }}>4.8 · 256 reviews</div>
              </div>

              {/* Floating badge — speed */}
              <div className="absolute -right-5 top-6 glass rounded-xl px-4 py-3 text-center"
                style={{ boxShadow: '0 12px 40px rgba(0,0,0,.5)', border: '1px solid rgba(6,182,212,.25)' }}>
                <div className="font-bold text-xl leading-none gradient-text-cyan">&lt;50ms</div>
                <div className="text-xs font-mono mt-1" style={{ color: '#4b5563' }}>checkout speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
