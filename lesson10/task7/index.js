'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  return [
    Math.floor(num * 10 ** prec) / 10 ** prec,
    Math.trunc(num * 10 ** prec) / 10 ** prec,
    Math.ceil(num * 10 ** prec) / 10 ** prec,
    Math.round(num * 10 ** prec) / 10 ** prec,
    +num.toFixed(prec),
  ];
};

// examples
//console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
//console.log(superRound(6.11555, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]

const superRound = (num, prec) => {
  return [
    Math.floor(num * 10) / 10 ** prec,
    Math.floor(num * 10 ** prec) / 10 ** prec,
    // Math.trunc(num * 10 ** prec),
    // Math.ceil(num * 10 ) / 10 ** prec,
    // Math.round(num * 10 ** prec) / 10 ,
    // +num.toFixed(prec),
  ];
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11555, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
