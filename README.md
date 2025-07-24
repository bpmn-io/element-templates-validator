# element-templates-validator

[![CI](https://github.com/bpmn-io/element-templates-validator/workflows/CI/badge.svg)](https://github.com/bpmn-io/element-templates-validator/actions?query=workflow%3ACI)

Validate element templates based on [JSON Schema](https://github.com/camunda/element-templates-json-schema).

## Installation

```sh
npm i --save @bpmn-io/element-templates-validator
```

## Usage

Given an [example element template](./test/fixtures/rpa-broken.json):

```js
import { validate } from '@bpmn-io/element-templates-validator';

import sample from './test/fixtures/rpa-broken.json';

const {
  valid,
  errors
} = validate(sample);

if (!valid) {
  console.error('Invalid JSON detected:', errors);
}
```

This will print detailed information about errors inside the sample:

```json
[
  {
    "keyword": "type",
    "dataPath": "",
    "schemaPath": "#/type",
    "params": {
      "type": "object"
    },
    "message": "must be object",
    "dataPointer": {
      "value": {
        "line": 0,
        "column": 0,
        "pos": 0
      },
      "valueEnd": {
        "line": 177,
        "column": 1,
        "pos": 4825
      }
    }
  }
  ...
]
```

You can also pass a stringified template to ensure that the `dataPointers` of the errors reflect the correct position in the original string.

```js
import { validate } from '@bpmn-io/element-templates-validator';

import { readFileSync } from 'node:fs';

const sample = readFileSync('./test/fixtures/rpa-broken.json', 'utf-8');

const {
  valid,
  errors
} = validate(sample);

if (!valid) {
  console.error('Invalid JSON detected:', errors);
}
```

If a parsed JSON object is passed, the `dataPointers` will assume that the source template is formatted with `JSON.stringify(template, null, 2)`.

It's also possible to validate multiple objects at once. In this case, the list of templates supports only objects, not strings.

```js
import { validateAll } from '@bpmn-io/element-templates-validator';

import samples from './test/fixtures/multiple-errors.json';

const {
  valid,
  results
} = validateAll(samples);

if (!valid) {
  console.error('Invalid JSON objects detected:', results.filter(r => !r.valid));
}
```

## License

MIT
