import SEO from '../components/SEO';

const TERMS = [
  { term: 'AIO', def: 'Short for "All-In-One." A type of automated checkout software designed to support purchasing across multiple retailer websites from a single application, rather than being limited to one store.' },
  { term: 'Module', def: 'A retailer-specific component inside an AIO bot that contains the logic needed to add to cart and check out on a single website. A bot may ship many modules, one per supported retailer.' },
  { term: 'Task', def: 'A single configured purchase attempt inside an AIO bot. A task usually combines a product link or keywords, a profile, an account, and a proxy, and runs until it checks out, fails, or is stopped.' },
  { term: 'Profile', def: 'A reusable container of shipping address, billing address, and payment details used to populate checkout forms. Bots typically support multiple profiles to spread orders across addresses and cards.' },
  { term: 'Proxy', def: 'An intermediary server that routes web requests through a different IP address. AIO bots use proxies to distribute traffic across many IPs, which helps avoid retailer rate limits and IP bans.' },
  { term: 'Captcha', def: 'A challenge-response test used by websites to distinguish human users from automated traffic. Bot users typically pair their AIO with a captcha-solver service that returns valid tokens.' },
  { term: 'Monitor', def: 'A component or external service that watches a retailer\'s product pages and APIs for stock changes, then notifies the user or triggers tasks. Monitors can be built into the bot or sourced separately.' },
  { term: 'Restock', def: 'When a retailer makes a previously sold-out product available for purchase again. AIO bots aim to detect restocks within seconds and automate the checkout process before the inventory sells out.' },
];

export default function Glossary() {
  return (
    <div className="min-h-screen gradient-bg px-5 py-16">
      <SEO
        title="AIO Botting Glossary | Stellar AIO"
        description="Reference definitions for AIO, module, task, profile, proxy, captcha, monitor, and restock as used in checkout-automation software."
        path="/glossary"
        schemaJson={[
          {
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'AIO Botting Glossary',
            url: 'https://stellaraio.io/glossary',
            hasDefinedTerm: TERMS.map((t) => ({
              '@type': 'DefinedTerm',
              name: t.term,
              description: t.def,
              inDefinedTermSet: 'https://stellaraio.io/glossary',
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stellaraio.io/' },
              { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://stellaraio.io/glossary' },
            ],
          },
        ]}
      />
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-secondary text-sm">&larr; Back to home</a>
        <h1 className="text-4xl md:text-5xl font-bold mt-6 gradient-text">Glossary</h1>
        <p className="text-muted mt-4">Plain-language definitions of common AIO and checkout-automation terms.</p>
        <dl className="mt-10 space-y-5">
          {TERMS.map((t) => (
            <div key={t.term} className="card p-5">
              <dt className="font-bold text-lg text-primary">{t.term}</dt>
              <dd className="text-muted mt-2 text-sm leading-relaxed">{t.def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
