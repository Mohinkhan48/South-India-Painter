/**
 * pages/services/InteriorSpacesPage.tsx
 */

import PropertyServicePage from './PropertyServicePage';

const config = {
  pageTitle: 'Interior Painting Services',
  eyebrow: 'INTERIOR PAINTING',
  heading: 'Interior Painting Services',
  description:
    'South India Painters provides professional interior painting for homes, offices and all kinds of indoor spaces. Our skilled team ensures a flawless, long-lasting finish that enhances the beauty and comfort of every room.',
  heroImage: '/images/projects/interior spaces 9.png',
  heroImageAlt: 'Bright residential living room interior with sofa, coffee table, and large windows',
  breadcrumbLabel: 'Interior Spaces',
  variant: 'interior' as const,

  services: [
    'Wall and ceiling painting',
    'Interior colour consultation',
    'Premium interior paints',
    'Surface preparation',
    'Crack and minor surface repair',
    'Smooth and clean finish',
    'Furniture and floor protection',
    'Final inspection and cleanup',
  ],

  whyImages: [
    '/images/projects/interior spaces 1.png',
    '/images/projects/interior spaces 2.png',
    '/images/projects/interior spaces 3.png',
    '/images/projects/interior spaces 4.png',
    '/images/projects/interior spaces 5.png',
    '/images/projects/interior spaces 6.png',
    '/images/projects/interior spaces 7.png',
    '/images/projects/interior spaces 8.png',
  ],

  whyChoosePoints: [
    'Specialists in interior painting with a keen eye for detail and colour accuracy',
    'We use low-VOC, odour-minimal interior paints safe for families and children',
    'All furniture, fixtures and flooring are fully protected before work begins',
    'Our team works room by room to let you continue using other areas of your home',
    'Precise masking of edges, trims, switches and outlets — no bleed-through',
    'Interior colour consultants available to help you choose the perfect palette',
    'Smooth, drip-free application using premium rollers and professional brushes',
    'Thorough post-work cleanup with no paint stains left on floors or surfaces',
  ],

  processSteps: [
    { step: '01', label: 'Colour Consultation', desc: 'We help you select the ideal shades for each room' },
    { step: '02', label: 'Surface Assessment', desc: 'Identify cracks, damp patches & surface issues' },
    { step: '03', label: 'Preparation', desc: 'Furniture covered, surfaces sanded & primed' },
    { step: '04', label: 'Painting', desc: 'Smooth, even coats applied by trained professionals' },
    { step: '05', label: 'Final Inspection', desc: 'Touch-ups, cleanup & your sign-off' },
  ],
};

export default function InteriorSpacesPage() {
  return <PropertyServicePage config={config} />;
}
