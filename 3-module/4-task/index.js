/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let newArr = [];
  users.forEach(user => newArr.push(user.name));
  return newArr;
}
