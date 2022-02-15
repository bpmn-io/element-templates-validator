import Ajv from 'ajv';
import addAjvErrors from 'ajv-errors';

export default function() {
  const ajvInstance = new Ajv({
    allErrors: true,
    strict: false,
    code: {
      source: true
    }
  });
  addAjvErrors(ajvInstance);

  return ajvInstance;
}