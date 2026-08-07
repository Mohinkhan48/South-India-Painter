import { useCallback, useEffect, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const cityFilters = ['ALL', 'Bangalore', 'Chennai', 'Hyderabad', 'Mysore', 'Coimbatore', 'Kochi', 'Trivandrum'];

const testimonials = [
  {
    name: 'Priya Nair',
    city: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    quote:
      'The team did a fantastic job with our apartment interiors. They were punctual, transparent, and the finish looked premium from start to finish. Special shoutout to the project coordinator who gave us proper real time updates and was very helpful in resolving our queries throughout the entire process.',
  },
  {
    name: 'Arun Kumar',
    city: 'Chennai',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote:
      'We needed a quick refresh for our office and they handled it beautifully. The communication was smooth and the final result was exactly what we wanted.',
  },
  {
    name: 'Sana Begum',
    city: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
    quote:
      'The crew was highly professional and the colour consultation helped us choose the perfect palette. Our home feels brighter and more polished.',
  },
  {
    name: 'Nithin Rao',
    city: 'Mysore',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote:
      'From the site visit to handover, everything was organised and neat. The wall textures and finish quality exceeded our expectations.',
  },
  {
    name: 'Anjali Menon',
    city: 'Coimbatore',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote:
      'Their workmanship felt premium and the project was completed on time. We appreciated the attention to detail and the respectful team.',
  },
  {
    name: 'Vijay Selvan',
    city: 'Kochi',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
    quote:
      'We were impressed by how clean and careful the painters were. The final finish across our villa gave it a fresh and luxurious feel.',
  },
  {
    name: 'Meera Joseph',
    city: 'Trivandrum',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    quote:
      'The attention to detail was outstanding, especially with the woodwork and trim. The team made the entire process stress-free and smooth.',
  },
  {
    name: 'Rahul Iyer',
    city: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote:
      'We hired them for our complete home repaint and the transformation was amazing. The finish quality and professionalism stood out the most.',
  },
];

function GoogleRatingMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true">
      <g fill="none" fillRule="evenodd">
        <path d="M21.784 12.075c.03-.242.046-.486.046-.733A10.735 10.735 0 0 0 11.1 1.487 10.73 10.73 0 0 0 1.42 11.42a10.721 10.721 0 0 0 18.364 7.06 10.72 10.72 0 0 1-4.12-6.405Z" fill="#34A853" />
        <path d="M3.665 12.105a8.6 8.6 0 0 1 0-1.8L6.59 9.3a5.088 5.088 0 0 0-.359 1.802 5.106 5.106 0 0 0 5.11 5.105c1.42 0 2.715-.573 3.643-1.51l2.89 2.204a8.64 8.64 0 0 1-6.533 3.2A8.745 8.745 0 0 1 3.665 12.105Z" fill="#FBBC05" />
        <path d="M11.05 15.35a5.052 5.052 0 0 1-5.01-4.157l-2.93 2.264A8.601 8.601 0 0 0 11.05 20.13a8.5 8.5 0 0 0 5.86-2.13L14.05 15.8a5.08 5.08 0 0 1-3 1.35Z" fill="#EA4335" />
        <path d="M11.05 3.865A8.64 8.64 0 0 1 18.7 7.92l-2.92 2.27a5.086 5.086 0 0 0-5.78-2.512L11.05 3.865Z" fill="#4285F4" />
      </g>
    </svg>
  );
}

function StarRating({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <div className="flex items-center gap-0.5 text-[#F5A623]" aria-label="5 out of 5 rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
          <path d="M10 1.6l2.45 5.05 5.55.81-4.02 3.92 1 5.53L10 0 5.02 17.91l1-5.53L2 7.46l5.55-.81L10 1.6Z" />
        </svg>
      ))}
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <m.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.08 }}
      whileTap={disabled ? undefined : { scale: 0.94 }}
      aria-label={direction === 'prev' ? 'Previous testimonials' : 'Next testimonials'}
      className={[
        'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border',
        'border-[#F26A4B]/50 bg-white text-[#F26A4B]',
        'transition-colors duration-300 ease-out hover:border-[#F26A4B] hover:bg-[#F26A4B] hover:text-white',
        'disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white disabled:hover:text-[#F26A4B]',
      ].join(' ')}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4}>
        {direction === 'prev' ? (
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </m.button>
  );
}

