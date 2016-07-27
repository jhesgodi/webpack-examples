'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist/',
    filename: 'bundle.js'
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
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap', 'sass'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // Extracts the css in a different file
    new ExtractTextPlugin('bundle.css', { allChunks: true }),

    // Optimization configuration.
    // For more information: https://github.com/webpack/docs/wiki/optimization
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]
};

if (module.hot) {

}
