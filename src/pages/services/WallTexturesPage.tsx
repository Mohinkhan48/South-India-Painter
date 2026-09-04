import { useSEO } from '@/hooks/useSEO';

export default function WallTexturesPage() {
  useSEO({
    title: 'Wall Textures & Designer Finishes | South India Painters',
    description:
      'Decorative wall textures and designer finishes by South India Painters. Venetian plaster, sand finish, stucco and more for homes and commercial interiors across South India.',
    canonical: 'https://southindiapainters.com/services/wall-textures',
  });

  return (
    <section className="section container">
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
        Wall Textures
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Wall Textures service page placeholder — design coming in a separate phase.
      </p>
    </section>
  );
}
