import { m, useReducedMotion } from 'framer-motion';
import Container from '@/components/common/Container';
import ServiceCard from './ServiceCard';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    id: 'interior-painting',
    number: '01',
    title: 'Interior Painting',
    description: 'Refined colours and flawless finishes designed to transform the way your interiors feel.',
    image: '/images/services/interior-painting.jpg',
    imageAlt: 'Premium painted interior living room with warm accents',
    href: '/services/interior-painting',
  },
  {
    id: 'exterior-painting',
    number: '02',
    title: 'Exterior Painting',
    description: 'Weather-resistant exterior finishes that protect and elevate your building facade.',
    image: '/images/services/exterior-painting.jpg',
    imageAlt: 'Contemporary exterior facade with fresh premium paint',
    href: '/services/exterior-painting',
  },
  {
    id: 'waterproofing',
    number: '03',
    title: 'Waterproofing',
    description: 'Durable surface protection for bathrooms, terraces and water-facing spaces.',
    image: '/images/services/waterproofing.jpg',
    imageAlt: 'Waterproofing work on rooftop terrace and parapet area',
    href: '/services/waterproofing',
  },
  {
    id: 'wall-textures',
    number: '04',
    title: 'Wall Textures',
    description: 'Sophisticated textured surfaces that add depth, warmth and premium character.',
    image: '/images/services/wall-textures.jpg',
    imageAlt: 'Textured painted wall with premium finish in interior space',
    href: '/services/wall-textures',
  },
  {
    id: 'wallpaper',
    number: '05',
    title: 'Wallpaper',
    description: 'Designer wallpapers installed with precision for an elevated, polished look.',
    image: '/images/services/wallpaper.jpg',
    imageAlt: 'Luxury wallpaper installation in a stylish living room',
    href: '/services/wallpaper',
  },
  {
    id: 'wood-finishes',
    number: '06',
    title: 'Wood & Metal Finishes',
    description: 'Expert finishing for doors, cabinets, metalwork and joinery that lasts.',
    image: '/images/services/wood-finishes.jpg',
    imageAlt: 'High-quality wood and metal finishes on premium cabinetry',
    href: '/services/wood-finishes',
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-surface)] py-16 sm:py-20 lg:py-24">
      <Container className="space-y-10 lg:space-y-14">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          animate="visible"
          variants={sectionVariants}
          className="max-w-3xl space-y-6"
        >
          <m.p
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          >
            OUR EXPERTISE
          </m.p>
          <m.h2
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut', delay: 0.08 }}
            className="text-4xl font-extrabold leading-[1.03] text-[var(--color-primary)] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.02]"
          >
            Painting Solutions Crafted
            <span className="block text-[var(--color-accent)]">for Every Space</span>
          </m.h2>
          <m.p
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut', delay: 0.16 }}
            className="max-w-[620px] text-base leading-8 text-[var(--color-text-muted)] sm:text-[17px]"
          >
            From elegant interiors to weather-resistant exteriors, our specialists deliver professional finishes designed around your space, surface and requirements.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </m.div>
      </Container>
    </section>
  );
}
