//input: arr
//output: num
const arr = [-777, 3, -1, 8, -54, 15];
const getMaxAbsoluteNumber = (arr) => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  }
  const absoluteValues = arr.map((el) => Math.abs(el));
  return Math.max(...absoluteValues);
};
console.log(getMaxAbsoluteNumber(arr));
