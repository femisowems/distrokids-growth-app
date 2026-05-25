import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07111f',
        panel: '#0d1b31',
        line: 'rgba(255,255,255,0.08)',
        text: '#edf2ff',
        muted: 'rgba(237,242,255,0.72)',
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        neon: {
          400: '#7df9ff',
          500: '#4de1ff',
          600: '#00b3ff'
        },
        sunset: {
          400: '#ffb86b',
          500: '#ff7a59',
          600: '#f43f5e'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(125,249,255,0.18), 0 30px 100px rgba(0,0,0,0.45)',
        soft: '0 10px 30px rgba(0,0,0,0.18)'
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(125,249,255,0.12), transparent 40%), radial-gradient(circle at bottom right, rgba(255,122,89,0.18), transparent 35%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
