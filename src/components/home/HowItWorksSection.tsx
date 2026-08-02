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
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="flex w-full justify-center bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionVariants}
          className="mx-auto w-full max-w-[1220px]"
        >
            <m.div
              variants={itemVariants}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
              className="mb-6 text-center"
            >
              <h2 className="text-[2.5rem] font-semibold tracking-[-0.05em] text-[var(--color-primary)] sm:text-[3.2rem] lg:text-[4.2rem]">
                How It Works
              </h2>
            </m.div>

            <m.div
              variants={itemVariants}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut', delay: 0.08 }}
              className="mb-10 text-center"
            >
              <p className="mx-auto max-w-[780px] text-[1rem] font-medium leading-relaxed text-[var(--color-primary)] sm:text-[1.15rem] lg:text-[1.3rem]">
                AakpaPainter will help renovate your house in <span className="font-extrabold">6 simple steps</span>
              </p>
              <p className="mt-2 text-[1rem] font-extrabold text-[var(--color-primary)] sm:text-[1.15rem] lg:text-[1.3rem]">
                Book your inspection today!
              </p>
            </m.div>

            <div className="relative mx-auto w-full max-w-[1200px] rounded-[30px] border border-[rgba(231,104,75,0.24)] bg-[#f9f3f0] px-3 py-6 sm:px-5 lg:px-7 lg:py-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 1200 420"
                className="pointer-events-none absolute left-1/2 top-[86px] z-0 hidden h-[300px] w-[92%] -translate-x-1/2 md:block"
              >
                <path
                  d="M 110 120 C 250 20, 360 30, 450 120 S 660 220, 760 110 S 1000 20, 1085 120 M 110 280 C 250 195, 360 190, 450 280 S 660 370, 760 270 S 1000 190, 1085 285"
                  fill="none"
                  stroke="rgba(231, 104, 75, 0.85)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-7 md:grid-cols-3 md:justify-between">
                {steps.map((step, index) => (
                  <m.article
                    key={step.id}
                    variants={itemVariants}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut', delay: index * 0.08 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                    className="group mx-auto w-full max-w-[340px] text-center"
                  >
                    <div className="mx-auto w-full overflow-hidden rounded-[18px] border border-[rgba(231,104,75,0.38)] bg-white shadow-[0_8px_20px_rgba(16,42,67,0.08)] transition-all duration-350 ease-out group-hover:-translate-y-2 group-hover:border-[var(--color-accent)] group-hover:shadow-[0_18px_32px_rgba(16,42,67,0.12)]">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="h-[220px] w-full object-cover transition-transform duration-350 ease-out group-hover:scale-[1.06]"
                      />
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-3">
                      <span className="text-[1.1rem] font-extrabold leading-none text-[var(--color-accent)]">{step.id}</span>
                      <span className="text-[1.7rem] font-extrabold leading-tight tracking-[-0.04em] text-[var(--color-primary)]">
                        {step.title}
                      </span>
                    </div>

                    <p className="mt-1 text-[1.7rem] font-extrabold leading-tight tracking-[-0.04em] text-[var(--color-primary)]">
                      {step.subtitle}
                    </p>
                  </m.article>
                ))}
              </div>
            </div>
          </m.div>
      </div>
    </section>
  );
}
