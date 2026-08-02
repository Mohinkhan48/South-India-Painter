import { m, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react';
import Container from '@/components/common/Container';

const showcaseItems = [
  {
    title: 'WALLPAPERS',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Luxury wallpaper feature wall in a modern living room',
  },
  {
    title: 'TEXTURES & DESIGNS',
    image:
      'https://images.unsplash.com/photo-1602364557801-8908351b0c7e?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Luxury textured wall in a designer interior',
  },
  {
    title: 'WOOD FINISHES',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Custom wood panel finish in a premium interior',
  },
  {
    title: 'WATERPROOFING',
    image:
      'https://images.unsplash.com/photo-1634853982486-c06f0e17940f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Waterproof terrace edge with a clean finish',
  },
];

const envIcons = {
  Residential: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Villas: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10L12 3l9 7"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/></svg>,
  HighRise: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
  Commercial: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Offices: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><path d="M9 4v16"/><path d="M15 4v16"/></svg>,
  Hospitality: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  Retail: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  TechParks: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
};

const environmentCategories = [
  { name: 'RESIDENTIAL INTERIORS', icon: envIcons.Residential },
  { name: 'VILLAS & BUNGALOWS', icon: envIcons.Villas },
  { name: 'HIGH-RISE RESIDENTIAL', icon: envIcons.HighRise },
  { name: 'COMMERCIAL SPACES', icon: envIcons.Commercial },
  { name: 'OFFICES', icon: envIcons.Offices },
  { name: 'HOSPITALITY', icon: envIcons.Hospitality },
  { name: 'RETAIL SPACES', icon: envIcons.Retail },
  { name: 'TECH PARKS', icon: envIcons.TechParks },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, clipPath: 'inset(14% 0 14% 0)' },
  visible: { opacity: 1, y: 0, clipPath: 'inset(0% 0 0% 0)' },
};

type TiltState = { x: number; y: number };

function useCardTilt(supportsHover: boolean) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (!supportsHover || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const moveX = (x - 0.5) * 12;
      const moveY = (y - 0.5) * 12;
      setTilt({ x: Number(moveX.toFixed(2)), y: Number(moveY.toFixed(2)) });
    },
    [supportsHover],
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  return {
    cardRef,
    tilt,
    hovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}

type ServiceCardProps = {
  item: (typeof showcaseItems)[number];
  transitionDelay: number;
  aspectClass: string;
  supportsHover: boolean;
};

