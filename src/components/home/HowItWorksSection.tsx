import { m, useReducedMotion } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Site Inspection',
    subtitle: '& Quotation',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Engineer or inspector checking a house and reviewing a survey sheet',
  },
  {
    id: '02',
    title: 'Accept',
    subtitle: 'Quotation',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Customer reviewing a quotation with a consultant',
  },
  {
    id: '03',
    title: 'Free Colour',
    subtitle: 'Consultation',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Interior designer helping a client select paint colours and swatches',
  },
  {
    id: '04',
    title: 'Painting',
    subtitle: 'Process Begins',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Professional painter applying paint to a wall with roller and safety gear',
  },
  {
    id: '05',
    title: 'Dedicated Project',
    subtitle: 'Manager',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Project manager holding a tablet while discussing work with clients',
  },
  {
    id: '06',
    title: 'Finishing And',
    subtitle: 'Handover',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Happy client receiving completed project and admiring the finished home',
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: (side: 'left' | 'right' | 'center') => ({
    opacity: 0,
    x: side === 'left' ? -50 : side === 'right' ? 50 : 0,
    y: side === 'center' ? 40 : 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

export default function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="flex w-full justify-center bg-[var(--color-background)] pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      <div className="w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={sectionVariants}
        >
          {/* ── Header ── */}
          <m.div
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: 'easeOut' }}
            className="mb-5 text-center"
          >
            <h2 className="text-[2.5rem] font-semibold tracking-[-0.05em] text-[var(--color-primary)] sm:text-[3.2rem] lg:text-[4.2rem]">
              How It Works
            </h2>
          </m.div>

          <m.div
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut', delay: 0.08 }}
            className="mb-16 text-center sm:mb-20 lg:mb-24"
          >
            <p className="mx-auto max-w-[780px] text-[1rem] font-medium leading-relaxed text-[var(--color-primary)] sm:text-[1.15rem] lg:text-[1.3rem]">
              AakpaPainter will help renovate your house in <span className="font-extrabold">6 simple steps</span>
            </p>
            <p className="mt-2 text-[1rem] font-extrabold text-[var(--color-primary)] sm:text-[1.15rem] lg:text-[1.3rem]">
              Book your inspection today!
            </p>
          </m.div>

          {/* ── Timeline ── */}
          <div className="relative mx-auto w-full max-w-[1100px]">
            {/* Vertical spine — desktop only */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(231,104,75,0.35)] to-transparent md:block"
            />

            {/* Mobile vertical spine — left aligned */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[rgba(231,104,75,0.30)] to-transparent sm:left-8 md:hidden"
            />

            <div className="flex flex-col gap-12 sm:gap-14 md:gap-20">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;

                return (
                  <m.div
                    key={step.id}
                    custom={shouldReduceMotion ? 'center' : isEven ? 'left' : 'right'}
                    variants={cardVariants}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    initial="hidden"
                    whileInView="visible"
                    className="relative"
                  >
                    {/* ── Desktop: alternating layout ── */}
                    <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr] md:items-center">
                      {/* Left column */}
                      <div className={isEven ? '' : 'order-3'}>
                        <div className={`${isEven ? 'ml-auto mr-0' : 'ml-0 mr-auto'} max-w-[460px]`}>
                          <StepCard step={step} alignment={isEven ? 'right' : 'left'} shouldReduceMotion={shouldReduceMotion} />
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="relative z-10 flex items-center justify-center order-2">
                        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[3px] border-[var(--color-accent)] bg-white shadow-[0_0_0_8px_rgba(231,104,75,0.08),0_4px_16px_rgba(231,104,75,0.18)]">
                          <span className="text-[0.85rem] font-extrabold leading-none text-[var(--color-accent)]">
                            {step.id}
                          </span>
                        </div>
                      </div>

                      {/* Right column */}
                      <div className={isEven ? 'order-3' : ''}>
                        {/* Empty space for alternating layout */}
                      </div>
                    </div>

                    {/* ── Mobile / Tablet: vertical stack ── */}
                    <div className="flex items-start gap-5 sm:gap-6 md:hidden">
                      {/* Timeline dot */}
                      <div className="relative z-10 mt-1 flex flex-shrink-0 items-center justify-center">
                        <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border-[2.5px] border-[var(--color-accent)] bg-white shadow-[0_0_0_6px_rgba(231,104,75,0.08),0_4px_12px_rgba(231,104,75,0.16)] sm:h-[48px] sm:w-[48px]">
                          <span className="text-[0.8rem] font-extrabold leading-none text-[var(--color-accent)] sm:text-[0.85rem]">
                            {step.id}
                          </span>
                        </div>
                      </div>

                      {/* Card */}
                      <div className="flex-1 max-w-[460px]">
                        <StepCard step={step} alignment="left" shouldReduceMotion={shouldReduceMotion} />
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

/* ── Step Card Sub-component ── */
interface StepCardProps {
  step: (typeof steps)[number];
  alignment: 'left' | 'right';
  shouldReduceMotion: boolean | null;
}

function StepCard({ step, alignment, shouldReduceMotion }: StepCardProps) {
  return (
    <m.article
      whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.3 } }}
      className="group w-full"
    >
      <div className="overflow-hidden rounded-[20px] border border-[rgba(231,104,75,0.22)] bg-white shadow-[0_8px_28px_rgba(16,42,67,0.07)] transition-all duration-350 ease-out group-hover:border-[var(--color-accent)] group-hover:shadow-[0_20px_40px_rgba(16,42,67,0.12)]">
        <img
          src={step.image}
          alt={step.imageAlt}
          className="h-[200px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-[220px] lg:h-[240px]"
        />

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <div className={`flex items-center gap-3 ${alignment === 'right' ? 'justify-end' : 'justify-start'} md:justify-start`}>
            <span className="text-[1.1rem] font-extrabold leading-none text-[var(--color-accent)]">{step.id}</span>
            <span className="text-[1.5rem] font-extrabold leading-tight tracking-[-0.04em] text-[var(--color-primary)] sm:text-[1.65rem]">
              {step.title}
            </span>
          </div>
          <p className={`mt-1 text-[1.5rem] font-extrabold leading-tight tracking-[-0.04em] text-[var(--color-primary)] sm:text-[1.65rem] ${alignment === 'right' ? 'text-right' : 'text-left'} md:text-left`}>
            {step.subtitle}
          </p>
        </div>
      </div>
    </m.article>
  );
}
