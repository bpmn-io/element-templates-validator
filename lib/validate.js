import createAjvInstance from './helper/createAjvInstance.js';

import withErrorMessages from './helper/withErrors.js';

import schema from '@camunda/element-templates-json-schema/resources/schema.json' with { type: 'json' };
import errorMessages from '@camunda/element-templates-json-schema/resources/error-messages.json' with { type: 'json' };

const ajvInstance = createAjvInstance();

export default ajvInstance.compile(withErrorMessages(schema, errorMessages));
export const ajv = ajvInstance;