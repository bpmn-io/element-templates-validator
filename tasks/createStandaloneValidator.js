/* eslint-env node */
const fs = require('fs');
const { default: standaloneCode } = require('ajv/dist/standalone');
const { join : pathJoin, dirname } = require('path');

const { writeFileSync: writeFile, mkdirSync: mkdir } = fs;

(function() {

  // dist not built yet
  if (!fs.existsSync('dist/')) {
    return;
  }

  const validate = require('../dist/validate');
  const validateZeebe = require('../dist/validateZeebe');

  const ajv = validate.ajv;
  const zeebeAjv = validateZeebe.ajv;

  // already standalone
  if (!ajv || !zeebeAjv) {
    return;
  }

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