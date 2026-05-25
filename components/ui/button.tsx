import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline' | 'accent';
  size?: 'sm' | 'default' | 'lg';
  asChild?: boolean;
}

const variants = {
  default: 'bg-white text-slate-950 hover:bg-white/90 shadow-glow',
  ghost: 'bg-transparent text-white hover:bg-white/8',
  outline: 'border border-white/12 bg-white/4 text-white hover:bg-white/8',
  accent: 'bg-gradient-to-r from-neon-400 via-accent-400 to-sunset-500 text-slate-950 hover:opacity-95 shadow-glow'
};

const sizes = {
  sm: 'h-9 rounded-full px-4 text-sm',
  default: 'h-11 rounded-full px-5 text-sm',
  lg: 'h-12 rounded-full px-6 text-base'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'default', size = 'default', asChild = false, children, ...props },
  ref
) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;

    return React.cloneElement(child, {
      className: cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-400/60 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
        child.props.className
      )
    });
  }

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-400/60 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
