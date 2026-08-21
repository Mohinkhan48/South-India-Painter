/**
 * pages/services/HighRiseApartmentsPage.tsx
 */

import PropertyServicePage from './PropertyServicePage';

const config = {
  pageTitle: 'High-Rise Apartment Painting Services',
  eyebrow: 'HIGH-RISE APARTMENTS',
  heading: 'High-Rise Apartment Painting Services',
  description:
    'South India Painters handles painting projects for apartments and high-rise residential properties of all scales. Our experienced teams coordinate seamlessly to deliver clean, professional results on time.',
  heroImage: '/images/projects/appartment 1.png',
  heroImageAlt: 'Bright apartment building exterior with balconies, windows, and blue sky',
  breadcrumbLabel: 'High-Rise Apartments',
  variant: 'apartment' as const,

  services: [
    'Individual apartment interior painting',
    'Exterior building painting solutions',
    'Common-area and lobby painting',
    'Balcony and corridor painting',
    'Full surface preparation per unit',
    'Waterproofing-related painting solutions',
    'Professional multi-unit project coordination',
    'Strict timely completion commitment',
  ],

  whyImages: [
    '/images/projects/appartment 2.png',
    '/images/projects/appartment 3.png',
    '/images/projects/appartment 4.png',
    '/images/projects/appartment 5.png',
    '/images/projects/appartment 6.png',
    '/images/projects/appartment 7.png',
    '/images/projects/appartment 8.png',
    '/images/projects/appartment 9.png',
  ],

  whyChoosePoints: [
    'Proven track record handling multi-unit apartment complexes across South India',
    'We coordinate with housing societies and facility managers for seamless access',
    'Safety-compliant access equipment for exterior and high-rise work',
    'Unit-by-unit scheduling so residents experience minimal disruption',
    'Specialised common-area paints designed for high foot-traffic durability',
    'Dedicated project coordinator as your single point of contact throughout',
    'Strict adherence to handover deadlines — we respect your possession timelines',
    'Post-completion snagging and touch-up included in every apartment project',
  ],

  processSteps: [
    { step: '01', label: 'Project Planning', desc: 'Scope, unit schedule & stakeholder alignment' },
    { step: '02', label: 'Safety Setup', desc: 'Access equipment & protection measures installed' },
    { step: '03', label: 'Common Areas', desc: 'Lobby, corridors & shared spaces painted first' },
    { step: '04', label: 'Unit Painting', desc: 'Each apartment completed per agreed schedule' },
    { step: '05', label: 'Quality Review', desc: 'Snagging checks, touch-ups & formal handover' },
  ],
};

export default function HighRiseApartmentsPage() {
  return <PropertyServicePage config={config} />;
}
