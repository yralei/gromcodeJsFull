import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should return null', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});
it('should return null', () => {
  const result = getMinSquaredNumber('string text');
  expect(result).toEqual(null);
});
it('should return min squared number', () => {
  const result = getMinSquaredNumber([2, 4, -7, 6, 45, -20]);
  expect(result).toEqual(4);
});
