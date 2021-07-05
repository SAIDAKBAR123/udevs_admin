const colors = require("tailwindcss/colors");

const config = {
  primary: {
    light: "rgba(235, 247, 255, 1)",
    DEFAULT: "rgba(64, 148, 247, 1)",
  },
  background: "rgba(220, 233, 249, 1)",
  secondary: "rgba(110, 139, 183, 1)",
  background_2: "rgba(229, 233, 235, 1)",
  dark: "rgba(48, 57, 64, 1)",
  purple: {
    light: "rgba(252, 240, 255, 1)",
    DEFAULT: "rgba(126, 16, 229, 1)",
  },
  teal: {
    light: "rgba(228, 252, 252, 1)",
    DEFAULT: "rgba(13, 150, 118, 1)",
  },
  grey: "rgba(132, 145, 154, 1)",
  white: "rgba(255, 255, 255, 1)",
  success: {
    light: "rgba(235, 255, 241, 1)",
    DEFAULT: "rgba(56, 217, 185, 1)",
  },
  purple: "rgba(196, 121, 243, 1)",
  yellow: "rgba(248, 221, 78, 1)",
  error: {
    light: "rgba(255, 239, 235, 1)",
    DEFAULT: "rgba(247, 102, 89, 1)",
  },
};

const btnHeight = {
  "24px": "24px",
  "32px": "32px",
  "40px": "40px",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      sidebar: "288px",
    },
    buttonHeight: {
      ...btnHeight,
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
