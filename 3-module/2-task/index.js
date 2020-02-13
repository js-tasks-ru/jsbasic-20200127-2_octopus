/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let newArr = str.split(' ');
  newArr = newArr.join().split(',');
  console.log(newArr.join().split(','));
  let minMaxArr = [];
  for (let element of newArr) {
    if (!isNaN(+element)) {
      minMaxArr.push(+element);
    }
  }
  console.log(minMaxArr);
  let result = {
    max: Math.max(...minMaxArr),
    min: Math.min(...minMaxArr),
  };
  return result;
}
