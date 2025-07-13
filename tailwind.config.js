/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // Pages and layouts in /app
    "./components/**/*.{js,ts,jsx,tsx}", // Any custom components
    "./pages/**/*.{js,ts,jsx,tsx}",      // In case you use /pages directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

