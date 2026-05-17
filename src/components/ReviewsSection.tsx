import { reviews } from '../data/reviews';
import { REVIEWS_URL } from '../data/links';

function Stars({ n, size = 'sm' }: { n: number; size?: 'sm' | 'md' }) {
  const px = size === 'md' ? 20 : 14;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} style={{ width: px, height: px }} viewBox="0 0 24 24"
          fill={i <= n ? '#facc15' : 'none'}
          stroke={i <= n ? '#facc15' : '#2d3748'}
          strokeWidth={1.5}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg,#a855f7,#7c3aed)',
  'linear-gradient(135deg,#06b6d4,#0891b2)',
  'linear-gradient(135deg,#a855f7,#06b6d4)',
  'linear-gradient(135deg,#10b981,#059669)',
  'linear-gradient(135deg,#f59e0b,#d97706)',
  'linear-gradient(135deg,#ef4444,#b91c1c)',
];

export default function ReviewsSection() {
  const positive = reviews.filter((r) => r.rating >= 4);
  const negative = reviews.filter((r) => r.rating < 4);

  return (
    <section id="reviews" className="py-24 px-5 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(250,204,21,.03), transparent)' }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 rev">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5"
            style={{ color: '#facc15', background: 'rgba(250,204,21,.06)', border: '1px solid rgba(250,204,21,.2)' }}>
            Verified reviews
          </span>
          <h2 className="font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#f1f5f9', lineHeight: 1.1 }}>
            Real Whop reviews.<br />
            <span style={{ color: '#facc15' }}>Not hand-picked.</span>
          </h2>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 mt-5 px-5 py-3 rounded-2xl"
            style={{ background: 'rgba(250,204,21,.06)', border: '1px solid rgba(250,204,21,.15)' }}>
            <Stars n={5} size="md" />
            <span className="font-bold text-2xl" style={{ color: '#f1f5f9' }}>4.8</span>
            <span className="text-muted font-mono text-sm">from 256 verified reviews on Whop</span>
          </div>
        </div>

        {/* Positive review grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {positive.map((r, i) => (
            <blockquote
              key={r.handle}
              className={`rounded-2xl p-6 rev d${(i % 3) + 1} flex flex-col`}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <Stars n={r.rating} />
              <p className="text-sm leading-relaxed mt-4 flex-1" style={{ color: '#94a3b8' }}>
                "{r.body}"
              </p>
              <footer className="mt-5 pt-4 border-t flex items-center gap-3"
                style={{ borderColor: 'var(--border)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length], color: '#fff' }}>
                  {r.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#f1f5f9' }}>{r.name}</div>
                  <div className="text-xs font-mono" style={{ color: '#374151' }}>{r.when}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Negative review — honesty section */}
        {negative.length > 0 && (
          <div className="mt-5 rev d3">
            {negative.map((r) => (
              <blockquote
                key={r.handle}
                className="rounded-2xl p-6 flex flex-col md:flex-row gap-6"
                style={{ background: 'rgba(239,68,68,.03)', border: '1px solid rgba(239,68,68,.14)' }}>
                <div className="md:flex-shrink-0 flex items-start gap-4 md:flex-col md:gap-3">
                  <Stars n={r.rating} />
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(239,68,68,.15)', color: '#ef4444' }}>
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>"{r.body}"</p>
                  <footer className="mt-3 text-xs font-mono" style={{ color: '#374151' }}>
                    {r.name} · {r.when} ·{' '}
                    <span style={{ color: '#ef4444' }}>1-star review, verbatim</span>
                  </footer>
                </div>
                <div className="md:w-60 text-xs leading-relaxed rounded-xl px-4 py-3 self-start"
                  style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)', color: '#4b5563' }}>
                  Included for transparency. Bot performance varies with proxies, accounts, and timing. No bot guarantees checkouts on every drop.
                </div>
              </blockquote>
            ))}
          </div>
        )}

        <p className="text-xs text-muted text-center mt-6 font-mono">
          Source:{' '}
          <a href={REVIEWS_URL} target="_blank" rel="noopener"
            className="underline hover:text-secondary underline-offset-2">
            whop.com/stellaraio/stellaraio/reviews
          </a>{' '}
          · verbatim quotes · last verified 2026-04-29
        </p>
      </div>
    </section>
  );
}
