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
  replace({
    'process.env.NODE_ENV': JSON.stringify(env),
    'preventAssignment': true
  }),
  json(),
  babel({ extensions: ['.js', '.ts'], babelHelpers: 'bundled' }),
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
    output: { format: 'iife', file: 'src/init.js', globals: { '@lib': 'lib' }, sourcemap: 'inline' }
  },
  {
    input: 'lib/index.ts',
    plugins,
    output: { format: 'iife', file: './gh-pages/main.js', name: 'lib', sourcemap: true }
  }
]
