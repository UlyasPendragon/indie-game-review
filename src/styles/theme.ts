export const theme = {
  /*
   * ========================================
   * RETRO THEME STYLING GUIDE
   * ========================================
   * 
   * This is the single source of truth for all styling references.
   * When you need to update colors or any styling property, change it here
   * and it will be reflected throughout the application.
   *
   * HOW TO USE:
   * 1. In Tailwind classes: bg-retro-dark-primary text-retro-neon-blue etc.
   * 2. For components: import { theme } from '@/styles/theme'
   *
   * THEME VARIANTS:
   * - Default: Our retro synthwave theme with dark backgrounds and neon accents
   * - (Future variants can be added here)
   */

  // Color palette
  colors: {
    // Core application colors
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    
    // Retro theme colors
    retro: {
      // Neon accent colors - used for highlights, buttons, and interactive elements
      neon: {
        pink: '#86626e',      // Muted pink
        blue: '#71a2b6',      // Soft blue
        green: '#a8c66c',     // Sage green
        yellow: '#c1ae89',    // Tan/beige
        purple: '#9b8aa0',    // Muted lavender
      },
      // Background dark colors - used for page and container backgrounds
      dark: {
        primary: '#1e1e22',   // Almost black
        secondary: '#2a2a30', // Dark gray
        accent: '#3b3b44',    // Medium gray
      },
      // Glow effects - used for shadows and hover states
      glow: {
        pink: '0 0 10px #86626e, 0 0 20px rgba(134, 98, 110, 0.7), 0 0 30px rgba(134, 98, 110, 0.5)',
        blue: '0 0 10px #71a2b6, 0 0 20px rgba(113, 162, 182, 0.7), 0 0 30px rgba(113, 162, 182, 0.5)',
        green: '0 0 10px #a8c66c, 0 0 20px rgba(168, 198, 108, 0.7), 0 0 30px rgba(168, 198, 108, 0.5)',
        yellow: '0 0 10px #c1ae89, 0 0 20px rgba(193, 174, 137, 0.7), 0 0 30px rgba(193, 174, 137, 0.5)',
        purple: '0 0 10px #9b8aa0, 0 0 20px rgba(155, 138, 160, 0.7), 0 0 30px rgba(155, 138, 160, 0.5)',
      },
    },
  },

  // Typography
  fontFamily: {
    sans: ['var(--font-inter)'], // Base font for body text
    serif: ['Merriweather', 'Georgia', 'serif'], // For specific elements requiring a serif font
    mono: ['var(--font-fira-code)'], // For code blocks and technical content
    retro: ['var(--font-press-start-2p)'], // Pixel font for headings and emphasis
    terminal: ['var(--font-vt323)'], // Terminal-style font for body text in retro theme
  },
  
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
    '8xl': ['6rem', { lineHeight: '1' }],
    '9xl': ['8rem', { lineHeight: '1' }],
  },
  
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Spacing and layout
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  
  // Component styling
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
    // Neon shadow effects for retro theme
    'neon-pink': '0 0 5px #86626e, 0 0 10px #86626e, 0 0 20px rgba(134, 98, 110, 0.5)',
    'neon-blue': '0 0 5px #71a2b6, 0 0 10px #71a2b6, 0 0 20px rgba(113, 162, 182, 0.5)',
    'neon-green': '0 0 5px #a8c66c, 0 0 10px #a8c66c, 0 0 20px rgba(168, 198, 108, 0.5)',
    'neon-yellow': '0 0 5px #c1ae89, 0 0 10px #c1ae89, 0 0 20px rgba(193, 174, 137, 0.5)',
    'neon-purple': '0 0 5px #9b8aa0, 0 0 10px #9b8aa0, 0 0 20px rgba(155, 138, 160, 0.5)',
  },
  
  // Animations and effects
  transitionDuration: {
    DEFAULT: '150ms',
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },
  
  animation: {
    'pixel-transition': 'pixel-transition 0.3s steps(5)',
    glitch: 'glitch 0.3s linear infinite',
    scanline: 'scanline 6s linear infinite',
    flicker: 'flicker 0.15s infinite',
    'rainbow-border': 'rainbow-border 3s linear infinite',
  },
  
  keyframes: {
    'pixel-transition': {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.02)' },
      '100%': { transform: 'scale(1)' },
    },
    glitch: {
      '0%, 100%': { transform: 'translate(0)' },
      '20%': { transform: 'translate(-2px, 2px)' },
      '40%': { transform: 'translate(-2px, -2px)' },
      '60%': { transform: 'translate(2px, 2px)' },
      '80%': { transform: 'translate(2px, -2px)' },
    },
    scanline: {
      '0%': { transform: 'translateY(-100%)' },
      '100%': { transform: 'translateY(100%)' },
    },
    flicker: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.8' },
    },
    'rainbow-border': {
      '0%': { borderColor: '#86626e' },
      '20%': { borderColor: '#71a2b6' },
      '40%': { borderColor: '#a8c66c' },
      '60%': { borderColor: '#c1ae89' },
      '80%': { borderColor: '#9b8aa0' },
      '100%': { borderColor: '#86626e' },
    },
  },
  
  // Backgrounds and textures
  backgroundImage: {
    'pixel-grid':
      'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
    'crt-overlay':
      'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
  },
  
  backgroundSize: {
    'pixel-grid': '20px 20px',
    'crt-overlay': '100% 4px',
  },
  
  /*
   * ========================================
   * COMMON UI PATTERNS
   * ========================================
   * 
   * These are recommended class combinations for common UI elements
   * Use these as references when styling new components
   */
  uiPatterns: {
    // Headers and text elements
    headers: {
      h1: 'font-retro text-4xl text-retro-neon-pink mb-6',
      h2: 'font-retro text-2xl text-retro-neon-pink mb-4',
      h3: 'font-retro text-xl text-retro-neon-pink mb-3',
    },
    bodyText: 'font-terminal text-retro-neon-blue/90',
    link: 'text-retro-neon-blue hover:text-retro-neon-blue/80 transition-colors',
    
    // Containers and cards
    mainContainer: 'bg-retro-dark-primary/90 border border-retro-neon-blue/20 p-6 rounded-lg shadow-lg',
    card: 'bg-retro-dark-primary/90 border border-retro-neon-blue/20 rounded-lg shadow-lg overflow-hidden hover:shadow-neon-blue transition-shadow',
    
    // Buttons
    buttons: {
      primary: 'bg-retro-neon-pink text-white hover:bg-retro-neon-pink/90 font-terminal rounded-md px-4 py-2',
      secondary: 'border-2 border-retro-neon-blue text-retro-neon-blue hover:bg-retro-neon-blue/10 font-terminal rounded-md px-4 py-2',
      ghost: 'text-retro-neon-blue hover:bg-retro-neon-blue/10 font-terminal px-4 py-2',
    },
    
    // Form elements
    form: {
      input: 'bg-retro-dark-secondary border border-retro-neon-blue/30 text-retro-neon-blue/90 font-terminal rounded-md px-4 py-2 focus:border-retro-neon-blue focus:outline-none',
      label: 'font-terminal text-retro-neon-blue/90 mb-2 block',
    }
  }
} as const;

export type Theme = typeof theme;
