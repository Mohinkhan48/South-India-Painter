import * as React from 'react';
import { cn } from '@/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component ref={ref} className={cn('container', className)} {...props}>
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;
