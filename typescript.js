const common = require("./src/common");
const merge = require("lodash.merge");
const ts = require("./src/typescript");

module.exports = merge(common, ts);
