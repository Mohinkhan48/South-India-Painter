import { m, useReducedMotion } from 'framer-motion';
import Container from '@/components/common/Container';
import PropertyCard from './PropertyCard';
import { propertyTypes } from '@/data/propertyTypes';

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function BookOurService() {
  const shouldReduceMotion = useReducedMotion();

  const handleBook = (bookingValue: string) => {
    console.log('Selected property type:', bookingValue);
  };

  return (
    <section
      className="bg-[rgba(248,241,232,0.95)]"
      style={{ paddingTop: '50px', paddingBottom: '60px' }}
    >
      <Container className="space-y-14">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          animate="visible"
          variants={sectionVariants}
          className="max-w-3xl space-y-3"
        >
          <m.p
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          >
            CHOOSE YOUR SPACE
          </m.p>
          <m.h2
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut', delay: 0.08 }}
            className="text-4xl font-extrabold leading-[1.03] text-[var(--color-primary-dark)] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.02]"
          >
            Book Our Service
          </m.h2>
          <m.p
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut', delay: 0.16 }}
            className="max-w-[680px] text-base leading-8 text-[var(--color-text-muted)] sm:text-[17px]"
          >
            Select your property type and let our team help you plan the right painting solution for your space.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10"
        >
          {propertyTypes.map((propertyType, index) => (
            <PropertyCard
              key={propertyType.id}
              propertyType={propertyType}
              index={index}
              onBook={handleBook}
            />
          ))}
        </m.div>
      </Container>
    </section>
  );
}


