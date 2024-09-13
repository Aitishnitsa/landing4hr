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
        rotate: {
          "0%": { transform: "rotate(-15)" },
          "50%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(15)" },
        },
        vibrate: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
      animation: {
        blink: "blink 10s ease-in-out infinite both",
        rotate: "rotate 1.5s ease-in-out infinite",
        vibrate: "vibrate 3s linear infinite both",
      },
    },
  },
  plugins: [],
};
