const users = {
  Tom: 12,
  Dimitri: 35,
  Iurii: 25,
  Olga: 17,
};
//input: obj
//output: undefined
function getKeys(obj) {
  Object.keys(obj).forEach((key) => console.log(key));
}
console.log(getKeys(users));
