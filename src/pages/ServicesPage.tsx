import ServiceCarouselSection from '@/components/services/ServiceCarouselSection';
import BookSiteVisitSection from '@/components/services/BookSiteVisitSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import WhyChooseUsSection from '@/components/services/WhyChooseUsSection';
import ProjectEstimateSection from '@/components/services/ProjectEstimateSection';
import TrustedMaterialsSection from '@/components/services/TrustedMaterialsSection';
import FinalCtaSection from '@/components/services/FinalCtaSection';

export default function ServicesPage() {
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
