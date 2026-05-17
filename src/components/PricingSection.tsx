import CTA from './CTA';

const FEATURES = [
  { text: '70+ retailer modules', hot: false },
  { text: 'Sub-50ms checkout speed', hot: true },
  { text: 'Auto CAPTCHA solving — included', hot: false },
  { text: 'Task groups & per-task proxy support', hot: false },
  { text: '24/7 Discord support', hot: false },
  { text: 'Same-day anti-bot patches', hot: true },
  { text: 'Backtesting window', hot: false },
  { text: 'Lifetime plan available', hot: false },
];

const PLANS = [
  { label: 'Monthly', price: '$79', sub: '/month', muted: true },
  { label: '3-Month', price: '$199', sub: '/3 mo', muted: false, best: true },
  { label: 'Lifetime', price: 'On Whop', sub: 'one-time', muted: true },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-5 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(168,85,247,.14), transparent)' }} />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14 rev">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5"
            style={{ color: '#a855f7', background: 'rgba(168,85,247,.08)', border: '1px solid rgba(168,85,247,.2)' }}>
            Pricing
          </span>
          <h2 className="font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#f1f5f9', lineHeight: 1.1 }}>
            One bot.<br />
            <span className="gradient-text">Every retailer.</span>
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto">Pricing as listed on Whop. Monthly and Lifetime options available.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-6 items-start rev d1">

          {/* Feature checklist */}
          <div className="rounded-2xl p-8 h-full"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: '#06b6d4' }}>
              Everything included in every plan
            </div>
            <ul className="space-y-3.5">
              {FEATURES.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(16,185,129,.12)', border: '1px solid rgba(16,185,129,.25)' }}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: f.hot ? '#f1f5f9' : '#94a3b8' }}>
                    {f.text}
                    {f.hot && (
                      <span className="ml-2 text-xs font-mono px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(168,85,247,.15)', color: '#c084fc', verticalAlign: 'middle' }}>
                        key feature
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 text-xs font-mono leading-relaxed"
              style={{ borderTop: '1px solid var(--border)', color: '#374151' }}>
              Proxies billed separately ($10–$30/mo typical). Whop handles billing, invoices, and cancellations.
            </div>

            {/* Plan comparison pills */}
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              {PLANS.map((p) => (
                <div key={p.label} className="flex items-center gap-2 rounded-lg px-3 py-2"
                  style={{
                    background: p.best ? 'rgba(168,85,247,.12)' : 'var(--surface-2)',
                    border: `1px solid ${p.best ? 'rgba(168,85,247,.35)' : 'var(--border)'}`,
                  }}>
                  <span className="text-sm font-bold" style={{ color: p.best ? '#f1f5f9' : '#64748b' }}>{p.price}</span>
                  <span className="text-xs font-mono" style={{ color: p.best ? '#a855f7' : '#374151' }}>{p.sub}</span>
                  {p.best && (
                    <span className="text-xs font-mono" style={{ color: '#a855f7' }}>· popular</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main price card */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(168,85,247,.2), transparent 70%)', filter: 'blur(16px)' }} />

            <div className="relative rounded-2xl p-8 text-center overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #1a1040 0%, #0c0f1e 60%, #070b16 100%)',
                border: '1px solid rgba(168,85,247,.45)',
                boxShadow: '0 40px 80px -20px rgba(168,85,247,.35), 0 0 0 1px rgba(168,85,247,.08), inset 0 1px 0 rgba(255,255,255,.06)',
              }}>
              {/* Inner top glow */}
              <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -5%, rgba(168,85,247,.2), transparent)' }} />

              <div className="relative">
                <div className="inline-block text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                  style={{ background: 'rgba(168,85,247,.18)', color: '#c084fc', border: '1px solid rgba(168,85,247,.35)' }}>
                  ★ Most popular
                </div>

                <div className="text-sm font-mono uppercase tracking-widest mb-1" style={{ color: '#64748b' }}>3-month plan</div>

                {/* Big price */}
                <div className="flex items-end justify-center gap-1 mt-3 mb-1">
                  <span className="text-sm font-mono self-start mt-3" style={{ color: '#a855f7' }}>$</span>
                  <span className="font-bold leading-none gradient-text" style={{ fontSize: '5.5rem' }}>199</span>
                  <span className="text-muted text-base mb-2 self-end">/3 mo</span>
                </div>
                <div className="text-sm font-mono" style={{ color: '#64748b' }}>≈ $66 / month · no annual lock-in</div>

                <div className="mt-8">
                  <CTA size="lg" className="w-full justify-center">
                    Get StellarAIO on Whop →
                  </CTA>
                </div>

                <div className="mt-4 text-xs font-mono" style={{ color: '#374151' }}>
                  Instant access · cancel any time via Whop
                </div>

                {/* Trust indicators */}
                <div className="mt-8 pt-6 grid grid-cols-3 gap-3"
                  style={{ borderTop: '1px solid rgba(168,85,247,.12)' }}>
                  {[
                    { val: '256', sub: 'reviews' },
                    { val: '4.8★', sub: 'avg rating' },
                    { val: '5yr+', sub: 'live' },
                  ].map((t) => (
                    <div key={t.sub}>
                      <div className="font-bold text-lg gradient-text">{t.val}</div>
                      <div className="text-xs font-mono mt-0.5" style={{ color: '#374151' }}>{t.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono"
                  style={{ color: '#374151' }}>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Secure checkout via Whop
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted rev d2">
          Monthly and Lifetime plans also available.{' '}
          <a href="https://whop.com/stellaraio/stellaraio?a=digitalartlab" target="_blank" rel="noopener sponsored"
            className="underline underline-offset-2 hover:text-cyan-300 transition-colors" style={{ color: '#06b6d4' }}>
            See all options on Whop →
          </a>
        </div>
      </div>
    </section>
  );
}
