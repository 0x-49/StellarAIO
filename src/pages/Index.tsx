import { useEffect } from 'react';
import SEO from '../components/SEO';
import { faqData } from '../data/faq';

const AFFILIATE_URL = 'https://whop.com/stellaraio/stellaraio?a=digitalartlab';
const REVIEWS_URL = 'https://whop.com/stellaraio/stellaraio/reviews';

const VERIFIED_VIDEOS = [
  { id: 'Cq615aMTcU8', title: 'The ULTIMATE Stellar AIO Beginner Guide', channel: 'Soflo Sneakers' },
  { id: 'n1suXXPS9DI', title: 'How to Bot Pokemon Center on Stellar AIO', channel: 'Soflo Sneakers' },
  { id: '_ozwdem3wKc', title: 'Stellar AIO Walmart Setup Guide', channel: 'Shermio Flips' },
];

const REVIEWS = [
  {
    name: 'Hung nguyn',
    handle: '@jakenotfromstatefam',
    when: '13 days ago',
    body: 'Always hit on every drop for me. Great support on all sites and i really love it',
  },
  {
    name: 'iiiruz',
    handle: '@iiiruz',
    when: '1 month ago',
    body: "Been years since I used Stellar, joined again and they have some of the best support I've ever seen. Great Team.",
  },
  {
    name: 'DaBaYzFyNesT',
    handle: '@dagodfatha31a6',
    when: '2 months ago',
    body: 'One of the easiest bots to use. Had this bot when it was like $20/mo when it first came out & made crazy profits off their Walmart module when PS5 released. I then stopped botting/cancelled my membership for a few years, came back late 2025, got the Lifetime membership and made that initial cost back.',
  },
];

const FEATURES = [
  { title: 'Fast checkout', body: 'Automated, low-latency purchasing for limited-edition drops.' },
  { title: 'Multi-site support', body: 'Run tasks across the supported retailer list maintained by Stellar AIO.' },
  { title: '24/7 customer service', body: 'Round-the-clock support available to active members.' },
  { title: '5+ years operating', body: 'Live since approximately 2020 and still actively developed.' },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold gradient-text">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted mt-1">{label}</div>
    </div>
  );
}

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 12, border: '1px solid var(--border)' }}>
      <iframe
        loading="lazy"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
      />
    </div>
  );
}

function CTA({ children, variant = 'primary', href = AFFILIATE_URL }: { children: React.ReactNode; variant?: 'primary' | 'secondary'; href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener sponsored" className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}>
      {children}
    </a>
  );
}

