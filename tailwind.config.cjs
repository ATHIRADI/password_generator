/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    extend: {
      colors: {
        "color-grey": "#D9D9D9",
        "color-black": "#000000",
        "color-white": "#FFFFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
