/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
const factorial = (num) => {
  let i = num;
  let result = num;

  if (i === 0) {
    return 1;
  }
  
  while (i > 1) {
    result *= (i - 1);
    i -= 1;
  }
  return result;
};