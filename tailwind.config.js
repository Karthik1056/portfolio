/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#0a0e27',
          900: '#0f1629',
          800: '#1a1f3a',
          700: '#252d4a',
          600: '#2d3a5f',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        accent: '#3b82f6',
        'accent-light': '#60a5fa',
        'accent-glow': 'rgba(59,130,246,0.15)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 5s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease forwards',
        pulse2: 'pulse2 2.5s ease-in-out infinite',
        lineMove: 'lineMove 2.2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.75)' },
        },
        lineMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
}
