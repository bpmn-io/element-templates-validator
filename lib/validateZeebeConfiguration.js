import createAjvInstance from './helper/createAjvInstance.js';

import schema from '@camunda/zeebe-configuration-templates-json-schema/resources/schema.json' with { type: 'json' };

const ajvInstance = createAjvInstance();

export default ajvInstance.compile(schema);
export const ajv = ajvInstance;
