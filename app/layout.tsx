import type { Metadata } from 'next';
import { Instrument_Serif, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { GrowthShell } from '@/components/growth-shell';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' });
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'DistroKid Growth OS',
  description: 'AI Music Launch OS for cinematic growth campaigns, experimentation, analytics, and marketing automation.',
  metadataBase: new URL('https://distrokids-growth-app.vercel.app')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(spaceGrotesk.variable, instrumentSerif.variable, 'font-sans antialiased')}>
        <GrowthShell>{children}</GrowthShell>
      </body>
    </html>
  );
}
