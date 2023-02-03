/* eslint-env node */
const fs = require('fs');
const { default: standaloneCode } = require('ajv/dist/standalone');
const { join : pathJoin, dirname } = require('path');

const { writeFileSync: writeFile, mkdirSync: mkdir } = fs;

(function() {

  // dist not built yet
  if (!fs.existsSync('dist/raw')) {
    return;
  }

  const validate = require('../dist/raw/validate');
  const validateZeebe = require('../dist/raw/validateZeebe');

  const ajv = validate.ajv;
  const zeebeAjv = validateZeebe.ajv;

  function createStandaloneValidator() {
    const code = standaloneCode(ajv, validate.default);
    const filePath = pathJoin('dist', 'validate.js');

    try {
      mkdir(dirname(filePath));
    } catch (err) {

    // ignore; directory may already exist
    }
    writeFile(filePath, code);

    return filePath;
  }

  function createStandaloneZeebeValidator() {
    const code = standaloneCode(zeebeAjv, validateZeebe.default);
    const filePath = pathJoin('dist', 'validateZeebe.js');

    try {
      mkdir(dirname(filePath));
    } catch (err) {

    // ignore; directory may already exist
    }

    writeFile(filePath, code);

    return filePath;
  }

  createStandaloneValidator();
  createStandaloneZeebeValidator();
})();