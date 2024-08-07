/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      fontSize: {
        "4.5xl": "2.625rem",
      },
      colors: {
        headerBg: "#151515",
        bgColor: "#141414",
        white: "#FFFFFF",
        primary2: "#FF8A00",
        grey1: "#D9D5D5",
        black: "#2A2A2A",
        lightBlack: "#474747",
      },
    },
  },
  plugins: [],
};
