import { reverseArray, withdraw, getAdults } from './index.js';

it('should return null', () => {
  const result = reverseArray(10);
  expect(result).toEqual(null);
});
it('should return reverse of array', () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});
it('should return reverse array of sring', () => {
  const result = reverseArray(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  expect(result).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
});

// Withdraw ===================

it('should return 37', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
it('should return -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});
it('should return 400', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1000);
  expect(result).toEqual(400);
});

// getAdults ===================

it('should return adult person', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
it('should return empty object', () => {
  const result = getAdults({ 'John Doe': 12, Tom: 14, Bob: 17 });
  expect(result).toEqual({});
});
it('should return empty object', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
