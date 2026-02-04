import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    'dist',
    '*.json',
    'tmp'
  ],
  build: [
    '*.js',
    '*.mjs',
    'tasks/**/*.js'
  ],
  test: [
    'test/**/*.js',
    'test/**/*.cjs'
  ]
};


export default [
  {
    ignores: files.ignored
  },

  // lib
  ...bpmnIoPlugin.configs.recommended.map(config => {
    return {
      ...config,
      ignores: files.build
    };
  }),

  // build
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: files.build
    };
  }),

  // test
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: files.test
    };
  }),

  // all
  {
    languageOptions: {
      ecmaVersion: 2025
    }
  }
];
