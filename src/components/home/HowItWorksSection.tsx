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
    <section className="flex w-full justify-center bg-[var(--color-background)]" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
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

          <div
  className="relative overflow-hidden rounded-[24px] border bg-white shadow-xl"
  style={{
    maxWidth: "900px",
    width: "100%",
    border: "1px solid #E8EEF6",
    marginLeft: "clamp(20px, 8vw, 140px)",
    marginBottom: "70px",
  }}

>
  {/* Left Accent */}
  <div
    className="absolute left-0 top-0 h-full w-[6px]"
    style={{
      background: "linear-gradient(to bottom,#17324D,#3E73A8)",
    }}
  />

  <div
    className="flex items-center gap-8"
    style={{
      padding: "30px 36px",
    }}
  >
    {/* Icon */}
    <div className="shrink-0">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{
          background: "linear-gradient(135deg,#17324D,#2E5E91)",
          boxShadow: "0 10px 25px rgba(23,50,77,.18)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="white"
          strokeWidth={2}
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17l10 5 10-5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12l10 5 10-5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1">
      <span
        className="inline-flex rounded-full"
        style={{
          background: "#EEF5FC",
          color: "#2E5E91",
          padding: "6px 16px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Painting Journey
      </span>

      <h3
        style={{
          marginTop: "14px",
          fontSize: "32px",
          fontWeight: 800,
          color: "#17324D",
          lineHeight: 1.2,
        }}
      >
        Your Dream Home Starts Here
      </h3>

      <p
        style={{
          marginTop: "10px",
          fontSize: "16px",
          color: "#64748B",
          lineHeight: "28px",
          maxWidth: "620px",
        }}
      >
        From the first inspection to the final handover, our experts manage
        every stage with precision, premium materials, and professional
        workmanship.
      </p>

      {/* Features */}
      <div
        className="flex flex-wrap gap-3"
        style={{
          marginTop: "20px",
        }}
      >
        {[
          "Free Site Inspection",
          "Expert Consultation",
          "Premium Paints",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full"
            style={{
              padding: "8px 14px",
              background: "#F8FAFC",
              border: "1px solid #E5EDF6",
            }}
          >
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                background: "#17324D",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              ✓
            </div>

            <span
              style={{
                color: "#17324D",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

          {/* ── Timeline ── */}
          <div className="relative mx-auto w-full max-w-[1100px]" style={{ marginLeft: 'clamp(20px, 5vw, 80px)' }}>
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
                      <div>
                        {isEven ? (
                          <div className="ml-auto mr-0 max-w-[460px]">
                            <StepCard step={step} alignment="right" shouldReduceMotion={shouldReduceMotion} />
                          </div>
                        ) : null}
                      </div>

                      {/* Center dot */}
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[3px] border-[var(--color-accent)] bg-white shadow-[0_0_0_8px_rgba(231,104,75,0.08),0_4px_16px_rgba(231,104,75,0.18)]">
                          <span className="text-[0.85rem] font-extrabold leading-none text-[var(--color-accent)]">
                            {step.id}
                          </span>
                        </div>
                      </div>

                      {/* Right column */}
                      <div>
                        {!isEven ? (
                          <div className="ml-0 mr-auto max-w-[460px]">
                            <StepCard step={step} alignment="left" shouldReduceMotion={shouldReduceMotion} />
                          </div>
                        ) : null}
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
