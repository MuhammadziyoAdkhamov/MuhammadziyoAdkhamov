import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'accent';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'primary', ...props }, ref) => {
    const baseStyles = 'rounded-lg border backdrop-blur-sm transition-all duration-200';

    const variantStyles = {
      primary: 'bg-surface-primary border-surface-secondary hover:border-accent-cyan',
      secondary: 'bg-surface-secondary border-text-tertiary',
      accent: 'bg-gradient-to-br from-accent-cyan/10 to-accent-magenta/10 border-accent-cyan/30 hover:border-accent-cyan/60',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
