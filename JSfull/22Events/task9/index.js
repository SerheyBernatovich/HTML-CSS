const checkbox = document.querySelector('.task-status');

const handleClick = event => {
  console.log(event.target.checked);
};

checkbox.addEventListener('change', handleClick);
