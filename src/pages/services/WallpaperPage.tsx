import { useSEO } from '@/hooks/useSEO';

export default function WallpaperPage() {
  useSEO({
    title: 'Wallpaper Installation Services | South India Painters',
    description:
      'Expert wallpaper installation and wall covering services by South India Painters for homes, luxury apartments and commercial interiors across South India.',
    canonical: 'https://southindiapainters.com/services/wallpaper',
  });

  return (
    <section className="section container">
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
        Wallpaper
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Wallpaper service page placeholder — design coming in a separate phase.
      </p>
    </section>
  );
}
