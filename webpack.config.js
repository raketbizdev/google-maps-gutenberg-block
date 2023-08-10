const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  entry: {
    block: path.resolve(__dirname, "assets/js/block.js"),
  },
  output: {
    filename: "[name].build.js",
    path: path.resolve(__dirname, "assets/build"),
  },
};
