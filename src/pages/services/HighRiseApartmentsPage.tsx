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
  heroImage:
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
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

  // One image per whyChoosePoint — apartment buildings, team coordination, safety, lobbies
  whyImages: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
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
