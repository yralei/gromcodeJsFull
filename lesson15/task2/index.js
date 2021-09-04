export const createCalculator = () => {
  let mem = 0;
  function add(num) {
    mem += num;
    return mem;
  }
  function decrease(num) {
    mem -= +num;
    return mem;
  }
  function reset() {
    mem = 0;
    return mem;
  }
  function getMemo() {
    return mem;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calc1 = createCalculator();
const calc2 = createCalculator();
console.log(calc1.add(5));
console.log(calc1.decrease(1));
console.log(calc2.add(7));
console.log(calc1.add(2));
