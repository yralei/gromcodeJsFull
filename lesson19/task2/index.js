// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4 Refactoring & final  testing -> final solution

// input: obj
// output: array

// algo:

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
};
Object.setPrototypeOf(ship, vehicle);
// ship.startMachine();
// ship.stopMachine();

function getOwnProps(obj) {
  let result = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      result.push(prop);
    }
  }
  return result;
}
console.log(getOwnProps(ship));
