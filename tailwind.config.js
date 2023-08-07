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
      sm2: "600px",
      md: "768px",
      lg: "1024px",
      lg2: "1100px",
      xl: "1200px",
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
      "black-600": "#282828",
      "black-fade-600": "#282828da",
      "black-500": "#1e1e1e",

      "gray-200": "#d8d8d8",
      "gray-250": "#b3b3b2",
      "gray-300": "#a1a1a1",
      "gray-350": "#4d4d4d",
      "gray-400": "#959ba2",
      "gray-500": "#606060",
      "gray-600": "#383838",
      "gray-700": "#3b3b3b",
      "gray-800": "#828282",

      "orange-300": "#fdc13b",
      "orange-400": "#f6b828",
      "orange-500": "#f89f3e",
      "orange-600": "#ff9800",
      "orange-700": "#f4843f",
      "orange-800": "#e1a928",

      "red-500": "#ff0000",

      "green-500": "#1cb561",
      "green-700": "#17924e",
      "green-800": "#123d25",
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
        "gradient-banner":
          "linear-gradient(90deg,#151515 0%,rgba(21,21,21,0) 10%)",
        "gradient-banner2":
          "linear-gradient(270deg,#151515 15%,rgba(21,21,21,0) 100%)",
        "gradient-banner3":
          "linear-gradient(180deg,#151515 4%,rgba(21,21,21,0) 45%)",
      },
    },
  },
  plugins: [],
};