function ServiceCard({ item, transitionDelay, aspectClass, supportsHover }: ServiceCardProps) {
  const { cardRef, tilt, hovered, handleMouseMove, handleMouseEnter, handleMouseLeave } = useCardTilt(supportsHover);

  return (
    <m.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      variants={cardVariants}
      transition={{ duration: 0.65, ease: 'easeOut', delay: transitionDelay }}
      className={`group relative overflow-hidden rounded-[32px] bg-white transition-shadow duration-[500ms] shadow-[0_16px_36px_rgba(16,42,67,0.08)] ${hovered ? 'shadow-[0_18px_45px_rgba(5,28,48,0.16)]' : ''} ${aspectClass}`}
    >
      <img
        src={item.image}
        alt={item.imageAlt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out`}
        style={{
          transform: hovered
            ? `scale(1.06) translate(${tilt.x}px, ${tilt.y}px)`
            : 'scale(1) translate(0px, 0px)',
        }}
      />
      <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${hovered ? 'from-[rgba(10,14,23,0.92)]' : 'from-[rgba(10,14,23,0.82)]'} to-transparent transition-all duration-[500ms]`} />
      <div className={`absolute inset-0 pointer-events-none ${hovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[700ms]`}>
        <div className={`light-sweep ${hovered ? 'light-sweep-active' : ''}`} />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <span className={`absolute top-0 left-0 h-[1px] bg-[rgba(231,104,75,0.95)] transition-all duration-[700ms] ${hovered ? 'w-full' : 'w-0'}`} />
        <span className={`absolute top-0 right-0 w-[1px] bg-[rgba(231,104,75,0.95)] transition-all duration-[700ms] ${hovered ? 'h-full' : 'h-0'}`} style={{ transitionDelay: hovered ? '150ms' : '0ms' }} />
        <span className={`absolute bottom-0 right-0 h-[1px] bg-[rgba(231,104,75,0.95)] transition-all duration-[700ms] ${hovered ? 'w-full' : 'w-0'}`} style={{ transitionDelay: hovered ? '300ms' : '0ms' }} />
        <span className={`absolute bottom-0 left-0 w-[1px] bg-[rgba(231,104,75,0.95)] transition-all duration-[700ms] ${hovered ? 'h-full' : 'h-0'}`} style={{ transitionDelay: hovered ? '450ms' : '0ms' }} />
      </div>
      <div className="absolute left-[24px] bottom-[22px]">
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition-transform duration-[500ms] ease-out ${hovered ? '-translate-y-[5px]' : 'translate-y-0'}`}
        >
          {item.title}
        </p>
        <p className={`absolute left-0 top-full mt-[4px] text-[11px] uppercase tracking-[0.24em] text-white transition-all duration-[500ms] ease-out ${hovered ? 'opacity-100 -translate-y-[5px]' : 'opacity-0 translate-y-[2px]'}`}>
          EXPLORE &rarr;
        </p>
      </div>
    </m.article>
  );
}

export default function ServiceShowcaseSection() {
  const shouldReduceMotion = useReducedMotion();
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const handleChange = () => setSupportsHover(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="bg-[var(--color-surface)] pt-20 sm:pt-24 lg:pt-28">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          animate="visible"
          variants={sectionVariants}
          className="max-w-3xl space-y-4 mb-20"
        >
          <m.p
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          >
            OUR SPECIALTIES
          </m.p>
          <m.h2
            variants={headingVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut', delay: 0.08 }}
            className="text-4xl font-extrabold leading-[1.03] text-[var(--color-primary-dark)] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.02]"
          >
            Finishes That Define
            <span className="block text-[var(--color-accent)]">Every Space</span>
          </m.h2>
        </m.div>

        <div className="mx-auto w-full max-w-[1200px] grid gap-5 lg:grid-cols-[11fr_9fr] lg:h-[600px]">
          <ServiceCard item={showcaseItems[0]} transitionDelay={0.12} aspectClass="h-[600px] lg:h-full" supportsHover={supportsHover} />

          <div className="grid gap-5">
            <ServiceCard item={showcaseItems[1]} transitionDelay={0.24} aspectClass="h-[360px]" supportsHover={supportsHover} />
            <div className="grid grid-cols-2 gap-5 h-[220px]">
              <ServiceCard item={showcaseItems[2]} transitionDelay={0.18} aspectClass="h-full" supportsHover={supportsHover} />
              <ServiceCard item={showcaseItems[3]} transitionDelay={0.3} aspectClass="h-full" supportsHover={supportsHover} />
            </div>
          </div>
        </div>

        {/* TRUSTED ACROSS SOUTH INDIA SECTION */}
        <div className="mx-auto w-full max-w-[1200px] mt-[80px] flex flex-col items-center text-center pb-[90px]">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[var(--color-accent)] mb-[10px]">
              PROJECT ENVIRONMENTS WE SERVE
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3 className="text-[34px] sm:text-[42px] lg:text-[48px] font-[700] leading-[1.05] text-[var(--color-primary-dark)] mb-[12px] max-w-[600px] mx-auto">
              Trusted Across <br className="sm:hidden" />
              <span className="text-[var(--color-accent)]">South India</span>
            </h3>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            <p className="max-w-[620px] mx-auto text-[16px] text-[var(--color-text-muted)] leading-[1.6] mb-[45px]">
              Quality painting and finishing solutions for homes, businesses and large-scale spaces.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="w-full relative h-[100px] flex items-center overflow-hidden mb-[35px]"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
            }}
          >
            <div 
              className="flex items-center min-w-fit h-full gap-[16px] pr-[16px]"
              style={{
                animation: 'marquee-slide 32s linear infinite',
                animationPlayState: shouldReduceMotion ? 'paused' : 'running',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
              onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = shouldReduceMotion ? 'paused' : 'running'; }}
            >
              {[...environmentCategories, ...environmentCategories, ...environmentCategories, ...environmentCategories].map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <div 
                    key={index} 
                    className="flex-shrink-0 flex items-center h-[64px] px-[28px] rounded-[32px] bg-white border border-[rgba(16,42,67,0.06)] group transition-all duration-300 ease-[ease] hover:-translate-y-[4px] hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(16,42,67,0.08)] whitespace-nowrap cursor-default"
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="text-[var(--color-primary-dark)] opacity-75 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        <Icon />
                      </div>
                      <span className="text-[14px] font-[600] uppercase tracking-[0.7px] text-[var(--color-primary-dark)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mt-[1px]">
                        {cat.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <p className="text-[14px] text-[var(--color-text-muted)] max-w-[650px] mx-auto text-center">
              From residential interiors to commercial spaces, we bring dependable workmanship to every project.
            </p>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
