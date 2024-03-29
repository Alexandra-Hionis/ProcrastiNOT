const path = require("path");

module.exports = {
  entry: "./assets/js/index.js", // Main entry point
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // Rule for processing SCSS files
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
