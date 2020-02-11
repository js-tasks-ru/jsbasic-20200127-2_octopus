/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (let values in salaries) {
    if ((typeof salaries[values]) !== "number") {
      continue;
    } else {
      sum += salaries[values];
    }
  }
  return sum;
}
