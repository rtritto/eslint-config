module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    // There is no "recommended" ruleset for tsdoc yet.
    "tsdoc/syntax": "warn",
  },
};
