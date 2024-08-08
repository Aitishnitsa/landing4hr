/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      fontSize: {
        xxs: "0.688rem",
        "1.5xl": "1.375rem",
        "4.5xl": "2.625rem",
      },
      colors: {
        headerBg: "#151515",
        bgColor: "#141414",
        white: "#FFFFFF",
        primary2: "#FF8A00",
        grey1: "#D9D5D5",
        black: "#000000",
        lightBlack: "#474747",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 10s ease-in-out infinite both",
      },
    },
  },
  plugins: [],
};
