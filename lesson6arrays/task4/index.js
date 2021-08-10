function swap(array) {
  const [first, ...rest] = array;
  return [...rest, first];
}
// function swapManual(arr) {
//   const arr2 = arr.slice();
//   arr2.push(arr2[0]);
//   arr2.shift();
//   return arr2;

function swapManual(numbers) {
  let result = [];
  for (let i = 1; i < numbers.length; i++) {
    result[i - 1] = numbers[i];
  }
  // result[result.length] = (numbers[0]);
  return result;
}

// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
