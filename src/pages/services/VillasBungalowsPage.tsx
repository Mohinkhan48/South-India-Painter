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
  heroImage:
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
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

  // One image per whyChoosePoint — villa exteriors, landscaped homes, supervision, quality work
  whyImages: [
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7ddd0d03d1c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=800&q=80',
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
