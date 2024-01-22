

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
      keyframes:{
        round:{
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },

      },
      animation:{
          round: "round 20s linear infinite"
      },
      colors:{
        "dark": "#232A3C",
        "medium": "#293245",
        "carolina": "#86BBD8",
        "lilac":"#CFADBE",
        "lavender": "#DED4F3",
        accent: {
          DEFAULT: "var(--accent)",
        },
        heading:{
          DEFAULT: "var(--heading)",
        },
      }
    },
  },
  plugins: [],
}

