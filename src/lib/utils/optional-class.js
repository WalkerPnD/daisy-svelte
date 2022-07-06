/**
 * Returns an optional class as a string.
 * @param {string} _prefix prefix to add
 * @param {string} [value] prefix to add
 */
export function optionalClass(_prefix, value) {
  const prefix = _prefix ? `${_prefix}-` : '';
  return value ? `${prefix}${value}` : '';
}