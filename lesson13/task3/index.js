const multiRound = (num) => {
  let multiRoundArr = [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    +num.toFixed(2),
  ];
  return multiRoundArr;
};

const number = -89.389469;
console.log(multiRound(number));
