
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

const env = process.env.NODE_ENV
const isProduction = env === 'production'

const plugins = [
  // avoids issues with the Node-specific variable `process`.
  replace({
    'process.env.NODE_ENV': JSON.stringify(env),
    'preventAssignment': true
  }),
  json(),
  babel.babel({ extensions: ['.js', '.ts'], babelHelpers: 'bundled' }),
  nodeResolve({ browser: true }),
  commonjs({ extensions: ['.js', '.ts', '.json'] })
]

if (isProduction) {
  plugins.push(terser())
}

export default [
  {
    input: 'src/main.ts',
    plugins,
    external: ['@lib'],
    output: { file: 'src/init.js', format: 'iife', globals: { '@lib': 'lib' }, sourcemap: 'inline' }
  },
  {
    input: 'lib/index.ts',
    plugins,
    output: { file: './gh-pages/main.js', format: 'iife', name: 'lib', sourcemap: true }
  }
]
