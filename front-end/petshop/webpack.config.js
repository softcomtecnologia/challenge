const path = require("path");

module.exports = {
  output: {
    filename: "my-first-webpack.bundle.js",
  },
  module: {
    rules: [
      { test: /\.svg$/, use: "raw-loader" },
      { test: /\.png$/, use: "raw-loader" },
    ],
  },
};
