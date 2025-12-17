/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    "./src/pages/**/*.{astro,js,jsx,ts,tsx}",
    "./src/components/**/*.{astro,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Dark-first tech palette
        dark: {
          DEFAULT: '#000000',
          950: '#0a0a0a',
          900: '#0f0f0f',
          800: '#1a1a1a',
          700: '#262626',
        },
        // Primary neutrals and semantic tokens
        primary: {
          50: '#f5f7fb',
          100: '#eef2ff',
          200: '#e0e7ff',
          300: '#c7d2fe',
          400: '#a78bfa',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b0f78',
        },
        accent: {
          blue: '#60a5fa',
          purple: '#7c3aed',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
