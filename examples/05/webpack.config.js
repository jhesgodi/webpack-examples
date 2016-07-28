'use strict';

const webpack = require('webpack');

const webpackPort = 3000;

module.exports = {
  entry: {
    bundle: [
      'webpack/hot/only-dev-server', // This needs to be here!!!
      './src/main.js'
    ],
  },

  output: {
    path: './dist/',
    publicPath: `http://0.0.0.0:${webpackPort}/dist/`, // This is needed to make the magic work!!!
    filename: '[name].js'
  },

  devtool: '#eval-source-map',

  devServer: {
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: webpackPort, // You work on this one
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    proxy: {
      '*': `http://localhost:3001` // This is your server
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
