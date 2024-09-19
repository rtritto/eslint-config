const _extends = ["./src/common"];

try {
  require.resolve("eslint-plugin-ava");
  _extends.push("./src/ava");
} catch {}

module.exports = {
  extends: _extends,
};
