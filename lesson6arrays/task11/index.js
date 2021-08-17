function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return min + max > 1000;
}
console.log(checker([2, 5, 6, 8, 11, 9, 997]));
