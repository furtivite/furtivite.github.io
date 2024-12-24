/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    colors: {
      b: {
        100: '#E6E7E8',
        500: '#5C5F6A',
        600: '#474B57',
        800: '#202533',
        900: '#0E1422',
      },
      w: {
        900: '#FFFFFF',
      },
    },
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
};
