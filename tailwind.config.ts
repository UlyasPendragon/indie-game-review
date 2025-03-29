import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-dark-primary': '#1a1a1a',
        'retro-dark-secondary': '#2a2a2a',
        'retro-neon-blue': '#00f3ff',
        'retro-neon-pink': '#ff00ff',
        'retro-neon-green': '#00ff00',
        'retro-neon-purple': '#9d00ff',
        'retro-neon-yellow': '#ffff00',
      },
      fontFamily: {
        retro: ['var(--font-press-start-2p)'],
        terminal: ['var(--font-vt323)'],
        mono: ['var(--font-fira-code)'],
      },
      boxShadow: {
        'neon-pink': '0 0 10px rgba(255, 0, 255, 0.5)',
        'neon-blue': '0 0 10px rgba(0, 243, 255, 0.5)',
        'neon-green': '0 0 10px rgba(0, 255, 0, 0.5)',
        'neon-purple': '0 0 10px rgba(157, 0, 255, 0.5)',
        'neon-yellow': '0 0 10px rgba(255, 255, 0, 0.5)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        scan: 'scan 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config; 