export default function Index() {
  useEffect(() => {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });
    document.querySelectorAll('.rev').forEach((el) => ro.observe(el));
    requestAnimationFrame(() => {
      document.querySelectorAll('.rev:not(.vis)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 100) el.classList.add('vis');
      });
    });
    return () => ro.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <SEO
        title="Stellar AIO Review and Pricing | Automate Restock Checkouts"
        description="Stellar AIO is a multi-site checkout automation bot. 4.8 from 256 reviews on Whop, $199 per 3 months, monthly and lifetime options also available."
        path="/"
        schemaJson={[
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Stellar AIO',
            description: 'StellarAIO is a powerful automation bot to streamline the purchasing process for limited-edition products. It features fast checkout, multi-site support, and 24/7 customer service.',
            brand: { '@type': 'Brand', name: 'Stellar AIO' },
            image: 'https://stellaraio.io/og-card.jpg',
            offers: {
              '@type': 'Offer',
              price: '199.00',
              priceCurrency: 'USD',
              url: AFFILIATE_URL,
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '256',
              bestRating: '5',
              worstRating: '1',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((q) => ({
              '@type': 'Question',
              name: q.question,
              acceptedAnswer: { '@type': 'Answer', text: q.answer },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Stellar AIO',
            url: 'https://stellaraio.io',
            sameAs: ['https://whop.com/stellaraio/stellaraio'],
          },
        ]}
      />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md" style={{ background: 'rgba(10,14,26,.78)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            <span aria-hidden style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#a855f7,#06b6d4)', display: 'inline-block' }} />
            <span>STELLARAIO</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="/glossary" className="hover:text-white">Glossary</a>
          </nav>
          <CTA>Get Stellar AIO</CTA>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-20 pb-24 px-5">
        <div className="grid-bg absolute inset-0 opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-secondary border border-secondary/40 rounded-full px-3 py-1 mb-6 rev">
            Multi-site checkout automation
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight rev d1">
            <span className="gradient-text">STELLARAIO</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted max-w-3xl mx-auto rev d2">
            Never Miss a Restock. Automate Every Checkout.
          </p>
          <p className="mt-3 text-sm md:text-base text-muted font-mono rev d3">
            4.8 / 256 reviews &middot; 5+ years live &middot; 24/7 support
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rev d3">
            <CTA>Get Stellar AIO on Whop</CTA>
            <a href="#pricing" className="btn-secondary">See pricing</a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto rev d3">
            <Stat value="4.8" label="Avg rating" />
            <Stat value="256" label="Whop reviews" />
            <Stat value="5+" label="Years live" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center rev">What you get</h2>
          <p className="text-center text-muted mt-3 max-w-2xl mx-auto rev d1">
            Pulled directly from the live Whop product page. No invented claims.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`card p-6 rev d${(i % 3) + 1}`}>
                <div className="w-10 h-10 rounded-lg mb-4" style={{ background: 'linear-gradient(135deg,#a855f7,#06b6d4)' }} />
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-muted text-sm mt-2 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <section className="py-12 px-5">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 md:p-10 text-center" style={{ background: 'linear-gradient(120deg, rgba(168,85,247,.18), rgba(6,182,212,.12))', border: '1px solid var(--border)' }}>
          <h3 className="text-2xl md:text-3xl font-bold">Ready to stop missing drops?</h3>
          <p className="text-muted mt-2">Activate Stellar AIO via Whop in under two minutes.</p>
          <div className="mt-5"><CTA>Start with Stellar AIO</CTA></div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center rev">Real Whop reviews</h2>
          <div className="flex items-center justify-center gap-3 mt-4 rev d1">
            <span className="text-2xl text-yellow-400">{'★★★★★'}</span>
            <span className="font-mono text-sm text-muted">4.8 / 5 from 256 reviews</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {REVIEWS.map((r, i) => (
              <blockquote key={r.handle} className={`card p-6 rev d${(i % 3) + 1}`}>
                <div className="text-yellow-400 text-sm mb-3" aria-hidden>★★★★★</div>
                <p className="text-sm leading-relaxed">"{r.body}"</p>
                <footer className="mt-4 pt-4 border-t text-xs" style={{ borderColor: 'var(--border)' }}>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-muted font-mono">{r.handle} &middot; {r.when}</div>
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="text-xs text-muted text-center mt-8 font-mono">
            Source: <a href={REVIEWS_URL} target="_blank" rel="noopener" className="underline hover:text-secondary">whop.com/stellaraio/stellaraio/reviews</a> &middot; last verified 2026-04-29
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section id="videos" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center rev">Tutorials from the community</h2>
          <p className="text-center text-muted mt-3 rev d1">Verified public YouTube videos that demo Stellar AIO setup.</p>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {VERIFIED_VIDEOS.map((v, i) => (
              <div key={v.id} className={`rev d${(i % 3) + 1}`}>
                <YouTubeEmbed id={v.id} title={v.title} />
                <div className="mt-3">
                  <div className="font-semibold text-sm">{v.title}</div>
                  <div className="text-muted text-xs font-mono">{v.channel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <section className="py-12 px-5">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 md:p-10 text-center" style={{ background: 'linear-gradient(120deg, rgba(6,182,212,.16), rgba(168,85,247,.14))', border: '1px solid var(--border)' }}>
          <h3 className="text-2xl md:text-3xl font-bold">Join 256+ Stellar AIO members</h3>
          <p className="text-muted mt-2">4.8-star average rating on Whop.</p>
          <div className="mt-5"><CTA>Activate Stellar AIO</CTA></div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold rev">Pricing</h2>
          <p className="text-muted mt-3 rev d1">Pricing as listed on Whop on 2026-04-29.</p>
          <div className="card p-10 mt-10 rev d2 text-center" style={{ background: 'linear-gradient(180deg, var(--surface), var(--surface-2))' }}>
            <div className="text-sm uppercase tracking-widest text-secondary font-mono">3-month plan</div>
            <div className="mt-3 text-6xl font-bold gradient-text">$199</div>
            <div className="text-muted mt-2">per 3 months</div>
            <div className="mt-6 text-sm text-muted">Monthly and Lifetime options available. See Whop for full pricing.</div>
            <div className="mt-7"><CTA>View on Whop</CTA></div>
            <div className="mt-4 text-xs text-muted font-mono">Cancel any time via your Whop account.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center rev">FAQ</h2>
          <div className="mt-10 space-y-3">
            {faqData.map((q, i) => (
              <details key={i} className="card p-5 rev">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q.question}</span>
                  <span className="text-secondary text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-muted text-sm leading-relaxed">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CTA 3 */}
      <section className="py-12 px-5">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 md:p-10 text-center" style={{ background: 'linear-gradient(120deg, rgba(168,85,247,.22), rgba(6,182,212,.18))', border: '1px solid var(--border)' }}>
          <h3 className="text-2xl md:text-3xl font-bold">Get the bot. Get the drops.</h3>
          <p className="text-muted mt-2">$199 / 3 months &middot; multi-site &middot; 24/7 support</p>
          <div className="mt-5"><CTA>Get Stellar AIO</CTA></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-bold text-base">STELLARAIO</div>
            <p className="text-muted mt-2">Independent affiliate landing page for Stellar AIO. Stellar AIO is a trademark of its respective owner.</p>
          </div>
          <div>
            <div className="font-bold uppercase text-xs tracking-widest text-muted">Links</div>
            <ul className="mt-3 space-y-2">
              <li><a href={AFFILIATE_URL} target="_blank" rel="noopener sponsored" className="hover:text-secondary">Get Stellar AIO</a></li>
              <li><a href="/glossary" className="hover:text-secondary">Glossary</a></li>
              <li><a href="/blog" className="hover:text-secondary">Tutorials</a></li>
              <li><a href="/privacy" className="hover:text-secondary">Privacy</a></li>
              <li><a href="/terms" className="hover:text-secondary">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold uppercase text-xs tracking-widest text-muted">Disclosure</div>
            <p className="text-muted mt-3">This site may earn a commission when you purchase Stellar AIO via the links on this page. Pricing and ratings are sourced from the live Whop product page on 2026-04-29 and may change.</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t flex flex-wrap items-center justify-between gap-3 text-xs text-muted font-mono" style={{ borderColor: 'var(--border)' }}>
          <span>(c) {new Date().getFullYear()} StellarAIO Affiliate Site</span>
          <span>Built for the multi-site botting community.</span>
        </div>
      </footer>
    </div>
  );
}
