/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        getvia: {
          50: "#F4FBF5",
          100: "#EAF8EC",
          200: "#CDEFD2",
          300: "#9FE1A8",
          400: "#69C978",
          500: "#25A43A",
          600: "#00851B",
          700: "#006E12",
          800: "#00530D",
          900: "#003A08",
        },

        accent: "#8CE72A",
        ink: "#161616",
        muted: "#6B6B6B",
        border: "#DDDDDD",

        background: "#FFFFFF",
        surface: "#F8FAF8",
      },

      fontFamily: {
        /* Existing classes */
        sans: ["Inter", "sans-serif"],
        serif: ["Fraunces", "serif"],

        /* New semantic font classes */
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },

      boxShadow: {
        soft: "0 20px 60px rgba(0, 110, 18, 0.10)",
        card: "0 12px 40px rgba(22, 22, 22, 0.08)",
        premium: "0 24px 80px rgba(0, 0, 0, 0.08)",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      maxWidth: {
        "8xl": "90rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};
