import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <main className="min-h-screen gradient-bg px-5 py-24 text-center">
      <SEO title="Page Not Found | Stellar AIO" description="That page does not exist on stellaraio.io. Head back to the homepage to learn about the Stellar AIO multi-site checkout bot." path="/404" />
      <h1 className="text-6xl font-bold gradient-text">404</h1>
      <p className="text-muted mt-4">That page does not exist.</p>
      <a href="/" className="btn-primary mt-6 inline-flex">Back to home</a>
    </main>
  );
}
