'use strict';

const webpack = require('webpack');

const webpackPort = 3000;

module.exports = {
  entry: {
    bundle: [
      'webpack/hot/only-dev-server',
      './src/main.js'
    ],
  },

  output: {
    path: './dist/',
    publicPath: `http://0.0.0.0:${webpackPort}/dist/`, // This is needed to make the magic work!!!
    filename: 'bundle.js'
  },

  devtool: '#eval-source-map',

  devServer: {
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    port: webpackPort, // You work on this oneThis is the one from
    proxy: {
      '*': `http://localhost:3001` // This is your server
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
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
