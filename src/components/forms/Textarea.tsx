import * as React from 'react';
import { cn } from '@/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[120px] w-full rounded-[var(--radius-md)] border bg-[var(--color-white)] px-3 py-3 text-[15px]',
          'transition-colors duration-200 resize-y',
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

Textarea.displayName = 'Textarea';

export default Textarea;
