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
        darkBlue: '#203A4C',
        lightGrey: '#FAFAFA',
        green: '#5FB4A2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
