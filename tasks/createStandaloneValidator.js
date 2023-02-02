/* eslint-env node */
const fs = require('fs');
const { default: standaloneCode } = require('ajv/dist/standalone');
const { join : pathJoin, dirname } = require('path');

const { writeFileSync: writeFile, mkdirSync: mkdir } = fs;

(function() {

  if (!fs.existsSync('dist/')) {
    console.log('build script has not run yet, exiting ...');
    return;
  }

  const { default: validate, ajv } = require('../dist/validate');
  const { default: validateZeebe, ajv: zeebeAjv } = require('../dist/validateZeebe');


  function createStandaloneValidator() {
    const code = standaloneCode(ajv, validate);
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
    const code = standaloneCode(zeebeAjv, validateZeebe);
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