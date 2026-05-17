const FITS = [
  'You already run residential or ISP proxies and are willing to pay for a captcha solver.',
  'You bot multiple retailers and want one app instead of a separate tool per site.',
  'You value support uptime - Stellar AIO has been live since around 2020 and operates 24/7 customer service.',
  'You are ok investing setup time. Most reviewers who hit consistently spent hours configuring tasks per module.',
];

const DOES_NOT_FIT = [
  'You expect to plug in the bot and immediately cook every drop. Results depend on proxy quality, captcha throughput, and module fit.',
  'You only buy on one site that already has an unofficial dedicated bot - a single-site solution may be cheaper.',
  'You are unwilling to read tutorials and tune settings. Some 1-star reviewers report not hitting on Walmart and Pokemon Center even after multiple proxies.',
];

export default function Tradeoffs() {
  return (
    <section id="who-its-for" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center rev">Who Stellar AIO is for, and who it isn't</h2>
        <p className="text-center text-muted mt-3 max-w-2xl mx-auto rev d1">
          A bot is a tool, not a guarantee. The honest split below reflects what reviewers actually report.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="card p-6 rev d1">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="text-green-400" aria-hidden>+</span> Good fit
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted leading-relaxed">
              {FITS.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-secondary mt-1" aria-hidden>-</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 rev d2">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="text-red-400" aria-hidden>-</span> Probably not a fit
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted leading-relaxed">
              {DOES_NOT_FIT.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-primary mt-1" aria-hidden>-</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-muted text-center mt-8 font-mono">
          Based on review distribution: 89% 5-star, 7% 4-star, 3% 1-star (256 total reviews on Whop).
        </p>
      </div>
    </section>
  );
}
