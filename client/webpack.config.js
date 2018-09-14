'use strict';

const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: { main: ['./index.js'] },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/',
  },

  devServer: {
    port: 9000,
    publicPath: '/',
    contentBase: './build1',
    inline: true,
    hot: true,
    before: function(app) {
      app.get('/api/*', function(req, res) {
        //接口代理
      });
    },
  },

  devtool:
    process.env.NODE_ENV == 'development'
      ? 'cheap-module-inline-source-map'
      : false,
  mode: process.env.NODE_ENV,
  cache: true,
  target: 'web',
  performance: {
    hints: false,
    maxEntrypointSize: 250,
    maxAssetSize: 1000,
  },

  plugins: _.compact([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // process.env.NODE_ENV == 'development' &&
    //   new webpack.DllReferencePlugin({
    //     context: path.resolve(__dirname, './'),
    //     manifest: require(path.join(__dirname, './dll/manifest.json')),
    //   }),
    new CopyWebpackPlugin([
      // {
      //   from: path.join(__dirname, './dll'),
      //   to: path.join(__dirname, 'build/dll'),
      // },
      {
        from: path.join(__dirname, './icons'),
        to: path.join(__dirname, 'build/icons'),
      },
    ]),
    new HtmlWebpackPlugin({
      title: 'visual prototype tools',
      template: path.join(__dirname, './index.html'),
      excludeChunks: ['main'],
    }),
  ]),

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|build/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=1024',
      },
    ],
  },
};
