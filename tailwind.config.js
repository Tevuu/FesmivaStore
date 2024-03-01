/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        showBlock: {
          "0%": {
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "80%": {
            opacity: "1",
          },
          "99%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
            display: "none",
          },
        },
      },
      animation: {
        showBlock: "showBlock 4s linear forwards",
      },
    },
  },
  plugins: [],
};
