var theme = require("./theme.js");

module.exports = {
  purge: [],
  theme: {
    fontFamily: theme.fonts.body,
    colors: theme.colors,
    borderRadius: theme.borderRadius,
    boxShadow: theme.shadows,
    spacing: {
      0: "0px",
      4: "4px",
      8: "8px",
      14: "14px",
      16: "16px",
      48: "48px",
    },
  },
  variants: {},
  plugins: [],
};
