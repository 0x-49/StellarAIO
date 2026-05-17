import { videos } from '../data/videos';
import YouTubeFacade from './YouTubeFacade';

export default function VideoSection() {
  return (
    <section id="videos" className="py-20 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center rev">Tutorials from the community</h2>
        <p className="text-center text-muted mt-3 rev d1">Verified public YouTube videos that demo Stellar AIO setup across modules.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {videos.map((v, i) => (
            <div key={v.id} className={`rev d${(i % 3) + 1}`}>
              <YouTubeFacade id={v.id} title={v.title} />
              <div className="mt-3">
                <div className="font-semibold text-sm">{v.title}</div>
                <div className="text-muted text-xs font-mono">{v.channel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
