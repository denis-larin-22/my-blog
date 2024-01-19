const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
      screens: {
        '2xl': '1256px'
      },
    },
    extend: {
      colors: {
        'black-light': '#3B3C4A',
        'black': '#181A2A',
        'blue': '#4B6BFB',
        'gray-text': '#97989F',
        'gray-light': '#ceced3c5',
        // dark mode
        'dark-high': '#141624',
        'dark': '#181A2A',
        'dark-light': '#242535',
        'white-matte': '#f2f3f4',
      },
      boxShadow: {
        'item': '0px 12px 24px -6px rgba(24, 26, 42, 0.12)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

