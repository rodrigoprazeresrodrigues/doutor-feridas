/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary:   "#1E88C9",
        secondary: "#062C52",
        accent:    "#58B9B7",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body:    ["Plus Jakarta Sans", "sans-serif"],
        inter:   ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1.5rem",
        xl:      "2rem",
        "2xl":   "3rem",
        "4xl":   "2rem",
      },
      animation: {
        float:   "floating 3s ease-in-out infinite",
        blob:    "blob 7s infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        blob: {
          "0%":   { transform: "translate(0px, 0px) scale(1)" },
          "33%":  { transform: "translate(30px, -50px) scale(1.1)" },
          "66%":  { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
