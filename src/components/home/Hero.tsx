import { useNavigate } from 'react-router-dom';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import business from '@/config/business';

export default function Hero() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[430px] overflow-hidden bg-[var(--color-background)] sm:min-h-0">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Premium interior living room"
          aria-hidden="true"
          className="h-full w-full object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,42,67,0.72)] via-[rgba(16,42,67,0.48)] to-[rgba(16,42,67,0.18)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,42,67,0.18)] via-transparent to-[rgba(16,42,67,0.36)]" />
      </div>

      <Container className="relative z-10 pt-36 pb-24 sm:py-20 lg:py-0 lg:min-h-[680px] lg:h-[clamp(680px,78vh,820px)]">
        <div className="grid min-h-full items-center gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
          <div className="max-w-[760px]">
            <AnimatePresence>
              <m.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.08,
                }}
                className="space-y-6"
              >
                <h1 className="relative top-[10px] max-w-[760px] text-[clamp(2.35rem,4.4vw,4.5rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white">
                  <span className="block whitespace-nowrap">Transforming Spaces</span>
                  <span className="block whitespace-nowrap text-[var(--color-accent)]">
                    with Premium Finishes
                  </span>
                </h1>

                <p className="max-w-[620px] max-sm:translate-x-1.5 sm:translate-x-3 translate-y-4 text-[17px] leading-[1.85] text-white/88 sm:text-[18px]">
                  27+ years of experience with 234+ skilled professionals. Professional painting for homes & businesses.
                </p>
              </m.div>
            </AnimatePresence>

            <AnimatePresence>
              <m.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="mt-10 translate-y-8 translate-x-2 flex flex-col items-center justify-center gap-4 sm:gap-10 sm:flex-row sm:flex-wrap sm:justify-start sm:items-start w-full"
              >
                <Button
                  size="lg"
                  className="group max-sm:h-[44px] h-[52px] w-full max-sm:max-w-[220px] max-w-[280px] sm:w-auto sm:max-w-none sm:min-w-[200px] rounded-full !bg-[#E7684B] hover:!bg-[#CF5538] px-6 max-sm:text-[13px] text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(231,104,75,0.22)] transition-all duration-200 hover:-translate-y-0.5"
                  rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
                  onClick={() => navigate('/contact')}
                >
                  Get a Free Estimate
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="max-sm:h-[44px] h-[52px] w-full max-sm:max-w-[220px] max-w-[280px] sm:w-auto sm:max-w-none sm:min-w-[200px] rounded-full border border-white/20 bg-white/10 max-sm:text-[13px] text-white shadow-none backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/30 hover:text-white"
                  onClick={() => navigate('/projects')}
                >
                  View Our Projects
                </Button>
              </m.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AnimatePresence>
              <m.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="group w-full max-sm:max-w-[300px] max-w-[390px] rounded-[24px] border border-white/15 bg-[rgba(16,42,67,0.62)] max-sm:p-3 p-4 shadow-[0_20px_55px_rgba(8,31,51,0.24)] backdrop-blur-xl transition-all duration-250 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_65px_rgba(8,31,51,0.32)]"
              >
                <div className="flex max-sm:min-h-[56px] min-h-[72px] items-center gap-4 rounded-[20px] bg-[rgba(255,255,255,0.08)] px-4 max-sm:py-3 py-4">
                  <div className="flex max-sm:h-9 max-sm:w-9 h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-[0_10px_20px_rgba(231,104,75,0.22)]">
                    <Star className="max-sm:h-4 max-sm:w-4 h-5 w-5" />
                  </div>
                  <div>
                    <p className="max-sm:text-[20px] text-[26px] font-bold text-white">{business.heroStats[0].value}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      {business.heroStats[0].label}
                    </p>
                  </div>
                </div>

                <div className="my-3 h-px w-full bg-white/15" />

                <div className="flex max-sm:min-h-[56px] min-h-[72px] items-center gap-4 rounded-[20px] bg-[rgba(255,255,255,0.05)] px-4 max-sm:py-3 py-4">
                  <div className="flex max-sm:h-9 max-sm:w-9 h-12 w-12 items-center justify-center rounded-full bg-[rgba(16,42,67,0.9)] text-white shadow-[0_10px_20px_rgba(0,0,0,0.16)]">
                    <ShieldCheck className="max-sm:h-4 max-sm:w-4 h-5 w-5" />
                  </div>
                  <div>
                    <p className="max-sm:text-[20px] text-[26px] font-bold text-white">{business.heroStats[1].value}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      {business.heroStats[1].label}
                    </p>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
