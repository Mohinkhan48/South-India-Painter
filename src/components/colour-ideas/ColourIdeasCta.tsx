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
    <section className="relative -top-8 w-full -mt-20 sm:-mt-28 pb-8">
      <div className="container mx-auto px-4">
        <div className="relative w-full py-[80px] sm:py-[100px] rounded-[32px] overflow-hidden shadow-2xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2745] via-[#17375E] to-[#0F2745]" />

          {/* Decorative blurs */}
          <div className="absolute top-[-80px] right-[-60px] w-[380px] h-[380px] rounded-full bg-[#F47C20]/20 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[-40px] w-[300px] h-[300px] rounded-full bg-[#4A90D9]/15 blur-[100px] pointer-events-none" />

          <div className="relative text-center px-4">
        {/* Eyebrow */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-8"
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
          className="text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] font-[800] text-white leading-tight mb-10"
        >
          Need Help Choosing Colours?
        </m.h2>

        {/* Action buttons */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {actions.map((action, idx) => {
            const Icon = action.icon;
            const isPrimary = idx === 0;
            return (
              <a
                key={action.label}
                href={action.href}
                className={`
                  inline-flex items-center gap-3 px-8 py-4 rounded-full text-[1rem] font-[600] transition-all duration-300
                  ${isPrimary
                    ? 'bg-gradient-to-r from-[#F47C20] to-[#E7684B] text-white shadow-[0_8px_24px_rgba(244,124,32,0.35)] hover:shadow-[0_12px_32px_rgba(244,124,32,0.5)] hover:scale-[1.04]'
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:scale-[1.04]'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {action.label}
              </a>
            );
          })}
        </m.div>
      </div>
    </div>
  </div>
</section>
  );
}
