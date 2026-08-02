import * as React from 'react';
import { cn } from '@/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'gold';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-3 py-1 font-semibold text-[11px] uppercase tracking-wider',
          variant === 'default' && 'bg-[var(--color-border)] text-[var(--color-text)]',
          variant === 'accent' && 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]',
          variant === 'gold' && 'bg-[var(--color-gold)]/15 text-[#A37B43]', // slightly darker gold for text contrast
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
