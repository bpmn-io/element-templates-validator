import { version as schemaVersion, name as schemaPackage } from '@camunda/element-templates-json-schema/package.json';

import validateTemplate from './validate';

import { _validate, _validateAll } from './helper/validator';


export function getSchemaVersion() {
  return schemaVersion;
}

export function getSchemaPackage() {
  return schemaPackage;
}

/**
 * Validate a single object.
 *
 * @param {Object} object
 * @return {Object} single object validation result
 */
export function validate(object) {
  return _validate(object, validateTemplate);
}

/**
 * Validate a list of objects
 *
 * @param  {Object[]} objects
 * @return {Object} list validation result
 */
export function validateAll(objects) {
  return _validateAll(objects, validate);
}