import standaloneCode from 'ajv/dist/standalone/index.js';
import { writeFileSync as writeFile, mkdirSync as mkdir } from 'fs';
import { resolve, dirname } from 'path';

import validate, { ajv } from '../lib/validate.js';

import validateZeebe, { ajv as zeebeAjv } from '../lib/validateZeebe.js';

import validateZeebeConfiguration, { ajv as zeebeConfigurationAjv } from '../lib/validateZeebeConfiguration.js';


export function createStandaloneValidator() {
  const code = standaloneCode(ajv, validate);
  const filePath = resolve('tmp', 'standaloneValidator.js');

  try {
    mkdir(dirname(filePath));
  } catch (err) {

    // ignore; directory may already exist
  }

  writeFile(filePath, code);

  return filePath;
}

export function createStandaloneZeebeValidator() {
  const code = standaloneCode(zeebeAjv, validateZeebe);
  const filePath = resolve('tmp', 'standaloneZeebeValidator.js');

  try {
    mkdir(dirname(filePath));
  } catch (err) {

    // ignore; directory may already exist
  }

  writeFile(filePath, code);

  return filePath;
}

export function createStandaloneZeebeConfigurationValidator() {
  const code = standaloneCode(zeebeConfigurationAjv, validateZeebeConfiguration);
  const filePath = resolve('tmp', 'standaloneZeebeConfigurationValidator.js');

  try {
    mkdir(dirname(filePath));
  } catch (err) {

    // ignore; directory may already exist
  }

  writeFile(filePath, code);

  return filePath;
}