function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((a, b) => a + b) / arr.length;
}
const numbers = [2, 5, 6, 3];
console.log(arrAverage(numbers));

function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = arr.reduce((acc, el) => acc + el, 0);
  return res / arr.length;
}
