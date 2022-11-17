/*
 * @Author: 卢天宇
 * @Date: 2022-11-17 21:40:28
 * @Description: 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    clean: true,
    publicPath: './',
    // path: path.resolve(__dirname, '../designdemo/src/design'),
    path: path.resolve(__dirname, './dist'),
    filename: 'Demo.js',
    library: {
      type: 'umd',
      name: 'Demo'
    }
  },
  devtool: false,
  devServer: {
    hot: true,
    port: 9527,
    compress: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  externals: {
    // "react": 'react',
    // "react-dom": 'react-dom'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)?$/,
        use: "babel-loader"
      },
      {
        test: /.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      // inject: 'body'
    }),
    new MiniCssExtractPlugin()
  ]
}