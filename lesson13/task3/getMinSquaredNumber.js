export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  return Math.min(...arr.map((el) => Math.abs(el) ** 2));
};
// console.log(getMinSquaredNumber('symon'));
// console.log(getMinSquaredNumber([]));
// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));
// console.log(getMinSquaredNumber(['lviv city']));
