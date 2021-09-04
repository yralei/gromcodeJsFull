const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const fullNameArray = fullName.split(' ');
    this.firstName = fullNameArray[0];
    this.lastName = fullNameArray[1];
    return user;
  },
};
user.setFullName('iurii babitskyi');

user.setFullName();

user.setFullName('iurii babitskyi');
// console.log(user);

// setName(fullName) {
//  const fullNameArr = fullName.split(' ');
// this.firstName =fullNameArr[0];
// this.lastName = fullNameArr[1];
// return this;
// }
