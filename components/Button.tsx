import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      className = '', 
      variant = 'primary', 
      size = 'md', 
      loading = false,
      disabled,
      children,
      ...props 
    },
    ref
  ) => {
    const baseStyles = 'font-medium transition-all duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const variantStyles = {
      primary: 'bg-accent-cyan text-background hover:opacity-90 shadow-lg hover:shadow-glow-cyan',
      secondary: 'bg-accent-magenta text-background hover:opacity-90 shadow-lg hover:shadow-glow-magenta',
      outline: 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background',
      ghost: 'text-accent-cyan hover:bg-surface-primary',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {loading ? (
          <span className="inline-block animate-spin">⌛</span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
