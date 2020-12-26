/* eslint-disable @typescript-eslint/no-var-requires */
const { default: babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const replace = require('@rollup/plugin-replace')
const json = require('@rollup/plugin-json')
const { terser } = require('rollup-plugin-terser')

const env = process.env.NODE_ENV
const isProduction = env === 'production'

const plugins = [
  // avoids issues with the Node-specific variable `process`.
  replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
  json(),
  babel({ extensions: ['.js', '.ts'], babelHelpers: 'bundled', sourceMaps: !isProduction }),
  nodeResolve({ browser: true }),
  commonjs({ extensions: ['.js', '.ts', '.json'] })
]

if (isProduction) {
  plugins.push(terser())
}

module.exports = [
  {
    input: 'src/main.ts',
    plugins,
    external: ['@lib'],
    output: { file: 'src/init.js', format: 'iife', globals: { '@lib': 'lib' } }
  },
  {
    input: 'lib/index.ts',
    plugins,
    output: { format: 'iife', name: 'lib', file: './gh-pages/main.js' }
  }
]
