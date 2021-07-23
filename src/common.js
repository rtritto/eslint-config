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
    "plugin:ava/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  rules: {
    strict: "error",
  },
};
