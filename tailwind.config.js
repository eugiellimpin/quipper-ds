var theme = require('./theme.js');

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: theme.fonts.body,
      colors: theme.colors,
      borderRadius: theme.borderRadius,
      boxShadow: theme.shadows
    },
  },
  variants: {},
  plugins: [],
}
