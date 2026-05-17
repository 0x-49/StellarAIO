import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';
import { AFFILIATE_URL } from '../data/links';

const articleBodyStyles = `
  .article-body { font-size: 1rem; line-height: 1.8; color: #cbd5e1; }
  .article-body h2 { font-size: 1.45rem; font-weight: 700; color: #f1f5f9; margin: 2.4rem 0 .8rem; padding-bottom: .4rem; border-bottom: 1px solid rgba(168,85,247,.15); }
  .article-body h3 { font-size: 1.15rem; font-weight: 600; color: #e2e8f0; margin: 1.8rem 0 .5rem; }
  .article-body p { margin: 0 0 1rem; }
  .article-body ul, .article-body ol { padding-left: 1.5rem; margin: 0 0 1rem; }
  .article-body li { margin-bottom: .4rem; }
  .article-body strong { color: #f1f5f9; }
  .article-body em { color: #a78bfa; }
  .article-body a { color: #a855f7; text-decoration: underline; text-underline-offset: 3px; }
  .article-body a:hover { color: #c084fc; }
  .article-body blockquote { border-left: 3px solid #a855f7; padding: .6rem 1rem; margin: 1.2rem 0; background: rgba(168,85,247,.06); border-radius: 0 8px 8px 0; color: #e2e8f0; font-style: italic; }
  .article-body table { width: 100%; border-collapse: collapse; margin: 1.2rem 0; font-size: .9rem; }
  .article-body th { background: rgba(168,85,247,.12); color: #f1f5f9; padding: .6rem .75rem; text-align: left; border: 1px solid rgba(168,85,247,.15); }
  .article-body td { padding: .55rem .75rem; border: 1px solid rgba(36,48,73,.8); vertical-align: top; }
  .article-body tr:nth-child(even) td { background: rgba(19,25,42,.5); }
  .article-body pre { background: #0d1117; border: 1px solid #243049; border-radius: 8px; padding: 1rem; overflow-x: auto; margin: 1rem 0; }
  .article-body code { font-family: 'Azeret Mono', monospace; font-size: .85em; background: rgba(168,85,247,.1); padding: .1em .35em; border-radius: 4px; }
  .article-body pre code { background: none; padding: 0; font-size: .88rem; }
  .article-cta { background: linear-gradient(135deg, rgba(168,85,247,.12), rgba(6,182,212,.08)); border: 1px solid rgba(168,85,247,.25); border-radius: 14px; padding: 1.5rem; margin: 2rem 0; text-align: center; }
  .article-cta p { color: #e2e8f0; margin-bottom: .8rem; font-weight: 600; }
  .article-cta a { display: inline-flex; align-items: center; gap: .4rem; background: linear-gradient(120deg, #a855f7 0%, #7e22ce 100%); color: #fff; font-weight: 700; padding: .7rem 1.4rem; border-radius: 10px; text-decoration: none; font-size: .95rem; transition: filter .18s ease; }
  .article-cta a:hover { filter: brightness(1.1); color: #fff; }
`;

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen gradient-bg">
        <Navbar />
        <main className="max-w-2xl mx-auto px-5 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-muted mb-8">This article may have moved or been removed.</p>
          <Link to="/blog" className="btn-secondary">Back to guides</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `https://stellaraio.io/blog/${post.slug}`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Organization', name: 'Stellar AIO' },
      publisher: { '@type': 'Organization', name: 'Stellar AIO', url: 'https://stellaraio.io' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stellaraio.io/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://stellaraio.io/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <style>{articleBodyStyles}</style>
      <SEO
        title={`${post.title} | Stellar AIO`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        schemaJson={schema}
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-5 pt-8 pb-2">
          <nav className="text-sm text-muted flex items-center gap-2 font-mono">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-primary truncate max-w-[260px]">{post.title}</span>
          </nav>
        </div>

        <div className="max-w-6xl mx-auto px-5 py-8">
          <div className="lg:grid lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Article — HTML is authored in blogPosts.ts (not user input), safe to render */}
            <article>
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: 'rgba(168,85,247,.12)', color: '#a855f7', border: '1px solid rgba(168,85,247,.2)' }}>
                    {post.category}
                  </span>
                  <span className="text-muted text-xs font-mono">{post.date}</span>
                  <span className="text-muted text-xs font-mono">{post.readingTime} min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#f1f5f9' }}>{post.title}</h1>
                <p className="text-muted text-lg leading-relaxed">{post.excerpt}</p>
              </header>

              {/* HTML content authored in blogPosts.ts — not user input, no sanitisation needed */}
              <div
                className="article-body"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="mt-10 lg:mt-0 lg:sticky lg:top-24 space-y-5">
              <div className="card p-6 text-center" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,.1), rgba(6,182,212,.06))', border: '1px solid rgba(168,85,247,.2)' }}>
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#f1f5f9' }}>Get StellarAIO</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  70+ retailers. 4.8★ on Whop. Starting at $99 per 3 months. Live since 2020.
                </p>
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener sponsored"
                  className="btn-primary w-full text-sm"
                >
                  Get Access on Whop →
                </a>
                <p className="text-xs text-muted mt-3">Instant access · No waitlist</p>
              </div>

              <div className="card p-5">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted mb-3 font-mono">Quick Facts</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    ['Price', '$99 / 3 months'],
                    ['Retailers', '70+'],
                    ['Rating', '4.8★ · 256 reviews'],
                    ['Since', '2020'],
                    ['Checkouts', '1M+'],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between">
                      <span className="text-muted">{k}</span>
                      <span className="font-medium" style={{ color: '#e2e8f0' }}>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t" style={{ borderColor: 'rgba(36,48,73,.6)' }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: '#f1f5f9' }}>More Guides</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="card p-5 block">
                    <span className="text-xs font-mono uppercase tracking-wider" style={{ color: '#a855f7' }}>{r.category}</span>
                    <h3 className="font-semibold mt-2 mb-2 leading-snug" style={{ color: '#f1f5f9' }}>{r.title}</h3>
                    <p className="text-sm text-muted line-clamp-2">{r.excerpt}</p>
                    <span className="text-xs text-muted mt-3 block font-mono">{r.readingTime} min read</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
