// const listElem = document.querySelector('.list');

// const tasks = [
//   { text: 'Buy milk', done: false },
//   { text: 'Pick up Tom from airport', done: false },
//   { text: 'Visit party', done: false },
//   { text: 'Visit doctor', done: true },
//   { text: 'Buy meat', done: true },
// ];
// tasks.forEach((item, i) => {
//   item.id = i + 1;
// });

// const renderTasks = (tasksList) => {
//   listElem.innerHTML = '';
//   const tasksElems = tasksList
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done, id }) => {
//       const listItemElem = document.createElement('li');
//       listItemElem.classList.add('list__item');
//       const checkbox = document.createElement('input');
//       checkbox.setAttribute('type', 'checkbox');
//       checkbox.checked = done;
//       checkbox.dataset.id = id;
//       checkbox.classList.add('list__item-checkbox');
//       if (done) {
//         listItemElem.classList.add('list__item_done');
//       }
//       listItemElem.append(checkbox, text);

//       return listItemElem;
//     });

//   listElem.append(...tasksElems);
// };

// const createBtnElement = document.querySelector('.create-task-btn');
// const inputElement = document.querySelector('.task-input');

// function createTaskHandler() {
//   const inputElement = document.querySelector('.task-input');
//   const task = {
//     text: inputElement.value,
//     done: false,
//   };
//   if (inputElement.value === '') {
//     return;
//   }
//   tasks.push(task);
//   tasks.forEach((item, i) => {
//     item.id = i + 1;
//   });

//   renderTasks(tasks);
//   inputElement.value = '';
// }
// const createBtn = document.querySelector('.create-task-btn');
// createBtn.addEventListener('click', createTaskHandler);

// function updateTaskHandler(event) {
//   const clickedCheckbox = event.target.dataset.id;
//   tasks.forEach((el) => {
//     if (el.id === +clickedCheckbox) {
//       return el.done === false ? (el.done = true) : (el.done = false);
//     }
//   });
//   return renderTasks(tasks);
// }
// listElem.addEventListener('click', updateTaskHandler);

// renderTasks(tasks);
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4, 8, 900, 888));
// expected output: 10
