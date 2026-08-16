/**
 * pages/services/CommercialSpacesPage.tsx
 */

import PropertyServicePage from './PropertyServicePage';

const config = {
  pageTitle: 'Commercial Painting Services',
  eyebrow: 'COMMERCIAL PAINTING',
  heading: 'Commercial Painting Services',
  description:
    'South India Painters provides professional painting solutions for offices, retail spaces, showrooms and other commercial properties. We work efficiently to minimise business disruption while delivering durable, brand-aligned results.',
  heroImage:
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80',
  heroImageAlt: 'Bright modern office interior with desks, chairs, and large windows',
  breadcrumbLabel: 'Commercial Spaces',
  variant: 'commercial' as const,

  services: [
    'Office interior painting',
    'Retail and showroom painting',
    'Reception and common-area painting',
    'Brand-conscious colour consultation',
    'After-hours and weekend scheduling',
    'Fast-track project execution',
    'Commercial-grade durable finishes',
    'Zero-mess professional cleanup',
  ],

  // One image per whyChoosePoint — offices, brand colours, safety, workers, documentation
  whyImages: [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1562664348-a407eda58f20?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  ],

  whyChoosePoints: [
    'Commercial projects executed outside business hours to avoid disrupting operations',
    'We understand brand identity — your brand colours are matched with precision',
    'Commercial-grade, scrubbable paints chosen for high-traffic office environments',
    'Experienced in painting live, occupied commercial spaces safely and cleanly',
    'Fast mobilisation — we can start within 48 hours of agreement for urgent projects',
    'All work zones are cordoned off so your employees and customers stay safe',
    'GST invoice provided with full project documentation for your accounts team',
    'Annual maintenance contracts available for regular touch-ups and upkeep',
  ],

  processSteps: [
    { step: '01', label: 'Brand Consultation', desc: 'Align on colour scheme, brand identity & finishes' },
    { step: '02', label: 'After-Hours Planning', desc: 'Schedule work to avoid business disruption' },
    { step: '03', label: 'Surface Preparation', desc: 'Masking, sanding & priming all work surfaces' },
    { step: '04', label: 'Application', desc: 'Fast, precise painting by commercial-trained crew' },
    { step: '05', label: 'Brand Approval', desc: 'Client walkthrough, final touch-ups & handover' },
  ],
};

export default function CommercialSpacesPage() {
  return <PropertyServicePage config={config} />;
}
