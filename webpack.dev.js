const path = require('path')
const html = require('html-webpack-plugin')
const css = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/
      },
      {
        use: [css.loader, 'css-loader'],
        test: /\.css$/
      },
      {
        use: 'file-loader',
        test: /\.(png|jpg|jpeg|gif|svg|ttf|otf|woff)$/
      }
    ]
  },
  plugins: [
    new html({
      title: '<project_name>',
      meta: { description: '<project_description>' },
      template: path.resolve(__dirname, 'src', 'template.html')
    }),
    new css()
  ],
  devServer: {
    port: 3000,
    open: false,
    stats: 'errors-only',
    historyApiFallback: true
  }
}
