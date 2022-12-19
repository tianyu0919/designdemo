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
    publicPath: '/',
    // path: path.resolve(__dirname, '../designdemo/src/design'),
    path: path.resolve(__dirname, './build'),
    // path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    // library: {
    //   type: 'umd',
    //   name: 'Demo'
    // }
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    // host: '0.0.0.0',
    // static: false,
    open: true,
    port: 9527,
    client: {
      logging: 'info'
    }
    // compress: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  // externals: {
  // "react": 'React',
  // "react-dom": 'ReactDOM'
  // },
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, './index.html'),
      template: path.resolve(__dirname, './public/index.html'),
      // inject: 'body'
    }),
  ]
}