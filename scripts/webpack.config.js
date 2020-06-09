/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

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
  }
}
