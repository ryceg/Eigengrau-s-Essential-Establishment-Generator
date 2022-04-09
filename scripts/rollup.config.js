/* eslint-disable @typescript-eslint/no-var-requires */
// TODO: Replace this until "rollup-plugin-esbuild" fixes their sourcemap issues.
const esbuild = require('rollup-plugin-esbuild-transform')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

const env = process.env.NODE_ENV
const isProduction = env === 'production'

const sharedOptions = {
  exclude: undefined,
  minify: isProduction,
  target: 'es2016',
  define: {
    // Avoids issues with the Node-specific variable `process`.
    'process.env.NODE_ENV': JSON.stringify(env)
  }
}

const plugins = [
  // json(),
  esbuild([
    { loader: 'json', ...sharedOptions },
    { loader: 'ts', ...sharedOptions }
  ]),
  nodeResolve({ browser: true }),
  commonjs({ extensions: ['.js', '.ts', '.json'] })
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
