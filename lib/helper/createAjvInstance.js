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
  addWarningKeywords(ajvInstance);

  return ajvInstance;
}

/**
 * Register custom keywords that collect warnings without
 * affecting validation results.
 *
 * - `deprecated` (boolean): produces a "Value is deprecated" warning,
 *   or uses `deprecationWarning` message if provided alongside
 *
 * @param {Ajv} ajv
 */
function addWarningKeywords(ajv) {

  /**
   * Uses AJV code generation to push warning objects into a shared
   * scope-level array (via `gen.scopeValue`). The array is then exposed
   * on the root validate function as `validateFn.warnings`
   */

  const warnings = [];

  // --- deprecated --------------------------------------------------------

  ajv.removeKeyword('deprecated');

  ajv.addKeyword({
    keyword: 'deprecated',
    schemaType: 'boolean',
    code(cxt) {
      if (cxt.schema !== true) return;

      const message = cxt.parentSchema.deprecationWarning || 'Value is deprecated';

      pushWarning(cxt, warnings, 'deprecated', message);
    }
  });

  ajv.addKeyword({
    keyword: 'deprecationWarning',
    schemaType: 'string'
  });
}

/**
 * Emit a warning object via AJV code generation.
 *
 * @param {import('ajv').KeywordCxt} cxt
 * @param {Array} warnings shared warnings array
 * @param {string} keyword keyword name for the warning
 * @param {string} message human-readable warning text
 */
function pushWarning(cxt, warnings, keyword, message) {
  const { gen, it } = cxt;

  const warningsRef = gen.scopeValue('keyword', {
    ref: warnings,
    code: _`[]`
  });

  const warning = gen.const('warning', _`{
    keyword: ${keyword},
    instancePath: instancePath + ${it.errorPath},
    schemaPath: ${it.errSchemaPath + '/' + keyword},
    params: {},
    message: ${message}
  }`);

  gen.code(_`${warningsRef}.push(${warning})`);

  gen.code(_`${it.schemaEnv.root.validateName}.warnings = ${warningsRef}`);
}