/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'military-brown': '#957A5A',
        'military-charcoal': '#4a4a4a',
        'military-orange': '#ff7b00',
        'military-green': '#454E35',
        'military-blue': '#395181',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backdropBlur: {
        xs: '1px',
        custom: '6px'
      },
    },
  },
  plugins: [],
}