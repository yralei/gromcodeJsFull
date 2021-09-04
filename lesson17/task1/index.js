const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const func = user.getFullName.bind(user);
func();

// const func = user.getFullName;
// func.call({ firstName: 'John', lastName: 'Doe' });

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName(lastName) {
//     console.log(`${this.firstName} ${lastName}`);
//   },
// };
// const func = user.getFullName;
// func.apply({ firstName: 'John' }, ['Doe']);
