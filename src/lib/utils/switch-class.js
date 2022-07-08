import { optionalClass } from './optional-class';

/**
 * Returns an optional class as a string.
 * @param {boolean} value prefix to add
 * @param {string} className prefix to add
 * @param {string} [_prefix] prefix to add
 */
export function switchClass(value, className, _prefix) {
	if (!value) return '';
	return optionalClass(className, _prefix);
}
/**
 * Returns an optional class as a string.
 * @param {string} [prefix] prefix to add
 */
export function createSwitchClass(prefix) {
	/**
	 * Returns an optional class as a string.
	 * @param {boolean} value prefix to add
	 * @param {string} className prefix to add
	 */
	return function (value, className) {
		return switchClass(value, className, prefix);
	};
}
