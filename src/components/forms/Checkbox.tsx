import * as React from 'react';
import { cn } from '@/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    // Generate a unique ID if one isn't provided so the label clicks work
    const checkboxId = id || `checkbox-${generatedId}`;

    return (
      <div className={cn('flex items-start gap-3', className)}>
        <div className="relative mt-0.5 flex items-center justify-center">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            className={cn(
              'peer h-5 w-5 appearance-none rounded border bg-[var(--color-white)]',
              'transition-colors duration-200 cursor-pointer',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'checked:bg-[var(--color-primary)] checked:border-[var(--color-primary)]',
              error
                ? 'border-[var(--color-accent)] focus-visible:border-[var(--color-accent)] focus-visible:ring-[var(--color-accent)]/20'
                : 'border-[var(--color-border)] focus-visible:border-[var(--color-primary)] focus-visible:ring-[var(--color-primary)]'
            )}
            {...props}
          />
          <Check
            className="pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100"
            aria-hidden="true"
          />
        </div>
        <label
          htmlFor={checkboxId}
          className={cn(
            'text-[14px] leading-relaxed cursor-pointer select-none',
            props.disabled ? 'cursor-not-allowed opacity-50' : 'text-[var(--color-text)]',
            error && 'text-[var(--color-accent)]'
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
