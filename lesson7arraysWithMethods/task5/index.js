function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((el) => el ** 2);
}
console.log(squareArray([1, 10, 9, 11]));
