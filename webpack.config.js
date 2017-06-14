const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'docs/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, 'app/'),
        from: 'index.html',
        to: path.resolve(__dirname, 'docs'),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
