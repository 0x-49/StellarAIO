import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-bg px-5 py-24 text-center">
      <SEO title="Page Not Found | Stellar AIO" description="The page you are looking for could not be found." path="/404" />
      <h1 className="text-6xl font-bold gradient-text">404</h1>
      <p className="text-muted mt-4">That page does not exist.</p>
      <a href="/" className="btn-primary mt-6 inline-flex">Back to home</a>
    </div>
  );
}
