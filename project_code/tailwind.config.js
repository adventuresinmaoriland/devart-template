/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pounamu': {
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
        'earth': {
          50: '#fdf8f0',
          100: '#faefd9',
          200: '#f4dcb0',
          300: '#ecc37d',
          400: '#e3a54a',
          500: '#d98c2a',
          600: '#c47320',
          700: '#a35a1c',
          800: '#84471d',
          900: '#6b3b1a',
          950: '#391d0b',
        },
        'whenua': {
          50: '#faf6f1',
          100: '#f2e8dd',
          200: '#e4d0bb',
          300: '#d3b292',
          400: '#c0906c',
          500: '#b17550',
          600: '#a36245',
          700: '#884f3b',
          800: '#6f4134',
          900: '#5b372d',
          950: '#301c16',
        }
      },
      fontFamily: {
        'maori': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
