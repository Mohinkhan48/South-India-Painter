import { m, useReducedMotion } from 'framer-motion';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@/components/common/Container';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function useAnimatedCounter(target: number) {
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(shouldReduceMotion ? target : 0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setValue(target);
      return;
    }

    let animationFrame = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [shouldReduceMotion, target]);

  return value;
}

export default function ExperienceSection() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const counterValue = useAnimatedCounter(1981);

  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-28">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="relative overflow-hidden rounded-[32px] border border-[rgba(19,43,70,0.08)] bg-[var(--color-primary)] px-5 py-8 shadow-[0_28px_70px_rgba(10,24,38,0.12)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="pointer-events-none absolute left-1/2 top-10 h-32 w-32 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

          <div className="relative mx-auto flex w-full min-h-[380px] lg:min-h-[500px] max-w-[1400px] items-center justify-center">
            {/* Floating background cards — desktop only to avoid mobile overflow */}
            <div className="pointer-events-none absolute inset-0 z-[1] opacity-45 blur-[1px] hidden lg:block">
              <div className="absolute left-[5%] top-[10%] w-[260px]">
                <div className="float-card-1 group relative scale-[0.9] overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <img src="/images/projects/luxury-interior.jpg" alt="Interior painting project" className="h-[220px] w-full object-cover" />
                  <div className="absolute inset-0 bg-[rgba(19,43,70,0.12)]" />
                </div>
              </div>

              <div className="absolute right-[5%] top-[10%] w-[260px]">
                <div className="float-card-2 group relative scale-[0.9] overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <img src="/images/projects/luxury-exterior.jpg" alt="Exterior painting project" className="h-[220px] w-full object-cover" />
                  <div className="absolute inset-0 bg-[rgba(19,43,70,0.12)]" />
                </div>
              </div>

              <div className="absolute left-[2%] top-[38%] w-[240px]">
                <div className="float-card-3 group relative scale-[0.9] overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <img src="/images/projects/wall-texture.jpg" alt="Wall textures project" className="h-[220px] w-full object-cover" />
                  <div className="absolute inset-0 bg-[rgba(19,43,70,0.12)]" />
                </div>
              </div>

              <div className="absolute right-[2%] top-[38%] w-[240px]">
                <div className="float-card-4 group relative scale-[0.9] overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <img src="/images/projects/waterproofing-roof.jpg" alt="Waterproofing project" className="h-[220px] w-full object-cover" />
                  <div className="absolute inset-0 bg-[rgba(19,43,70,0.12)]" />
                </div>
              </div>

              <div className="absolute left-[12%] bottom-[8%] w-[270px]">
                <div className="float-card-5 group relative scale-[0.9] overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <img src="/images/projects/wallpaper-install.jpg" alt="Wallpaper project" className="h-[220px] w-full object-cover" />
                  <div className="absolute inset-0 bg-[rgba(19,43,70,0.12)]" />
                </div>
              </div>

              <div className="absolute right-[12%] bottom-[8%] w-[270px]">
                <div className="float-card-6 group relative scale-[0.9] overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <img src="/images/projects/wood-polish.jpg" alt="Wood finishes project" className="h-[220px] w-full object-cover" />
                  <div className="absolute inset-0 bg-[rgba(19,43,70,0.12)]" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

            <div className="relative z-[20] mx-auto flex w-full max-w-[410px] items-center justify-center px-4 lg:px-12">
              <div className="text-center">
                <m.p
                  variants={revealVariants}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
                  className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
                >
                  OUR EXPERIENCE
                </m.p>

                <m.div
                  variants={revealVariants}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut', delay: 0.1 }}
                  className="mt-[20px] flex items-end justify-center"
                >
                  <span className="text-[4.4rem] font-extrabold leading-none tracking-[-0.07em] text-white sm:text-[5.2rem] lg:text-[5.6rem]">
                    {counterValue.toLocaleString()}
                  </span>
                </m.div>

                <m.div
                  variants={revealVariants}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut', delay: 0.18 }}
                  className="mt-[10px] space-y-0 text-white text-center"
                >
                  <h3 className="text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-[2.5rem] lg:text-[2.8rem] text-center">
                    Happy Customers
                  </h3>
                  <h3 className="text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-[2.5rem] lg:text-[2.8rem] text-center">
                    Across South India
                  </h3>
                </m.div>

                <m.div
  transition={{
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: 'easeOut',
    delay: 0.26,
  }}
  className="relative z-[50] mt-0 flex justify-center w-full"
style={{ marginTop: '20px' }}
>
  <button
    type="button"
    onClick={() => navigate('/projects')}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '9px',
      height: '52px',
      minWidth: '210px',
      padding: '0 26px',
      borderRadius: '9999px',
      border: '1.5px solid rgba(255,255,255,0.45)',
      background: 'rgba(255,255,255,0.08)',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: '0.04em',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 100,
      boxShadow: '0 8px 25px rgba(0,0,0,0.18)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.75)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <span
      style={{
        width: '8px',
        height: '8px',
        minWidth: '8px',
        borderRadius: '50%',
        background: '#FFFFFF',
        display: 'block',
      }}
    />

    <span>
      VIEW OUR PROJECTS
    </span>
  </button>
</m.div>
              </div>
            </div>
          </div>
        </m.div>
      </Container>
    </section>
  );
}