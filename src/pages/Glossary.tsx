import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { glossaryTerms } from '../data/glossary';

export default function Glossary() {
  return (
    <div className="min-h-screen gradient-bg">
      <SEO
        title="AIO Botting Glossary | Stellar AIO Reference"
        description="Plain-English definitions for AIO, module, task, profile, proxy, captcha, monitor, restock, lifetime license, webhook, drop, cook, L, banned IP, queue."
        path="/glossary"
        schemaJson={[
          {
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'AIO Botting Glossary',
            url: 'https://stellaraio.io/glossary',
            hasDefinedTerm: glossaryTerms.map((t) => ({
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
      <Navbar />
      <main>
      <section className="px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-secondary text-sm">&larr; Back to home</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 gradient-text">Glossary</h1>
          <p className="text-muted mt-4">Reference definitions for terms used across AIO checkout-automation tools and the wider drop-hunting community.</p>
          <dl className="mt-10 space-y-5">
            {glossaryTerms.map((t) => (
              <div key={t.term} className="card p-5">
                <dt className="font-bold text-lg text-primary">{t.term}</dt>
                <dd className="text-muted mt-2 text-sm leading-relaxed">{t.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
