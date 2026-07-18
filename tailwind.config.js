/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        getvia: {
          50: "#F3FBF4",
          100: "#E8F7EA",
          200: "#CFEFD4",
          300: "#A9E3B2",
          400: "#72CF82",
          500: "#35B64C",
          600: "#07952B",
          700: "#007A1F",
          800: "#006619",
          900: "#004A12",
          950: "#002E0A",
        },

        accent: {
          DEFAULT: "#7CE629",
          soft: "#B7F27D",
        },

        ink: {
          DEFAULT: "#141414",
          soft: "#303430",
        },

        muted: {
          DEFAULT: "#646464",
          light: "#7A807A",
        },

        border: {
          DEFAULT: "#DDE5DE",
          soft: "#E7ECE7",
        },

        background: "#FFFFFF",
        surface: "#F3FBF4",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Fraunces", "serif"],

        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },

      boxShadow: {
        soft: "0 18px 55px rgba(0, 80, 20, 0.06)",
        card: "0 16px 45px rgba(0, 80, 20, 0.07)",
        premium: "0 24px 75px rgba(0, 100, 30, 0.10)",
        floating: "0 28px 70px rgba(0, 100, 30, 0.12)",
        button: "0 14px 35px rgba(0, 100, 30, 0.20)",
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
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      backgroundImage: {
        "getvia-gradient":
          "linear-gradient(135deg, #F3FBF4 0%, #FFFFFF 55%, #E8F7EA 100%)",
        "getvia-green-gradient":
          "linear-gradient(135deg, #007A1F 0%, #006619 100%)",
      },
    },
  },

  plugins: [],
};
