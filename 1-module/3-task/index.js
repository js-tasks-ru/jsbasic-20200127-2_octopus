/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let NewStr = ' ';
  if (str.length < 2) {
    return NewStr = `${str.charAt(str.length - 1).toUpperCase()}`;
  }
  NewStr = `${str[0].toUpperCase() + str.slice(1)}`;
  return NewStr;
}
