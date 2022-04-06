import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import analyze from 'rollup-plugin-analyzer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
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
    peerDepsExternal(),
    commonjs({
      include: /node_modules/,
    }),
    url(),
    svgr(),
    typescript(),
    babel({
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [
        [
          'styled-components',
          {
            ssr: true,
            displayName: false,
            preprocess: true,
          },
        ],
      ],
      exclude: [
        'node_modules/**',
        'src/**/*.stories.tsx',
        'src/__tests__/**/*',
      ],
      babelHelpers: 'bundled',
    }),
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
      ],
      minimize: true,
      sourceMap: 'inline',
    }),
  ],
};
