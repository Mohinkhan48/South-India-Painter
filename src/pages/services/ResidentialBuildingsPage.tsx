/**
 * pages/services/ResidentialBuildingsPage.tsx
 */

import PropertyServicePage from './PropertyServicePage';

const config = {
  pageTitle: 'Residential Painting Services',
  eyebrow: 'RESIDENTIAL BUILDINGS',
  heading: 'Residential Painting Services',
  description:
    'South India Painters provides complete painting services for residential buildings and homes of all sizes. We combine skilled workmanship with premium materials to deliver results that stand the test of time.',
  heroImage:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  heroImageAlt: 'Modern residential building with clean lines and professional finish',
  breadcrumbLabel: 'Residential Buildings',
  variant: 'residential' as const,

  services: [
    'Complete interior room painting',
    'Exterior building facade painting',
    'Full wall preparation and crack repair',
    'Personalised colour consultation',
    'Premium paint brand selection',
    'Doors, windows and trim painting',
    'Staircase and common-area painting',
    'Post-project quality inspection',
  ],

  // One image per whyChoosePoint — residential homes, exteriors, colour choices, family-friendly work
  whyImages: [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1525438160292-a4a860951216?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
  ],

  whyChoosePoints: [
    'Complete residential solutions — interior, exterior, common areas all handled by one team',
    'We assess and repair surface defects before any paint is applied for a lasting finish',
    "Exterior paints formulated to withstand South India's intense sun, rain and humidity",
    'Colour consultation service available to help homeowners pick harmonious palettes',
    'We protect your garden, driveway and landscaping during exterior painting work',
    "Experienced in painting occupied homes — work is scheduled around your family's routine",
    'All common areas, staircases and building facades handled with equal attention to detail',
    'Warranty on workmanship provided in writing after project completion',
  ],

  processSteps: [
    { step: '01', label: 'Building Survey', desc: 'Full assessment of interior, exterior & common areas' },
    { step: '02', label: 'Surface Preparation', desc: 'Crack filling, sanding & priming on all surfaces' },
    { step: '03', label: 'Exterior Painting', desc: 'Facade, windows, trims & boundaries completed first' },
    { step: '04', label: 'Interior Painting', desc: 'Floor by floor, room by room interior work' },
    { step: '05', label: 'Quality Inspection', desc: 'Detailed check, touch-ups & written handover' },
  ],
};

export default function ResidentialBuildingsPage() {
  return <PropertyServicePage config={config} />;
}
