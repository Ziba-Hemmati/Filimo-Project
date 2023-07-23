/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      "black-950": "#040404",
      "black-900": "#0d0d0d",
      "black-850": "#151515",
      "black-800": "#1a1a1a",
      "black-750": "#171717",
      "black-700": "#191919",

      "gray-200": "#d8d8d8",
      "gray-300": "#a1a1a1",
      "gray-400": "#959ba2",
      "gray-500": "#606060",

      "orange-300": "#fdc13b",
      "orange-400": "#f6b828",
      "orange-500": "#f89f3e",
      "orange-600": "#ff9800",
      "orange-700": "#f4843f",

      "green-500": "#1cb561",
      "green-800": "#1cb561",
      "green-900": "#0d1912",

      "blue-800": "#123641",
    },
    fontFamily: {
      "iran-sans": "IranSans",
      "iran-sans-medium": "IranSansMedium",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
