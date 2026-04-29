import SEO from '../components/SEO';

const AFFILIATE_URL = 'https://whop.com/stellaraio/stellaraio?a=digitalartlab';

const VIDEOS = [
  { id: 'Cq615aMTcU8', title: 'The ULTIMATE Stellar AIO Beginner Guide', channel: 'Soflo Sneakers' },
  { id: 'n1suXXPS9DI', title: 'How to Bot Pokemon Center on Stellar AIO', channel: 'Soflo Sneakers' },
  { id: '_ozwdem3wKc', title: 'Stellar AIO Walmart Setup Guide', channel: 'Shermio Flips' },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen gradient-bg px-5 py-16">
      <SEO
        title="Stellar AIO Tutorials and Guides"
        description="Verified public YouTube tutorials covering Stellar AIO setup, Pokemon Center botting, and Walmart module configuration."
        path="/blog"
      />
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-secondary text-sm">&larr; Back to home</a>
        <h1 className="text-4xl md:text-5xl font-bold mt-6 gradient-text">Tutorials and Guides</h1>
        <p className="text-muted mt-4 max-w-2xl">
          Curated YouTube walkthroughs from the community. Written guides coming soon. For deeper tutorials see the official Stellar AIO Discord and the linked YouTube channels below.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {VIDEOS.map((v) => (
            <article key={v.id} className="card p-4">
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 10, overflow: 'hidden' }}>
                <iframe
                  loading="lazy"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                />
              </div>
              <h2 className="font-semibold mt-3">{v.title}</h2>
              <div className="text-xs text-muted font-mono">{v.channel}</div>
            </article>
          ))}
        </div>
        <div className="mt-12 card p-6 text-center">
          <h3 className="font-bold text-lg">Ready to start?</h3>
          <p className="text-muted text-sm mt-2">Get Stellar AIO via the official Whop product page.</p>
          <a href={AFFILIATE_URL} target="_blank" rel="noopener sponsored" className="btn-primary mt-4 inline-flex">Get Stellar AIO</a>
        </div>
      </div>
    </div>
  );
}
