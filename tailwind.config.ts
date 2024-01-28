

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
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        "dark": "#232A3C",
        "medium": "#293245",
        "carolina": "#86BBD8",
        "lilac":"#CFADBE",
        "lavender": "#DED4F3",
        primary:{
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        imageBackground:{
         DEFAULT: "var(--imageBackground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
        },
        heading1:{
          DEFAULT: "var(--heading1)",
        },
        navbar:{
          DEFAULT: "var(--navbar)",
          foreground:"var(--navbar-foreground)"
        },
        button:{
          DEFAULT: "var(--button)",
          foreground:"var(--button-foreground)"
        },
        main:{
          DEFAULT: "var(--main)",
        },
      }
    },
  },
  plugins: [],
}

