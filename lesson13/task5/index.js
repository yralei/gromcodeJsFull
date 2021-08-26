//input: arr
//output: num
const priseList = [23, 57.567, 89.34, 66.21, -32.123];
const getTotalPrice = (arr) => {
  let sum = arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
  const sum2 = Math.floor(sum * 100) / 100;
  return '$' + sum2;
};
console.log(getTotalPrice(priseList));
