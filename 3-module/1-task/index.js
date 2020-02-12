/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let namesMap = data
    .filter((obj) => obj.age <= age)
    .map((obj) => obj.name);
  
  let salaryMap = data
    .filter((obj) => obj.age <= age)
    .map((obj) => obj.balance);
    
  let newArray = namesMap.map((e, i) => `${e}, ${salaryMap[i]}`);
  
  return (newArray.join('\n'));
}
