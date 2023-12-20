/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transitionDelay: {
      '0':'0ms',
      '1000': '1000ms',
      '3000': '3000ms',
    },
    transitionDuration: {
      '0':'0ms',
      '169':'169ms',
      '1000': '1000ms',
      '3000': '3000ms'
    },
    fontFamily: {
      'sans-serif' : ["Oswald", "sans-serif"],
      'display' : ["Assistant", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

