import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const buildScripts = [
  '*.js',
  '*.mjs',
  'tasks/**/*.js'
];

export default [
  {
    ignores: [
      'dist',
      '*.json',
      'tmp'
    ]
  },
  ...bpmnIoPlugin.configs.recommended.map(config => {
    return {
      ...config,
      ignores: buildScripts
    };
  }),
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: buildScripts
    };
  }),
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: [
        'test/**/*.js',
        'test/**/*.cjs'
      ]
    };
  })
];
