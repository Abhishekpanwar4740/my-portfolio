/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Essential for the theme toggle we planned
  theme: {
    extend: {},
  },
  plugins: [],
}