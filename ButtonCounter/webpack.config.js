const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/scripts.js',
  output: {
    path: path.resolve(__dirname, './build/js/'),
    filename: 'scripts.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: ['css-loader']
            })
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('../css/modules.css')
  ]
};