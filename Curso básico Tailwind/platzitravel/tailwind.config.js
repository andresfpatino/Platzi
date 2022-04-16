module.exports = {
  purge: [],
  darkmode: false, // or 'media' or 'class'
  theme: {
      extend: {
          backgroundImage: {
              'bali' : "url('../img/')",
              'chicago' : "url('../img/')",
              'europe' : "url('../img/')",
              'iceland' : "url('../img/')",
              'la' : "url('../img/')",
              'miami' : "url('../img/')",
              'newYork' : "url('../img/')",
              'norWay' : "url('../img/')",
              'sanFrancisco' : "url('../img/')",
              'sanFrancisco' : "url('../img/')",
              'sanFranciscoDesktop' : "url('../img/')",
              'seattle' : "url('../img/')",
              'switzerland' : "url('../img/')",
              'sydney' : "url('../img/')",
              'yosemite' : "url('../img/')"
          },
          backgroundColor: theme => ({
              ...theme('colors'),
              'primary': '#CC2D4A',
          })
      },
  },
  variants: {
      extend: {},
  },
  content: ['./index.html', './src/**/*.{html,js}'],
  plugins: [],
};