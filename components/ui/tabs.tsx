'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function Tabs({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-4', className)} {...props} />;
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('inline-flex rounded-full border border-white/10 bg-white/5 p-1', className)} {...props} />;
}

export function TabsTrigger({ className, active, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      className={cn(
        'rounded-full px-4 py-2 text-sm transition',
        active ? 'bg-white text-slate-950' : 'text-white/70 hover:bg-white/8 hover:text-white',
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props} />;
}
