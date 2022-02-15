import createAjvInstance from './helper/createAjvInstance';

import schema from '@camunda/zeebe-element-templates-json-schema/resources/schema.json';

const ajvInstance = createAjvInstance();

export default ajvInstance.compile(schema);
export const ajv = ajvInstance;