import * as React from 'react';
import { cn } from '@/utils';
import Badge from './Badge';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  as?: 'h1' | 'h2' | 'h3';
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    { className, title, eyebrow, description, align = 'left', as: HeadingComponent = 'h2', ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mb-10 sm:mb-12 flex flex-col',
          align === 'left' && 'items-start text-left',
          align === 'center' && 'items-center text-center',
          align === 'right' && 'items-end text-right',
          className
        )}
        {...props}
      >
        {eyebrow && (
          <Badge variant="accent" className="mb-4">
            {eyebrow}
          </Badge>
        )}
        <HeadingComponent
          className={cn(
            HeadingComponent === 'h1' && 'type-h1',
            HeadingComponent === 'h2' && 'type-h2',
            HeadingComponent === 'h3' && 'type-h3',
            'mb-4 text-[var(--color-primary)]'
          )}
        >
          {title}
        </HeadingComponent>
        {description && (
          <p
            className={cn(
              'type-body-large text-[var(--color-text-muted)] max-w-[600px]',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;
