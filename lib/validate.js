import Ajv from 'ajv';
import addAjvErrors from 'ajv-errors';

import schema from '@camunda/element-templates-json-schema/resources/schema.json';

const ajvInstance = new Ajv({
  allErrors: true,
  strict: false,
  code: {
    source: true
  }
});
addAjvErrors(ajvInstance);

export default ajvInstance.compile(schema);
export const ajv = ajvInstance;
