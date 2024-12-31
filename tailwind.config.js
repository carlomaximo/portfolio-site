/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "oswald": ['Oswald', 'sans-serif'],
        "inter": ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

