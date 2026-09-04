import { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import WelcomeIntroSection from '@/components/home/WelcomeIntroSection';
import BookOurService from '@/components/home/BookOurService';
import ServiceShowcaseSection from '@/components/home/ServiceShowcaseSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import WhatPeopleSaySection from '@/components/home/WhatPeopleSaySection';
import ColourVisualizerSection from '@/components/home/ColourVisualizerSection';
import ServiceLookingForSection from '@/components/home/ServiceLookingForSection';
import VideoTestimonialsSection from '@/components/home/VideoTestimonialsSection';
import TrustedBrandPartnerSection from '@/components/home/TrustedBrandPartnerSection';
import RecentProjectsSection from '@/components/home/RecentProjectsSection';
import BookSiteVisitSection from '@/components/home/BookSiteVisitSection';
import LocationSection from '@/components/home/LocationSection';
import EnquireFormModal from '@/components/common/EnquireFormModal';
import { useSEO } from '@/hooks/useSEO';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Per-page SEO: sets document.title, meta description, and canonical URL
  useSEO({
    title: 'South India Painters | Professional Painting Services in Karnataka',
    description:
      'South India Painters — 27+ years of professional residential, commercial and industrial painting services in Bangalore and across South India. 234+ skilled painters. Free estimates.',
    canonical: 'https://southindiapainters.com/',
    ogImage: 'https://southindiapainters.com/images/hero-bg.jpg',
    twitterImage: 'https://southindiapainters.com/images/hero-bg.jpg',
  });

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem('hasShownPopup', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <div style={{ marginTop: '80px' }}>
        <WelcomeIntroSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <ColourVisualizerSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <BookOurService />
      </div>
      <div style={{ marginTop: '0px' }}>
        <ServiceShowcaseSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <ExperienceSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <HowItWorksSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <WhatPeopleSaySection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <ServiceLookingForSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <VideoTestimonialsSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <TrustedBrandPartnerSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <RecentProjectsSection />
      </div>
      <div style={{ marginTop: '80px' }}>
        <BookSiteVisitSection />
      </div>
      <div style={{ marginTop: '80px', marginBottom: '80px' }}>
        <LocationSection />
      </div>
      <EnquireFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
