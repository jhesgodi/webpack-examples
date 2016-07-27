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
        loaders: ['style', 'css?sourceMap', 'sass'],
        exclude: /node_modules/
      }
    ]
  }
};
