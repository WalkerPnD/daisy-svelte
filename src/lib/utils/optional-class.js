/**
 * Returns an optional class as a string.
 * @param {string} [value] prefix to add
 * @param {string} [_prefix] prefix to add
 */
export function optionalClass(value, _prefix) {
	if (!value) return '';
	const prefix = _prefix ? `${_prefix}-` : '';
	return value ? `${prefix}${value}` : '';
}

export function createOptionalClass(prefix) {
	return function (value) {
		return optionalClass(value, prefix);
	};
}
