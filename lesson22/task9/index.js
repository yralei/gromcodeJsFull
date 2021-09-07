const taskStatus = document.querySelector('.task-status');
const taskStatusFunc = (event) => {
  const status = event.target.checked;
  console.log(status);
};
taskStatus.addEventListener('change', taskStatusFunc);
