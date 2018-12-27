const path = require('path')
const html = require('html-webpack-plugin')
const copy = require('copy-webpack-plugin')
const clean = require('clean-webpack-plugin')
const css = require('mini-css-extract-plugin')
const webapp = require('webapp-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name]-[contenthash].bundle.js',
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new clean([path.resolve(__dirname, 'dist')]),
    new html({
      title: '<project_name>',
      meta: { description: '<project_description>' },
      template: path.resolve(__dirname, 'src', 'template.html')
    }),
    new css(),
    new webapp({
      logo: path.resolve(__dirname, 'public', 'logo.png'),
      favicons: {
        lang: 'ja',
        background: '#2e3440',
        theme_color: '#2e3440',
        icons: {
          coast: false,
          yandex: false
        }
      }
    })
  ]
}
