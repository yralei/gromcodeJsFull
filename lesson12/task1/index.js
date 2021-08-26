const calc = (expression) => {
  const a = expression.split(' ');
  let res;
  switch (a[1]) {
    case '+':
      res = Number(a[0]) + +a[2];
      break;
    case '-':
      res = a[0] - a[2];
      break;
    case '*':
      res = a[0] * a[2];
      break;
    case '/':
      res = a[0] / a[2];
      break;
  }
  return expression + ' = ' + res;
};
console.log(calc('1 + 2'));
console.log(calc('10 - 2'));
console.log(calc('13 * 2'));
console.log(calc('100 / 3'));
