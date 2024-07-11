import {readFileSync} from 'fs';
import * as path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';


const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url).pathname),
);
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

function generateConfig({output, targets, stylesConfig}) {
  return {
    input: './src/index.ts',
    plugins: [
      nodeResolve({extensions}),
      commonjs(),
      replace({
        '{{POLARIS_VERSION}}': pkg.version,
        delimiters: ['', ''],
        preventAssignment: true,
      }),
      image(),
      json({
        compact: true,
      }),
    ],
    output,
  };
}

/** @type {import('rollup').RollupOptions} */
export default [
  generateConfig({
    targets: 'extends @shopify/browserslist-config, node 12.20',
    stylesConfig: {
      mode: 'standalone',
      output: 'styles.css',
      modules: {
        globalModulePaths: [/global\.scss$/],
      },
    },
    output: [
      {
        format: 'cjs',
        dir: path.dirname(pkg.main),
        preserveModules: true,
        entryFileNames: '[name][assetExtname].js',
        exports: 'named',
      },
      {
        format: 'esm',
        dir: path.dirname(pkg.module),
        preserveModules: true,
        entryFileNames: '[name][assetExtname].js',
      },
    ],
  }),
  generateConfig({
    targets: 'last 1 chrome versions',
    stylesConfig: {
      mode: 'esnext',
      modules: {
        globalModulePaths: [/global\.scss$/],
      },
    },
    output: [
      {
        format: 'esm',
        dir: path.dirname(pkg.esnext),
        preserveModules: true,
        entryFileNames: '[name][assetExtname].esnext',
      },
    ],
  }),
];
