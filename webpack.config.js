const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts"],
  },
  output: {
    filename: "./src/Popup/content.js",
    path: path.resolve(__dirname, "..", "extension"),
  },
};