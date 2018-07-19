"use strict";

const path = require("path");
const _ = require("lodash");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./"),
  entry: { main: ["./index.js"] },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./build"),
    publicPath: "/"
  },

  devServer: {
    port: 9000,
    publicPath: "/",
    contentBase: "./build1",
    inline: true,
    hot: true,
    before: function(app) {
      app.get("/api/*", function(req, res) {
        //接口代理
      });
    }
  },

  devtool:
    process.env.NODE_ENV == "development"
      ? "cheap-module-inline-source-map"
      : false,
  mode: process.env.NODE_ENV,
  cache: true,
  target: "web",
  performance: {
    hints: false,
    maxEntrypointSize: 250,
    maxAssetSize: 1000
  },

  plugins: _.compact([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    process.env.NODE_ENV == "development" &&
      new webpack.DllReferencePlugin({
        context: path.resolve(__dirname, "./"),
        manifest: require(path.join(__dirname, "./dll/manifest.json"))
      }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "./asset"),
        to: path.join(__dirname, "build/asset")
      },
      {
        from: path.join(__dirname, "./dll"),
        to: path.join(__dirname, "build/dll")
      }
    ]),
    new HtmlWebpackPlugin({
      title: "visual prototype tools",
      template: path.join(__dirname, "./index.html"),
      excludeChunks: ["main"]
    })
  ]),

  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        use: {
          loader: "ts-loader",
          options: {
            experimentalWatchApi: true,
            transpileOnly: true
          }
        },
        exclude: [/node_modules/, /\.scss.ts$/, /\.test.tsx?$/]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules|build/,
        loader: "babel-loader?cacheDirectory=true"
      },
      {
        test: /\.scss$/,
        enforce: "pre",
        exclude: [/node_modules/],
        use: [
          {
            loader: "@microsoft/loader-load-themed-styles" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[name]_[local]_[hash:base64:5]",
              minimize: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
