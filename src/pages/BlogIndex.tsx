import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { videos } from '../data/videos';
import YouTubeFacade from '../components/YouTubeFacade';
import { AFFILIATE_URL } from '../data/links';
import { blogPosts } from '../data/blogPosts';

export default function BlogIndex() {
  return (
    <div className="min-h-screen gradient-bg">
      <SEO
        title="Stellar AIO Guides, Tutorials & Setup Help | stellaraio.io"
        description="Step-by-step guides on setting up StellarAIO, choosing proxies, reselling sneakers and collectibles, and understanding AIO bots. Plus curated YouTube tutorials."
        path="/blog"
        schemaJson={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Stellar AIO Guides and Tutorials',
          url: 'https://stellaraio.io/blog',
        }}
      />
      <Navbar />
      <main>
        <section className="px-5 py-16">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="text-secondary text-sm font-mono">&larr; Back to home</Link>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 gradient-text">Guides &amp; Tutorials</h1>
            <p className="text-muted mt-4 max-w-2xl leading-relaxed">
              Written guides on StellarAIO, proxy setup, and reselling strategy — plus curated YouTube tutorials for visual learners.
            </p>

            {/* Written Guides */}
            <div className="mt-12">
              <h2 className="text-lg font-semibold font-mono uppercase tracking-wider text-muted mb-6">Written Guides</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {blogPosts.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="card p-6 block">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(168,85,247,.1)', color: '#a855f7', border: '1px solid rgba(168,85,247,.18)' }}>
                        {post.category}
                      </span>
                      <span className="text-xs text-muted font-mono">{post.readingTime} min</span>
                    </div>
                    <h2 className="font-bold text-lg leading-snug mb-2" style={{ color: '#f1f5f9' }}>{post.title}</h2>
                    <p className="text-sm text-muted leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <span className="text-secondary text-sm font-semibold mt-4 block">Read guide →</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* YouTube Tutorials */}
            <div className="mt-16">
              <h2 className="text-lg font-semibold font-mono uppercase tracking-wider text-muted mb-6">Video Tutorials</h2>
              <p className="text-sm text-muted mb-6">
                Verified public YouTube walkthroughs. Each video is summarised so you know what it covers before clicking play.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((v) => (
                  <article key={v.id} className="card p-4">
                    <YouTubeFacade id={v.id} title={v.title} />
                    <h3 className="font-semibold mt-3">{v.title}</h3>
                    <div className="text-xs text-muted font-mono">{v.channel}</div>
                    <p className="text-sm text-muted mt-3 leading-relaxed">{v.summary}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-14 card p-7 text-center" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,.08), rgba(6,182,212,.05))', border: '1px solid rgba(168,85,247,.18)' }}>
              <h3 className="font-bold text-xl mb-2" style={{ color: '#f1f5f9' }}>Ready to start?</h3>
              <p className="text-muted text-sm mt-2 mb-5">Get StellarAIO via the official Whop product page. Instant access, no waitlist.</p>
              <a href={AFFILIATE_URL} target="_blank" rel="noopener sponsored" className="btn-primary inline-flex">Get StellarAIO on Whop →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
