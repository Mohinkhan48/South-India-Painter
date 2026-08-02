import * as React from 'react';
import { cn } from '@/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            'flex h-11 w-full appearance-none rounded-[var(--radius-md)] border bg-[var(--color-white)] px-3 py-2 pr-10 text-[15px]',
            'transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-[var(--color-accent)] focus-visible:border-[var(--color-accent)] focus-visible:ring-[var(--color-accent)]/20'
              : 'border-[var(--color-border)] focus-visible:border-[var(--color-primary)] focus-visible:ring-[var(--color-primary)]',
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]"
          aria-hidden="true"
        />
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
