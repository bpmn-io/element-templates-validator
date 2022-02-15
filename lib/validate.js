import createAjvInstance from './helper/createAjvInstance';

import schema from '@camunda/element-templates-json-schema/resources/schema.json';

const ajvInstance = createAjvInstance();

export default ajvInstance.compile(schema);
export const ajv = ajvInstance;