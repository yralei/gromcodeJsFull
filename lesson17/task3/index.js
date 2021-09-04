// function defer(func, ms) {
//   return function () {
//     setTimeout(func, ms);
//   };
// }
// const sayHi = () => {
//   console.log('Hi');
// };
// sayHi();

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'm ${this.name}!`);
  },
};

function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
const defferdHi = defer(user.sayHi, 3000);
defferdHi.call({ name: 'Bob' });
