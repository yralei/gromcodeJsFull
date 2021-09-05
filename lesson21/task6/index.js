// eslint-disable-next-line no-return-assign
export const setButton = (buttonText) =>
  (document.createElement('body').innerHTML = `<button>${buttonText}</button>`);
// console.log(setButton('Magic Button'));

// const setButton2 = (buttonText) => {
//   document.querySelector('body').textContent = `<button>${buttonText}</button>`;
// };

// setButton2('javascript');
