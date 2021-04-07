import {
  filter,
  forEach
} from 'min-dash';

import jsonMap from 'json-source-map';

import { version as schemaVersion } from '@camunda/element-templates-json-schema/package.json';

import validateTemplate from './validate';


export function getSchemaVersion() {
  return schemaVersion;
}

/**
 * Validate a single object.
 *
 * @param {Object} object
 * @return {Object} single object validation result
 */
export function validate(object) {
  const dataPointerMap = generateDataPointerMap(object);

  const valid = validateTemplate(object);

  let errors = validateTemplate.errors;

  if (errors && errors.length) {

    // @pinussilvestrus: the <ajv-errors> extensions produces a couple of
    // unnecessary errors when using an <errorMessage> attribute.
    // Therefore, we should flatten the produced errors a bit to not
    // confuse the consumer of this library.

    // (1) wrap raw errors in case of custom errorMessage attribute
    forEach(errors, wrapRawErrors);

    // (2) ignore supportive error messages (e.g. "if-then-rules")
    errors = ignoreSupportiveErrors(errors);

    // (3) set data pointer for each error
    forEach(errors, function(error) {
      setDataPointer(error, dataPointerMap);
    });
  }

  return {
    valid: valid,
    object: object,
    errors: errors
  };
}

/**
 * Validate a list of objects
 *
 * @param  {Object[]} objects
 * @return {Object} list validation result
 */
export function validateAll(objects) {

  const results = [];

  let allValid = true;

  forEach(objects, function(object) {
    const result = validate(object);

    if (!result.valid) {
      allValid = false;
    }

    results.push(result);
  });

  return {
    valid: allValid,
    results: results
  };
}


// helper //////////////
function wrapRawErrors(error) {
  const params = error.params;

  if (params && params.errors) {
    params.rawErrors = params.errors;
    delete params.errors;
  }
}

function setDataPointer(error, dataPointerMap) {
  const dataPath = error.dataPath;

  const pointer = dataPointerMap[dataPath];

  error.dataPointer = pointer;
}

function ignoreSupportiveErrors(errors) {
  return filter(errors, function(error) {
    return error.keyword !== 'if';
  });
}

/**
 * Generates a key-pointer map for the object.
 *
 * Example:
 *
 * {
 *  foo: 'bar'
 * }
 *
 * =>
 *
 * {
 *  '': {
 *    value: { line: 0, column: 0, pos: 0 },
 *    valueEnd: { line: 2, column: 1, pos: 18 }
 *  },
 *  '/foo': {
 *    key: { line: 1, column: 2, pos: 4 },
 *    keyEnd: { line: 1, column: 7, pos: 9 },
 *    value: { line: 1, column: 9, pos: 11 },
 *    valueEnd: { line: 1, column: 14, pos: 16 }
 *  }
 * }
 *
 * @param {Object} object
 * @return {Object}
 */
function generateDataPointerMap(object) {
  return jsonMap.stringify(object, null, 2).pointers;
}