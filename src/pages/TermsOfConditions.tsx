import SEO from '../components/SEO';

export default function TermsOfConditions() {
  return (
    <div className="min-h-screen gradient-bg px-5 py-16">
      <SEO title="Terms | Stellar AIO" description="Terms of use for the Stellar AIO affiliate landing page." path="/terms" />
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-secondary text-sm">&larr; Back to home</a>
        <h1 className="text-4xl font-bold mt-6 gradient-text">Terms</h1>
        <p className="text-muted mt-4">This website is an independent affiliate landing page. It is not operated by Stellar AIO. All product names, logos, and brands referenced on this site are property of their respective owners.</p>
        <p className="text-muted mt-4">When you click an outbound link to whop.com, your purchase is governed by Whop and Stellar AIO own terms. The owner of this affiliate site may receive a commission on qualifying purchases.</p>
        <p className="text-muted mt-4">Information shown on this page (pricing, ratings, review counts, supported sites) is sourced from the live Whop product page on the date noted in the footer and may change. Always confirm current details on the Whop page before purchasing.</p>
      </div>
    </div>
  );
}
