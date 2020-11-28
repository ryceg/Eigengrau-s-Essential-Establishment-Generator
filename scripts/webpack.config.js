/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: './lib/index.ts',
  output: {
    library: 'lib',
    libraryTarget: 'var',
    path: path.resolve(__dirname, '../gh-pages')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/Resources'),
          to: path.resolve('./gh-pages/src/Resources')
        }
      ]
    })
  ]
}
