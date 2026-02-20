import Ajv, { _ } from 'ajv';
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
  addDeprecatedKeyword(ajvInstance);

  return ajvInstance;
}

/**
 * Register a custom `deprecated` keyword that collects deprecation
 * warnings without affecting validation results.
 *
 * @param {Ajv} ajv
 */
function addDeprecatedKeyword(ajv) {

  /**
   * Uses AJV code generation to push warning objects into a shared
   * scope-level array (via `gen.scopeValue`). The array is then exposed
   * on the root validate function as `validateFn.warnings`
   */

  ajv.removeKeyword('deprecated');

  const warnings = [];

  ajv.addKeyword({
    keyword: 'deprecated',
    schemaType: 'boolean',
    code(cxt) {
      if (cxt.schema !== true) return;

      const { gen, it } = cxt;

      const warningsRef = gen.scopeValue('keyword', {
        ref: warnings,
        code: _`[]`
      });

      const warning = gen.const('warning', _`{
        keyword: "deprecated",
        instancePath: instancePath + ${it.errorPath},
        schemaPath: ${it.errSchemaPath + '/deprecated'},
        params: {},
        message: "Value is deprecated"
      }`);

      gen.code(_`${warningsRef}.push(${warning})`);

      gen.code(_`${it.schemaEnv.root.validateName}.warnings = ${warningsRef}`);
    }
  });
}