/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const dotenv = require('dotenv-webpack')
const copy = require('copy-webpack-plugin')
const html = require('html-webpack-plugin')
const css = require('mini-css-extract-plugin')

/* @type import('webpack').Configuration */

module.exports = {
  mode: 'development',
  stats: 'errors-warnings',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        use: [{ loader: 'babel-loader' }],
        test: /\.(tsx|ts|js)$/i,
        exclude: /node_modules/
      },
      {
        use: [{ loader: css.loader }, { loader: 'css-loader', options: { sourceMap: true } }],
        test: /\.css$/i
      },
      {
        use: [{ loader: 'file-loader', options: { outputPath: 'static/images' } }],
        test: /\.(png|jpg|jpeg|gif|svg)$/i
      },
      {
        use: [{ loader: 'file-loader', options: { outputPath: 'static/fonts' } }],
        test: /\.(ttf|otf|woff|woff2)$/i
      }
    ]
  },
  plugins: [
    new dotenv(),
    new copy([
      {
        from: path.resolve(__dirname, 'static'),
        to: path.resolve(__dirname, 'dist/static')
      }
    ]),
    new html({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new css({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[id].css'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'static'),
    historyApiFallback: true,
    port: 3000,
    watchContentBase: true
  }
}
