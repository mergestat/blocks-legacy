/* eslint-disable import/no-extraneous-dependencies */
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import analyze from 'rollup-plugin-analyzer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-porter';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    analyze(),
    babel({
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [],
      exclude: [
        'node_modules/**',
        'src/**/*.stories.tsx',
        'src/__tests__/**/*',
      ],
      babelHelpers: 'bundled',
    }),
    commonjs({
      include: /node_modules/,
    }),
    css(),
    url(),
    peerDepsExternal(),
    svgr(),
    typescript(),
  ],
};
