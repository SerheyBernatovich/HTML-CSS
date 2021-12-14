const baseUrl = 'https://61b843c464e4a10017d18e3f.mockapi.io/api/v1/tasks'; // link to tasksList API

export const getTasksList = () => fetch(baseUrl).then(response => response.json()); // from this promise we getting array of tasks (objects)

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
export const updateTask = (id, value) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(value),
  });
