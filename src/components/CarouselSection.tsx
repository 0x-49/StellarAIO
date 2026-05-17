import { useRef, useState, useEffect } from 'react';
import { carousels, type CarouselDeck } from '../data/carousels';
import CTA from './CTA';

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

function SlideTrack({ deck }: { deck: CarouselDeck }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'auto' });
  }, [deck.slug]);

  // Bigger cards — slides are the hero, not the metadata.
  const cardWidth = deck.ratio === '1:1' ? 460 : 400;
  const cardHeight = deck.ratio === '1:1' ? 460 : 500;
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

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5"
        style={{ gap: `${gap}px`, scrollbarWidth: 'none' }}
        onScroll={(e) => {
          const t = e.currentTarget;
          const idx = Math.round(t.scrollLeft / (cardWidth + gap));
          if (idx !== index) setIndex(idx);
        }}
      >
        {deck.slides.map((s, i) => (
          <a
            key={s.src}
            href={s.src}
            target="_blank"
            rel="noopener"
            className="flex-shrink-0 snap-start rounded-2xl overflow-hidden block transition-all duration-300"
            style={{
              width: cardWidth,
              height: cardHeight,
              background: '#0a0710',
              border: `1px solid ${i === index ? 'rgba(168,85,247,.45)' : 'var(--border)'}`,
              boxShadow: i === index
                ? '0 24px 60px -20px rgba(168,85,247,.55)'
                : '0 12px 40px -16px rgba(0,0,0,.5)',
              transform: i === index ? 'scale(1)' : 'scale(0.96)',
              opacity: i === index ? 1 : 0.7,
            }}
            title={s.caption}
            aria-label={`Slide ${i + 1} of ${deck.slides.length}: ${s.caption}`}
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
          </a>
        ))}
      </div>

      {/* Active slide caption + controls */}
      <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="min-w-0 flex-1">
          <div className="text-xs font-mono mb-1" style={{ color: '#475569' }}>
            Slide {String(index + 1).padStart(2, '0')} of {String(deck.slides.length).padStart(2, '0')}
          </div>
          <div className="font-semibold text-base" style={{ color: '#f1f5f9' }}>
            {deck.slides[index].caption}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 mr-2">
            {deck.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="rounded-full transition-all"
                style={{
                  width: i === index ? 24 : 6,
                  height: 6,
                  background: i === index ? '#a855f7' : '#1e2d47',
                  cursor: 'pointer',
                  border: 'none',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => scrollTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: '#94a3b8' }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo(index + 1)}
            disabled={index === deck.slides.length - 1}
            aria-label="Next slide"
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: '#94a3b8' }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
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
      className="py-24 px-5 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="carousels-heading"
    >
      <CarouselSchema decks={carousels} />

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(168,85,247,.09), transparent)' }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 rev">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5"
            style={{ color: '#c084fc', background: 'rgba(168,85,247,.08)', border: '1px solid rgba(168,85,247,.2)' }}>
            Drop notes
          </span>
          <h2 id="carousels-heading" className="font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#f1f5f9', lineHeight: 1.1 }}>
            Field guides for resellers,<br />
            <span className="gradient-text">slide by slide.</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            The math, the setup, and the vocabulary every reseller eventually figures out the hard way. Save the slides, share them, or just read them here.
          </p>
        </div>

        {/* Side-panel + slides layout */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start rev d1">

          {/* Left: deck picker as a stacked list */}
          <div className="space-y-2 lg:sticky lg:top-24">
            {carousels.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => setActive(i)}
                aria-current={i === active}
                className="w-full text-left rounded-xl p-4 transition-all"
                style={{
                  background: i === active
                    ? 'linear-gradient(135deg, rgba(168,85,247,.14), rgba(168,85,247,.04))'
                    : 'var(--surface)',
                  border: `1px solid ${i === active ? 'rgba(168,85,247,.45)' : 'var(--border)'}`,
                  cursor: 'pointer',
                }}>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-mono flex-shrink-0"
                    style={{ color: i === active ? '#a855f7' : '#374151' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-sm leading-snug"
                    style={{ color: i === active ? '#f1f5f9' : '#94a3b8' }}>
                    {c.title}
                  </span>
                </div>
                <div className="text-xs font-mono ml-7 mt-1.5"
                  style={{ color: i === active ? '#a855f7' : '#374151' }}>
                  → {c.takeaway}
                </div>
              </button>
            ))}
          </div>

          {/* Right: active deck */}
          <div className="min-w-0">
            <div className="mb-6">
              <h3 className="font-bold text-2xl leading-tight" style={{ color: '#f1f5f9' }}>
                {deck.title}
              </h3>
              <p className="text-muted mt-2 leading-relaxed">{deck.blurb}</p>
            </div>

            <SlideTrack key={deck.slug} deck={deck} />

            {/* Bottom CTA + meta */}
            <div className="mt-8 pt-6 flex items-center justify-between gap-4 flex-wrap"
              style={{ borderTop: '1px solid var(--border)' }}>
              <div className="text-xs font-mono" style={{ color: '#374151' }}>
                {deck.slides.length} slides · {deck.width}×{deck.height}px · click any slide for full-size PNG
              </div>
              <CTA size="sm">Get StellarAIO →</CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
