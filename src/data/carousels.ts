export interface CarouselSlide {
  src: string;
  archetype: string;
  caption: string;
  alt: string;
}

export interface CarouselDeck {
  slug: string;
  title: string;
  blurb: string;
  takeaway: string;
  ratio: '1:1' | '4:5';
  preset: string;
  width: number;
  height: number;
  slides: CarouselSlide[];
}

const dims = (ratio: '1:1' | '4:5') =>
  ratio === '1:1' ? { width: 1080, height: 1080 } : { width: 1080, height: 1350 };

export const carousels: CarouselDeck[] = [
  // ───────────────────────────────────────────────────────────
  // 01 — Manual vs Bot
  // ───────────────────────────────────────────────────────────
  {
    slug: 'manual-vs-bot',
    title: 'Why manual buyers lose every drop',
    blurb:
      'Bots fire ATC in 50ms. Humans take 8–12 seconds — and the drop is already gone. Here is exactly what the bot does differently in the sub-second window before stock clears.',
    takeaway: 'Manual buyers compete on speed they cannot beat. The gap is ~200x.',
    ratio: '1:1',
    preset: 'obsidian',
    ...dims('1:1'),
    slides: [
      {
        src: '/carousels/01-manual-vs-bot-obsidian-1x1/01-titleCard.png',
        archetype: 'titleCard',
        caption: 'Why manual buyers lose every drop',
        alt: 'Cover slide. Headline reads "Why manual buyers lose every limited drop."',
      },
      {
        src: '/carousels/01-manual-vs-bot-obsidian-1x1/02-bigNumber.png',
        archetype: 'bigNumber',
        caption: 'The speed gap: 50ms vs 8–12 seconds',
        alt: 'Bot checkout fires in 50 milliseconds. Manual buyers average 8 to 12 seconds. The drop is gone in under one.',
      },
      {
        src: '/carousels/01-manual-vs-bot-obsidian-1x1/03-comparison.png',
        archetype: 'comparison',
        caption: 'Manual checkout vs AIO bot, side by side',
        alt: 'Manual checkout uses one tab, one IP, hand-solved CAPTCHA. AIO bot runs 70 retailers in parallel with residential proxies and an auto-solver.',
      },
      {
        src: '/carousels/01-manual-vs-bot-obsidian-1x1/04-list.png',
        archetype: 'list',
        caption: 'Five things you cannot out-click',
        alt: 'Five reasons manual checkout fails: queue lottery, anti-bot challenges, card velocity rules, stock allocation, backend rate limits.',
      },
      {
        src: '/carousels/01-manual-vs-bot-obsidian-1x1/05-statCards.png',
        archetype: 'statCards',
        caption: 'The speed gap at scale',
        alt: 'Four stats: under 50 ms bot checkout, 8 to 12 second manual, 70 plus retailers in parallel, 1 tab a human gets.',
      },
      {
        src: '/carousels/01-manual-vs-bot-obsidian-1x1/06-cta.png',
        archetype: 'cta',
        caption: 'Run the bot the resellers run',
        alt: 'Get StellarAIO on Whop. 4.8 stars from 256 reviews. Activate in under 2 minutes.',
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 02 — Reseller math
  // ───────────────────────────────────────────────────────────
  {
    slug: 'reseller-math',
    title: 'The reseller math nobody runs',
    blurb:
      "On a $400 sneaker flip, gross margin looks like 44% — but only ~20% actually lands in your bank after fees, proxies, taxes, and dead stock. Here is every line item.",
    takeaway: 'Floor your margin at 25% after every cost — or skip the drop.',
    ratio: '4:5',
    preset: 'midnight',
    ...dims('4:5'),
    slides: [
      {
        src: '/carousels/02-reseller-math-midnight-4x5/01-titleCard.png',
        archetype: 'titleCard',
        caption: 'The reselling math nobody runs',
        alt: 'Cover slide. Headline reads "The sneaker reselling math nobody runs."',
      },
      {
        src: '/carousels/02-reseller-math-midnight-4x5/02-statWithContext.png',
        archetype: 'statWithContext',
        caption: '44% gross — but only ~20% lands',
        alt: 'On a $400 flip, gross margin is roughly 44%. After platform fees, shipping, proxies, taxes, and dead stock, the number that lands is closer to 20%.',
      },
      {
        src: '/carousels/02-reseller-math-midnight-4x5/03-statCards.png',
        archetype: 'statCards',
        caption: '$400 flip, line by line',
        alt: 'Line items per $400 flip: $210 retail cost, $52 fees and shipping, $12 bot and proxy share, $126 net profit (~31% margin).',
      },
      {
        src: '/carousels/02-reseller-math-midnight-4x5/04-list.png',
        archetype: 'list',
        caption: 'Five hidden costs beginners forget',
        alt: 'Hidden costs: failed cook tax, dead stock holding, 1099-K sales tax, restock fees, slow authentication payouts.',
      },
      {
        src: '/carousels/02-reseller-math-midnight-4x5/05-stepSequence.png',
        archetype: 'stepSequence',
        caption: 'Four checks before you buy the drop',
        alt: 'Pre-drop checks: pull the 30-day resale comp, subtract platform fees, deduct bot and proxy share, floor your margin at 25%.',
      },
      {
        src: '/carousels/02-reseller-math-midnight-4x5/06-quote.png',
        archetype: 'quote',
        caption: 'What kills new resellers',
        alt: 'Verified Whop review. "The bot is the cheapest part of the stack. What kills new resellers is paying for proxies they do not use and hyping pairs that sit dead-stock for 90 days."',
      },
      {
        src: '/carousels/02-reseller-math-midnight-4x5/07-cta.png',
        archetype: 'cta',
        caption: 'Replay every drop you missed',
        alt: 'StellarAIO ships with a backtesting window so you can replay every drop you missed.',
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 03 — Five mistakes
  // ───────────────────────────────────────────────────────────
  {
    slug: 'five-mistakes',
    title: 'Five AIO bot mistakes that cost you',
    blurb:
      'The setup errors that turn a $200 bot subscription into a $0 ROI. Datacenter proxies, card velocity, cold accounts, and two more new botters always get wrong.',
    takeaway: 'Most missed cooks are setup errors, not bot errors.',
    ratio: '1:1',
    preset: 'bold',
    ...dims('1:1'),
    slides: [
      {
        src: '/carousels/03-five-mistakes-bold-1x1/01-titleCard.png',
        archetype: 'titleCard',
        caption: 'Five mistakes that cost you the drop',
        alt: 'Cover slide. Headline reads "Five AIO bot mistakes that cost you the drop."',
      },
      {
        src: '/carousels/03-five-mistakes-bold-1x1/02-list.png',
        archetype: 'list',
        caption: 'The five common setup errors',
        alt: 'Five common setup errors: datacenter proxies, card velocity, no account warming, single task group, missing CAPTCHA budget.',
      },
      {
        src: '/carousels/03-five-mistakes-bold-1x1/03-comparison.png',
        archetype: 'comparison',
        caption: 'Setup A (fails) vs Setup B (hits)',
        alt: 'Failed setup uses one datacenter pool, one card, no CAPTCHA credit, cold accounts. Working setup uses residential ISP per task, rotated cards, $30 CAPTCHA balance, accounts warmed 14 days.',
      },
      {
        src: '/carousels/03-five-mistakes-bold-1x1/04-stepSequence.png',
        archetype: 'stepSequence',
        caption: 'How to fix your bot stack',
        alt: 'Four steps: audit proxies per site, group cards into profiles, pre-fund CAPTCHA solvers, warm accounts 14 days before drops.',
      },
      {
        src: '/carousels/03-five-mistakes-bold-1x1/05-bigNumber.png',
        archetype: 'bigNumber',
        caption: '$30 to upgrade your proxies',
        alt: 'Thirty dollars is the all-in cost of upgrading from datacenter to residential proxies for one major Pokémon drop.',
      },
      {
        src: '/carousels/03-five-mistakes-bold-1x1/06-cta.png',
        archetype: 'cta',
        caption: 'Get the bot with sane defaults',
        alt: 'StellarAIOs 24/7 Discord catches setup mistakes before the drop.',
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 04 — Glossary
  // ───────────────────────────────────────────────────────────
  {
    slug: 'glossary',
    title: 'Speak fluent AIO botting',
    blurb:
      'The eleven terms every reseller throws around on Discord — AIO, module, cook, ATC, queue spot, profile group — translated for newcomers so the chat stops being noise.',
    takeaway: 'Learn the vocabulary in 5 minutes, save a week of confusion.',
    ratio: '1:1',
    preset: 'mono',
    ...dims('1:1'),
    slides: [
      {
        src: '/carousels/04-glossary-mono-1x1/01-titleCard.png',
        archetype: 'titleCard',
        caption: 'Speak fluent AIO botting',
        alt: 'Cover slide. Headline reads "Speak fluent AIO botting."',
      },
      {
        src: '/carousels/04-glossary-mono-1x1/02-list.png',
        archetype: 'list',
        caption: 'Core vocabulary',
        alt: 'Glossary of core terms: AIO, task, module, cook, cooks group, proxy.',
      },
      {
        src: '/carousels/04-glossary-mono-1x1/03-list.png',
        archetype: 'list',
        caption: 'Drop-day vocabulary',
        alt: 'Glossary of advanced terms: profile group, captcha solver, queue spot, ATC, restock.',
      },
      {
        src: '/carousels/04-glossary-mono-1x1/04-quote.png',
        archetype: 'quote',
        caption: 'Why the vocabulary matters',
        alt: 'Quote from StellarAIO support. "The reseller community has a vocabulary because every word saves time."',
      },
      {
        src: '/carousels/04-glossary-mono-1x1/05-cta.png',
        archetype: 'cta',
        caption: 'Forty more terms on the site',
        alt: 'Read the full glossary on stellaraio.io.',
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 05 — How it works
  // ───────────────────────────────────────────────────────────
  {
    slug: 'how-it-works',
    title: 'How StellarAIO fires 70+ checkouts at once',
    blurb:
      'Monitor fires, proxy attaches, ATC, CAPTCHA solve, payment. Five things that happen in under one second on every supported drop — and why one AIO subscription replaces five single-site bots.',
    takeaway: 'One bot, one dashboard, every retailer.',
    ratio: '4:5',
    preset: 'cyberpunk',
    ...dims('4:5'),
    slides: [
      {
        src: '/carousels/05-how-it-works-cyberpunk-4x5/01-titleCard.png',
        archetype: 'titleCard',
        caption: 'How StellarAIO fires in parallel',
        alt: 'Cover slide. Headline reads "How StellarAIO fires 70+ checkouts in parallel."',
      },
      {
        src: '/carousels/05-how-it-works-cyberpunk-4x5/02-bigNumber.png',
        archetype: 'bigNumber',
        caption: '70+ retailers in one subscription',
        alt: 'Seventy plus retailer modules ship in one StellarAIO subscription.',
      },
      {
        src: '/carousels/05-how-it-works-cyberpunk-4x5/03-stepSequence.png',
        archetype: 'stepSequence',
        caption: 'Anatomy of a sub-second cook',
        alt: 'Anatomy of a cook: monitor fires, proxy attaches, ATC, CAPTCHA solve, payment and confirm — all in under one second.',
      },
      {
        src: '/carousels/05-how-it-works-cyberpunk-4x5/04-statCards.png',
        archetype: 'statCards',
        caption: 'What $199 / 3 months gets you',
        alt: 'Four stats: 70+ modules, under 50 ms checkout, 24/7 Discord, 256 reviews at 4.8 average.',
      },
      {
        src: '/carousels/05-how-it-works-cyberpunk-4x5/05-comparison.png',
        archetype: 'comparison',
        caption: 'One AIO vs five single-site bots',
        alt: 'Five single-site bots cost $50–80 each with five dashboards. One StellarAIO is $66 per month effective with one dashboard.',
      },
      {
        src: '/carousels/05-how-it-works-cyberpunk-4x5/06-cta.png',
        archetype: 'cta',
        caption: '70 retailers. One subscription.',
        alt: 'Activate StellarAIO via Whop in under 2 minutes.',
      },
    ],
  },
];
