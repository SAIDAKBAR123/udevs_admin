const colors = require("tailwindcss/colors");

const config = {
  primary: "rgba(64, 148, 247, 1)",
  background: "rgba(220, 233, 249, 1)",
  secondary: "rgba(110, 139, 183, 1)",
  background_2: "rgba(229, 233, 235, 1)",
  black: "rgba(48, 57, 64, 1)",
  grey: "rgba(132, 145, 154, 1)",
  white: "rgba(255, 255, 255, 1)",
  success: "rgba(56, 217, 185, 1)",
  purple: "rgba(196, 121, 243, 1)",
  yellow: "rgba(248, 221, 78, 1)",
  error: "rgba(247, 102, 89, 1)",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      sidebar: "288px",
    },
    fontFamily: {
      display: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    // custom-needed
    colors: {
      ...colors,
      ...config,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
