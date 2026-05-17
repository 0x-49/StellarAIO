import CTA from './CTA';

export default function StickyMobileCTA() {
  return (
    <div
      className="md:hidden fixed left-0 right-0 bottom-0 z-50 px-4 py-3"
      style={{
        background: 'rgba(10,14,26,.92)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <CTA className="w-full">Get Stellar AIO - $199</CTA>
    </div>
  );
}
