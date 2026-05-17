import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InlineCTA from '../components/InlineCTA';
import RevealOnScroll from '../components/RevealOnScroll';

export default function About() {
  return (
    <div className="min-h-screen gradient-bg">
      <SEO
        title="About Stellar AIO | Multi-Site Checkout Bot Since 2020"
        description="Background on Stellar AIO, the multi-site checkout automation bot live on Whop since around 2020. What it does, who it is for, and how this independent affiliate site reports on it."
        path="/about"
        schemaJson={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Stellar AIO',
          url: 'https://stellaraio.io/about',
        }}
      />
      <RevealOnScroll />
      <Navbar />
      <main>
      <section className="relative pt-20 pb-16 px-5 overflow-hidden">
        <img
          src="/images/sections/about-hero.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        />
        <div className="max-w-3xl mx-auto relative">
          <a href="/" className="text-secondary text-sm">&larr; Back to home</a>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 gradient-text">About Stellar AIO</h1>
          <p className="text-muted mt-4 text-lg">
            Stellar AIO is a multi-site checkout automation bot. It exists to do one job well: place orders on limited-edition product drops faster and more reliably than a human can.
          </p>
        </div>
      </section>

      <section className="py-12 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-3xl mx-auto space-y-6 text-muted leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white rev">What Stellar AIO is</h2>
          <p className="rev d1">
            Stellar AIO is an All-In-One desktop checkout bot. The team ships retailer-specific modules. Each module knows how to add to cart, populate profile data, and complete checkout on a single site. Run multiple modules at once and the same install can attempt drops on Walmart, Pokemon Center, Best Buy, Target, AMD.com, and the rest of the supported list at the same time.
          </p>
          <p className="rev d1">
            The product has been live since approximately 2020. One reviewer on Whop notes paying about $20 per month "when it first came out" and recently returning for a Lifetime license. That long timeline is unusual in this category - most AIO projects fold within a year or two.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white pt-6 rev">Who runs Stellar AIO</h2>
          <p className="rev d1">
            The Stellar AIO team operates anonymously, which is the norm in the checkout-bot space. There is no public founder bio, no LinkedIn profile to point at. What there is, is a six-year operating history, 256 reviews on the official Whop product page averaging 4.8 stars, and an active 24/7 support channel that reviewers consistently call out by name.
          </p>
          <p className="rev d1">
            This site does not invent a founder, member count, or benchmark figures that the team has not published. If a number appears here, it came directly from the live Whop product page or from a verifiable community source.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white pt-6 rev">What this site is</h2>
          <p className="rev d1">
            Stellaraio.io is an independent affiliate landing page for the Stellar AIO product. It is not the official Stellar AIO site. The product, brand, and all associated trademarks belong to the Stellar AIO team. When a visitor clicks a "Get Stellar AIO" button on this page and signs up on Whop, this site may receive a referral commission. That is the business model.
          </p>
          <p className="rev d1">
            The reason to keep an affiliate page honest is selfish: the audience for this kind of product is small, technical, and unforgiving. Inventing claims about hit rate or benchmarks gets noticed and tanks credibility. So this page reports verified data and links straight to the source.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white pt-6 rev">How decisions about content get made</h2>
          <ul className="space-y-2 rev d1">
            <li>- Reviews quoted on this site are verbatim from the Whop reviews page.</li>
            <li>- Videos embedded are public YouTube tutorials whose titles include "Stellar AIO".</li>
            <li>- Pricing reflects what is visible on the Whop product page on the date stamped at the bottom of each section.</li>
            <li>- Comparisons are limited to manual checkout versus an AIO. No claims are made about Stellar AIO versus other named bots.</li>
          </ul>
        </div>
      </section>

      <InlineCTA variant="a" />
      </main>
      <Footer />
    </div>
  );
}
