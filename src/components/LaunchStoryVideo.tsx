import { useEffect, useMemo, useRef, useState } from 'react';
import { Activity, Bot, CreditCard, Gauge, Headphones, Play, Radar, ShieldCheck, Zap } from 'lucide-react';

type Beat = {
  label: string;
  voice: string;
  caption: string;
  words: string[];
  hot: string[];
  image: string;
  imageAlt: string;
  icons: string[];
  proof: string[];
  accent: string;
  icon: typeof Zap;
};

const beats: Beat[] = [
  {
    label: 'Drop opens',
    voice: 'You are not slow. The checkout window is just shorter than a human click path.',
    caption: 'The drop is gone before checkout loads.',
    words: ['The', 'drop', 'is', 'gone', 'before', 'checkout', 'loads.'],
    hot: ['drop', 'gone', 'checkout'],
    image: '/carousels/01-manual-vs-bot-obsidian-1x1/02-bigNumber.png',
    imageAlt: 'Carousel slide showing the speed gap: bot checkout in 50ms versus manual checkout in 8 to 12 seconds.',
    icons: ['50ms', '8-12s', 'queue', 'sold out'],
    proof: ['manual loses on timing', 'stock clears in seconds'],
    accent: '#ef4444',
    icon: Gauge,
  },
  {
    label: 'Old loop',
    voice: 'One tab, one card, one IP, and a hand-solved captcha cannot fight seventy retailer queues at once.',
    caption: 'One setup cannot fight seventy queues.',
    words: ['One', 'setup', 'cannot', 'fight', 'seventy', 'queues.'],
    hot: ['One', 'seventy', 'queues.'],
    image: '/carousels/01-manual-vs-bot-obsidian-1x1/03-comparison.png',
    imageAlt: 'Carousel slide comparing manual checkout with an AIO bot side by side.',
    icons: ['1 tab', '1 IP', 'captcha', '70+'],
    proof: ['manual path bottlenecks', 'AIO runs in parallel'],
    accent: '#f59e0b',
    icon: Radar,
  },
  {
    label: 'Mechanism',
    voice: 'Stellar AIO watches the drop, attaches the right proxy, fires add-to-cart, solves, pays, and confirms.',
    caption: 'Monitor. Proxy. ATC. Solve. Pay.',
    words: ['Monitor.', 'Proxy.', 'ATC.', 'Solve.', 'Pay.'],
    hot: ['ATC.', 'Pay.'],
    image: '/carousels/05-how-it-works-cyberpunk-4x5/03-stepSequence.png',
    imageAlt: 'Carousel slide showing the five-step checkout sequence: monitor fires, proxy attaches, ATC, captcha solve, payment.',
    icons: ['radar', 'proxy', 'ATC', 'captcha', 'pay'],
    proof: ['sub-second cook path', 'one workflow per retailer'],
    accent: '#06b6d4',
    icon: Bot,
  },
  {
    label: 'Scale',
    voice: 'The point is not magic. It is parallel execution across Walmart, Pokemon Center, Target, Best Buy, SNKRS, and more.',
    caption: 'Parallel execution beats manual speed.',
    words: ['Parallel', 'execution', 'beats', 'manual', 'speed.'],
    hot: ['Parallel', 'beats', 'speed.'],
    image: '/carousels/05-how-it-works-cyberpunk-4x5/02-bigNumber.png',
    imageAlt: 'Carousel slide showing 70 plus retailer modules in one StellarAIO subscription.',
    icons: ['Walmart', 'Target', 'Best Buy', 'SNKRS'],
    proof: ['70+ retailers', 'one subscription'],
    accent: '#a855f7',
    icon: Activity,
  },
  {
    label: 'Risk check',
    voice: 'But the bot is not the whole stack. Proxies, profiles, cards, accounts, and drop math decide whether the cook is worth it.',
    caption: 'The bot is not the whole stack.',
    words: ['The', 'bot', 'is', 'not', 'the', 'whole', 'stack.'],
    hot: ['not', 'whole', 'stack.'],
    image: '/carousels/03-five-mistakes-bold-1x1/03-comparison.png',
    imageAlt: 'Carousel slide comparing a failing bot setup with a working setup.',
    icons: ['proxies', 'cards', 'accounts', 'margin'],
    proof: ['avoid setup mistakes', 'run the math first'],
    accent: '#f97316',
    icon: ShieldCheck,
  },
  {
    label: 'Decision',
    voice: 'If you already chase profitable drops, Stellar AIO gives you the operating layer manual buyers do not have.',
    caption: 'Use it when the drop is worth automating.',
    words: ['Use', 'it', 'when', 'the', 'drop', 'is', 'worth', 'automating.'],
    hot: ['drop', 'worth', 'automating.'],
    image: '/carousels/05-how-it-works-cyberpunk-4x5/06-cta.png',
    imageAlt: 'Carousel CTA slide for StellarAIO.',
    icons: ['Whop', 'support', 'setup', 'go live'],
    proof: ['4.8 Whop rating', '256 reviews', '24/7 support'],
    accent: '#10b981',
    icon: CreditCard,
  },
];

function createSfx() {
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;
  const context = new AudioContextClass();
  const master = context.createGain();
  master.gain.value = 0.09;
  master.connect(context.destination);

  const hit = (frequency: number, duration = 0.09) => {
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(80, frequency * 0.35), now + duration);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.75, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  };

  const sweep = () => {
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(160, now);
    oscillator.frequency.exponentialRampToValueAtTime(860, now + 0.18);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.35, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + 0.24);
  };

  return { context, hit, sweep };
}

