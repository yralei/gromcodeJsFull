const reverseString = (expression) => {
  if (typeof expression !== 'string') {
    return null;
  }

  const res = expression.split('').reverse().join('');
  return res;
};
console.log(reverseString('Lviv'));
