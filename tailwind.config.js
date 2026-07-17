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
          50: "#F7F8F3",
          100: "#EAF4ED",
          200: "#DFF3E5",
          300: "#B8DFC5",
          400: "#70B78A",
          500: "#2E8B5E",
          600: "#176B49",
          700: "#0F5132",
          800: "#0B4028",
          900: "#072E1D",
        },

        ink: "#17201C",
        muted: "#667069",
        border: "#DDE5DF",
      },

      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },

      boxShadow: {
        soft: "0 20px 60px rgba(15, 81, 50, 0.10)",
        card: "0 12px 40px rgba(23, 32, 28, 0.08)",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};
