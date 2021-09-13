// compose
// const add3 = (value) => value + 3;
// const mult2 = (value) => value * 2;
// const div4 = (value) => value / 4;
// const add2 = (value) => value + 2;
// const square = (value) => value * value;
// const half = (value) => value / 2;

export const compose =
  (...functions) =>
  (value) =>
    functions.reduce((acc, func) => func(acc), value);
// const superFunc = compose(add3, mult2, div4, add2, square, half);
// console.log(superFunc(2));
// console.log(superFunc(100));
// console.log(superFunc(-1));
