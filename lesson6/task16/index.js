function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.filter((el, index) => array.indexOf(el) === index);
}
console.log(removeDuplicates([2, 3, 7, 0, 9, 7]));
