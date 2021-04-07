import standaloneCode from 'ajv/dist/standalone';
import { writeFileSync as writeFile, mkdirSync as mkdir } from 'fs';
import { join as pathJoin, dirname } from 'path';

import validate, { ajv } from '../lib/validate';


export function createStandaloneValidator() {
  const code = standaloneCode(ajv, validate);
  const filePath = pathJoin('tmp', 'standaloneValidator.js');

  try {
    mkdir(dirname(filePath));
  } catch {

    // directory may already exist
  }

  writeFile(filePath, code);

  return filePath;
}
