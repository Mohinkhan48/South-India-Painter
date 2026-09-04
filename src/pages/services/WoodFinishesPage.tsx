import { useSEO } from '@/hooks/useSEO';

export default function WoodFinishesPage() {
  useSEO({
    title: 'Wood & Metal Finishes | South India Painters',
    description:
      'Premium wood and metal finishing services by South India Painters. Varnish, lacquer, stain, polishing and protective coatings for homes and offices across South India.',
    canonical: 'https://southindiapainters.com/services/wood-finishes',
  });

  return (
    <section className="section container">
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
        Wood Finishes
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Wood Finishes service page placeholder — design coming in a separate phase.
      </p>
    </section>
  );
}
