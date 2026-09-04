import { m } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import { ArrowRight, MapPin } from 'lucide-react';
import { useEffect } from 'react';

import ServiceCarouselSection from '@/components/services/ServiceCarouselSection';
import WhyChooseUsSection from '@/components/services/WhyChooseUsSection';
import ProjectEstimateSection from '@/components/services/ProjectEstimateSection';
import TrustedMaterialsSection from '@/components/services/TrustedMaterialsSection';
import FinalCtaSection from '@/components/services/FinalCtaSection';

import { useSEO } from '@/hooks/useSEO';

export default function CityLocationPage() {
  const { city } = useParams<{ city: string }>();
  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Your City';

  useSEO({
    title: `Professional Painters in ${cityName} | South India Painters`,
    description: `Top-rated residential, commercial, interior & exterior painting services in ${cityName}. Trusted painting contractors by South India Painters. Get a free quote today.`,
    canonical: `https://southindiapainters.com/locations/${city || 'bangalore'}`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-white">
      {/* Dynamic City Hero */}
      <section className="relative w-full min-h-[600px] flex items-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1920&q=80"
            alt={`Painting Services in ${cityName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17375E]/95 via-[#17375E]/80 to-[#17375E]/30" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="max-w-3xl">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <MapPin className="w-4 h-4 text-[#F47C20]" />
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">
                Now Serving {cityName}
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[44px] sm:text-[56px] lg:text-[72px] font-[800] leading-[1.05] text-white mb-6"
            >
              Professional Painters in <br />
              <span className="text-[#F47C20]">{cityName}</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[18px] sm:text-[20px] text-[#e0e4e8] leading-relaxed max-w-[600px] mb-10"
            >
              Transforming homes and commercial spaces across {cityName} with premium finishes, expert craftsmanship, and unmatched reliability.
            </m.p>

            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/contact"
                className="group flex items-center justify-center gap-3 h-[60px] px-10 bg-[#F47C20] hover:bg-[#d96c18] text-white text-[16px] font-bold rounded-[14px] shadow-[0_12px_24px_rgba(244,124,32,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Book Free Inspection 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </m.div>
          </div>
        </Container>
      </section>

      {/* Reuse Premium Service Sections to make the page full */}
      <ServiceCarouselSection />
      <WhyChooseUsSection />
      <ProjectEstimateSection />
      <TrustedMaterialsSection />
      <FinalCtaSection />

    </main>
  );
}
