//input numbers(length, from, to)
//output: arr
const getRandomNumbers = (length, from, to) => {
  let randomNumbers = [];
  if (to - from < 1) {
    return null;
  }
  for (let index = 0; index < length; index++) {
    let num = from + Math.random() * (to - from);
    console.log('number is =>' + num);
    if (num < 0) {
      randomNumbers.push(Math.floor(num));
    } else if (num > 0) {
      randomNumbers.push(Math.ceil(num));
    } else {
      return null;
    }
  }
  return randomNumbers;
};
// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
