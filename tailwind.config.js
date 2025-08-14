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
        primary: {
          light: '#7dd3fc', // azul claro vibrante
          DEFAULT: '#2563eb', // azul principal
          dark: '#1e293b', // azul oscuro
        },
        accent: {
          light: '#fbbf24', // amarillo vibrante
          DEFAULT: '#f59e42', // naranja
          dark: '#ea580c', // naranja oscuro
        },
        highlight: {
          light: '#f472b6', // rosa claro
          DEFAULT: '#db2777', // rosa fuerte
          dark: '#a21caf', // violeta oscuro
        },
        dark: {
          DEFAULT: '#18181b', // fondo principal
          light: '#27272a',
        },
        white: '#fff',
        black: '#000',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
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
