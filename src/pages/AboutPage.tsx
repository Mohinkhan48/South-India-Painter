import { useEffect, useState, useRef } from 'react';
import { m, useInView, type Variants } from 'framer-motion';
import {
  BadgeCheck,
  Palette,
  IndianRupee,
  Clock3,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 32
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

function useCountUp(
  target: number,
  duration = 2200,
  startWhenVisible = true
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startWhenVisible);

  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimestamp) / duration,
        1
      );

      const easeProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, hasStarted]);

  return {
    count,
    ref
  };
}

function StatCounter({
  target,
  suffix = '+',
  label
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const { count, ref } = useCountUp(target, 2500);

  return (
    <m.div
      variants={fadeUpVariant}
      className="relative flex flex-col items-center justify-center p-6 lg:p-8 bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(242,106,61,0.08)] hover:-translate-y-2 transition-all duration-500 h-full text-center overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F26A3D]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span
        ref={ref}
        className="text-4xl md:text-5xl font-black text-[#102A43] tracking-tight"
      >
        {count}
        {suffix}
      </span>

      <span className="mt-3 text-xs md:text-sm font-bold text-[#5E6872] uppercase tracking-wider">
        {label}
      </span>
    </m.div>
  );
}

function SectionBadge({
  text,
  light = false
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-2 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
        light
          ? 'bg-white/10 text-white border border-white/20'
          : 'bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          light ? 'bg-white' : 'bg-[#F26A3D]'
        }`}
      />

      {text}
    </span>
  );
}

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: 'South India Painters transformed our villa completely. The attention to detail and the premium finish using Asian Paints Royale was beyond our expectations. Highly professional team!',
    },
    {
      text: 'I always recommend them to my clients. Their execution is flawless, they stick to timelines, and the work site is always left spotless after completion.',
    },
    {
      text: 'We hired them for our office space renovation. The color consultation was very helpful, and the painting was done over the weekend with zero disruption to our work.',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="font-sans text-[#102A43] bg-[#FAF8F4] overflow-x-hidden">

      {/* =========================================================
          1. OUR STORY
      ========================================================= */}

      <section
        className="bg-white"
        style={{
          paddingTop: '90px',
          paddingBottom: '100px'
        }}
        aria-label="Our Story"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

          <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-12 lg:gap-16 items-center">

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-80px'
              }}
              variants={fadeUpVariant}
              className="relative rounded-[28px] lg:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group border border-[#E8E4DD]"
            >
              <img
                src="/assets/about/story.png"
                alt="Our Story"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent opacity-60" />
            </m.div>

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-80px'
              }}
              variants={staggerContainer}
              className="flex flex-col"
            >

              <m.div variants={fadeUpVariant}>
                <SectionBadge text="Who We Are" />
              </m.div>

              <m.h2
                variants={fadeUpVariant}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A43] leading-[1.15] tracking-tight mb-6"
              >
                Our Story & Vision
              </m.h2>

              <m.p
                variants={fadeUpVariant}
                className="text-base sm:text-lg text-[#5E6872] leading-relaxed mb-6"
              >
                Founded with a passion for transforming living spaces,
                South India Painters has grown from a small dedicated team
                into one of the most trusted premium painting services
                across South India.
              </m.p>

              <m.p
                variants={fadeUpVariant}
                className="text-base sm:text-lg text-[#5E6872] leading-relaxed mb-8"
              >
                We believe that every wall is a canvas and every home
                deserves a masterpiece. Combining certified painting
                professionals, top-tier eco-friendly paints, and
                transparent pricing, we ensure your home stays vibrant
                for years to come.
              </m.p>

              <m.ul
                variants={staggerContainer}
                className="space-y-4"
              >
                {[
                  'Uncompromising Quality & Precision Standards',
                  '100% Transparent Itemised Quotations',
                  'Dedicated On-Site Project Managers'
                ].map((item, i) => (
                  <m.li
                    key={i}
                    variants={fadeUpVariant}
                    className="flex items-center gap-3.5 text-base sm:text-lg font-bold text-[#102A43]"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F26A3D]/10 flex items-center justify-center text-[#F26A3D]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>

                    {item}
                  </m.li>
                ))}
              </m.ul>

            </m.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          2. COMPANY STATISTICS
      ========================================================= */}

      <section
        className="bg-[#F5F2EE]"
        style={{
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
        aria-label="Company statistics"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-80px'
            }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
          >

            <StatCounter
              target={1981}
              suffix=""
              label="Projects Completed"
            />

            <StatCounter
              target={25}
              label="Years Experience"
            />

            <StatCounter
              target={98}
              suffix="%"
              label="Customer Satisfaction"
            />

            <StatCounter
              target={12}
              label="Cities Served"
            />

            <StatCounter
              target={100}
              label="Professional Painters"
            />

          </m.div>

        </div>
      </section>


      {/* =========================================================
          3. WHY CHOOSE US
      ========================================================= */}

      <section
        className="bg-[#FAF8F4]"
        style={{
          paddingTop: '110px',
          paddingBottom: '110px'
        }}
        aria-label="Why choose us"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

          <m.div
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    margin: '-80px'
  }}
  variants={staggerContainer}
  className="text-center mb-12 lg:mb-16 flex flex-col items-center -translate-y-10"
>

            <m.div variants={fadeUpVariant}>
              <SectionBadge text="Our Advantages" />
            </m.div>

            <m.h2
              variants={fadeUpVariant}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A43] tracking-tight leading-tight mb-4"
            >
              Why Choose Us
            </m.h2>

            <m.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-[#5E6872] max-w-2xl leading-relaxed"
            >
              We bring professional excellence, clean execution,
              and guaranteed customer satisfaction to every project.
            </m.p>

          </m.div>


          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-50px'
            }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          >

            {[
              {
                title: 'Certified Professionals',
                desc: 'Background-verified, highly trained painters ensuring flawless wall execution.',
                icon: BadgeCheck
              },
              {
                title: 'Premium Paint Brands',
                desc: 'We exclusively use top-grade products from Asian Paints, Berger, and Dulux.',
                icon: Palette
              },
              {
                title: 'Affordable Pricing',
                desc: 'Transparent, itemised quotes with absolutely zero hidden charges.',
                icon: IndianRupee
              },
              {
                title: 'Timely Delivery',
                desc: 'We respect your time — projects are completed on or before the committed date.',
                icon: Clock3
              },
              {
                title: 'Clean Work Process',
                desc: 'Post-painting cleanup is guaranteed. We leave your home spotless.',
                icon: Sparkles
              },
              {
                title: '100% Satisfaction',
                desc: 'We do not consider a project complete until you are completely delighted.',
                icon: HeartHandshake
              }
            ].map((feature, idx) => {

              const Icon = feature.icon;

              return (
                <m.div
  key={idx}
  variants={fadeUpVariant}
  className="bg-white border border-gray-100 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(242,106,61,0.08)] transition-all duration-500 h-full flex flex-col group hover:-translate-y-2 p-6 lg:p-8 relative overflow-hidden"
>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26A3D]/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-[#F26A3D]/15" />

                  <div className="flex items-center mb-4">

                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F26A3D]/10 to-[#F26A3D]/5 rounded-2xl flex items-center justify-center text-[#F26A3D] group-hover:scale-110 group-hover:bg-[#F26A3D]/20 transition-all duration-500 shadow-sm border border-[#F26A3D]/10">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1 h-px bg-[#F26A3D] ml-4 opacity-30 group-hover:opacity-60 transition-opacity" />

                  </div>

                  <h3
  className="text-2xl font-semibold text-[#102A43] mb-2"
  style={{ position: 'relative', left: '15px' }}
>
  {feature.title}
</h3>

                  <p
  className="text-[#5E6872] text-base leading-relaxed flex-grow"
  style={{ position: 'relative', left: '15px' }}
>
  {feature.desc}
</p>

                </m.div>
              );
            })}

          </m.div>

        </div>
      </section>


      {/* =========================================================
          4. MISSION & VISION
      ========================================================= */}

      <section
        className="bg-white"
        style={{
          paddingTop: '100px',
          paddingBottom: '100px'
        }}
        aria-label="Mission and vision"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-80px'
            }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{
              gap: '48px'
            }}
          >

            <m.div
  variants={fadeUpVariant}
  className="group relative min-h-[270px] rounded-[26px] bg-gradient-to-br from-[#102A43] via-[#102A43] to-[#081B2C] text-white overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(16,42,67,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_75px_rgba(16,42,67,0.28)] p-6 sm:p-8"
>

              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F26A3D]/10 blur-3xl pointer-events-none" />

              <div className="absolute -bottom-28 -left-20 w-64 h-64 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_32%)] pointer-events-none" />

              <div className="relative z-10 flex h-full flex-col">

                <div className="flex items-center justify-between mb-6">

                  <div className="w-[62px] h-[62px] rounded-[18px] bg-gradient-to-br from-[#F26A3D] to-[#D9552A] flex items-center justify-center shadow-[0_12px_28px_rgba(242,106,61,0.28)] border border-white/10 transition-transform duration-500 group-hover:scale-105">

                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>

                  </div>

                  <div className="text-white/20 text-6xl font-black leading-none select-none">
                    01
                  </div>

                </div>

                <div className="max-w-xl relative left-[12px]">

  <h3 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
    Our Mission
  </h3>

  <p className="text-base sm:text-lg text-white/80 leading-[1.65] max-w-[620px]">
    To transform every home and space with flawless paint
    finishes, leveraging eco-certified premium materials and
    an unwavering commitment to craftsmanship that inspires
    trust and delight in every customer.
  </p>

</div>

                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-white/10" />
                </div>

              </div>

            </m.div>


            <m.div
  variants={fadeUpVariant}
  className="group relative min-h-[270px] rounded-[26px] bg-gradient-to-br from-[#F26A3D] via-[#F26A3D] to-[#D9552A] text-white overflow-hidden border border-white/20 shadow-[0_24px_60px_rgba(242,106,61,0.20)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_75px_rgba(217,85,42,0.30)] p-6 sm:p-8"
>

              <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              <div className="absolute -bottom-28 -right-20 w-64 h-64 rounded-full bg-[#8F2F18]/15 blur-3xl pointer-events-none" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.16),transparent_32%)] pointer-events-none" />

              <div className="relative z-10 flex h-full flex-col">

                <div className="flex items-center justify-between mb-6">

                  <div className="w-[62px] h-[62px] rounded-[20px] bg-white flex items-center justify-center shadow-[0_12px_28px_rgba(90,30,15,0.18)] border border-white/30 transition-transform duration-500 group-hover:scale-105">

                    <svg
                      className="w-7 h-7 text-[#F26A3D]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>

                  </div>

                  <div className="text-white/25 text-6xl font-black leading-none select-none">
                    02
                  </div>

                </div>

                <div className="max-w-xl relative left-[12px]">

  <h3 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
    Our Vision
  </h3>

  <p className="text-base sm:text-lg text-white/90 leading-[1.65] max-w-[620px]">
    To be South India's most preferred and recommended
    painting service, celebrated for innovative surface
    technologies, absolute reliability, and unmatched
    client care.
  </p>

</div>

                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-white/20" />
                </div>

              </div>

            </m.div>

          </m.div>

        </div>
      </section>


      {/* =========================================================
          5. OUR WORK PROCESS
      ========================================================= */}

      <section
        className="bg-[#FAF8F4]"
        style={{
          paddingTop: '100px',
          paddingBottom: '120px'
        }}
        aria-label="Our work process"
      >

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

          <m.div
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    margin: '-80px'
  }}
  variants={staggerContainer}
  className="text-center mb-14 lg:mb-20 flex flex-col items-center -translate-y-10"
>

            <m.div variants={fadeUpVariant}>
              <SectionBadge text="How We Work" />
            </m.div>

            <m.h2
              variants={fadeUpVariant}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A43] tracking-tight mb-4"
            >
              Our Work Process
            </m.h2>

            <m.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-[#5E6872] max-w-2xl leading-relaxed"
            >
              Six simple, organized steps ensuring absolute clarity
              from start to final handover.
            </m.p>

          </m.div>


          <div className="relative">

            <div className="hidden lg:block absolute top-[32px] left-[5%] right-[5%] h-1 bg-[#E8E4DD] z-0" />

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-50px'
              }}
              variants={staggerContainer}
              className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"
              style={{
                gap: '32px'
              }}
            >

              {[
                {
                  title: 'Consultation',
                  desc: 'Share your requirements and get expert guidance.'
                },
                {
                  title: 'Inspection',
                  desc: 'Free site visit to measure and evaluate walls.'
                },
                {
                  title: 'Colour Selection',
                  desc: 'Choose shades and finishes with digital tools.'
                },
                {
                  title: 'Painting',
                  desc: 'Flawless application by certified painters.'
                },
                {
                  title: 'Quality Check',
                  desc: 'Rigorous 20-point inspection by supervisor.'
                },
                {
                  title: 'Final Handover',
                  desc: 'Complete site cleaning and client sign-off.'
                }
              ].map((step, i) => (

                <m.div
                  key={i}
                  variants={fadeUpVariant}
                  className="flex flex-col items-center text-center group bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(242,106,61,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F26A3D] to-[#D9552A] text-white font-bold text-xl flex items-center justify-center mb-5 shadow-[0_8px_20px_rgba(242,106,61,0.3)] group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0 relative z-10">
                    {i + 1}
                  </div>

                  <h4 className="text-lg font-semibold text-[#102A43] mb-2">
                    {step.title}
                  </h4>

                  <p className="text-sm text-[#5E6872] leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>

                </m.div>

              ))}

            </m.div>

          </div>

        </div>
      </section>


      {/* =========================================================
          6. PREMIUM BRANDS
      ========================================================= */}

      <section
        className="bg-white"
        style={{
          paddingTop: '70px',
          paddingBottom: '70px'
        }}
        aria-label="Brands we trust"
      >

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUpVariant}
            className="text-center mb-16 -translate-y-[28px]"
          >

            <div className="flex items-center justify-center gap-4 mb-5">

              <span className="h-px w-12 bg-[#F26A3D]/40" />

              <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#5E6872]">
                Premium Brands We Trust
              </span>

              <span className="h-px w-12 bg-[#F26A3D]/40" />

            </div>

          </m.div>


          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-50px'
            }}
            variants={staggerContainer}
            className="flex items-start justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 flex-wrap"
          >

            {[
              { name: 'Asian Paints', logo: '/images/projects/asian-paint-logo.png' },
              { name: 'JSW', logo: '/images/projects/jsw logo.png' },
              { name: 'Birla Opus', logo: '/images/projects/opus logo.png' },
              { name: 'Asian Paints', logo: '/images/projects/asian-paint-logo.png' },
              { name: 'JSW', logo: '/images/projects/jsw logo.png' },
              { name: 'Birla Opus', logo: '/images/projects/opus logo.png' },
            ].map((brand, index) => (

              <m.div
                key={index}
                variants={fadeUpVariant}
                className="group flex flex-col items-center justify-start w-[130px]"
              >

                <div className="w-[130px] h-[70px] flex items-center justify-center">

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-[125px] max-h-[65px] w-auto h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                </div>

                <p className="mt-2 text-base sm:text-lg font-bold text-[#102A43] tracking-tight text-center">
                  {brand.name}
                </p>

              </m.div>

            ))}

          </m.div>

        </div>
      </section>


      {/* =========================================================
          7. CLIENT TESTIMONIALS
      ========================================================= */}

      <section
        className="bg-[#F5F2EE]"
        style={{
          paddingTop: '80px',
          paddingBottom: '110px'
        }}
        aria-label="Client testimonials"
      >

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-80px'
            }}
            variants={staggerContainer}
            className="text-center mb-12 lg:mb-16 flex flex-col items-center -translate-y-[40px]"
          >

            <m.div variants={fadeUpVariant}>
              <SectionBadge text="Testimonials" />
            </m.div>

            <m.h2
              variants={fadeUpVariant}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A43] tracking-tight leading-tight -mt-1"
            >
              Client Testimonials
            </m.h2>

          </m.div>


          <div
            className="relative bg-[#102A43] rounded-[32px] px-8 sm:px-12 lg:px-16 py-12 sm:py-14 text-white shadow-[0_25px_60px_rgba(16,42,67,0.18)] overflow-hidden min-h-[320px] flex items-center justify-center"
          >

            <svg
              className="absolute top-8 left-8 w-20 h-20 sm:w-28 sm:h-28 text-white/5 rotate-180 pointer-events-none"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>


            <div
              className="relative z-10 w-full flex flex-col items-center justify-center text-center transition-opacity duration-500 pb-6"
              key={activeTestimonial}
            >

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic max-w-3xl mx-auto text-center mb-8">
                "{testimonials[activeTestimonial].text}"
              </p>

            </div>


            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">

              {testimonials.map((_, i) => (

                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === activeTestimonial
                      ? 'bg-[#F26A3D] w-6'
                      : 'bg-white/30 w-3 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          8. FINAL CTA
      ========================================================= */}

      <section
        className="relative bg-[#0A1828] overflow-hidden"
        style={{
          paddingTop: '100px',
          paddingBottom: '80px'
        }}
        aria-label="Final call to action"
      >

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26A3D]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F26A3D]/10 rounded-full blur-[120px] pointer-events-none" />


        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center flex justify-center">

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
          >

            {/* =====================================================
                GET STARTED
                ONLY THIS PART IS CHANGED
            ===================================================== */}

            <m.div
  variants={fadeUpVariant}
  className="mb-4 -translate-y-5 -translate-x-2"
>
              <span
                className="inline-flex items-center justify-center gap-2 w-[160px] h-[52px] rounded-full text-base font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20"
              >
                <span className="w-2 h-2 rounded-full bg-white" />

                Get Started
              </span>
            </m.div>


            <m.h2
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 mt-2"
            >
              Let's Transform Your Home
            </m.h2>


            <m.p
  variants={fadeUpVariant}
  className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed text-center translate-x-2"
>
  Ready to give your space a premium makeover?
  Get in touch with our experts today for a free
  site visit and itemised quotation.
</m.p>


            {/* =====================================================
                YOUR ORIGINAL BUTTON CODE — UNCHANGED
            ===================================================== */}

            <m.div
              variants={fadeUpVariant}
              className="relative top-[30px] translate-x-0 sm:-translate-x-7 flex flex-col sm:flex-row justify-center items-center gap-5 w-full mt-8 px-4 sm:px-0"
            >

              <a
                href="/contact"
                className="w-full sm:w-auto max-w-xs min-w-[220px] inline-flex justify-center items-center px-9 py-4 bg-[#F26A3D] hover:bg-[#d4572f] text-white font-bold text-base md:text-lg rounded-full transition-all duration-300 shadow-lg hover:scale-105"
              >
                Book Free Site Visit
              </a>


              <a
                href="/contact"
                className="w-full sm:w-auto max-w-xs min-w-[180px] inline-flex justify-center items-center px-9 py-4 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold text-base md:text-lg rounded-full transition-all duration-300 hover:bg-white/10"
              >
                <span className="text-white">
                  Contact Us
                </span>
              </a>

            </m.div>

          </m.div>

        </div>

      </section>


      {/* =========================================================
          GAP BETWEEN CTA AND FOOTER
      ========================================================= */}

      <div className="h-24 bg-[#F5F2EE]" aria-hidden="true" />

    </div>
  );
}