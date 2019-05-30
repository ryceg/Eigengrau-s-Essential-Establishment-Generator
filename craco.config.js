const path = require('path')
const { DefinePlugin } = require('webpack')
const { addBeforeLoader, loaderByName } = require('@craco/craco')

module.exports = {
  eslint: {
    mode: 'file'
  },
  webpack: {
    configure: config => {
      // Load twine files before file-loader does.
      addBeforeLoader(config, loaderByName('file-loader'), {
        test: /\.tw(ee)?$/,
        use: 'twine-loader'
      })

      return {
        ...config,
        plugins: [
          ...config.plugins,
          new DefinePlugin({
            setup: 'window.setup',
            passages: 'window.passages'
          })
        ],
        resolve: {
          ...config.resolve,
          alias: {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom'
          }
        },
        resolveLoader: {
          ...config.resolveLoader,
          alias: {
            ...config.resolveLoader.alias,
            'twine-loader': require.resolve(
              path.join(__dirname, './scripts/twine-loader.js')
            )
          }
        }
      }
    }
  }
}
