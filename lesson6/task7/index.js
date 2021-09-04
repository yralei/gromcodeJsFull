function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sum = arr.reduce((acc, el) => acc + el);
  return sum > 100;
}
console.log(checkSum([1, 10, 9, 200]));
