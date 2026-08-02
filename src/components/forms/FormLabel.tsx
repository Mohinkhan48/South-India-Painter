import * as React from 'react';
import { cn } from '@/utils';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'mb-1.5 block text-[14px] font-semibold text-[var(--color-text)]',
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-[var(--color-accent)]" aria-hidden="true">*</span>}
      </label>
    );
  }
);

FormLabel.displayName = 'FormLabel';

export default FormLabel;
