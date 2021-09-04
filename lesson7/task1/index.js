const getSpecialNumbers = (numbers) =>
  numbers.slice().filter((num) => num % 3 === 0);

const arr = [1, 3, 5, 7, 8, 56, 78, 98];
console.log(getSpecialNumbers(arr));
