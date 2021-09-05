export const createButton = (buttonText) => {
  const newButton = (document.createElement('button').textContent = buttonText);
  document.querySelector('body').append(newButton);
};
console.log(createButton('Super button'));
