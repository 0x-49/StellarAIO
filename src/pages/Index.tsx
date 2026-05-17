import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import SupportedSites from '../components/SupportedSites';
import InlineCTA from '../components/InlineCTA';
import ReviewsSection from '../components/ReviewsSection';
import VideoSection from '../components/VideoSection';
import CarouselSection from '../components/CarouselSection';
import HonestComparison from '../components/HonestComparison';
import Tradeoffs from '../components/Tradeoffs';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import StickyMobileCTA from '../components/StickyMobileCTA';
import RevealOnScroll from '../components/RevealOnScroll';
import { faqData } from '../data/faq';
import { reviews } from '../data/reviews';
import { AFFILIATE_URL } from '../data/links';

export default function Index() {
  return (
    <div className="min-h-screen gradient-bg">
      <SEO
        title="Stellar AIO Review and Pricing | Multi-Site Checkout Bot"
        description="Stellar AIO multi-site checkout bot. 4.8 from 256 Whop reviews. $199 / 3 months, monthly and lifetime options. Verified videos, real reviews, honest tradeoffs."
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
            review: reviews.filter((r) => r.rating >= 4).map((r) => ({
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
              author: { '@type': 'Person', name: r.name },
              reviewBody: r.body,
            })),
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
      <RevealOnScroll />
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <InlineCTA variant="d" size="slim" />
        <SupportedSites />
        <InlineCTA variant="a" />
        <ReviewsSection />
        <InlineCTA variant="e" size="slim" />
        <CarouselSection />
        <VideoSection />
        <InlineCTA variant="b" />
        <HonestComparison />
        <Tradeoffs />
        <InlineCTA variant="f" size="slim" />
        <PricingSection />
        <FaqSection />
        <InlineCTA variant="c" />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
