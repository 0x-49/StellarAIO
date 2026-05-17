type Row = { factor: string; manual: string; bot: string };

const ROWS: Row[] = [
  { factor: 'Time to checkout', manual: 'Tens of seconds, often longer than the drop window', bot: 'Sub-second auto-fill on supported modules' },
  { factor: 'Sites covered at once', manual: 'One browser tab, one site at a time', bot: 'Multiple retailer modules running in parallel' },
  { factor: 'Tasks per drop', manual: 'One purchase attempt per device', bot: 'Many tasks per drop, limited by proxies and accounts' },
  { factor: 'Retry on failure', manual: 'Manual refresh and re-add to cart', bot: 'Automatic retry until stock or stop' },
  { factor: 'Proxy use', manual: 'Single home IP, easily rate-limited', bot: 'Rotates through residential or ISP proxies' },
  { factor: 'Captcha handling', manual: 'Solve every challenge by hand', bot: 'Pairs with a captcha-solver service' },
  { factor: 'Learning curve', manual: 'None, just shop', bot: 'Setup takes a few hours, plus tuning per module' },
  { factor: 'Cost', manual: 'Free, but you miss most drops', bot: '$199 / 3 months on Whop, plus proxies and captchas' },
];

export default function HonestComparison() {
  return (
    <section id="compare" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center rev">Stellar AIO vs running checkouts manually</h2>
        <p className="text-center text-muted mt-3 max-w-2xl mx-auto rev d1">
          A side-by-side look at what changes when you replace manual shopping with an AIO bot. No comparison to other bots is made here, only manual versus automated.
        </p>
        <div className="card mt-10 overflow-hidden rev d2">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'var(--surface-2)' }}>
                <th className="text-left p-4 font-semibold">Factor</th>
                <th className="text-left p-4 font-semibold">Manual checkout</th>
                <th className="text-left p-4 font-semibold text-secondary">Stellar AIO</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.factor} style={{ borderTop: '1px solid var(--border)', background: i % 2 ? 'transparent' : 'rgba(168,85,247,.03)' }}>
                  <td className="p-4 font-semibold">{r.factor}</td>
                  <td className="p-4 text-muted">{r.manual}</td>
                  <td className="p-4">{r.bot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
