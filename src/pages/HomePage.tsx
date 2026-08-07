import Hero from '@/components/home/Hero';
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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <BookOurService />
      <ServiceShowcaseSection />
      <ExperienceSection />
      <HowItWorksSection />
      <WhatPeopleSaySection />
      <ColourVisualizerSection />
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
      <div style={{ marginTop: '80px' }}>
        <LocationSection />
      </div>
    </div>
  );
}
