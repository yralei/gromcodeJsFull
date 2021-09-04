const sortDesc = (numbers) => numbers.slice().sort((a, b) => b - a);

const arr = [1, 3, 5, 7, 8, 56, 78, 98];
console.log(sortDesc(arr));
