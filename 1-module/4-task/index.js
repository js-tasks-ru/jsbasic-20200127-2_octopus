/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const comparedStr = str.toLowerCase();
  if (comparedStr.includes('1xbet') || comparedStr.includes('xxx')) {
    return true;
  }
  return false;
}
