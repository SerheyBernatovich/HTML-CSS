const checkbox = document.querySelector('.task-status');
const clic = () => {
  console.log(checkbox.checked);
};

checkbox.addEventListener('change', clic);
