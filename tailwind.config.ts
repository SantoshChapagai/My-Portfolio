

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
          round: "round 5s linear infinite"
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
        card:{
         DEFAULT: "var(--card)",
        },
        heading1:{
          DEFAULT: "var(--heading1)",
        },
        heading2:{
          DEFAULT: "var(--heading2)",
        },
        heading3:{
          DEFAULT: "var(--heading3)",
        },
        navbar:{
          DEFAULT: "var(--navbar)",
          foreground:"var(--navbar-foreground)",
        },
        footer:{
         DEFAULT: "var(--footer)",
         foreground:"var(--footer-foreground)"
        },
      }
    },
  },
  plugins: [],
}

