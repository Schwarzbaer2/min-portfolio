module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ibarra: ['Ibarra Real Nova'],
        publicSans: ['Public Sans'],
      },
      colors: {
        grayBlue: '#33323D',
        grayBlue: '#33323D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}