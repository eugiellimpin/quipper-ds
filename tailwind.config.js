var theme = require("./theme.js");

module.exports = {
  purge: [],
  theme: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize,
    colors: theme.colors,
    borderRadius: theme.borderRadius,
    boxShadow: theme.shadows,
    spacing: theme.space,
    transitionProperty: {
      'shadow': 'box-shadow',
      'bg': 'background-color',
    },
    transitionDuration: {
      '200': '200ms',
    }
  },
  variants: {},
  plugins: [],
};
