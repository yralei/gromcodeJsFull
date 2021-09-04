class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    const user = new User('', null);
    return user;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

const user1 = new User('Jack', 31);
const user2 = new User('Frank', 21);
// user1.sayHi();
// user1.requestNewPhoto();
// console.log(user1.setAge(12));
console.log(User.createEmpty);

console.log(User.createEmpty(user2));
