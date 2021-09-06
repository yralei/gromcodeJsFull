const checkboxElem = document.querySelector('.task-status');
const checkboxElemFunc = () => {
  console.log(checkboxElem.checked);
  checkboxElem.checked ? console.log('true') : console.log('false');
};
checkboxElem.addEventListener('change', checkboxElemFunc);
