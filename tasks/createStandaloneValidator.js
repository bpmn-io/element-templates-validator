import standaloneCode from 'ajv/dist/standalone';
import { writeFileSync as writeFile, mkdirSync as mkdir } from 'fs';
import { join as pathJoin, dirname } from 'path';

import validate, { ajv } from '../lib/validate';

import validateZeebe, { ajv as zeebeAjv } from '../lib/validateZeebe';


export function createStandaloneValidator() {
  const code = standaloneCode(ajv, validate);
  const filePath = pathJoin('tmp', 'standaloneValidator.js');

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
  const filePath = pathJoin('tmp', 'standaloneZeebeValidator.js');

  try {
    mkdir(dirname(filePath));
  } catch (err) {

    // ignore; directory may already exist
  }

  writeFile(filePath, code);

  return filePath;
}