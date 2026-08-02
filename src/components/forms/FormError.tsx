import * as React from 'react';
import { cn } from '@/utils';
import { AlertCircle } from 'lucide-react';

export interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ className, children, ...props }, ref) => {
    if (!children) return null;

    return (
      <p
        ref={ref}
        className={cn(
          'mt-1.5 flex items-center text-[13px] font-medium text-[var(--color-accent)]',
          className
        )}
        {...props}
      >
        <AlertCircle className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
        {children}
      </p>
    );
  }
);

FormError.displayName = 'FormError';

export default FormError;
