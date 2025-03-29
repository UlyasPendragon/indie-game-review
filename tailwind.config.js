const { theme } = require('./src/styles/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeight,
      boxShadow: theme.boxShadow,
      transitionDuration: theme.transitionDuration,
      zIndex: theme.zIndex,
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
}; 