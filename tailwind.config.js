/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
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
          950: '#052e16',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f8f4e6',
          200: '#f1e8cc',
          300: '#e6d5a8',
          400: '#dabf7f',
          500: '#cfab5c',
          600: '#c29243',
          700: '#a27134',
          800: '#855a2f',
          900: '#714b2a',
          950: '#402814',
        },
        saffron: {
          50: '#fff8ed',
          100: '#ffefd5',
          200: '#fedba9',
          300: '#fdc074',
          400: '#fb9c3c',
          500: '#f97e16',
          600: '#ea640c',
          700: '#c24b0b',
          800: '#9a3c12',
          900: '#7c3312',
          950: '#431707',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
