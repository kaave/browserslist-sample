const path = require('path');

const { browserslist } = require('../package.json');

const babelConfig = {
  presets: [
    [
      'env', {
        targets: {
          browsers: browserslist
        },
        debug: true
      }
    ]
  ],
  babelrc: false
};

module.exports = {
  entry: path.join(__dirname, '..', 'source', 'index.js'),
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'webpack.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      }
    ]
  }
};

