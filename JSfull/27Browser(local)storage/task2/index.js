const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChage = e => {
  const isButton = e.target.classList.contains('counter__button');
  if (!isButton) {
    return;
  }
  const { action } = e.target.dataset;
  const oldValue = Number(counterValueElem.textContent);
  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
  counterValueElem.textContent = newValue;
  localStorage.setItem('counterValue', newValue);
};
counterElem.addEventListener('click', onCounterChage);

const onStorageChange = e => {
  counterValueElem.textContent = e.newValue;
};
window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue');
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);
