const btn = document.querySelectorAll('.btn');
const btnArray = Array.from(btn);
console.log(btnArray);
const handleClick = (event) => {
  const text = event.target.textContent;
  console.log(text);
};
btnArray[0].addEventListener('click', handleClick);
btnArray[1].addEventListener('click', handleClick);
