module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:ava/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  rules: {
    // There is no "recommended" ruleset for tsdoc yet.
    "tsdoc/syntax": "warn",
  },
};
