/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    "./src/pages/**/*.{astro,js,jsx,ts,tsx}",
    "./src/components/**/*.{astro,js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0A0A0A',
        surfaceHover: '#141414',
        
        neon: {
          purple: '#A855F7',
          purpleLight: '#C084FC',
          purpleDark: '#7C3AED',
          cyan: '#22D3EE',
          cyanDark: '#06B6D4',
          pink: '#F472B6',
          pinkDark: '#EC4899',
          orange: '#FB923C',
        },
        
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-purple': 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(circle at center, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
      },
      
      boxShadow: {
        'glow-purple': '0 0 40px rgba(168, 85, 247, 0.3)',
        'glow-purple-sm': '0 0 20px rgba(168, 85, 247, 0.2)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.3)',
        'glow-cyan-sm': '0 0 20px rgba(34, 211, 238, 0.2)',
        'glow-pink': '0 0 40px rgba(244, 114, 182, 0.3)',
      },
      
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};