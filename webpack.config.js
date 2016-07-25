module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [

    ]
  }
};

// Loaders
// - Babel
// - Styles
// - Handlebars

// Plugins
// - Dedupe
// - commonChunks
// - Uglify
