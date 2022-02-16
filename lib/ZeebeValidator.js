import { version as schemaVersion, name as schemaPackage } from '@camunda/zeebe-element-templates-json-schema/package.json';

import validateTemplate from './validateZeebe';

import { _validate, _validateAll } from './helper/validator';


export function getZeebeSchemaPackage() {
  return schemaPackage;
}

export function getZeebeSchemaVersion() {
  return schemaVersion;
}

/**
 * Validate a single object.
 *
 * @param {Object} object
 * @return {Object} single object validation result
 */
export function validateZeebe(object) {
  return _validate(object, validateTemplate);
}

/**
 * Validate a list of objects
 *
 * @param  {Object[]} objects
 * @return {Object} list validation result
 */
export function validateAllZeebe(objects) {
  return _validateAll(objects, validateZeebe);
}