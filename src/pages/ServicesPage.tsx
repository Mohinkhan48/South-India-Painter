import ServiceCarouselSection from '@/components/services/ServiceCarouselSection';
import BookSiteVisitSection from '@/components/services/BookSiteVisitSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import WhyChooseUsSection from '@/components/services/WhyChooseUsSection';
import ProjectEstimateSection from '@/components/services/ProjectEstimateSection';
import TrustedMaterialsSection from '@/components/services/TrustedMaterialsSection';
import FinalCtaSection from '@/components/services/FinalCtaSection';
import { useSEO } from '@/hooks/useSEO';

export default function ServicesPage() {
  useSEO({
    title: 'Painting Services | South India Painters',
    description:
      'Explore all painting services by South India Painters — interior, exterior, waterproofing, wall textures, wallpaper, wood finishes and commercial painting across South India.',
    canonical: 'https://southindiapainters.com/services',
  });

  return (
    <main className="services-page" style={{ width: '100%', maxWidth: '100%', overflowX: 'clip' }}>
      {/* SERVICE CAROUSEL */}
      <ServiceCarouselSection />

      {/* BOOK SITE VISIT SECTION */}
      <BookSiteVisitSection />

      {/* NEW WHY CHOOSE US SECTION */}
      <BenefitsSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* PROJECT ESTIMATE */}
      <ProjectEstimateSection />

      {/* TRUSTED MATERIALS */}
      <TrustedMaterialsSection />

      {/* FINAL CTA */}
      <FinalCtaSection />
    </main>
  );
}
