// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4 Refactoring & final  testing -> final solution

export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => acc + Math.pow(elem, 2), 0);
}

console.log(sumOfSquares(4, 4, 4));
