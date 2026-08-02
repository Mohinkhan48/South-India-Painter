import { useRef, useEffect, useCallback, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const services = [
  { id: '01', title: 'Interior Painting', path: '/services/interior-painting', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', imageAlt: 'Premium interior painting in a modern living room' },
  { id: '02', title: 'Exterior Painting', path: '/services/exterior-painting', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', imageAlt: 'Freshly painted residential exterior facade' },
  { id: '03', title: 'Waterproofing', path: '/services/waterproofing', image: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&w=800&q=80', imageAlt: 'Professional waterproofing application on a terrace' },
  { id: '04', title: 'Wall Textures', path: '/services/wall-textures', image: 'https://images.unsplash.com/photo-1602364557801-8908351b0c7e?auto=format&fit=crop&w=800&q=80', imageAlt: 'Decorative wall texture finish in a premium interior' },
  { id: '05', title: 'Wallpaper', path: '/services/wallpaper', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', imageAlt: 'Luxury wallpaper installation in a contemporary room' },
  { id: '06', title: 'Wood & Metal Finishes', path: '/services/wood-finishes', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80', imageAlt: 'Custom wood panel finish with premium lacquer' },
  { id: '07', title: 'Commercial Painting', path: '/services/commercial-painting', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', imageAlt: 'Large-scale commercial interior painting project' },
];

const CARD_W = 300;
const GAP = 20;
const STEP = CARD_W + GAP;

export default function ServiceCarouselSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxIndex = services.length - 1;

  const scrollToIndex = useCallback((idx: number) => {
    if (!trackRef.current) return;
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    setCurrentIndex(clamped);
    trackRef.current.scrollTo({ left: clamped * STEP, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  }, [maxIndex, shouldReduceMotion]);

  const handleScrollEnd = useCallback(() => {
    if (!trackRef.current) return;
    const idx = Math.round(trackRef.current.scrollLeft / STEP);
    setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
  }, [maxIndex]);

  const startAuto = useCallback(() => {
    if (shouldReduceMotion) return;
    autoTimer.current = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        if (trackRef.current) trackRef.current.scrollTo({ left: next * STEP, behavior: 'smooth' });
        return next;
      });
    }, 4500);
  }, [maxIndex, shouldReduceMotion]);

  const stopAuto = useCallback(() => {
    if (autoTimer.current) { clearInterval(autoTimer.current); autoTimer.current = null; }
  }, []);

  const pauseAndResume = useCallback(() => {
    stopAuto();
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(startAuto, 5000);
  }, [stopAuto, startAuto]);

  useEffect(() => {
    startAuto();
    return () => { stopAuto(); if (resumeTimer.current) clearTimeout(resumeTimer.current); };
  }, [startAuto, stopAuto]);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current.scrollLeft;
    pauseAndResume();
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    trackRef.current.scrollLeft = scrollStart.current + (dragStart.current - e.clientX);
  };
  const onMouseUp = () => { if (!isDragging) return; setIsDragging(false); handleScrollEnd(); };
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    dragStart.current = e.touches[0].clientX;
    scrollStart.current = trackRef.current.scrollLeft;
    pauseAndResume();
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    trackRef.current.scrollLeft = scrollStart.current + (dragStart.current - e.touches[0].clientX);
  };

  const goTo = (idx: number) => { scrollToIndex(idx); pauseAndResume(); };

  return (
    <section
      id="services"
      style={{ background: 'var(--color-surface)', padding: '90px 0 30px' }}
    >
      {/* Constrained header — same 1400px grid */}
      <div style={{ width: 'min(1400px, calc(100% - 64px))', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
          <div>
            <m.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: 14 }}
            >
              OUR SERVICES
            </m.p>
            <m.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.08, color: 'var(--color-primary-dark)' }}
            >
              Everything{' '}
              <span style={{ color: 'var(--color-accent)' }}>Your Space Needs.</span>
            </m.h2>
          </div>

          {/* Arrow controls */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="Previous service"
              style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(16,42,67,0.18)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', transition: 'all 0.25s', opacity: currentIndex === 0 ? 0.3 : 1 }}
            >
              <ArrowLeft style={{ width: 16, height: 16 }} />
            </button>
            <button
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex === maxIndex}
              aria-label="Next service"
              style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(16,42,67,0.18)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', transition: 'all 0.25s', opacity: currentIndex === maxIndex ? 0.3 : 1 }}
            >
              <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          width: 'min(1400px, calc(100% - 64px))',
          margin: '0 auto',
        }}
        onMouseEnter={() => stopAuto()}
        onMouseLeave={() => { if (!isDragging) startAuto(); }}
      >
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={handleScrollEnd}
          onScroll={handleScrollEnd}
          style={{
            display: 'flex',
            gap: GAP,
            overflowX: 'auto',
            overflowY: 'visible',
            paddingBottom: 16,
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
            WebkitOverflowScrolling: 'touch',
          } as React.CSSProperties}
        >
          {services.map((service, idx) => (
            <m.div
              key={service.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.08, 0.45), ease: [0.16, 1, 0.3, 1] }}
              style={{ scrollSnapAlign: 'start', flex: `0 0 ${CARD_W}px` }}
              className="carousel-card-wrapper"
            >
              <Link
                to={service.path}
                draggable={false}
                onClick={e => { if (isDragging) e.preventDefault(); }}
                className="group"
                style={{ display: 'block', width: CARD_W, borderRadius: 22, overflow: 'hidden', background: '#fff', border: '1px solid rgba(16,42,67,0.07)', boxShadow: '0 4px 18px rgba(16,42,67,0.06)', textDecoration: 'none', transition: 'transform 0.35s ease, box-shadow 0.35s ease', userSelect: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(16,42,67,0.12)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px rgba(16,42,67,0.06)'; }}
              >
                {/* Image */}
                <div style={{ height: 240, overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    draggable={false}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.55s ease', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ''}
                  />
                </div>
                {/* Card content */}
                <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(16,42,67,0.35)' }}>{service.id}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-primary-dark)', lineHeight: 1.3, margin: 0 }}>{service.title}</h3>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#F5F4F0', border: '1px solid rgba(16,42,67,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4, transition: 'all 0.3s ease' }}>
                    <ArrowUpRight style={{ width: 18, height: 18, color: 'var(--color-primary-dark)' }} />
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
          {/* trailing spacer so last card isn't flush with viewport edge */}
          <div style={{ flexShrink: 0, width: 32 }} aria-hidden />
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28, width: 'min(1400px, calc(100% - 64px))', marginLeft: 'auto', marginRight: 'auto' }}>
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to service ${idx + 1}`}
            style={{ borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0, height: 8, width: idx === currentIndex ? 24 : 8, background: idx === currentIndex ? 'var(--color-accent)' : 'rgba(16,42,67,0.18)', transition: 'all 0.3s' }}
          />
        ))}
      </div>
    </section>
  );
}
