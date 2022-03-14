import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import { terser } from 'rollup-plugin-terser'
import svgr from '@svgr/rollup'
import json from '@rollup/plugin-json'

export default {
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    svgr({ titleProp: true }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      compact: true,
    }),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      preferBuiltins: true,
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
    commonjs({
      extensions: ['.js', '.ts'],
    }),
    terser(),
    json(),
  ],
}
