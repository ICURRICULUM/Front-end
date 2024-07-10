/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0px 2px 8px 0px #00000040",
      },
      backgroundImage: {
        startPage: "url('/assets/startPage/background.svg')",
      },
    },
  },
  plugins: [],
};
