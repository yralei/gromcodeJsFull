// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4 Refactoring & final  testing -> final solution

// input: obj
// output: arr

// algo
// 1.create func
// 2. filter arr
// 3. map arr (return message)

// const event = {
//   guests: [
//     { name: 'John', age: 18, email: 'john@server.com' },
//     { name: 'Tom', age: 12, email: 'tom@server.com' },
//     { name: 'Ann', age: 21, email: 'ann@server.com' },
//   ],
//   message: 'Welcome to the party!',
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         email,
//         message: `Dear ${name}! ${this.message}`,
//       }));
//   },
// };
// console.log(event.getInvitations());

const event = {
  guests: [
    { name: 'Alex', age: 21, email: 'alex@gmail.com' },
    { name: 'Tim', age: 17, email: 'tim@gmail.com' },
    { name: 'Iurii', age: 31, email: 'iurii@gmail.com' },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
//console.log(event.getInvitations());
event.getInvitations();
