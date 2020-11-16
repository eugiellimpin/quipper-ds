const plugin = require("tailwindcss/plugin");

const baseStyles = plugin(function ({ addBase, config }) {
  addBase({
    ":root": {
      color: config("theme.colors.gray60"),
      fontSize: config("theme.fontSize.14"),
      fontFamily: config("theme.fontFamily.body").join(", "),
    },
  });
});

module.exports = {
  baseStyles,
};
