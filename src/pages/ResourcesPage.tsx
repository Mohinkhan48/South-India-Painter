import { useEffect } from 'react';
import ResourcesHeroSection from '@/components/resources/ResourcesHeroSection';
import PaintCostBanner from '@/components/resources/PaintCostBanner';
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
    <main className="resources-page w-full min-h-screen bg-white" style={{ paddingBottom: '100px' }}>
      {/* 1. Large Hero Banner */}
      <ResourcesHeroSection />

      {/* 2. Paint Cost Banner — 80px after hero */}
      <div style={{ marginTop: '80px' }}>
        <PaintCostBanner />
      </div>

      {/* 3. Resources Cards — 100px after Paint Budget banner */}
      <div style={{ marginTop: '100px' }}>
        <ResourcesCardsSection />
      </div>

      {/* 4. Products & Services — 120px after Resource Cards */}
      <div style={{ marginTop: '120px' }}>
        <ProductsAndServicesSection />
      </div>

      {/* 5. Transforming Homes — 120px after Products & Services */}
      <div style={{ marginTop: '120px' }}>
        <TransformingHomesSection />
      </div>

      {/* 7. FAQ Section — 120px after Blogs */}
      <div style={{ marginTop: '120px' }}>
        <ResourcesFaqSection />
      </div>

      {/* 8. Final CTA — 120px after FAQ */}
      <div style={{ marginTop: '120px' }}>
        <ResourcesCtaSection />
      </div>
    </main>
  );
}
