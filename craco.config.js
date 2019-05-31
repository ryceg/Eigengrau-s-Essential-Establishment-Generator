const path = require('path')
const webpack = require('webpack')
const craco = require('@craco/craco')
const cracoExtendScope = require('@dvhb/craco-extend-scope')
const merge = require('webpack-merge')

module.exports = {
  plugins: [
    {
      plugin: cracoExtendScope,
      options: { path: '' }
    }
  ],
  eslint: {
    mode: 'file'
  },
  webpack: {
    configure: config => {
      // Load twine files before file-loader does.
      craco.addBeforeLoader(config, craco.loaderByName('file-loader'), {
        test: /\.tw(ee)?$/,
        use: 'twine-loader'
      })

      return merge(config, {
        plugins: [
          new webpack.DefinePlugin({
            setup: 'window.setup',
            passages: 'window.passages'
          })
        ],
        resolve: {
          alias: {
            'react-dom': '@hot-loader/react-dom'
          }
        },
        resolveLoader: {
          alias: {
            'twine-loader': require.resolve(
              path.join(__dirname, './scripts/twine-loader.js')
            )
          }
        }
      })
    }
  }
}
