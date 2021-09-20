const baseUrl = 'https://61486eaf035b3600175b9e2d.mockapi.io/v1/users';

export function getUsersList() {
  return fetch(baseUrl).then((response) => response.json());
}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
}

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
}

export function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

// examples

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };
// const newUserData2 = {
//   email: 'dimon@email.com',
//   firstName: 'Dmitryi',
//   lastName: 'Babitskyi',
//   age: 25,
// };

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// getUserById('5').then((userData) => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// createUser(newUserData).then(() => {
//   console.log('User created');
// });
// createUser(newUserData2).then(() => {
//   console.log('User created');
// });

// updateUser('8', updatedUserData).then(() => {
//   console.log('User updated');
// });
// getUsersList().then((users) => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });
