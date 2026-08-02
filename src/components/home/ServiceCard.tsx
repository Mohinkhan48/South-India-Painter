import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from './ServicesSection';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group overflow-hidden rounded-[24px] border border-[rgba(16,42,67,0.08)] bg-white shadow-[0_14px_36px_rgba(16,42,67,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,42,67,0.14)]"
    >
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-[0] min-h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:min-h-[260px]"
          style={{ aspectRatio: '16 / 10' }}
        />
      </div>

      <div className="space-y-4 p-6 sm:p-7">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(231,104,75,0.1)] text-[var(--color-accent)]">{service.number}</span>
          <span className="text-[11px] tracking-[0.32em] text-[var(--color-accent)]">Service</span>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{service.title}</h3>
          <p className="text-sm leading-7 text-[var(--color-text-muted)]">{service.description}</p>
        </div>

        <Link
          to={service.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-all duration-200 hover:translate-x-0.5"
        >
          <span>Explore Service</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </m.article>
  );
}
