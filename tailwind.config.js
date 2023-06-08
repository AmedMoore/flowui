const { zinc } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basic: zinc,
        primary: {
          1: "#6989F5",
          2: "#5378F4",
          3: "#3B66F2",
        },
        secondary: {
          1: "#F4F7FE",
          2: "#EAEEFE",
          3: "#010715",
          "dark-2": "#27304f",
        },
        success: {
          1: "#E8F7F1",
          2: "#0DAD67",
        },
        warn: {
          1: "#FFEED9",
          2: "#FFDBAE",
          3: "#F5AE53",
          4: "#B37320",
        },
        error: {
          1: "#FFE7EE",
          2: "#EC658E",
        },
      },
    },
  },
};
