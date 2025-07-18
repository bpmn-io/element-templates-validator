import {
  filter,
  forEach
} from 'min-dash';

import jsonMap from 'json-source-map';


export function _validate(jsonString, validateFn) {
  let dataPointerMap;

  try {
    dataPointerMap = generateDataPointerMap(jsonString);
  } catch (err) {
    return {
      valid: false,
      object: null,
      errors: [ err ]
    };
  }

  let object;

  object = JSON.parse(jsonString);

  const valid = validateFn(object);

  let errors = validateFn.errors;

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

export function _validateAll(objects, validateFn) {

  const results = [];

  let allValid = true;

  forEach(objects, function(object) {
    const result = validateFn(object);

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
  const dataPath = error.instancePath;

  const pointer = dataPointerMap[dataPath];

  error.dataPointer = pointer;
}

function ignoreSupportiveErrors(errors) {
  return filter(errors, function(error) {
    return error.keyword !== 'if';
  });
}

/**
 * Generates a key-pointer map for the JSON string.
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
 * @param {string} jsonString
 * @return {Object}
 */
function generateDataPointerMap(jsonString) {
  return jsonMap.parse(jsonString).pointers;
}