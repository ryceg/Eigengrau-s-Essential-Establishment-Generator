/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const ASSET_PATH_NAME = './src/Resources'

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
        { from: ASSET_PATH_NAME, to: ASSET_PATH_NAME }
      ]
    })
  ]
}
