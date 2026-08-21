/**
 * pages/services/VillasBungalowsPage.tsx
 */

import PropertyServicePage from './PropertyServicePage';

const config = {
  pageTitle: 'Villa & Bungalow Painting Services',
  eyebrow: 'VILLAS & BUNGALOWS',
  heading: 'Villa & Bungalow Painting Services',
  description:
    'South India Painters provides complete painting solutions for large villas and independent homes. From interior rooms to exterior facades, we bring precision and premium finishes to every corner of your home.',
  heroImage: '/images/projects/villas banglows 1.png',
  heroImageAlt: 'Bright daytime exterior of a premium villa with landscaping and modern architectural details',
  breadcrumbLabel: 'Villas / Bungalows',
  variant: 'villa' as const,

  services: [
    'Interior and exterior painting',
    'Premium finishes for large-scale homes',
    'Exterior weather-resistant coating',
    'Texture and decorative accent walls',
    'Personalised colour consultation',
    'Wood and metal surface painting',
    'Detailed surface preparation throughout',
    'Professional finishing and full cleanup',
  ],

  whyImages: [
    '/images/projects/villas banglows 2.png',
    '/images/projects/villas banglows 3.png',
    '/images/projects/villas banglows 4.png',
    '/images/projects/vallas banglows 5.png',
    '/images/projects/vallas banglows 6.png',
    '/images/projects/vallas banglows 7.png',
    '/images/projects/vallas banglows 8.png',
    '/images/projects/vallas banglows 9.png',
  ],

  whyChoosePoints: [
    'Extensive experience managing large, multi-room villa painting projects end to end',
    'We coordinate interior and exterior work simultaneously to save you time',
    "Exterior paints selected for South India's climate — heat, humidity and monsoon resistant",
    'Dedicated site supervisor assigned to every villa project for quality control',
    'We handle gates, boundary walls, wood finishes and metal grills — not just walls',
    'Premium Asian Paints, Berger or Dulux products used based on your preference',
    'Flexible scheduling to work around your household routine with minimal disruption',
    'Transparent, itemised quotation before work begins — no surprise charges',
  ],

  processSteps: [
    { step: '01', label: 'Site Survey', desc: 'Full measurement & condition assessment of your villa' },
    { step: '02', label: 'Surface Preparation', desc: 'Sanding, patching & priming interior and exterior' },
    { step: '03', label: 'Interior Work', desc: 'Room-by-room painting with full furniture protection' },
    { step: '04', label: 'Exterior Work', desc: 'Facade, boundary walls, wood & metal painting' },
    { step: '05', label: 'Handover', desc: 'Final walkthrough, touch-ups & complete site cleanup' },
  ],
};

export default function VillasBungalowsPage() {
  return <PropertyServicePage config={config} />;
}
