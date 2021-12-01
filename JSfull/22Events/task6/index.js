const button = document.querySelector('.single-use-btn');

const clic = () => {
  console.log('clicked');
  button.removeEventListener('click', clic);
};

button.addEventListener('click', clic);
