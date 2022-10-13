import { Plugin, RollupOptions } from 'rollup'
// TODO: Replace this when "rollup-plugin-esbuild" fixes their sourcemap issues.
import esbuild, { Options } from 'rollup-plugin-esbuild-transform'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import { partytownRollup } from '@builder.io/partytown/utils';
// import path from 'path'

const env = process.env.NODE_ENV
const isProduction = env === 'production'

const sharedOptions: Options = {
  minify: isProduction,
  target: 'es2016',
  define: {
    // Avoids issues with the Node-specific variable `process`.
    'process.env.NODE_ENV': JSON.stringify(env)
  }
}

const plugins: Plugin[] = [
  // partytownRollup({
  //   dest: path.join(__dirname, 'gh-pages', '~partytown'),
  // }),
  esbuild([
    { loader: 'json', ...sharedOptions },
    { loader: 'ts', ...sharedOptions }
  ]),
  nodeResolve({ browser: true }),
  commonjs({ extensions: ['.js', '.json'] })
]

export const configs: RollupOptions[] = [
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
