/*
 * @Author: 卢天宇
 * @Date: 2022-11-17 21:40:28
 * @Description: 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index1.js',
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
    // host: '0.0.0.0',
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    port: 9527,
    compress: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  externals: {
    "react": 'React',
    "react-dom": 'ReactDOM'
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
      template: path.resolve(__dirname, './index.html'),
      // template: path.resolve(__dirname, './src/index.html'),
      // inject: 'body'
    }),
    new MiniCssExtractPlugin()
  ]
}