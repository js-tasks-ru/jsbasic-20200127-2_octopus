/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let person of friends) {
    ul.innerHTML += `<li>${person.firstName} ${person.lastName}</li>`;
  }
  document.body.append(ul);
  return ul;
}
