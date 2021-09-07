// draft solution

// const emailInputElem = document.querySelector('#email');
// const passwordInputElem = document.querySelector('#password');

// const emailErrorElem = document.querySelector('.error-text_email');
// const passwordErrorElem = document.querySelector('.error-text_password');

// const isRequired = (value) => (value ? undefined : 'Required');
// const isEmail = (value) =>
//   value.includes('@') ? undefined : 'Should be an email';

// const onEmailChange = (event) => {
//   const errorText = [isRequired, isEmail]
//     .map((validator) => validator(event.target.value))
//     // eslint-disable-next-line no-shadow
//     .filter((errorText) => errorText)
//     .join(', ');
//   emailErrorElem.textContent = errorText;
// };

// const onPasswordChange = (event) => {
//   const errorText = [isRequired]
//     .map((validator) => validator(event.target.value))
//     // eslint-disable-next-line no-shadow
//     .filter((errorText) => errorText)
//     .join(', ');
//   passwordErrorElem.textContent = errorText;
// };
// emailErrorElem.addEventListener('input', onEmailChange);
// passwordErrorElem.addEventListener('input', onPasswordChange);

//

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required');
const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};

const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};
emailErrorElem.addEventListener('input', onEmailChange);
passwordErrorElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formData));
};
formElem.addEventListener('submit', onFormSubmit);
