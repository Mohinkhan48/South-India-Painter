/**
 * pages/services/IndustriesPage.tsx
 */

import PropertyServicePage from './PropertyServicePage';

const config = {
  pageTitle: 'Industrial Painting Services',
  eyebrow: 'INDUSTRIAL PAINTING',
  heading: 'Industrial Painting Services',
  description:
    'South India Painters provides painting solutions for industrial and large-scale properties. Our experienced team handles complex projects safely and efficiently, delivering durable protective coatings built for demanding environments.',
  heroImage: '/images/projects/industry 1.png',
  heroImageAlt: 'Large industrial property exterior with professional painting and protective coatings',
  breadcrumbLabel: 'Industries',
  variant: 'industrial' as const,

  services: [
    'Industrial building exterior painting',
    'Heavy-duty exterior wall coating',
    'Anti-corrosion protective coatings',
    'Thorough surface treatment and preparation',
    'Metal structure and machinery painting',
    'Chemical-resistant floor and wall coatings',
    'Large-project phased coordination',
    'Safety-first, compliant execution',
  ],

  whyImages: [
    '/images/projects/industry 2.png',
    '/images/projects/industry 3.png',
    '/images/projects/industry 4.png',
    '/images/projects/industry 5.png',
    '/images/projects/industry 6.png',
    '/images/projects/industry 7.png',
    '/images/projects/industry 8.png',
    '/images/projects/industry 9.png',
  ],

  whyChoosePoints: [
    'Experienced in large-scale industrial painting requiring phased, planned execution',
    'Safety is our top priority — all teams follow industrial site safety protocols',
    'We use industrial-grade coatings rated for chemical exposure, heat and abrasion',
    'Anti-corrosion treatments applied to all metal structures, pipes and equipment frames',
    'Work schedules designed around plant operations to avoid production downtime',
    'Trained crew equipped with appropriate PPE and safety access equipment',
    'Detailed project documentation including surface reports and material specifications',
    'Post-coating inspection using industry-standard methods to verify durability',
  ],

  processSteps: [
    { step: '01', label: 'Safety Assessment', desc: 'Site hazard review, safety plan & access setup' },
    { step: '02', label: 'Surface Treatment', desc: 'Abrasive blasting, degreasing & rust removal' },
    { step: '03', label: 'Protective Coating', desc: 'Anti-corrosion & weather-resistant base applied' },
    { step: '04', label: 'Structural Painting', desc: 'Walls, metal frames & structural surfaces completed' },
    { step: '05', label: 'Inspection & Sign-Off', desc: 'Quality check, documentation & client sign-off' },
  ],
};

export default function IndustriesPage() {
  return <PropertyServicePage config={config} />;
}
