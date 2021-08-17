const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    open: true,
    hot: true,
    port: 3001,
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            loader: "url-loader",
            options: { name: "assets/[hash].[ext]" },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "video",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
      }),
  ],
};
