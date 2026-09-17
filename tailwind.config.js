/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0d0d0d',
          900: '#161513',
          800: '#242220',
        },
        bone: '#f2ecdd',
        mist: '#9c978c',
        ember: '#b5652f',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};
