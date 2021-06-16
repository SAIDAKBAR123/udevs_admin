module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Inter', 'sans-serif'],
       'body': ['Inter', 'sans-serif'],
    },
    // custom-needed
    color: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'rgba(0, 0, 0, 1)',
      darkgrey: 'rgba(26, 32, 36, 1)',
      white: 'rgba(246, 248, 249, 1)',
      gray: 'rgba(91, 104, 113, 1)',
      indigo: 'blue',
      red: 'rgba(204, 9, 5, 1)',
      yellow: '',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
