export const finishForm = () => {
  const loginForm = document.createElement('input');
  loginForm.setAttribute('name', 'login');
  loginForm.setAttribute('type', 'text');
  document.querySelector('.login-form').prepend(loginForm);
  document.querySelector('[name="password"]').setAttribute('type', 'password');
};
// console.log(finishForm());
