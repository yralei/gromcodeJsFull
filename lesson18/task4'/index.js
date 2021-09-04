// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4 Refactoring & final  testing -> final solution

// input: function
// output: function

const saveCalls = (func) => {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.call(this, ...args);
  }
  withMemory.calls = [];
  return withMemory;
};

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

console.log(testWithMemory.calls);

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemoty = saveCalls(user.sayHi);

console.log(methodWithMemoty.apply({ name: 'Tom' }));

console.log(methodWithMemoty.calls);
