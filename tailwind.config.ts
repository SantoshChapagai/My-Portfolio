

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "dark": "#232A3C",
        "medium": "#293245",
        "carolina": "#86BBD8",
        "lilac":"#CFADBE",
        "lavender": "#DED4F3",
      }
    },
  },
  plugins: [],
}