export default function WhatPeopleSaySection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCity, setActiveCity] = useState('ALL');

  const filteredTestimonials =
    activeCity === 'ALL' ? testimonials : testimonials.filter((t) => t.city === activeCity);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
      containScroll: 'trimSnaps',
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, filteredTestimonials.length]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleResize = () => emblaApi.reInit();
    window.addEventListener('resize', handleResize);

    const images = Array.from(document.querySelectorAll('[data-testimonial-avatar]'));
    let pending = images.length;
    if (pending === 0) return () => window.removeEventListener('resize', handleResize);

    const onImgDone = () => {
      pending -= 1;
      if (pending <= 0) emblaApi.reInit();
    };

    images.forEach((img) => {
      const el = img as HTMLImageElement;
      if (el.complete) {
        onImgDone();
      } else {
        el.addEventListener('load', onImgDone, { once: true });
        el.addEventListener('error', onImgDone, { once: true });
      }
    });

    return () => window.removeEventListener('resize', handleResize);
  }, [emblaApi, filteredTestimonials]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="flex w-full justify-center bg-[var(--color-background)]"
      style={{
        paddingTop: 'clamp(20px, 3vw, 40px)',
        paddingBottom: 'clamp(70px, 9vw, 120px)',
      }}
    >
      <div className="w-full px-5 sm:px-8" style={{ maxWidth: 1320 }}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
        >
          {/* ── Heading + Google Rating ── */}
          <div className="mb-10 flex flex-col items-start justify-between gap-8 sm:mb-12 md:flex-row md:items-center lg:mb-14">
            <h2
              className="font-medium leading-[0.98] tracking-[-0.03em] text-[var(--color-primary)]"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              What
              <br />
              <span className="font-extrabold">People Say</span>
            </h2>

            <div className="flex items-center gap-3">
              <GoogleRatingMark />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-[var(--color-primary)] sm:text-xl">
                  4.8 / 5 Rating
                </span>
                <StarRating className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>

          {/* ── Filter Pills + Arrows ── */}
          <div className="mb-8 flex items-center gap-3 sm:mb-10">
            <ArrowButton direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />

            <div className="flex flex-1 justify-center gap-3 overflow-x-auto whitespace-nowrap py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {cityFilters.map((city) => {
                const isActive = city === activeCity;
                return (
                  <m.button
                    key={city}
                    type="button"
                    onClick={() => setActiveCity(city)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={[
                      'shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ease-out sm:text-base',
                      isActive
                        ? 'border-[#F26A4B] bg-white text-[#F26A4B]'
                        : 'border-[rgba(16,42,67,0.12)] bg-white text-[var(--color-primary)] hover:border-[#F26A4B] hover:text-[#F26A4B]',
                    ].join(' ')}
                  >
                    {city}
                  </m.button>
                );
              })}
            </div>

            <ArrowButton direction="next" onClick={scrollNext} disabled={!canScrollNext} />
          </div>

          {/* ── Carousel ── */}
          <div className="min-w-0 overflow-hidden" ref={emblaRef}>
            <div
              className="flex items-start"
              style={{ marginLeft: 'clamp(-16px, -1.8vw, -24px)' }}
            >
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={`${testimonial.name}-${testimonial.city}`}
                  className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 xl:basis-1/4"
                  style={{ paddingLeft: 'clamp(16px, 1.8vw, 24px)' }}
                >
                  <m.article
                    whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="flex flex-col bg-white"
                    style={{
                      padding: 28,
                      borderRadius: 18,
                      boxShadow: '0 12px 40px rgba(0,0,0,.08)',
                      minHeight: 280,
                    }}
                  >
                    {/* Header */}
                    <div className="mb-4 flex items-center gap-3">
                      <img
                        data-testimonial-avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="h-14 w-14 shrink-0 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-bold leading-tight text-[var(--color-primary)]">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{testimonial.city}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <StarRating className="h-5 w-5" />
                    </div>

                    {/* Review text — natural height, no forced empty space */}
                    <p className="text-[0.95rem] leading-6 text-[var(--color-text)]">{testimonial.quote}</p>

                    {/* Footer — pinned to bottom via margin-top: auto */}
                    <div
                      className="flex items-center gap-2 border-t border-[rgba(16,42,67,0.08)] text-sm font-medium text-[var(--color-primary)]"
                      style={{ marginTop: 'auto', paddingTop: 14 }}
                    >
                      <GoogleRatingMark />
                      Google Review
                    </div>
                  </m.article>
                </div>
              ))}
            </div>
          </div>

          {/* ── Pagination Dots ── */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={[
                  'h-2.5 rounded-full transition-all duration-300 ease-out',
                  index === selectedIndex
                    ? 'w-7 bg-[#F26A4B]'
                    : 'w-2.5 bg-[#D7DCE2] hover:bg-[#F26A4B]/50',
                ].join(' ')}
              />
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}