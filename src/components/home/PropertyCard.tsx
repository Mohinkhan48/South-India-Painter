import { m, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { PropertyType } from '@/data/propertyTypes';

interface PropertyCardProps {
  propertyType: PropertyType;
  index: number;
  onBook: (bookingValue: string) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function PropertyCard({ propertyType, index, onBook }: PropertyCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const handleClick = () => {
    if (propertyType.route) {
      navigate(propertyType.route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBook(propertyType.bookingValue);
    }
  };

  return (
    <m.button
      type="button"
      onClick={handleClick}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut', delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[22px] border border-white/10 shadow-[0_24px_60px_rgba(16,42,67,0.16)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_68px_rgba(16,42,67,0.22)] h-[340px]"
    >
      <img
        src={propertyType.image}
        alt={propertyType.imageAlt}
        width="400"
        height="340"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: propertyType.imagePosition || 'center center' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,35,57,0.88)] via-[rgba(9,35,57,0.45)] to-transparent" />

      <div className="relative flex h-full items-end justify-center p-6 sm:p-8">
        <div className="w-full text-center">
          <h3 className="mx-auto text-[20px] font-bold uppercase leading-[1.15] text-white sm:text-[21px] lg:text-[22px]">
            {propertyType.title}
          </h3>
          <div className="mt-3 inline-flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-white">
            <span>Book a Site Visit</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
              →
            </span>
          </div>
        </div>
      </div>
    </m.button>
  );
}

