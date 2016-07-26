'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ]
};

// Loaders
// - Styles
// - Handlebars

// Plugins
// - Dedupe
// - commonChunks
// - Uglify
