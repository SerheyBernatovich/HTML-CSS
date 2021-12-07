import { onCreateTask } from './creatTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const createBtnELem = document.querySelector('.create-task-btn');
  createBtnELem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};
