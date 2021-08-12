const eslintConfig = require(".");
// Remove the ava checks
eslintConfig.extends = eslintConfig.extends.filter(
  (extend) => extend !== "plugin:ava/recommended"
);

module.exports = eslintConfig;
