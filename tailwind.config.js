/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active']
    },
  },
  plugins: [],
}