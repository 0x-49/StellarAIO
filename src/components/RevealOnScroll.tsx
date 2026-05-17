import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });
    document.querySelectorAll('.rev').forEach((el) => ro.observe(el));
    requestAnimationFrame(() => {
      document.querySelectorAll('.rev:not(.vis)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 100) el.classList.add('vis');
      });
    });
    return () => ro.disconnect();
  }, []);
  return null;
}
