const eslintConfig = require(".");
// Remove the ava checks
eslintConfig.extends.splice(1, 1);

module.exports = eslintConfig;
