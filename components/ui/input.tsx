import * as React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/38 outline-none transition focus:border-neon-400/40 focus:bg-white/8 focus:ring-2 focus:ring-neon-400/20',
        className
      )}
      {...props}
    />
  );
});
