import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';


const srcEntry = pkg.source;

export default [
  {
    input: srcEntry,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    external: [
      'min-dash',
      './validate',
      './validateZeebe'
    ],
    plugins: [
      json(),
      commonjs()
    ]
  },
  {
    input: 'lib/validate.js',
    output: [
      { file: 'dist/raw/validate.js', format: 'cjs' }
    ],
    plugins: [
      json(),
      commonjs()
    ]
  },
  {
    input: 'lib/validateZeebe.js',
    output: [
      { file: 'dist/raw/validateZeebe.js', format: 'cjs' }
    ],
    plugins: [
      json(),
      commonjs()
    ]
  }
];
