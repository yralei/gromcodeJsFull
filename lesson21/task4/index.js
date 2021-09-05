const getTitle = () => document.querySelector('.title').textContent;
console.log(getTitle());

const getDescription = () => document.querySelector('.about').innerText;
console.log(getDescription());

const getPlans = () => document.querySelector('.plans').innerHTML;
console.log(getPlans());

const getGoal = () => document.querySelector('.goal').outerHTML;
console.log(getGoal());
