import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';

import pkg from './package.json';
import { createStandaloneValidator } from './tasks/createStandaloneValidator.js';


const srcEntry = pkg.source;

export default [
  {
    input: srcEntry,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    external: [
      'min-dash'
    ],
    plugins: [
      alias({
        entries: {
          './validate': createStandaloneValidator()
        }
      }),
      json(),
      nodeResolve(),
      commonjs()
    ]
  }
];
