import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = '', maxWidth = 'lg', ...props }, ref) => {
    const maxWidthStyles = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={`mx-auto px-4 md:px-6 lg:px-8 ${maxWidthStyles[maxWidth]} ${className}`}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';
