const input = document.querySelector('.text-input');

const handleClick = event => {
  console.log(event.target.value);
};

input.addEventListener('change', handleClick);
