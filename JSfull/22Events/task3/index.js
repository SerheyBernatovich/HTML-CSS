const input = document.querySelector('.text-input');
const clic = () => {
  console.log(input.value);
};

input.addEventListener('change', clic);
