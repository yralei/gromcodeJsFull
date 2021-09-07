const taskStatus = document.querySelector('.task-status');
const taskStatusFunc = (event) => {
  console.log(event.target.checked);
  const status = event.target.checked;
  console.log(status);
};
taskStatus.addEventListener('change', taskStatusFunc);
