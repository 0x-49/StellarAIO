import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen gradient-bg px-5 py-16">
      <SEO title="Privacy Policy | Stellar AIO" description="Privacy policy for the Stellar AIO affiliate landing page." path="/privacy" />
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-secondary text-sm">&larr; Back to home</a>
        <h1 className="text-4xl font-bold mt-6 gradient-text">Privacy Policy</h1>
        <p className="text-muted mt-4">This site is an independent affiliate landing page that links to the Stellar AIO product on Whop. We do not collect personal information directly. Whop processes any account, billing, or membership data when you click through and complete a purchase. Please review Whop privacy policy for details on how your information is handled there.</p>
        <p className="text-muted mt-4">Standard server logs may record anonymous request metadata (IP, user agent, referrer) for security and analytics purposes. We do not sell or share this data.</p>
      </div>
    </div>
  );
}
