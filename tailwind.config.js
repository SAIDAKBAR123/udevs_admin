const config = {
  primary: '#524894',
  warning: '',
  danger: '',
  success: '',
  dark: '',
  info: '',
  loading: ''
}
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      'sidebar': '288px'
    },
    fontFamily: {
      'display': ['Inter', 'sans-serif'],
       'body': ['Inter', 'sans-serif'],
    },
    // custom-needed
    color: {
      primary: {
        light: '',
        DEFAULT: config.primary,
        dark: ''
      },
      transparent: 'transparent',
      current: config.primary,
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
