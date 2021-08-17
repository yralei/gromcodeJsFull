// function mapCallBack(value, index, array) {
//   console.log('mapCallBack', value, index, array);
//   return value + 2;
// }

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((value) => {
    if (value % 2 === 0) {
      return value + delta;
    }
    return value;
  });
}
console.log(increaseEvenEl([2, 5, 6, 8], 10));

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((value) => (value % 2 === 0 ? value + delta : value));
}
console.log(increaseEvenEl([2, 5, 6, 8], 10));
