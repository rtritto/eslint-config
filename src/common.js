module.exports = {
  env: {
    node: true,
    es6: true,
    es2017: true,
  },
  parserOptions: {
    ecmaVersion: "2019",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  rules: {
    // Enforce strict mode with CommonJS.
    strict: "error",
  },
};
