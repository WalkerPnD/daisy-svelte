/**
 * Returns an optional class as a string.
 * @param {string[]} classList prefix to add
 */
export function bindClasses(classList) {
  classList = classList.filter( it => !!it );
  return classList.join(' ');
}