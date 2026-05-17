import CTA from './CTA';

type Variant = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

const CONTENT: Record<Variant, { eyebrow: string; heading: React.ReactNode; sub: string; cta: string }> = {
  a: {
    eyebrow: 'Ready to start?',
    heading: <>Stop losing drops to manual checkout.</>,
    sub: 'Activate StellarAIO via Whop in under 2 minutes. Instant access, no waitlist.',
    cta: 'Get StellarAIO on Whop',
  },
  b: {
    eyebrow: '256+ verified members',
    heading: <>Join the community that actually <em style={{ fontStyle: 'normal', background: 'linear-gradient(120deg,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>cops.</em></>,
    sub: '4.8-star average from 256 verified Whop reviews. 5+ years live. 24/7 Discord support.',
    cta: 'Get Access on Whop',
  },
  c: {
    eyebrow: '$199 / 3 months',
    heading: <>70+ retailers. One subscription.</>,
    sub: 'Walmart, Pokémon Center, Best Buy, Target, AMD.com, and more — all from a single bot dashboard.',
    cta: 'Get StellarAIO',
  },
  d: {
    eyebrow: 'You saw what it does',
    heading: <>Stop reading. Start <em style={{ fontStyle: 'normal', color: '#a855f7' }}>cooking.</em></>,
    sub: 'Every feature on this page is live in the product right now. Activation takes under 2 minutes.',
    cta: 'Activate on Whop',
  },
  e: {
    eyebrow: 'Trusted by 256+ resellers',
    heading: <>Add yourself to the cooks list.</>,
    sub: '4.8★ from 256 verified Whop reviews. Same-day patches, 24/7 Discord, and a 5-year track record.',
    cta: 'Join StellarAIO',
  },
  f: {
    eyebrow: "You've seen the honest tradeoffs",
    heading: <>Now run the math on <em style={{ fontStyle: 'normal', color: '#06b6d4' }}>your</em> drops.</>,
    sub: 'No bot guarantees every cook. But manual buyers guarantee zero. $66/month effective, cancel any time.',
    cta: 'See pricing on Whop',
  },
};

type Size = 'lg' | 'slim';

export default function InlineCTA({ variant = 'a', size = 'lg' }: { variant?: Variant; size?: Size }) {
  const s = CONTENT[variant];

  if (size === 'slim') {
    return (
      <section className="py-6 px-5">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-xl"
          style={{
            background: 'linear-gradient(135deg, #14102e 0%, #0c0f1e 60%, #061018 100%)',
            border: '1px solid rgba(168,85,247,.25)',
            boxShadow: '0 12px 40px -16px rgba(168,85,247,.2), inset 0 1px 0 rgba(255,255,255,.04)',
          }}>
          {/* Single side glow */}
          <div className="absolute -right-16 top-1/2 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,.22), transparent 70%)', transform: 'translateY(-50%)' }} />
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,.5) 50%, transparent)' }} />

          <div className="relative px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1 min-w-0">
              <div className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: '#06b6d4' }}>
                {s.eyebrow}
              </div>
              <h3 className="font-bold leading-tight" style={{ fontSize: 'clamp(1.1rem,2vw,1.5rem)', color: '#f1f5f9' }}>
                {s.heading}
              </h3>
            </div>
            <div className="md:flex-shrink-0">
              <CTA size="sm">{s.cta} →</CTA>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-5">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #1a1040 0%, #0d0f1e 50%, #071218 100%)',
          border: '1px solid rgba(168,85,247,.3)',
          boxShadow: '0 24px 60px -20px rgba(168,85,247,.25), inset 0 1px 0 rgba(255,255,255,.05)',
        }}>
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,.3), transparent 70%)' }} />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,.2), transparent 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,.6) 30%, rgba(6,182,212,.4) 70%, transparent)' }} />

        <div className="relative px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#06b6d4' }}>
              {s.eyebrow}
            </div>
            <h3 className="font-bold leading-tight" style={{ fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', color: '#f1f5f9' }}>
              {s.heading}
            </h3>
            <p className="mt-3 leading-relaxed" style={{ color: '#64748b' }}>{s.sub}</p>
          </div>
          <div className="md:flex-shrink-0">
            <CTA size="lg">{s.cta} →</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}
