import * as React from 'react';
import { cn } from '@/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  shadow?: 'none' | 'soft' | 'card' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      hover = false,
      shadow = 'soft',
      padding = 'md',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-[var(--color-white)] rounded-[var(--radius-lg)] border border-[var(--color-border)]',
          'transition-all duration-300',
          hover && 'hover:-translate-y-1 hover:shadow-[var(--shadow-card)]',
          shadow === 'soft' && 'shadow-[var(--shadow-soft)]',
          shadow === 'card' && 'shadow-[var(--shadow-card)]',
          shadow === 'elevated' && 'shadow-[var(--shadow-elevated)]',
          shadow === 'none' && 'shadow-none',
          padding === 'sm' && 'p-4 sm:p-5',
          padding === 'md' && 'p-6 sm:p-8',
          padding === 'lg' && 'p-8 sm:p-10',
          padding === 'none' && 'p-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
