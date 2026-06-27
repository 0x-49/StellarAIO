import { useRef, useState, useEffect } from 'react';
import { carousels, type CarouselDeck } from '../data/carousels';
import { AFFILIATE_URL } from '../data/links';

const SITE_ORIGIN = 'https://stellaraio.io';

function CarouselSchema({ decks }: { decks: CarouselDeck[] }) {
  const ld = decks.map((d) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: d.title,
    description: d.blurb,
    image: d.slides.map((s, i) => ({
      '@type': 'ImageObject',
      name: s.caption,
      description: s.alt,
      caption: s.caption,
      contentUrl: `${SITE_ORIGIN}${s.src}`,
      width: d.width,
      height: d.height,
      position: i + 1,
      encodingFormat: 'image/png',
      representativeOfPage: i === 0,
    })),
  }));
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}

function ArrowIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SlideTrack({ deck }: { deck: CarouselDeck }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'auto' });
  }, [deck.slug]);

  const sizing = deck.ratio === '16:9'
    ? { width: 720, height: 405 }
    : deck.ratio === '1:1'
      ? { width: 460, height: 460 }
      : { width: 400, height: 500 };
  const gap = 20;

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(deck.slides.length - 1, i));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      setIndex(clamped);
    }
  };

  const activeSlide = deck.slides[index];

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5"
        style={{ gap: `${gap}px`, scrollbarWidth: 'none' }}
        onScroll={(e) => {
          const t = e.currentTarget;
          const idx = Math.round(t.scrollLeft / (sizing.width + gap));
          if (idx !== index) setIndex(idx);
        }}
      >
        {deck.slides.map((s, i) => (
          <a
            key={s.src}
            href={s.src}
            target="_blank"
            rel="noopener"
            className="group flex-shrink-0 snap-start rounded-2xl overflow-hidden block transition-all duration-300 relative"
            style={{
              width: `min(${sizing.width}px, calc(100vw - 40px))`,
              height: `min(${sizing.height}px, calc((100vw - 40px) * ${sizing.height / sizing.width}))`,
              background: '#0a0710',
              border: `1px solid ${i === index ? 'rgba(168,85,247,.55)' : 'var(--border)'}`,
              boxShadow: i === index
                ? '0 24px 70px -18px rgba(168,85,247,.62)'
                : '0 12px 40px -16px rgba(0,0,0,.5)',
              transform: i === index ? 'scale(1)' : 'scale(0.96)',
              opacity: i === index ? 1 : 0.76,
            }}
            title={s.caption}
            aria-label={`Click to expand slide ${i + 1}: ${s.caption}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              decoding="async"
              width={deck.width}
              height={deck.height}
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span
              className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(7,11,22,.82)', border: '1px solid rgba(255,255,255,.18)', color: '#e2e8f0', backdropFilter: 'blur(12px)' }}
            >
              Click to expand <ArrowIcon />
            </span>
          </a>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="min-w-0 flex-1">
          <div className="text-xs font-mono mb-1" style={{ color: '#64748b' }}>
            Slide {String(index + 1).padStart(2, '0')} of {String(deck.slides.length).padStart(2, '0')}
          </div>
          <div className="font-semibold text-base" style={{ color: '#f1f5f9' }}>
            {activeSlide.caption}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">

          <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener" className="btn-primary !py-2 !px-3 text-sm">
            Get StellarAIO <ArrowIcon />
          </a>
          <button
            onClick={() => scrollTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: '#94a3b8' }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={() => scrollTo(index + 1)}
            disabled={index === deck.slides.length - 1}
            aria-label="Next slide"
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: '#94a3b8' }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CarouselSection() {
  const [active, setActive] = useState(0);
  const deck = carousels[active];

  return (
    <section
      id="carousels"
      className="py-16 md:py-20 px-5 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-labelledby="carousels-heading"
    >
      <CarouselSchema decks={carousels} />

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(168,85,247,.14), transparent)' }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 items-end mb-10 rev">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-5"
              style={{ color: '#c084fc', background: 'rgba(168,85,247,.08)', border: '1px solid rgba(168,85,247,.2)' }}>
              Carousel swipe files
            </span>
            <h2 id="carousels-heading" className="font-bold" style={{ fontSize: 'clamp(2.25rem,5vw,4.7rem)', color: '#f1f5f9', lineHeight: .95, letterSpacing: '-0.045em' }}>
              See the drop-day story before you buy.
            </h2>
            <p className="text-muted mt-5 max-w-2xl leading-relaxed text-lg">
              Swipe the proof, setup, and operator-story decks. Click any slide to expand it, then jump straight to the Whop checkout when the stack makes sense.
            </p>
          </div>
          <div className="glass rounded-2xl p-4">
            <div className="text-xs font-mono uppercase tracking-[0.14em]" style={{ color: '#06b6d4' }}>Start here</div>
            <p className="mt-2 font-semibold" style={{ color: '#f8fafc' }}>New ImageGen deck: cinematic 16:9 drop operator command center.</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button onClick={() => setActive(carousels.findIndex((c) => c.slug === 'imagegen2-drop-operator'))} className="btn-secondary !py-2 !px-3 text-sm">
                View new deck
              </button>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener" className="btn-primary !py-2 !px-3 text-sm">
                Buy on Whop
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start rev d1">
          <div className="space-y-2 lg:sticky lg:top-24">
            {carousels.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => setActive(i)}
                aria-current={i === active}
                className="w-full text-left rounded-xl p-4 transition-all"
                style={{
                  background: i === active
                    ? 'linear-gradient(135deg, rgba(168,85,247,.16), rgba(6,182,212,.06))'
                    : 'var(--surface)',
                  border: `1px solid ${i === active ? 'rgba(168,85,247,.55)' : 'var(--border)'}`,
                  cursor: 'pointer',
                }}>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-mono flex-shrink-0" style={{ color: i === active ? '#a855f7' : '#64748b' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-sm leading-snug" style={{ color: i === active ? '#f1f5f9' : '#94a3b8' }}>
                    {c.title}
                  </span>
                </div>
                <div className="text-xs font-mono ml-7 mt-1.5" style={{ color: i === active ? '#38bdf8' : '#64748b' }}>
                  {c.slides.length} slides / {c.ratio}
                </div>
              </button>
            ))}
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener" className="btn-primary w-full mt-4">
              Get StellarAIO after reviewing <ArrowIcon />
            </a>
          </div>

          <div className="min-w-0">
            <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-bold text-3xl leading-tight" style={{ color: '#f1f5f9' }}>
                  {deck.title}
                </h3>
                <p className="text-muted mt-2 leading-relaxed max-w-3xl">{deck.blurb}</p>
              </div>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener" className="btn-primary flex-shrink-0">
                Checkout on Whop <ArrowIcon />
              </a>
            </div>

            <SlideTrack key={deck.slug} deck={deck} />

            <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-4 items-center rounded-2xl p-5"
              style={{ background: 'linear-gradient(135deg, rgba(168,85,247,.14), rgba(6,182,212,.08))', border: '1px solid rgba(168,85,247,.28)' }}>
              <div>
                <div className="font-bold" style={{ color: '#f8fafc' }}>{deck.takeaway}</div>
                <div className="text-xs font-mono mt-2" style={{ color: '#94a3b8' }}>
                  {deck.slides.length} slides / {deck.width}x{deck.height}px / click any slide to expand
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <a href="#pricing" className="btn-secondary">See pricing</a>
                <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener" className="btn-primary">Get access <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

