import { calc } from './calculator.js';

it('return null if res string', () => {
  const res = calc(['string text']);
  expect(res).toEqual(null);
});
it('should return sum of numbers', () => {
  const sum = calc('6 + 6');
  expect(sum).toEqual('6 + 6 = 12');
});
it('should return result of subtraction', () => {
  const subtraction = calc('6 - 2');
  expect(subtraction).toEqual('6 - 2 = 4');
});
it('should return multiplication of numbers', () => {
  const multiplication = calc('6 * 6');
  expect(multiplication).toEqual('6 * 6 = 36');
});
it('should return division of numbers', () => {
  const division = calc('6 / 2');
  expect(division).toEqual('6 / 2 = 3');
});
it('should return null', () => {
  const res = calc(10);
  expect(res).toEqual(null);
});
