const {
  zinc: basic,
  blue: primary,
  fuchsia: secondary,
  green: success,
  amber: warn,
  rose: error,
} = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        basic,
        primary,
        secondary,
        success,
        warn,
        error,
      },
    },
  },
};
