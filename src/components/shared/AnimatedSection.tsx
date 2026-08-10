import { m, type Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedSection({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </m.div>
  );
}
