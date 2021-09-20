const baseUrl = 'https://61486eaf035b3600175b9e2d.mockapi.io/v1/tasks';
// const mapTasks = (tasks) =>
//   tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
export const getTasksList = () =>
  fetch(baseUrl).then((response) => response.json());
// .then((tasks) => mapTasks(tasks));
export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, updatedTaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
