const arr = [
  2,
  '1.3478rmvg',
  9,
  Infinity,
  7,
  613.998,
  'String',
  6,
  NaN,
  undefined,
];

const getParsedIntegers = (arr) => arr.map((el) => Number.parseInt(el));
console.log(getParsedIntegers(arr));

const getParsedIntegersV2 = (arr) => arr.map((el) => parseInt(el));
console.log(getParsedIntegersV2(arr));

const getParsedFloats = (arr) => arr.map((el) => Number.parseFloat(el));
console.log(getParsedFloats(arr));

const getParsedFloatsV2 = (arr) => arr.map((el) => parseFloat(el));
console.log(getParsedFloatsV2(arr));
