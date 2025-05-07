/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 30px rgba(99,102,241,0.6)',
      }
    },
  },
  plugins: [],
}

