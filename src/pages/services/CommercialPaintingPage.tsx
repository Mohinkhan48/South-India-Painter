import { useSEO } from '@/hooks/useSEO';

export default function CommercialPaintingPage() {
  useSEO({
    title: 'Commercial Painting Services | South India Painters',
    description:
      'Professional commercial painting by South India Painters. Offices, retail spaces, tech parks, hospitality and industrial projects across Bangalore and South India.',
    canonical: 'https://southindiapainters.com/services/commercial-painting',
  });

  return (
    <section className="section container">
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
        Commercial Painting
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Commercial Painting service page placeholder — design coming in a separate phase.
      </p>
    </section>
  );
}
