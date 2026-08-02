import { useMemo, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';

const cityFilters = ['ALL', 'Bangalore', 'Chennai', 'Hyderabad', 'Mysore', 'Coimbatore', 'Kochi', 'Trivandrum'];

const testimonials = [
  {
    name: 'Priya Nair',
    city: 'Bangalore',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    quote:
      'The team did a fantastic job with our apartment interiors. They were punctual, transparent, and the finish looked premium from start to finish.',
  },
  {
    name: 'Arun Kumar',
    city: 'Chennai',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote:
      'We needed a quick refresh for our office and they handled it beautifully. The communication was smooth and the final result was exactly what we wanted.',
  },
  {
    name: 'Sana Begum',
    city: 'Hyderabad',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
    quote:
      'The crew was highly professional and the colour consultation helped us choose the perfect palette. Our home feels brighter and more polished.',
  },
  {
    name: 'Nithin Rao',
    city: 'Mysore',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote:
      'From the site visit to handover, everything was organised and neat. The wall textures and finish quality exceeded our expectations.',
  },
  {
    name: 'Anjali Menon',
    city: 'Coimbatore',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote:
      'Their workmanship felt premium and the project was completed on time. We appreciated the attention to detail and the respectful team.',
  },
  {
    name: 'Vijay Selvan',
    city: 'Kochi',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
    quote:
      'We were impressed by how clean and careful the painters were. The final finish across our villa gave it a fresh and luxurious feel.',
  },
  {
    name: 'Meera Joseph',
    city: 'Trivandrum',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    quote:
      'The attention to detail was outstanding, especially with the woodwork and trim. The team made the entire process stress-free and smooth.',
  },
  {
    name: 'Rahul Iyer',
    city: 'Bangalore',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote:
      'We hired them for our complete home repaint and the transformation was amazing. The finish quality and professionalism stood out the most.',
  },
];

function GoogleRatingMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <g fill="none" fillRule="evenodd">
        <path d="M21.784 12.075c.03-.242.046-.486.046-.733A10.735 10.735 0 0 0 11.1 1.487 10.73 10.73 0 0 0 1.42 11.42a10.721 10.721 0 0 0 18.364 7.06 10.72 10.72 0 0 1-4.12-6.405Z" fill="#34A853"/>
        <path d="M3.665 12.105a8.6 8.6 0 0 1 0-1.8L6.59 9.3a5.088 5.088 0 0 0-.359 1.802 5.106 5.106 0 0 0 5.11 5.105c1.42 0 2.715-.573 3.643-1.51l2.89 2.204a8.64 8.64 0 0 1-6.533 3.2A8.745 8.745 0 0 1 3.665 12.105Z" fill="#FBBC05"/>
        <path d="M11.05 15.35a5.052 5.052 0 0 1-5.01-4.157l-2.93 2.264A8.601 8.601 0 0 0 11.05 20.13a8.5 8.5 0 0 0 5.86-2.13L14.05 15.8a5.08 5.08 0 0 1-3 1.35Z" fill="#EA4335"/>
        <path d="M11.05 3.865A8.64 8.64 0 0 1 18.7 7.92l-2.92 2.27a5.086 5.086 0 0 0-5.78-2.512L11.05 3.865Z" fill="#4285F4"/>
      </g>
    </svg>
  );
}

function StarRating({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <div className="flex items-center gap-1 text-[var(--color-accent)]" aria-label="5 out of 5 rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.6l2.45 5.05 5.55.81-4.02 3.92 1 5.53L10 0 5.02 17.91l1-5.53L2 7.46l5.55-.81L10 1.6Z" />
        </svg>
      ))}
    </div>
  );
}

export default function WhatPeopleSaySection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCity, setActiveCity] = useState('ALL');

  const filteredTestimonials = useMemo(() => {
    if (activeCity === 'ALL') return testimonials;
    return testimonials.filter((testimonial) => testimonial.city === activeCity);
  }, [activeCity]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mt-[140px] mb-[120px] bg-[var(--color-background)] pt-[90px] pb-[180px] sm:pt-[100px] sm:pb-[180px] lg:pt-[100px] lg:pb-[180px]">
      <div className="mx-auto w-full max-w-[1280px] px-8" style={{ margin: '0 auto', paddingLeft: '32px', paddingRight: '32px' }}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
          className="mx-auto w-full"
        >
          <div className="mb-[40px] flex items-center justify-between gap-6">
            <div className="flex items-end gap-2 sm:gap-3">
              <h2 className="text-[2.3rem] font-medium leading-[0.95] tracking-[-0.06em] text-[var(--color-primary)] sm:text-[2.7rem] lg:text-[4rem]">
                What
              </h2>
              <h2 className="text-[2.3rem] font-extrabold leading-[0.95] tracking-[-0.06em] text-[var(--color-primary)] sm:text-[2.7rem] lg:text-[4rem]">
                People Say
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-[rgba(16,42,67,0.12)] bg-white/70 px-4 py-2 shadow-[0_8px_20px_rgba(16,42,67,0.06)] backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <GoogleRatingMark />
              </div>
              <div className="flex items-center gap-1 text-[var(--color-primary)]">
                <StarRating className="h-4 w-4" />
              </div>
              <div className="text-[var(--color-primary)]">
                <span className="text-base font-semibold sm:text-lg">4.8 / 5</span>
              </div>
            </div>
          </div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut', delay: 0.08 }}
            className="mb-[40px]"
          >
            <div className="mx-auto flex w-full max-w-[900px] justify-center gap-3 overflow-x-auto pb-2 whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {cityFilters.map((city) => {
                const isActive = city === activeCity;

                return (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setActiveCity(city)}
                    className={[
                      'rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ease-out sm:text-base',
                      isActive
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[0_10px_22px_rgba(231,104,75,0.26)]'
                        : 'border-[#D7DCE2] bg-white text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
                    ].join(' ')}
                  >
                    {city}
                  </button>
                );
              })}
            </div>
          </m.div>

          <div className="mx-auto mt-[40px] grid max-w-[1280px] gap-6 md:grid-cols-2 xl:grid-cols-4 xl:justify-items-center">
            {filteredTestimonials.map((testimonial, index) => (
              <m.article
                key={`${testimonial.name}-${testimonial.city}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={sectionVariants}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  ease: 'easeOut',
                  delay: index * 0.08,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                className="group flex h-full w-full max-w-[310px] flex-col rounded-[18px] border border-[rgba(16,42,67,0.08)] bg-white p-6 shadow-[0_10px_28px_rgba(16,42,67,0.07)] transition-all duration-300 ease-out hover:shadow-[0_18px_36px_rgba(16,42,67,0.12)] xl:max-w-[290px]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-[rgba(231,104,75,0.18)]"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-primary)]">{testimonial.name}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{testimonial.city}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <StarRating className="h-4 w-4" />
                </div>

                <p className="flex-1 text-[0.96rem] leading-7 text-[var(--color-text)]">{testimonial.quote}</p>

                <div className="mt-5 flex items-center justify-between border-t border-[rgba(16,42,67,0.08)] pt-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F5F9]">
                      <GoogleRatingMark />
                    </span>
                    Google review
                  </div>
                </div>
              </m.article>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
