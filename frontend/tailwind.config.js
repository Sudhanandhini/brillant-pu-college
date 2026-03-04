/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#1a9dbd',
        'brand-dark': '#1a2e3b',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
