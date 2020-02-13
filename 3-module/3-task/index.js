/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let camelsizeArr = str;
  let newArr = camelsizeArr
               .split('-')
               .map((w, index) => index == 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))
               .join('');
  return newArr;
}
