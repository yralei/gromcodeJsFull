function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.filter((el, index) => array.indexOf(el) === index).length;
}
console.log(uniqueCount([2, 3, 7, 0, 9, 7]));
