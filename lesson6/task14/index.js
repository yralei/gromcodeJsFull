'use strict';

const getSubArray = (arr, numberOfElements) => {
  return arr.slice(0, numberOfElements);
};
console.log(getSubArray([11, 4, 8, 3], 2));
console.log(getSubArray([1, 2, 3, 4, 5], 3));
