import createAjvInstance from './helper/createAjvInstance';

import withErrorMessages from './helper/withErrors';

import schema from '@camunda/zeebe-element-templates-json-schema/resources/schema.json';
import errorMessages from '@camunda/zeebe-element-templates-json-schema/resources/error-messages.json';

const ajvInstance = createAjvInstance();

export default ajvInstance.compile(withErrorMessages(schema, errorMessages));
export const ajv = ajvInstance;