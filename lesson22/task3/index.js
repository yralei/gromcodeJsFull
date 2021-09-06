const inputElem = document.querySelector('.text-input');
const inputElemFunc = () => {
  console.log(inputElem.value);
};
inputElem.addEventListener('change', inputElemFunc);
