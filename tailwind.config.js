/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#000000',
        'secondary-color': '#007b47',
        'grey-color': '#3d3d3d',
        'gold-color': '#b8860b',
        'green-bg-color': '#057c48',
        'main-bg-color': '#ffffff',
        'grey-bg-color': '#C0C0C0',
      },
      active: {
        'color': '#b8860b',
      }
    },
  },
  plugins: [],
}
