import * as React from 'react';
import { cn } from '@/utils';
import Container from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerClassName?: string;
  noContainer?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, as: Component = 'section', containerClassName, noContainer, children, ...props },
    ref
  ) => {
    return (
      <Component ref={ref} className={cn('section', className)} {...props}>
        {noContainer ? (
          children
        ) : (
          <Container className={containerClassName}>{children}</Container>
        )}
      </Component>
    );
  }
);

Section.displayName = 'Section';

export default Section;
