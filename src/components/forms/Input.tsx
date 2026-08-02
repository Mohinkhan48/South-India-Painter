import * as React from 'react';
import { cn } from '@/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-[var(--radius-md)] border bg-[var(--color-white)] px-3 py-2 text-[15px]',
          'transition-colors duration-200',
          'placeholder:text-[var(--color-text-muted)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error
            ? 'border-[var(--color-accent)] focus-visible:border-[var(--color-accent)] focus-visible:ring-[var(--color-accent)]/20'
            : 'border-[var(--color-border)] focus-visible:border-[var(--color-primary)] focus-visible:ring-[var(--color-primary)]',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
