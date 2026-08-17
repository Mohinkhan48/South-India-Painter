import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import { ArrowRight, ArrowDown } from 'lucide-react';
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
      {/* HERO SECTION */}
      <section className="relative w-full h-[auto] min-h-[650px] lg:h-[650px] flex items-center pt-24 pb-32 lg:py-0">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=80"
            alt="Professional painter painting a premium residential interior wall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,42,67,0.92)] via-[rgba(16,42,67,0.7)] to-[rgba(16,42,67,0.2)]" />
        </div>

        {/* Content Container */}
        <Container className="relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="max-w-2xl w-full">
              <m.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] font-semibold uppercase tracking-[3px] text-[var(--color-accent)] mb-4 lg:mb-5"
              >
                COMPLETE PAINTING SOLUTIONS
              </m.p>

              <m.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-[40px] sm:text-[52px] lg:text-[68px] font-[700] leading-[1.05] mb-6 lg:mb-8 text-white"
              >
                Every Surface.<br />
                <span className="text-[var(--color-accent)]">Finished With Precision.</span>
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[16px] sm:text-[18px] text-[#e0e4e8] leading-[1.6] max-w-[600px] mb-8 sm:mb-10"
              >
                From elegant interiors to durable exterior finishes, we deliver professional painting, waterproofing and surface solutions built around your space.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
              >
                <Link
                  to="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-[15px] bg-[var(--color-accent)] text-white text-[15px] font-semibold rounded-[4px] hover:bg-[#d95b3f] transition-all duration-300 ease-out hover:-translate-y-[2px] shadow-[0_4px_14px_rgba(231,104,75,0.3)] w-full sm:w-auto"
                >
                  Explore Our Services <ArrowDown className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-[15px] bg-transparent border border-white/30 text-white text-[15px] font-semibold rounded-[4px] hover:bg-white/10 hover:border-white transition-all duration-300 ease-out hover:-translate-y-[2px] backdrop-blur-sm w-full sm:w-auto"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </m.div>
            </div>
          </div>
        </Container>

        {/* Bottom Information Strip */}
        <div className="relative mt-8 sm:mt-0 sm:absolute sm:left-0 sm:right-0 sm:-bottom-[36px] z-20 flex justify-center px-4">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="w-full max-w-[1000px] bg-[#FCFBF8] rounded-[16px] shadow-[0_12px_40px_rgba(16,42,67,0.08)] border border-[rgba(16,42,67,0.04)] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(16,42,67,0.08)]"
          >
            {[
              { title: '7+ SERVICE CATEGORIES', desc: 'Complete solutions' },
              { title: 'RESIDENTIAL + COMMERCIAL', desc: 'Projects of every scale' },
              { title: 'QUALITY FINISHES', desc: 'Built for lasting results' }
            ].map((stat, i) => (
              <div key={i} className="flex-1 w-full flex flex-col items-center text-center pt-4 sm:pt-0 first:pt-0">
                <span className="text-[14px] font-bold text-[var(--color-primary-dark)] tracking-[1px] mb-[4px]">
                  {stat.title}
                </span>
                <span className="text-[13px] text-[var(--color-text-muted)]">
                  {stat.desc}
                </span>
              </div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Spacer to account for the overlapping strip */}
      <div className="hidden sm:block h-[70px] lg:h-[90px]" />

      {/* BOOK SITE VISIT SECTION */}
      <BookSiteVisitSection />

      {/* NEW WHY CHOOSE US SECTION */}
      <BenefitsSection />

      {/* SERVICE CAROUSEL */}
      <ServiceCarouselSection />

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
