var theme = require("./theme.js");

module.exports = {
  purge: [],
  theme: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize,
    colors: theme.colors,
    borderRadius: theme.borderRadius,
    boxShadow: theme.shadows,
    spacing: {
      0: "0px",
      4: "4px",
      8: "8px",
      14: "14px",
      16: "16px",
      40: "40px",
      48: "48px",
      64: "64px",
    },
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
