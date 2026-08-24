/**
 * ColourIdeasCta.tsx
 *
 * Premium CTA section at the bottom of the Colour Ideas page.
 * "Need Help Choosing Colours?" with three action buttons.
 */

import { m } from 'framer-motion';
import { Calendar, Phone, FileText } from 'lucide-react';

const actions = [
  { label: 'Book Free Site Visit', icon: Calendar, href: '/contact' },
  { label: 'Talk to Colour Expert', icon: Phone, href: 'tel:08023391256' },
  { label: 'Get Free Quote', icon: FileText, href: '/contact' },
];

export default function ColourIdeasCta() {
  return (
    <section className="relative max-sm:top-0 sm:-top-8 w-full max-sm:mt-0 max-sm:pt-6 -mt-20 sm:-mt-28 pb-8 max-sm:pb-16 max-sm:mb-6">
      <div className="container mx-auto px-4">
        <div className="relative w-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] px-4 sm:px-6 py-10 sm:py-12 rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2745] via-[#17375E] to-[#0F2745]" />

          {/* Decorative blurs */}
          <div className="absolute top-[-80px] right-[-60px] w-[380px] h-[380px] rounded-full bg-[#F47C20]/20 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[-40px] w-[300px] h-[300px] rounded-full bg-[#4A90D9]/15 blur-[100px] pointer-events-none" />

          <div className="relative text-center px-2 sm:px-4 translate-y-12">
            {/* Eyebrow */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center gap-2 min-w-[190px] px-8 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6 sm:mb-8 relative -translate-y-20"
            >
              <div className="w-2 h-2 rounded-full bg-[#F47C20]" />

              <span className="text-white/80 text-[13px] font-semibold tracking-[0.15em] uppercase">
                Expert Guidance
              </span>
            </m.div>

            {/* Heading */}
            <m.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-[2.8rem] md:text-[3.2rem] font-[800] text-white leading-tight mb-10 sm:mb-12 relative -translate-y-17"
            >
              Need Help Choosing Colours?
            </m.h2>

            {/* Action buttons */}
            {/* Action buttons */}
<m.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex flex-col items-center gap-4 w-full -translate-y-8"
>
  {/* First row */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full -translate-y-3">
    {actions.slice(0, 2).map((action, idx) => {
      const Icon = action.icon;

      return (
        <a
          key={action.label}
          href={action.href}
          className={`inline-flex items-center justify-center gap-3
            w-full sm:w-[250px]
            h-[60px]
            px-8
            rounded-full
            text-[17px]
            font-[600]
            transition-all duration-300
            ${
              idx === 0
                ? 'bg-gradient-to-r from-[#F47C20] to-[#E7684B] text-white shadow-[0_8px_24px_rgba(244,124,32,0.35)] hover:scale-[1.04]'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:scale-[1.04]'
            }
          `}
        >
          <Icon className="w-6 h-6 shrink-0" />
          <span>{action.label}</span>
        </a>
      );
    })}
  </div>

  {/* Second row */}
  <div className="flex justify-center w-full -translate-y-3">
    {(() => {
      const action = actions[2];
      const Icon = action.icon;

      return (
        <a
          href={action.href}
          className="inline-flex items-center justify-center gap-3
            w-full sm:w-[250px]
            h-[60px]
            px-8
            rounded-full
            text-[17px]
            font-[600]
            bg-white/10
            backdrop-blur-md
            text-white
            border border-white/20
            hover:bg-white/20
            hover:scale-[1.04]
            transition-all duration-300"
        >
          <Icon className="w-6 h-6 shrink-0" />
          <span>{action.label}</span>
        </a>
      );
    })()}
  </div>
</m.div>
          </div>

        </div>
      </div>
    </section>
  );
}
