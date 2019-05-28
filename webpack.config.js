const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      setup: 'window.setup',
      passages: 'window.passages'
    }),
    new HtmlWebpackPlugin({
      template: './main.ejs'
    })
  ],
  resolveLoader: {
    alias: {
      'twine-loader': require.resolve(path.join(__dirname, './scripts/twine-loader.js'))
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tw(ee)?$/,
        use: 'twine-loader'
      }
    ]
  }
}
