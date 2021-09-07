const textInput = document.querySelector('.text-input');
const getInputText = (event) => {
  const text = event.target.value;
  console.log(text);
};
textInput.addEventListener('change', getInputText);
