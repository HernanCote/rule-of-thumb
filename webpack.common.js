const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /'node_modules'/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react']
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000'
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin('dist')
  ]
};
