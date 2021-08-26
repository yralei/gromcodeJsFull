const user = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}
console.log(addPropertyV1(user, '1234567'));
console.log(user);

function addPropertyV2(userData, userId) {
  let obj = { id: userId };
  return Object.assign(userData, obj);
}
console.log(addPropertyV2(user, '1234567'));
console.log(user);

function addPropertyV3(userData, userId) {
  let obj = { id: userId };
  return Object.assign({}, userData, obj);
}
console.log(addPropertyV3(user, '1234567'));
console.log(user);

function addPropertyV4(userData, userId) {
  const newObj = { ...userData };
  newObj.id = userId;
  return newObj;
}
console.log(addPropertyV4(user, '1234567'));
console.log(user);

// examples
const user = {
  name: 'Sam',
};
addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
