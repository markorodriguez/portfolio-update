/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#222831',
        'secondary': '#30475E',
        'light': '#F05454',
        'c-white': '#DDDDDD'
      }
    },
  },
  plugins: [],
}
