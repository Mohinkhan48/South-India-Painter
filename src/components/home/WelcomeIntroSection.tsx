import { m } from 'framer-motion';
import { Award, ShieldCheck, Users, Sparkles } from 'lucide-react';

export default function WelcomeIntroSection() {
  return (
    <section className="w-full py-12 bg-[#FAF8F4] border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[380px] rounded-[32px] bg-white px-8 sm:px-16 py-10 sm:py-14 shadow-[0_12px_40px_rgba(16,42,67,0.06)] border border-gray-100 overflow-hidden"
        >
          {/* Accent glow background */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text Content (shifted 40px right away from left card border) */}
            <div
  className="lg:col-span-7 space-y-6 pr-4"
  style={{ paddingLeft: '40px' }}
>
              <div>
                <span className="inline-block rounded-full bg-[rgba(231,104,75,0.12)] px-5 py-2 text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                  Welcome to South India Painters
                </span>
                <h2
  className="text-2xl sm:text-3.5xl font-[800] text-[var(--color-primary)] leading-[1.8]"
  style={{ transform: 'translateY(12px)' }}
>
  27+ Years of Direct Painting Expertise & Trusted Quality
</h2>
              </div>

              <div
  className="space-y-6 text-gray-600 text-base sm:text-lg leading-[2.2]"
  style={{ transform: 'translateY(12px)' }}
>
                <p>
                  Welcome to South India Painters, we are experts in Repaint and Fresh Paint for Residential Buildings, Commercial Buildings, Apartments, Villas and Bungalows and Indutrial projects, we are in the field of Painting since last 27 years, we have 234+ skilled professional workers, machineries and equipment’s. We don’t outsource or give contracts, we personally handle all our projects by ourselves.
                </p>
                <p className="font-semibold text-[#102A43] pt-1">
                  Our preference is Asian Paints that is painting India since 80+ years, a Quality that is Trusted by most of the Clients.
                </p>
              </div>
            </div>

            {/* Right Column: 2x2 Metric Cards Grid (padded right) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 px-4 sm:pr-10 sm:pl-4">
              {/* Card 1: Years Experience */}
              <div className="rounded-2xl bg-[#FAF8F4] border border-gray-100 flex flex-col items-center lg:items-start justify-between hover:border-[var(--color-accent)]/30 transition-colors"
style={{ padding: '20px 28px' }}>
                <div
                  className="w-10 h-10 rounded-xl bg-[rgba(231,104,75,0.12)] flex items-center justify-center mb-3 lg:translate-x-[80px]"
                >
                  <Award className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div className="flex flex-col items-center lg:items-start lg:translate-x-[80px]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]">27+</div>
                  <div className="text-xs font-bold text-gray-500 mt-1 lg:translate-x-[-30px]">Years Experience</div>
                </div>
              </div>

              {/* Card 2: Skilled Workers */}
              <div className="rounded-2xl bg-[#FAF8F4] border border-gray-100 flex flex-col items-center lg:items-start justify-between hover:border-[var(--color-accent)]/30 transition-colors"
style={{ padding: '20px 28px' }}>
                <div
                  className="w-10 h-10 rounded-xl bg-[rgba(231,104,75,0.12)] flex items-center justify-center mb-3 lg:translate-x-[80px]"
                >
                  <Users className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div className="flex flex-col items-center lg:items-start lg:translate-x-[68px]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]">234+</div>
                  <div className="text-xs font-bold text-gray-500 mt-1 lg:translate-x-[-12px]">Skilled Workers</div>
                </div>
              </div>

              {/* Card 3: Direct Execution */}
              <div className="rounded-2xl bg-[#FAF8F4] border border-gray-100 flex flex-col items-center lg:items-start justify-between hover:border-[var(--color-accent)]/30 transition-colors"
style={{ padding: '20px 28px' }}>
                <div
                  className="w-10 h-10 rounded-xl bg-[rgba(231,104,75,0.12)] flex items-center justify-center mb-3 lg:translate-x-[80px]"
                >
                  <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div className="flex flex-col items-center lg:items-start lg:translate-x-[60px]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]">100%</div>
                  <div className="text-xs font-bold text-gray-500 mt-1 lg:translate-x-[-10px]">Direct Execution</div>
                </div>
              </div>

              {/* Card 4: Asian Paints Trust */}
              <div className="rounded-2xl bg-[#FAF8F4] border border-gray-100 flex flex-col items-center lg:items-start justify-between hover:border-[var(--color-accent)]/30 transition-colors"
style={{ padding: '20px 28px' }}>
                <div
                  className="w-10 h-10 rounded-xl bg-[rgba(231,104,75,0.12)] flex items-center justify-center mb-3 lg:translate-x-[80px]"
                >
                  <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div className="flex flex-col items-center lg:items-start lg:translate-x-[45px]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]">80+ Yrs</div>
                  <div className="text-xs font-bold text-gray-500 mt-1">Asian Paints Trust</div>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
