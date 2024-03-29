/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "voilet": "#8590bd",
      "light-voilet": "#a199c6",
      "cream": "#e2eced",
      "dark-blue": "#a3c49b",
      "gray": "#bcb8b1",
      "light-cream": "#f4f3ee",
      "slate-light": "#f1f5f9",
      "slate-dark": "#0f172a"

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
}

