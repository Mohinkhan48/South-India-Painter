import { useSEO } from '@/hooks/useSEO';

export default function InteriorPaintingPage() {
  useSEO({
    title: 'Interior Painting Services | South India Painters',
    description:
      'Professional interior painting services by South India Painters. Expert wall prep, premium paints and flawless finishes for homes, apartments and commercial spaces across South India.',
    canonical: 'https://southindiapainters.com/services/interior-painting',
  });

  return (
    <section className="section container">
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
        Interior Painting
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Interior Painting service page placeholder — design coming in a separate phase.
      </p>
    </section>
  );
}
