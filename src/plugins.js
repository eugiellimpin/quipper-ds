const plugin = require("tailwindcss/plugin");

const baseStyles = plugin(function ({ addBase, config }) {
  addBase({
    ":root": {
      fontSize: config("theme.fontSize.14"),
      fontFamily: config("theme.fontFamily.body").join(", "),
    },
  });
});

module.exports = {
  baseStyles,
};
