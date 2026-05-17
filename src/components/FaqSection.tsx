import { faqData } from '../data/faq';

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center rev">FAQ</h2>
        <div className="mt-10 space-y-3">
          {faqData.map((q, i) => (
            <details key={i} className="card p-5 rev">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{q.question}</span>
                <span className="text-secondary text-xl leading-none" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-muted text-sm leading-relaxed">{q.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
