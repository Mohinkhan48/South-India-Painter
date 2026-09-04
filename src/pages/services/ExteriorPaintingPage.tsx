import { useSEO } from '@/hooks/useSEO';

export default function ExteriorPaintingPage() {
  useSEO({
    title: 'Exterior Painting Services | South India Painters',
    description:
      'Professional exterior painting by South India Painters. Weatherproof coatings, surface preparation and durable finishes for homes, apartments and commercial buildings across South India.',
    canonical: 'https://southindiapainters.com/services/exterior-painting',
  });

  return (
    <section className="section container">
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
        Exterior Painting
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Exterior Painting service page placeholder — design coming in a separate phase.
      </p>
    </section>
  );
}
