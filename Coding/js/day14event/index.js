const listElem = document.querySelector('.list');

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// Events
// 1 add event to the element
// 2 create event handlers

// list
// click
// input event
// output  undefined

// algo
// 0 get task id
// 1 find task by id
// 2 update task
// 3 re-render
function updateTaskHandler(event) {
  // console.dir(event.target.classList.contains('list__item-checkbox'));
  // console.log(event.target.getAttribute('type'));

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  //
  // const id = event.target.dataset.id;
  // console.log(id);
  const { id } = event.target.dataset;
  if (tasks.find(task => task.id === Number(id)).done) {
    tasks.find(task => task.id === Number(id)).done = false;
  } else {
    tasks.find(task => task.id === Number(id)).done = true;
  }
  renderTasks(tasks);
}

// input  string, func(callback)
// output  undefined
const res = listElem.addEventListener('click', updateTaskHandler);

// WEB FLOW
// 1 get data
// 2 render
// 3 update data, don't update DOM(!!!)
// 4 re-render
