import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'cyan' | 'magenta' | 'lime' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap';

    const sizeStyles = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    };

    const variantStyles = {
      default: 'bg-surface-secondary text-text-primary',
      cyan: 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/50',
      magenta: 'bg-accent-magenta/20 text-accent-magenta border border-accent-magenta/50',
      lime: 'bg-accent-lime/20 text-accent-lime border border-accent-lime/50',
      success: 'bg-green-500/20 text-green-400 border border-green-500/50',
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
