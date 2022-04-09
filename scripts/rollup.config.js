/* eslint-disable @typescript-eslint/no-var-requires */
const { default: esbuild } = require('rollup-plugin-esbuild')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')

const env = process.env.NODE_ENV
const isProduction = env === 'production'

const plugins = [
  json(),
  esbuild({
    minify: isProduction,
    target: 'es2018',
    define: {
      // avoids issues with the Node-specific variable `process`.
      'process.env.NODE_ENV': JSON.stringify(env),
      'preventAssignment': true
    }
  }),
  nodeResolve({ browser: true }),
  commonjs({ extensions: ['.js'] })
]

module.exports = [
  {
    input: 'src/main.ts',
    plugins,
    external: ['@lib'],
    output: { format: 'iife', file: 'src/init.js', globals: { '@lib': 'lib' }, sourcemap: 'inline' }
  },
  {
    input: 'lib/index.ts',
    external: ['rita'],
    plugins,
    output: { format: 'iife', file: './gh-pages/main.js', globals: { rita: 'RiTa' }, name: 'lib', sourcemap: true }
  },
  {
    input: 'lib/sentry.ts',
    plugins,
    output: { format: 'iife', file: './gh-pages/sentry.js', sourcemap: false }
  },
  {
    input: 'rita',
    plugins,
    output: { format: 'iife', file: './gh-pages/rita.js', name: 'RiTa', sourcemap: false }
  }
]