export default function LaunchStoryVideo() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const sfx = useRef<ReturnType<typeof createSfx> | null>(null);
  const beat = beats[active];
  const Icon = beat.icon;

  const captionWords = useMemo(() => beat.words.map((word) => ({
    word,
    hot: beat.hot.includes(word),
  })), [beat]);

  useEffect(() => {
    if (!playing) return undefined;
    sfx.current?.sweep();
    sfx.current?.hit(520 + active * 80, 0.1);
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % beats.length);
    }, 4400);
    return () => window.clearTimeout(timer);
  }, [active, playing]);

  const start = async () => {
    if (!sfx.current) sfx.current = createSfx();
    if (sfx.current?.context.state === 'suspended') await sfx.current.context.resume();
    setPlaying(true);
    sfx.current?.hit(740, 0.12);
  };

  return (
    <section id="launch-story" className="py-24 px-5 border-t overflow-hidden relative" style={{ borderColor: 'var(--border)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 22% 20%, rgba(168,85,247,.16), transparent 32%), radial-gradient(circle at 82% 70%, rgba(6,182,212,.12), transparent 34%)',
      }} />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 rev">
          <span className="inline-flex text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5"
            style={{ color: '#67e8f9', background: 'rgba(6,182,212,.08)', border: '1px solid rgba(6,182,212,.24)' }}>
            Story reel
          </span>
          <h2 className="font-bold text-4xl md:text-6xl leading-none">
            The drop story,<br /><span className="gradient-text">word by word.</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            A tighter launch-video pass: carousel-grade visuals, beat-synced captions, kinetic proof icons, and sound effects tied to the reseller decision moment.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden min-h-[520px] lg:min-h-[620px] card-gradient-border rev d1">
            <img
              key={beat.image}
              src={beat.image}
              alt={beat.imageAlt}
              className="absolute inset-0 w-full h-full object-cover story-frame-img"
            />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(90deg, rgba(7,11,22,.96), rgba(7,11,22,.62) 48%, rgba(7,11,22,.12)), radial-gradient(circle at 25% 55%, ${beat.accent}44, transparent 32%)`,
            }} />

            <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-4 z-10">
              <div className="inline-flex items-center gap-3 rounded-xl px-3 py-2" style={{ background: 'rgba(15,20,33,.76)', border: '1px solid rgba(255,255,255,.10)' }}>
                <span className="w-9 h-9 rounded-lg grid place-items-center" style={{ background: beat.accent }}>
                  <Icon size={19} />
                </span>
                <span className="font-mono text-xs uppercase tracking-[.16em]" style={{ color: '#e2e8f0' }}>{beat.label}</span>
              </div>
              <button
                type="button"
                onClick={start}
                className="btn-primary !py-2 !px-4"
                aria-label="Play story reel with sound effects"
              >
                <Play size={16} fill="currentColor" />
                {playing ? 'Playing' : 'Play with SFX'}
              </button>
            </div>

            <div className="absolute left-7 md:left-10 top-28 md:top-32 z-10 max-w-[760px]">
              <div className="flex flex-wrap gap-x-4 gap-y-3">
                {captionWords.map(({ word, hot }, i) => (
                  <span
                    key={`${active}-${word}-${i}`}
                    className="story-word"
                    style={{
                      animationDelay: `${0.08 + i * 0.08}s`,
                      color: hot ? beat.accent : '#f8fafc',
                      background: hot ? `${beat.accent}1f` : 'transparent',
                      borderColor: hot ? `${beat.accent}80` : 'transparent',
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
              <p key={`${active}-voice`} className="mt-8 max-w-2xl text-xl md:text-2xl leading-tight story-voice" style={{ color: '#cbd5e1' }}>
                {beat.voice}
              </p>
            </div>

            <div className="absolute left-7 md:left-10 right-7 bottom-7 z-10 grid md:grid-cols-[1fr_auto] gap-5 items-end">
              <div className="flex flex-wrap gap-2.5">
                {beat.icons.map((item, i) => (
                  <span
                    key={`${active}-${item}`}
                    className="story-icon-chip"
                    style={{ animationDelay: `${0.3 + i * 0.07}s`, borderColor: `${beat.accent}55` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {beats.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setActive(i);
                      sfx.current?.hit(400 + i * 60, 0.08);
                    }}
                    aria-label={`Go to story beat ${i + 1}`}
                    className="rounded-full transition-all"
                    style={{
                      width: i === active ? 32 : 8,
                      height: 8,
                      border: 0,
                      background: i === active ? beat.accent : '#334155',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-3 rev d2">
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-[.16em]" style={{ color: '#67e8f9' }}>
                <Headphones size={16} />
                audio plan
              </div>
              <p className="mt-3 text-muted leading-relaxed">
                SFX are generated in-browser on click: impact hits for hot words, sweep transitions between beats, and no autoplay-blocked dead audio.
              </p>
            </div>

            {beat.proof.map((proof) => (
              <div key={proof} className="rounded-xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="text-xs font-mono uppercase tracking-[.14em]" style={{ color: beat.accent }}>proof point</div>
                <div className="mt-2 font-semibold text-lg leading-tight">{proof}</div>
              </div>
            ))}

            <div className="rounded-2xl p-5" style={{ background: 'rgba(168,85,247,.10)', border: '1px solid rgba(168,85,247,.25)' }}>
              <div className="text-xs font-mono uppercase tracking-[.14em]" style={{ color: '#c084fc' }}>script rule</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Every beat keeps continuity: buyer pressure, failed manual loop, mechanism, scale, risk check, then decision. No generic feature list.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

