const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

function mergeObjectsV1(obj1, obj2) {
  const newObj = Object.assign({}, obj1, obj2);
  return newObj;
}
console.log(mergeObjectsV1(obj1, obj2));
console.log(obj1);
console.log(obj2);

function mergeObjectsV2(obj1, obj2) {
  let res = Object.assign({}, obj2, obj1);
  return res;
}
console.log(mergeObjectsV2(obj1, obj2));
console.log(obj1);
console.log(obj2);

function mergeObjectsV3(obj1, obj2) {
  let peopleObj1 = { ...obj1 };
  let peopleObj2 = { ...obj2 };
  let res = { ...peopleObj1, ...peopleObj2 };
  return res;
}
console.log(mergeObjectsV3(obj1, obj2));
console.log(obj1);
console.log(obj2);

function mergeObjectsV4(obj1, obj2) {
  let peopleObj1 = { ...obj1 };
  let peopleObj2 = { ...obj2 };
  let res = { ...peopleObj2, ...peopleObj1 };
  return res;
}
console.log(mergeObjectsV4(obj1, obj2));
console.log(obj1);
console.log(obj2);

mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
