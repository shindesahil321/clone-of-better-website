/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#2E86DE',
        },
        gray: {
          700: '#4B5563',
        },
      },
    },
  },
  plugins: [],
}
