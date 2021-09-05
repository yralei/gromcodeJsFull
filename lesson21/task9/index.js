export const finishList = () => {
  const appendElement = document.createElement('li');
  appendElement.textContent = '8';
  document.querySelector('.list').append(appendElement);

  const prependElement = document.createElement('li');
  prependElement.textContent = '1';
  document.querySelector('.list').prepend(prependElement);

  const beforeElement = document.createElement('li');
  beforeElement.textContent = '4';
  document.querySelector('.special').before(beforeElement);

  const afterElement = document.createElement('li');
  afterElement.textContent = '6';
  document.querySelector('.special').after(afterElement);
};
// finishList();
