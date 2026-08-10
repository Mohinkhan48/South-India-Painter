import { useEffect } from 'react';
import ResourcesHeroSection from '@/components/resources/ResourcesHeroSection';
import ResourcesCardsSection from '@/components/resources/ResourcesCardsSection';
import ProductsAndServicesSection from '@/components/resources/ProductsAndServicesSection';
import TransformingHomesSection from '@/components/resources/TransformingHomesSection';
import ResourcesFaqSection from '@/components/resources/ResourcesFaqSection';
import ResourcesCtaSection from '@/components/resources/ResourcesCtaSection';

export default function ResourcesPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="resources-page w-full min-h-screen bg-white"
      style={{ paddingBottom: '100px' }}
    >
      {/* 1. Large Hero Banner */}
      <ResourcesHeroSection />

      {/* 2. Resources Cards */}
      <div style={{ marginTop: '100px' }}>
        <ResourcesCardsSection />
      </div>

      {/* 3. Products & Services */}
      <div style={{ marginTop: '120px' }}>
        <ProductsAndServicesSection />
      </div>

      {/* 4. Transforming Homes */}
      <div style={{ marginTop: '120px' }}>
        <TransformingHomesSection />
      </div>

      {/* 5. FAQ Section */}
      <div style={{ marginTop: '120px' }}>
        <ResourcesFaqSection />
      </div>

      {/* 6. Final CTA */}
      <div style={{ marginTop: '120px' }}>
        <ResourcesCtaSection />
      </div>
    </main>
  );
}