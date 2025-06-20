/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 This line is CRITICAL
  ],
  darkMode: 'class', // optional: enables dark mode via class
  theme: {
    extend: {},
  },
  plugins: [],
}

