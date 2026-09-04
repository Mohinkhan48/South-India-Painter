import { useCallback, useEffect, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Customer Testimonial 1',
  },
  {
    id: 'aqz-KE-bpKQ',
    title: 'Customer Testimonial 2',
  },
  {
    id: 'ysz5S6PUM-U',
    title: 'Customer Testimonial 3',
  },
  // Added a 4th placeholder so the slider is functional on desktop if it shows 3 at a time
  {
    id: 'LXb3EKWsInQ',
    title: 'Customer Testimonial 4',
  }
];

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
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous videos' : 'Next videos'}
      className={[
        'flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[2px]',
        'border-[#F26A4B] bg-white text-[#F26A4B]',
        'transition-all duration-300 ease-out hover:bg-[#F26A4B] hover:text-white',
        'disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#F26A4B]',
      ].join(' ')}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
        {direction === 'prev' ? (
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function VideoTestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
  className="flex w-full justify-center bg-[#FAF8F4] pt-0 pb-[80px]"
  style={{ marginTop: '-100px' }}
>
      <div className="w-full px-5 flex flex-col items-center" style={{ maxWidth: 1280 }}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="w-full flex flex-col items-center"
        >
          {/* ── Heading ── */}
          <h2 
            className="font-bold text-center text-[#0F2745] mb-[60px]"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.15 }}
          >
            What People Say About Us
          </h2>

          {/* ── Video Slider ── */}
          <div className="w-full relative" style={{ marginTop: 'clamp(16px, 3vw, 32px)' }}>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex" style={{ marginLeft: '-32px' }}>
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3"
                    style={{ paddingLeft: '32px' }}
                  >
                    <m.a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block w-full aspect-video rounded-[20px] overflow-hidden shadow-[0_12px_30px_rgba(15,39,69,0.08)] bg-black transition-transform duration-300 ease-out hover:-translate-y-2"
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    >
                      {/* Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        width="480"
                        height="270"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                        onError={(e) => {
                          // Fallback to hqdefault if maxresdefault is not available
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                      />
                      
                      {/* Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />

                      {/* YouTube Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[72px] h-[52px] bg-black/70 backdrop-blur-sm group-hover:bg-[#FF0000] transition-colors duration-300 rounded-[16px] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.3)]">
                          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white ml-1" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </m.a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Navigation Arrows ── */}
          <div className="mt-[40px] flex items-center justify-center gap-4">
            <ArrowButton direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />
            <ArrowButton direction="next" onClick={scrollNext} disabled={!canScrollNext} />
          </div>
        </m.div>
      </div>
    </section>
  );
}
