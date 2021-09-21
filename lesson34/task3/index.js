const baseUrl = 'https://61486eaf035b3600175b9e2d.mockapi.io/v1/users';
const errorTextElem = document.querySelector('.error-text');
const submitBtnElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

const validation = () => {
  const isValide = formElem.reportValidity();
  submitBtnElem.disabled = !isValide;
  return submitBtnElem.disabled;
};
// eslint-disable-next-line arrow-body-style
const addNewUser = (user) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
};

function onFormSubmit(e) {
  e.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  addNewUser(formData)
    .then((response) => response.json())
    .then((user) => {
      alert(JSON.stringify(user));
      formElem.reset();
      submitBtnElem.disabled = true;
    })
    .catch(() => {
      errorTextElem.textContent = 'Failed to create user';
      submitBtnElem.disabled = true;
    });
}
formElem.addEventListener('submit', onFormSubmit);
formElem.addEventListener('input', validation);
