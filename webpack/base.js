const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|mp3)$/i,
        use: "file-loader"
      },
      {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader',
          ],
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader',
          ],
        }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
    ]),
  ]
};
