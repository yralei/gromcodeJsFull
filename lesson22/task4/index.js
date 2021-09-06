const checkboxElem = document.querySelector('.task-status');
const checkboxElemFunc = () =>
  checkboxElem.checked ? console.log('true') : console.log('false');
checkboxElem.addEventListener('change', checkboxElemFunc);
