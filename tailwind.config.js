/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tgmc: {
          navy: "#002B5B",
          dark: "#0F172A",
          blue: "#00A8E8",
          sky: "#0284C7",
          cyan: "#06B6D4",
          light: "#E0F2FE",
          yellow: "#F59E0B",
          gold: "#D97706",
          bg: "#F8FAFC",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif']
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 43, 91, 0.08), 0 4px 12px -4px rgba(0, 168, 232, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(0, 43, 91, 0.15), 0 8px 20px -6px rgba(0, 168, 232, 0.15)',
        'glow': '0 0 20px rgba(0, 168, 232, 0.35)',
      }
    },
  },
  plugins: [],
}
