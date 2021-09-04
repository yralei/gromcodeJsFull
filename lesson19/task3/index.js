// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4 Refactoring & final  testing -> final solution

// input:

function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAgeValue) {
  if (newAgeValue >= 25) {
    this.age = newAgeValue;
    this.requestNewPhoto();
  } else if (newAgeValue < 0) {
    return false;
  } else {
    this.age = newAgeValue;
  }
  return this.age;
};

const user1 = new User('Tom', 10);
const user2 = new User('Joe', 25);
const user3 = new User('Tom', 26);
const user4 = new User('Joe', -1);
const user5 = new User('Tom', -10);
const user6 = new User('Joe', 15);
console.log(user1.setAge(25));
console.log(user2.setAge(13));
console.log(user3.setAge(26));
console.log(user4.setAge(-1));
console.log(user5.setAge(-5));
console.log(user6.setAge(12));
// console.log(user1);
// user1.sayHi()
// user1.setAge();
console.log(user1.setAge());
