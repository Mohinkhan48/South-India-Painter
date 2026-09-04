import { useSEO } from '@/hooks/useSEO';

export default function WaterproofingPage() {
  useSEO({
    title: 'Waterproofing Services | South India Painters',
    description:
      'Expert waterproofing services by South India Painters. Roof, terrace, bathroom and basement waterproofing for homes and commercial buildings across Bangalore and South India.',
    canonical: 'https://southindiapainters.com/services/waterproofing',
  });

  return (
    <section className="section container">
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
        Waterproofing
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Waterproofing service page placeholder — design coming in a separate phase.
      </p>
    </section>
  );
}
