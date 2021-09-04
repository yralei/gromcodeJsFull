function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}

const array = [1, 2, 3, 4];
console.log(reverseArray(array));
console.log(array);
